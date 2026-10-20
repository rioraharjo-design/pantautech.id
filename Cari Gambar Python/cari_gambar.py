# -*- coding: utf-8 -*-
"""
Cari gambar laptop otomatis untuk website Pantau Tech.

Cara pakai (di folder yang sama dengan file ini):
    1. pip install ddgs pillow requests
    2. Isi daftar.txt: satu laptop per baris, format:  nama laptop | harga
       contoh:  Advan Pixwar | 11239000   ->  file "Advan Pixwar 11 Juta.jpg"
       (harga boleh ditulis 11239000, 11.239.000, Rp11.239.000, atau 11 juta; boleh juga dikosongkan)
    3. python cari_gambar.py

Hasil:
    hasil/<nama laptop> <X> Juta.jpg   -> gambar terbaik (siap di-convert ke webp)
    hasil/_kandidat/<nama laptop>/     -> 3 kandidat cadangan, contoh "Acer Swift Lite 14 11 Juta 2_skor0.95.jpg"
                                          (kalau dipakai, tinggal hapus " 2_skor0.95" di belakangnya)

Semua hasil disimpan sebagai JPG dengan background putih/solid (tidak transparan).
"""

import io
import os
import re
import sys
import time
from urllib.parse import urlparse

import requests
from PIL import Image, ImageStat

try:
    from ddgs import DDGS
except ImportError:  # versi lama
    from duckduckgo_search import DDGS

# ----------------------------------------------------------------------------
# PENGATURAN (boleh diubah)
# ----------------------------------------------------------------------------
FILE_DAFTAR = "daftar.txt"
FOLDER_HASIL = "hasil"
MAKS_HASIL_CARI = 40        # berapa hasil pencarian yang dilihat per laptop
MAKS_DOWNLOAD = 25          # berapa gambar yang dicoba download per laptop
LEBAR_MINIMAL = 500         # gambar lebih kecil dari ini dilewati
JUMLAH_KANDIDAT = 3         # kandidat cadangan yang disimpan
JEDA_ANTAR_LAPTOP = 3       # detik, biar tidak diblokir mesin pencari
BATAS_WAKTU_CARI = 20       # detik, naikkan kalau sering "TimeoutException"
ULANG_ELS = 3               # berapa kali coba ulang kalau els.id gagal/lemot
KANDIDAT_CUKUP = 3          # berhenti mencari kalau sudah dapat sebanyak ini gambar bagus (skor >= 0.6)

# Situs resmi merek -> diberi nilai tambah (gambarnya biasanya bersih)
SITUS_RESMI = [
    "acer.com", "lenovo.com", "hp.com", "asus.com", "msi.com", "dell.com",
    "axiooworld.com", "axioo.com", "advan.id", "infinixmobility.com",
    "tecno-mobile.com", "apple.com", "samsung.com", "microsoft.com",
    "psref.lenovo.com", "notebookcheck.net",
    # toko yang gambarnya biasanya bersih
    "els.id",
]
# Marketplace / situs promo -> dilewati (gambarnya sering ada stiker promo)
SITUS_DILEWATI = [
    "shopee", "susercontent", "tokopedia", "tokopedia-static", "lazada",
    "slatic", "blibli", "bukalapak", "jd.id", "aliexpress", "alicdn",
    "amazon", "ebay", "pinterest", "facebook", "fbcdn", "instagram",
    "tiktok", "youtube", "ytimg",
]
# Kata di judul/nama file yang berarti BUKAN laptop yang dicari -> dilewati
KATA_BUKAN_LAPTOP = [
    "mouse", "keyboard", "headset", "headphone", "earphone", "speaker", "tas", "bag",
    "backpack", "ransel", "sleeve", "monitor", "charger", "adaptor", "adapter", "skin",
    "garskin", "casing", "cooling pad", "stand", "webcam", "printer", "flashdisk",
    "poster", "banner", "promo", "logo",
]
# Kata untuk laptop lipat 360 -> dilewati, kecuali nama laptop di daftar memang mengandung kata ini
KATA_LIPAT = ["spin", "flip", "x360", "2-in-1", "2in1", "2 in 1", "convertible", "detachable", "fold"]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"
}


# ----------------------------------------------------------------------------
# Pencarian
# ----------------------------------------------------------------------------
BACKEND_MATI = set()   # mesin pencari yang terus gagal tidak dipakai lagi sampai skrip selesai


def cari(query, region):
    """Cari gambar pakai Bing lalu DuckDuckGo, coba ulang kalau gagal/timeout."""
    semua = []
    for backend in ("bing", "duckduckgo"):
        if backend in BACKEND_MATI:
            continue
        for percobaan in range(2):
            try:
                with DDGS(timeout=BATAS_WAKTU_CARI) as d:
                    hasil = d.images(query, region=region, safesearch="moderate",
                                     max_results=MAKS_HASIL_CARI, backend=backend) or []
                semua.extend(hasil)
                break
            except Exception as e:  # noqa: BLE001
                if percobaan == 1:
                    BACKEND_MATI.add(backend)
                    print(f"   ! {backend} terus gagal ({e.__class__.__name__}), tidak dipakai lagi untuk sisa daftar")
                else:
                    print(f"   ! {backend} gagal ({e.__class__.__name__}), coba lagi 5 detik...")
                    time.sleep(5)
    return semua


def cari_els(nama):
    """Ambil gambar langsung dari galeri els.id (gambar katalognya bersih)."""
    kata = [k for k in nama.split() if k.lower() != "laptop"]
    # els.id sering menamai gambar tanpa merek ("Pongo 735", bukan "Axioo Pongo 735"),
    # jadi coba dengan merek dan tanpa merek, lalu dipendekkan dari belakang.
    daftar_q = []
    for awal in (0, 1):
        for n in range(len(kata), awal + 1, -1):
            potong = kata[awal:n]
            # jangan dipendekkan sampai nomor seri hilang ("Acer Nitro V15" boleh, "Acer Nitro" tidak)
            if (awal > 0 or n < len(kata)) and not any(re.search(r"\d", k) for k in potong):
                break
            if len(potong) >= 2 and " ".join(potong) not in daftar_q:
                daftar_q.append(" ".join(potong))
    # urutkan: nama lengkap dulu, lalu bergantian
    for q in daftar_q:
        data = None
        for percobaan in range(ULANG_ELS):
            try:
                r = requests.get("https://els.id/wp-json/wp/v2/media",
                                 params={"search": q, "per_page": 20,
                                         "_fields": "source_url,title,mime_type"},
                                 headers=HEADERS, timeout=20)
                if r.status_code == 200:
                    data = r.json()
                    break
                masalah = f"status {r.status_code}"
            except Exception as e:  # noqa: BLE001
                masalah = e.__class__.__name__
            tunggu = 5 * (percobaan + 1)
            print(f"   ! els.id gagal ({masalah}), coba lagi {tunggu} detik... ({percobaan + 1}/{ULANG_ELS})")
            time.sleep(tunggu)
        if data is None:
            print("   ! els.id tetap gagal, pindah ke pencarian biasa")
            return []
        hasil = []
        for m in data if isinstance(data, list) else []:
            judul = (m.get("title") or {}).get("rendered", "").lower()
            url = m.get("source_url", "")
            if not str(m.get("mime_type", "")).startswith("image/"):
                continue
            if judul_ditolak(nama, judul, url.rsplit("/", 1)[-1]):
                continue
            hasil.append({"image": url, "url": "https://els.id/", "title": judul})
        if hasil:
            # foto utama (tampak depan) biasanya nama filenya paling pendek, tanpa akhiran -2, -3, dst
            pendek = min(len(h["image"].rsplit("/", 1)[-1]) for h in hasil)
            for h in hasil:
                h["utama"] = len(h["image"].rsplit("/", 1)[-1]) == pendek
            print(f"   els.id: {len(hasil)} gambar untuk '{q}'")
            return hasil
    print("   els.id: tidak ketemu, lanjut cari di internet")
    return []


def _rapikan(t):
    return " " + re.sub(r"[_\-/.]+", " ", (t or "").lower()) + " "


def judul_ditolak(nama, *teks):
    """True kalau judul/nama file menunjukkan bukan laptop yang dicari (mouse, tas, versi 360, dll)."""
    gabung = _rapikan(" ".join(t for t in teks if t))
    nama_r = _rapikan(nama)
    for k in KATA_BUKAN_LAPTOP:
        if f" {k} " not in nama_r and re.search(r"\b" + re.escape(k) + r"\b", gabung):
            return True
    lipat = [_rapikan(k).strip() for k in KATA_LIPAT]
    if any(f" {k} " in nama_r for k in lipat):   # yang dicari memang laptop lipat
        return False
    return any(re.search(r"\b" + re.escape(k) + r"\b", gabung) for k in lipat)


def domain(url):
    try:
        return urlparse(url).netloc.lower()
    except Exception:  # noqa: BLE001
        return ""


def dilewati(url):
    d = domain(url)
    return any(k in d for k in SITUS_DILEWATI)


def situs_resmi(url):
    d = domain(url)
    return any(d.endswith(k) or ("." + k) in d for k in SITUS_RESMI)


# ----------------------------------------------------------------------------
# Pengolahan gambar
# ----------------------------------------------------------------------------
def ratakan_ke_putih(img):
    """Kalau gambar transparan, tempel di atas background putih."""
    punya_alpha = img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info)
    if punya_alpha:
        img = img.convert("RGBA")
        alpha = img.split()[3]
        if alpha.getextrema()[0] < 250:  # memang ada bagian transparan
            latar = Image.new("RGB", img.size, (255, 255, 255))
            latar.paste(img, mask=alpha)
            return latar, True
    return img.convert("RGB"), False


def cek_bentuk(img):
    """
    Hasil: (porsi_layar_atas, rasio_bentuk_barang, tekstur_atas)
      - porsi_layar_atas: seberapa banyak bagian atas barang berupa layar (gelap/berwarna).
      - rasio_bentuk_barang: lebar/tinggi barangnya. Laptop melebar (>1), mouse memanjang (<1).
      - tekstur_atas: seberapa 'ramai' garisnya bagian atas. Keyboard (foto dari atas) ramai,
        tutup laptop (tampak belakang) halus.
    """
    import colorsys
    k = img.copy()
    k.thumbnail((240, 240))
    w, h = k.size
    px = k.load()
    tepi = [px[x, y] for x in range(w) for y in (0, 1, h - 1, h - 2)] + \
           [px[x, y] for y in range(h) for x in (0, 1, w - 1, w - 2)]
    latar = tuple(sum(p[i] for p in tepi) / len(tepi) for i in range(3))
    barang = [(x, y) for y in range(h) for x in range(w)
              if sum(abs(px[x, y][i] - latar[i]) for i in range(3)) > 60]
    if len(barang) < 50:
        return 0.0, 0.0, 0.0
    xs = [p[0] for p in barang]
    ys = [p[1] for p in barang]
    tengah = (min(ys) + max(ys)) / 2
    atas = [(x, y) for (x, y) in barang if y <= tengah]

    def layar(c):
        r, g, b = (v / 255 for v in c)
        _, s_, v = colorsys.rgb_to_hsv(r, g, b)
        return v < 0.35 or (s_ > 0.35 and v > 0.25)

    porsi = sum(1 for (x, y) in atas if layar(px[x, y])) / max(1, len(atas))
    rasio = (max(xs) - min(xs) + 1) / (max(ys) - min(ys) + 1)
    abu = k.convert("L").load()
    garis = sum(1 for (x, y) in atas if 0 < x < w - 1 and 0 < y < h - 1 and
                abs(abu[x + 1, y] - abu[x - 1, y]) + abs(abu[x, y + 1] - abu[x, y - 1]) > 40)
    tekstur = garis / max(1, len(atas))
    return porsi, rasio, tekstur


def nilai_gambar(img):
    """
    Nilai 0..1, makin tinggi makin 'bersih':
      - pinggiran gambar warnanya seragam (background polos)
      - area luar tidak banyak 'barang' (stiker promo, teks, logo)
      - bentuk landscape wajar
      - sedikit warna mencolok di pinggiran (merah/oranye promo)
    """
    kecil = img.copy()
    kecil.thumbnail((300, 300))
    w, h = kecil.size
    px = kecil.load()

    # 1) pinggiran tipis (3%) -> warna latar
    t = max(2, int(min(w, h) * 0.03))
    pinggir = []
    for x in range(w):
        for y in list(range(t)) + list(range(h - t, h)):
            pinggir.append(px[x, y])
    for y in range(t, h - t):
        for x in list(range(t)) + list(range(w - t, w)):
            pinggir.append(px[x, y])
    n = len(pinggir)
    rata = tuple(sum(p[i] for p in pinggir) / n for i in range(3))
    sd = (sum(sum((p[i] - rata[i]) ** 2 for i in range(3)) for p in pinggir) / (3 * n)) ** 0.5
    seragam = max(0.0, 1 - sd / 35)

    # 2) area luar (15%) yang beda dari warna latar = 'barang' di pinggir
    t2 = max(3, int(min(w, h) * 0.15))
    beda = total = mencolok = 0
    for y in range(h):
        for x in range(w):
            if t2 <= x < w - t2 and t2 <= y < h - t2:
                continue
            r, g, b = px[x, y]
            total += 1
            if abs(r - rata[0]) + abs(g - rata[1]) + abs(b - rata[2]) > 90:
                beda += 1
            mx, mn = max(r, g, b), min(r, g, b)
            if mx > 120 and (mx - mn) / (mx + 1) > 0.55:
                mencolok += 1
    bersih_luar = 1 - min(1.0, (beda / total) / 0.45)
    tanpa_promo = 1 - min(1.0, (mencolok / total) / 0.08)

    # 3) bentuk
    rasio = w / h
    bentuk = 1.0 if 0.95 <= rasio <= 1.9 else 0.6

    # 4) latar putih/terang (gaya katalog) sangat diutamakan, foto latar gelap dihukum
    kecerahan = sum(rata) / 3
    terang = 1.0 if kecerahan > 225 else (0.9 if kecerahan > 190 else 0.55)

    # 5) jangan foto dari atas (layar tidak kelihatan + bagian atas penuh keyboard).
    #    Tampak belakang (tutup laptop halus) tetap boleh. Bentuknya harus melebar seperti laptop.
    porsi_layar, rasio_barang, tekstur_atas = cek_bentuk(img)
    dari_atas = porsi_layar < 0.35 and tekstur_atas >= 0.12
    faktor_layar = 0.4 if dari_atas else 1.0
    faktor_barang = 1.0 if rasio_barang >= 0.95 else 0.3

    return round((0.4 * seragam + 0.3 * bersih_luar + 0.3 * tanpa_promo)
                 * bentuk * terang * faktor_layar * faktor_barang, 3)


def download(url, halaman=""):
    """Hasil: (gambar, None) kalau berhasil, atau (None, alasan) kalau gagal."""
    headers = dict(HEADERS)
    if halaman:
        headers["Referer"] = halaman
    try:
        r = requests.get(url, headers=headers, timeout=15)
        if r.status_code != 200:
            return None, f"ditolak situs ({r.status_code})"
        if len(r.content) < 8_000:
            return None, "file terlalu kecil"
        img = Image.open(io.BytesIO(r.content))
        img.load()
        return img, None
    except Exception as e:  # noqa: BLE001
        return None, f"gagal download ({e.__class__.__name__})"


def nama_file(teks):
    return re.sub(r'[\\/:*?"<>|]+', "", teks).strip()


# ----------------------------------------------------------------------------
# Proses satu laptop
# ----------------------------------------------------------------------------
def baca_harga(teks):
    """'11239000' / '11.239.000' / 'Rp11.239.000' / '11 juta' / '11,2 juta' -> angka rupiah (atau None)."""
    t = teks.lower().replace("rp", "").strip()
    if not t:
        return None
    if "juta" in t or "jt" in t:
        angka = re.sub(r"[^0-9,\.]", "", t).replace(",", ".")
        try:
            return int(float(angka) * 1_000_000)
        except ValueError:
            return None
    digit = re.sub(r"[^0-9]", "", t)
    return int(digit) if digit else None


def label_harga(rupiah):
    """11239000 -> '11 Juta' (dibulatkan ke bawah, seperti folder LAPTOP X JUTA)."""
    return f"{rupiah // 1_000_000} Juta"


def proses(nama, harga=None):
    print(f"\n> {nama}")
    pencarian = [
        (f"{nama} laptop", "id-id"),
        (f"{nama}", "id-id"),
        (f"{nama} laptop", "wt-wt"),
    ]
    sudah = set()
    kandidat = []
    alasan = {}

    # langkah 1: els.id dulu, baru mesin pencari kalau belum dapat yang bagus
    langkah = [("els", None)] + list(pencarian)
    for query, region in langkah:
        hasil = cari_els(nama) if query == "els" else cari(query, region)
        # situs resmi/bersih di depan, marketplace dibuang
        baru = []
        for h in hasil:
            url = h.get("image")
            if not url or url in sudah:
                continue
            sudah.add(url)
            if dilewati(url) or dilewati(h.get("url", "")):
                alasan["marketplace dilewati"] = alasan.get("marketplace dilewati", 0) + 1
                continue
            if judul_ditolak(nama, h.get("title", ""), url.rsplit("/", 1)[-1]):
                alasan["bukan laptop / versi lain"] = alasan.get("bukan laptop / versi lain", 0) + 1
                continue
            baru.append(h)
        baru.sort(key=lambda h: 0 if (situs_resmi(h.get("url", "")) or situs_resmi(h["image"])) else 1)

        for h in baru[:MAKS_DOWNLOAD]:
            img, gagal = download(h["image"], h.get("url", ""))
            if img is None:
                alasan[gagal] = alasan.get(gagal, 0) + 1
                continue
            img, tadinya_transparan = ratakan_ke_putih(img)
            if img.width < LEBAR_MINIMAL:
                alasan["gambar terlalu kecil"] = alasan.get("gambar terlalu kecil", 0) + 1
                continue
            skor = nilai_gambar(img)
            if situs_resmi(h.get("url", "")) or situs_resmi(h["image"]):
                skor += 0.1
            if h.get("utama"):
                skor += 0.05
            kandidat.append((skor, img, h["image"], tadinya_transparan))
            print(f"   - skor {skor:.2f}  {domain(h['image'])}{'  (transparan -> putih)' if tadinya_transparan else ''}")

        bagus = sum(1 for k in kandidat if k[0] >= 0.6)
        if (query == "els" and bagus >= 1) or bagus >= KANDIDAT_CUKUP:
            break

    if alasan:
        print("   (info: " + ", ".join(f"{k}: {v}" for k, v in alasan.items()) + ")")
    if not kandidat:
        print("   x tidak ada gambar yang lolos")
        return False

    kandidat.sort(key=lambda k: k[0], reverse=True)
    nf = nama_file(nama + (" " + label_harga(harga) if harga else ""))
    os.makedirs(FOLDER_HASIL, exist_ok=True)
    kandidat[0][1].save(os.path.join(FOLDER_HASIL, nf + ".jpg"), "JPEG", quality=92)

    folder_k = os.path.join(FOLDER_HASIL, "_kandidat", nf)
    os.makedirs(folder_k, exist_ok=True)
    for i, (skor, img, url, _) in enumerate(kandidat[1:JUMLAH_KANDIDAT + 1], start=2):
        img.save(os.path.join(folder_k, f"{nf} {i}_skor{skor:.2f}.jpg"), "JPEG", quality=90)
    catatan = "  <- skor rendah, cek manual ya" if kandidat[0][0] < 0.6 else ""
    print(f"   v disimpan: {nf}.jpg (skor {kandidat[0][0]:.2f}){catatan}")
    return True


def main():
    if not os.path.exists(FILE_DAFTAR):
        print(f"File {FILE_DAFTAR} tidak ada. Buat dulu, isi satu laptop per baris: nama | harga")
        sys.exit(1)
    with open(FILE_DAFTAR, encoding="utf-8") as f:
        daftar = [b.strip() for b in f if b.strip() and not b.strip().startswith("#")]

    sukses = gagal = 0
    for i, baris in enumerate(daftar):
        nama, _, teks_harga = baris.partition("|")
        nama = nama.strip()
        harga = baca_harga(teks_harga)
        if teks_harga.strip() and harga is None:
            print(f"\n! harga '{teks_harga.strip()}' untuk {nama} tidak terbaca, nama file tanpa harga")
        if proses(nama, harga):
            sukses += 1
        else:
            gagal += 1
        if i < len(daftar) - 1:
            time.sleep(JEDA_ANTAR_LAPTOP)
    print(f"\nSelesai: {sukses} berhasil, {gagal} gagal. Cek folder '{FOLDER_HASIL}'.")


if __name__ == "__main__":
    main()
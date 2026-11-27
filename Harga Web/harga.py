"""
HARGA WEBSITE DARI HARGA SHOPEE WEB

Harga di website Pantau Tech = perkiraan harga aplikasi Shopee HP + buffer.
Perkiraan HP dihitung dari harga Shopee WEB yang dicatat Claude Chrome,
jadi gak perlu screenshot satu-satu di HP.

CARA PAKAI
  1. Klik dua kali "1 Bikin Prompt.bat"
     -> bikin file "Prompt Cek Harga 1.txt", "2", dst (maks 20 link per file)
        dan daftar_cek.json (nomor link -> laptop). Jangan edit daftar_cek.json.
  2. Kasih tiap prompt ke Claude Chrome. Tempel SEMUA hasilnya (tabel) ke
     file "hasil.txt" di folder ini (boleh ditempel berurutan dalam satu file).
  3. Klik dua kali "2 Hitung Harga.bat"
     -> products.js di folder utama langsung diubah, dan muncul daftar
        perubahan + link yang diarsipkan/habis/varian beda buat dicek manual.
  4. Naikin angka ?v= di index.html dan toko.html, ganti tanggal "Stok terakhir
     dicek", lalu push.

RUMUS
  perkiraan HP = harga web - potongan
     Laptop baru (global/odm): potongan 5%, maksimal Rp1.000.000
     Laptop bekas: potongan sesuai PERSEN_TOKO (yang gak ada di daftar pakai 5%),
                   dengan batas MAKS_TOKO kalau ada
  harga website = perkiraan HP + buffer, dibulatkan ke atas per Rp1.000
     buffer: < 7 juta +100rb, 7 sampai < 13 juta +150rb, >= 13 juta +200rb
  Kalau harga web berlabel "Dengan Voucher", persennya tetap dipotong dari
  harga itu (terbukti di Letopgars dan Planet Laptop).

CEK ULANG PERSEN TOKO (sebulan sekali, cukup screenshot HP)
  Di aplikasi, harga coret = harga web (selama gak ada label "Dengan Voucher").
  Jadi persen toko = 1 - harga HP / harga coret. Kalau harga coretnya gak masuk
  akal (contoh WDComputer.id), cocokin ke harga web dari Claude Chrome.

Data uji 27 Nov 2026: laptop baru 7 dari 8 persis rumus 5% maks 1 juta.
Cek ulang persen toko sebulan sekali (screenshot HP ~10 laptop), karena
Shopee bisa ganti besaran diskon aplikasi waktu ada kampanye.
"""
import json, os, re, sys, datetime

# ── PENGATURAN ───────────────────────────────────────────────
# Dicek 27 Nov 2026: screenshot HP vs harga web di hari yang sama (36 listing).
PERSEN_DEFAULT = 5.0      # terbukti di Gugel, GudangLaptopBTM (+JKT), M6, LockStore,
                          # Redstar, RevoComp, Jaya, Lion Mitech, Laptop WA, DM, Planet
PERSEN_TOKO = {           # nama toko seperti di products.js (huruf besar kecil bebas)
    "Ari Speed Comp": 7.0,
    "Electro Com": 7.0,
    "MBM Tech Store": 7.0,
    "Letopgars": 7.0,     # dipotong dari harga web yang udah "Dengan Voucher"
    "Laptopin.id": 7.0,   # maksimal Rp500.000, lihat MAKS_TOKO
    "ALMA Computer": 4.0, # baru 1 data
    "Reog Komputer": 4.0, # baru 1 data
    "WDComputer.id": 7.0, # dipotong dari harga web "Dengan Voucher" (2 data, persis)
    "Glory Computer": 0.0,# harga HP = harga web "Dengan Voucher" (1 data)
}
MAKS_TOKO = {             # batas potongan maksimal per toko (rupiah)
    "Laptopin.id": 500_000,
}
# Toko yang persennya belum ketahuan (harga coret di HP gak masuk akal).
# Tetap pakai PERSEN_DEFAULT, tapi ditandai di hasil biar dicek manual.
TOKO_BELUM_PASTI = []
MALL_PERSEN = 5.0
MALL_MAKS = 1_000_000
MAKS_LINK_PER_PROMPT = 20

def buffer(harga):
    if harga < 7_000_000:
        return 100_000
    if harga < 13_000_000:
        return 150_000
    return 200_000
# ──────────────────────────────────────────────────────────────

FOLDER = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(FOLDER)
PRODUCTS = os.path.join(ROOT, "products.js")
DAFTAR = os.path.join(FOLDER, "daftar_cek.json")
HASIL = os.path.join(FOLDER, "hasil.txt")

def norm_toko(t):
    return re.sub(r"[^a-z0-9]", "", (t or "").lower())

PERSEN_NORM = {norm_toko(k): v for k, v in PERSEN_TOKO.items()}
MAKS_NORM = {norm_toko(k): v for k, v in MAKS_TOKO.items()}
BELUM_PASTI = {norm_toko(k) for k in TOKO_BELUM_PASTI}

def baca_teks():
    return open(PRODUCTS, encoding="utf-8", newline="").read()

def blok_produk(teks):
    """Kembalikan list (start, end, info) tiap entri produk."""
    pos = list(re.finditer(r"\bid:\s*(\d+)\s*,", teks))
    hasil = []
    for i, m in enumerate(pos):
        start = m.start()
        end = pos[i + 1].start() if i + 1 < len(pos) else len(teks)
        b = teks[start:end]
        def ambil(k):
            x = re.search(r"\b" + k + r':\s*"([^"]*)"', b)
            return x.group(1) if x else ""
        specs = re.search(r"\bspecs:\s*\[(.*?)\]", b, re.S)
        links = [{"url": ambil("shopUrl"), "toko": ambil("toko"), "varian": ambil("varianUtama"), "utama": True}]
        ll = re.search(r"\blinkLain:\s*\[(.*?)\n\s*\]", b, re.S)
        if ll:
            for o in re.finditer(r"\{([^{}]*)\}", ll.group(1)):
                isi = o.group(1)
                g = lambda k: (re.search(k + r':\s*"([^"]*)"', isi) or [None, ""])[1]
                links.append({"url": g("url"), "toko": g("toko"), "varian": g("varian"), "utama": False})
        hasil.append((start, end, {
            "id": int(m.group(1)), "name": ambil("name"), "category": ambil("category"),
            "sold_out": bool(re.search(r"\bsold_out:\s*true", b)),
            "specs": re.findall(r'"([^"]*)"', specs.group(1)) if specs else [],
            "links": [l for l in links if l["url"]],
        }))
    return hasil

def bikin_prompt():
    teks = baca_teks()
    daftar = []
    for _, _, p in blok_produk(teks):
        if p["sold_out"]:
            continue
        nama = re.sub(r"\s*\((PILIHAN MIMIN|TEKNIK|STOK LANGKA|TERLARIS)\)", "", p["name"])
        s = p["specs"] + ["", "", "", ""]
        for l in p["links"]:
            varian = ", ".join(x for x in [l["varian"], s[0], s[2], s[3]] if x)
            toko = l["toko"] or ("Shopee Mall" if p["category"] != "bekas" else "")
            daftar.append({"no": len(daftar) + 1, "id": p["id"], "url": l["url"], "toko": l["toko"],
                           "category": p["category"], "laptop": nama, "varian": varian, "toko_tampil": toko})
    json.dump({"dibuat": datetime.date.today().isoformat(), "link": daftar},
              open(DAFTAR, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    kepala = open(os.path.join(FOLDER, "kepala_prompt.txt"), encoding="utf-8").read()
    for f in os.listdir(FOLDER):
        if f.startswith("Prompt Cek Harga "):
            os.remove(os.path.join(FOLDER, f))
    n = 0
    for i in range(0, len(daftar), MAKS_LINK_PER_PROMPT):
        n += 1
        baris = [f"| {d['no']} | {d['laptop']} | {d['toko_tampil']} | {d['varian']} | {d['url']} |"
                 for d in daftar[i:i + MAKS_LINK_PER_PROMPT]]
        open(os.path.join(FOLDER, f"Prompt Cek Harga {n}.txt"), "w", encoding="utf-8").write(
            kepala + "\n| No | Laptop | Toko | Varian yang dipilih | Link |\n|---|---|---|---|---|\n" + "\n".join(baris) + "\n")
    print(f"{len(daftar)} link dari laptop yang tersedia, dibagi ke {n} prompt.")
    print('Tempel semua hasil Claude Chrome ke "hasil.txt", lalu jalankan "2 Hitung Harga.bat".')

def angka(t):
    m = re.search(r"Rp\s*([\d.]+)", t or "")
    return int(m.group(1).replace(".", "")) if m else None

def perkiraan(web, item, ada_voucher):
    if item["category"] != "bekas":
        potong = min(web * MALL_PERSEN / 100, MALL_MAKS)
    else:
        kunci = norm_toko(item["toko"])
        potong = web * PERSEN_NORM.get(kunci, PERSEN_DEFAULT) / 100
        if kunci in MAKS_NORM:
            potong = min(potong, MAKS_NORM[kunci])
    hp = web - potong
    return int(-(-(hp + buffer(hp)) // 1000) * 1000)

def hitung():
    daftar = json.load(open(DAFTAR, encoding="utf-8"))
    per_no = {d["no"]: d for d in daftar["link"]}
    hasil = {}
    for baris in open(HASIL, encoding="utf-8-sig").read().splitlines():
        kol = [k.strip() for k in baris.strip().strip("|").split("|")]
        if len(kol) < 9 or not kol[0].isdigit():
            continue
        no = int(kol[0])
        status = kol[8].lower()
        hasil[no] = {"web": angka(kol[4]), "voucher": "voucher" in kol[4].lower(), "status": status, "teks": baris}
    teks = baca_teks()
    ubah, cek = [], []
    for no, h in sorted(hasil.items()):
        item = per_no.get(no)
        if not item:
            cek.append(f"No {no}: gak ada di daftar_cek.json (prompt lama?)")
            continue
        if "aktif" not in h["status"] or not h["web"]:
            cek.append(f"No {no} {item['laptop']} ({item['toko'] or 'Mall'}): {h['status'] or 'harga gak kebaca'}")
            continue
        baru = perkiraan(h["web"], item, h["voucher"])
        if norm_toko(item["toko"]) in BELUM_PASTI:
            cek.append(f"No {no} {item['laptop']} ({item['toko']}): persen toko belum pasti, harga tetap dihitung 5%, cek manual")
        u = re.escape(item["url"])
        # link utama: ganti price di entri yang shopUrl-nya cocok
        hit = False
        for start, end, p in blok_produk(teks):
            if p["id"] != item["id"]:
                continue
            b = teks[start:end]
            if re.search(r'shopUrl:\s*"' + u + '"', b):
                lama = int(re.search(r"\bprice:\s*(\d+)", b).group(1))
                b2 = re.sub(r"(\bprice:\s*)\d+", lambda m: m.group(1) + str(baru), b, count=1)
            else:
                m = re.search(r'(\{\s*url:\s*"' + u + r'",\s*harga:\s*)(\d+)', b)
                if not m:
                    break
                lama = int(m.group(2))
                b2 = b[:m.start(2)] + str(baru) + b[m.end(2):]
            teks = teks[:start] + b2 + teks[end:]
            hit = True
            if lama != baru:
                ubah.append((item["laptop"], item["toko"] or "Mall", lama, h["web"], baru))
            break
        if not hit:
            cek.append(f"No {no} {item['laptop']}: link gak ketemu lagi di products.js")
    open(PRODUCTS, "w", encoding="utf-8", newline="").write(teks)
    print(f"{len(ubah)} harga berubah:")
    for nama, toko, lama, web, baru in ubah:
        arah = "naik" if baru > lama else "turun"
        print(f"  {nama} ({toko}): {lama:,} -> {baru:,} ({arah} {abs(baru - lama):,}) | web {web:,}".replace(",", "."))
    if cek:
        print(f"\n{len(cek)} link perlu dicek manual (yang diarsip/habis/varian beda harganya gak diubah):")
        for c in cek:
            print("  " + c)

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "prompt":
        bikin_prompt()
    elif len(sys.argv) > 1 and sys.argv[1] == "hitung":
        hitung()
    else:
        print("Pakai: python harga.py prompt   atau   python harga.py hitung")

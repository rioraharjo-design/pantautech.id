"""
HITUNG URUTAN TERLARIS (urutan.js)

Cara pakai (sebulan sekali):
  1. Ekspor 2 CSV:
     - GA4: klik produk (kolom nama_laptop, tombol, jumlah_klik)
     - Shopee affiliate: pesanan (kolom nama_produk, kategori_l2, status_pesanan, jumlah)
  2. Taruh dua CSV itu di folder ini (Urutan Terlaris). Nama file bebas,
     asal yang GA4 mengandung kata "klik" dan yang Shopee mengandung kata "pesanan".
  3. Klik dua kali "Hitung Urutan.bat".
  4. urutan.js di folder utama otomatis diganti. Naikin angka ?v= di index.html, lalu push.

PENTING: file CSV JANGAN di-push (repo publik). .gitignore udah ngeblok *.csv.
Script ini cuma pakai Python bawaan, gak perlu install apa-apa.

Cara hitung:
  - Pesanan laptop (bukan CANCEL) dicocokkan ke laptop di products.js lewat nama model.
    Satu listing bisa isinya beberapa model ("T14 Gen 2 / Gen 1"), jadi pesanannya
    dibagi ke laptop yang cocok sesuai perbandingan klik.
  - Cuma pesanan HARI terakhir (default 30) yang dihitung.
  - Urutan: PAKSA_ATAS dulu (pilihan manual), lalu perkiraan penjualan terbanyak, lalu klik terbanyak.
  - Laptop baru (id berawalan tanggal, umur <= 30 hari) yang belum ada penjualan
    dan klik gak dimasukin, biar app.js naruh dia di sekitar urutan 20.
  - URUTAN_LARIS = jumlah laptop yang punya penjualan. Pita "TERLARIS" cuma
    dikasih ke laptop di dalam batas ini.
"""
import csv, datetime, glob, json, os, re, sys
from collections import Counter, defaultdict

# ── PENGATURAN ───────────────────────────────────────────────
# Berapa hari terakhir pesanan yang dihitung, dihitung mundur dari tanggal
# pesanan paling baru di CSV. 30 = "sebulan terakhir", sama kayak di video.
HARI = 30

# Laptop yang dipaksa ada di paling atas (id dari products.js, urut #1, #2, #3).
# Ini pilihan manual Rio. Kosongin jadi [] kalau mau ngikut data murni.
# Cek lagi tiap update bulanan, jangan sampai pilihan lama nempel terus.
PAKSA_ATAS = [
    225,         # ThinkPad T14 Gen 2 Ryzen 5   (pilihan Rio, 25 Nov 2026)
    11,          # HP Elitebook 845 G8          (pilihan Rio, 25 Nov 2026)
    2026111001,  # ThinkPad L14 Gen 2 Ryzen 5   (pilihan Rio, 25 Nov 2026)
]
# ──────────────────────────────────────────────────────────────

FOLDER = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(FOLDER)

def baca_products(path):
    teks = open(path, encoding="utf-8").read()
    pos = [m for m in re.finditer(r"\bid:\s*(\d+)\s*,", teks)]
    hasil = []
    for i, m in enumerate(pos):
        blok = teks[m.start(): pos[i + 1].start() if i + 1 < len(pos) else len(teks)]
        nama = re.search(r'\bname:\s*"([^"]*)"', blok)
        if not nama:
            continue
        specs = re.search(r"\bspecs:\s*\[(.*?)\]", blok, re.S)
        hasil.append({
            "id": int(m.group(1)),
            "name": nama.group(1),
            "sold_out": bool(re.search(r"\bsold_out:\s*true", blok)),
            "specs": re.findall(r'"([^"]*)"', specs.group(1)) if specs else [],
        })
    return hasil

def base(n):
    return re.sub(r"\s*\((?!\d{4}\))[^)]*\)", "", n).strip()

def norm(t):
    t = t.lower()
    t = re.sub(r"(\d)g(\d)", r"\1 g\2", t)
    t = re.sub(r"gen\s*(\d)", r"g\1", t)
    t = re.sub(r"\bg\s+(\d)\b", r"g\1", t)
    return t

SERIES = r"(t14s|t14|x13|l14|l15|p14s|p15v|p15s|p15|p1|x1 carbon)"
KHUSUS = {
    "elitebook 845 g7": r"845 g7|845 g7 g8|845 g8 g7",
    "elitebook 845 g8": r"845 g8|845 g7 g8|845 g8 g7",
}

def pencocok(p):
    n = norm(base(p["name"]))
    full = (p["name"] + " " + " ".join(p["specs"])).lower()
    cpu = None
    if re.search(r"ryzen|amd|radeon", full):
        cpu = "amd"
    elif re.search(r"intel|mx\d|quadro", full):
        cpu = "intel"
    m = re.search(SERIES + r" g(\d)", n)
    if m:
        s, g = m.groups()
        rx = re.compile(r"\b" + re.escape(s) + r"\b(?:\s*(?:/\s*)?(?:g\d|ryzen|intel|amd|i[357]|thinkpad))*?\s*(?:/\s*)?g" + g + r"\b")
        return rx, cpu
    n = re.sub(r"^(lenovo |thinkpad |hp |dell |asus |acer |apple |advan |axioo |infinix |polytron |fujitsu )+", "", n)
    n = re.sub(r"\b(ssd 512gb|i7|mx250|m2000m|m2200|p1000|p3200|t1000|t2000|4gb)\b", "", n).strip()
    if n in KHUSUS:
        return re.compile(r"\b(?:" + KHUSUS[n] + r")"), cpu
    n = re.sub(r"ryzen \d|amd|[()]", "", n)
    toks = n.split()
    codes = [t for t in toks if re.search(r"\d", t)]
    key = codes if any(len(c) >= 4 for c in codes) else toks
    if not key:
        return re.compile(r"$^"), cpu
    return re.compile("".join(r"(?=.*\b" + re.escape(t) + r"\b)" for t in key)), cpu

def cari_csv(kata):
    f = [x for x in glob.glob(os.path.join(FOLDER, "*.csv")) if kata in os.path.basename(x).lower()]
    if not f:
        sys.exit(f'CSV yang namanya mengandung "{kata}" gak ketemu di folder {FOLDER}')
    return max(f, key=os.path.getmtime)

def baca_csv(path):
    with open(path, encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))

def main():
    produk = baca_products(os.path.join(ROOT, "products.js"))
    cocok = {p["id"]: pencocok(p) for p in produk}

    klik_rows = baca_csv(cari_csv("klik"))
    klik_nama = Counter()
    for r in klik_rows:
        if r.get("tombol") in ("shopee", "shopee_lain"):
            klik_nama[base(r["nama_laptop"]).lower().strip()] += int(float(r["jumlah_klik"] or 0))
    klik = {p["id"]: klik_nama.get(base(p["name"]).lower().strip(), 0) for p in produk}

    pesanan = baca_csv(cari_csv("pesanan"))
    def tanggal(r):
        try:
            return datetime.datetime.strptime((r.get("waktu_pemesanan") or "")[:10], "%Y-%m-%d")
        except ValueError:
            return None
    semua_tgl = [t for t in map(tanggal, pesanan) if t]
    akhir = max(semua_tgl) if semua_tgl else datetime.datetime.now()
    mulai = akhir - datetime.timedelta(days=HARI - 1)
    pesanan = [r for r in pesanan if tanggal(r) and mulai <= tanggal(r) <= akhir]

    jual = defaultdict(float)
    gak_cocok = Counter()
    for r in pesanan:
        if r.get("kategori_l2") != "Laptop" or r.get("status_pesanan") == "CANCEL":
            continue
        t = norm(r["nama_produk"])
        ada_amd = bool(re.search(r"ryzen|amd|\br[3579]\b|\d{4}u\b", t))
        ada_intel = bool(re.search(r"intel|\bi[357]\b|core|nvidia|mx\d", t))
        kena = []
        for p in produk:
            rx, cpu = cocok[p["id"]]
            if not rx.search(t):
                continue
            if cpu == "amd" and ada_intel and not ada_amd:
                continue
            if cpu == "intel" and ada_amd and not ada_intel:
                continue
            kena.append(p["id"])
        if not kena:
            gak_cocok[r["nama_produk"][:90]] += 1
            continue
        bobot = sum(klik[i] + 1 for i in kena)
        q = int(float(r.get("jumlah") or 1)) or 1
        for i in kena:
            jual[i] += q * (klik[i] + 1) / bobot

    urut = sorted(produk, key=lambda p: (-round(jual[p["id"]], 2), -klik[p["id"]]))
    ada = {p["id"]: p for p in produk}
    paksa = [ada[i] for i in PAKSA_ATAS if i in ada]
    for i in PAKSA_ATAS:
        if i not in ada:
            print(f"PERINGATAN: id {i} di PAKSA_ATAS gak ada di products.js")
    urut = paksa + [p for p in urut if p["id"] not in PAKSA_ATAS]
    hari_ini = datetime.datetime.now()

    def baru(p):
        m = re.match(r"(20\d{6})\d{2}$", str(p["id"]))
        if not m:
            return False
        try:
            tgl = datetime.datetime.strptime(m.group(1), "%Y%m%d")
        except ValueError:
            return False
        return (hari_ini - tgl).days <= 30 and jual[p["id"]] == 0 and klik[p["id"]] == 0

    ids = [p["id"] for p in urut if not baru(p)]
    laris = sum(1 for p in urut if not baru(p) and (round(jual[p["id"]], 2) > 0 or p["id"] in PAKSA_ATAS))

    baris = [", ".join(map(str, ids[i:i + 8])) for i in range(0, len(ids), 8)]
    isi = f"""/**
 * URUTAN DEFAULT KATALOG (dibuat otomatis oleh Urutan Terlaris/urutan.py, {hari_ini:%d-%m-%Y})
 * Pesanan {mulai:%d-%m-%Y} sampai {akhir:%d-%m-%Y} ({HARI} hari). Laptop paling laris di atas,
 * lalu yang paling banyak diklik. Beberapa teratas bisa dipilih manual (PAKSA_ATAS di urutan.py).
 * File ini cuma berisi id, tanpa angka penjualan.
 *
 * Laptop yang id nya gak ada di sini dianggap baru masuk: mulai urutan 20,
 * diselipin tiap 3 laptop, yang paling baru duluan.
 * URUTAN_LARIS: berapa laptop teratas yang punya penjualan (batas pita TERLARIS).
 */
const URUTAN = [
  {(",\n  ").join(baris)}
];
const URUTAN_LARIS = {laris};
"""
    open(os.path.join(ROOT, "urutan.js"), "w", encoding="utf-8").write(isi)

    print(f"urutan.js selesai dibuat. Pesanan dihitung: {mulai:%d-%m-%Y} sampai {akhir:%d-%m-%Y} ({HARI} hari)")
    if paksa:
        print("Dipaksa di atas (PAKSA_ATAS): " + ", ".join(base(p["name"]) for p in paksa))
    print("\n10 teratas yang masih tersedia:")
    for p in [x for x in urut if not x["sold_out"] and not baru(x)][:10]:
        print(f"  {base(p['name'])}")
    print(f"\nLaptop yang punya penjualan: {laris}")
    print(f"Laptop baru masuk (gak dimasukin): {sum(1 for p in produk if baru(p))}")
    print(f"Pesanan laptop yang gak cocok ke katalog: {sum(gak_cocok.values())}")
    for t, c in gak_cocok.most_common(10):
        print(f"  {c}x {t}")

if __name__ == "__main__":
    main()

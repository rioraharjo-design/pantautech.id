/**
 * toko.js – Data dan render toko laptop bekas terpercaya
 * ============================================================
 * CARA MENAMBAH / MENGATUR TOKO:
 *
 * Salin satu blok { ... } di bawah, lalu isi datanya.
 *
 * Field:
 *   id        – unik, angka naik terus
 *   nama      – nama toko di Shopee
 *   logo      – path ke file logo, simpan di folder ./Toko/
 *   rating    – angka desimal, contoh: 4.9
 *   ulasan    – jumlah ulasan, contoh: "3,8rb" atau "1.200"
 *   pengikut  – jumlah pengikut toko, contoh: "12rb" atau "850"
 *   shopUrl   – link affiliate Shopee ke toko
 *   rank      – angka peringkat Top (1, 2, 3, ...). Boleh sama kalau
 *               satu grup (contoh: 2 toko sama-sama rank 1).
 *               null = masuk "Toko Lainnya"
 *   grup      – (opsional) nama toko induknya, muncul label
 *               "Satu grup dengan ..." di kartu
 *   pembatalan– (opsional) tingkat pembatalan dari header toko,
 *               contoh: "20%". Belum ditampilkan di kartu
 *   catatan   – teks panjang bebas. Satu Enter = lanjut kalimat,
 *               dua Enter = paragraf baru
 * ============================================================
 */

const TOKO = [

  // ── TOP 5 ───────────────────────────────────────────────────
  {
    id: 1293843210,
    nama: "GudangLaptopBTM",
    logo: "./Toko/Logo GudangLaptopBTM.webp",
    rating: 4.8,
    ulasan: "5,3rb",
    pengikut: "26,4rb",
    shopUrl: "https://s.shopee.co.id/W7yqIaEqy",
    rank: 1,
    catatan: `Toko paling lengkap buat yang masih bingung mau laptop apa. Isinya bukan cuma ThinkPad, tapi juga Dell Latitude, HP EliteBook, sampai workstation ZBook dan Precision, plus beberapa laptop 2 in 1

Listingnya jelas, satu produk satu model dengan spek ditulis di judul. Harga kebanyakan wajar, tapi beberapa model sedikit di atas toko lain, jadi tetap bandingin dulu. Garansi 30 hari dan wajib video unboxing, tersedia toko offline di Jakarta dan Batam`
  },

  {
    id: 22343242,
    nama: "GUDANGLAPTOPBTM_JKT",
    logo: "./Toko/Logo GUDANGLAPTOPBTM_JKT.webp",
    rating: 4.8,
    ulasan: "1,5rb",
    pengikut: "6,2rb",
    shopUrl: "https://s.shopee.co.id/7KyIysS2Qq",
    rank: 1,
    pembatalan: "13%",
    grup: "GudangLaptopBTM",
    catatan: `Cabang Jakarta dari GudangLaptopBTM, jadi gaya jualan dan garansinya sama. Pilihannya lebih sedikit, kebanyakan ThinkPad dan Dell Latitude, tapi kadang ada unit yang gak ada di toko pusat dengan harga yang cukup murah

Sebelum checkout, tanya stok dulu ke penjual biar pesanan gak dibatalin`
  },

  {
    id: 1324234,
    nama: "Gugel Laptop",
    logo: "./Toko/Logo Gugel Laptop.webp",
    rating: 4.9,
    ulasan: "4,3rb",
    pengikut: "9,4rb",
    shopUrl: "https://s.shopee.co.id/8VAGMxY0o6",
    rank: 2,
    catatan: `Toko yang paling sering direkomendasikan komunitas laptop bekas, terutama ThinkPad. Pilihannya lengkap dari T14, T14s, X13, L14 sampai X1 Carbon dan workstation seri P, dengan varian RAM dan SSD yang bisa dipilih

Penjualnya fast respon dan jelasin kondisi unit secara detail. Kekurangannya pilihan di luar ThinkPad masih sedikit`
  },

  {
    id: 2324242,
    nama: "Jajanan Laptop",
    logo: "./Toko/Logo Jajanan Laptop.webp",
    rating: 4.9,
    ulasan: "3,2rb",
    pengikut: "5,6rb",
    shopUrl: "https://s.shopee.co.id/2LZd1eGOZ6",
    rank: 2,
    grup: "Gugel Laptop",
    catatan: `Satu gudang dengan Gugel Laptop, jadi isi produk dan gaya listingnya hampir sama, kebanyakan ThinkPad dengan varian RAM dan SSD lengkap

Perlu diperhatikan, toko ini punya aturan garansi hangus kalau pembeli kasih ulasan bintang 3 ke bawah`
  },

  {
    id: 33232423123,
    nama: "WDCOMPUTER.ID",
    logo: "./Toko/Logo WD.COMPUTER.webp",
    rating: 4.8,
    ulasan: "5,5rb",
    pengikut: "12,7rb",
    shopUrl: "https://s.shopee.co.id/5AtoP4YrsC",
    rank: 3,
    catatan: `Katalognya paling besar, isinya Dell Latitude, ThinkPad, dan Fujitsu ultrabook yang ringan dan laris. Pilihan variannya paling fleksibel, RAM dari 4GB sampai 32GB dan SSD bisa dipilih, bahkan ada opsi tanpa SSD

Penjualnya cepat banget balas chat dan ada garansi tukar unit 1 minggu. Tapi harga yang tampil di depan itu varian paling kecil, dan kondisi unitnya rata-rata 85 sampai 90 persen. Tersedia toko offline di Mangga Dua Jakarta`
  },

  {
    id: 4432432,
    nama: "Electro Com",
    logo: "./Toko/Logo Electro Com.webp",
    rating: 4.8,
    ulasan: "4,5rb",
    pengikut: "11,5rb",
    shopUrl: "https://s.shopee.co.id/2BGCpOxboH",
    rank: 4,
    catatan: `Toko campuran yang pilihannya luas, dari ThinkPad, HP EliteBook, Dell Latitude, workstation, sampai MacBook bekas. Penjualnya cepat balas chat dan garansinya ada opsi tukar unit

Harga yang tertulis di judul itu harga mulai dari, jadi klik dulu varian yang kamu mau buat tau harga aslinya`
  },

  {
    id: 2232342334242,
    nama: "LAPTOPIN.ID ( OFFICIAL STORE )",
    logo: "./Toko/Logo LAPTOPIN.ID ( OFFICIAL STORE ).webp",
    rating: 4.9,
    ulasan: "1,9rb",
    pengikut: "5,7rb",
    shopUrl: "https://s.shopee.co.id/2gCTQWmws6",
    rank: 5,
    catatan: `Toko kecil tapi isinya pilihan, kebanyakan ThinkPad plus beberapa HP dan Dell, dan banyak yang udah RAM 16GB sampai 32GB. Harganya sering lebih murah dibanding toko lain dan variannya rapi, jadi gak bikin bingung

Kekurangannya pilihan modelnya sedikit dan garansinya standar 1 bulan`
  },

  // ── TOKO LAINNYA ────────────────────────────────────────────
  {
    id: 22234242324342,
    nama: "LOCKSTORE",
    logo: "./Toko/Logo LOCKSTORE.webp",
    rating: 4.9,
    ulasan: "892",
    pengikut: "3,5rb",
    shopUrl: "https://s.shopee.co.id/BV8RxLuSp",
    rank: null,
    catatan: `Toko buat yang cari laptop bekas kelas atas, mulai dari ThinkPad X1 Carbon, Dell Latitude seri 7000 sampai 9000, sampai MacBook M1 dan M2, dengan kondisi unit rata-rata sangat mulus

Harganya sedikit di atas toko lain, tapi sebanding sama kondisinya. Perhatikan label kondisi karena ada juga beberapa unit baru. Ada toko offline di Mangga Dua Jakarta yang udah berdiri sejak 2006`
  },

  {
    id: 52131,
    nama: "Glory Computerr",
    logo: "./Toko/Logo Glory Computerr.webp",
    rating: 4.9,
    ulasan: "994",
    pengikut: "1,5rb",
    shopUrl: "https://s.shopee.co.id/AKbuYSJTD4",
    rank: null,
    catatan: `Pilihannya paling unik, selain ThinkPad, Dell, dan HP ada juga laptop Jepang yang jarang ditemui kayak Fujitsu, Dynabook, dan Vaio. Harga unit yang ready cukup murah

Tapi banyak varian yang kosong, jadi tanya stok dulu sebelum checkout. Perhatikan juga aturan garansinya yang hangus kalau pembeli kasih ulasan negatif`
  },

  {
    id: 22332131232442,
    nama: "MBM Tech store",
    logo: "./Toko/Logo MBM Tech store.webp",
    rating: 4.9,
    ulasan: "777",
    pengikut: "1,3rb",
    shopUrl: "https://s.shopee.co.id/3VlaPsHlss",
    rank: null,
    catatan: `Toko yang relatif baru dengan isi ThinkPad, EliteBook, dan Latitude seri bagus, harganya lumayan bersaing dan penjualnya cepat balas chat

Tapi banyak varian yang kosong dan harga di judul sering bukan harga unit yang ready, jadi cek variannya pelan pelan dan tanya garansinya dulu sebelum beli`
  },

  {
    id: 222324323532342,
    nama: "Lap-Top",
    logo: "./Toko/Logo Lap-Top.webp",
    rating: 4.9,
    ulasan: "1,1rb",
    pengikut: "7,1rb",
    shopUrl: "https://s.shopee.co.id/5AtoP5hGOT",
    rank: null,
    catatan: `Unggul di garansi, sampai 3 bulan hardware, dengan kondisi unit rata-rata grade A. Pilihannya campur ThinkPad, HP, Dell, sampai Surface, dan ada toko offline di Bandung Trade Mall

Kekurangannya harganya termasuk mahal dibanding toko lain dan banyak varian yang kosong`
  },

  {
    id: 22252312135342,
    nama: "RevoComp",
    logo: "./Toko/Logo RevoComp.webp",
    rating: 4.9,
    ulasan: "273",
    pengikut: "1,6rb",
    shopUrl: "https://s.shopee.co.id/4Ve7bkreDP",
    rank: null,
    catatan: `Toko lama yang isinya banyak ThinkPad dan HP generasi lawas, plus PC kantor. Ada juga beberapa seri bagus kayak X1 Carbon dan ZBook Firefly yang jarang ada di toko lain

Tapi banyak harganya di atas pasaran, jadi lebih cocok buat cari unit tertentu`
  },

  {
    id: 6342,
    nama: "Ari speed comp",
    logo: "./Toko/Logo Ari speed comp.webp",
    rating: 4.8,
    ulasan: "1,5rb",
    pengikut: "16,1rb",
    shopUrl: "https://s.shopee.co.id/5q9VCOmC0K",
    rank: null,
    catatan: `tokonya seringkali munculin  produk laptop hidden gem yang speknya sangat bagus tapi dijual dengan harga  murah, terutama buat kalian anak teknik pantau terus toko ini karena sering update  laptop workstation`
  },

  {
    id: 5501,
    nama: "Laptop WA Surabaya",
    logo: "./Toko/Logo Laptop WA Surabaya.webp",
    rating: 4.9,
    ulasan: "3,4rb",
    pengikut: "5,9rb",
    shopUrl: "https://s.shopee.co.id/114TCyga17",
    rank: null,
    catatan: `Kuat di HP EliteBook dan ThinkPad kelas atas, dari EliteBook 845 G7 dan G8, X1 Carbon, sampai workstation kayak ZBook Firefly dan ThinkPad P1. Kondisi tiap unit ditulis jelas dalam persen, dan harga EliteBook 845-nya termasuk bersaing

Cukup banyak varian yang kosong, jadi cek dulu stok varian yang kalian mau`
  },

  {
    id: 5502,
    nama: "Kings Computerr",
    logo: "./Toko/Logo Kings Computerr.webp",
    rating: 4.9,
    ulasan: "796",
    pengikut: "3,9rb",
    shopUrl: "https://s.shopee.co.id/5q9ixg25VD",
    rank: null,
    pembatalan: "20%",
    catatan: `Harga ThinkPad dan Dell Latitude-nya bersaing, banyak yang di bawah toko lain kayak ThinkPad X390, T495, dan T14 Gen 2. Kondisi unit ditulis jelas, dari grade sampai daya tahan baterai

Ada juga pilihan unik kayak tablet Fujitsu, NEC Versapro, dan Dynabook. Beberapa seri lama kayak ThinkPad T470 sering kosong`
  },

  {
    id: 5503,
    nama: "jaya computerr",
    logo: "./Toko/Logo jaya computerr.webp",
    rating: 5.0,
    ulasan: "204",
    pengikut: "237",
    shopUrl: "https://s.shopee.co.id/7VHwwogjJY",
    rank: null,
    catatan: `Isinya banyak laptop bisnis premium dan unik, dari Dell Latitude 9420 2 in 1, HP EliteBook Dragonfly, sampai Fujitsu lipat dan Sony Vaio. Kondisi unit ditulis jelas dan ulasan pembelinya bersih

Harga beberapa seri ThinkPad sedikit di atas toko lain dan cukup banyak varian yang kosong`
  },

  {
    id: 5504,
    nama: "M6 Store",
    logo: "./Toko/Logo M6 Store.webp",
    rating: 4.9,
    ulasan: "163",
    pengikut: "2,3rb",
    shopUrl: "https://s.shopee.co.id/8fTuKnCYqn",
    rank: null,
    pembatalan: "33%",
    catatan: `Toko kecil dengan harga ThinkPad yang bersaing, ThinkPad X390 dan T14 Gen 2 Intel-nya di bawah toko lain. Ada juga laptop Jepang yang jarang ada kayak NEC Versapro, Fujitsu, dan Dynabook

Tokonya masih baru dan deskripsi kondisinya masih umum, jadi tanya kondisi unit dulu sebelum checkout`
  },

  {
    id: 5505,
    nama: "ajkomputer",
    logo: "./Toko/Logo ajkomputer.webp",
    rating: 4.8,
    ulasan: "1,9rb",
    pengikut: "6,3rb",
    shopUrl: "https://s.shopee.co.id/60T99ve7fz",
    rank: null,
    catatan: `Salah satu toko paling laris dan chat-nya dibalas dalam hitungan menit. Isinya campuran ThinkPad, Dell Latitude, sampai Sony Vaio, kebanyakan di harga 2 sampai 5 juta

Harga beberapa seri ThinkPad T di atas toko lain dan banyak varian yang kosong, jadi cek varian dan stoknya dulu`
  },

  {
    id: 5506,
    nama: "Jakarta laptop",
    logo: "./Toko/Logo Jakarta laptop.webp",
    rating: 4.9,
    ulasan: "3rb",
    pengikut: "40,7rb",
    shopUrl: "https://s.shopee.co.id/5Au2ANdIcF",
    rank: null,
    catatan: `Toko lama yang kuat di laptop premium, kayak ThinkPad X1 Carbon, X1 Yoga, HP EliteBook x360, sampai Dell Latitude 7440 2 in 1

Harganya cenderung di atas toko lain dan banyak varian yang kosong, jadi lebih cocok buat yang cari unit premium tertentu`
  },

  {
    id: 5507,
    nama: "Redstar Electronic",
    logo: "./Toko/Logo Redstar Electronic.webp",
    rating: 4.9,
    ulasan: "435",
    pengikut: "525",
    shopUrl: "https://s.shopee.co.id/5LDSMsItq3",
    rank: null,
    catatan: `Banyak pilihan ThinkPad dan Dell Latitude versi touchscreen, dan beberapa harganya cukup murah kayak ThinkPad T14s Gen 2 Ryzen 7

Deskripsinya lebih ke spek pabrik daripada kondisi unit, jadi tanya kondisi dan pastikan fitur kayak touchscreen sebelum checkout`
  },

  {
    id: 5508,
    nama: "LETOPGARS",
    logo: "./Toko/Logo LETOPGARS.webp",
    rating: 4.8,
    ulasan: "412",
    pengikut: "3,5rb",
    shopUrl: "https://s.shopee.co.id/8pnKX9ikBK",
    rank: null,
    catatan: `Punya beberapa seri bagus yang jarang ada di toko lain, kayak ThinkPad P1 Gen 4, X1 Carbon, dan Dell Latitude 7440, dan penjualnya responsif

Harga antar variannya kadang gak urut, jadi bandingin dulu beberapa varian sebelum milih`
  },

  {
    id: 5509,
    nama: "ALMA COMPUTER",
    logo: "./Toko/Logo ALMA COMPUTER.webp",
    rating: 4.8,
    ulasan: "1,3rb",
    pengikut: "1,8rb",
    shopUrl: "https://s.shopee.co.id/3LSNzEmWri",
    rank: null,
    catatan: `Toko ThinkPad yang udah 10 tahun, pilihannya dari ThinkPad lawas sampai L14, T14s, dan X13, dan beberapa harganya di bawah toko lain

Harga di judul sering bukan harga unit yang ready dan deskripsi kondisinya kosong, jadi klik variannya dulu buat tau harga aslinya dan tanya kondisi ke penjual`
  },

  {
    id: 5510,
    nama: "Atio Macbook Bandung (MACBOOK)",
    logo: "./Toko/Logo Atio Macbook Bandung.webp",
    rating: 4.9,
    ulasan: "2,2rb",
    pengikut: "24,8rb",
    shopUrl: "https://s.shopee.co.id/1Bw15riW8",
    rank: null,
    catatan: `Toko MacBook bekas dengan pilihan paling lengkap, dari MacBook Air M1 dan M2 sampai MacBook Pro M-series, plus iPad dan iMac. Grade dan minus kayak penyok ditandai jelas di variannya

Cycle count baterai dan status iCloud belum ditulis di deskripsi, jadi tanyain dulu ke penjual sebelum checkout`
  },

  {
    id: 7432234,
    nama: "REOG KOMPUTER (GAMING)",
    logo: "./Toko/Logo REOG KOMPUTER.webp",
    rating: 4.8,
    ulasan: "511",
    pengikut: "3,4rb",
    shopUrl: "https://s.shopee.co.id/2Vt3DKZhyF",
    rank: null,
    catatan: `Pilihan laptop gaming paling lengkap, dari GTX 1650 sampai RTX 2070 dan RTX 3060, dan harganya sering lebih murah dari toko lain. Minus layar kayak bleeding biasanya udah ditulis di deskripsi

Tapi ada judul produk yang GPU-nya gak sesuai seri, jadi cocokin dulu spek di judul sama deskripsi, terus tanya garansinya sebelum checkout`
  },

  {
    id: 132420,
    nama: "Dissant'sStore (GAMING)",
    logo: "./Toko/Logo Dissant'sStore.webp",
    rating: 4.9,
    ulasan: "808",
    pengikut: "2,4rb",
    shopUrl: "https://s.shopee.co.id/9V2nZBIrRP",
    rank: null,
    catatan: `Toko paling jujur soal kondisi unit. Minus kayak kesehatan baterai sampai persennya, whitespot, sampai tombol yang gak berfungsi ditulis jelas di deskripsi, dan banyak unit gaming-nya masih garansi resmi

Pilihannya kebanyakan laptop gaming generasi baru di atas 10 juta, plus model unik kayak HP Envy GTX dan Surface Book. Harganya memang di atas toko lain, tapi kalian bayar buat kondisi yang jelas`
  },

  {
    id: 5511,
    nama: "Sri Laptop BDG (GAMING)",
    logo: "./Toko/Logo Sri Laptop BDG.webp",
    rating: 4.9,
    ulasan: "99",
    pengikut: "2,1rb",
    shopUrl: "https://s.shopee.co.id/3LSNzB2Enn",
    rank: null,
    catatan: `Toko laptop gaming di Bandung dengan pilihan Asus TUF, ROG lawas, MSI GF63, Pavilion Gaming, sampai ROG Zephyrus G14. Listingnya rapi dan admin-nya responsif

Harganya cenderung di atas toko lain dan kondisi tiap unit kayak layar belum ditulis detail, jadi minta video unit dulu sebelum beli`
  },

  {
    id: 9432423,
    nama: "Story Laptop Bandung (GAMING)",
    logo: "./Toko/Logo Story Laptop Bandung.webp",
    rating: 4.9,
    ulasan: "79",
    pengikut: "2,2rb",
    shopUrl: "https://s.shopee.co.id/114FRXmFr9",
    rank: null,
    pembatalan: "100%",
    catatan: `Etalasenya rapi dan pilihan laptop gaming-nya banyak, dari Nitro dan Pavilion Gaming sampai ROG dan LOQ, plus garansi toko 1 bulan

Tapi tokonya lagi sepi, balas chat lambat, dan tingkat pembatalannya tinggi. Wajib chat buat konfirmasi stok dulu sebelum checkout`
  },

  {
    id: 9432674746423,
    nama: "Dr.com komputer (GAMING)",
    logo: "./Toko/Logo Dr.com komputer.webp",
    rating: 4.7,
    ulasan: "640",
    pengikut: "2,5rb",
    shopUrl: "https://s.shopee.co.id/114FQXCfLN",
    rank: null,
    pembatalan: "31%",
    catatan: `Toko yang lebih fokus ke laptop kantor dan laptop murah, laptop gaming-nya sedikit dan kebanyakan seri lama kayak Baby ROG dan TUF generasi awal. Harga gaming-nya cenderung di atas toko lain

GPU di judul kadang beda sama deskripsi, dan banyak listing gaming yang stoknya kosong. Kalau mau beli di sini, chat penjual buat konfirmasi spek dan stok dulu`
  },

];

// ============================================================
// RENDER — tidak perlu diubah
// Nama toko yang mengandung "(GAMING)" atau "(MACBOOK)" otomatis
// dapat label Gaming atau MacBook.
// ============================================================

function parseToko(t) {
  const isGaming  = /\(GAMING\)/i.test(t.nama);
  const isMacbook = /\(MACBOOK\)/i.test(t.nama);
  const nama = t.nama.replace(/\((GAMING|MACBOOK)\)/ig, "").replace(/\s{2,}/g, " ").trim();
  return { nama, isGaming, isMacbook };
}

function inisial(nama) {
  return nama.replace(/[^A-Za-z0-9 ]/g, "").trim().substring(0, 2).toUpperCase();
}

function renderTokoCard(t) {
  const isTop = t.rank != null;
  const info  = parseToko(t);
  const safe  = t.nama.replace(/'/g, "\\'");
  const glow  = isTop && t.rank <= 3 ? " toko-rank-glow" : "";

  return `
    <article class="toko-card${isTop ? " toko-card-top" : ""}${t.grup ? " toko-card-grup" : ""}">
      ${isTop ? `<span class="toko-rank${glow}" aria-label="Peringkat ${t.rank}">${t.rank}</span>` : ""}
      <div class="toko-logo-wrap">
        <img src="${t.logo}" alt="" class="toko-logo" loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
        <div class="toko-logo-fallback" style="display:none">${inisial(info.nama)}</div>
      </div>
      <div class="toko-info">
        <h3 class="toko-nama">${info.nama}</h3>
        <div class="toko-meta">
          <span class="toko-rating">
            <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ${t.rating}
          </span>
          <span class="toko-ulasan">${t.ulasan} ulasan</span>
          <span class="toko-pengikut">${t.pengikut} pengikut</span>
        </div>
        ${info.isGaming || info.isMacbook || t.grup ? `<div class="toko-tags">
          ${t.grup ? `<span class="toko-tag toko-tag-grup">Satu grup dengan ${t.grup}</span>` : ""}
          ${info.isGaming ? `<span class="toko-tag">Gaming</span>` : ""}
          ${info.isMacbook ? `<span class="toko-tag">MacBook</span>` : ""}
        </div>` : ""}
      </div>
      <div class="toko-actions">
        <button class="toko-btn toko-btn-note" type="button" onclick="openModal('${safe}', ${t.id})">Catatan</button>
        <a href="${t.shopUrl}" target="_blank" rel="noopener"
          class="toko-btn toko-btn-shopee"
          onclick="trackTokoClick('${safe}')">Shopee</a>
      </div>
    </article>
  `;
}

function render() {
  const container = document.getElementById("tokoContainer");
  const top  = TOKO.filter(t => t.rank != null).sort((a, b) => a.rank - b.rank);
  const lain = TOKO.filter(t => t.rank == null);
  const jumlahTop = new Set(top.map(t => t.rank)).size;

  let html = "";

  if (top.length > 0) {
    html += `
      <section class="toko-group">
        <div class="toko-section-label">
          <h2 class="toko-section-title">Top ${jumlahTop}</h2>
          <span class="toko-section-sub">Pilihan terbaik mimin</span>
        </div>
        <div class="toko-list toko-list-top">
          ${top.map(t => renderTokoCard(t)).join("")}
        </div>
      </section>`;
  }

  if (lain.length > 0) {
    html += `
      <section class="toko-group">
        <div class="toko-section-label">
          <h2 class="toko-section-title">Toko Lainnya</h2>
          <span class="toko-section-sub">Sudah dicek, layak dijadikan pilihan</span>
        </div>
        <div class="toko-list">
          ${lain.map(t => renderTokoCard(t)).join("")}
        </div>
      </section>`;
  }

  container.innerHTML = html;
}

// ── Modal catatan ────────────────────────────────────────────
// Satu Enter = lanjut kalimat, dua Enter = paragraf baru,
// baris diawali "-" tetap jadi baris sendiri.
function formatCatatan(teks) {
  return teks.trim().split(/\n\s*\n/).map(par => {
    const lines = par.split("\n").map(s => s.trim()).filter(Boolean);
    let out = "";
    lines.forEach((line, i) => {
      if (i === 0) out = line;
      else if (/^[-•*]|^\d+[.)]/.test(line)) out += "<br>" + line;
      else out += " " + line;
    });
    return `<p>${out}</p>`;
  }).join("");
}

function openModal(nama, id) {
  const toko = TOKO.find(t => t.id === id);
  if (!toko) return;

  document.getElementById("modalTitle").textContent = parseToko(toko).nama;
  document.getElementById("modalBody").innerHTML = formatCatatan(toko.catatan);
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// ── GA4 tracking ─────────────────────────────────────────────
function trackTokoClick(namaToko) {
  if (typeof gtag !== "function") return;
  gtag("event", "klik_toko", { nama_toko: namaToko });
}

// ── Init ─────────────────────────────────────────────────────
render();
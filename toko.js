/**
 * toko.js – Data dan render toko laptop bekas terpercaya
 * ============================================================
 * CARA MENAMBAH TOKO:
 *
 * Salin satu blok { ... } di bawah, tambahkan koma setelah blok sebelumnya,
 * lalu isi datanya. Untuk top5, set top5: true. Sisanya set top5: false.
 *
 * Field:
 *   id        – unik, angka naik terus
 *   nama      – nama toko di Shopee
 *   logo      – path ke file logo, simpan di folder ./Toko/
 *   rating    – angka desimal, contoh: 4.9
 *   ulasan    – jumlah ulasan, contoh: "3,8rb" atau "1.200"
 *   pengikut  – jumlah pengikut toko, contoh: "12rb" atau "850"
 *   shopUrl   – link affiliate Shopee ke toko
 *   top5      – true = masuk Top 5, false = Toko Lainnya
 *   catatan   – teks panjang bebas, boleh pakai \n untuk baris baru
 * ============================================================
 */

const TOKO = [

  // ── TOP 5 ───────────────────────────────────────────────────
  {
    id: 1324234,
    nama: "Gugel Laptop",
    logo: "./Toko/Logo Gugel Laptop.webp",
    rating: 4.9,
    ulasan: "4,3rb",
    pengikut: "9,4rb",
    shopUrl: "https://s.shopee.co.id/8VAGMxY0o6",
    top5: true,
    catatan: `Kenapa jadi peringkat 1? karena mereka toko yang paling sering direkomendasikan 
    oleh komunitas laptop bekas terutama ThinkPad, apapun kebutuhan kamu bakal 
    dijawab fast respon dan dijelasin secara detail`
  },

  // ── TOKO LAINNYA ────────────────────────────────────────────
  {
    id: 2324242,
    nama: "Jajanan Laptop",
    logo: "./Toko/Logo Jajanan Laptop.webp",
    rating: 4.9,
    ulasan: "3,2rb",
    pengikut: "5,6rb",
    shopUrl: "https://s.shopee.co.id/2LZd1eGOZ6",
    top5: true,
    catatan: `Gudangnya sama dengan gugel laptop, jadi catatan bisa cek yang gugel laptop`
  },

    {
    id: 1293843210,
    nama: "GudangLaptopBTM",
    logo: "./Toko/Logo GudangLaptopBTM.webp",
    rating: 4.8,
    ulasan: "5,3rb",
    pengikut: "26,4rb",
    shopUrl: "https://s.shopee.co.id/W7yqIaEqy",
    top5: true,
    catatan: `Produknya banyak, sangat bervariasi, speknya bagus dengan harganya yang murah, tersedia toko offline di Jakarta dan di Batam`
  },

    {
    id: 22343242,
    nama: "GUDANGLAPTOPBTM_JKT",
    logo: "./Toko/Logo GUDANGLAPTOPBTM_JKT.webp",
    rating: 4.8,
    ulasan: "1,5rb",
    pengikut: "6,2rb",
    shopUrl: "https://s.shopee.co.id/7KyIysS2Qq",
    top5: true,
    catatan: `catatan bisa cek yang GudangLaptopBTM`
  },

  {
    id: 4432432,
    nama: "Electro Com",
    logo: "./Toko/Logo Electro Com.webp",
    rating: 4.8,
    ulasan: "4,5rb",
    pengikut: "11,5rb",
    shopUrl: "https://s.shopee.co.id/2BGCpOxboH",
    top5: true,
    catatan: `Produknya sangat bervariasi, mau macbook? laptop workstation?, laptop bisnis? laptop chromebook?, semuanya ada dan harganya masih bisa diterima dengan sangat baik`
  },

  {
    id: 22332131232442,
    nama: "MBM Tech store",
    logo: "./Toko/Logo MBM Tech store.webp",
    rating: 4.9,
    ulasan: "777",
    pengikut: "1,3rb",
    shopUrl: "https://s.shopee.co.id/3VlaPsHlss",
    top5: true,
    catatan: `Toko Underated, sama seperti RevoComp, dan Glory Computerr padahal produknya banyak yang speknya bagus dengan harganya yang tergolong murah`
  },

  {
    id: 52131,
    nama: "Glory Computerr",
    logo: "./Toko/Logo Glory Computerr.webp",
    rating: 4.9,
    ulasan: "994",
    pengikut: "1,5rb",
    shopUrl: "https://s.shopee.co.id/AKbuYSJTD4",
    top5: true,
    catatan: `Rating 4.9 dan menjamin bahwa semua barang diuji dengan baik, harga seringkali lebih murah dibanding yang lain, toko baru tapi sangat berkualitas`
  },

  {
      id: 22252312135342,
    nama: "RevoComp",
    logo: "./Toko/Logo RevoComp.webp",
    rating: 4.9,
    ulasan: "273",
    pengikut: "1,6rb",
    shopUrl: "https://s.shopee.co.id/4Ve7bkreDP",
    top5: true,
    catatan: `Toko underated padahal ada beberapa produk laptop yang jarang ditemui di toko lain, dan berani ngasih harga murah`
  },

    {
    id: 33232423123,
    nama: "WDCOMPUTER.ID",
    logo: "./Toko/Logo WD.COMPUTER.webp",
    rating: 4.8,
    ulasan: "5,5rb",
    pengikut: "12,7rb",
    shopUrl: "https://s.shopee.co.id/5AtoP4YrsC",
    top5: true,
    catatan: `tiap produk dikasih varian spesifikasi yang sangat lengkap, bisa tanpa SSD, SSD 128GB, SSD SATA maupun SSD NVME, dan juga RAM dari 4GB sampai 32GB, jadi bisa lebih menyesuaikan dengan kebutuhan

tersedia toko offline di Mangga Dua Jakarta`
  },

  {
    id: 222324323532342,
    nama: "Lap-Top",
    logo: "./Toko/Logo Lap-Top.webp",
    rating: 4.9,
    ulasan: "1,1rb",
    pengikut: "7,1rb",
    shopUrl: "https://s.shopee.co.id/5AtoP5hGOT",
    top5: true,
    catatan: `satu satunya toko yang berani ngasih GARANSI 3 BULAN, ada toko offline di Bandung Trade Mall, tapi sangat disayangkan produknya kurang bervariasi`
  },

  {
    id: 2232342334242,
    nama: "LAPTOPIN.ID ( OFFICIAL STORE )",
    logo: "./Toko/Logo LAPTOPIN.ID ( OFFICIAL STORE ).webp",
    rating: 4.9,
    ulasan: "1,9rb",
    pengikut: "5,7rb",
    shopUrl: "https://s.shopee.co.id/2gCTQWmws6",
    top5: true,
    catatan: `tokonya bisa ngejaga harga biar sesuai sama standar pasar, gak kemahalan gak kemurahan`
  },

    {
    id: 22234242324342,
    nama: "LOCKSTORE",
    logo: "./Toko/Logo LOCKSTORE.webp",
    rating: 4.9,
    ulasan: "892",
    pengikut: "3,5rb",
    shopUrl: "https://s.shopee.co.id/BV8RxLuSp",
    top5: true,
    catatan: `ada toko offline di Mangga dua jakarta yang udah berdiri sejak 2006 sampai sekarang, tapi harga laptopnya beberapa sedikit lebih tinggi dibanding yang lain`
  },



  {
    id: 6342,
    nama: "Ari speed comp",
    logo: "./Toko/Logo Ari speed comp.webp",
    rating: 4.8,
    ulasan: "1,5rb",
    pengikut: "16,1rb",
    shopUrl: "https://s.shopee.co.id/5q9VCOmC0K",
    top5: false,
    catatan: `Toko dengan pengikut terbanyak, kenapa? karena tokonya seringkali munculin 
    produk laptop hidden gem yang speknya sangat bagus tapi dijual dengan harga 
    murah, terutama buat kalian anak teknik pantau terus toko ini karena sering update 
    laptop workstation`
  },

  {
    id: 7432234,
    nama: "REOG KOMPUTER (GAMING)",
    logo: "./Toko/Logo REOG KOMPUTER.webp",
    rating: 4.8,
    ulasan: "507",
    pengikut: "3,3rb",
    shopUrl: "https://s.shopee.co.id/2Vt3DKZhyF",
    top5: false,
    catatan: `pilihan dari berbagai harga cukup lengkap, bahkan seringkali ngasih harga murah dibanding toko lain`
  },  



  {
    id: 9432423,
    nama: "Story Laptop Bandung (GAMING)",
    logo: "./Toko/Logo Story Laptop Bandung.webp",
    rating: 4.9,
    ulasan: "79",
    pengikut: "2,1rb",
    shopUrl: "https://s.shopee.co.id/114FRXmFr9",
    top5: false,
    catatan: `Kenapa jadi peringkat 1?, Pilihan laptop gaming sangat banyak diberbagai harga, kalau ragu beli online ada store offlinenya dibandung`
  },  

    {
    id: 9432674746423,
    nama: "Dr.com komputer (GAMING)",
    logo: "./Toko/Logo Dr.com komputer.webp",
    rating: 4.7,
    ulasan: "639",
    pengikut: "2,5rb",
    shopUrl: "https://s.shopee.co.id/114FQXCfLN",
    top5: false,
    catatan: `Ngejual laptop gaming di banyak pilihan harga tapi beberapa produk harganya lebih tinggi dibanding yang lain`
  }, 

  {
    id: 132420,
    nama: "Dissant'sStore (GAMING)",
    logo: "./Toko/Logo Dissant'sStore.webp",
    rating: 4.9,
    ulasan: "806",
    pengikut: "2,4rb",
    shopUrl: "https://s.shopee.co.id/9V2nZBIrRP",
    top5: false,
    catatan: `Rating dan ulasan terbaik, pilihan laptop gaming diharga tinggi cukup banyak tapi sangat disayangkan dibudget 10 juta kebawah pilihannya sedikit`
  },

];

// ============================================================
// RENDER — tidak perlu diubah
// Nama toko yang mengandung "(GAMING)" otomatis dapat label Gaming.
// ============================================================

function parseToko(t) {
  const isGaming = /\(GAMING\)/i.test(t.nama);
  const nama = t.nama.replace(/\(GAMING\)/ig, "").replace(/\s{2,}/g, " ").trim();
  return { nama, isGaming };
}

function inisial(nama) {
  return nama.replace(/[^A-Za-z0-9 ]/g, "").trim().substring(0, 2).toUpperCase();
}

function renderTokoCard(t, rank) {
  const isTop = t.top5;
  const info  = parseToko(t);
  const safe  = t.nama.replace(/'/g, "\\'");

  return `
    <article class="toko-card${isTop ? " toko-card-top" : ""}">
      ${isTop ? `<span class="toko-rank" aria-label="Peringkat ${rank}">${rank}</span>` : ""}
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
        ${info.isGaming ? `<span class="toko-tag">Gaming</span>` : ""}
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
  const top  = TOKO.filter(t => t.top5);
  const lain = TOKO.filter(t => !t.top5);

  let html = "";

  if (top.length > 0) {
    html += `
      <section class="toko-group">
        <div class="toko-section-label">
          <h2 class="toko-section-title">Top ${top.length}</h2>
          <span class="toko-section-sub">Pilihan terbaik mimin</span>
        </div>
        <div class="toko-list toko-list-top">
          ${top.map((t, i) => renderTokoCard(t, i + 1)).join("")}
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
          ${lain.map(t => renderTokoCard(t, null)).join("")}
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
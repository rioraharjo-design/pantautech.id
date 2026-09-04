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
    id: 1,
    nama: "Gugel Laptop",
    logo: "./Toko/Logo Gugel Laptop.webp",
    rating: 4.9,
    ulasan: "3,7rb",
    pengikut: "6,3rb",
    shopUrl: "https://s.shopee.co.id/9ANv8UE4zn",
    top5: true,
    catatan: `Kenapa jadi peringkat 1? karena mereka toko yang paling sering direkomendasikan 
    oleh komunitas laptop bekas terutama ThinkPad, apapun kebutuhan kamu bakal 
    dijawab fast respon dan dijelasin secara detail`
  },

  // ── TOKO LAINNYA ────────────────────────────────────────────
  {
    id: 2,
    nama: "Jajanan Laptop",
    logo: "./Toko/Logo Jajanan Laptop.webp",
    rating: 4.9,
    ulasan: "2,8rb",
    pengikut: "3,9rb",
    shopUrl: "https://s.shopee.co.id/9UzvGX1rti",
    top5: true,
    catatan: `Gudangnya sama dengan gugel laptop, jadi catatan bisa cek yang gugel laptop`
  },

  {
    id: 3,
    nama: "WD.COMPUTER",
    logo: "./Toko/Logo WD.COMPUTER.webp",
    rating: 4.8,
    ulasan: "5rb",
    pengikut: "11,3rb",
    shopUrl: "https://s.shopee.co.id/Lmractxyh",
    top5: true,
    catatan: `pengen beli laptop tapi takut beli online?, toko ini solusinya, rating tinggi, follower banyak, dan ada toko offline di Harco Mangga Dua Jakarta`
  },

  {
    id: 4,
    nama: "Electro Com",
    logo: "./Toko/Logo Electro Com.webp",
    rating: 4.8,
    ulasan: "3,8rb",
    pengikut: "9,2rb",
    shopUrl: "https://s.shopee.co.id/gPhzS5BNd",
    top5: true,
    catatan: `Produknya sangat bervariasi, mau macbook? laptop workstation?, laptop bisnis? laptop chromebook?, semuanya ada dan harganya masih bisa diterima dengan sangat baik`
  },

  {
    id: 5,
    nama: "Glory Computerr",
    logo: "./Toko/Logo Glory Computerr.webp",
    rating: 4.9,
    ulasan: "865",
    pengikut: "1,1rb",
    shopUrl: "https://s.shopee.co.id/9pdHdqpjaO",
    top5: true,
    catatan: `Rating 4.9 dan menjamin bahwa semua barang diuji dengan baik, harga seringkali lebih murah dibanding yang lain, toko baru tapi sangat berkualitas`
  },

  {
    id: 6,
    nama: "Ari speed comp",
    logo: "./Toko/Logo Ari speed comp.webp",
    rating: 4.8,
    ulasan: "1,3rb",
    pengikut: "15rb",
    shopUrl: "https://s.shopee.co.id/5foNwWWYI0",
    top5: false,
    catatan: `Toko dengan pengikut terbanyak, kenapa? karena tokonya seringkali munculin 
    produk laptop hidden gem yang speknya sangat bagus tapi dijual dengan harga 
    murah, terutama buat kalian anak teknik pantau terus toko ini karena sering update 
    laptop workstation`
  },




];

// ============================================================
// RENDER — tidak perlu diubah
// ============================================================

function renderTokoCard(t, rank) {
  const isTop5 = t.top5;

  return `
    <div class="toko-card${isTop5 ? ' toko-card-top' : ''}">
      ${isTop5 ? `<div class="toko-rank">#${rank}</div>` : ""}
      <div class="toko-logo-wrap">
        <img src="${t.logo}" alt="${t.nama}" class="toko-logo"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
        <div class="toko-logo-fallback" style="display:none">${t.nama.substring(0,2).toUpperCase()}</div>
      </div>
      <div class="toko-info">
        <h3 class="toko-nama">${t.nama}</h3>
        <div class="toko-meta">
          <span class="toko-rating">
            <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style="color:#facc15"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ${t.rating}
          </span>
          <span class="toko-dot">·</span>
          <span class="toko-ulasan">${t.ulasan} ulasan</span>
          <span class="toko-dot">·</span>
          <span class="toko-pengikut">${t.pengikut} pengikut</span>
        </div>
      </div>
      <div class="toko-actions">
        <button class="toko-btn toko-btn-note" onclick="openModal('${t.nama.replace(/'/g,"\\'")}', ${t.id})">
          Catatan
        </button>
        <a href="${t.shopUrl}" target="_blank" rel="noopener"
          class="toko-btn toko-btn-shopee"
          onclick="trackTokoClick('${t.nama.replace(/'/g,"\\'")}')">
          Shopee
        </a>
      </div>
    </div>
  `;
}

function render() {
  const container = document.getElementById("tokoContainer");
  const top5  = TOKO.filter(t => t.top5);
  const lain  = TOKO.filter(t => !t.top5);

  let html = "";

  // Top 5
  if (top5.length > 0) {
    html += `<div class="toko-section-label">
      <span class="toko-section-title">Top ${top5.length}</span>
      <span class="toko-section-sub">Pilihan terbaik mimin</span>
    </div>`;
    html += `<div class="toko-list toko-list-top">`;
    top5.forEach((t, i) => { html += renderTokoCard(t, i + 1); });
    html += `</div>`;
  }

  // Toko Lainnya
  if (lain.length > 0) {
    html += `<div class="toko-section-label" style="margin-top:32px;">
      <span class="toko-section-title">Toko Lainnya</span>
      <span class="toko-section-sub">Sudah dicek, layak dijadikan pilihan</span>
    </div>`;
    html += `<div class="toko-list">`;
    lain.forEach(t => { html += renderTokoCard(t, null); });
    html += `</div>`;
  }

  container.innerHTML = html;
}

// ── Modal catatan ────────────────────────────────────────────
function openModal(nama, id) {
  const toko = TOKO.find(t => t.id === id);
  if (!toko) return;

  document.getElementById("modalTitle").textContent = toko.nama;
  // Convert newlines to <br> and wrap paragraphs
  const formatted = toko.catatan
    .split("\n\n")
    .map(p => `<p>${p.replace(/\n/g, "<br>")}</p>`)
    .join("");
  document.getElementById("modalBody").innerHTML = formatted;
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
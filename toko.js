/**
 * toko.js – Tampilan halaman Toko Terpercaya
 * Data toko ada di toko-data.js
 */

// ============================================================
// RENDER — tidak perlu diubah
// Nama toko yang mengandung "(GAMING)" atau "(MACBOOK)" otomatis
// dapat label Gaming atau MacBook.
// ============================================================

function inisial(nama) {
  return nama.replace(/[^A-Za-z0-9 ]/g, "").trim().substring(0, 2).toUpperCase();
}

// Jumlah laptop tersedia di katalog yang punya link dari toko ini
function jumlahLaptop(t) {
  if (typeof PRODUCTS === "undefined") return 0;
  const k = tokoKey(t.nama);
  return PRODUCTS.filter(p => !p.sold_out && [p.toko, ...(p.linkLain || []).map(l => l && l.toko)]
    .some(n => n && tokoKey(n) === k)).length;
}

function renderTokoCard(t) {
  const isTop = t.rank != null;
  const info  = parseToko(t);
  const safe  = t.nama.replace(/'/g, "\\'");
  const glow  = isTop && t.rank <= 3 ? " toko-rank-glow" : "";
  const jumlah = jumlahLaptop(t);

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
        ${jumlah ? `<a class="toko-lihat" href="index.html?toko=${encodeURIComponent(info.nama)}"
          onclick="trackLihatLaptop('${safe}')">Lihat ${jumlah} laptop
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" width="12" height="12" aria-hidden="true"><polyline points="9 6 15 12 9 18"/></svg></a>` : ""}
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
function trackLihatLaptop(namaToko) {
  if (typeof gtag !== "function") return;
  gtag("event", "klik_lihat_laptop", { nama_toko: namaToko });
}

function trackTokoClick(namaToko) {
  if (typeof gtag !== "function") return;
  gtag("event", "klik_toko", { nama_toko: namaToko });
}

// ── Init ─────────────────────────────────────────────────────
render();
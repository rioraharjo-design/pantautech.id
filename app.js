/**
 * app.js – Pantau Tech
 * ============================================================
 * Data produk ada di products.js. File ini cuma mengatur tampilan.
 *
 * LABEL OTOMATIS DARI NAMA PRODUK:
 *   (GAMING)  → badge "Gaming" di foto, teks di nama disembunyikan
 *   Spek GPU RTX / GTX / RX / MX → otomatis dapat badge "Gaming" juga
 *   (TEKNIK)  → badge "Workstation" di foto, teks di nama disembunyikan
 *   (TERLARIS), (JUARA 5 JUTA), (HARGA NAIK), dll
 *             → tampil sebagai label hijau di atas nama
 *   (INTEL), (AMD), (2015) → tetap jadi bagian nama
 *
 *   (PILIHAN MIMIN) → label hijau + masuk fitur "Bantu pilihin"
 *
 * ALTERNATIF UNTUK LAPTOP HABIS (opsional, di products.js):
 *   alternatif: 2026102404,            → id laptop pengganti
 *   alternatif_alasan: "Lebih murah…", → alasan singkat (boleh dikosongkan)
 *   Kalau diisi, kartu yang habis dapat tombol "Lihat alternatifnya",
 *   yang membuka perbandingan laptop habis vs penggantinya.
 *
 * Opsional: field usecase: ["gaming", "teknik"] di products.js
 * juga bisa dipakai, hasilnya sama.
 *
 * LINK LAIN (opsional, di products.js):
 *   toko: "Gugel Laptop",        → nama toko link utama (shopUrl)
 *   varianUtama: "T14",          → (opsional) varian link utama
 *   linkLain: [
 *     { url: "https://s.shopee.co.id/...", harga: 5785500, toko: "MBM Tech Store" },
 *     { url: "...", harga: 4650000, toko: "Redstar Electronic", varian: "T14s (RAM Gak Bisa Ditambah)", bawah: true }
 *   ],
 *   Tulisan tiap pilihan = nama toko + varian (kalau ada).
 *   Pilihan diurutkan dari yang termurah. Yang paling atas warnanya hijau,
 *   dan kalau gak punya varian dapat tambahan "(Pilihan Utama)".
 *   Contoh: "Gugel Laptop (Pilihan Utama)", "MBM Tech Store",
 *           "Redstar Electronic T14s (RAM Gak Bisa Ditambah)", "Gugel Laptop T14".
 *   Harga di kartu otomatis pakai yang termurah.
 *   Tambah bawah: true di link yang harus selalu paling bawah (misal T14s
 *   yang RAM nya gak bisa ditambah). Link itu gak dipakai buat harga kartu
 *   dan gak pernah jadi pilihan hijau, walaupun harganya paling murah.
 *   Link yang habis tinggal dihapus dari daftar. Nama toko juga dikirim ke GA4.
 *
 * LOGO TOKO (data toko di toko-data.js):
 *   Laptop bekas: logo toko dari semua link tampil di pojok kanan bawah foto
 *   (urut termurah). Laptop baru (global / odm): label "Mall".
 *   Klik logo → jendela info toko (rating, catatan, tombol "Lihat toko").
 *   Nama toko di products.js gak harus sama persis dengan toko-data.js,
 *   huruf besar kecil, spasi, titik, dan "( OFFICIAL STORE )" diabaikan.
 *   Toko yang belum ada di toko-data.js gak dapat logo.
 *
 * KATEGORI:
 *   Di kartu cuma ada dua badge: BEKAS dan BARU (global + odm = BARU).
 *   Kata "global", "odm", "lokal", "merek lokal", "mall" tetap bisa dicari.
 *
 * FILTER TOKO:
 *   index.html?toko=Gugel%20Laptop → cuma laptop yang punya link dari toko itu
 *   (link utama atau link lain). Dipakai link "Lihat laptop" di halaman toko.
 *   Ngetik nama toko di pencarian juga bisa.
 * ============================================================
 */

// ── State ────────────────────────────────────────────────────
let activeCategory = "semua";
let activePriceMin = 0;
let activePriceMax = Infinity;
let activeTier     = "semua";
let activeSort     = "default";
let searchQuery    = "";
let pitaLaris      = new Map();  // id laptop → tulisan pita "#1 TERLARIS"
let activeToko     = null;    // data toko dari toko-data.js kalau filter toko aktif
let guideMode      = false;   // true setelah pengunjung pakai "Lihat Pilihan Mimin"

// ── Harga termurah ───────────────────────────────────────────
// Laptop yang punya linkLain: harga di kartu, filter harga, urutan,
// dan Bantu pilihin pakai harga termurah dari semua link.
// Harga link utama (price asli di products.js) disimpan di hargaUtama.
PRODUCTS.forEach(p => {
  p.hargaUtama = p.price;
  if (!Array.isArray(p.linkLain)) return;
  p.linkLain.forEach(l => {
    if (l && l.url && l.harga && !l.bawah && l.harga < p.price) p.price = l.harga;
  });
});

// ── Format harga ─────────────────────────────────────────────
function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

// ── Badge kategori ───────────────────────────────────────────
// Global dan ODM sama-sama tampil sebagai "Baru"
const CATEGORY_META = {
  global: { label: "Baru",  cls: "badge-baru"  },
  bekas:  { label: "Bekas", cls: "badge-bekas" },
  odm:    { label: "Baru",  cls: "badge-baru"  }
};
const isBaru = p => p.category !== "bekas";

// ── Tier config ──────────────────────────────────────────────
const TIER_META = {
  "S":  { label: "Tier S",  cls: "tier-s"     },
  "A+": { label: "Tier A+", cls: "tier-aplus" },
  "A":  { label: "Tier A",  cls: "tier-a"     },
  "B+": { label: "Tier B+", cls: "tier-bplus" },
  "B":  { label: "Tier B",  cls: "tier-b"     },
  "C":  { label: "Tier C",  cls: "tier-c"     },
};

// ── Price ranges ─────────────────────────────────────────────
// 1–9 juta: per juta. Mulai 10 juta: rentang (batas atas tidak termasuk,
// jadi Rp15.000.000 masuk "15–20 Juta", bukan "10–15 Juta").
const JT = 1_000_000;
const PRICE_RANGES = [{ label: "Semua Harga", short: "Harga", min: 0, max: Infinity }];
for (let jt = 1; jt <= 9; jt++) {
  PRICE_RANGES.push({ label: `Rp ${jt} Juta`, short: `${jt} Juta`, min: jt * JT, max: (jt + 1) * JT - 1 });
}
[[10, 15], [15, 20], [20, 30], [30, 50], [50, 100]].forEach(([a, b]) => {
  PRICE_RANGES.push({
    label: `Rp ${a}–${b} Juta`, short: `${a}–${b} Juta`,
    min: a * JT, max: b === 100 ? b * JT : b * JT - 1
  });
});

// ── Build price menu ─────────────────────────────────────────
function buildPriceMenu() {
  const menu = document.getElementById("priceMenu");
  // Rentang harga yang gak ada laptopnya sama sekali gak ditampilkan
  const ada = r => PRODUCTS.some(p => p.price >= r.min && p.price <= r.max);
  menu.innerHTML = PRICE_RANGES.map((r, i) => (i > 0 && !ada(r)) ? "" : `
    <li>
      <button class="price-option ${i === 0 ? "active" : ""}" data-index="${i}">${r.label}</button>
    </li>
  `).join("");
}

// ── Baca label dari nama produk ──────────────────────────────
// Hasil: { name: nama bersih, usecase: ["gaming","teknik"], highlights: ["TERLARIS"] }
const KEEP_IN_NAME = ["INTEL", "AMD"];
// Contoh yang cocok: "RTX 3050", "GTX 1650Ti", "Radeon RX 6600M", "RX6500M", "MX450"
const GPU_GAMING = /\b(RTX|GTX|RX|MX)\s?\d/i;

function parseProduct(p) {
  const usecase    = new Set(Array.isArray(p.usecase) ? p.usecase.map(u => String(u).toLowerCase()) : []);
  const highlights = [];

  const name = p.name.replace(/\(([^)]+)\)/g, (match, inner) => {
    const tag = inner.trim();
    const up  = tag.toUpperCase();
    if (up === "GAMING") { usecase.add("gaming"); return ""; }
    if (up === "TEKNIK") { usecase.add("teknik"); return ""; }
    if (/^\d{4}$/.test(tag) || KEEP_IN_NAME.includes(up)) return match;
    highlights.push(tag);
    return "";
  }).replace(/\s{2,}/g, " ").trim();

  // Pakai GPU dedicated (RTX / GTX / RX / MX) → otomatis Gaming
  if (p.specs.some(s => GPU_GAMING.test(s))) usecase.add("gaming");

  // Urutan badge selalu Gaming dulu, lalu Workstation (tag di products.js tetap (TEKNIK))
  const order = ["gaming", "teknik"];
  const sorted = [...usecase].sort((x, y) => order.indexOf(x) - order.indexOf(y));
  return { name, usecase: sorted, highlights };
}

// ── Render kartu ─────────────────────────────────────────────
function renderCard(p, isSoldOut = false) {
  const meta     = CATEGORY_META[p.category] || { label: p.category, cls: "" };
  const tier     = p.tier && TIER_META[p.tier] ? TIER_META[p.tier] : null;
  const info     = parseProduct(p);
  const specs    = p.specs.map(s => `<li>${s}</li>`).join("");
  const safeName = p.name.replace(/'/g, "\\'");

  const usecaseBadges = info.usecase.map(u =>
    u === "gaming" ? `<span class="badge-use">Gaming</span>` :
    u === "teknik" ? `<span class="badge-use">Workstation</span>` : ""
  ).join("");

  const highlight = info.highlights.length
    ? `<p class="card-highlight">${info.highlights.join(" / ")}</p>` : "";

  return `
    <article class="card${isSoldOut ? " card-sold-out" : ""}" id="produk-${p.id}">
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${info.name}" class="card-img" loading="lazy" />
        ${tier ? `<span class="tier-badge ${tier.cls}">${tier.label}</span>` : ""}
        <span class="badge ${meta.cls}">${meta.label}</span>
        ${usecaseBadges ? `<div class="badge-use-row">${usecaseBadges}</div>` : ""}
        ${isSoldOut ? `<span class="badge-habis">Habis</span>` : logoStack(p)}
        ${!isSoldOut && pitaLaris.has(p.id) ? `<span class="pita-laris">${pitaLaris.get(p.id)}</span>` : ""}
      </div>
      <div class="card-body">
        ${highlight}
        <h3 class="card-title">${info.name}</h3>
        <ul class="card-specs">${specs}</ul>
        <p class="card-price">${formatRupiah(p.price)}</p>
        <div class="card-actions">
          <a href="${p.videoUrl}" target="_blank" rel="noopener" class="btn btn-video"
            onclick="trackClick('video', '${safeName}', '${p.category}', ${p.price})">
            <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/></svg>
            Video
          </a>
          ${isSoldOut
            ? `<span class="btn btn-habis">Stok Habis</span>`
            : linkLainAktif(p).length
              ? shopDropdown(p, safeName)
              : `<a href="${p.shopUrl}" target="_blank" rel="noopener" class="btn btn-shop"
                onclick="trackClick('shopee', '${safeName}', '${p.category}', ${p.price})">Shopee</a>`
          }
          ${isSoldOut && findAlternatif(p)
            ? `<button type="button" class="btn btn-alt" onclick="lihatAlternatif(${p.id})">
                Lihat alternatifnya
              </button>`
            : ""
          }
        </div>
      </div>
    </article>
  `;
}

// ── Toko per laptop ──────────────────────────────────────────
// Semua link laptop (utama + linkLain), urut termurah, lengkap dengan data tokonya.
// Link dengan bawah: true selalu ditaruh paling bawah.
function semuaLink(p) {
  const semua = [
    { url: p.shopUrl, harga: p.hargaUtama, varian: p.varianUtama, toko: p.toko, utama: true },
    ...linkLainAktif(p).map(l => ({ ...l, harga: l.harga || p.hargaUtama }))
  ].sort((x, y) => (!!x.bawah - !!y.bawah) || (x.harga - y.harga));
  const min = Math.min(...semua.map(l => l.harga));
  return semua.map(l => ({ ...l, termurah: l.harga === min,
    data: typeof cariToko === "function" ? cariToko(l.toko) : null }));
}

// Toko unik yang ada di toko-data.js (satu toko bisa punya 2 link, misal beda varian)
function tokoLaptop(p) {
  const seen = new Set();
  return semuaLink(p).filter(l => {
    if (!l.data || seen.has(l.data.id)) return false;
    seen.add(l.data.id);
    return true;
  });
}

function punyaToko(p, toko) {
  if (!toko || typeof tokoKey !== "function") return false;
  const k = tokoKey(toko.nama);
  return [p.toko, ...linkLainAktif(p).map(l => l.toko)].some(n => n && tokoKey(n) === k);
}

function logoStack(p) {
  if (isBaru(p)) {
    return `<button type="button" class="card-toko card-toko-mall" onclick="bukaToko(event, ${p.id})"
      aria-label="Dijual di Shopee Mall">Mall</button>`;
  }
  const list = tokoLaptop(p);
  if (!list.length) return "";
  const label = list.length === 1 ? "Info toko" : `Info ${list.length} toko`;
  return `<button type="button" class="card-toko" onclick="bukaToko(event, ${p.id})" aria-label="${label}">
    ${list.map(l => `<img src="${l.data.logo}" alt="" loading="lazy">`).join("")}
  </button>`;
}

// ── Tombol Shopee dengan pilihan link ────────────────────────
function linkLainAktif(p) {
  return Array.isArray(p.linkLain) ? p.linkLain.filter(l => l && l.url) : [];
}

function shopDropdown(p, safeName) {
  const esc   = s => String(s || "").replace(/'/g, "\\'");
  // Urut dari yang termurah; yang paling atas (termurah) diberi warna hijau
  const semua = semuaLink(p);
  const labelOpsi = (l, i) => {
    const nama = [l.toko || "Toko lain", l.varian].filter(Boolean).join(" ");
    return i === 0 && !l.varian ? `${nama} (Pilihan Utama)` : nama;
  };
  const items = semua.map((l, i) => `
    <a href="${l.url}" target="_blank" rel="noopener" class="shop-opt${i === 0 ? " shop-opt-utama" : ""}"
      onclick="trackClick('${l.utama ? "shopee" : "shopee_lain"}', '${safeName}', '${p.category}', ${l.harga || p.price}, '${esc(l.toko)}')">
      ${l.data ? `<img class="shop-opt-logo" src="${l.data.logo}" alt="" loading="lazy">` : ""}
      <span class="shop-opt-text">
        <span class="shop-opt-label">${labelOpsi(l, i)}</span>
        <span class="shop-opt-price">${formatRupiah(l.harga || p.price)}</span>
      </span>
      <svg class="shop-opt-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" width="14" height="14" aria-hidden="true"><polyline points="9 6 15 12 9 18"/></svg>
    </a>`).join("");
  return `
    <button type="button" class="btn btn-shop btn-shop-dd" aria-haspopup="true" aria-expanded="false"
      onclick="toggleShopMenu(event, this)">
      Shopee
      <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" width="13" height="13" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <div class="shop-menu">${items}</div>`;
}

function closeShopMenus(except) {
  document.querySelectorAll(".shop-menu.open").forEach(m => {
    if (m === except) return;
    m.classList.remove("open");
    m.previousElementSibling?.classList.remove("open");
    m.previousElementSibling?.setAttribute("aria-expanded", "false");
  });
}

function toggleShopMenu(e, btn) {
  e.stopPropagation();
  const menu = btn.nextElementSibling;
  const buka = !menu.classList.contains("open");
  closeAllDropdowns();
  closeShopMenus(menu);
  menu.classList.toggle("open", buka);
  btn.classList.toggle("open", buka);
  btn.setAttribute("aria-expanded", String(buka));
}

// ── Filter & Render ──────────────────────────────────────────
// Kata kunci tersembunyi buat pencarian (gak tampil di kartu)
function kataKunci(p) {
  const kata = isBaru(p) ? ["baru", "mall", "original", "ori"] : ["bekas", "second"];
  if (p.category === "odm")    kata.push("odm", "lokal", "merek lokal", "merk lokal");
  if (p.category === "global") kata.push("global");
  [p.toko, ...linkLainAktif(p).map(l => l.toko)].forEach(n => {
    if (!n) return;
    kata.push(n.toLowerCase());
    const t = typeof cariToko === "function" ? cariToko(n) : null;
    if (t) kata.push(parseToko(t).nama.toLowerCase());
  });
  return kata;
}

function matchesFilters(p) {
  const q = searchQuery.toLowerCase().trim();
  const matchPrice = p.price >= activePriceMin && p.price <= activePriceMax;
  const matchTier  = activeTier === "semua" || p.tier === activeTier;
  if (!matchPrice || !matchTier) return false;
  if (activeToko && !punyaToko(p, activeToko)) return false;
  if (q === "") return true;

  const info = parseProduct(p);
  return p.name.toLowerCase().includes(q)
    || p.specs.some(s => s.toLowerCase().includes(q))
    || info.usecase.some(u => u.includes(q))
    || (info.usecase.includes("teknik") && "workstation".includes(q))
    || kataKunci(p).some(k => k.includes(q));
}

// ── Pita "#1 TERLARIS" ───────────────────────────────────────
// Cuma 3 laptop terlaris di seluruh katalog (yang masih tersedia) yang dapet pita,
// diambil dari urutan.js (batas URUTAN_LARIS = laptop yang pernah laku).
// Pita nempel terus di kartunya: di filter harga, tab, pencarian, tier, dan toko
// tulisannya tetap "#1 TERLARIS". Di urutan default, laptop berpita paling atas.
function hitungPita() {
  pitaLaris = new Map();
  if (typeof URUTAN === "undefined" || !Array.isArray(URUTAN)) return;
  const batas = typeof URUTAN_LARIS === "number" ? URUTAN_LARIS : URUTAN.length;
  URUTAN.slice(0, batas)
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(p => p && !p.sold_out)
    .slice(0, 3)
    .forEach((p, i) => pitaLaris.set(p.id, `#${i + 1} TERLARIS`));
}
hitungPita();

function sortProducts(arr) {
  if (activeSort === "asc")  return [...arr].sort((a, b) => a.price - b.price);
  if (activeSort === "desc") return [...arr].sort((a, b) => b.price - a.price);
  // Default: urutan dari urutan.js (terlaris, lalu paling banyak diklik).
  // Laptop yang belum ada di urutan.js (baru masuk) mulai di urutan 20,
  // diselipin tiap 3 laptop, yang id nya paling baru duluan.
  if (typeof URUTAN === "undefined" || !Array.isArray(URUTAN)) return arr;
  const posisi = new Map(URUTAN.map((id, i) => [id, i]));
  const baru = PRODUCTS.filter(p => !posisi.has(p.id)).sort((a, b) => b.id - a.id);
  baru.forEach((p, k) => posisi.set(p.id, 18.5 + k * 3));
  // Laptop berpita (#1, #2, #3) selalu paling atas, urut sesuai nomornya
  const kunci = p => pitaLaris.has(p.id)
    ? -100 + parseInt(pitaLaris.get(p.id).slice(1), 10)
    : posisi.get(p.id);
  return [...arr].sort((a, b) => kunci(a) - kunci(b));
}

function sectionHead(judul, info, isMimin) {
  return `
    <div class="section-head${isMimin ? " section-head-mimin" : ""}">
      <h2>${judul}</h2>
      <span>${info}</span>
    </div>`;
}

function applyFilters() {
  const grid  = document.getElementById("productsGrid");
  const empty = document.getElementById("emptyState");
  const count = document.getElementById("resultCount");

  let aktif = [];
  let habis = PRODUCTS.filter(p => p.sold_out && matchesFilters(p));

  if (activeCategory === "habis") {
    // Tab Habis: hanya produk sold_out
    habis = sortProducts(habis);
  } else {
    aktif = PRODUCTS.filter(p => {
      if (p.sold_out) return false;
      const matchCat = activeCategory === "semua"
        || (activeCategory === "baru" ? isBaru(p) : p.category === activeCategory);
      return matchCat && matchesFilters(p);
    });
    aktif = sortProducts(aktif);
    // Produk habis selalu di paling bawah, tanpa ikut sort
  }

  const all = [...aktif.map(p => renderCard(p, false)), ...habis.map(p => renderCard(p, true))];

  // Mode pilihan mimin: semua laptop di budget itu tetap tampil,
  // tapi dipisah jadi "Pilihan Mimin" di atas dan "Laptop lain" di bawah.
  if (guideMode && activeCategory !== "habis" && all.length) {
    const mimin = aktif.filter(isPilihanMimin);
    const lain  = aktif.filter(p => !isPilihanMimin(p));
    const budget = budgetText();

    let html = sectionHead("Pilihan Mimin", `${mimin.length} laptop`, true);
    html += mimin.length
      ? mimin.map(p => renderCard(p, false)).join("")
      : `<p class="section-empty">Belum ada pilihan mimin untuk filter ini.</p>`;

    if (lain.length || habis.length) {
      html += sectionHead(`Laptop lain di ${budget}`,
        `${lain.length} laptop${habis.length ? `, ${habis.length} habis` : ""}`, false);
      html += lain.map(p => renderCard(p, false)).join("");
      html += habis.map(p => renderCard(p, true)).join("");
    }

    grid.innerHTML = html;
    empty.style.display = "none";
    updateTokoBanner(aktif.length);
    if (count) {
      count.innerHTML = `<strong>${mimin.length}</strong> pilihan mimin`
        + `<span class="count-muted">, ${lain.length} laptop lain</span>`;
    }
    updateGuideNotice();
    return;
  }

  grid.innerHTML = all.join("");
  empty.style.display = all.length ? "none" : "block";
  updateTokoBanner(aktif.length);

  if (count) {
    if (!all.length) {
      count.textContent = "";
    } else if (activeCategory === "habis") {
      count.innerHTML = `<strong>${habis.length}</strong> habis`;
    } else {
      count.innerHTML = `<strong>${aktif.length}</strong> tersedia`
        + (habis.length ? `<span class="count-muted">, ${habis.length} habis</span>` : "");
    }
  }

  updateGuideNotice();
}

// ── Category tabs ────────────────────────────────────────────
document.getElementById("categoryTabs").addEventListener("click", e => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
  activeCategory = btn.dataset.cat;
  applyFilters();
});

// ── Helper: tutup semua dropdown ────────────────────────────
function closeAllDropdowns() {
  closeShopMenus();
  ["priceMenu", "sortMenu", "tierMenu"].forEach(id => {
    document.getElementById(id)?.classList.remove("open");
  });
  ["priceBtn", "sortBtn", "tierBtn"].forEach(id => {
    document.getElementById(id)?.classList.remove("open");
  });
}

document.addEventListener("click", closeAllDropdowns);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeAllDropdowns(); });

function setupDropdown(btnId, menuId) {
  const btn  = document.getElementById(btnId);
  const menu = document.getElementById(menuId);
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const isOpen = menu.classList.contains("open");
    closeAllDropdowns();
    if (!isOpen) {
      menu.classList.add("open");
      btn.classList.add("open");
      menu.querySelector(".active")?.scrollIntoView({ block: "nearest" });
    }
  });
  return { btn, menu };
}

// ── Price dropdown ───────────────────────────────────────────
const price = setupDropdown("priceBtn", "priceMenu");
const priceLbl = document.getElementById("priceBtnLabel");

price.menu.addEventListener("click", e => {
  const opt = e.target.closest(".price-option");
  if (!opt) return;
  price.menu.querySelectorAll(".price-option").forEach(o => o.classList.remove("active"));
  opt.classList.add("active");
  const range    = PRICE_RANGES[parseInt(opt.dataset.index, 10)];
  activePriceMin = range.min;
  activePriceMax = range.max;
  const isAll = range.min === 0 && range.max === Infinity;
  priceLbl.textContent = range.short;
  price.btn.classList.toggle("is-set", !isAll);
  closeAllDropdowns();
  applyFilters();
});

// ── Sort dropdown ────────────────────────────────────────────
const sort = setupDropdown("sortBtn", "sortMenu");
const sortLbl = document.getElementById("sortBtnLabel");

sort.menu.addEventListener("click", e => {
  const opt = e.target.closest(".price-option");
  if (!opt) return;
  sort.menu.querySelectorAll(".price-option").forEach(o => o.classList.remove("active"));
  opt.classList.add("active");
  activeSort = opt.dataset.sort;
  const labels = { default: "Urutkan", asc: "Termurah", desc: "Termahal" };
  sortLbl.textContent = labels[activeSort] || "Urutkan";
  sort.btn.classList.toggle("is-set", activeSort !== "default");
  closeAllDropdowns();
  applyFilters();
});

// ── Tier dropdown ────────────────────────────────────────────
const tierDd = setupDropdown("tierBtn", "tierMenu");
const tierLbl = document.getElementById("tierBtnLabel");

tierDd.menu.addEventListener("click", e => {
  const opt = e.target.closest(".price-option");
  if (!opt) return;
  tierDd.menu.querySelectorAll(".price-option").forEach(o => o.classList.remove("active"));
  opt.classList.add("active");
  activeTier = opt.dataset.tier;
  tierLbl.textContent = activeTier === "semua" ? "Tier" : "Tier " + activeTier;
  tierDd.btn.classList.toggle("is-set", activeTier !== "semua");
  closeAllDropdowns();
  applyFilters();
});

// ── Search ───────────────────────────────────────────────────
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", e => {
  searchQuery = e.target.value;
  applyFilters();
});

// ── Helper: atur filter dari kode (dipakai reset & bantu pilih) ──
function setPrice(index) {
  const range = PRICE_RANGES[index];
  activePriceMin = range.min;
  activePriceMax = range.max;
  price.menu.querySelectorAll(".price-option").forEach((o, i) => o.classList.toggle("active", i === index));
  priceLbl.textContent = range.short;
  price.btn.classList.toggle("is-set", index !== 0);
}

function setSort(value) {
  activeSort = value;
  sort.menu.querySelectorAll(".price-option").forEach(o => o.classList.toggle("active", o.dataset.sort === value));
  sortLbl.textContent = { default: "Urutkan", asc: "Termurah", desc: "Termahal" }[value];
  sort.btn.classList.toggle("is-set", value !== "default");
}

function setSearch(text) {
  searchQuery = text;
  searchInput.value = text;
}

// ── Reset semua filter ───────────────────────────────────────
function resetAll() {
  activeCategory = "semua";
  activeTier = "semua";
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.cat === "semua"));
  tierDd.menu.querySelectorAll(".price-option").forEach((o, i) => o.classList.toggle("active", i === 0));
  tierLbl.textContent = "Tier";
  tierDd.btn.classList.remove("is-set");
  setPrice(0);
  setSort("default");
  setSearch("");
  guideMode = false;
  setTokoFilter(null);
  applyFilters();
}

document.getElementById("resetFilters")?.addEventListener("click", resetAll);

// ============================================================
// BANTU PILIH
// Sebelum katalog tampil, pengunjung ditanya dulu.
// "Belum" → pilih harga → katalog menampilkan semua laptop di budget itu,
// urut termurah: pilihan mimin di atas, laptop lain di bawahnya.
// Laptop pilihan mimin = nama di products.js yang ada (PILIHAN MIMIN).
// ============================================================
const PILIHAN_MIMIN = "pilihan mimin";
const GUIDE_KEY     = "pt_bantu_pilih_selesai";

const guide       = document.getElementById("guide");
const guideStep1  = document.getElementById("guideStep1");
const guideStep2  = document.getElementById("guideStep2");
const guideNotice = document.getElementById("guideNotice");

function isPilihanMimin(p) {
  return p.name.toLowerCase().includes(PILIHAN_MIMIN);
}

function buildGuidePrices() {
  document.getElementById("guidePrices").innerHTML = PRICE_RANGES.map((r, i) => {
    const jumlah = PRODUCTS.filter(p => !p.sold_out && isPilihanMimin(p) && p.price >= r.min && p.price <= r.max).length;
    const nama   = i === 0 ? "Semua Harga" : r.short;
    return `
      <button class="guide-price${i === 0 ? " guide-price-all" : ""}" type="button" data-index="${i}" ${jumlah ? "" : "disabled"}>
        <span class="guide-price-name">${nama}</span>
        <span class="guide-price-count">${jumlah ? `${jumlah} laptop` : "Belum ada"}</span>
      </button>`;
  }).join("");
}

function showStep(n) {
  guideStep1.hidden = n !== 1;
  guideStep2.hidden = n !== 2;
}

// Tombol "Bantu pilihin" di katalog langsung ke langkah pilih budget
function openGuide() {
  showStep(2);
  document.body.classList.add("guide-open");
  guide.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeGuide(scrollToProducts) {
  document.body.classList.remove("guide-open");
  try { sessionStorage.setItem(GUIDE_KEY, "1"); } catch (e) {}
  if (scrollToProducts) {
    const target = document.querySelector(".products-section");
    const header = document.querySelector(".site-header").offsetHeight;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - header - 8, behavior: "smooth" });
  }
}

// Keterangan di atas hasil: tampil selama mode pilihan mimin aktif,
// dan isinya ikut berubah kalau pengunjung ganti kategori, harga, urutan, atau tier.
const CATEGORY_TEXT = { baru: "Baru", bekas: "Bekas", habis: "stok habis" };
const SORT_TEXT     = { asc: "urut dari termurah", desc: "urut dari termahal" };

function budgetText() {
  const range = PRICE_RANGES.find(r => r.min === activePriceMin && r.max === activePriceMax);
  return !range || range.max === Infinity ? "semua budget" : `budget ${range.short}`;
}

function updateGuideNotice() {
  if (!guideNotice) return;
  guideNotice.hidden = !guideMode;
  if (!guideMode) return;

  const bagian = [`<strong>${budgetText()}</strong>`];
  if (activeCategory !== "semua") bagian.push(`<strong>${CATEGORY_TEXT[activeCategory]}</strong>`);
  if (activeTier !== "semua")     bagian.push(`<strong>Tier ${activeTier}</strong>`);
  if (SORT_TEXT[activeSort])      bagian.push(SORT_TEXT[activeSort]);

  document.getElementById("guideNoticeText").innerHTML = `Pilihan mimin untuk ${bagian.join(", ")}`;
}

document.getElementById("guideUdah").addEventListener("click", () => {
  trackGuide("udah");
  closeGuide(false);
});

document.getElementById("guideBelum").addEventListener("click", () => {
  trackGuide("belum");
  showStep(2);
});

document.getElementById("guideBack").addEventListener("click", () => showStep(1));

document.getElementById("guidePrices").addEventListener("click", e => {
  const btn = e.target.closest(".guide-price");
  if (!btn || btn.disabled) return;
  const index = parseInt(btn.dataset.index, 10);

  // Mulai dari katalog bersih, lalu pasang filter bantu pilih
  resetAll();
  setPrice(index);
  setSort("asc");
  guideMode = true;
  applyFilters();

  trackGuide("pilih_harga", PRICE_RANGES[index].label);
  closeGuide(true);
});

document.getElementById("guideNoticeReset").addEventListener("click", resetAll);
document.getElementById("guideReopen").addEventListener("click", openGuide);


function trackGuide(langkah, harga) {
  if (typeof gtag !== "function") return;
  gtag("event", "bantu_pilih", harga ? { langkah, harga } : { langkah });
}

// ============================================================
// ALTERNATIF UNTUK LAPTOP HABIS
// Klik "Lihat alternatifnya" → muncul jendela perbandingan:
// laptop yang habis (kiri) vs penggantinya (kanan), di layar yang sama.
// ============================================================
function findAlternatif(p) {
  if (p.alternatif == null) return null;
  const alt = PRODUCTS.find(x => String(x.id) === String(p.alternatif));
  return alt && !alt.sold_out ? alt : null;   // pengganti yang habis juga diabaikan
}

// Selisih harga: "+110rb", "lebih murah 520rb", "+1,1jt", "harga sama"
function selisihHarga(dari, ke) {
  const d = ke - dari;
  if (Math.abs(d) < 10_000) return { teks: "Harga sama", cls: "same" };
  const abs  = Math.abs(d);
  const nilai = abs >= JT
    ? (Math.round(abs / 100_000) / 10).toString().replace(".", ",") + "jt"
    : Math.round(abs / 1000) + "rb";
  return d > 0 ? { teks: `+${nilai}`, cls: "up" } : { teks: `Lebih murah ${nilai}`, cls: "down" };
}

function compareSide(p, isAlt) {
  const meta = CATEGORY_META[p.category] || { label: p.category, cls: "" };
  const tier = p.tier && TIER_META[p.tier] ? TIER_META[p.tier] : null;
  const info = parseProduct(p);
  return `
    <div class="cmp-side${isAlt ? " cmp-side-alt" : " cmp-side-habis"}">
      <p class="cmp-label">${isAlt ? "Alternatifnya" : "Stok habis"}</p>
      <div class="cmp-img">
        <img src="${p.image}" alt="${info.name}" />
        ${tier ? `<span class="tier-badge ${tier.cls}">${tier.label}</span>` : ""}
        <span class="badge ${meta.cls}">${meta.label}</span>
      </div>
      <h3 class="cmp-name">${info.name}</h3>
      <p class="cmp-price">${formatRupiah(p.price)}</p>
    </div>`;
}

function ensureCompareModal() {
  let el = document.getElementById("cmpOverlay");
  if (el) return el;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="cmp-overlay" id="cmpOverlay" aria-hidden="true">
      <div class="cmp-box" role="dialog" aria-modal="true" aria-labelledby="cmpTitle">
        <div class="cmp-head">
          <h2 class="cmp-title" id="cmpTitle">Bandingin dulu</h2>
          <button class="cmp-close" type="button" aria-label="Tutup">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" width="18" height="18" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
          </button>
        </div>
        <div class="cmp-body" id="cmpBody"></div>
      </div>
    </div>`);
  el = document.getElementById("cmpOverlay");
  el.addEventListener("click", e => {
    if (e.target === el || e.target.closest(".cmp-close")) closeCompare();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeCompare(); });
  return el;
}

function lihatAlternatif(idHabis) {
  const habis = PRODUCTS.find(x => String(x.id) === String(idHabis));
  const alt   = habis && findAlternatif(habis);
  if (!alt) return;

  const overlay = ensureCompareModal();
  const selisih = selisihHarga(habis.price, alt.price);
  const altName = alt.name.replace(/'/g, "\\'");
  // Link termurah, sama dengan harga yang tampil
  const altLink = semuaLink(alt)[0];

  // Spek dibandingkan baris per baris; yang beda ditebalkan di sisi alternatif
  const rows = Math.max(habis.specs.length, alt.specs.length);
  let specRows = "";
  for (let i = 0; i < rows; i++) {
    const a = habis.specs[i] || "", b = alt.specs[i] || "";
    const beda = a.trim().toLowerCase() !== b.trim().toLowerCase();
    specRows += `
      <div class="cmp-row${beda ? " cmp-row-diff" : ""}">
        <span>${a}</span><span>${b}</span>
      </div>`;
  }

  document.getElementById("cmpBody").innerHTML = `
    <div class="cmp-grid">
      ${compareSide(habis, false)}
      ${compareSide(alt, true)}
    </div>
    <p class="cmp-diff cmp-diff-${selisih.cls}">${selisih.teks}</p>
    <div class="cmp-specs">${specRows}</div>
    ${habis.alternatif_alasan ? `
      <div class="cmp-reason">
        <strong>Kenapa ini?</strong>
        <span>${habis.alternatif_alasan}</span>
      </div>` : ""}
    <div class="cmp-actions">
      <a href="${alt.videoUrl}" target="_blank" rel="noopener" class="btn btn-video"
        onclick="trackClick('video', '${altName}', '${alt.category}', ${alt.price})">
        <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/></svg>
        Video
      </a>
      ${linkLainAktif(alt).length
        ? shopDropdown(alt, altName)
        : `<a href="${altLink.url}" target="_blank" rel="noopener" class="btn btn-shop"
            onclick="trackClick('shopee', '${altName}', '${alt.category}', ${alt.price})">Beli di Shopee</a>`}
    </div>`;

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  overlay.querySelector(".cmp-box").scrollTop = 0;

  if (typeof gtag === "function") {
    gtag("event", "klik_alternatif", { dari: habis.name, ke: alt.name });
  }
}

function closeCompare() {
  const overlay = document.getElementById("cmpOverlay");
  if (!overlay || !overlay.classList.contains("open")) return;
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ============================================================
// INFO TOKO (klik logo di foto)
// Laptop bekas: rating, ulasan, catatan, dan tombol "Lihat toko" (link
// affiliate ke halaman toko). Laptop baru: keterangan Shopee Mall.
// ============================================================
function ensureTokoModal() {
  let el = document.getElementById("tokoOverlay");
  if (el) return el;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="cmp-overlay" id="tokoOverlay" aria-hidden="true">
      <div class="cmp-box tk-box" role="dialog" aria-modal="true" aria-labelledby="tokoTitle">
        <div class="cmp-head">
          <h2 class="cmp-title" id="tokoTitle">Info toko</h2>
          <button class="cmp-close" type="button" aria-label="Tutup">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" width="18" height="18" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
          </button>
        </div>
        <div class="cmp-body" id="tokoBody"></div>
      </div>
    </div>`);
  el = document.getElementById("tokoOverlay");
  el.addEventListener("click", e => {
    if (e.target === el || e.target.closest(".cmp-close")) closeTokoModal();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeTokoModal(); });
  return el;
}

const STAR = `<svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;

// Satu toko: tampil lengkap. Beberapa toko: yang termurah terbuka lengkap,
// toko lain cuma kelihatan rating dan harga, klik buat buka (yang lain otomatis ketutup).
function tokoBlok(l, i, sendiri, namaLaptop) {
  const t = l.data;
  // Nama ditulis sama kayak di dropdown (nama dari products.js), logo dan data dari toko-data.js
  const nama = l.toko || parseToko(t).nama;
  const safeToko = parseToko(t).nama.replace(/'/g, "\\'");
  const harga = `${formatRupiah(l.harga)}${l.varian ? ` <span class="tk-varian">${l.varian}</span>` : ""}`;
  const buka = sendiri || i === 0;
  const head = `
      <div class="tk-top">
        <img class="tk-logo" src="${t.logo}" alt="">
        <div class="tk-info">
          <h3 class="tk-nama">${nama}${!sendiri && i === 0 ? `<span class="tk-murah">${l.termurah ? "Termurah" : "Pilihan Utama"}</span>` : ""}</h3>
          <div class="tk-meta">
            <span class="tk-rating">${STAR} ${t.rating}</span>
            <span>${t.ulasan} ulasan</span>
            ${sendiri ? `<span>${t.pengikut} pengikut</span>` : ""}
          </div>
          <p class="tk-harga">${harga}</p>
        </div>
        ${sendiri ? "" : `<svg class="tk-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" width="16" height="16" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`}
      </div>`;
  const body = `
      <div class="tk-body">
        ${t.grup ? `<span class="tk-grup">Satu grup dengan ${t.grup}</span>` : ""}
        ${t.catatan ? `<div class="tk-catatan">${formatCatatan(t.catatan)}</div>` : ""}
        <a href="${t.shopUrl}" target="_blank" rel="noopener" class="btn btn-shop tk-btn"
          onclick="trackTokoKatalog('${safeToko}', '${namaLaptop}')">Lihat toko</a>
      </div>`;
  if (sendiri) return `<div class="tk-item open">${head}${body}</div>`;
  return `
    <div class="tk-item tk-acc${buka ? " open" : ""}">
      <button type="button" class="tk-head" onclick="bukaTutupToko(this)" aria-expanded="${buka}">${head}</button>
      ${body}
    </div>`;
}

function bukaTutupToko(btn) {
  const item = btn.closest(".tk-item");
  const buka = !item.classList.contains("open");
  item.parentElement.querySelectorAll(".tk-acc.open").forEach(x => {
    x.classList.remove("open");
    x.querySelector(".tk-head").setAttribute("aria-expanded", "false");
  });
  if (buka) {
    item.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
  }
}

function bukaToko(e, id) {
  e.stopPropagation();
  closeAllDropdowns();
  const p = PRODUCTS.find(x => String(x.id) === String(id));
  if (!p) return;
  const overlay = ensureTokoModal();
  const namaLaptop = parseProduct(p).name;
  const safeName = p.name.replace(/'/g, "\\'");
  let judul, isi;

  if (isBaru(p)) {
    judul = "Shopee Mall";
    isi = `
      <div class="tk-item">
        <div class="tk-top">
          <span class="card-toko-mall tk-mall">Mall</span>
          <div class="tk-info"><h3 class="tk-nama">Dijual di Shopee Mall</h3></div>
        </div>
        <div class="tk-catatan">
          <p>Laptop baru di Pantau Tech selalu diambil dari toko Shopee Mall, yaitu toko resmi merek atau distributor yang sudah diverifikasi Shopee.</p>
          <p>Barangnya baru dan original, jadi kamu gak perlu khawatir dapat barang palsu atau rekondisi.</p>
        </div>
      </div>`;
  } else {
    const list = tokoLaptop(p);
    if (!list.length) return;
    const sendiri = list.length === 1;
    judul = sendiri ? "Info toko" : `Tersedia di ${list.length} toko`;
    isi = `<p class="tk-laptop">${namaLaptop}</p><div class="tk-list">`
      + list.map((l, i) => tokoBlok(l, i, sendiri, safeName)).join("") + `</div>`;
  }

  document.getElementById("tokoTitle").textContent = judul;
  document.getElementById("tokoBody").innerHTML = isi;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  overlay.querySelector(".cmp-box").scrollTop = 0;

  if (typeof gtag === "function") gtag("event", "klik_logo_toko", { nama_laptop: p.name, kategori: p.category });
}

function closeTokoModal() {
  const overlay = document.getElementById("tokoOverlay");
  if (!overlay || !overlay.classList.contains("open")) return;
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function trackTokoKatalog(namaToko, namaLaptop) {
  if (typeof gtag !== "function") return;
  gtag("event", "klik_toko", { nama_toko: namaToko, sumber: "katalog", nama_laptop: namaLaptop });
}

// ============================================================
// FILTER TOKO (index.html?toko=...)
// ============================================================
function setTokoFilter(toko) {
  activeToko = toko || null;
  if (!activeToko) {
    try {
      const url = new URL(location.href);
      if (url.searchParams.has("toko")) {
        url.searchParams.delete("toko");
        history.replaceState(null, "", url.pathname + url.search + url.hash);
      }
    } catch (e) {}
  }
}

function updateTokoBanner(jumlah) {
  let bn = document.getElementById("tokoBanner");
  if (!activeToko) { if (bn) bn.hidden = true; return; }
  if (!bn) {
    const grid = document.getElementById("productsGrid");
    grid.insertAdjacentHTML("beforebegin", `<div class="toko-banner" id="tokoBanner"></div>`);
    bn = document.getElementById("tokoBanner");
  }
  const nama = parseToko(activeToko).nama;
  bn.hidden = false;
  bn.innerHTML = `
    <img src="${activeToko.logo}" alt="">
    <div class="toko-banner-text">
      <strong>Rekomendasi dari ${nama}</strong>
    </div>
    <button type="button" class="toko-banner-close" onclick="hapusTokoFilter()">Hapus</button>`;
}

function hapusTokoFilter() {
  setTokoFilter(null);
  applyFilters();
}

function tokoDariUrl() {
  try {
    const nama = new URL(location.href).searchParams.get("toko");
    return nama && typeof cariToko === "function" ? cariToko(nama) : null;
  } catch (e) { return null; }
}

// ── GA4 ──────────────────────────────────────────────────────
function trackClick(tombol, namaLaptop, kategori, harga, namaToko) {
  if (typeof gtag !== "function") return;
  const data = { tombol, nama_laptop: namaLaptop, kategori, harga };
  if (namaToko) data.nama_toko = namaToko;
  gtag("event", "klik_produk", data);
}

// ── Init ─────────────────────────────────────────────────────
buildPriceMenu();
buildGuidePrices();
activeToko = tokoDariUrl();
applyFilters();
if (activeToko) {
  // Datang dari halaman toko: lewati pertanyaan bantu pilih, langsung ke hasil
  document.body.classList.remove("guide-open");
  try { sessionStorage.setItem(GUIDE_KEY, "1"); } catch (e) {}
  requestAnimationFrame(() => {
    const target = document.getElementById("tokoBanner") || document.querySelector(".products-section");
    const header = document.querySelector(".site-header").offsetHeight;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - header - 12 });
  });
}

// Sudah pernah jawab di sesi ini (misal balik dari halaman Toko)? Langsung katalog.
try {
  if (sessionStorage.getItem(GUIDE_KEY)) document.body.classList.remove("guide-open");
} catch (e) {}
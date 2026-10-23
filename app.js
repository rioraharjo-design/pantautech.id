/**
 * app.js – Pantau Tech
 * ============================================================
 * Data produk ada di products.js. File ini cuma mengatur tampilan.
 *
 * LABEL OTOMATIS DARI NAMA PRODUK:
 *   (GAMING)  → badge "Gaming" di foto, teks di nama disembunyikan
 *   Spek GPU RTX / GTX / RX / MX → otomatis dapat badge "Gaming" juga
 *   (TEKNIK)  → badge "Teknik" di foto, teks di nama disembunyikan
 *   (TERLARIS), (JUARA 5 JUTA), (HARGA NAIK), dll
 *             → tampil sebagai label hijau di atas nama
 *   (INTEL), (AMD), (2015) → tetap jadi bagian nama
 *
 * Opsional: field usecase: ["gaming", "teknik"] di products.js
 * juga bisa dipakai, hasilnya sama.
 * ============================================================
 */

// ── State ────────────────────────────────────────────────────
let activeCategory = "semua";
let activePriceMin = 0;
let activePriceMax = Infinity;
let activeTier     = "semua";
let activeSort     = "default";
let searchQuery    = "";

// ── Format harga ─────────────────────────────────────────────
function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

// ── Badge kategori ───────────────────────────────────────────
const CATEGORY_META = {
  global: { label: "Global", cls: "badge-global" },
  bekas:  { label: "Bekas",  cls: "badge-bekas"  },
  odm:    { label: "ODM",    cls: "badge-odm"    }
};

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
  menu.innerHTML = PRICE_RANGES.map((r, i) => `
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

  // Urutan badge selalu Gaming dulu, lalu Teknik
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
    u === "teknik" ? `<span class="badge-use">Teknik</span>` : ""
  ).join("");

  const highlight = info.highlights.length
    ? `<p class="card-highlight">${info.highlights.join(" / ")}</p>` : "";

  return `
    <article class="card${isSoldOut ? " card-sold-out" : ""}">
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${info.name}" class="card-img" loading="lazy" />
        ${tier ? `<span class="tier-badge ${tier.cls}">${tier.label}</span>` : ""}
        <span class="badge ${meta.cls}">${meta.label}</span>
        ${usecaseBadges ? `<div class="badge-use-row">${usecaseBadges}</div>` : ""}
        ${isSoldOut ? `<span class="badge-habis">Habis</span>` : ""}
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
            : `<a href="${p.shopUrl}" target="_blank" rel="noopener" class="btn btn-shop"
                onclick="trackClick('shopee', '${safeName}', '${p.category}', ${p.price})">Shopee</a>`
          }
        </div>
      </div>
    </article>
  `;
}

// ── Filter & Render ──────────────────────────────────────────
function matchesFilters(p) {
  const q = searchQuery.toLowerCase().trim();
  const matchPrice = p.price >= activePriceMin && p.price <= activePriceMax;
  const matchTier  = activeTier === "semua" || p.tier === activeTier;
  if (!matchPrice || !matchTier) return false;
  if (q === "") return true;

  const info = parseProduct(p);
  return p.name.toLowerCase().includes(q)
    || p.specs.some(s => s.toLowerCase().includes(q))
    || info.usecase.some(u => u.includes(q));
}

function sortProducts(arr) {
  if (activeSort === "asc")  return [...arr].sort((a, b) => a.price - b.price);
  if (activeSort === "desc") return [...arr].sort((a, b) => b.price - a.price);
  return arr; // default: urutan di products.js
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
      const matchCat = activeCategory === "semua" || p.category === activeCategory;
      return matchCat && matchesFilters(p);
    });
    aktif = sortProducts(aktif);
    // Produk habis selalu di paling bawah, tanpa ikut sort
  }

  const all = [...aktif.map(p => renderCard(p, false)), ...habis.map(p => renderCard(p, true))];
  grid.innerHTML = all.join("");
  empty.style.display = all.length ? "none" : "block";

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

// ── Reset semua filter (tombol di empty state) ───────────────
document.getElementById("resetFilters")?.addEventListener("click", () => {
  activeCategory = "semua"; activePriceMin = 0; activePriceMax = Infinity;
  activeTier = "semua"; activeSort = "default"; searchQuery = "";
  searchInput.value = "";
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.cat === "semua"));
  [["priceMenu", 0], ["sortMenu", 0], ["tierMenu", 0]].forEach(([id, i]) => {
    document.querySelectorAll(`#${id} .price-option`).forEach((o, idx) => o.classList.toggle("active", idx === i));
  });
  priceLbl.textContent = "Harga"; sortLbl.textContent = "Urutkan"; tierLbl.textContent = "Tier";
  ["priceBtn", "sortBtn", "tierBtn"].forEach(id => document.getElementById(id).classList.remove("is-set"));
  applyFilters();
});

// ── GA4 ──────────────────────────────────────────────────────
function trackClick(tombol, namaLaptop, kategori, harga) {
  if (typeof gtag !== "function") return;
  gtag("event", "klik_produk", {
    tombol, nama_laptop: namaLaptop, kategori, harga
  });
}

// ── Init ─────────────────────────────────────────────────────
buildPriceMenu();
applyFilters();
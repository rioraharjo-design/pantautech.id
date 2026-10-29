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
 * ============================================================
 */

// ── State ────────────────────────────────────────────────────
let activeCategory = "semua";
let activePriceMin = 0;
let activePriceMax = Infinity;
let activeTier     = "semua";
let activeSort     = "default";
let searchQuery    = "";
let guideMode      = false;   // true setelah pengunjung pakai "Lihat Pilihan Mimin"

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
    <article class="card${isSoldOut ? " card-sold-out" : ""}" id="produk-${p.id}">
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
      const matchCat = activeCategory === "semua" || p.category === activeCategory;
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
    if (count) {
      count.innerHTML = `<strong>${mimin.length}</strong> pilihan mimin`
        + `<span class="count-muted">, ${lain.length} laptop lain</span>`;
    }
    updateGuideNotice();
    return;
  }

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
const CATEGORY_TEXT = { global: "Global", bekas: "Bekas", odm: "ODM", habis: "stok habis" };
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
      <a href="${alt.shopUrl}" target="_blank" rel="noopener" class="btn btn-shop"
        onclick="trackClick('shopee', '${altName}', '${alt.category}', ${alt.price})">Beli di Shopee</a>
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

// ── GA4 ──────────────────────────────────────────────────────
function trackClick(tombol, namaLaptop, kategori, harga) {
  if (typeof gtag !== "function") return;
  gtag("event", "klik_produk", {
    tombol, nama_laptop: namaLaptop, kategori, harga
  });
}

// ── Init ─────────────────────────────────────────────────────
buildPriceMenu();
buildGuidePrices();
applyFilters();

// Sudah pernah jawab di sesi ini (misal balik dari halaman Toko)? Langsung katalog.
try {
  if (sessionStorage.getItem(GUIDE_KEY)) document.body.classList.remove("guide-open");
} catch (e) {}
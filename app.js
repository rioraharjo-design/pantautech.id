/**
 * app.js – Pantau Tech
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
  "A+": { label: "Tier A+", cls: "tier-aplus"  },
  "A":  { label: "Tier A",  cls: "tier-a"     },
  "B+": { label: "Tier B+", cls: "tier-bplus"  },
  "B":  { label: "Tier B",  cls: "tier-b"     },
  "C":  { label: "Tier C",  cls: "tier-c"     },
};

// ── Price ranges ─────────────────────────────────────────────
const PRICE_RANGES = [
  { label: "Semua Harga", min: 0,          max: Infinity   },
  { label: "Rp 1 Juta",  min: 1_000_000,  max: 1_999_999  },
  { label: "Rp 2 Juta",  min: 2_000_000,  max: 2_999_999  },
  { label: "Rp 3 Juta",  min: 3_000_000,  max: 3_999_999  },
  { label: "Rp 4 Juta",  min: 4_000_000,  max: 4_999_999  },
  { label: "Rp 5 Juta",  min: 5_000_000,  max: 5_999_999  },
  { label: "Rp 6 Juta",  min: 6_000_000,  max: 6_999_999  },
  { label: "Rp 7 Juta",  min: 7_000_000,  max: 7_999_999  },
  { label: "Rp 8 Juta",  min: 8_000_000,  max: 8_999_999  },
  { label: "Rp 9 Juta",  min: 9_000_000,  max: 9_999_999  },
  { label: "Rp 10 Juta", min: 10_000_000, max: 10_999_999 },
  { label: "Rp 11 Juta", min: 11_000_000, max: 11_999_999 },
  { label: "Rp 12 Juta", min: 12_000_000, max: 12_999_999 },
  { label: "Rp 13 Juta", min: 13_000_000, max: 13_999_999 },
  { label: "Rp 14 Juta", min: 14_000_000, max: 14_999_999 },
  { label: "Rp 15 Juta", min: 15_000_000, max: 15_999_999 },
  { label: "Rp 16 Juta", min: 16_000_000, max: 16_999_999 },
  { label: "Rp 17 Juta", min: 17_000_000, max: 17_999_999 },
  { label: "Rp 18 Juta", min: 18_000_000, max: 18_999_999 },
  { label: "Rp 19 Juta", min: 19_000_000, max: 19_999_999 },
  { label: "Rp 20 Juta", min: 20_000_000, max: 20_999_999 },
];

// ── Build price menu ─────────────────────────────────────────
function buildPriceMenu() {
  const menu = document.getElementById("priceMenu");
  menu.innerHTML = PRICE_RANGES.map((r, i) => `
    <li>
      <button class="price-option ${i === 0 ? 'active' : ''}" data-index="${i}">
        ${r.label}
      </button>
    </li>
  `).join("");
}

// ── Render kartu ─────────────────────────────────────────────
function renderCard(p, isSoldOut = false) {
  const meta  = CATEGORY_META[p.category];
  const specs = p.specs.map(s => `<li>${s}</li>`).join("");
  const tier  = p.tier && TIER_META[p.tier] ? TIER_META[p.tier] : null;
  const safeName = p.name.replace(/'/g, "\\'");

  return `
    <article class="card${isSoldOut ? ' card-sold-out' : ''}">
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${p.name}" class="card-img" loading="lazy" />
        <span class="badge ${meta.cls}">${meta.label}</span>
        ${isSoldOut ? '<span class="badge-habis">Habis</span>' : ""}
      </div>
      <div class="card-body">
        <div class="card-title-row">
          <h3 class="card-title">${p.name}</h3>
          ${tier ? `<span class="tier-badge ${tier.cls}">${tier.label}</span>` : ""}
        </div>
        <ul class="card-specs">${specs}</ul>
        <p class="card-price">${formatRupiah(p.price)}</p>
        <div class="card-actions">
          <a href="${p.videoUrl}" target="_blank" rel="noopener" class="btn btn-video"
            onclick="trackClick('video', '${safeName}', '${p.category}', ${p.price})">
            <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/></svg>
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
function applyFilters() {
  const q = searchQuery.toLowerCase().trim();

  function matchesFilters(p) {
    const matchPrice  = p.price >= activePriceMin && p.price <= activePriceMax;
    const matchTier   = activeTier === "semua" || p.tier === activeTier;
    const matchSearch = q === "" || p.name.toLowerCase().includes(q) || p.specs.some(s => s.toLowerCase().includes(q));
    return matchPrice && matchTier && matchSearch;
  }

  // Tab Habis — khusus tampilkan sold_out saja
  if (activeCategory === "habis") {
    let habis = PRODUCTS.filter(p => p.sold_out && matchesFilters(p));
    habis = sortProducts(habis);
    const grid  = document.getElementById("productsGrid");
    const empty = document.getElementById("emptyState");
    grid.innerHTML = habis.length ? habis.map(p => renderCard(p, true)).join("") : "";
    empty.style.display = habis.length ? "none" : "block";
    return;
  }

  // Mode normal
  let aktif = PRODUCTS.filter(p => {
    if (p.sold_out) return false;
    const matchCat = activeCategory === "semua" || p.category === activeCategory;
    return matchCat && matchesFilters(p);
  });

  let habis = PRODUCTS.filter(p => p.sold_out && matchesFilters(p));

  // Sort aktif sesuai pilihan, habis selalu di bawah tanpa sort
  aktif = sortProducts(aktif);

  const grid  = document.getElementById("productsGrid");
  const empty = document.getElementById("emptyState");
  const all   = [...aktif.map(p => renderCard(p, false)), ...habis.map(p => renderCard(p, true))];
  grid.innerHTML = all.length ? all.join("") : "";
  empty.style.display = all.length ? "none" : "block";
}

function sortProducts(arr) {
  if (activeSort === "asc")  return [...arr].sort((a, b) => a.price - b.price);
  if (activeSort === "desc") return [...arr].sort((a, b) => b.price - a.price);
  return arr; // default: urutan di products.js (sudah murah ke mahal)
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
  ["priceMenu","sortMenu","tierMenu"].forEach(id => {
    document.getElementById(id)?.classList.remove("open");
  });
  ["priceBtn","sortBtn","tierBtn"].forEach(id => {
    document.getElementById(id)?.classList.remove("open");
  });
}

document.addEventListener("click", closeAllDropdowns);

// ── Price dropdown ───────────────────────────────────────────
const priceBtn  = document.getElementById("priceBtn");
const priceMenu = document.getElementById("priceMenu");
const priceLbl  = document.getElementById("priceBtnLabel");

priceBtn.addEventListener("click", e => {
  e.stopPropagation();
  const isOpen = priceMenu.classList.contains("open");
  closeAllDropdowns();
  if (!isOpen) { priceMenu.classList.add("open"); priceBtn.classList.add("open"); }
});

priceMenu.addEventListener("click", e => {
  const opt = e.target.closest(".price-option");
  if (!opt) return;
  document.querySelectorAll("#priceMenu .price-option").forEach(o => o.classList.remove("active"));
  opt.classList.add("active");
  const range    = PRICE_RANGES[parseInt(opt.dataset.index, 10)];
  activePriceMin = range.min;
  activePriceMax = range.max;
  priceLbl.textContent = range.label === "Semua Harga" ? "Harga" : range.label;
  closeAllDropdowns();
  applyFilters();
});

// ── Sort dropdown ────────────────────────────────────────────
const sortBtn  = document.getElementById("sortBtn");
const sortMenu = document.getElementById("sortMenu");
const sortLbl  = document.getElementById("sortBtnLabel");

sortBtn.addEventListener("click", e => {
  e.stopPropagation();
  const isOpen = sortMenu.classList.contains("open");
  closeAllDropdowns();
  if (!isOpen) { sortMenu.classList.add("open"); sortBtn.classList.add("open"); }
});

sortMenu.addEventListener("click", e => {
  const opt = e.target.closest(".price-option");
  if (!opt) return;
  document.querySelectorAll("#sortMenu .price-option").forEach(o => o.classList.remove("active"));
  opt.classList.add("active");
  activeSort = opt.dataset.sort;
  const labels = { default: "Urutkan", asc: "Termurah", desc: "Termahal" };
  sortLbl.textContent = labels[activeSort] || "Urutkan";
  closeAllDropdowns();
  applyFilters();
});

// ── Tier dropdown ────────────────────────────────────────────
const tierBtn  = document.getElementById("tierBtn");
const tierMenu = document.getElementById("tierMenu");
const tierLbl  = document.getElementById("tierBtnLabel");

tierBtn.addEventListener("click", e => {
  e.stopPropagation();
  const isOpen = tierMenu.classList.contains("open");
  closeAllDropdowns();
  if (!isOpen) { tierMenu.classList.add("open"); tierBtn.classList.add("open"); }
});

tierMenu.addEventListener("click", e => {
  const opt = e.target.closest(".price-option");
  if (!opt) return;
  document.querySelectorAll("#tierMenu .price-option").forEach(o => o.classList.remove("active"));
  opt.classList.add("active");
  activeTier = opt.dataset.tier;
  tierLbl.textContent = activeTier === "semua" ? "Tier" : "Tier " + activeTier;
  closeAllDropdowns();
  applyFilters();
});

// ── Search ───────────────────────────────────────────────────
document.getElementById("searchInput").addEventListener("input", e => {
  searchQuery = e.target.value;
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
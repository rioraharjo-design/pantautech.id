/**
 * app.js – Logika filter, search, dan render kartu produk
 */

// ── State aktif ──────────────────────────────────────────────
let activeCategory = "semua";
let activePriceMin = 0;
let activePriceMax = Infinity;
let searchQuery    = "";

// ── Format harga Rupiah (angka penuh) ────────────────────────
function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

// ── Badge kategori ───────────────────────────────────────────
const CATEGORY_META = {
  global: { label: "Global", cls: "badge-global" },
  bekas:  { label: "Bekas",  cls: "badge-bekas"  },
  odm:    { label: "ODM",    cls: "badge-odm"    }
};

// ── Rentang harga untuk dropdown ─────────────────────────────
const PRICE_RANGES = [
  { label: "Semua Harga", min: 0,          max: Infinity   },
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

// ── Build dropdown dari PRICE_RANGES ─────────────────────────
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
function renderCard(p) {
  const meta  = CATEGORY_META[p.category];
  const specs = p.specs.map(s => `<li>${s}</li>`).join("");

  return `
    <article class="card">
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${p.name}" class="card-img" loading="lazy" />
        <span class="badge ${meta.cls}">${meta.label}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.name}</h3>
        <ul class="card-specs">${specs}</ul>
        <p class="card-price">${formatRupiah(p.price)}</p>
        <div class="card-actions">
          <a href="${p.videoUrl}" target="_blank" rel="noopener" class="btn btn-video">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/></svg>
            Video
          </a>
          <a href="${p.shopUrl}" target="_blank" rel="noopener" class="btn btn-shop">Shopee</a>
        </div>
      </div>
    </article>
  `;
}

// ── Filter & Render ──────────────────────────────────────────
function applyFilters() {
  const q = searchQuery.toLowerCase().trim();

  const filtered = PRODUCTS.filter(p => {
    const matchCat    = activeCategory === "semua" || p.category === activeCategory;
    const matchPrice  = p.price >= activePriceMin && p.price <= activePriceMax;
    const matchSearch =
      q === "" ||
      p.name.toLowerCase().includes(q) ||
      p.specs.some(s => s.toLowerCase().includes(q));

    return matchCat && matchPrice && matchSearch;
  });

  const grid  = document.getElementById("productsGrid");
  const empty = document.getElementById("emptyState");

  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.style.display = "block";
  } else {
    grid.innerHTML = filtered.map(renderCard).join("");
    empty.style.display = "none";
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

// ── Price dropdown ───────────────────────────────────────────
const priceBtn  = document.getElementById("priceBtn");
const priceMenu = document.getElementById("priceMenu");
const priceLbl  = document.getElementById("priceBtnLabel");

priceBtn.addEventListener("click", e => {
  e.stopPropagation();
  priceMenu.classList.toggle("open");
  priceBtn.classList.toggle("open");
});

document.addEventListener("click", () => {
  priceMenu.classList.remove("open");
  priceBtn.classList.remove("open");
});

priceMenu.addEventListener("click", e => {
  const opt = e.target.closest(".price-option");
  if (!opt) return;

  document.querySelectorAll(".price-option").forEach(o => o.classList.remove("active"));
  opt.classList.add("active");

  const range    = PRICE_RANGES[parseInt(opt.dataset.index, 10)];
  activePriceMin = range.min;
  activePriceMax = range.max;
  priceLbl.textContent = range.label === "Semua Harga" ? "Harga" : range.label;

  priceMenu.classList.remove("open");
  priceBtn.classList.remove("open");
  applyFilters();
});

// ── Search ───────────────────────────────────────────────────
document.getElementById("searchInput").addEventListener("input", e => {
  searchQuery = e.target.value;
  applyFilters();
});

// ── Init ─────────────────────────────────────────────────────
buildPriceMenu();
applyFilters();
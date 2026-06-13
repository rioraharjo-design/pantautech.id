const laptops = [
{
name: "ThinkPad T480",
category: "bekas",
budget: 3,
price: 3800000,
cpu: "Intel Core i5-8250U",
gpu: "Intel UHD 620",
ram: "16GB RAM",
storage: "256GB SSD",
image: "images/laptop3juta.jpg",
video: "#",
shopee: "#"
},
{
name: "EliteBook 840 G6",
category: "bekas",
budget: 4,
price: 4750000,
cpu: "Intel Core i5 Gen 8",
gpu: "Intel UHD 620",
ram: "16GB RAM",
storage: "512GB SSD",
image: "images/laptop4juta.jpg",
video: "#",
shopee: "#"
},
{
name: "Axioo Hype",
category: "odm",
budget: 5,
price: 5499000,
cpu: "Ryzen 5",
gpu: "Radeon Graphics",
ram: "16GB RAM",
storage: "512GB SSD",
image: "images/laptop5juta.jpg",
video: "#",
shopee: "#"
},
{
name: "Acer Aspire 5",
category: "global",
budget: 6,
price: 6499000,
cpu: "Ryzen 5 7530U",
gpu: "Radeon Graphics",
ram: "16GB RAM",
storage: "512GB SSD",
image: "images/laptop6juta.jpg",
video: "#",
shopee: "#"
},
{
name: "ThinkPad T14",
category: "bekas",
budget: 7,
price: 7499000,
cpu: "Ryzen 5 Pro",
gpu: "Radeon Graphics",
ram: "16GB RAM",
storage: "512GB SSD",
image: "images/laptop7juta.jpg",
video: "#",
shopee: "#"
},
{
name: "Advan Workplus",
category: "odm",
budget: 8,
price: 8499000,
cpu: "Ryzen 7",
gpu: "Radeon Graphics",
ram: "16GB RAM",
storage: "512GB SSD",
image: "images/laptop8juta.jpg",
video: "#",
shopee: "#"
},
{
name: "ASUS Vivobook",
category: "global",
budget: 9,
price: 9499000,
cpu: "Ryzen 7",
gpu: "Radeon Graphics",
ram: "16GB RAM",
storage: "1TB SSD",
image: "images/laptop9juta.jpg",
video: "#",
shopee: "#"
}
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");
const priceFilter = document.getElementById("priceFilter");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

let currentCategory = "all";

function formatRupiah(number){
return new Intl.NumberFormat("id-ID", {
style: "currency",
currency: "IDR",
maximumFractionDigits: 0
}).format(number);
}

function renderProducts(products){

```
productGrid.innerHTML = "";

if(products.length === 0){
    emptyState.style.display = "block";
} else {
    emptyState.style.display = "none";
}

resultCount.textContent = `${products.length} Laptop Ditemukan`;

products.forEach(laptop => {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
    <div class="card-image">

        <img
        src="${laptop.image}"
        alt="${laptop.name}">

        <span class="badge ${laptop.category}">
            ${laptop.category.toUpperCase()}
        </span>

    </div>

    <div class="card-content">

        <h3 class="card-title">${laptop.name}</h3>

        <div class="spec-list">

            <span>${laptop.cpu}</span>
            <span>${laptop.gpu}</span>
            <span>${laptop.ram}</span>
            <span>${laptop.storage}</span>

        </div>

        <div class="price">
            ${formatRupiah(laptop.price)}
        </div>

        <div class="card-buttons">

            <a href="${laptop.video}" target="_blank" class="video-btn">
                Review
            </a>

            <a href="${laptop.shopee}" target="_blank" class="shop-btn">
                Shopee
            </a>

        </div>

    </div>
`;

    productGrid.appendChild(card);

});
```

}

function filterProducts(){

```
const searchValue = searchInput.value.toLowerCase();
const selectedPrice = priceFilter.value;

const filtered = laptops.filter(laptop => {

    const matchSearch =
        laptop.name.toLowerCase().includes(searchValue);

    const matchCategory =
        currentCategory === "all" ||
        laptop.category === currentCategory;

    const matchPrice =
        selectedPrice === "all" ||
        laptop.budget.toString() === selectedPrice;

    return (
        matchSearch &&
        matchCategory &&
        matchPrice
    );

});

renderProducts(filtered);
```

}

categoryButtons.forEach(button => {

```
button.addEventListener("click", () => {

    categoryButtons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    currentCategory = button.dataset.category;

    filterProducts();

});
```

});

searchInput.addEventListener("input", filterProducts);
priceFilter.addEventListener("change", filterProducts);

renderProducts(laptops);

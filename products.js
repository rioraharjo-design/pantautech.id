/**
 * ============================================================
 *  DATA PRODUK – Edit di sini untuk menambah / mengubah produk
 * ============================================================
 *
 *  Setiap produk punya field berikut:
 *
 *  id        – unik, bebas (angka naik terus)
 *  name      – nama laptop
 *  category  – "global" | "bekas" | "odm"
 *  price     – harga RUPIAH penuh, tulis angka aslinya
 *              contoh: 7698000  →  tampil sebagai Rp7.698.000
 *              contoh: 8934000  →  tampil sebagai Rp8.934.000
 *  specs     – array string spesifikasi (maks ~4 baris)
 *  videoUrl  – link video TikTok kamu
 *  shopUrl   – link Shopee / Tokopedia
 *  image     – URL gambar produk (boleh path lokal atau URL)
 *
 *  Filter dropdown "Harga" memakai RENTANG:
 *    "3 Juta"  → 0 s/d 3.999.999
 *    "4 Juta"  → 4.000.000 s/d 4.999.999
 *    dst sampai "9 Juta" → 9.000.000 s/d 9.999.999
 *
 * ============================================================
 */

const PRODUCTS = [

  // ── SEKITAR 3 JUTA ──────────────────────────────────────
  {
    id: 1,
    name: "Lenovo ThinkPad T480s",
    category: "bekas",
    price: 3952000,
    specs: [
      "Intel Core i5-8250U",
      "Intel Graphics UHD 620",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7646777812036160786?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/4VaMFYVGrc",
    image:    "./LAPTOP 3 JUTA/ThinkPad T480s.jpg"
  },
  {
    id: 2,
    name: "Dell Latitude 7400",
    category: "bekas",
    price: 3960000,
    specs: [
      "Intel Core i5-8250U",
      "Intel UHD Graphics 620",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7646777812036160786?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/6feqpe6eVd",
    image:    "./LAPTOP 3 JUTA/Dell Latitude 7400.jpg"
  },
  {
    id: 3,
    name: "HP Elitebook 840 G5",
    category: "bekas",
    price: 3980000,
    specs: [
      "Intel Core i5-8250U",
      "Intel UHD Graphics 620",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7646777812036160786?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/8pjLPwLjVy",
    image:    "./LAPTOP 3 JUTA/HP Elitebook 840 G5.jpg"
  },
  {
    id: 80,
    name: "ThinkPad P50s (TEKNIK)",
    category: "bekas",
    price: 3125000,
    specs: [
      "Intel Core i5-6300U",
      "Nvidia Quadro M500M",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7650113386813885704?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/8pjLP4DVKs",
    image:    "./LAPTOP 3 JUTA/ThinkPad P50s.jpg"
  },

  // ── SEKITAR 4 JUTA ──────────────────────────────────────
  {
    id: 4,
    name: "ThinkPad T14 Gen 1 AMD",
    category: "bekas",
    price: 4454000,
    specs: [
      "AMD Ryzen 5 Pro 4650U",
      "Radeon Vega 6",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7647551966968646919?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/4qDCekqJ86",
    image:    "./LAPTOP 4 JUTA/ThinkPad T14 G1.jpg"
  },
    {
    id: 10,
    name: "Dell Latitude 7410",
    category: "bekas",
    price: 4235000,
    specs: [
      "Intel Core i5-10310U",
      "Intel UHD Graphics 10th Gen",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7647551966968646919?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/4VaMGJPLaF",
    image:    "./LAPTOP 4 JUTA/Dell Latitude 7410.jpg"
  },
    {
    id: 11,
    name: "HP Elitebook 845 G8",
    category: "bekas",
    price: 4991000,
    specs: [
      "AMD Ryzen 5 Pro 5650U",
      "Radeon Vega 7",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7647551966968646919?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/20t1Hq2YNT",
    image:    "./LAPTOP 4 JUTA/HP Elitebook 845 G8.jpg"
  },

      {
    id: 81,
    name: "ThinkPad P51 (TEKNIK)",
    category: "bekas",
    price: 4883000,
    specs: [
      "i7-7700HQ",
      "Nvidia Quadro M1200",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7650113386813885704?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/70HhDMopNv",
    image:    "./LAPTOP 4 JUTA/ThinkPad P51.jpg"
  },

  // ── SEKITAR 5 JUTA ──────────────────────────────────────
  {
    id: 5,
    name: "ThinkPad P52 (TEKNIK)",
    category: "bekas",
    price: 5424000,
    specs: [
      "Intel Core i7-8565H",
      "Nvidia Quadro P1000",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7650113386813885704?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/2g8i3Dn0t2",
    image:    "./LAPTOP 5 JUTA/ThinkPad P52.jpg"
  },

    {
    id: 13,
    name: "ThinkPad T14s Gen 2",
    category: "bekas",
    price: 5664000,
    specs: [
      "Intel Core i5-1135G7",
      "Intel Iris Xe",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7647900471994125576?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/902ls9xklu",
    image:    "./LAPTOP 5 JUTA/ThinkPad T14 G2.jpg"
  },

      {
    id: 90,
    name: "Axioo Hype 3 G11",
    category: "odm",
    price: 5951000,
    specs: [
      "Intel Core i3-1125G4",
      "Intel UHD Graphics 11th Gen",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7647900471994125576?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/4VaMVbGAtR",
    image:    "./LAPTOP 5 JUTA/Axioo Hype 3.jpg"
  },

        {
    id: 91,
    name: "Advan Workmate",
    category: "odm",
    price: 5759000,
    specs: [
      "AMD Ryzen 5 3500U",
      "Radeon Vega 8",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7647900471994125576?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/20t1X5kdKE",
    image:    "./LAPTOP 5 JUTA/Advan Workmate.jpg"
  },

          {
    id: 92,
    name: "Advan 2 in 1 Go Touchscreen",
    category: "odm",
    price: 5466000,
    specs: [
      "AMD Ryzen 3 3200U",
      "Radeon Vega 3",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7647900471994125576?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/4LGwJSZjMn",
    image:    "./LAPTOP 5 JUTA/Advan 360.jpg"
  },

  // ── SEKITAR 6 JUTA ──────────────────────────────────────
  {
    id: 6,
    name: "Axioo Hype 5 AMD X5-2",
    category: "odm",
    price: 6788000,
    specs: [
      "AMD Ryzen 5 7430U",
      "Radeon Vega 7",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648254926623182098?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/LknGcmWQR",
    image:    "./LAPTOP 6 JUTA/Axioo Hype 5 AMD X5-2.png"
  },
    {
    id: 14,
    name: "Zyrex D-Tech Pro V2",
    category: "odm",
    price: 6620000,
    specs: [
      "AMD Ryzen 5 6600H",
      "Radeon 660M",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648254926623182098?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/6feqo1rqPr",
    image:    "./LAPTOP 6 JUTA/Zyrex D-Tech Pro V2.png"
  },
      {
    id: 15,
    name: "Infinix XBOOK 15",
    category: "odm",
    price: 6881000,
    specs: [
      "AMD Ryzen 5 5500U",
      "Radeon Vega 7",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648254926623182098?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/1BJuGE3wFq",
    image:    "./LAPTOP 6 JUTA/Infinix XBOOK 15.avif"
  },
      {
    id: 16,
    name: "Acer Aspire Lite AL14-32P",
    category: "global",
    price: 6416000,
    specs: [
      "Intel N150",
      "Intel® Graphics",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648254926623182098?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/7Ab7PK1H1d",
    image:    "./LAPTOP 6 JUTA/Acer N150.png"
  },
      {
    id: 17,
    name: "HP Elitebook 835 G8",
    category: "bekas",
    price: 6958000,
    specs: [
      "AMD Ryzen 7 Pro 5850U",
      "Radeon Vega 8",
      "RAM 32GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648254926623182098?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/9fISO18EoJ",
    image:    "./LAPTOP 6 JUTA/HP Elitebook 835 G8.jpg"
  },
      {
    id: 18,
    name: "ThinkPad T14 Gen 2 AMD",
    category: "bekas",
    price: 6240000,
    specs: [
      "AMD Ryzen 7 Pro 5850U",
      "Radeon Vega 8",
      "RAM 16GB",
      "SSD 256GB (6,2JT), SSD 512GB (6,9JT)"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648254926623182098?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/3VhpKL328P",
    image:    "./LAPTOP 6 JUTA/ThinkPad T14 G2 AMD.webp"
  },
      {
    id: 19,
    name: "ThinkPad T14 Gen 2 MX450 (GAMING)",
    category: "bekas",
    price: 6912000,
    specs: [
      "Intel Core i7-1165G7",
      "Nvidia MX450",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648254926623182098?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/5Aq3JZCit2",
    image:    "./LAPTOP 6 JUTA/ThinkPad MX.jpg"
  },

       {
    id: 83,
    name: "ThinkPad P53 (TEKNIK)",
    category: "bekas",
    price: 6993000,
    specs: [
      "i7-9850H",
      "Nvidia Quadro T1000 4GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7650113386813885704?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/70HhDYNm9J",
    image:    "./LAPTOP 6 JUTA/ThinkPad T15 G2.jpg"
  },

  // ── SEKITAR 7 JUTA ──────────────────────────────────────
  {
    id: 7,
    name: "Advan Workplus Heritage",
    category: "odm",
    price: 7391000,
    specs: [
      "AMD Ryzen 5 7535HS",
      "Radeon 660M",
      "RAM 8GB",
      "SSD 256GB (7,3JT), 512GB (7,6JT)"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648607001504730386?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/W4Dl99kBh",
    image:    "./LAPTOP 7 JUTA/Advan Workplus Heritage.png"
  },
    {
    id: 20,
    name: "Infinix Xbook B14",
    category: "odm",
    price: 7434000,
    specs: [
      "AMD Ryzen 5 7535HS",
      "Radeon 660M",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648607001504730386?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/7fXOIQsUM6",
    image:    "./LAPTOP 7 JUTA/Infinix Xbook B14.webp"
  },
    {
    id: 21,
    name: "Axioo Hype 5 X6 AMD",
    category: "odm",
    price: 7583000,
    specs: [
      "AMD Ryzen 5 6600H",
      "Radeon 660M",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648607001504730386?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/6fer6naovA",
    image:    "./LAPTOP 7 JUTA/Axioo Hype 5 X6 AMD.jpg"
  },
    {
    id: 22,
    name: "Asus Vivobook 14 A1404VA",
    category: "global",
    price: 7949000,
    specs: [
      "Intel Core i3-1315U",
      "Intel UHD Graphics 13th Gen",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648607001504730386?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/3qKfjkUIbu",
    image:    "./LAPTOP 7 JUTA/Asus Vivobook 14.png"
  },

      {
    id: 25,
    name: "Dell Latitude 7430",
    category: "bekas",
    price: 7500000,
    specs: [
      "Intel Core i7-1270P",
      "Intel Iris Xe G7",
      "RAM 32GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648607001504730386?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/1LdKlvIdib",
    image:    "./LAPTOP 7 JUTA/Dell Latitude 7430.jpg"
  },

      {
    id: 26,
    name: "Advan Workmate Ultra",
    category: "odm",
    price: 7871000,
    specs: [
      "Intel Ultra 5 115U",
      "Intel Arc",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648994950436228359?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/4qDCwZDkDZ",
    image:    "./LAPTOP 8 JUTA/Advan Workmate Ultra.jpg"
  },


  // ── SEKITAR 8 JUTA ──────────────────────────────────────
  {
    id: 8,
    name: "Axioo Hype Ai 5",
    category: "odm",
    price: 8207000,
    specs: [
      "Intel Ultra 5 125H",
      "Intel Arc",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648994950436228359?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/4qDCwU20zh",
    image:    "./LAPTOP 8 JUTA/Axioo Hype Ai 5.png"
  },
    {
    id: 23,
    name: "Acer Aspire Lite AL15",
    category: "global",
    price: 8201000,
    specs: [
      "AMD Ryzen 5 7430U",
      "Radeon Vega 7",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648607001504730386?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/20t1Ybq2aG",
    image:    "./LAPTOP 7 JUTA/Acer Aspire Lite AL15.jpg"
  },

    {
    id: 27,
    name: "Infinix Xbook B14",
    category: "odm",
    price: 8364000,
    specs: [
      "Ryzen 7 7735HS",
      "Radeon 680M",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648994950436228359?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/gNdz6m422",
    image:    "./LAPTOP 8 JUTA/Infinix Xbook B14.jpg"
  },
    {
    id: 28,
    name: "Acer TravelMate P40",
    category: "global",
    price: 8062000,
    specs: [
      "Intel Core i5-1335U",
      "Intel Iris Xe",
      "RAM 8GB (8JT), 16GB (8,9JT)",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648994950436228359?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/qh4CJjqQS",
    image:    "./LAPTOP 8 JUTA/Acer TravelMate P40.webp"
  },
    {
    id: 29,
    name: "Asus Expertbook P1 P1403CVA",
    category: "global",
    price: 8099000,
    specs: [
      "Intel Core 3 100U",
      "Intel® Graphics",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648994950436228359?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/LknbWZiWC",
    image:    "./LAPTOP 8 JUTA/Asus Expertbook.png"
  },
      {
    id: 30,
    name: "ThinkPad T14 Gen 3 AMD",
    category: "bekas",
    price: 8544000,
    specs: [
      "Ryzen 7 Pro 6850U",
      "Radeon 680M",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648994950436228359?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/7Ab7kGzYvQ",
    image:    "./LAPTOP 8 JUTA/ThinkPad T14 G3 AMD.jpg"
  },
        {
    id: 100,
    name: "ThinkPad P15 Gen 1 (TEKNIK)",
    category: "bekas",
    price: 8544000,
    specs: [
      "i7-10850H",
      "Nvidia Quadro T1000",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7650475605644905735?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/902mDBFWzY",
    image:    "./LAPTOP 8 JUTA/ThinkPad T14 G3 AMD.jpg"
  },
  

  // ── SEKITAR 9 JUTA ──────────────────────────────────────
  {
    id: 9,
    name: "Advan Pixwar (GAMING)",
    category: "odm",
    price: 9599000,
    specs: [
      "AMD Ryzen 7 8745HS",
      "Radeon 780M",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7649347329555729682?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/9KfcKRn15V",
    image:    "./LAPTOP 9 JUTA/Advan Pixwar.jpg"
  },
    {
    id: 31,
    name: "Advan Workplus Ai",
    category: "odm",
    price: 9599000,
    specs: [
      "AMD Ryzen 7 255",
      "Radeon 780M",
      "RAM 8GB",
      "SSD 256GB (9,5JT), 512GB (9,8JT)"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7649347329555729682?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/40e5ykDHdM",
    image:    "./LAPTOP 9 JUTA/Advan Workplus Ai.webp"
  },
    {
    id: 32,
    name: "Lenovo Ideapad Slim 3 14",
    category: "global",
    price: 9205000,
    specs: [
      "Intel Core i5-13420H",
      "Intel UHD Graphics 13th Gen",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7649347329555729682?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/gNe0m4CIa",
    image:    "./LAPTOP 9 JUTA/Lenovo Ideapad Slim 3.png"
  },
      {
    id: 33,
    name: "Acer Aspire Lite 15",
    category: "global",
    price: 9159000,
    specs: [
      "Ryzen 5 8640HS",
      "Radeon 760M",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7649347329555729682?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/3VhpO64fzT",
    image:    "./LAPTOP 9 JUTA/Acer Aspire Lite 15.png"
  },
      {
    id: 34,
    name: "Asus Expertbook P1PM1403",
    category: "global",
    price: 9119000,
    specs: [
      "Ryzen 5 150",
      "Radeon 660M",
      "RAM 8GB (9,1JT), 16GB (9,8JT)",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7649347329555729682?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/80AEkX5MoZ",
    image:    "./LAPTOP 9 JUTA/Asus Expertbook.png"
  },
      {
    id: 36,
    name: "ThinkPad P71 (TEKNIK)",
    category: "bekas",
    price: 9312000,
    specs: [
      "Intel Xeon E-1535M",
      "Nvidia Quadro P4000",
      "RAM 32GB",
      "SSD 256GB(9,3JT), 512GB(9,9JT)"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7649347329555729682?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/9Uz2XaZlPp",
    image:    "./LAPTOP 9 JUTA/ThinkPad P71.jpg"
  },

];
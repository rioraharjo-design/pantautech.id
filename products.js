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
    image:    "./LAPTOP 3 JUTA/ThinkPad T480s.webp"
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
    image:    "./LAPTOP 3 JUTA/Dell Latitude 7400.webp"
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
    image:    "./LAPTOP 3 JUTA/HP Elitebook 840 G5.webp"
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
    image:    "./LAPTOP 3 JUTA/ThinkPad P50s.webp"
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
    image:    "./LAPTOP 4 JUTA/ThinkPad T14 G1.webp"
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
    image:    "./LAPTOP 4 JUTA/Dell Latitude 7410.webp"
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
    image:    "./LAPTOP 4 JUTA/HP Elitebook 845 G8.webp"
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
    image:    "./LAPTOP 4 JUTA/ThinkPad P51.webp"
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
    image:    "./LAPTOP 5 JUTA/ThinkPad P52.webp"
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
    image:    "./LAPTOP 5 JUTA/ThinkPad T14 G2.webp"
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
    image:    "./LAPTOP 5 JUTA/Axioo Hype 3.webp"
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
    image:    "./LAPTOP 5 JUTA/Advan Workmate.webp"
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
    image:    "./LAPTOP 5 JUTA/Advan 360.webp"
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
    image:    "./LAPTOP 6 JUTA/Axioo Hype 5 AMD X5-2.webp"
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
    image:    "./LAPTOP 6 JUTA/Zyrex D-Tech Pro V2.webp"
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
    image:    "./LAPTOP 6 JUTA/Infinix XBOOK 15.webp"
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
    image:    "./LAPTOP 6 JUTA/Acer N150.webp"
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
    image:    "./LAPTOP 6 JUTA/HP Elitebook 835 G8.webp"
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
    image:    "./LAPTOP 6 JUTA/Thinkpad MX.webp"
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
    image:    "./LAPTOP 6 JUTA/ThinkPad T15 G2.webp"
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
    image:    "./LAPTOP 7 JUTA/Advan Workplus Heritage.webp"
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
    image:    "./LAPTOP 7 JUTA/Axioo Hype 5 X6 AMD.webp"
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
    image:    "./LAPTOP 7 JUTA/Asus Vivobook 14.webp"
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
    image:    "./LAPTOP 7 JUTA/Dell Latitude 7430.webp"
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
    image:    "./LAPTOP 8 JUTA/Advan Workmate Ultra.webp"
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
    image:    "./LAPTOP 8 JUTA/Axioo Hype Ai 5.webp"
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
    image:    "./LAPTOP 7 JUTA/Acer Aspire Lite AL15.webp"
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
    image:    "./LAPTOP 8 JUTA/Infinix Xbook B14.webp"
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
    image:    "./LAPTOP 8 JUTA/Asus Expertbook.webp"
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
    image:    "./LAPTOP 8 JUTA/ThinkPad T14 G3 AMD.webp"
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
    image:    "./LAPTOP 8 JUTA/ThinkPad T14 G3 AMD.webp"
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
    image:    "./LAPTOP 9 JUTA/Advan Pixwar.webp"
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
    image:    "./LAPTOP 9 JUTA/Lenovo Ideapad Slim 3.webp"
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
    image:    "./LAPTOP 9 JUTA/Acer Aspire Lite 15.webp"
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
    image:    "./LAPTOP 9 JUTA/Asus Expertbook.webp"
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
    image:    "./LAPTOP 9 JUTA/ThinkPad P71.webp"
  },

// ── 10 JUTA ─────────────────────────────────────────────
  {
    id: 110,
    name: "HP 14",
    category: "global",
    price: 10182000,
    specs: [
     "Intel Ultra 5 125H",
     "Intel Arc",
     "RAM 16GB",
     "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651227474537270536?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/3g1IzrVKWu",
    image:    "./LAPTOP 10 JUTA/.webp"
  },

    {
    id: 120,
    name: "Acer Swift Go 14 AI",
    category: "global",
    price: 10463000,
    specs: [
     "Snapdragon X Plus",
     "Qualcomm Adreno",
     "RAM 16GB",
     "SSD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651227474537270536?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/1LdODPWdOg",
    image:    "./LAPTOP 10 JUTA/.webp"
  },

    {
    id: 130,
    name: "Lenovo V14 Gen 4",
    category: "global",
    price: 10224000,
    specs: [
     "Intel Core i7-13620H",
     "Intel UHD Graphic 13th gen",
     "RAM 16GB",
     "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651227474537270536?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/2VpLdAh8e9",
    image:    "./LAPTOP 10 JUTA/.webp"
  },
  {
    id: 140,
    name: "Apple Macbook Neo",
    category: "global",
    price: 10284000,
    specs: [
     "Apple A18 Pro",
     "GPU Apple A18 Pro",
     "RAM 8GB",
     "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651227474537270536?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/7fXRngXlhb",
    image:    "./LAPTOP 10 JUTA/.webp"
  },

    {
    id: 150,
    name: "Tecno Megabook T1 14",
    category: "odm",
    price: 10224000,
    specs: [
     "Intel Core i9-13900HK",
     "Intel Iris Xe",
     "RAM 16GB",
     "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651227474537270536?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/7KubNr7ej6",
    image:    "./LAPTOP 10 JUTA/.webp"
  },

    {
    id: 160,
    name: "Axioo Hype 7 AMD X9",
    category: "odm",
    price: 10128000,
    specs: [
     "AMD Ryzen 7 8745HS",
     "Radeon 780M",
     "RAM 32GB",
     "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651227474537270536?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/20t53TtreC",
    image:    "./LAPTOP 10 JUTA/.webp"
  },

    {
    id: 170,
    name: "ThinkPad P1 Gen 2",
    category: "bekas",
    price: 10464000,
    specs: [
     "Intel Core i9-9880H",
     "Nvidia Quadro T2000",
     "RAM 16GB",
     "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651227474537270536?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/9fIW9ZnCUF",
    image:    "./LAPTOP 10 JUTA/.webp"
  },

    {
    id: 110,
    name: "Lenovo Legion 5 15ARH05H",
    category: "bekas",
    price: 10224000,
    specs: [
     "AMD Ryzen 5 4600H",
     "RTX 2060 6GB",
     "RAM 16GB",
     "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651227474537270536?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/2g8lyOhZji",
    image:    "./LAPTOP 10 JUTA/.webp"
  },
];
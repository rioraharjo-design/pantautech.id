const PRODUCTS = [
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
    id: 39999,
    name: "(HABIS) HP Elitebook 745 G6",
    category: "bekas",
    price: 3910000,
    specs: [
      "AMD Ryzen 5 3500U",
      "Radeon Vega 8",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/80BGXOcPZH",
    image:    "./LAPTOP 3 JUTA/HP Elitebook 745 G6.webp"
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
  {
    id: 4,
    name: "ThinkPad T14 Gen 1 AMD",
    category: "bekas",
    price: 4845000,
    specs: [
      "AMD Ryzen 5 Pro 4650U",
      "Radeon Vega 6",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7647551966968646919?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/9ANHSEyLIM",
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
    name: "(HARGA NAIK) HP Elitebook 845 G8 (TERLARIS)",
    category: "bekas",
    price: 4988000,
    specs: [
      "AMD Ryzen 5 Pro 5650U",
      "Radeon Vega 7",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7647551966968646919?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/2BDYso3ZoQ",
    image:    "./LAPTOP 5 JUTA/HP Elitebook 845 G8.webp"
  },
  {
    id: 233333,
    name: "HP Elitebook 845 G7",
    category: "bekas",
    price: 4679000,
    specs: [
      "AMD Ryzen 5 Pro 4650U",
      "Radeon Vega 6",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/",
    shopUrl:  "https://s.shopee.co.id/6AjTIUmld0",
    image:    "./LAPTOP 5 JUTA/HP Elitebook 845 G8.webp"
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
  {
    id: 5,
    name: "(HABIS)ThinkPad P52 TEKNIK",
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
    name: "ThinkPad T14 Gen 2 Ryzen 7",
    category: "bekas",
    price: 6240000,
    specs: [
      "AMD Ryzen 7 Pro 5850U",
      "Radeon Vega 8",
      "RAM 16GB",
      "SSD 256GB"
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
  {
    id: 7,
    name: "Advan Workplus Heritage",
    category: "odm",
    price: 7391000,
    specs: [
      "AMD Ryzen 5 7535HS",
      "Radeon 660M",
      "RAM 8GB",
      "SSD 256GB"
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
    image:    "./LAPTOP 7 JUTA/Advan Workmate Ultra.webp"
  },
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
    image:    "./LAPTOP 8 JUTA/Acer Aspire Lite AL15.webp"
  },
  {
    id: 27,
    name: "Infinix Xbook B14 R7",
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
      "RAM 8GB",
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
  {
    id: 9,
    name: "Advan Pixwar",
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
      "SSD 256GB"
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
      "RAM 8GB",
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
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7649347329555729682?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/9Uz2XaZlPp",
    image:    "./LAPTOP 9 JUTA/ThinkPad P71.webp"
  },
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
    image:    "./LAPTOP 10 JUTA/HP 14.webp"
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
    image:    "./LAPTOP 10 JUTA/Acer Swift Go 14 AI.webp"
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
    image:    "./LAPTOP 10 JUTA/Lenovo V14.webp"
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
    image:    "./LAPTOP 10 JUTA/Apple Macbook Neo.webp"
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
    image:    "./LAPTOP 10 JUTA/Tecno Megabook T1.webp"
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
    image:    "./LAPTOP 10 JUTA/Axioo Hype 7 AMD X9.webp"
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
    image:    "./LAPTOP 10 JUTA/ThinkPad P1 G2.webp"
  },
  {
    id: 180,
    name: "Lenovo Legion 5 15ARH05H (GAMING)",
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
    image:    "./LAPTOP 10 JUTA/Lenovo Legion 5.webp"
  },
  {
    id: 190,
    name: "Lenovo Ideapad 5 2in1",
    category: "global",
    price: 11138000,
    specs: [
      "Ryzen AI 7 350/Ryzen 7 8845HS",
      "Radeon 860M/Radeon 780M",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651590893132107026?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/60PF8WUgGm",
    image:    "./LAPTOP 11 JUTA/Lenovo 5.webp"
  },
  {
    id: 200,
    name: "Asus Expertbook P1403CVA",
    category: "global",
    price: 11553000,
    specs: [
      "Intel Core i7-13620H",
      "Intel UHD Graphics 13th Gen",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651590893132107026?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/7KucmGly4N",
    image:    "./LAPTOP 11 JUTA/Asus P1.webp"
  },
  {
    id: 201,
    name: "HP Omnibook 3 Next Gen Ai 14",
    category: "global",
    price: 10880000,
    specs: [
      "AMD Ryzen AI 5 340",
      "Radeon 840M",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651590893132107026?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/3B53omfidq",
    image:    "./LAPTOP 10 JUTA/HP Omnibook.webp"
  },
  {
    id: 202,
    name: "MSI Thin 15 B12UC-3298 (GAMING)",
    category: "global",
    price: 11399000,
    specs: [
      "Intel Core i7-12650H",
      "Nvidia GeForce RTX 3050 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651590893132107026?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/7pqtKeUycC",
    image:    "./LAPTOP 11 JUTA/MSI Thin.webp"
  },
  {
    id: 203,
    name: "Lenovo LOQ Essential 15ARP10E (GAMING)",
    category: "global",
    price: 12042000,
    specs: [
      "AMD Ryzen 7 7735HS",
      "Nvidia GeForce RTX 3050 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651590893132107026?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/AKYEJh6uy8",
    image:    "./LAPTOP 12 JUTA/Lenovo LOQ.webp"
  },
  {
    id: 204,
    name: "ThinkPad P53",
    category: "bekas",
    price: 11564000,
    specs: [
      "Intel Core i7-9750H",
      "Nvidia Quadro RTX 5000 16GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651590893132107026?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/6fevxeEiE2",
    image:    "./LAPTOP 11 JUTA/ThinkPad P53.webp"
  },
  {
    id: 205,
    name: "HP Victus 16 (GAMING)",
    category: "bekas",
    price: 11956000,
    specs: [
      "Intel Core i7-12700H",
      "Nvidia GeForce RTX 3060 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651590893132107026?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/50WhzlInBZ",
    image:    "./LAPTOP 11 JUTA/HP Victus.webp"
  },
  {
    id: 206,
    name: "Acer Swift Lite 14",
    category: "global",
    price: 12369000,
    specs: [
      "AMD Ryzen 7 260",
      "Radeon 780M",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651963993615092999",
    shopUrl:  "https://s.shopee.co.id/LkuHe7M31",
    image:    "./LAPTOP 12 JUTA/Acer Swift.webp"
  },
  {
    id: 207,
    name: "Acer Aspire 7 Pro (GAMING)",
    category: "global",
    price: 12316000,
    specs: [
      "Intel Core i5-13420H",
      "Nvidia GeForce RTX 3050 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651963993615092999",
    shopUrl:  "https://s.shopee.co.id/7pqvDaEpiY",
    image:    "./LAPTOP 12 JUTA/Acer 7.webp"
  },
  {
    id: 208,
    name: "Acer Aspire Go 14 Ai",
    category: "global",
    price: 11763000,
    specs: [
      "Intel Ultra 7 115H",
      "Intel Arc",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651963993615092999",
    shopUrl:  "https://s.shopee.co.id/5fmQdwRw3n",
    image:    "./LAPTOP 11 JUTA/Acer Go.webp"
  },
  {
    id: 209,
    name: "Axioo Pongo 750 (GAMING)",
    category: "bekas",
    price: 12054000,
    specs: [
      "Intel Core i7-13620H",
      "Nvidia GeForce RTX 4050 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651963993615092999",
    shopUrl:  "https://s.shopee.co.id/4qDJeZD73c",
    image:    "./LAPTOP 12 JUTA/Axioo Pongo.webp"
  },
  {
    id: 210,
    name: "Dell Latitude 7390",
    category: "bekas",
    price: 2850000,
    specs: [
      "Intel Core i5 Gen 7",
      "Intel UHD Graphics 620",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7653819332434070802",
    shopUrl:  "https://s.shopee.co.id/4LH6HHflF4",
    image:    "./LAPTOP 2 JUTA/Dell.webp"
  },
  {
    id: 211,
    name: "ThinkPad A485",
    category: "bekas",
    price: 2900000,
    specs: [
      "AMD Ryzen 5 Pro 2500U",
      "Radeon Vega 8",
      "RAM 8GB",
      "SSD 128GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7653819332434070802",
    shopUrl:  "https://s.shopee.co.id/4Axg4ZK2vS",
    image:    "./LAPTOP 2 JUTA/ThinkPad A.webp"
  },
  {
    id: 212,
    name: "ThinkPad X280",
    category: "bekas",
    price: 2700000,
    specs: [
      "Intel Core i3 Gen 8",
      "Intel UHD Graphics 620",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7653819332434070802",
    shopUrl:  "https://s.shopee.co.id/8pjVczxSba",
    image:    "./LAPTOP 2 JUTA/ThinkPad X.webp"
  },
  {
    id: 213,
    name: "Dell Latitude 7280",
    category: "bekas",
    price: 1911000,
    specs: [
      "Intel Core i3 Gen 7",
      "Intel UHD Graphics 620",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7654187844063333639",
    shopUrl:  "https://s.shopee.co.id/Ll3prHAYI",
    image:    "./LAPTOP 1 JUTA/Dell.webp"
  },
  {
    id: 214,
    name: "HP Probook 430 G3",
    category: "bekas",
    price: 1860000,
    specs: [
      "Intel Core i5 Gen 6",
      "Intel HD Graphics 520",
      "RAM 8GB",
      "SSD 128GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7654187844063333639",
    shopUrl:  "https://s.shopee.co.id/5fmaCNUmww",
    image:    "./LAPTOP 1 JUTA/HP.webp"
  },
  {
    id: 215,
    name: "ThinkPad T470",
    category: "bekas",
    price: 1875000,
    specs: [
      "Intel Core i5 Gen 7",
      "Intel UHD Graphics 620",
      "RAM 8GB",
      "SSD 128GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7654187844063333639",
    shopUrl:  "https://s.shopee.co.id/9AMSPFvWZ5",
    image:    "./LAPTOP 1 JUTA/ThinkPad T.webp"
  },
  {
    id: 216,
    name: "Asus Vivobook S14",
    category: "global",
    price: 13014000,
    specs: [
      "Intel Ultra 5 225H",
      "Intel Arc 130T",
      "RAM 16GB",
      "SSD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7654537785574984978",
    shopUrl:  "https://s.shopee.co.id/7AbP7wO4xV",
    image:    "./LAPTOP 13 JUTA/Asus.webp"
  },
  {
    id: 217,
    name: "Acer Nitro Lite 16 (GAMING)",
    category: "global",
    price: 12926000,
    specs: [
      "Intel Core i5 210H",
      "Nvidia GeForce RTX 3050 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7654537785574984978",
    shopUrl:  "https://s.shopee.co.id/7fXfiy6u9e",
    image:    "./LAPTOP 12 JUTA/Acer.webp"
  },
  {
    id: 218,
    name: "HP Pavilion Plus 14",
    category: "global",
    price: 13994000,
    specs: [
      "AMD Ryzen 7-7840U",
      "Radeon 780M",
      "RAM 16GB",
      "SSD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7654537785574984978",
    shopUrl:  "https://s.shopee.co.id/4VadxYRDTU",
    image:    "./LAPTOP 13 JUTA/HP.webp"
  },
  {
    id: 219,
    name: "MSI Thin 15 B13VE-3415 (GAMING)",
    category: "global",
    price: 13994000,
    specs: [
      "Intel Core i5-13420H",
      "Nvidia GeForce RTX 4050 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7656043970857913618",
    shopUrl:  "https://s.shopee.co.id/1gGZItsz7U",
    image:    "./LAPTOP 13 JUTA/MSIT.webp"
  },
  {
    id: 220,
    name: "Acer Nitro Lite 16 NL16 (GAMING)",
    category: "global",
    price: 14149000,
    specs: [
      "Intel Core i5-13420H",
      "Nvidia GeForce RTX 4050 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7656043970857913618",
    shopUrl:  "https://s.shopee.co.id/60PYT4kR6g",
    image:    "./LAPTOP 14 JUTA/Acer.webp"
  },
  {
    id: 221,
    name: "HP Omnibook 3 Ai 14",
    category: "global",
    price: 14494000,
    specs: [
      "Intel Ultra 5 325",
      "Intel Xe3",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7656043970857913618",
    shopUrl:  "https://s.shopee.co.id/70I5f17yL5",
    image:    "./LAPTOP 14 JUTA/HP Omni.webp"
  },
  {
    id: 222,
    name: "MSI Modern 15 C2RMG",
    category: "global",
    price: 14446000,
    specs: [
      "Intel Core 9 270H",
      "Intel Iris Xe G7 96EU",
      "RAM 16GB",
      "SSD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7656043970857913618",
    shopUrl:  "https://s.shopee.co.id/9zvhEbMMhY",
    image:    "./LAPTOP 14 JUTA/MSIM.webp"
  },
  {
    id: 223,
    name: "Asus Zenbook 14 OLED",
    category: "global",
    price: 14274000,
    specs: [
      "AMD Ryzen 7 8840HS",
      "Radeon 780M",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7656043970857913618",
    shopUrl:  "https://s.shopee.co.id/2LWG6YWjzk",
    image:    "./LAPTOP 14 JUTA/Asus.webp"
  },
  {
    id: 224,
    name: "Dell Latitude 5400 (TERLARIS)",
    category: "bekas",
    price: 3634000,
    specs: [
      "Intel Core i5 Gen 8",
      "Intel UHD Graphics 620",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/9fIsAZatzM",
    image:    "./LAPTOP 3 JUTA/dell 5400.webp"
  },
  {
    id: 225,
    name: "(HARGA NAIK) ThinkPad T14 Gen 2 Ryzen 5 (TERLARIS)",
    category: "bekas",
    price: 5510000,
    specs: [
      "AMD Ryzen 5 Pro 5650U",
      "Radeon Vega 7",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/20u6pc4Jtu",
    image:    "./LAPTOP 5 JUTA/thinkpad t.webp"
  },
  {
    id: 226,
    name: "ThinkPad X390 (TERLARIS)",
    category: "bekas",
    price: 3634000,
    specs: [
      "Intel Core i5 Gen 8",
      "Intel UHD Graphics 620",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/4AxvbMQSix",
    image:    "./LAPTOP 3 JUTA/thinkpad x.webp"
  },
  {
    id: 227,
    name: "Asus TUF FX504GE (GAMING)",
    category: "bekas",
    price: 5712000,
    specs: [
      "Intel Core i7-8750H",
      "Nvidia GeForce GTX 1050Ti 4GB",
      "RAM 8GB",
      "SSD SSD 256GB,HDD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/7AbXWXHtnA",
    image:    "./LAPTOP 5 JUTA/tuf 1.webp"
  },
  {
    id: 228,
    name: "Asus TUF FX505GT (GAMING)",
    category: "bekas",
    price: 6672000,
    specs: [
      "Intel Core i5-9300H",
      "Nvidia GeForce GTX 1650 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/8fQLJUKXYW",
    image:    "./LAPTOP 6 JUTA/tuf 2.webp"
  },
  {
    id: 229,
    name: "MSI GF63 Thin 9SCSR (GAMING)",
    category: "bekas",
    price: 7152000,
    specs: [
      "Intel Core i7-9750H",
      "Nvidia GeForce GTX 1650Ti 4GB",
      "RAM 16GB",
      "SSD SSD 512GB,HDD 500GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/5q69wSojoS",
    image:    "./LAPTOP 7 JUTA/msi.webp"
  },
  {
    id: 230,
    name: "Lenovo Ideapad Gaming 3 2050 (GAMING)",
    category: "bekas",
    price: 8448000,
    specs: [
      "AMD Ryzen 5 5500H",
      "Nvidia GeForce RTX 2050 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/6L2QXXGXaG",
    image:    "./LAPTOP 8 JUTA/lenovoig1.webp"
  },
  {
    id: 231,
    name: "Lenovo Ideapad Gaming 3 3060 (GAMING)",
    category: "bekas",
    price: 9552000,
    specs: [
      "AMD Ryzen 5 5600H",
      "Nvidia GeForce RTX 3060 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/7VENvvWMxk",
    image:    "./LAPTOP 9 JUTA/lenovoig2.webp"
  },
  {
    id: 232,
    name: "Dell Precision 7730 (TEKNIK)",
    category: "bekas",
    price: 6080000,
    specs: [
      "Intel Core i7-8850H",
      "Nvidia Quadro P3200 6GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/111UtB08HV",
    image:    "./LAPTOP 6 JUTA/Dell 7730.webp"
  },
    {
    id: 233,
    name: "Macbook Pro Retina 15 (2015)",
    category: "bekas",
    price: 5347000,
    specs: [
      "Intel i7 2.2Ghz",
      "Intel Iris Pro 6100",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3LPPh8aOrB",
    image:    "./LAPTOP 5 JUTA/Macbook.webp"
  },
];

const PRODUCTS = [



  // Tier S: Prosesor sama kayak ThinkPad T14 Gen 2 Ryzen 5 (5,80jt, S) tapi 460 ribu lebih murah, RAM 2 slot SODIMM jadi gampang diupgrade. Bodinya 130 gram lebih berat dari T14 Gen 2
  {
    id: 2026111001,
    name: "ThinkPad L14 Gen 2 Ryzen 5 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 5510000,
    specs: [
      "AMD Ryzen 5 Pro 5650U",
      "Radeon Vega 7",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/1qdTPZ18IV",
    image:    "./LAPTOP 5 JUTA/ThinkPad L14 Gen 2 Ryzen 5 5 Juta.webp"
  },

    {
    id: 10123232,
    name: "ThinkPad X13 Gen 1 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 4589550,
    specs: [
      "AMD Ryzen 5 Pro 4650U",
      "Radeon Vega 6",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
    shopUrl:  "https://s.shopee.co.id/AKc8Wy3Nzv",
    toko: "WDCOMPUTER.ID",
    linkLain: [
      { url: "https://s.shopee.co.id/2LZTc9A5JS", harga: 4892500, label: "Toko lain" }
    ],
    image:    "./LAPTOP 4 JUTA/thinkpad x13.webp"
  },

          {
    id: 225,
    name: "ThinkPad T14 Gen 2 Ryzen 5 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 5859000,
    specs: [
      "AMD Ryzen 5 Pro 5650U",
      "Radeon Vega 7",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7689440374204501255",
    shopUrl:  "https://s.shopee.co.id/W7pa7lMsl",
    image:    "./LAPTOP 5 JUTA/thinkpad t.webp"
  },

        {
    id: 11,
    name: "HP Elitebook 845 G8 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 5890000,
    specs: [
      "AMD Ryzen 5 Pro 5650U",
      "Radeon Vega 7",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
    shopUrl:  "https://s.shopee.co.id/9KjE5sCWPJ",
    linkLain: [
      { url: "https://s.shopee.co.id/5LDSdU7bk1", harga: 5785500, label: "Toko lain", toko: "Laptop WA Surabaya" }
    ],
    image:    "./LAPTOP 5 JUTA/HP Elitebook 845 G8.webp"
  },

    {
    id: 19,
    name: "ThinkPad T14 Gen 2 MX450",
    category: "bekas",
    tier: "S",
    sold_out: false,
    price: 6175000,
    specs: [
      "Intel Core i5-1135G7",
      "Nvidia MX450",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648254926623182098?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/9zyjv8qdQP",
    image:    "./LAPTOP 6 JUTA/Thinkpad MX.webp"
  },

  {
    id: 2026102001,
    name: "Advan Pixwar",
    category: "odm",
    tier: "A+",
    price: 11599050,
    specs: [
      "AMD Ryzen 7 6800H",
      "Radeon 680M",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/8fTHLUPV9n",
    image:    "./LAPTOP 11 JUTA/Advan Pixwar 11 Juta.webp"
  },

  {
    id: 2026102002,
    name: "Acer Swift Lite 14",
    sold_out: true,
    category: "global",
    tier: "A+",
    price: 11894000,
    specs: [
      "AMD Ryzen 5 240",          
      "Radeon 760M",              
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/8fTHLV7yqL",
    image:    "./LAPTOP 11 JUTA/Acer Swift Lite 14 11 Juta.webp"
  },

  {
    id: 2026102003,
    name: "Acer Aspire Go 14 AI",
    sold_out: true,
    category: "global",
    tier: "A",
    price: 14299000,
    specs: [
      "Intel Ultra 7 155H",
      "Intel Arc",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/7VHJxUHzOo",
    image:    "./LAPTOP 14 JUTA/Acer Aspire Go 14 AI 14 Juta.webp"
  },

    // Tier S: Prosesor dan iGPU Radeon 680M sama kayak ThinkPad T14s Gen 3 Ryzen 7 (9,5jt, S), tapi 1,67jt lebih murah dengan bodi 13 inci yang lebih ringkas
  {
    id: 2026111401,
    name: "ThinkPad X13 Gen 3 Ryzen 7",
    category: "bekas",
    tier: "S",
    price: 7828000,
    specs: [
      "AMD Ryzen 7 Pro 6850U",
      "AMD Radeon 680M",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/9AQB8yTlVj",
    toko: "GudangLaptopBTM",
    image:    "./LAPTOP 7 JUTA/ThinkPad X13 Gen 3 Ryzen 7 7 Juta.webp"
  },

  // Tier S: Prosesor sama kayak HP Elitebook 840 G10 (9,77jt) di bodi Latitude seri 7000 13 inci, tapi 2,8jt lebih murah
  {
    id: 2026111402,
    name: "Dell Latitude 7340",
    category: "bekas",
    tier: "S",
    price: 6950000,
    specs: [
      "Intel Core i5-1345U",
      "Intel Iris Xe",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3g5Eawdbpn",
    toko: "LETOPGARS",
    image:    "./LAPTOP 6 JUTA/Dell Latitude 7340 6 Juta.webp"
  },

  // Tier S: Seri 2 in 1 paling atas punya Dell dengan layar sentuh 14 inci, 3,3jt lebih murah dari HP Elitebook x360 830 G10. Prosesornya 2 generasi lebih lama
  {
    id: 2026111403,
    name: "Dell Latitude 9420 2 in 1",
    category: "bekas",
    tier: "S",
    price: 5510000,
    specs: [
      "Intel Core i5-1145G7",
      "Intel Iris Xe 80EU",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/ql3DzVYfX",
    toko: "jaya computer",
    image:    "./LAPTOP 5 JUTA/Dell Latitude 9420 2 in 1 5 Juta.webp"
  },

  // Tier S: Bodi Latitude seri 7000 dengan prosesor sekelas ThinkPad T14 Gen 2 Intel (5,7jt), tapi 760 ribu lebih murah
  {
    id: 2026111404,
    name: "Dell Latitude 7420",
    category: "bekas",
    tier: "S",
    price: 4940000,
    specs: [
      "Intel Core i5-1145G7",
      "Intel Iris Xe 80EU",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/6VPPyFN6FA",
    toko: "jaya computer",
    image:    "./LAPTOP 4 JUTA/Dell Latitude 7420 4 Juta.webp"
  },

  // Tier S: CPU dan GPU sama kayak ThinkPad P51 (6,94jt), tapi 2 juta lebih murah dan bodinya jauh lebih tipis
  {
    id: 2026111405,
    name: "HP ZBook Studio G4 (TEKNIK)",
    category: "bekas",
    tier: "S",
    price: 4940000,
    specs: [
      "Intel Xeon E3-1505M v5",
      "Nvidia Quadro M1200 4GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/9fMRk12Huj",
    toko: "GudangLaptopBTM",
    image:    "./LAPTOP 4 JUTA/HP ZBook Studio G4 4 Juta.webp"
  },

  // Tier S: Harganya sama kayak ThinkPad T495 (4,36jt), tapi prosesornya Ryzen 7 dan bodinya 13 inci yang lebih ringan
  {
    id: 2026111406,
    name: "ThinkPad X395 Ryzen 7",
    category: "bekas",
    tier: "S",
    price: 4370000,
    specs: [
      "AMD Ryzen 7 Pro 3700U",
      "AMD Radeon Vega 10",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/9zzI8oEJRT",
    toko: "Gugel Laptop",
    image:    "./LAPTOP 4 JUTA/ThinkPad X395 Ryzen 7 4 Juta.webp"
  },

  {
    id: 2026102004,
    name: "Axioo Pongo 735 (PILIHAN MIMIN)",
    sold_out: true,
    category: "odm",
    tier: "S",
    price: 14763650,
    specs: [
      "Intel Core i7-13620H",
      "Nvidia GeForce RTX 3050 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/1gJX0mzipm",
    image:    "./LAPTOP 14 JUTA/Axioo Pongo 735 14 Juta.webp"
  },

  {
    id: 2026102005,
    name: "Lenovo IdeaPad Slim 5 OLED 14 (PILIHAN MIMIN)",
    sold_out: true,
    category: "global",
    tier: "A+",
    price: 16294000,
    specs: [
      "Intel Ultra 5 135H",
      "Intel Arc",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/6fiCxzuaCK",
    image:    "./LAPTOP 16 JUTA/Lenovo IdeaPad Slim 5 OLED 14 16 Juta.webp"
  },

  // =====================================================================
// LAPTOP GAMING BEKAS 7–10 JUTA (riset 5 Nov 2026, harga HP)
// =====================================================================

  // Tier A+: Model beda dari Acer Nitro 5 AN515-55 (7,43jt, A+) dan RAM udah 16GB. GPU GTX 1650 sedikit di bawah GTX 1650 Ti punya Nitro 5
  {
    id: 2026110501,
    name: "HP Pavilion Gaming 15-dk0",
    sold_out: true,
    category: "bekas",
    tier: "A+",
    price: 7536000,
    specs: [
      "Intel Core i7-9750H",
      "Nvidia GeForce GTX 1650 4GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/8pn6osF2Ip",
    image:    "./LAPTOP 7 JUTA/HP Pavilion Gaming 15-dk0 7 Juta.webp"
  },

  // Tier A+: Ryzen 7 5800H 8 core, RAM 16GB, layar 144Hz, dan 680 ribu lebih murah dari HP Pavilion Gaming 15-ec1076AX. GPU RX 5500M masih di bawah GTX 1660 Ti
  {
    id: 2026110502,
    name: "MSI Bravo 15 B5DD",
    sold_out: true,
    category: "bekas",
    tier: "S",
    price: 8064000,
    specs: [
      "AMD Ryzen 7 5800H",
      "AMD Radeon RX 5500M 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/7KyJ28KgbI",
    image:    "./LAPTOP 8 JUTA/MSI Bravo 15 B5DD 8 Juta.webp"
  },

  // Tier A+: Build dan pendinginan Legion paling bagus di kelasnya, layar 120Hz, RAM 16GB. Tapi GPU GTX 1650, dan MSI Bravo 15 yang lebih murah lebih kenceng
  {
    id: 2026110503,
    name: "Lenovo Legion 5 15ARH05",
    sold_out: true,
    category: "bekas",
    tier: "A+",
    price: 8304000,
    specs: [
      "AMD Ryzen 5 4600H",
      "Nvidia GeForce GTX 1650 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/4fxXrGGpZV",
    image:    "./LAPTOP 8 JUTA/Lenovo Legion 5 15ARH05 8 Juta.webp"
  },

  // Tier A+: GPU RTX 2060 6GB paling kenceng di bawah 10 juta, tapi harganya naik jadi 9,69jt. HP Pavilion Gaming 15-ec1076AX (8,84jt) dengan GTX 1660 Ti cuma sekitar 13% lebih lambat, 855 ribu lebih murah, dan prosesornya lebih kuat
  {
    id: 2026110504,
    name: "HP Pavilion Gaming 15-dk1064TX",
    category: "bekas",
    tier: "A+",
    price: 9690000,
    specs: [
      "Intel Core i5-10300H",
      "Nvidia GeForce RTX 2060 6GB",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3B8k4WUnbx",
    image:    "./LAPTOP 8 JUTA/HP Pavilion Gaming 15-dk1064TX 8 Juta.webp"
  },

  // Tier A+: GPU GTX 1660 Ti 6GB dan layar 144Hz, bodi Nitro 7 lebih premium. Tapi RAM baru 8GB, dan HP Victus 15-fa0 (9,46jt) prosesornya jauh lebih baru dengan RAM 16GB
  {
    id: 2026110505,
    name: "Acer Nitro 7 AN715-51",
    category: "bekas",
    tier: "A+",
    price: 9215000,
    specs: [
      "Intel Core i7-9750H",
      "Nvidia GeForce GTX 1660 Ti 6GB",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/8pn6oxyemm",
    image:    "./LAPTOP 9 JUTA/Acer Nitro 7 AN715-51 9 Juta.webp"
  },

  // Tier S: RTX 3050 dan i5-12500H 12 core di bawah 9,5 juta, RAM udah 16GB dan layar 144Hz. Lebih murah dari Lenovo IdeaPad Gaming 3 (9,6jt) yang masih RTX 2050
  {
    id: 2026110506,
    name: "HP Victus 15-fa0",
    sold_out: true,
    category: "bekas",
    tier: "S",
    price: 9456000,
    specs: [
      "Intel Core i5-12500H",
      "Nvidia GeForce RTX 3050 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/qkpIFcJd5",
    image:    "./LAPTOP 9 JUTA/HP Victus 15-fa0 9 Juta.webp"
  },

  // Tier S: Harganya sama persis kayak MSI Thin 15 B12UCX (10,22jt), tapi GPU-nya RTX 3050 (bukan RTX 2050) dan bodi TUF lebih tebal buat pendinginan
  {
    id: 2026110507,
    name: "Asus TUF F15 FX506HC",
    sold_out: true,
    category: "bekas",
    tier: "S",
    price: 10224000,
    specs: [
      "Intel Core i5-11400H",
      "Nvidia GeForce RTX 3050 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/7KyJ2Emr1Q",
    image:    "./LAPTOP 10 JUTA/Asus TUF F15 FX506HC 10 Juta.webp"
  },

  // Tier A+: Prosesor i5-12500H 12 core dan RTX 3050 4GB, tapi RAM cuma 8GB jadi perlu nambah RAM buat game berat
  {
    id: 2026110508,
    name: "Acer Nitro 5 AN515-58",
    category: "bekas",
    tier: "A+",
    price: 10640000,
    specs: [
      "Intel Core i5-12500H",
      "Nvidia GeForce RTX 3050 4GB",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/1Lh5tE0QK0",
    image:    "./LAPTOP 10 JUTA/Acer Nitro 5 AN515-58 10 Juta.webp"
  },

  // =====================================================================
// LAPTOP BEKAS BARU (dari koleksi affiliate, 23 Okt 2026)
// - price = harga di HP
// - image = belum ada, cari pakai cari_gambar.py (daftar_bekas.txt)
// - videoUrl masih link profil TikTok
// =====================================================================

  // Tier A+: Ryzen 7 5800U kenceng di 5,5 jutaan, tapi kelas ProBook (bodi & keyboard) di bawah ThinkPad L14 Gen 2 Ryzen 7 yang harganya hampir sama (5,61jt, Tier S)
 // =====================================================================
// LAPTOP BEKAS 1–2 JUTA (24 Okt 2026)
// - price = harga di HP
// =====================================================================

  // Tier B: Paling murah, tapi Celeron 3865U cuma 2 core 2 thread, jauh di bawah i3 atau i5. Cuma cocok buat ngetik dan browsing ringan
  {
    id: 2026102401,
    name: "Fujitsu Futro MU937",
    category: "bekas",
    tier: "B",
    price: 1832100,
    specs: [
      "Intel Celeron 3865U",
      "Intel HD Graphics 610",
      "RAM 8GB",
      "SSD 128GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3g4hQK1Zrf",
    image:    "./LAPTOP 1 JUTA/Fujitsu Futro MU937 1 Juta.webp"
  },

  // Tier B+: Bodi dan keyboard ThinkPad, i5 gen 4 masih lebih kenceng dari Celeron, tapi RAM 4GB harus diupgrade dan umurnya udah tua banget
  {
    id: 2026102402,
    name: "ThinkPad T440s (PILIHAN MIMIN)",
    sold_out: true,
    category: "bekas",
    tier: "B+",
    price: 1886000,
    specs: [
      "Intel Core i5-4200U",
      "Intel HD Graphics 4400",
      "RAM 4GB",
      "SSD 128GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3g4hRMoWHq",
    image:    "./LAPTOP 1 JUTA/ThinkPad T440s 1 Juta.webp"
  },

  // Tier A+: ThinkPad T470s udah habis, jadi ini pilihan paling murah di 2 jutaan yang layarnya 14 inci. Masih di bawah Latitude 7290 (3,0jt, A) harganya
  {
    id: 2026102403,
    name: "HP ProBook 640 G2",
    category: "bekas",
    tier: "A+",
    price: 2850000,
    specs: [
      "Intel Core i5-6300U",
      "Intel HD Graphics 520",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3B8QqFGqeN",
    image:    "./LAPTOP 2 JUTA/HP Elitebook 640 G2 2 Juta.webp"
  },

  // Tier A+: Prosesor sama kayak Latitude 7290 (2,9jt, A) tapi lebih murah, layar lebih lega 14 inci dan bodi tipis. Pilihan terbaik di 2 jutaan
  {
    id: 2026102404,
    name: "ThinkPad T470s (PILIHAN MIMIN)",
    sold_out: true,
    category: "bekas",
    tier: "A+",
    price: 2806000,
    specs: [
      "Intel Core i5-7300U",
      "Intel HD Graphics 620",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/8pmnaA49eV",
    image:    "./LAPTOP 2 JUTA/ThinkPad T470s 2 Juta.webp"
  },
 
  {
    id: 2026102301,
    name: "HP ProBook 445 G8",
    category: "bekas",
    tier: "A+",
    sold_out: true,
    price: 5566000,
    specs: [
      "AMD Ryzen 7 5800U",
      "Radeon Vega 8",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/gR4oJm83z",
    image:    "./LAPTOP 5 JUTA/HP ProBook 445 G8 5 Juta.webp"
  },

  // Tier A+: Bodi premium seri 7, tapi prosesornya sama kayak Latitude 5330 (5,7jt, S) yang 440 ribu lebih murah dan SSD-nya udah 512GB
  {
    id: 2026102302,
    name: "Dell Latitude 7430",
    category: "bekas",
    tier: "A+",
    price: 6138000,
    specs: [
      "Intel Core i5-1245U",
      "Intel Iris Xe 80EU",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/1BO11ZiQM",
    image:    "./LAPTOP 6 JUTA/Dell Latitude 7430 6 Juta.webp"
  },

  // Tier A+: SSD naik ke 512GB karena varian 256GB habis, tapi harganya jadi 5,52jt. Di harga segini ThinkPad L14 Gen 1 Ryzen 7 (5,17jt, S) prosesornya lebih kenceng dan lebih murah
  {
    id: 2026102303,
    name: "ThinkPad X13 Gen 2",
    category: "bekas",
    tier: "A+",
    price: 5580000,
    specs: [
      "Intel Core i5-1145G7",
      "Intel Iris Xe 80EU",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/906CjUgj5l",
    image:    "./LAPTOP 4 JUTA/ThinkPad X13 Gen 2 4 Juta.webp"
  },

  // Tier S: Prosesor sama kayak ThinkPad T495 (4,22jt, Tier S) tapi 450 ribu lebih murah, bonus layar sentuh. Dulu 4,44jt dapet A+
  {
    id: 2026102304,
    name: "HP Elitebook 745 G6 (PILIHAN MIMIN)",
    sold_out: true,
    category: "bekas",
    tier: "S",
    price: 3772000,
    specs: [
      "AMD Ryzen 5 3500U",
      "Radeon Vega 8",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/6L5RYXMT0r",
    image:    "./LAPTOP 3 JUTA/HP Elitebook 745 G6 3 Juta.webp"
  },

  // Tier A+: Bodi premium seri 7 di bawah 4 juta, tapi gen 10 cuma beda tipis sama gen 8, dan Latitude 5400 (3,58jt, Tier S) lebih murah. Dulu 4,24jt dapet A
  {
    id: 2026102305,
    name: "Dell Latitude 7410",
    category: "bekas",
    tier: "A+",
    price: 4231500,
    specs: [
      "Intel Core i5-10210U",
      "Intel UHD Graphics 620",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/1BO0rtqCr",
    image:    "./LAPTOP 3 JUTA/Dell Latitude 7410 3 Juta.webp"
  },

  // Tier S: Prosesor sama persis kayak ThinkPad T14 Gen 1 Ryzen 7 (5,80jt, Tier S) tapi 740 ribu lebih murah
  {
    id: 2026102307,
    name: "ThinkPad L14 Gen 1 Ryzen 7",
    category: "bekas",
    tier: "S",
    price: 5225000,
    specs: [
      "AMD Ryzen 7 Pro 4750U",
      "Radeon Vega 7",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/4fxDZHCUAL",
    image:    "./LAPTOP 5 JUTA/ThinkPad L14 Gen 1 Ryzen 7 5 Juta.webp"
  },

  // Tier A: Jauh lebih murah dari entri MacBook Pro 2015 yang lama (5,51jt, B+), tapi umurnya udah 10 tahun dan macOS-nya udah gak dapet update
  {
    id: 2026102308,
    name: "Macbook Pro Retina 15 (2015)",
    category: "bekas",
    tier: "A",
    price: 4085000,
    specs: [
      "Intel Core i7-4770HQ",
      "Intel Iris Pro 5200",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/qkV0A1P17",
    image:    "./LAPTOP 3 JUTA/Macbook Pro Retina 15 (2015) 3 Juta.webp"
  },

  // Tier A: Nanggung: nambah 94 ribu udah dapet Latitude 5400 (3,58jt, Tier S) yang prosesornya gen 8 quad core
  {
    id: 2026102310,
    name: "ThinkPad T470",
    category: "bekas",
    tier: "A",
    price: 3553000,
    specs: [
      "Intel Core i5-7300U",
      "Intel HD Graphics 620",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/30oza0K1ek",
    image:    "./LAPTOP 3 JUTA/ThinkPad T470 3 Juta.webp"
  },

  // Tier A+: Varian 256GB dan 512GB habis, sisa SSD 1TB jadi 4,41jt. Lebih mahal dari Latitude 5400 (3,90jt, S) dan ThinkPad T495 (4,31jt, S)
  {
    id: 2026102311,
    name: "Dell Latitude 5490 i7 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "A+",
    price: 4370000,
    specs: [
      "Intel Core i7-8650U",
      "Intel UHD Graphics 620",
      "RAM 16GB",
      "SSD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/4qGdlCpelc",
    image:    "./LAPTOP 3 JUTA/Dell Latitude 5490 i7 3 Juta.webp"
  },

  // Tier S: Prosesor i5-1245U 10 core, bodi 13 inci ringkas, dan SSD udah 512GB di 5,7jt. Lebih murah dari Latitude 7430 (6,14jt) yang prosesornya sama tapi SSD-nya 256GB
  {
    id: 2026102312,
    name: "Dell Latitude 5330 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 5700000,
    specs: [
      "Intel Core i5-1245U",
      "Intel Iris Xe 80EU",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/gR4nVEhlN",
    image:    "./LAPTOP 5 JUTA/Dell Latitude 5330 5 Juta.webp"
  },

  // Tier A+: Upgrade dari ZBook 15U G5 (5,61jt, A+): SSD 512GB cuma nambah 83 ribu. Tetap A+ karena ThinkPad P52 (5,39jt, S) GPU dan CPU-nya lebih kencang
  {
    id: 2026102313,
    name: "HP Zbook 15U G6 (TEKNIK)",
    category: "bekas",
    tier: "A+",
    price: 5795000,
    specs: [
      "Intel Core i7-8665U",
      "Radeon Pro WX3200 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/906CimcZPM",
    image:    "./LAPTOP 5 JUTA/HP Zbook 15U G6 (TEKNIK) 5 Juta.webp"
  },

  // Tier A: Kemahalan: prosesor sama kayak Latitude 5430 i5 yang 2,25 juta lebih murah, dan T14 Gen 3 Ryzen 5 (8jt, S) iGPU-nya jauh lebih kencang
  {
    id: 2026102314,
    name: "ThinkPad T14 Gen 3 (INTEL)",
    category: "bekas",
    tier: "A",
    price: 7000000,
    specs: [
      "Intel Core i5-1245U",
      "Intel Iris Xe 80EU",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/2LZr0N8wk9",
    toko: "LAPTOPIN.ID",
    linkLain: [
      { url: "https://s.shopee.co.id/9fLtVye0DH", harga: 7543000, label: "Toko lain" }
    ],
    image:    "./LAPTOP 7 JUTA/ThinkPad T14 Gen 3 (INTEL) 7 Juta.webp"
  },

  // Tier S: i7 gen 12 + bodi premium seri 7, 400 ribu lebih murah dari Latitude 5430 i7 (6,59jt, S) walau RAM-nya 16GB bukan 32GB
  {
    id: 2026102315,
    name: "Dell Latitude 7330 i7 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 6840000,
    specs: [
      "Intel Core i7-1265U",
      "Intel Iris Xe 96EU",
      "RAM 32GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/AAIA6hyXrW",
    image:    "./LAPTOP 6 JUTA/Dell Latitude 7330 i7 6 Juta.webp"
  },

    {
    id: 2026110401,
    name: "Dell Latitude 7330 i7 SSD 512GB (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 7353000,
    specs: [
      "Intel Core i7-1265U",
      "Intel Iris Xe 96EU",
      "RAM 32GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/AAIA6hyXrW",
    image:    "./LAPTOP 6 JUTA/Dell Latitude 7330 i7 6 Juta.webp"
  },

  // Tier B+: Kemahalan: ThinkPad P52 (5,39jt, S) prosesor dan GPU-nya lebih baru dan kencang tapi 1,4 juta lebih murah. Dulu P51 4,73jt aja dapet B+
  {
    id: 2026102316,
    name: "ThinkPad P51 (TEKNIK)",
    category: "bekas",
    tier: "B+",
    price: 6935000,
    specs: [
      "Intel Xeon E3-1505M v5",
      "Nvidia Quadro M1200M 4GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/40hWl7JLDq",
    image:    "./LAPTOP 6 JUTA/ThinkPad P51 (TEKNIK) 6 Juta.webp"
  },

  {
    id: 2026102006,
    name: "HP Victus 15",
    category: "global",
    tier: "A",
    price: 15921550,
    specs: [
      "Intel Core i5-13420H",
      "Nvidia GeForce RTX 3050 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/5fpfmAodWC",
    image:    "./LAPTOP 16 JUTA/HP Victus 15 16 Juta.webp"
  },

  {
    id: 2026102007,
    name: "Axioo Pongo 750",
    sold_out: true,
    category: "odm",
    tier: "S",
    price: 16099000,
    specs: [
      "Intel Core i7-13620H",
      "Nvidia GeForce RTX 4050 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/9APXwcsAB7",
    image:    "./LAPTOP 16 JUTA/Axioo Pongo 750 16 Juta.webp"
  },

  {
    id: 2026102008,
    name: "Acer Nitro V15 ANV15-42",
    category: "global",
    tier: "S",
    price: 17726550,
    specs: [
      "AMD Ryzen 7 7445HS",
      "Nvidia GeForce RTX 4050 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/8V9r9Pu1R8",
    image:    "./LAPTOP 17 JUTA/Acer Nitro V15 ANV15-42 17 Juta.webp"
  },

  {
    id: 2026102009,
    name: "Acer Nitro V15 52-50FX (PILIHAN MIMIN)",
    category: "global",
    tier: "S",
    price: 19199050, // PERKIRAAN (Windows Rp19.999.000 - selisih + 200rb). Cek harga varian RTX 5050 "Normal" di HP lalu +200rb
    specs: [
      "Intel Core 5-210H",
      "Nvidia GeForce RTX 5050 8GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/7fak9vRBVx",
    image:    "./LAPTOP 19 JUTA/Acer Nitro V15 52-50FX 19 Juta.webp"
  },

    {
  id: 2132423235123123240,
  name: "Asus Baby ROG X550VXK",
  category: "bekas",
  tier: "A",
  price: 4845000,
  specs: [
    "Intel Core i7-6700HQ",
    "GTX 950M 2GB",
    "RAM 8GB",
    "HDD 1TB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/",
  shopUrl: "https://s.shopee.co.id/Lnu8Y9okb",
  image: "./LAPTOP 4 JUTA/asusbaby.webp"
},


  {
    id: 912312311,
    name: "Advan Workmate",
    category: "odm",
    tier: "A",
    price: 5950140,
    specs: [
      "AMD Ryzen 5 3500U",
      "Radeon Vega 8",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7647900471994125576?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/9pezKO367F",
    image:    "./LAPTOP 5 JUTA/Advan Workmate.webp"
  },

    // Tier S: Stoknya selalu ada, beda sama HP Elitebook 845 G8 yang stoknya susah dicari. Varian 512GB lebih mahal, jadi sekarang pakai SSD 256GB di 5,12jt
    {
    id: 233213333,
    name: "HP Elitebook 845 G7 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 5115000,
    specs: [
      "AMD Ryzen 5 Pro 4650U",
      "Radeon Vega 6",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
    shopUrl:  "https://s.shopee.co.id/5Atf8mENp0",
    linkLain: [
      { url: "https://s.shopee.co.id/5LDSdU7bk1", harga: 5215500, label: "Toko lain", toko: "Laptop WA Surabaya" }
    ],
    image:    "./LAPTOP 5 JUTA/HP Elitebook 845 G8.webp"
  },


  // Tier A: Harganya naik jadi 6,65jt. Asus TUF FX504GD (6,46jt, A+) lebih murah, prosesornya i7-8750H lebih kenceng, dan SSD-nya udah 512GB
  {
  id: 213242321235240,
  name: "Asus TUF FX505DY ",
  category: "bekas",
  tier: "A",
  price: 6650000,
  specs: [
    "AMD Ryzen 5 3550H",
    "AMD Radeon RX 560X 4GB",
    "RAM 8GB",
    "SSD 256GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7694173225537817864",
  shopUrl: "https://s.shopee.co.id/6VNypxQ2rm",
  image: "./LAPTOP 5 JUTA/tuf5jt.webp"
},

  {
    id: 9232231,
    name: "Advan Soulmate X2",
    category: "odm",
    tier: "B",
    price: 4463070,
    specs: [
      "AMD Athlon 3020e",
      "Radeon Vega 3",
      "RAM 8GB",
      "SSD 128GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/5q8u5LRrEY",
    image:    "./LAPTOP 4 JUTA/soulmate.webp"
  },





    {
    id: 4,
    name: "ThinkPad T14 Gen 1 Ryzen 5 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 5115000,
    specs: [
      "AMD Ryzen 5 Pro 4650U",
      "Radeon Vega 6",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
    shopUrl:  "https://s.shopee.co.id/W7pa7lMsl",
    labelUtama: "T14",
    linkLain: [
      { url: "https://s.shopee.co.id/gRd1cqIis", harga: 4650000, label: "T14s (Seri S Lebih Tipis)", toko: "LAPTOPIN.ID" }
    ],
    image:    "./LAPTOP 4 JUTA/ThinkPad T14 G1.webp"
  },

    {
    id: 6,
    name: "Axioo Hype 5 AMD X5-2 (PILIHAN MIMIN)",
    category: "odm",
    tier: "A+",
    price: 6924550,
    specs: [
      "AMD Ryzen 5 7430U",
      "Radeon Vega 7",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
    shopUrl:  "https://s.shopee.co.id/2VsSXvZtml",
    image:    "./LAPTOP 6 JUTA/Axioo Hype 5 AMD X5-2.webp"
  },

  

    {
    id: 623523523532,
    name: "Axioo Hype 5 AMD X5-2 RAM 16GB (PILIHAN MIMIN)",
    sold_out: true,
    category: "odm",
    tier: "S",
    price: 7932660,
    specs: [
      "AMD Ryzen 5 7430U",
      "Radeon Vega 7",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7694951056178040082",
    shopUrl:  "https://s.shopee.co.id/2VsSXvZtml",
    image:    "./LAPTOP 6 JUTA/Axioo Hype 5 AMD X5-2.webp"
  },


  {
    id: 18,
    name: "ThinkPad T14 Gen 2 Ryzen 7 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 6745000,
    specs: [
      "AMD Ryzen 7 Pro 5850U",
      "Radeon Vega 8",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7688678696181419282",
    shopUrl:  "https://s.shopee.co.id/3VhpKL328P",
    labelUtama: "T14",
    linkLain: [
      { url: "https://s.shopee.co.id/70LgZX1wAD", harga: 6555000, label: "T14s (Seri S Lebih Tipis)", toko: "Redstar" }
    ],
    image:    "./LAPTOP 6 JUTA/ThinkPad T14 G2 AMD.webp"
  },

    {
    id: 2026110402,
    name: "ThinkPad T14 Gen 2 Ryzen 7 SSD 512GB (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 7410000,
    specs: [
      "AMD Ryzen 7 Pro 5850U",
      "Radeon Vega 8",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7688678696181419282",
    shopUrl:  "https://s.shopee.co.id/3VhpKL328P",
    image:    "./LAPTOP 6 JUTA/ThinkPad T14 G2 AMD.webp"
  },

  // =====================================================================
// LAPTOP BARU 20-30 JUTA (riset Shopee Mall, 21 Okt 2026)
// price = harga varian di Shopee - Rp800.000
// shopUrl = link affiliate (sudah dicek, semua mengarah ke produk yang benar)
// =====================================================================

  {
    id: 2026102101,
    name: "Asus Zenbook 14 OLED UM3406KA (PILIHAN MIMIN)",
    category: "global",
    tier: "A+",
    price: 19674000,
    specs: [
      "AMD Ryzen AI 7 350",
      "Radeon 860M",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3VlCUp1yHJ",
    image:    "./LAPTOP 19 JUTA/Asus Zenbook 14 OLED UM3406KA 19 Juta.webp"
  },


  {
    id: 2026102103,
    name: "Axioo Pongo 765",
    category: "odm",
    tier: "S",
    price: 20999000,
    specs: [
      "AMD Ryzen 7 255",
      "Nvidia GeForce RTX 5060 8GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3g4chDGEDp",
    image:    "./LAPTOP 20 JUTA/Axioo Pongo 765 20 Juta.webp"
  },

  {
    id: 2026102104,
    name: "Asus Vivobook S14 OLED S3407CA",
    sold_out: true,
    category: "global",
    tier: "A+",
    price: 21349000,
    specs: [
      "Intel Ultra 7 255H",
      "Intel Arc 140T",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/8AX23V3qiN",
    image:    "./LAPTOP 21-30 JUTA/Asus Vivobook S14 OLED S3407CA 21 Juta.webp"
  },

  {
    id: 2026102105,
    name: "MSI Cyborg 15 B2RWFKG",
    sold_out: true,
    category: "global",
    tier: "A+",
    price: 21049000,
    specs: [
      "Intel Core 5-210H",
      "Nvidia GeForce RTX 5060 8GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/60SXTX3AYs",
    image:    "./LAPTOP 21-30 JUTA/MSI Cyborg 15 B2RWFKG 21 Juta.webp"
  },

  {
    id: 2026102106,
    name: "Lenovo Yoga 7i 2in1 OLED",
    category: "global",
    tier: "A+",
    price: 21349000,
    specs: [
      "Intel Ultra 7 256V",
      "Intel Arc 140V",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/70L4fOfa3j",
    image:    "./LAPTOP 21-30 JUTA/Lenovo Yoga 7i 2in1 OLED 22 Juta.webp"
  },

  {
    id: 2026102107,
    name: "Asus Gaming V16 V3607VM",
    category: "global",
    tier: "A+",
    price: 21949000,
    specs: [
      "Intel Core 7-240H",
      "Nvidia GeForce RTX 5060 8GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/9APZFS1tDe",
    image:    "./LAPTOP 21-30 JUTA/Asus Gaming V16 V3607VM 22 Juta.webp"
  },

  {
    id: 2026102108,
    name: "HP OmniBook 7 OLED 14 (PILIHAN MIMIN)",
    sold_out: true,
    category: "global",
    tier: "S",
    price: 23469000,
    specs: [
      "Intel Core 9 270H",
      "Intel Arc 140T",
      "RAM 32GB",
      "SSD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3g4chMCSIV",
    image:    "./LAPTOP 21-30 JUTA/HP OmniBook 7 OLED 14 23 Juta.webp"
  },

  {
    id: 2026102109,
    name: "Acer Nitro V16S ANV16S-41 (PILIHAN MIMIN)",
    category: "global",
    tier: "S",
    price: 24198000,
    specs: [
      "AMD Ryzen 7 260",
      "Nvidia GeForce RTX 5060 8GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/40hT5zB3cq",
    image:    "./LAPTOP 21-30 JUTA/Acer Nitro V16S ANV16S-41 23 Juta.webp"
  },

  {
    id: 2026102110,
    name: "Axioo Pongo 775",
    category: "odm",
    tier: "S",
    price: 24899000,
    specs: [
      "Intel Core i7-13620H",
      "Nvidia GeForce RTX 5070 8GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/6fiEGu0E7Q",
    image:    "./LAPTOP 21-30 JUTA/Axioo Pongo 775 24 Juta.webp"
  },

  {
    id: 2026102111,
    name: "Acer Swift Go 14 AI OLED (PILIHAN MIMIN)",
    category: "global",
    tier: "A+",
    price: 25374000,
    specs: [
      "Intel Ultra X7 358H",
      "Intel Arc B390",
      "RAM 16GB",
      "SSD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/30ovuC0SBF",
    image:    "./LAPTOP 21-30 JUTA/Acer Swift Go 14 AI OLED 25 Juta.webp"
  },

  {
    id: 2026102112,
    name: "MSI Crosshair 16 HX",
    category: "global",
    tier: "A+",
    price: 27930985,
    specs: [
      "Intel Core i7-14650HX",
      "Nvidia GeForce RTX 5060 8GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/4B0tILzWho",
    image:    "./LAPTOP 21-30 JUTA/MSI Crosshair 16 HX 27 Juta.webp"
  },

  {
    id: 2026102113,
    name: "Lenovo Legion 5A OLED (PILIHAN MIMIN)",
    category: "global",
    tier: "S",
    price: 27999000,
    specs: [
      "AMD Ryzen AI 7 250",
      "Nvidia GeForce RTX 5050 8GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/5VWGspGBQ0",
    image:    "./LAPTOP 21-30 JUTA/Lenovo Legion 5A OLED 28 Juta.webp"
  },

// ---- tambahan harga 29-30 juta ----
  {
    id: 2026102114,
    name: "Asus Zenbook 14 OLED UX3405CA Ultra 9 (PILIHAN MIMIN)",
    category: "global",
    tier: "S",
    price: 29074000,
    specs: [
      "Intel Ultra 9 285H",
      "Intel Arc 140T",
      "RAM 32GB",
      "SSD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/9APZFZtulN",
    image:    "./LAPTOP 21-30 JUTA/Asus Zenbook 14 OLED UX3405CA Ultra 9 29 Juta.webp"
  },
  {
    id: 2026102115,
    name: "Lenovo Legion 5i 15IRX10 OLED",
    category: "global",
    tier: "S",
    price: 29099000,
    specs: [
      "Intel Core i7-13650HX",
      "Nvidia GeForce RTX 5050 8GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/6Alxg4mVWE",
    image:    "./LAPTOP 21-30 JUTA/Lenovo Legion 5i 15IRX10 OLED 29 Juta.webp"
  },
  {
    id: 2026102116,
    name: "Asus TUF F16 FX608JMR (PILIHAN MIMIN)",
    sold_out: true,
    category: "global",
    tier: "A+",
    price: 28601000,
    specs: [
      "Intel Core i7-14650HX",
      "Nvidia GeForce RTX 5060 8GB",
      "RAM 16GB",
      "SSD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/70L4fcVWeC",
    image:    "./LAPTOP 21-30 JUTA/Asus TUF F16 FX608JMR 29 Juta.webp"
  },
  {
    id: 2026102117,
    name: "Acer Predator Helios Neo 16S AI OLED (PILIHAN MIMIN)",
    category: "global",
    tier: "S",
    price: 29674000,
    specs: [
      "Intel Ultra 7 255HX",
      "Nvidia GeForce RTX 5060 8GB",
      "RAM 16GB",
      "SSD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/6q1eTKJ2Qb",
    image:    "./LAPTOP 21-30 JUTA/Acer Predator Helios Neo 16S AI OLED 29 Juta.webp"
  },
  {
    id: 2026102118,
    name: "Asus TUF A16 FA608UP (PILIHAN MIMIN)",
    sold_out: true,
    category: "global",
    tier: "S",
    price: 29499000,
    specs: [
      "AMD Ryzen 7 260",
      "Nvidia GeForce RTX 5070 8GB",
      "RAM 16GB",
      "SSD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/2VsfJPkYnA",
    image:    "./LAPTOP 21-30 JUTA/Asus TUF A16 FA608UP 29 Juta.webp"
  },
  {
    id: 2026102119,
    name: "Apple MacBook Air 13 M5 (PILIHAN MIMIN)",
    category: "global",
    tier: "S",
    price: 29799000,
    specs: [
      "Apple M5 10-core",
      "GPU Apple M5 10-core",
      "RAM 16GB",
      "SSD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/5VWGst5d80",
    image:    "./LAPTOP 21-30 JUTA/Apple MacBook Air 13 M5 29 Juta.webp"
  },

      {
    id: 2232411,
    name: "Acer Aspire Lite 14",
    category: "global",
    tier: "A",
    price: 7841030,
    specs: [
      "AMD Ryzen 3 5400U",
      "Radeon Vega 6",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
    shopUrl:  "https://s.shopee.co.id/4qG0m86hfM",
    image:    "./LAPTOP 7 JUTA/Acer14.webp"
  },

        {
    id: 223223123411,
    name: "Acer Aspire Lite 14-36P",
    category: "global",
    tier: "C",
    price: 7099000,
    specs: [
      "Intel Celeron N4500",
      "Intel UHD 16Eu",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3Vkuxkf5GG",
    image:    "./LAPTOP 6 JUTA/al146jt.webp"
  },


{
  id: 23252338,
  name: "Acer Nitro 5 AN515-55",
  category: "bekas",
  tier: "A+",
  sold_out: false,
  price: 7505000,
  specs: [
    "Intel Core i5-10300H",
    "Nvidia GeForce GTX 1650 Ti 4GB",
    "RAM 8GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7694173225537817864",
  shopUrl: "https://s.shopee.co.id/6L51CjaD7n",
  image: "./LAPTOP 7 JUTA/nitro7jt.webp"
},



{
  id: 2132423235239,
  name: "Asus TUF FX504GD ",
  category: "bekas",
  tier: "A+",
  price: 6460000,
  specs: [
    "Intel Core i7-8750H",
    "Nvidia GTX 1050 4GB",
    "RAM 8GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7694173225537817864",
  shopUrl: "https://s.shopee.co.id/20vZTALSGP",
  image: "./LAPTOP 6 JUTA/asus6jt.webp"
},

{
  id: 222352529,
  name: "Acer Nitro V15 (PILIHAN MIMIN)",
  category: "global",
  tier: "S",
  sold_out: true,
  price: 15789000,
  specs: [
    "Intel Core i5-210H",
    "Nvidia GeForce RTX 3050 6GB",
    "RAM 16GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7694173225537817864",
  shopUrl: "https://s.shopee.co.id/7VHCk1IxzE",
  image: "./LAPTOP 14 JUTA/acernitro.webp"
},

    {
    id: 207,
    name: "Acer Aspire 7 Pro 3050 6GB (PILIHAN MIMIN)",
    sold_out: true,
    category: "global",
    tier: "S",
    price: 15074000,
    specs: [
      "Intel Core i5-13420H",
      "Nvidia GeForce RTX 3050 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7694173225537817864",
    shopUrl:  "https://s.shopee.co.id/7KxmXsB1aF",
    image:    "./LAPTOP 12 JUTA/Acer 7.webp"
  },


// Tier A: Cuma 56 ribu lebih murah dari Acer Aspire 7 Pro RTX 3050 6GB, padahal VRAM-nya cuma 4GB. Mending tambah dikit ambil yang 6GB
{
  id: 23235250,
  name: "Acer Aspire 7 Pro 3050 4GB",
  category: "global",
  tier: "A",
  sold_out: false,
  price: 14799677,
  specs: [
    "Intel Core i5-210H",
    "Nvidia GeForce RTX 3050 4GB",
    "RAM 16GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7694173225537817864",
  shopUrl: "https://s.shopee.co.id/9APQjMnL62",
  image: "./LAPTOP 12 JUTA/acer4gb.webp"
},

{
  id: 232352351,
  name: "Asus ROG Flow X13 ",
  category: "bekas",
  tier: "S",
  sold_out: true,
  price: 13632000,
  specs: [
    "AMD Ryzen 7 6800HS",
    "Nvidia GeForce RTX 3050 Ti 4GB",
    "RAM 16GB",
    "SSD 1TB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7694173225537817864",
  shopUrl: "https://s.shopee.co.id/AAHl7pyTiq",
  image: "./LAPTOP 13 JUTA/rog13jt.webp"
},

// Tier A+: Harganya naik jadi 13,63jt. Selisihnya tinggal 1,4 juta sama Acer Aspire 7 Pro RTX 3050 6GB baru (15,07jt, S) yang masih garansi resmi
{
  id: 232532532,
  name: "Lenovo LOQ 15IAX9 ",
  category: "bekas",
  tier: "A+",
  sold_out: true,
  price: 13630000,
  specs: [
    "Intel Core i5-12450HX",
    "Nvidia GeForce RTX 3050 6GB",
    "RAM 12GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7694173225537817864",
  shopUrl: "https://s.shopee.co.id/5LCTzdSpnc",
  image: "./LAPTOP 12 JUTA/loq12jt.webp"
},

{
  id: 2323523,
  name: "Axioo Pongo 725 V2 (PILIHAN MIMIN)",
  category: "odm",
  tier: "S",
  sold_out: true,
  price: 12699000,
  specs: [
    "Intel Core i7-13620H",
    "Nvidia GeForce RTX 2050 4GB",
    "RAM 16GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7694173225537817864",
  shopUrl: "https://s.shopee.co.id/113UuLKVnu",
  image: "./LAPTOP 8 JUTA/pongo 725.webp"
},

// Tier A+: RTX 3050 6GB dan RAM 16GB, tapi harganya 12,26jt. Hampir sama kayak Advan Pixwar T baru (12,15jt) yang masih garansi resmi
{
  id: 25235234,
  name: "MSI Cyborg 15 A12U",
  category: "bekas",
  tier: "A+",
  sold_out: false,
  price: 12255000,
  specs: [
    "Intel Core i5-12450H",
    "Nvidia GeForce RTX 3050 6GB",
    "RAM 16GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7694173225537817864",
  shopUrl: "https://s.shopee.co.id/1BMv2MY6ly",
  image: "./LAPTOP 11 JUTA/cyborg11jt.webp"
},

  {
    id: 110,
    name: "HP 14 (PILIHAN MIMIN)",
    sold_out: true,
    category: "global",
    tier: "S",
    price: 11798000,
    specs: [
      "Intel Ultra 5 125H",
      "Intel Arc",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
    shopUrl:  "https://s.shopee.co.id/5VWc0TlDbr",
    image:    "./LAPTOP 10 JUTA/HP 14.webp"
  },

  {
    id: 9,
    name: "Advan Pixwar T (PILIHAN MIMIN)",
    category: "odm",
    tier: "S",
    price: 12150080,
    specs: [
      "AMD Ryzen 7 8745HS",
      "Radeon 780M",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
    shopUrl:  "https://s.shopee.co.id/4fx8Tud1Fw",
    image:    "./LAPTOP 9 JUTA/Advan Pixwar.webp"
  },

{
  id: 2323423425,
  name: "MSI Thin 15 B12UCX",
  category: "bekas",
  tier: "S",
  sold_out: true,
  price: 10224000,
  specs: [
    "Intel Core i7-12650H",
    "Nvidia GeForce RTX 2050 4GB",
    "RAM 16GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7694173225537817864",
  shopUrl: "https://s.shopee.co.id/1LgMbqhzPw",
  image: "./LAPTOP 11 JUTA/MSI Thin.webp"
},

{
  id: 23253536,
  name: "Lenovo IdeaPad Gaming 3",
  category: "bekas",
  tier: "A+",
  sold_out: false,
  price: 9600000,
  specs: [
    "AMD Ryzen 5 5500H",
    "Nvidia GeForce RTX 2050 4GB",
    "RAM 16GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7694173225537817864",
  shopUrl: "https://s.shopee.co.id/50ZeySAN0r",
  image: "./LAPTOP 8 JUTA/lenovoig1.webp"
},

{
  id: 2234320,
  name: "Axioo Hype 5 AMD X6-11 (PILIHAN MIMIN)",
  category: "odm",
  tier: "S",
  price: 8739000,
  specs: [
    "AMD Ryzen 5 6600H",
    "Radeon 660M",
    "RAM 16GB",
    "SSD 256GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
  shopUrl:  "https://s.shopee.co.id/7KxLjlM6u5",
  image:    "./LAPTOP 8 JUTA/axioo8jt.webp"
},

  // Tier A+: Generasi lebih baru dan SSD 512GB, tapi iGPU Radeon 740M jauh di bawah Radeon 680M punya ThinkPad T14s Gen 3 Ryzen 7 (9,5jt, S) yang 475 ribu lebih murah
  {
    id: 2026110301,
    name: "ThinkPad T14 Gen 4 Ryzen 5",
    category: "bekas",
    tier: "A+",
    price: 9975000,
    specs: [
      "AMD Ryzen 5 Pro 7540U",
      "Radeon 740M",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/40ho2wEzXV",
    image:    "./LAPTOP 9 JUTA/ThinkPad T14 Gen 4 Ryzen 5 9 Juta.webp"
  },

{
  id: 2325323527,
  name: "HP Pavilion Gaming 15-ec1076AX",
  category: "bekas",
  tier: "A+",
  sold_out: false,
  price: 8835000,
  specs: [
    "AMD Ryzen 7 4800H",
    "Nvidia GeForce GTX 1660 Ti 6GB",
    "RAM 8GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7694173225537817864",
  shopUrl: "https://s.shopee.co.id/8fSw4fiojZ",
  image: "./LAPTOP 8 JUTA/pavilion8jt.webp"
},



    {
    id: 3878074,
    name: "Axioo Hype 7 AMD X8-1 (PILIHAN MIMIN)",
    category: "odm",
    tier: "S",
    price: 10268100,
    specs: [
      "AMD Ryzen 7 6800H",
      "Radeon 680M",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
    shopUrl:  "https://s.shopee.co.id/9pdoOODyne",
    image:    "./LAPTOP 9 JUTA/axioohype7.webp"
  },


      {
    id: 30324234,
    name: "Dell Latitude 5430 i5 (JUARA 5 JUTA)",
    category: "bekas",
    tier: "S",
    sold_out: true,
    alternatif: 2026102312,
    alternatif_alasan: "Prosesor sama (i5-1245U), lebih murah 100rb",
    price: 5336000,
    specs: [
      "Intel Core i5-1245U",
      "Intel Iris Xe 80EU",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/6VOIjl2Lft",
    image:    "./LAPTOP 5 JUTA/dell5430.webp"
  },




      {
    id: 3342420,
    name: "Asus ROG Strix G16 (Laptop Spiderman)",
    sold_out: true,
    category: "global",
    tier: "S",
    price: 59293000,
    specs: [
      "Ryzen 9 8940HX",
      "Nvidia RTX 5080 16GB",
      "RAM 32GB",
      "SSD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7692188578423655688",
    shopUrl:  "https://s.shopee.co.id/3B7sdZxTs0",
    image:    "./spiderman.webp"
  },
    {
    id: 34322420,
    name: "ThinkPad T14s Gen 3 Ryzen 7 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 9500000,
    specs: [
      "Ryzen 7 Pro 6850U",
      "Radeon 680M",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
    shopUrl:  "https://s.shopee.co.id/5q8XsW3reZ",
    image:    "./LAPTOP 8 JUTA/ThinkPad T14 G3 AMD.webp"
  },
  // Tier S: iGPU Radeon 660M dan prosesor 6 core generasi Zen 3+. Varian SSD 256GB di LOCKSTORE 1,2jt lebih murah dari varian 512GB
  {
  id: 13249,
  name: "ThinkPad T14 Gen 3 Ryzen 5 (PILIHAN MIMIN)",
  category: "bekas",
  tier: "S",
  price: 7837500,
  specs: [
    "AMD Ryzen 5 Pro 6650U",
    "Radeon 660M",
    "RAM 16GB",
    "SSD 256GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
  shopUrl:  "https://s.shopee.co.id/5VWsmgWCuf",
  toko: "LOCKSTORE",
  linkLain: [
    { url: "https://s.shopee.co.id/BUB7rYvvq", harga: 9025000, label: "SSD 512GB" }
  ],
  image:    "./LAPTOP 8 JUTA/ThinkPad T14 G3 AMD.webp"
},

{
  id: 2234231,
  name: "Dell Latitude 5430 i7",
  category: "bekas",
  tier: "S",
  sold_out: true,
  price: 6590000,
  specs: [
    "Intel Core i7-1255U",
    "Intel Iris Xe Graphics 96EU",
    "RAM 32GB",
    "SSD 256GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
  shopUrl:  "https://s.shopee.co.id/8KpzFtiSdr",
  image:    "./LAPTOP 6 JUTA/dell6jt.webp"
},
{
  id: 2132423235235,
  name: "Asus TUF Dash F15 FX516PE",
  category: "bekas",
  tier: "S",
  price: 11210000,
  specs: [
    "Intel Core i7-11370H",
    "Nvidia RTX 3050 Ti 4GB",
    "RAM 16GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7687156829813591304",
  shopUrl: "https://s.shopee.co.id/9zxqx6Auf4",
  image: "./LAPTOP 10 JUTA/tuf10jt.webp"
},

// =====================================================================
// LAPTOP BARU 10–13 JUTA (riset 4 Nov 2026, harga HP + 200rb)
// =====================================================================

  // Tier S: Prosesor dan iGPU sama kayak HP 14 Ultra 5 125H (11,80jt, S) tapi 850 ribu lebih murah, layar 16:10 sRGB 100% dan bodi magnesium 1kg. HP 14 tetap S karena aftersales merek global jauh lebih kuat
  {
    id: 2026110421,
    name: "Polytron Luxia Pro Ultra 5",
    category: "odm",
    tier: "S",
    price: 11124050,
    specs: [
      "Intel Core Ultra 5 125H",
      "Intel Arc",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3qOP7ujE5U",
    image:    "./LAPTOP 10 JUTA/Polytron Luxia Pro Ultra 5 10 Juta.webp"
  },

  // Tier A+: Prosesor 8 core dan Radeon 680M, layar 16:10. Tapi Axioo Hype 7 AMD X8-1 (9,74jt, S) performanya hampir sama dan 700 ribu lebih murah
  {
    id: 2026110422,
    name: "Axioo Hype 7 AMD X8-21",
    category: "odm",
    tier: "A+",
    price: 10791550,
    specs: [
      "AMD Ryzen 7 7735HS",
      "Radeon 680M",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/7KyHIRYdNp",
    image:    "./LAPTOP 10 JUTA/Axioo Hype 7 AMD X8-21 10 Juta.webp"
  },

  // Tier A+: Prosesor sama kayak Infinix Xbook B14 R7 (10,50jt, A+) dan sedikit lebih murah. Tapi Axioo Hype 7 AMD X8-1 (9,74jt, S) performanya hampir sama dan lebih murah lagi
  {
    id: 2026110423,
    name: "Tecno Megabook K14SFA",
    category: "odm",
    tier: "A+",
    price: 10648100,
    specs: [
      "AMD Ryzen 7 7735HS",
      "Radeon 680M",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/1W0ULlSPFA",
    image:    "./LAPTOP 10 JUTA/Tecno Megabook K14SFA 10 Juta.webp"
  },

  // Tier A+: Layar 2K OLED dan baterai awet banget. Tapi chipnya ARM (Snapdragon), jadi sebagian aplikasi teknik dan game gak bisa jalan
  {
    id: 2026110424,
    name: "Asus Vivobook S14 S3407QA OLED",
    category: "global",
    tier: "A+",
    price: 12832150,
    specs: [
      "Snapdragon X X1-26-100",
      "Qualcomm Adreno",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/qknYc2jUi",
    image:    "./LAPTOP 12 JUTA/Asus Vivobook S14 S3407QA OLED 12 Juta.webp"
  },

  // Tier A+: RTX 3050 dan layar 144Hz dari merek global. Tapi RAM baru 8GB, dan HP Pavilion Gaming 15 dengan GPU sama 1,4 juta lebih murah
  {
    id: 2026110425,
    name: "MSI Thin 15 B13UC",
    sold_out: true,
    category: "global",
    tier: "A+",
    price: 13562240,
    specs: [
      "Intel Core i5-13420H",
      "Nvidia GeForce RTX 3050 4GB",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3g4yvnMS5V",
    image:    "./LAPTOP 13 JUTA/MSI Thin 15 B13UC 13 Juta.webp"
  },

// =====================================================================
// LAPTOP 10–12 JUTA BARU (riset 4 Nov 2026, harga HP)
// - bekas & baru <10jt = harga HP, baru >=10jt = harga HP + 200rb
// - image belum ada
// =====================================================================

  // Tier S: Core Ultra 5 135H + Intel Arc di 10 juta pas, 1,8 juta lebih murah dari HP 14 Ultra 5 125H (11,8jt, S). Build bisnis seri 5000
  {
    id: 2026110410,
    name: "Dell Latitude 5450",
    sold_out: true,
    category: "bekas",
    tier: "S",
    price: 10000000,
    specs: [
      "Intel Core Ultra 5 135H",
      "Intel Arc",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3B8iB7EJfc",
    image:    "./LAPTOP 10 JUTA/Dell Latitude 5450 10 Juta.webp"
  },

  // Tier A+: Bodi aluminium premium, tapi HP Elitebook x360 830 G10 (8,84jt, S) dengan prosesor sama 930 ribu lebih murah dan bisa dilipat 2 in 1
  {
    id: 2026110411,
    name: "HP Elitebook 840 G10",
    category: "bekas",
    tier: "A+",
    price: 9765050,
    specs: [
      "Intel Core i5-1345U",
      "Intel Iris Xe",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/qknP2Mcet",
    image:    "./LAPTOP 10 JUTA/HP Elitebook 840 G10 10 Juta.webp"
  },

  // Tier S: Bisa dilipat 2 in 1 dan bodi premium. Prosesornya sama kayak HP Elitebook 840 G10, tapi 930 ribu lebih murah
  {
    id: 2026110412,
    name: "HP Elitebook x360 830 G10",
    category: "bekas",
    tier: "S",
    price: 8835000,
    specs: [
      "Intel Core i5-1345U",
      "Intel Iris Xe",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/906V86CJri",
    image:    "./LAPTOP 10 JUTA/HP Elitebook x360 830 G10 10 Juta.webp"
  },

  // Tier A+: Prosesor sama kayak HP 14 (11,8jt, S) tapi 1,7 juta lebih murah, masih garansi resmi. Tapi Latitude 5450 lebih murah dan prosesornya setingkat di atas
  {
    id: 2026110413,
    name: "Acer Swift Go 14 SFG14-73",
    category: "bekas",
    tier: "A+",
    price: 10212500,
    specs: [
      "Intel Core Ultra 5 125H",
      "Intel Arc",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/1BgPA8qH7",
    image:    "./LAPTOP 10 JUTA/Acer Swift Go 14 SFG14-73 10 Juta.webp"
  },

  // Tier A+: Seri ThinkPad paling premium, bobot sekitar 1,1kg. Tapi prosesornya sama kayak Elitebook 840 G10 yang 340 ribu lebih murah
  {
    id: 2026110414,
    name: "ThinkPad X1 Carbon Gen 11",
    category: "bekas",
    tier: "A+",
    price: 10450000,
    specs: [
      "Intel Core i5-1345U",
      "Intel Iris Xe",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/LoWnxJlbm",
    image:    "./LAPTOP 10 JUTA/ThinkPad X1 Carbon Gen 11 10 Juta.webp"
  },

  // Tier A+: Prosesor 12 core dan bodi premium X1 Carbon, cuma beda 190 ribu dari Gen 11. Tapi Latitude 5450 lebih murah dan iGPU Arc-nya lebih kenceng
  {
    id: 2026110415,
    name: "ThinkPad X1 Carbon Gen 10",
    category: "bekas",
    tier: "A+",
    price: 10640000,
    specs: [
      "Intel Core i7-1260P",
      "Intel Iris Xe",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/8KqoKgx1kI",
    image:    "./LAPTOP 10 JUTA/ThinkPad X1 Carbon Gen 10 10 Juta.webp"
  },

  // Tier A+: Prosesor H 14 core dan GPU workstation T1200, cocok buat CAD dan render. Tapi tambah 660 ribu udah dapet ZBook Fury G8 yang GPU-nya jauh lebih kenceng
  {
    id: 2026110416,
    name: "ThinkPad P15v Gen 3 (TEKNIK)",
    category: "bekas",
    tier: "A+",
    price: 10335050,
    specs: [
      "Intel Core i7-12700H",
      "Nvidia T1200 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/9zz2K0bh8G",
    image:    "./LAPTOP 10 JUTA/ThinkPad P15v Gen 3 10 Juta.webp"
  },

  // Tier S: GPU RTX A2000 kelas RTX 3050 Ti, harganya sama kayak Asus TUF Dash F15 (11,09jt) tapi build dan pendinginan kelas workstation
  {
    id: 2026110417,
    name: "HP Zbook Fury G8 (TEKNIK)",
    category: "bekas",
    tier: "S",
    price: 11000050,
    specs: [
      "Intel Core i7-11850H",
      "Nvidia RTX A2000 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/AKbsibf1VY",
    image:    "./LAPTOP 11 JUTA/HP Zbook Fury G8 11 Juta.webp"
  },

  // Tier A+: Prosesor i7-12700H dan layar 17 inci. Tapi bodinya plastik, dan Asus TUF Dash F15 (11,09jt) yang lebih murah GPU-nya RTX 3050 Ti
  {
    id: 2026110418,
    name: "MSI Katana GF76 12UC",
    category: "bekas",
    tier: "A+",
    price: 11970000,
    specs: [
      "Intel Core i7-12700H",
      "Nvidia GeForce RTX 3050 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3VlYaAarEG",
    image:    "./LAPTOP 11 JUTA/MSI Katana GF76 12UC 11 Juta.webp"
  },

  // Tier A+: Layar 2.8K OLED 120Hz, bobot 1kg, garansi resmi. Prosesornya kelas i5 hemat daya, sedikit di bawah Acer TravelMate P40 (10,41jt, S)
  {
    id: 2026110419,
    name: "Infinix Inbook Air Pro+ OLED",
    category: "odm",
    tier: "A+",
    price: 11313100,
    specs: [
      "Intel Core i5-1334U",
      "Intel Iris Xe",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/8fTej3RvrO",
    image:    "./LAPTOP 10 JUTA/Infinix Inbook Air Pro Plus OLED 10 Juta.webp"
  },

  // Tier S: Satu-satunya laptop baru RTX 3050 di bawah 12,5 juta, GPU-nya jauh di atas RTX 2050 punya Axioo Pongo 725 V2 (12,70jt). Kekurangannya model lama (2021)
  {
    id: 2026110420,
    name: "HP Pavilion Gaming 15-ec2010AX",
    category: "global",
    tier: "S",
    price: 12549050,
    specs: [
      "AMD Ryzen 5 5600H",
      "Nvidia GeForce RTX 3050 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/4LKfZ3lA5L",
    image:    "./LAPTOP 12 JUTA/HP Pavilion Gaming 15-ec2010AX 12 Juta.webp"
  },

{
  id: 2132423235236,
  name: "MSI Thin GF63 12UC",
  category: "bekas",
  tier: "S",
  sold_out: true,
  alternatif: 2132423235235,
  alternatif_alasan: "GPU lebih kenceng (3050 Ti), RAM 16GB, +860rb",
  price: 9400000,
  specs: [
    "Intel Core i5-12450H",
    "Nvidia RTX 3050 4GB",
    "RAM 8GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7687156829813591304",
  shopUrl: "https://s.shopee.co.id/3LQx1sF79q",
  image: "./LAPTOP 9 JUTA/thin9jt.webp"
},
{
  id: 2132423235237,
  name: "MSI Thin GF63 11UC ",
  category: "bekas",
  tier: "S",
  sold_out: true,
  alternatif: 2325323527,
  alternatif_alasan: "GPU setara (1660 Ti), lebih murah 100rb",
  price: 8700000,
  specs: [
    "Intel Core i5-11400H",
    "Nvidia RTX 3050 4GB",
    "RAM 8GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7687156829813591304",
  shopUrl: "https://s.shopee.co.id/9AOjzzxypZ",
  image: "./LAPTOP 8 JUTA/thin8jt.webp"
},
{
  id: 2132423235238,
  name: "Acer Nitro 5 AN515-45 ",
  category: "bekas",
  tier: "S",
  sold_out: true,
  alternatif: 23252338,
  alternatif_alasan: "Harga hampir sama, GPU setara",
  price: 7252000,
  specs: [
    "AMD Ryzen 5 5600H",
    "Nvidia GTX 1650 4GB",
    "RAM 16GB",
    "SSD 512GB, HDD 500GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7687156829813591304",
  shopUrl: "https://s.shopee.co.id/4LJUFlZQ7O",
  image: "./LAPTOP 7 JUTA/nitro7jt.webp"
},


{
  id: 160000001,
  name: "Acer Nitro V15 52-51TE (PILIHAN MIMIN)",
  category: "global",
  tier: "S",
  price: 17299050,
  specs: [
    "Intel Core 5-210H",
    "Nvidia RTX 4050 6GB",
    "RAM 16GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7684241462149598471",
  shopUrl: "https://s.shopee.co.id/60RVCfB6wL",
  image: "./LAPTOP 16 JUTA/acer210h.webp"
},

{
  id: 160000002,
  name: "HP OmniBook 7 Aero",
  sold_out: true,
  category: "global",
  tier: "A+",
  price: 16339000,
  specs: [
    "AMD Ryzen AI 7 350",
    "Radeon 860M",
    "RAM 16GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7684241462149598471",
  shopUrl: "https://s.shopee.co.id/4qGRaB7tA1",
  image: "./LAPTOP 16 JUTA/hpaero.webp"
},

{
  id: 170000001,
  name: "Asus TUF A16 FA607NUG (PILIHAN MIMIN)",
  category: "global",
  tier: "S",
  price: 19379000,
  specs: [
    "AMD Ryzen 7 7445HS",
    "Nvidia RTX 4050 6GB",
    "RAM 16GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7684241462149598471",
  shopUrl: "https://s.shopee.co.id/7VHCl94v8W",
  image: "./LAPTOP 17 JUTA/asustuf.webp"
},

{
  id: 170000002,
  name: "Asus Expertbook P5405CSA (PILIHAN MIMIN)",
  category: "global",
  tier: "S",
  price: 17014050,
  specs: [
    "Intel Ultra 5 226V",
    "Intel Arc 130V",
    "RAM 16GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7684241462149598471",
  shopUrl: "https://s.shopee.co.id/3qN0eGbj0Q",
  image: "./LAPTOP 17 JUTA/asus17jt.webp"
},

{
  id: 180000001,
  name: "Acer Nitro V15 52-50FX",
  category: "global",
  tier: "S",
  sold_out: true,
  alternatif: 2026102009,
  alternatif_alasan: "Model sama, versi yang masih ada",
  price: 18619000,
  specs: [
    "Intel Core 5-210H",
    "Nvidia RTX 5050 8GB",
    "RAM 16GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7684241462149598471",
  shopUrl: "https://s.shopee.co.id/3LQkWS5ace",
  image: "./LAPTOP 18 JUTA/acer18jt.webp"
},

{
  id: 180000002,
  name: "Asus Expertbook P5406CCA (PILIHAN MIMIN)",
  category: "global",
  tier: "S",
  price: 19649000,
  specs: [
    "Intel Ultra 7 225H",
    "Intel Arc 140T",
    "RAM 16GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7684241462149598471",
  shopUrl: "https://s.shopee.co.id/5fofIe0VPk",
  image: "./LAPTOP 18 JUTA/asus18jt.webp"
},

{
  id: 190000001,
  name: "Acer Nitro V15 52-777R (PILIHAN MIMIN)",
  category: "global",
  tier: "S",
  price: 20498000,
  specs: [
    "Intel Core 7-240H",
    "Nvidia RTX 5050 8GB",
    "RAM 16GB",
    "SSD 512GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7684241462149598471",
  shopUrl: "https://s.shopee.co.id/qkIp9EUHq",
  image: "./LAPTOP 19 JUTA/acer19jt.webp"
},

{
  id: 190000002,
  name: "Lenovo Slim 7 Aura Edition",
  category: "global",
  tier: "S",
  sold_out: true,
  alternatif: 2026102101,
  alternatif_alasan: "Harga hampir sama, layar OLED",
  price: 19300000,
  specs: [
    "Intel Ultra 7 258V",
    "Intel Arc 140V",
    "RAM 32GB",
    "SSD 1TB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7684241462149598471",
  shopUrl: "https://s.shopee.co.id/1AI6e8SeP",
  image: "./LAPTOP 19 JUTA/slim7.webp"
},

{
  id: 200000001,
  name: "HP Omen 15 GB0555AX ",
  category: "global",
  tier: "S",
  sold_out: true,
  alternatif: 190000001,
  alternatif_alasan: "Harga sama, GPU sama (RTX 5050)",
  price: 20139000,
  specs: [
    "AMD Ryzen 5 240",
    "Nvidia RTX 5050 8GB",
    "RAM 16GB",
    "SSD 1TB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7684241462149598471",
  shopUrl: "https://s.shopee.co.id/6AkvtRddz8",
  image: "./LAPTOP 20 JUTA/omen.webp"
},

{
  id: 200000002,
  name: "Asus Expertbook P5405CSA",
  category: "global",
  tier: "S",
  sold_out: true,
  alternatif: 180000002,
  alternatif_alasan: "Harga sama, seri Expertbook yang lebih baru",
  price: 20399000,
  specs: [
    "Intel Core Ultra 7 258V",
    "Intel Arc 140V",
    "RAM 32GB",
    "SSD 1TB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7684241462149598471",
  shopUrl: "https://s.shopee.co.id/9zxe1yTfDt",
  image: "./LAPTOP 20 JUTA/asus20jt.webp"
},


  {
    id: 21324243434,
    name: "Acer Aspire 7 Pro 3050 4GB",
    category: "global",
    tier: "A+",
    sold_out: true,
    alternatif: 23235250,
    alternatif_alasan: "Model sama, versi yang masih ada",
    price: 12499000,
    specs: [
      "Intel Core 5-210H",
      "Nvidia RTX 3050 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7683519139616394513",
    shopUrl:  "https://s.shopee.co.id/50ZHlqsUkq",
    image:    "./LAPTOP 12 JUTA/acer4gb.webp"
  },

    {
    id: 212322,
    name: "Asus Expertbook PM1403CDA",
    category: "global",
    tier: "S",
    sold_out: true,
    alternatif: 221,
    alternatif_alasan: "Harga dekat, iGPU setara",
    price: 13300000,
    specs: [
      "AMD Ryzen 7 170",
      "Radeon 780M",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7683519139616394513",
    shopUrl:  "https://s.shopee.co.id/1LglGIJrBy",
    image:    "./LAPTOP 12 JUTA/asuspm1.webp"
  },


  {
    id: 140,
    name: "Apple Macbook Neo (PILIHAN MIMIN)",
    category: "global",
    tier: "A+",
    price: 13717483,
    specs: [
      "Apple A18 Pro",
      "GPU Apple A18 Pro",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7683519139616394513",
    shopUrl:  "https://s.shopee.co.id/7fXRngXlhb",
    image:    "./LAPTOP 10 JUTA/Apple Macbook Neo.webp"
  },

  {
    id: 25364,
    name: "Acer Nitro V15 ",
    category: "global",
    tier: "S",
    sold_out: true,
    alternatif: 222352529,
    alternatif_alasan: "Model dan spek sama",
    price: 14800000,
    specs: [
      "Intel Core 5-210H",
      "Nvidia RTX 3050 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7683519139616394513",
    shopUrl:  "https://s.shopee.co.id/30ozF51bz0",
    image:    "./LAPTOP 14 JUTA/acernitro.webp"
  },

  {
    id: 22211,
    name: "Asus Expertbook P3 G1 (PILIHAN MIMIN)",
    category: "global",
    tier: "S",
    price: 17189800,
    specs: [
      "Intel Ultra 7 225H",
      "Intel Arc 140T",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7683519139616394513",
    shopUrl:  "https://s.shopee.co.id/3LQhROnEMZ",
    image:    "./LAPTOP 14 JUTA/asusp3.webp"
  },

  {
    id: 213242434343,
    name: "Acer Nitro Lite 16 ",
    sold_out: true,
    category: "global",
    tier: "S",
    price: 16678999,
    specs: [
      "Intel Core 5-210H",
      "Nvidia RTX 4050 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7683519139616394513",
    shopUrl:  "https://s.shopee.co.id/4LJEcPpeoE",
    image:    "./LAPTOP 15 JUTA/acernitrolite.webp"
  },

  {
    id: 2132422243434,
    name: "HP Omnibook 3 14-HV0036AU (PILIHAN MIMIN)",
    category: "global",
    tier: "S",
    price: 16254050,
    specs: [
      "AMD Ryzen AI 7 445",
      "Radeon 840M",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7683519139616394513",
    shopUrl:  "https://s.shopee.co.id/6q0ZcU4Umq",
    image:    "./LAPTOP 15 JUTA/hpomni.webp"
  },

  {
    id: 21324234,
    name: "Asus ROG Strix GL553VD ",
    category: "bekas",
    tier: "A",
    sold_out: true,
    alternatif: 213242321235240,
    alternatif_alasan: "Harga sama, GPU setara, udah SSD",
    price: 5520000,
    specs: [
      "Intel Core i7-7700HQ",
      "Nvidia GTX 1050 2GB",
      "RAM 8GB",
      "HDD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7679067640475979016",
    shopUrl:  "https://s.shopee.co.id/AUtYnZCcC3",
    image:    "./LAPTOP 5 JUTA/rog strix.webp"
  },
    {
    id: 2132423532234,
    name: "HP Pavilion 15-CB505TX",
    category: "bekas",
    tier: "A+",
    sold_out: true,
    alternatif: 2132423235239,
    alternatif_alasan: "Harga hampir sama, CPU lebih kenceng, GPU sama",
    price: 6250000,
    specs: [
      "Intel Core i7-7700HQ",
      "Nvidia GTX 1050 4GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7679067640475979016",
    shopUrl:  "https://s.shopee.co.id/20v0g5AKlE",
    image:    "./LAPTOP 6 JUTA/pavilion.webp"
  },
    {
    id: 2253251324234,
    name: "Acer Nitro 5 AN515-52 ",
    category: "bekas",
    tier: "A+",
    sold_out: true,
    alternatif: 23252338,
    alternatif_alasan: "Harga hampir sama, CPU lebih baru",
    price: 7200000,
    specs: [
      "Intel Core i7-8750H",
      "Nvidia GTX 1060 6GB",
      "RAM 8GB",
      "SSD 256GB, HDD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7679067640475979016",
    shopUrl:  "https://s.shopee.co.id/2gAhTOFoUC",
    image:    "./LAPTOP 7 JUTA/nitro 5.webp"
  },
    {
    id: 21235235324234,
    name: "Axioo Pongo 725 ",
    category: "bekas",
    tier: "S",
    sold_out: true,
    alternatif: 2325323527,
    alternatif_alasan: "GPU lebih kenceng (1660 Ti), lebih murah 40rb",
    price: 8640000,
    specs: [
      "Intel Core i7-12650H",
      "Nvidia RTX 2050 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7679067640475979016",
    shopUrl:  "https://s.shopee.co.id/gPd6CAHFk",
    image:    "./LAPTOP 8 JUTA/pongo 725.webp"
  },
    {
    id: 2132423235234,
    name: "Acer Nitro 5 AN515-58 ",
    category: "bekas",
    tier: "S",
    sold_out: true,
    alternatif: 2132423235235,
    alternatif_alasan: "GPU lebih kenceng (3050 Ti), RAM 16GB, +1jt",
    price: 9216000,
    specs: [
      "Intel Core i5-12500H",
      "Nvidia RTX 3050 4GB",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7679067640475979016",
    shopUrl:  "https://s.shopee.co.id/7fZNTHBXTV",
    image:    "./LAPTOP 9 JUTA/nitro 58.webp"
  },
  {
    id: 213242323435234,
    name: "Asus ROG Zephyrus M16 GU603HM",
    category: "bekas",
    tier: "S",
    sold_out: true,
    alternatif: 2132423235235,
    alternatif_alasan: "GPU sama (3050 Ti), +370rb",
    price: 9888000,
    specs: [
      "Intel Core i7-11800H",
      "Nvidia RTX 3050 Ti 4GB",
      "RAM 12GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7679067640475979016",
    shopUrl:  "https://s.shopee.co.id/3VjoVi3OK1",
    image:    "./LAPTOP 10 JUTA/m16.webp"
  },
  {
    id: 214,
    name: "HP Probook 430 G3",
    category: "bekas",
    tier: "A",
    sold_out: true,
    price: 1932000,
    specs: [
      "Intel Core i3-6100U",
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
    tier: "A+",
    sold_out: true,
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
    id: 213,
    name: "Dell Latitude 7280",
    category: "bekas",
    tier: "A+",
    sold_out: true,
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
    id: 212,
    name: "ThinkPad X280",
    category: "bekas",
    tier: "A+",
    sold_out: true,
    alternatif: 2026102404,
    alternatif_alasan: "Sama-sama dual core, layar lebih lega 14 inci, cuma +110rb",
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
    id: 210,
    name: "Dell Latitude 7290",
    category: "bekas",
    tier: "A",
    price: 3705000,
    specs: [
      "Intel Core i5-7300U",
      "Intel HD Graphics 620",
      "RAM 16GB",
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
    tier: "A",
    sold_out: true,
    alternatif: 2026102404,
    alternatif_alasan: "Lebih murah 90rb, RAM 8GB dan SSD 256GB",
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
    id: 80,
    name: "ThinkPad P50 (TEKNIK)",
    sold_out: true,
    category: "bekas",
    tier: "A+",
    price: 4526000,
    specs: [
      "Intel Core i7-6820HQ",
      "Nvidia Quadro M1000M 2GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7680825353316633874",
    shopUrl:  "https://s.shopee.co.id/904r38ahfg",
    image:    "./LAPTOP 3 JUTA/ThinkPad P50s.webp"
  },
    {
    id: 8234320,
    name: "ThinkPad W541 (TEKNIK)",
    category: "bekas",
    tier: "A",
    sold_out: true,
    price: 3446000,
    specs: [
      "Intel Core i7-4810MQ",
      "Nvidia Quadro K1100M 2GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7680825353316633874",
    shopUrl:  "https://s.shopee.co.id/gPj7dWvih",
    image:    "./LAPTOP 3 JUTA/thinkpad w.webp"
  },
  {
    id: 224,
    name: "Dell Latitude 5400",
    category: "bekas",
    tier: "S",
    price: 3942500,
    specs: [
      "Intel Core i5-8265U",
      "Intel UHD Graphics 620",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
    shopUrl:  "https://s.shopee.co.id/9fIsAZatzM",
    image:    "./LAPTOP 3 JUTA/dell 5400.webp"
  },
  {
    id: 226,
    name: "ThinkPad X390",
    category: "bekas",
    tier: "A+",
    price: 3705000,
    specs: [
      "Intel Core i5-8265U",
      "Intel UHD Graphics 620",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7656357978982894866",
    shopUrl:  "https://s.shopee.co.id/6fiqA6x8vH",
    toko: "Kings Computerr",
    linkLain: [
      { url: "https://s.shopee.co.id/4AxvbMQSix", harga: 4085000, label: "Toko lain" }
    ],
    image:    "./LAPTOP 3 JUTA/thinkpad x.webp"
  },
  {
    id: 1,
    name: "Lenovo ThinkPad T480s",
    category: "bekas",
    tier: "A+",
    price: 4028000,
    specs: [
      "Intel Core i5-8250U",
      "Intel UHD Graphics 620",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7646777812036160786?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/2Vsiz7WsQC",
    image:    "./LAPTOP 3 JUTA/ThinkPad T480s.webp"
  },
  {
    id: 224454,
    name: "ThinkPad T495",
    category: "bekas",
    tier: "S",
    price: 4357650,
    specs: [
      "AMD Ryzen 5 3500U",
      "Radeon Vega 8",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7673058681805720852",
    shopUrl:  "https://s.shopee.co.id/80C5tj9wDD",
    image:    "./LAPTOP 3 JUTA/ThinkPad T495.webp"
  },
  {
    id: 2,
    name: "Dell Latitude 7400",
    category: "bekas",
    tier: "A",
    sold_out: true,
    alternatif: 2026102311,
    alternatif_alasan: "Lebih murah 570rb tapi udah i7 gen 8",
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
    tier: "A",
    sold_out: true,
    alternatif: 2026102311,
    alternatif_alasan: "Lebih murah 520rb tapi udah i7 gen 8",
    price: 3910000,
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
    name: "HP Elitebook 745 G6",
    category: "bekas",
    tier: "A+",
    sold_out: true,
    alternatif: 2026102304,
    alternatif_alasan: "Model sama, versi baru lebih murah",
    price: 4436000,
    specs: [
      "AMD Ryzen 5 3500U",
      "Radeon Vega 8",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7664581349801528584",
    shopUrl:  "https://s.shopee.co.id/8AUsBakgm0",
    image:    "./LAPTOP 3 JUTA/HP Elitebook 745 G6.webp"
  },
  {
    id: 10,
    name: "Dell Latitude 7410",
    category: "bekas",
    tier: "A",
    sold_out: true,
    alternatif: 2026102305,
    alternatif_alasan: "Model sama, versi baru lebih murah",
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
    id: 81,
    name: "ThinkPad P51 (TEKNIK)",
    category: "bekas",
    tier: "B+",
    sold_out: true,
    alternatif: 5,
    alternatif_alasan: "P52 lebih baru dan lebih kenceng, +660rb",
    price: 4726000,
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
    id: 13,
    name: "ThinkPad T14 Gen 2 (INTEL)",
    category: "bekas",
    tier: "S",
    price: 5700000,
    specs: [
      "Intel Core i5-1135G7",
      "Intel Iris Xe",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7647900471994125576?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/60QFanNvAP",
    image:    "./LAPTOP 5 JUTA/ThinkPad T14 G2.webp"
  },
  {
    id: 92,
    name: "Advan 2 in 1 Go Touchscreen",
    category: "odm",
    tier: "B",
    price: 5992920,
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
    id: 2223235,
    name: "ThinkPad T14 Gen 1 Ryzen 7",
    category: "bekas",
    tier: "S",
    price: 5985000,
    specs: [
      "AMD Ryzen 7 Pro 4750U",
      "Radeon Vega 7",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7689440374204501255",
    shopUrl:  "https://s.shopee.co.id/9ANHSEyLIM",
    image:    "./LAPTOP 5 JUTA/thinkpadr7.webp"
  },
  {
    id: 224245,
    name: "ThinkPad L14 Gen 2 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 6270000,
    specs: [
      "AMD Ryzen 7 5850U",
      "Radeon Vega 8",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7656357978982894866",
    shopUrl:  "https://s.shopee.co.id/6L3euSMF4y",
    image:    "./LAPTOP 5 JUTA/thinkpad l.webp"
  },
  {
    id: 227,
    name: "Asus TUF FX504GE",
    category: "bekas",
    tier: "B+",
    sold_out: true,
    alternatif: 213242321235240,
    alternatif_alasan: "Lebih murah 190rb, GPU setingkat di bawah",
    price: 5712000,
    specs: [
      "Intel Core i7-8750H",
      "Nvidia GeForce GTX 1050Ti 4GB",
      "RAM 8GB",
      "SSD SSD 256GB,HDD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7656421329020685576",
    shopUrl:  "https://s.shopee.co.id/7AbXWXHtnA",
    image:    "./LAPTOP 5 JUTA/tuf 1.webp"
  },

  {
    id: 90,
    name: "Axioo Hype 3 G11",
    category: "odm",
    tier: "B+",
    price: 6509070,
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
    id: 232,
    name: "Dell Precision 7730 (TEKNIK)",
    category: "bekas",
    tier: "S",
    sold_out: true,
    price: 6080000,
    specs: [
      "Intel Core i7-8850H",
      "Nvidia Quadro P3200 6GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7664957995209542919",
    shopUrl:  "https://s.shopee.co.id/111UtB08HV",
    image:    "./LAPTOP 6 JUTA/Dell 7730.webp"
  },
    {
    id: 233,
    sold_out: true,
    name: "Macbook Pro Retina 15 (2015)",
    category: "bekas",
    tier: "B+",
    price: 5280000,
    specs: [
      "Intel i7 2.2Ghz",
      "Intel Iris Pro 6100",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7665252964768042248",
    shopUrl:  "https://s.shopee.co.id/3LPPh8aOrB",
    image:    "./LAPTOP 5 JUTA/Macbook.webp"
  },
    {
    id: 234,
    name: "Axioo Hype 1 (WAJIB NONTON VIDEO)",
    category: "odm",
    tier: "C",
    price: 3905070,
    specs: [
      "Intel Celeron N4020",
      "Intel UHD Graphics 600",
      "RAM 4GB",
      "SSD 128GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7667920615688523015",
    shopUrl:  "https://s.shopee.co.id/7VHrvb9amm",
    image:    "./LAPTOP 3 JUTA/Axioo Hype 1.webp"
  },
      {
    id: 23564,
    name: "HP Zbook 15U G5 (TEKNIK)",
    category: "bekas",
    tier: "A+",
    price: 5794050,
    specs: [
      "Intel Core i7-8565U",
      "Radeon Pro WX3200",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7667920615688523015",
    shopUrl:  "https://s.shopee.co.id/9ANSf5XKTG",
    image:    "./LAPTOP 5 JUTA/zbook.webp"
  },

  {
    id: 14,
    name: "Zyrex D-Tech Pro V2",
    category: "odm",
    tier: "A+",
    sold_out: true,
    alternatif: 6,
    alternatif_alasan: "Harga sama, sama-sama Ryzen 5",
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
    id: 228,
    name: "Asus TUF FX505GT",
    category: "bekas",
    tier: "A+",
    sold_out: true,
    alternatif: 23252338,
    alternatif_alasan: "GPU lebih kenceng (1650 Ti), +1,1jt",
    price: 6305000,
    specs: [
      "Intel Core i5-9300H",
      "Nvidia GeForce GTX 1650 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7656421329020685576",
    shopUrl:  "https://s.shopee.co.id/8fQLJUKXYW",
    image:    "./LAPTOP 6 JUTA/tuf 2.webp"
  },

  {
    id: 15,
    name: "Infinix XBOOK 15",
    category: "odm",
    tier: "B+",
    price: 6898000,
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
    id: 17,
    name: "HP Elitebook 835 G8",
    category: "bekas",
    tier: "S",
    sold_out: true,
    alternatif: 18,
    alternatif_alasan: "Prosesor sama (Ryzen 7 5850U), lebih murah 360rb, RAM 16GB",
    price: 6887000,
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
    id: 83,
    name: "ThinkPad P53 (TEKNIK)",
    category: "bekas",
    tier: "S",
    sold_out: true,
    alternatif: 36,
    alternatif_alasan: "GPU jauh lebih kenceng (P4000), +870rb",
    price: 6935000,
    specs: [
      "i7-9850H",
      "Nvidia Quadro T1000 4GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7680825353316633874",
    shopUrl:  "https://s.shopee.co.id/4qFI6qVhjQ",
    image:    "./LAPTOP 6 JUTA/ThinkPad T15 G2.webp"
  },
  {
    id: 229,
    name: "MSI GF63 Thin 9SCSR",
    category: "bekas",
    tier: "A+",
    sold_out: true,
    alternatif: 23252338,
    alternatif_alasan: "GPU sama (1650 Ti), +250rb",
    price: 7152000,
    specs: [
      "Intel Core i7-9750H",
      "Nvidia GeForce GTX 1650Ti 4GB",
      "RAM 16GB",
      "SSD SSD 512GB,HDD 500GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7656421329020685576",
    shopUrl:  "https://s.shopee.co.id/5q69wSojoS",
    image:    "./LAPTOP 7 JUTA/msi.webp"
  },
  {
    id: 7,
    name: "Advan Workplus Heritage",
    category: "odm",
    tier: "A+",
    price: 7899000,
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
    tier: "A",
    price: 8494000,
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
    id: 25,
    name: "Dell Latitude 7430",
    category: "bekas",
    tier: "S",
    sold_out: true,
    alternatif: 2234231,
    alternatif_alasan: "Lebih murah 910rb, tetap i7 + RAM 32GB",
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
    id: 21,
    name: "Axioo Hype 5 X6 AMD",
    sold_out: true,
    category: "odm",
    tier: "A+",
    price: 6883000,
    specs: [
      "AMD Ryzen 5 6600H",
      "Radeon 660M",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648607001504730386?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/9KjNmgTlhV",
    image:    "./LAPTOP 7 JUTA/Axioo Hype 5 X6 AMD.webp"
  },

  {
    id: 26,
    name: "Advan Workmate Ultra",
    category: "odm",
    tier: "A",
    price: 7623959,
    specs: [
      "Intel Ultra 5 115U",
      "Intel Arc",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648994950436228359?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/3B8DcZTVSk",
    image:    "./LAPTOP 7 JUTA/Advan Workmate Ultra.webp"
  },
  {
    id: 22,
    name: "Asus Vivobook 14 A1404VA",
    category: "global",
    tier: "A",
    price: 8852240,
    specs: [
      "Intel Core i3-1315U",
      "Intel UHD Graphics 13th Gen",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648607001504730386?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/3qKfjkUIbu",
    image:    "./LAPTOP 7 JUTA/Asus Vivobook 14.webp"
  },
  {
    id: 28,
    name: "Acer TravelMate P40 (PILIHAN MIMIN)",
    sold_out: true,
    category: "global",
    tier: "S",
    price: 10411080,
    specs: [
      "Intel Core i5-1335U",
      "Intel Iris Xe",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7678246023713656072",
    shopUrl:  "https://s.shopee.co.id/3qNuPvemll",
    image:    "./LAPTOP 8 JUTA/Acer TravelMate P40.webp"
  },
  {
    id: 29,
    name: "Asus Expertbook P1 P1403CVA (PILIHAN MIMIN)",
    category: "global",
    tier: "A",
    price: 9603550,
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
    id: 23,
    name: "Acer Aspire Lite 14 AL14-44P (PILIHAN MIMIN)",
    sold_out: true,
    category: "global",
    tier: "A+",
    price: 8739080,
    specs: [
      "AMD Ryzen 5 7430U",
      "Radeon Vega 7",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648607001504730386?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/AUuoMHZFw7",
    image:    "./LAPTOP 8 JUTA/Acer Aspire Lite AL15.webp"
  },
  {
    id: 8,
    name: "Axioo Hype Ai 5",
    category: "odm",
    tier: "A+",
    sold_out: true,
    alternatif: 2234320,
    alternatif_alasan: "Sama-sama ODM, RAM 16GB, +300rb",
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
    id: 27,
    name: "Infinix Xbook B14 R7",
    category: "odm",
    tier: "A+",
    price: 10838100,
    specs: [
      "Ryzen 7 7735HS",
      "Radeon 680M",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648994950436228359?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/gNdz6m422",
    image:    "./LAPTOP 8 JUTA/Infinix Xbook B14.webp"
  },
  {
    id: 230,
    name: "Lenovo Ideapad Gaming 3 2050",
    category: "bekas",
    tier: "A+",
    sold_out: true,
    alternatif: 2325323527,
    alternatif_alasan: "GPU lebih kenceng (1660 Ti), +150rb",
    price: 8448000,
    specs: [
      "AMD Ryzen 5 5500H",
      "Nvidia GeForce RTX 2050 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7656421329020685576",
    shopUrl:  "https://s.shopee.co.id/6L2QXXGXaG",
    image:    "./LAPTOP 8 JUTA/lenovoig1.webp"
  },
  {
    id: 100,
    name: "ThinkPad P15 Gen 1 (TEKNIK)",
    category: "bekas",
    tier: "S",
    sold_out: true,
    alternatif: 170,
    alternatif_alasan: "GPU lebih kenceng (T2000), +460rb",
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
    id: 34,
    name: "Asus Expertbook P1PM1403",
    category: "global",
    tier: "A+",
    sold_out: true,
    alternatif: 28,
    alternatif_alasan: "RAM 16GB, prosesor lebih kenceng, +770rb",
    price: 9438000,
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
    id: 33,
    name: "Acer Aspire Lite 15",
    sold_out: true,
    category: "global",
    tier: "A",
    price: 10256455,
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
  // Tier B+: Kemahalan: RAM cuma 8GB dan iGPU-nya UHD. Di harga segini Tecno Megabook K14SFA (10,65jt, A+) udah RAM 16GB dengan iGPU Radeon 680M yang jauh lebih kenceng
  {
    id: 32,
    name: "Lenovo Ideapad Slim 3 14",
    category: "global",
    tier: "B+",
    price: 10519878,
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
    id: 36,
    name: "ThinkPad P71 (TEKNIK)",
    category: "bekas",
    tier: "S",
    price: 7885000,
    specs: [
      "Intel Xeon E3-1535M",
      "Nvidia Quadro P4000 8GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7680825353316633874",
    shopUrl:  "https://s.shopee.co.id/2qUDjaXQBj",
    image:    "./LAPTOP 9 JUTA/ThinkPad P71.webp"
  },
  {
    id: 231,
    name: "Lenovo Ideapad Gaming 3 3060",
    category: "bekas",
    tier: "A+",
    sold_out: true,
    price: 9552000,
    specs: [
      "AMD Ryzen 5 5600H",
      "Nvidia GeForce RTX 3060 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7656421329020685576",
    shopUrl:  "https://s.shopee.co.id/7VENvvWMxk",
    image:    "./LAPTOP 9 JUTA/lenovoig2.webp"
  },

  {
    id: 31,
    name: "Advan Workplus Ai",
    category: "odm",
    tier: "A+",
    price: 9260600,
    specs: [
      "AMD Ryzen 7 255",
      "Radeon 780M",
      "RAM 8GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7678246023713656072",
    shopUrl:  "https://s.shopee.co.id/2VrDegH68c",
    image:    "./LAPTOP 9 JUTA/Advan Workplus Ai.webp"
  },
  {
    id: 160,
    name: "Axioo Hype 7 AMD X9",
    category: "odm",
    tier: "S",
    sold_out: true,
    alternatif: 3878074,
    alternatif_alasan: "Sama-sama Axioo Hype 7, lebih murah 470rb",
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
    id: 130,
    name: "Lenovo V14 Gen 4",
    category: "global",
    tier: "A+",
    sold_out: true,
    alternatif: 28,
    alternatif_alasan: "Harga sama, RAM 16GB, layar lebih bagus",
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
    id: 150,
    name: "Tecno Megabook T1 14",
    category: "odm",
    tier: "A+",
    price: 11598100,
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
    id: 180,
    name: "Lenovo Legion 5 15ARH05H ",
    category: "bekas",
    tier: "A",
    sold_out: true,
    alternatif: 25235234,
    alternatif_alasan: "GPU setara (3050 6GB), +450rb",
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
    id: 120,
    name: "Acer Swift Go 14 AI",
    category: "global",
    tier: "S",
    sold_out: true,
    alternatif: 110,
    alternatif_alasan: "Prosesor Intel (aplikasi lebih aman), +1,1jt",
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
    id: 170,
    name: "ThinkPad P1 Gen 2 (TEKNIK)",
    category: "bekas",
    tier: "S",
    price: 9025000,
    specs: [
      "Intel Core i7-9850H",
      "Nvidia Quadro T2000 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7680825353316633874",
    shopUrl:  "https://s.shopee.co.id/8fS0gSl2Sn",
    image:    "./LAPTOP 10 JUTA/ThinkPad P1 G2.webp"
  },
  {
    id: 201,
    name: "HP Omnibook 3 Next Gen Ai 14",
    category: "global",
    tier: "S",
    sold_out: true,
    alternatif: 110,
    alternatif_alasan: "Harga dekat, RAM 16GB",
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
    id: 190,
    name: "Lenovo Ideapad 5 2in1",
    category: "global",
    tier: "A+",
    sold_out: true,
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
    id: 202,
    name: "MSI Thin 15 B12UC-3298 ",
    category: "global",
    tier: "A",
    sold_out: true,
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
    id: 200,
    name: "Asus Expertbook P1403CVA",
    category: "global",
    tier: "A",
    sold_out: true,
    alternatif: 110,
    alternatif_alasan: "Harga sama, RAM 16GB, iGPU Arc jauh lebih kenceng",
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
    id: 204,
    name: "ThinkPad P53",
    category: "bekas",
    tier: "A+",
    sold_out: true,
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
    name: "HP Victus 16 ",
    category: "bekas",
    tier: "A+",
    sold_out: true,
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
    id: 203,
    name: "Lenovo LOQ 15ARP10E ",
    sold_out: true,
    category: "global",
    tier: "A+",
    price: 16574000,
    specs: [
      "AMD Ryzen 7 170",
      "Nvidia GeForce RTX 3050 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7651590893132107026?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/6q0kTUdUGk",
    image:    "./LAPTOP 12 JUTA/Lenovo LOQ.webp"
  },
  {
    id: 209,
    name: "Axioo Pongo 750 ",
    category: "bekas",
    tier: "A+",
    sold_out: true,
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
    id: 206,
    name: "Acer Swift Lite 14",
    category: "global",
    tier: "A",
    price: 13284378,
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
    id: 217,
    name: "Acer Nitro Lite 16",
    sold_out: true,
    category: "global",
    tier: "A+",
    price: 14999000,
    specs: [
      "Intel Core i5 210H",
      "Nvidia GeForce RTX 3050 6GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7654537785574984978",
    shopUrl:  "https://s.shopee.co.id/2LZ6dhBr30",
    image:    "./LAPTOP 12 JUTA/Acer.webp"
  },
  {
    id: 216,
    name: "Asus Vivobook S14",
    category: "global",
    tier: "S",
    sold_out: true,
    alternatif: 221,
    alternatif_alasan: "Ultra 5 generasi lebih baru, +1,7jt",
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
    id: 218,
    name: "HP Pavilion Plus 14",
    category: "global",
    tier: "S",
    sold_out: true,
    alternatif: 221,
    alternatif_alasan: "Harga dekat, prosesor lebih baru",
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
    name: "MSI Thin 15 B13VE-3415 ",
    category: "global",
    tier: "S",
    sold_out: true,
    alternatif: 2026102007,
    alternatif_alasan: "GPU sama (RTX 4050), +1,7jt",
    price: 14439000,
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
    name: "Acer Nitro Lite 16 NL16 ",
    category: "global",
    tier: "A+",
    sold_out: true,
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
    id: 223,
    name: "Asus Zenbook 14 OLED",
    category: "global",
    tier: "S",
    sold_out: true,
    alternatif: 221,
    alternatif_alasan: "Harga hampir sama, prosesor lebih baru",
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
    id: 222,
    name: "MSI Modern 15 C2RMG",
    category: "global",
    tier: "A+",
    sold_out: true,
    alternatif: 221,
    alternatif_alasan: "Harga hampir sama",
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
    id: 221,
    name: "HP Omnibook 3 Ai 14 (PILIHAN MIMIN)",
    sold_out: true,
    category: "global",
    tier: "S",
    price: 14724000,
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
    id: 5,
    name: "ThinkPad P52 (TEKNIK)",
    category: "bekas",
    tier: "S",
    sold_out: true,
    price: 5390000,
    specs: [
      "Intel Core i7-8750H",
      "Nvidia Quadro P1000 4GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7680825353316633874",
    shopUrl:  "https://s.shopee.co.id/1gIGK5QyL9",
    image:    "./LAPTOP 5 JUTA/ThinkPad P52.webp"
  },

  // Tier B+: Laptop baru termurah yang masih layak buat kerja ringan. Intel N100 4 core jauh di atas Celeron N4020 punya Axioo Hype 1 (3,91jt, C) dan 186 ribu lebih murah. Tapi SSD cuma 128GB dan RAM onboard
  {
    id: 2026111101,
    name: "Advan T-Book",
    category: "odm",
    tier: "B+",
    price: 3719070,
    specs: [
      "Intel N100",
      "Intel UHD Graphics",
      "RAM 8GB",
      "SSD 128GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/BVHBvcACt",
    image:    "./LAPTOP 3 JUTA/Advan T-Book 3 Juta.webp"
  },
];
const PRODUCTS = [


  // Tier S: Prosesor sama kayak ThinkPad T14 Gen 2 Ryzen 5 (5,80jt, S) tapi 460 ribu lebih murah, RAM 2 slot SODIMM jadi gampang diupgrade. Bodinya 130 gram lebih berat dari T14 Gen 2
  {
    id: 2026111001,
    name: "ThinkPad L14 Gen 2 Ryzen 5 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 5856000,
    specs: [
      "AMD Ryzen 5 Pro 5650U",
      "Radeon Vega 7",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/1qdTPZ18IV",
    toko:     "Gugel Laptop",
    linkLain: [
      { url: "https://s.shopee.co.id/6VPd6PpajX", harga: 5684000, toko: "ALMA Computer" }
    ],
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
    toko: "WDComputer.id",
    linkLain: [
      { url: "https://s.shopee.co.id/2LZTc9A5JS", harga: 4944000, toko: "LockStore" },
      { url: "https://s.shopee.co.id/4B1iK92bk4", harga: 4464000, toko: "MBM Tech Store" }
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
    toko:     "MBM Tech Store",
    linkLain: [
      { url: "https://s.shopee.co.id/2La48hEyWM", harga: 5580000, toko: "Laptopin.id" },
      { url: "https://s.shopee.co.id/1qdnXmGsXD", harga: 5850000, toko: "Gugel Laptop" }
    ],
    image:    "./LAPTOP 5 JUTA/thinkpad t.webp"
  },

        {
    id: 11,
    name: "HP Elitebook 845 G8 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 5952000,
    specs: [
      "AMD Ryzen 5 Pro 5650U",
      "Radeon Vega 7",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
    shopUrl:  "https://s.shopee.co.id/9KjE5sCWPJ",
    toko:     "Gugel Laptop",
    linkLain: [
      { url: "https://s.shopee.co.id/60TMVUrUkO", harga: 6066200, toko: "GudangLaptopBTM" }
    ],
    image:    "./LAPTOP 5 JUTA/HP Elitebook 845 G8.webp"
  },

    {
    id: 19,
    name: "ThinkPad T14 Gen 2 MX450",
    category: "bekas",
    tier: "S",
    sold_out: false,
    price: 6045000,
    specs: [
      "Intel Core i5-1135G7",
      "Nvidia MX450",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7648254926623182098?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/9zyjv8qdQP",
    toko:     "Electro Com",
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


    // Tier S: Prosesor dan iGPU Radeon 680M sama kayak ThinkPad T14s Gen 3 Ryzen 7 (9,5jt, S), tapi 1,67jt lebih murah dengan bodi 13 inci yang lebih ringkas
  {
    id: 2026111401,
    name: "ThinkPad X13 Gen 3 Ryzen 7",
    category: "bekas",
    tier: "S",
    price: 8054400,
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

  // Tier A+: Prosesor i5-1345U generasi 13 di bodi Latitude seri 7000 13 inci. Tapi Dell Latitude 7330 i7 (7,0jt, S) harganya hampir sama dengan RAM 32GB dan prosesor i7
  {
    id: 2026111402,
    name: "Dell Latitude 7340",
    category: "bekas",
    tier: "A+",
    price: 6950000,
    specs: [
      "Intel Core i5-1345U",
      "Intel Iris Xe",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3g5Eawdbpn",
    toko: "Letopgars",
    image:    "./LAPTOP 6 JUTA/Dell Latitude 7340 6 Juta.webp"
  },

  // Tier S: Seri 2 in 1 paling atas punya Dell dengan layar sentuh 14 inci, 3,3jt lebih murah dari HP Elitebook x360 830 G10. Prosesornya 2 generasi lebih lama
  {
    id: 2026111403,
    name: "Dell Latitude 9420 2 in 1",
    category: "bekas",
    tier: "S",
    sold_out: true,
    price: 5510000,
    specs: [
      "Intel Core i5-1145G7",
      "Intel Iris Xe 80EU",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/ql3DzVYfX",
    toko: "Jaya Computer",
    image:    "./LAPTOP 5 JUTA/Dell Latitude 9420 2 in 1 5 Juta.webp"
  },

  // Tier A+: iGPU Iris Xe cuma unggul tipis, tapi CPU 4 core kalah jauh dari X13 Gen 1 (4,59jt) yang 350 ribu lebih murah
  {
    id: 2026111404,
    name: "Dell Latitude 7420",
    category: "bekas",
    tier: "A+",
    price: 4992000,
    specs: [
      "Intel Core i5-1145G7",
      "Intel Iris Xe 80EU",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/6VPPyFN6FA",
    toko: "Jaya Computer",
    linkLain: [
      { url: "https://s.shopee.co.id/40iI836eX3", harga: 5165000, toko: "Glory Computer" }
    ],
    image:    "./LAPTOP 4 JUTA/Dell Latitude 7420 4 Juta.webp"
  },

  // Tier S: CPU dan GPU sama kayak ThinkPad P51 (6,94jt), tapi 2 juta lebih murah dan bodinya jauh lebih tipis
  {
    id: 2026111405,
    name: "HP ZBook Studio G4 (TEKNIK)",
    category: "bekas",
    tier: "S",
    price: 5078400,
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
    price: 4416000,
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


  // =====================================================================
// WORKSTATION DAN LAPTOP BISNIS DENGAN dGPU (riset 20 Nov 2026, harga HP)
// Tipe prosesor yang gak ditulis penjual diisi tipe yang paling umum di model itu
// =====================================================================

  // Tier A: Prosesor sekelas ThinkPad T480s (4,12jt, A+) yang 200 ribu lebih murah, dan ThinkPad T495 (4,40jt, S) cuma 90 ribu lebih mahal dengan Ryzen 5 3500U dan iGPU Vega 8 yang jauh lebih kenceng. Tipe prosesor diasumsikan i5-8265U (listing cuma nulis i5 Gen 8). Laptop laris nomor 5 di laporan pesanan Okt-Nov
  {
    id: 2026112301,
    name: "ThinkPad T490",
    category: "bekas",
    tier: "A",
    price: 4314600,
    specs: [
      "Intel Core i5-8265U",
      "Intel UHD 620",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/1gKOvJndiv",
    toko:     "GudangLaptopBTM JKT",
    linkLain: [
      { url: "https://s.shopee.co.id/5LDhI6lSiL", harga: 4465000, toko: "LockStore" }
    ],
    image:    "./LAPTOP 4 JUTA/ThinkPad T490 4 Juta.webp"
  },
  // Tier B+: Varian 8GB/128GB di screenshot 22 Nov ganti ke 16GB/256GB (4,74jt). MX250 kelas paling bawah, dan ThinkPad T495 (4,40jt, S) lebih murah
  {
    id: 2026112001,
    name: "ThinkPad T490 MX250",
    category: "bekas",
    tier: "B+",
    price: 4743000,
    specs: [
      "Intel Core i5-8265U",
      "Nvidia MX250 2GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/7VI7F0MXkt",
    toko: "Electro Com",
    image:    "./LAPTOP 4 JUTA/ThinkPad T490 MX250 4 Juta.webp"
  },

  // Tier A+: Workstation dGPU 4GB termurah, 140 ribu lebih murah dari ZBook Studio G4 (4,94jt, S). Tapi prosesor gen 6 dan bodi tebal
  {
    id: 2026112002,
    name: "ThinkPad P50 M2000M (TEKNIK)",
    category: "bekas",
    tier: "A+",
    price: 4798800,
    specs: [
      "Intel Xeon E3-1535M v5",
      "Nvidia Quadro M2000M 4GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/80ENq1mwgh",
    toko: "Ari Speed Comp",
    image:    "./LAPTOP 4 JUTA/ThinkPad P50 M2000M 4 Juta.webp"
  },

  // Tier A: Bodi T14 dengan MX330 buat game ringan, tapi prosesor dan dGPU-nya kalah dari T14 Gen 1 Ryzen 5 (4,65jt, S) yang 860 ribu lebih murah
  {
    id: 2026112003,
    name: "ThinkPad T14 Gen 1 MX330",
    category: "bekas",
    tier: "A",
    price: 5568000,
    specs: [
      "Intel Core i5-10210U",
      "Nvidia MX330 2GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/6fj0FjWB1e",
    toko: "Gugel Laptop",
    linkLain: [
      { url: "https://s.shopee.co.id/4VeYiy4kWA", harga: 5673000, toko: "Electro Com" }
    ],
    image:    "./LAPTOP 5 JUTA/ThinkPad T14 Gen 1 MX330 5 Juta.webp"
  },

  // Tier A+: GPU M2200 lebih kuat dari M1200 punya ThinkPad P51 lama (6,94jt, B+), tapi hampir 1 juta lebih murah
  {
    id: 2026112004,
    name: "ThinkPad P51 M2200 (TEKNIK)",
    category: "bekas",
    tier: "A+",
    price: 6038400,
    specs: [
      "Intel Core i7-7700HQ",
      "Nvidia Quadro M2200 4GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/2qWHgis0Ob",
    toko: "GudangLaptopBTM",
    image:    "./LAPTOP 5 JUTA/ThinkPad P51 M2200 5 Juta.webp"
  },

  // Tier A: Workstation tipis layar sentuh, tapi Quadro P520 2GB lemah dan prosesornya seri U. ThinkPad P51 M2200 (5,98jt) GPU-nya lebih kuat di harga hampir sama
  {
    id: 2026112005,
    name: "ThinkPad P53s (TEKNIK)",
    category: "bekas",
    tier: "A",
    price: 5998500,
    specs: [
      "Intel Core i7-8665U",
      "Nvidia Quadro P520 2GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/AUviorT2Q9",
    toko: "Ari Speed Comp",
    image:    "./LAPTOP 5 JUTA/ThinkPad P53s 5 Juta.webp"
  },

  // Tier B+: Varian P15s Gen 1 habis (22 Nov), diganti P14s Gen 1 dari listing yang sama. GPU-nya sama kayak ThinkPad P53s (6,00jt) tapi 700 ribu lebih mahal
  {
    id: 2026112006,
    name: "ThinkPad P14s Gen 1 (TEKNIK)",
    category: "bekas",
    tier: "B+",
    price: 6700000,
    specs: [
      "Intel Core i7-10510U",
      "Nvidia Quadro P520 2GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/6AmjewmW4i",
    toko: "Electro Com",
    image:    "./LAPTOP 6 JUTA/ThinkPad P14s Gen 1 6 Juta.webp"
  },

  // Tier A+: Quadro P1000 4GB (setara GTX 1050) dan prosesor 6 core, SSD 512GB. Masih di bawah ThinkPad P52 P3200 (8,27jt) yang GPU-nya 2 kelas di atas
  {
    id: 2026112007,
    name: "ThinkPad P52 P1000 (TEKNIK)",
    category: "bekas",
    tier: "A+",
    price: 7862400,
    specs: [
      "Intel Core i7-8850H",
      "Nvidia Quadro P1000 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/30phtA2IiW",
    toko: "GudangLaptopBTM",
    image:    "./LAPTOP 7 JUTA/ThinkPad P52 P1000 7 Juta.webp"
  },

  // Tier A: Workstation 14 inci tipis dan ringan, tapi Nvidia T500 lemah. Di harga ini ThinkPad P52 P1000 (7,78jt) GPU-nya lebih kuat
  {
    id: 2026112008,
    name: "HP ZBook Firefly 14 G8 (TEKNIK)",
    category: "bekas",
    tier: "A",
    price: 7958400,
    specs: [
      "Intel Core i7-1165G7",
      "Nvidia T500 4GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/7VI7FTJUUo",
    toko: "Laptop WA Surabaya",
    image:    "./LAPTOP 7 JUTA/HP ZBook Firefly 14 G8 7 Juta.webp"
  },

  // Tier S: Quadro P2000 di bodi tipis sekitar 1,8 kg, SSD 512GB. Lebih ringkas dari P52 dengan GPU satu kelas di atas P1000
  {
    id: 2026112009,
    name: "ThinkPad P1 Gen 1 (TEKNIK)",
    category: "bekas",
    tier: "S",
    price: 8160000,
    specs: [
      "Intel Core i7-8850H",
      "Nvidia Quadro P2000 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/W8Mufe3Te",
    toko: "Gugel Laptop",
    image:    "./LAPTOP 8 JUTA/ThinkPad P1 Gen 1 8 Juta.webp"
  },

  // Tier A+: Quadro T1000 (setara GTX 1650) dan prosesor gen 9, tapi ThinkPad P52 P3200 (8,27jt) GPU-nya lebih kuat dengan harga hampir sama
  {
    id: 2026112010,
    name: "ThinkPad P53 T1000 (TEKNIK)",
    category: "bekas",
    tier: "A+",
    price: 8342400,
    specs: [
      "Intel Core i7-9750H",
      "Nvidia Quadro T1000 4GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/2BGatlwGla",
    toko: "GudangLaptopBTM",
    image:    "./LAPTOP 8 JUTA/ThinkPad P53 T1000 8 Juta.webp"
  },

  // Tier S: Quadro P3200 6GB (mendekati GTX 1060) di 8 jutaan, GPU terkuat per rupiah di riset workstation. Laptop gaming bekas di harga ini rata-rata GTX 1650
  {
    id: 2026112011,
    name: "ThinkPad P52 P3200 (TEKNIK)",
    category: "bekas",
    tier: "S",
    price: 8352000,
    specs: [
      "Intel Core i7-8850H",
      "Nvidia Quadro P3200 6GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/AKcIcqytnd",
    toko: "Gugel Laptop",
    image:    "./LAPTOP 8 JUTA/ThinkPad P52 P3200 8 Juta.webp"
  },

  // Tier A: SSD 1TB, tapi GPU-nya sama kayak ThinkPad P52 P1000 (7,78jt) yang 570 ribu lebih murah
  {
    id: 2026112012,
    name: "HP ZBook 15 G5 (TEKNIK)",
    category: "bekas",
    tier: "A",
    price: 8438400,
    specs: [
      "Intel Core i7-8750H",
      "Nvidia Quadro P1000 4GB",
      "RAM 16GB",
      "SSD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/1BO3i2pLKI",
    toko: "GudangLaptopBTM",
    image:    "./LAPTOP 8 JUTA/HP ZBook 15 G5 8 Juta.webp"
  },

  // Tier B+: Kemahalan: Nvidia T500 2GB lemah, dan ThinkPad P53 T1000 (8,26jt) GPU-nya jauh lebih kuat tapi 500 ribu lebih murah
  {
    id: 2026112013,
    name: "Dell Precision 3560 (TEKNIK)",
    category: "bekas",
    tier: "B+",
    price: 8755001,
    specs: [
      "Intel Core i7-1165G7",
      "Nvidia T500 2GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/2BGatw5QgD",
    toko: "WDComputer.id",
    image:    "./LAPTOP 8 JUTA/Dell Precision 3560 8 Juta.webp"
  },

  // Tier A: Prosesor paling baru (gen 12) di riset workstation, tapi Nvidia T550 masih kelas bawah. Buat GPU, ThinkPad P52 P3200 (8,27jt) jauh lebih kuat
  {
    id: 2026112014,
    name: "Dell Precision 3470 (TEKNIK)",
    category: "bekas",
    tier: "A",
    price: 9072000,
    specs: [
      "Intel Core i7-1255U",
      "Nvidia T550 4GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/5AuCTUtl93",
    toko: "RevoComp",
    image:    "./LAPTOP 8 JUTA/Dell Precision 3470 8 Juta.webp"
  },

  // Tier S: Quadro T2000 di bodi tipis Precision seri 5000, harganya sama kayak ThinkPad P1 Gen 2 (9,03jt, S) dan 285 ribu lebih murah dari P53 T2000
  {
    id: 2026112015,
    name: "Dell Precision 5540 (TEKNIK)",
    category: "bekas",
    tier: "S",
    price: 9120000,
    specs: [
      "Intel Core i7-9850H",
      "Nvidia Quadro T2000 4GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/6fj0GJvVVf",
    toko: "LockStore",
    image:    "./LAPTOP 9 JUTA/Dell Precision 5540 9 Juta.webp"
  },

  // Tier A+: Quadro T2000 dan SSD 512GB, tapi Dell Precision 5540 (9,03jt) GPU-nya sama, bodinya lebih tipis, dan 285 ribu lebih murah
  {
    id: 2026112016,
    name: "ThinkPad P53 T2000 (TEKNIK)",
    category: "bekas",
    tier: "A+",
    price: 9408000,
    specs: [
      "Intel Core i7-9750H",
      "Nvidia Quadro T2000 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/7puxeW6LwY",
    toko: "Gugel Laptop",
    image:    "./LAPTOP 9 JUTA/ThinkPad P53 T2000 9 Juta.webp"
  },

  // Tier A+: Prosesor 8 core gen 11 paling kuat di riset workstation, Quadro T1200 (setara GTX 1650 Ti). Tapi udah di atas 10 juta
  {
    id: 2026112017,
    name: "ThinkPad P15 Gen 2 (TEKNIK)",
    category: "bekas",
    tier: "A+",
    price: 10440500,
    specs: [
      "Intel Core i7-11800H",
      "Nvidia Quadro T1200 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/1qdkVXANql",
    toko: "GudangLaptopBTM",
    image:    "./LAPTOP 10 JUTA/ThinkPad P15 Gen 2 10 Juta.webp"
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
    toko:     "Ari Speed Comp",
    image:    "./LAPTOP 1 JUTA/Fujitsu Futro MU937 1 Juta.webp"
  },

  // Tier B+: i5-4300U 2 core 4 thread jauh lebih kenceng dari Celeron di Futro MU937, bodi 12,5 inci ringan. Kekurangannya layar HD dan RAM cuma 1 slot SODIMM (maks 8GB)
  {
    id: 2026111601,
    name: "ThinkPad X240",
    category: "bekas",
    tier: "B+",
    price: 1964625,
    specs: [
      "Intel Core i5-4300U",
      "Intel HD Graphics 4400",
      "RAM 8GB",
      "SSD 128GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/1BzipfWM4",
    toko: "Ari Speed Comp",
    image:    "./LAPTOP 1 JUTA/thinkpad x240 1 juta.webp"
  },

  // Tier B: Prosesor setara X240 dan RAM 2 slot SODIMM, tapi platform 2012, bodi 14 inci sekitar 2 kg lebih berat. Tipe prosesor (i5-3320M) belum dikonfirmasi penjual
  {
    id: 2026111602,
    name: "Dell Latitude E6430",
    category: "bekas",
    tier: "B",
    price: 2046000,
    specs: [
      "Intel Core i5-3320M",
      "Intel HD Graphics 4000",
      "RAM 8GB",
      "SSD 128GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3LSRh2qWRU",
    toko: "Electro Com",
    image:    "./LAPTOP 1 JUTA/Dell Latitude E6430 1 juta.webp"
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

  // Tier B+: Bodi ThinkPad X 12,5 inci yang ringkas, tapi Dell Latitude 5290 (2,5jt, S) cuma 204 ribu lebih mahal dengan prosesor Gen 8 empat core yang jauh lebih kenceng dari i5-6200U dua core ini
  {
    id: 2026112302,
    name: "ThinkPad X270",
    category: "bekas",
    tier: "B+",
    price: 2295000,
    specs: [
      "Intel Core i5-6200U",
      "Intel HD Graphics 520",
      "RAM 8GB",
      "SSD 128GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/1CBMteN6s",
    toko:     "LockStore",
    image:    "./LAPTOP 2 JUTA/ThinkPad X270 2 Juta.webp"
  },
  // Tier S: Prosesor Gen 8 empat core (i5-8350U) di 2,5jt, paling kencang di 2 jutaan. Lebih murah dari HP ProBook 640 G2 (2,79jt) yang masih Gen 6 dua core. Kekurangan: SSD 128GB dan layar 12,5 inci
  {
    id: 2026112303,
    name: "Dell Latitude 5290",
    category: "bekas",
    tier: "S",
    price: 2499375,
    specs: [
      "Intel Core i5-8350U",
      "Intel UHD Graphics 620",
      "RAM 8GB",
      "SSD 128GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/1gKPLluTO2",
    toko:     "Ari Speed Comp",
    image:    "./LAPTOP 2 JUTA/Dell Latitude 5290 2 Juta.webp"
  },
  // Tier S: Prosesor Gen 8 empat core (i5-8265U) dengan layar 14 inci di 2,58jt. Cuma 80 ribu lebih mahal dari Dell Latitude 5290 (2,5jt, S) yang layarnya 12,5 inci, dan 210 ribu lebih murah dari HP ProBook 640 G2 yang masih Gen 6
  {
    id: 2026112304,
    name: "Dell Latitude 3400",
    category: "bekas",
    tier: "S",
    price: 2579355,
    specs: [
      "Intel Core i5-8265U",
      "Intel UHD Graphics 620",
      "RAM 8GB",
      "SSD 128GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/1qdpY4tq35",
    toko:     "Ari Speed Comp",
    image:    "./LAPTOP 2 JUTA/Dell Latitude 3400 2 Juta.webp"
  },
  // Tier B+: SSD 256GB, tapi prosesornya masih Gen 6 dua core. Dell Latitude 3400 (2,58jt, S) dan Latitude 5290 (2,5jt, S) lebih murah dengan prosesor Gen 8 empat core
  {
    id: 2026102403,
    name: "HP ProBook 640 G2",
    category: "bekas",
    tier: "B+",
    price: 2790000,
    specs: [
      "Intel Core i5-6300U",
      "Intel HD Graphics 520",
      "RAM 8GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/3B8QqFGqeN",
    toko:     "Electro Com",
    image:    "./LAPTOP 2 JUTA/HP Elitebook 640 G2 2 Juta.webp"
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
    toko:     "MBM Tech Store",
    linkLain: [
      { url: "https://s.shopee.co.id/4LL8Wf5Nr9", harga: 6664000, toko: "Jaya Computer" }
    ],
    image:    "./LAPTOP 6 JUTA/Dell Latitude 7430 6 Juta.webp"
  },

  // Tier A+: SSD naik ke 512GB karena varian 256GB habis, tapi harganya jadi 5,52jt. Di harga segini ThinkPad L14 Gen 1 Ryzen 7 (5,17jt, S) prosesornya lebih kenceng dan lebih murah
  {
    id: 2026102303,
    name: "ThinkPad X13 Gen 2",
    category: "bekas",
    tier: "A+",
    sold_out: true,
    alternatif: 10123232,
    alternatif_alasan: "Prosesor 6 core, lebih murah 990rb",
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
    toko:     "MBM Tech Store",
    linkLain: [
      { url: "https://s.shopee.co.id/6L6CuKxlnT", harga: 4460000, toko: "Letopgars" }
    ],
    image:    "./LAPTOP 3 JUTA/Dell Latitude 7410 3 Juta.webp"
  },

  // Tier S: Prosesor sama persis kayak ThinkPad T14 Gen 1 Ryzen 7 (6,14jt, Tier S) tapi 919 ribu lebih murah
  {
    id: 2026102307,
    name: "ThinkPad L14 Gen 1 Ryzen 7",
    category: "bekas",
    tier: "S",
    sold_out: true,
    alternatif: 2026111001,
    alternatif_alasan: "Ryzen 5 generasi lebih baru, +630rb",
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
    price: 3999000,
    specs: [
      "Intel Core i7-4770HQ",
      "Intel Iris Pro 5200",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/qkV0A1P17",
    toko:     "Electro Com",
    image:    "./LAPTOP 3 JUTA/Macbook Pro Retina 15 (2015) 3 Juta.webp"
  },

  // Tier A: Nanggung: nambah 94 ribu udah dapet Latitude 5400 (3,58jt, Tier S) yang prosesornya gen 8 quad core
  {
    id: 2026102310,
    name: "ThinkPad T470",
    category: "bekas",
    tier: "A",
    sold_out: true,
    alternatif: 210,
    alternatif_alasan: "Prosesor sama-sama gen 7, RAM 16GB, +190rb",
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
    name: "Dell Latitude 5490 i7",
    category: "bekas",
    tier: "A+",
    price: 4502400,
    specs: [
      "Intel Core i7-8650U",
      "Intel UHD Graphics 620",
      "RAM 16GB",
      "SSD 1TB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/4qGdlCpelc",
    toko:     "GudangLaptopBTM JKT",
    image:    "./LAPTOP 3 JUTA/Dell Latitude 5490 i7 3 Juta.webp"
  },

  // Tier S: Prosesor i5-1245U 10 core, bodi 13 inci ringkas, dan SSD udah 512GB di 5,7jt. Lebih murah dari Latitude 7430 (6,14jt) yang prosesornya sama tapi SSD-nya 256GB
  {
    id: 2026102312,
    name: "Dell Latitude 5330 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 5846400,
    specs: [
      "Intel Core i5-1245U",
      "Intel Iris Xe 80EU",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/gR4nVEhlN",
    toko:     "GudangLaptopBTM",
    image:    "./LAPTOP 5 JUTA/Dell Latitude 5330 5 Juta.webp"
  },

  // Tier A+: Upgrade dari ZBook 15U G5 (5,61jt, A+): SSD 512GB cuma nambah 83 ribu. Tetap A+ karena ThinkPad P52 (5,39jt, S) GPU dan CPU-nya lebih kencang
  {
    id: 2026102313,
    name: "HP Zbook 15U G6 (TEKNIK)",
    category: "bekas",
    tier: "A+",
    price: 5942400,
    specs: [
      "Intel Core i7-8665U",
      "Radeon Pro WX3200 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/906CimcZPM",
    toko:     "GudangLaptopBTM",
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
    toko: "Laptopin.id",
    linkLain: [
      { url: "https://s.shopee.co.id/9fLtVye0DH", harga: 7766400, toko: "GudangLaptopBTM" }
    ],
    image:    "./LAPTOP 7 JUTA/ThinkPad T14 Gen 3 (INTEL) 7 Juta.webp"
  },

  // Tier S: i7 gen 12 + bodi premium seri 7, 400 ribu lebih murah dari Latitude 5430 i7 (6,59jt, S) walau RAM-nya 16GB bukan 32GB
  {
    id: 2026102315,
    name: "Dell Latitude 7330 i7 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 6998400,
    specs: [
      "Intel Core i7-1265U",
      "Intel Iris Xe 96EU",
      "RAM 32GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/AAIA6hyXrW",
    toko:     "GudangLaptopBTM",
    image:    "./LAPTOP 6 JUTA/Dell Latitude 7330 i7 6 Juta.webp"
  },

    {
    id: 2026110401,
    name: "Dell Latitude 7330 i7 SSD 512GB (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 7495500,
    specs: [
      "Intel Core i7-1265U",
      "Intel Iris Xe 96EU",
      "RAM 32GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/AAIA6hyXrW",
    toko:     "GudangLaptopBTM",
    image:    "./LAPTOP 6 JUTA/Dell Latitude 7330 i7 6 Juta.webp"
  },

  // Tier B+: Kemahalan: ThinkPad P52 (5,39jt, S) prosesor dan GPU-nya lebih baru dan kencang tapi 1,4 juta lebih murah. Dulu P51 4,73jt aja dapet B+
  {
    id: 2026102316,
    name: "ThinkPad P51 (TEKNIK)",
    category: "bekas",
    tier: "B+",
    sold_out: true,
    alternatif: 2026112004,
    alternatif_alasan: "GPU lebih kuat (Quadro M2200), lebih murah 960rb",
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
  price: 4896000,
  specs: [
    "Intel Core i7-6700HQ",
    "GTX 950M 2GB",
    "RAM 8GB",
    "HDD 1TB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/",
  shopUrl: "https://s.shopee.co.id/Lnu8Y9okb",
  toko:     "DM Komputer",
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

    // Tier A+: Termurah 5,39jt di Gugel Laptop (16/256). MBM Tech Store varian 16/512 di 6,05jt. Prosesornya sama kayak ThinkPad T14 Gen 1 Ryzen 5 (4,85jt di Gugel Laptop, S) yang 540 ribu lebih murah
    {
    id: 233213333,
    name: "HP Elitebook 845 G7 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "A+",
    price: 6045000,
    specs: [
      "AMD Ryzen 5 Pro 4650U",
      "Radeon Vega 6",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
    shopUrl:  "https://s.shopee.co.id/5Atf8mENp0",
    toko:     "MBM Tech Store",
    varianUtama: "SSD 512GB",
    linkLain: [
      { url: "https://s.shopee.co.id/6AmmhnqrPR", harga: 5390000, toko: "Gugel Laptop" },
      { url: "https://s.shopee.co.id/6L6Cu6qE4U", harga: 5576200, toko: "GudangLaptopBTM" }
    ],
    image:    "./LAPTOP 5 JUTA/HP Elitebook 845 G8.webp"
  },


  {
    id: 9232231,
    name: "Advan Soulmate X2",
    category: "odm",
    tier: "B",
    price: 4370070,
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
    toko:     "MBM Tech Store",
    linkLain: [
      { url: "https://s.shopee.co.id/1qdnXmGsXD", harga: 4850000, toko: "Gugel Laptop" },
      { url: "https://s.shopee.co.id/1gKNLTHVsA", harga: 5300000, toko: "M6 Store" }
    ],
    image:    "./LAPTOP 4 JUTA/ThinkPad T14 G1.webp"
  },

    {
    id: 6,
    name: "Axioo Hype 5 AMD X5-2 (PILIHAN MIMIN)",
    category: "odm",
    tier: "A+",
    price: 6997440,
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
    price: 7104000,
    specs: [
      "AMD Ryzen 7 Pro 5850U",
      "Radeon Vega 8",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7688678696181419282",
    shopUrl:  "https://s.shopee.co.id/3VhpKL328P",
    toko:     "Gugel Laptop",
    varianUtama: "T14",
    linkLain: [
      { url: "https://s.shopee.co.id/70LgZX1wAD", harga: 6624000, varian: "T14s (RAM Gak Bisa Ditambah)", toko: "Redstar Electronic", bawah: true },
      { url: "https://s.shopee.co.id/2BGdwOFbrJ", harga: 6900000, varian: "T14", toko: "M6 Store" }
    ],
    image:    "./LAPTOP 6 JUTA/ThinkPad T14 G2 AMD.webp"
  },

    {
    id: 2026110402,
    name: "ThinkPad T14 Gen 2 Ryzen 7 SSD 512GB (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 7776000,
    specs: [
      "AMD Ryzen 7 Pro 5850U",
      "Radeon Vega 8",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7688678696181419282",
    shopUrl:  "https://s.shopee.co.id/3VhpKL328P",
    toko:     "Gugel Laptop",
    linkLain: [
      { url: "https://s.shopee.co.id/2BGdwOFbrJ", harga: 7600000, toko: "M6 Store" }
    ],
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
    tier: "B+",
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


  {
    id: 110,
    name: "HP 14 (PILIHAN MIMIN)",
    sold_out: true,
    alternatif: 2026110421,
    alternatif_alasan: "Prosesor dan iGPU sama (Ultra 5 125H), RAM/SSD sama, lebih murah 670rb",
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
  toko:     "Reog Komputer",
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

  // Tier A: Varian yang ada di harga 9,41jt sekarang SSD 256GB. Prosesor generasi lebih baru, tapi ThinkPad T14 Gen 3 Ryzen 5 (7,92jt, S) 1,49jt lebih murah dengan RAM/SSD sama, dan T14s Gen 3 Ryzen 7 (9,6jt, S) cuma 192 ribu lebih mahal dengan iGPU Radeon 680M yang jauh lebih kenceng
  {
    id: 2026110301,
    name: "ThinkPad T14 Gen 4 Ryzen 5",
    category: "bekas",
    tier: "A",
    price: 9408000,
    specs: [
      "AMD Ryzen 5 Pro 7540U",
      "Radeon 740M",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/40ho2wEzXV",
    toko:     "Gugel Laptop",
    image:    "./LAPTOP 9 JUTA/ThinkPad T14 Gen 4 Ryzen 5 9 Juta.webp"
  },


    {
    id: 3878074,
    name: "Axioo Hype 7 AMD X8-1 (PILIHAN MIMIN)",
    category: "odm",
    tier: "S",
    price: 10288000,
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
    price: 9600000,
    specs: [
      "Ryzen 7 Pro 6850U",
      "Radeon 680M",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
    shopUrl:  "https://s.shopee.co.id/5q8XsW3reZ",
    toko:     "Gugel Laptop",
    image:    "./LAPTOP 8 JUTA/ThinkPad T14 G3 AMD.webp"
  },
  // Tier S: iGPU Radeon 660M dan prosesor 6 core generasi Zen 3+. Varian SSD 256GB di LOCKSTORE 1,2jt lebih murah dari varian 512GB
  {
  id: 13249,
  name: "ThinkPad T14 Gen 3 Ryzen 5 (PILIHAN MIMIN)",
  category: "bekas",
  tier: "S",
  price: 7920000,
  specs: [
    "AMD Ryzen 5 Pro 6650U",
    "Radeon 660M",
    "RAM 16GB",
    "SSD 256GB"
  ],
  videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
  shopUrl:  "https://s.shopee.co.id/5VWsmgWCuf",
  toko: "LockStore",
  linkLain: [
    { url: "https://s.shopee.co.id/BUB7rYvvq", harga: 9120000, varian: "SSD 512GB", toko: "Gugel Laptop" }
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

  // Tier A+: Prosesor 8 core dan Radeon 680M, layar 16:10. Tapi Axioo Hype 7 AMD X8-1 (10,29jt, S) performanya hampir sama dan 500 ribu lebih murah
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
    toko:     "Gugel Laptop",
    image:    "./LAPTOP 10 JUTA/ThinkPad X1 Carbon Gen 10 10 Juta.webp"
  },

  // Tier A+: Prosesor H 14 core dan GPU workstation T1200, cocok buat CAD dan render. Tapi tambah 660 ribu udah dapet ZBook Fury G8 yang GPU-nya jauh lebih kenceng
  {
    id: 2026110416,
    name: "ThinkPad P15v Gen 3 (TEKNIK)",
    category: "bekas",
    tier: "A+",
    price: 10646400,
    specs: [
      "Intel Core i7-12700H",
      "Nvidia T1200 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/",
    shopUrl:  "https://s.shopee.co.id/9zz2K0bh8G",
    toko:     "GudangLaptopBTM",
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
    toko:     "GudangLaptopBTM",
    image:    "./LAPTOP 11 JUTA/HP Zbook Fury G8 11 Juta.webp"
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
    id: 212322,
    name: "Asus Expertbook PM1403CDA",
    category: "global",
    tier: "S",
    sold_out: true,
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
    id: 21235235324234,
    name: "Axioo Pongo 725 ",
    category: "bekas",
    tier: "S",
    sold_out: true,
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
    id: 210,
    name: "Dell Latitude 7290",
    category: "bekas",
    tier: "A",
    price: 3744000,
    specs: [
      "Intel Core i5-7300U",
      "Intel HD Graphics 620",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7653819332434070802",
    shopUrl:  "https://s.shopee.co.id/4LH6HHflF4",
    toko:     "M6 Store",
    linkLain: [
      { url: "https://s.shopee.co.id/40iI7q3F53", harga: 3590000, toko: "GudangLaptopBTM JKT" }
    ],
    image:    "./LAPTOP 2 JUTA/Dell.webp"
  },
  {
    id: 224,
    name: "Dell Latitude 5400",
    category: "bekas",
    tier: "S",
    price: 4176000,
    specs: [
      "Intel Core i5-8265U",
      "Intel UHD Graphics 620",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7690951547634699528",
    shopUrl:  "https://s.shopee.co.id/9fIsAZatzM",
    toko:     "Lion Mitech",
    linkLain: [
      { url: "https://s.shopee.co.id/60TMVVvd1U", harga: 4185000, toko: "Laptopin.id" }
    ],
    image:    "./LAPTOP 3 JUTA/dell 5400.webp"
  },
  {
    id: 226,
    name: "ThinkPad X390",
    category: "bekas",
    tier: "A+",
    price: 4128000,
    specs: [
      "Intel Core i5-8265U",
      "Intel UHD Graphics 620",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7656357978982894866",
    shopUrl:  "https://s.shopee.co.id/4AxvbMQSix",
    toko:     "Lion Mitech",
    linkLain: [
      { url: "https://s.shopee.co.id/4LL8WS1yP9", harga: 3900000, toko: "M6 Store" }
    ],
    image:    "./LAPTOP 3 JUTA/thinkpad x.webp"
  },
  {
    id: 1,
    name: "Lenovo ThinkPad T480s",
    category: "bekas",
    tier: "A+",
    price: 4118400,
    specs: [
      "Intel Core i5-8250U",
      "Intel UHD Graphics 620",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7646777812036160786?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/2Vsiz7WsQC",
    toko:     "GudangLaptopBTM JKT",
    linkLain: [
      { url: "https://s.shopee.co.id/4VeYil1L4A", harga: 4500000, toko: "M6 Store" }
    ],
    image:    "./LAPTOP 3 JUTA/ThinkPad T480s.webp"
  },
  {
    id: 224454,
    name: "ThinkPad T495",
    category: "bekas",
    tier: "S",
    price: 4403520,
    specs: [
      "AMD Ryzen 5 3500U",
      "Radeon Vega 8",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7673058681805720852",
    shopUrl:  "https://s.shopee.co.id/80C5tj9wDD",
    toko:     "Planet Laptop PSI",
    linkLain: [
      { url: "https://s.shopee.co.id/4B1iKM61C4", harga: 4600000, toko: "M6 Store" }
    ],
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
    id: 13,
    name: "ThinkPad T14 Gen 2 (INTEL)",
    category: "bekas",
    tier: "A+",
    price: 5856000,
    specs: [
      "Intel Core i5-1135G7",
      "Intel Iris Xe",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7647900471994125576?is_from_webapp=1&sender_device=pc",
    shopUrl:  "https://s.shopee.co.id/60QFanNvAP",
    toko:     "Gugel Laptop",
    linkLain: [
      { url: "https://s.shopee.co.id/20xDk5GFCG", harga: 5487000, toko: "MBM Tech Store" },
      { url: "https://s.shopee.co.id/2BGdwOFbrJ", harga: 5800000, toko: "M6 Store" }
    ],
    image:    "./LAPTOP 5 JUTA/ThinkPad T14 G2.webp"
  },
  {
    id: 92,
    name: "Advan 2 in 1 Go Touchscreen",
    category: "odm",
    tier: "B",
    price: 5997570,
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
    price: 6144000,
    specs: [
      "AMD Ryzen 7 Pro 4750U",
      "Radeon Vega 7",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7689440374204501255",
    shopUrl:  "https://s.shopee.co.id/9ANHSEyLIM",
    toko:     "Gugel Laptop",
    linkLain: [
      { url: "https://s.shopee.co.id/1gKNLTHVsA", harga: 5900000, varian: "T14s (RAM Gak Bisa Ditambah)", toko: "M6 Store", bawah: true }
    ],
    image:    "./LAPTOP 5 JUTA/thinkpadr7.webp"
  },
  {
    id: 224245,
    name: "ThinkPad L14 Gen 2 (PILIHAN MIMIN)",
    category: "bekas",
    tier: "S",
    price: 6432000,
    specs: [
      "AMD Ryzen 7 5850U",
      "Radeon Vega 8",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7656357978982894866",
    shopUrl:  "https://s.shopee.co.id/6L3euSMF4y",
    toko:     "Gugel Laptop",
    image:    "./LAPTOP 5 JUTA/thinkpad l.webp"
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
    id: 234,
    name: "Axioo Hype 1 (WAJIB NONTON VIDEO)",
    category: "odm",
    tier: "C",
    price: 4184070,
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
    price: 5672070,
    specs: [
      "Intel Core i7-8565U",
      "Radeon Pro WX3200",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7667920615688523015",
    shopUrl:  "https://s.shopee.co.id/9ANSf5XKTG",
    toko:     "Electro Com",
    image:    "./LAPTOP 5 JUTA/zbook.webp"
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
    price: 8499000,
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
    tier: "A",
    price: 7704211,
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
    price: 8753785,
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
    price: 9609000,
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
    price: 7968000,
    specs: [
      "Intel Xeon E3-1535M",
      "Nvidia Quadro P4000 8GB",
      "RAM 16GB",
      "SSD 256GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7680825353316633874",
    shopUrl:  "https://s.shopee.co.id/2qUDjaXQBj",
    toko:     "Gugel Laptop",
    image:    "./LAPTOP 9 JUTA/ThinkPad P71.webp"
  },

  {
    id: 31,
    name: "Advan Workplus Ai",
    category: "odm",
    tier: "A+",
    price: 9118080,
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
    id: 120,
    name: "Acer Swift Go 14 AI",
    category: "global",
    tier: "S",
    sold_out: true,
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
    price: 9120000,
    specs: [
      "Intel Core i7-9850H",
      "Nvidia Quadro T2000 4GB",
      "RAM 16GB",
      "SSD 512GB"
    ],
    videoUrl: "https://www.tiktok.com/@pantautech.id/photo/7680825353316633874",
    shopUrl:  "https://s.shopee.co.id/8fS0gSl2Sn",
    toko:     "Gugel Laptop",
    image:    "./LAPTOP 10 JUTA/ThinkPad P1 G2.webp"
  },
  {
    id: 201,
    name: "HP Omnibook 3 Next Gen Ai 14",
    category: "global",
    tier: "S",
    sold_out: true,
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
    id: 216,
    name: "Asus Vivobook S14",
    category: "global",
    tier: "S",
    sold_out: true,
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
    id: 223,
    name: "Asus Zenbook 14 OLED",
    category: "global",
    tier: "S",
    sold_out: true,
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

  // Tier B+: Laptop baru termurah yang masih layak buat kerja ringan. Intel N100 4 core jauh di atas Celeron N4020 punya Axioo Hype 1 (4,18jt, C) dan 465 ribu lebih murah. Tapi SSD cuma 128GB dan RAM onboard
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
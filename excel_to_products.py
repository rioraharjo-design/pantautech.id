import openpyxl
import os
import sys

EXCEL_FILE = "products_data.xlsx"
OUTPUT_FILE = "products.js"

def val(cell):
    return str(cell.value).strip() if cell.value is not None else ""

def price_to_folder(price):
    try:
        p = int(price)
        juta = p // 1000000
        return str(max(1, min(juta, 20)))
    except:
        return "9"

wb = openpyxl.load_workbook(EXCEL_FILE, data_only=True)
ws = wb.active

products = []
for row in ws.iter_rows(min_row=3):
    id_ = val(row[0])
    if not id_:
        continue
    name     = val(row[1])
    category = val(row[2]) or "global"
    price    = val(row[3]) or "0"
    cpu      = val(row[4])
    gpu      = val(row[5])
    ram      = val(row[6]) or "8GB"
    storage  = val(row[7]) or "256GB"
    video    = val(row[8])
    shop     = val(row[9])
    image    = val(row[10])

    folder = price_to_folder(price)
    if not image:
        image = f"./LAPTOP {folder} JUTA/{name}.webp"
    else:
        image = f"./LAPTOP {folder} JUTA/{image}"

    specs = []
    if cpu: specs.append(cpu)
    if gpu: specs.append(gpu)
    specs.append(f"RAM {ram}")
    specs.append(f"SSD {storage}")

    products.append({
        "id": id_, "name": name, "category": category, "price": price,
        "specs": specs, "video": video, "shop": shop, "image": image
    })

lines = ["const PRODUCTS = [\n"]
for p in products:
    specs_str = ",\n      ".join(f'"{s}"' for s in p["specs"])
    lines.append(f"""  {{
    id: {p['id']},
    name: "{p['name']}",
    category: "{p['category']}",
    price: {p['price']},
    specs: [
      {specs_str}
    ],
    videoUrl: "{p['video']}",
    shopUrl:  "{p['shop']}",
    image:    "{p['image']}"
  }},\n""")

lines.append("];\n")

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    f.writelines(lines)

print(f"Berhasil! {len(products)} produk ditulis ke {OUTPUT_FILE}")

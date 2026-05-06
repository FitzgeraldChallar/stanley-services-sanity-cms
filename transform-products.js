import fs from "fs";

const data = JSON.parse(fs.readFileSync("products.json"));

const formatted = data.map((item, index) => ({
  _id: `products-${index}`,
  _type: "products",

  // ✅ Correct fields
  title: item["Product Name"] || "",

  slug: {
    _type: "slug",
    current: item["Product Handle"] || "",
  },

  description: item["Product Description"] || "",

  // ✅ Convert "$120.00" → 120
  price: item["Variant Price"]
    ? Number(item["Variant Price"].replace("$", ""))
    : 0,

  imageUrl: item["Main Variant Image"] || ""
}));

fs.writeFileSync(
  "products-import.ndjson",
  formatted.map(doc => JSON.stringify(doc)).join("\n")
);

console.log("Products data ready");
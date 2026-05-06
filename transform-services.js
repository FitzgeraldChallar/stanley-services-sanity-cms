import fs from "fs";

const data = JSON.parse(fs.readFileSync("services.json"));

const formatted = data.map((item, index) => ({
  _id: `services-${index}`,
  _type: "services",

  title: item.Title || "",

  slug: {
    _type: "slug",
    current: item.Slug || "",
  },

  description: item.Description || item.Excerpt || "",

  // Optional image (we'll refine later)
  imageUrl: item.Image || ""
}));

fs.writeFileSync(
  "services-import.ndjson",
  formatted.map(doc => JSON.stringify(doc)).join("\n")
);

console.log("Services data ready");
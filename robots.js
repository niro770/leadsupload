import { VERTICAL_LIST } from "../data/verticals";

export default function sitemap() {
  const base = "https://leadsupload.example";
  const staticPages = ["", "/pricing", "/sample-data"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
  const verticalPages = VERTICAL_LIST.map((v) => ({
    url: `${base}/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));
  return [...staticPages, ...verticalPages];
}

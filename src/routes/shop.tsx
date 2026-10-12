import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

const categories = ["All", "Sarees", "Ready-made Blouses", "Unstitched Blouses"];

export const Route = createFileRoute("/shop")({
  validateSearch: (s: Record<string, unknown>): { category?: string | undefined } => ({
    category: typeof s["category"] === "string" ? s["category"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop Sarees & Blouses — Sakhisaaj" },
      { name: "description", content: "Browse silk, organza and festive sarees plus ready-made and unstitched blouses." },
      { property: "og:title", content: "Shop Sarees & Blouses — Sakhisaaj" },
      { property: "og:description", content: "Browse the full Sakhisaaj collection." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { category = "All" } = Route.useSearch();
  const [sort, setSort] = useState("featured");
  let list = category === "All" ? products : products.filter((p) => p.category === category);
  if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14">
      <p className="eyebrow">The collection</p>
      <h1 className="mt-2 text-5xl">{category === "All" ? "Shop all" : category}</h1>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y py-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link key={c} to="/shop" search={{ category: c === "All" ? undefined : c }}
              className={`border px-4 py-2 text-xs uppercase tracking-widest ${c === category ? "border-primary bg-primary text-primary-foreground" : "hover:border-primary"}`}>
              {c}
            </Link>
          ))}
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="border bg-background px-3 py-2 text-sm">
          <option value="featured">Featured</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
        {list.map((p) => <ProductCard key={p.slug} p={p} />)}
      </div>
    </div>
  );
}

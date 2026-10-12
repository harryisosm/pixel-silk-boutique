import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, inr, products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { ProductCard } from "@/components/ProductCard";
import { toast } from "sonner";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — Sakhisaaj` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: loaderData.name },
          { property: "og:description", content: loaderData.description },
          { property: "og:type", content: "product" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Unavailable — Sakhisaaj" }, { name: "robots", content: "noindex" }],
  }),
  component: ProductPage,
});

function ProductPage() {
  const p = Route.useLoaderData();
  const { add } = useCart();
  const [size, setSize] = useState<string>();
  const [stitch, setStitch] = useState(false);
  const isSaree = p.category === "Sarees";

  const addToCart = () => {
    if (p.sizes && !size) return toast.error("Please choose a size");
    add(p.slug, stitch ? "Custom stitching" : size);
    toast.success("Added to your bag");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <Link to="/shop" className="text-xs uppercase tracking-widest text-muted-foreground">← Back to shop</Link>
      <div className="mt-6 grid gap-12 md:grid-cols-2">
        <img src={p.image} alt={p.name} width={800} height={1000} className="aspect-[4/5] w-full object-cover" />
        <div className="fade-up">
          <p className="eyebrow">{p.category}</p>
          <h1 className="mt-2 text-5xl">{p.name}</h1>
          <p className="mt-4 text-2xl">{inr(p.price)} <span className="text-base text-muted-foreground line-through">{inr(p.mrp)}</span></p>
          <p className="text-xs text-muted-foreground">Inclusive of all taxes</p>
          <p className="mt-6 leading-relaxed">{p.description}</p>

          {p.sizes && (
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest">Bust size (inches)</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.sizes.map((s) => (
                  <button key={s} onClick={() => { setSize(s); setStitch(false); }}
                    className={`h-11 w-12 border text-sm ${size === s && !stitch ? "border-primary bg-primary text-primary-foreground" : "hover:border-primary"}`}>{s}</button>
                ))}
              </div>
            </div>
          )}
          {(isSaree || p.category === "Unstitched Blouses") && (
            <label className="mt-8 flex cursor-pointer items-start gap-3 border bg-card p-4 text-sm">
              <input type="checkbox" checked={stitch} onChange={(e) => setStitch(e.target.checked)} className="mt-1 accent-[var(--primary)]" />
              <span><strong>Add custom blouse stitching (+ ₹999)</strong><br /><span className="text-muted-foreground">We'll contact you on WhatsApp for measurements after ordering.</span></span>
            </label>
          )}

          <button onClick={addToCart} className="btn-primary mt-8 w-full">Add to bag</button>

          <dl className="mt-10 divide-y border-y text-sm">
            {[["Fabric", p.fabric], ["Occasion", p.occasion], ["Care", p.care], ["Delivery", "Ships in 2–4 days · 7-day easy returns"]].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[110px_1fr] py-3"><dt className="text-muted-foreground">{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>
      </div>
      <h2 className="mt-24 text-4xl">You may also love</h2>
      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
        {products.filter((x) => x.slug !== p.slug).slice(0, 4).map((x) => <ProductCard key={x.slug} p={x} />)}
      </div>
    </div>
  );
}

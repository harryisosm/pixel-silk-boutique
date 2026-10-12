import { Link } from "@tanstack/react-router";
import { inr, type Product } from "@/lib/products";

export function ProductCard({ p }: { p: Product }) {
  const off = Math.round((1 - p.price / p.mrp) * 100);
  return (
    <Link to="/product/$slug" params={{ slug: p.slug }} className="group block">
      <div className="overflow-hidden bg-muted">
        <img src={p.image} alt={p.name} loading="lazy" width={800} height={1000} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <p className="eyebrow mt-4">{p.fabric}</p>
      <h3 className="mt-1 text-xl">{p.name}</h3>
      <p className="mt-1 text-sm">
        <span className="font-medium">{inr(p.price)}</span>{" "}
        <span className="text-muted-foreground line-through">{inr(p.mrp)}</span>{" "}
        <span className="text-gold">{off}% off</span>
      </p>
    </Link>
  );
}

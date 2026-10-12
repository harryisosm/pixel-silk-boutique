import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Truck, RotateCcw, ShieldCheck, Scissors } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakhisaaj — Premium Sarees & Designer Blouses Online" },
      { name: "description", content: "Handpicked silk, organza and festive sarees with ready-made, unstitched and custom blouses. Free shipping across India." },
      { property: "og:title", content: "Sakhisaaj — Premium Sarees & Designer Blouses" },
      { property: "og:description", content: "Handpicked sarees and blouses for weddings, festivals and every day." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const cats = [
  { label: "Sarees", img: p1 },
  { label: "Ready-made Blouses", img: p2 },
  { label: "Unstitched Blouses", img: p3 },
];

function Index() {
  return (
    <>
      <section className="relative">
        <img src={hero} alt="Woman in maroon silk saree" width={1600} height={1008} className="h-[78vh] w-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-4">
          <div className="fade-up max-w-lg">
            <p className="eyebrow">The Festive Edit · 2026</p>
            <h1 className="mt-4 text-5xl leading-tight md:text-7xl">Draped in grace, <em className="text-primary">woven with love</em></h1>
            <p className="mt-5 text-muted-foreground">Sarees and blouses crafted for every celebration of you.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-primary">Shop sarees</Link>
              <Link to="/shop" search={{ category: "Ready-made Blouses" }} className="btn-outline">Explore blouses</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 text-sm md:grid-cols-4">
          {[[Truck, "Free shipping over ₹1,999"], [RotateCcw, "Easy 7-day returns"], [ShieldCheck, "Secure payments & COD"], [Scissors, "Custom blouse stitching"]].map(([I, t]) => {
            const Icon = I as typeof Truck;
            return <div key={t as string} className="flex items-center gap-3"><Icon className="h-5 w-5 shrink-0 text-gold" />{t as string}</div>;
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <p className="eyebrow text-center">Shop by category</p>
        <h2 className="mt-2 text-center text-4xl">Find your perfect pairing</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cats.map((c) => (
            <Link key={c.label} to="/shop" search={{ category: c.label }} className="group relative block overflow-hidden">
              <img src={c.img} alt={c.label} loading="lazy" width={800} height={1000} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-6">
                <h3 className="text-3xl text-primary-foreground">{c.label}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between">
          <div><p className="eyebrow">Bestsellers</p><h2 className="mt-2 text-4xl">Loved by our sakhis</h2></div>
          <Link to="/shop" className="text-xs uppercase tracking-[0.2em] text-primary">View all →</Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.slice(0, 4).map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-4xl px-4 text-center">
        <p className="eyebrow">What customers say</p>
        <blockquote className="mt-6 font-display text-3xl italic leading-snug">
          “The Banarasi was even more beautiful in person, and the blouse fit perfectly. I felt like a bride all over again.”
        </blockquote>
        <p className="mt-4 text-sm text-muted-foreground">— Priya S., Pune · ★★★★★</p>
      </section>
    </>
  );
}

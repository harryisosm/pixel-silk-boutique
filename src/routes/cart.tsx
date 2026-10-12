import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { getProduct, inr } from "@/lib/products";
import { toast } from "sonner";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Bag — Sakhisaaj" },
      { name: "description", content: "Review your sarees and blouses before checkout." },
      { property: "og:title", content: "Your Bag — Sakhisaaj" },
      { property: "og:description", content: "Review your Sakhisaaj bag." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { items, setQty } = useCart();
  const lines = items.map((i) => ({ ...i, p: getProduct(i.slug)! })).filter((l) => l.p);
  const subtotal = lines.reduce((a, l) => a + (l.p.price + (l.size === "Custom stitching" ? 999 : 0)) * l.qty, 0);
  const shipping = subtotal >= 1999 || subtotal === 0 ? 0 : 99;

  if (!lines.length)
    return (
      <div className="mx-auto max-w-xl px-4 py-32 text-center">
        <h1 className="text-5xl">Your bag is empty</h1>
        <Link to="/shop" className="btn-primary mt-8">Start shopping</Link>
      </div>
    );

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-[1fr_340px]">
      <div>
        <h1 className="text-5xl">Your bag</h1>
        <ul className="mt-8 divide-y border-y">
          {lines.map((l) => (
            <li key={l.slug + l.size} className="flex gap-4 py-5">
              <img src={l.p.image} alt={l.p.name} className="h-28 w-22 shrink-0 object-cover" />
              <div className="min-w-0 flex-1">
                <p className="font-display text-xl">{l.p.name}</p>
                {l.size && <p className="text-sm text-muted-foreground">{l.size}</p>}
                <div className="mt-3 flex items-center gap-3 text-sm">
                  <button onClick={() => setQty(l.slug, l.size, l.qty - 1)} className="h-8 w-8 border">−</button>
                  {l.qty}
                  <button onClick={() => setQty(l.slug, l.size, l.qty + 1)} className="h-8 w-8 border">+</button>
                </div>
              </div>
              <p className="shrink-0">{inr((l.p.price + (l.size === "Custom stitching" ? 999 : 0)) * l.qty)}</p>
            </li>
          ))}
        </ul>
      </div>
      <aside className="h-fit bg-card p-6">
        <h2 className="text-2xl">Order summary</h2>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between"><span>Subtotal</span><span>{inr(subtotal)}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>{shipping ? inr(shipping) : "Free"}</span></div>
          <div className="flex justify-between border-t pt-3 text-base font-medium"><span>Total</span><span>{inr(subtotal + shipping)}</span></div>
        </div>
        <button onClick={() => toast("Online payments are coming soon — order on WhatsApp for now.")} className="btn-primary mt-6 w-full">Checkout</button>
        <p className="mt-3 text-center text-xs text-muted-foreground">Secure payments · COD available</p>
      </aside>
    </div>
  );
}

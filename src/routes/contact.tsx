import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Returns — Sakhisaaj" },
      { name: "description", content: "Reach Sakhisaaj on WhatsApp or email. Read our shipping and 7-day returns policy." },
      { property: "og:title", content: "Contact & Returns — Sakhisaaj" },
      { property: "og:description", content: "We're here to help you choose." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <p className="eyebrow">We're here to help</p>
      <h1 className="mt-2 text-5xl">Contact & returns</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="bg-card p-6"><h2 className="text-2xl">WhatsApp</h2><p className="mt-2 text-sm text-muted-foreground">Styling help, blouse measurements and order updates.</p><a href="https://wa.me/910000000000" className="btn-outline mt-4">Chat with us</a></div>
        <div className="bg-card p-6"><h2 className="text-2xl">Email</h2><p className="mt-2 text-sm text-muted-foreground">hello@sakhisaaj.com<br />Mon–Sat, 10am–7pm IST</p></div>
      </div>
      <h2 className="mt-14 text-3xl">Shipping & returns</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
        <li>Free shipping across India on orders above ₹1,999.</li>
        <li>Orders ship within 2–4 working days.</li>
        <li>Easy returns within 7 days for unused items with tags. Custom-stitched blouses cannot be returned.</li>
      </ul>
    </div>
  ),
});

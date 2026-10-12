import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Sakhisaaj" },
      { name: "description", content: "Sakhisaaj celebrates Indian weaves and blouse craftsmanship for the modern woman." },
      { property: "og:title", content: "Our Story — Sakhisaaj" },
      { property: "og:description", content: "Culturally rooted, beautifully modern." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2">
      <img src={hero} alt="Sakhisaaj saree" loading="lazy" className="aspect-[4/5] w-full object-cover object-[70%_center]" />
      <div>
        <p className="eyebrow">Our story</p>
        <h1 className="mt-2 text-5xl">A friend in every drape</h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">“Sakhi” means a dear friend, “saaj” means adornment. Sakhisaaj brings you sarees chosen from India's weaving traditions, paired with blouses that fit beautifully — ready-made, unstitched or tailored just for you.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">Every piece is inspected by hand, photographed honestly, and delivered with care.</p>
      </div>
    </div>
  ),
});

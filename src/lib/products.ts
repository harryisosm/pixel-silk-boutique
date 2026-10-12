import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import hero from "@/assets/hero.jpg";

export type Category = "Sarees" | "Ready-made Blouses" | "Unstitched Blouses";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: number;
  mrp: number;
  fabric: string;
  occasion: string;
  image: string;
  description: string;
  care: string;
  sizes?: string[];
}

export const products: Product[] = [
  { slug: "emerald-banarasi-silk", name: "Emerald Banarasi Silk Saree", category: "Sarees", price: 8499, mrp: 10999, fabric: "Pure Banarasi Silk", occasion: "Wedding", image: p1, description: "Hand-woven emerald silk with gold zari buttis and a rich floral pallu. Comes with an unstitched running blouse piece.", care: "Dry clean only. Store wrapped in muslin." },
  { slug: "maroon-kanjivaram", name: "Maroon Kanjivaram Saree", category: "Sarees", price: 12999, mrp: 15499, fabric: "Kanjivaram Silk", occasion: "Festive", image: hero, description: "A timeless deep maroon silk with a broad temple zari border — made for celebrations.", care: "Dry clean only." },
  { slug: "peach-organza-floral", name: "Peach Organza Floral Saree", category: "Sarees", price: 4299, mrp: 5299, fabric: "Organza", occasion: "Party", image: p3, description: "Feather-light organza with delicate thread embroidery and a scalloped border.", care: "Gentle dry clean. Iron on low heat." },
  { slug: "blush-zardozi-blouse", name: "Blush Zardozi Designer Blouse", category: "Ready-made Blouses", price: 3499, mrp: 4299, fabric: "Raw Silk", occasion: "Wedding", image: p2, description: "Ready-to-wear blouse with hand zardozi, pearl edging and front hook closure. Padded, with 1.5\" margin for alteration.", care: "Dry clean only.", sizes: ["32", "34", "36", "38", "40", "42"] },
  { slug: "gold-tissue-unstitched", name: "Gold Tissue Blouse Fabric", category: "Unstitched Blouses", price: 999, mrp: 1299, fabric: "Tissue", occasion: "Festive", image: p2, description: "1 metre of shimmering gold tissue — pairs with almost any silk saree.", care: "Dry clean recommended." },
  { slug: "emerald-silk-blouse", name: "Emerald Raw Silk Blouse", category: "Ready-made Blouses", price: 1899, mrp: 2399, fabric: "Raw Silk", occasion: "Office", image: p1, description: "Elegant elbow-sleeve blouse in emerald raw silk with a subtle zari trim.", care: "Dry clean only.", sizes: ["32", "34", "36", "38", "40"] },
];

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

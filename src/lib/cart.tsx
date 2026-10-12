import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export interface CartItem { slug: string; size?: string | undefined; qty: number }

interface Ctx {
  items: CartItem[];
  add: (slug: string, size?: string) => void;
  setQty: (slug: string, size: string | undefined, qty: number) => void;
  count: number;
}

const CartContext = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => {
    const s = localStorage.getItem("sakhisaaj-cart");
    if (s) setItems(JSON.parse(s));
  }, []);
  const save = (next: CartItem[]) => {
    setItems(next);
    localStorage.setItem("sakhisaaj-cart", JSON.stringify(next));
  };
  const add = (slug: string, size?: string) => {
    const ex = items.find((i) => i.slug === slug && i.size === size);
    save(ex ? items.map((i) => (i === ex ? { ...i, qty: i.qty + 1 } : i)) : [...items, { slug, size, qty: 1 }]);
  };
  const setQty = (slug: string, size: string | undefined, qty: number) =>
    save(items.flatMap((i) => (i.slug === slug && i.size === size ? (qty > 0 ? [{ ...i, qty }] : []) : [i])));
  const count = items.reduce((a, i) => a + i.qty, 0);
  return <CartContext.Provider value={{ items, add, setQty, count }}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const c = useContext(CartContext);
  if (!c) throw new Error("CartProvider missing");
  return c;
};

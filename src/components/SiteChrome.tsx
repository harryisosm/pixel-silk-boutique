import { Link } from "@tanstack/react-router";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/cart";
import logoAsset from "@/assets/sakhisaaj-logo.png.asset.json";

export function Header() {
  const { count } = useCart();
  return (
    <>
      <div className="bg-primary py-2 text-center text-xs tracking-widest text-primary-foreground">
        FREE SHIPPING ACROSS INDIA ON ORDERS ABOVE ₹1,999 · EASY 7-DAY RETURNS
      </div>
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 py-4">
          <nav className="hidden gap-6 text-xs uppercase tracking-[0.2em] md:flex">
            <Link to="/shop" activeProps={{ className: "text-primary" }}>Shop</Link>
            <Link to="/about" activeProps={{ className: "text-primary" }}>Our Story</Link>
            <Link to="/contact" activeProps={{ className: "text-primary" }}>Contact</Link>
          </nav>
          <Link to="/shop" className="text-xs uppercase tracking-[0.2em] md:hidden">Shop</Link>
          <Link to="/" className="inline-flex items-center justify-center" aria-label="Sakhisaaj home">
            <img src={logoAsset.url} alt="Sakhisaaj — सुंदरतेचा प्रत्येक रंग, तुमच्यासाठी" className="h-16 w-auto md:h-20" />
          </Link>
          <div className="flex justify-end">
            <Link to="/cart" aria-label="Cart" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-gold text-[10px] text-primary-foreground">{count}</span>}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3">
        <div>
          <Link to="/" className="inline-flex items-center" aria-label="Sakhisaaj home">
            <img src={logoAsset.url} alt="Sakhisaaj — सुंदरतेचा प्रत्येक रंग, तुमच्यासाठी" className="h-16 w-auto md:h-20" />
          </Link>
          <p className="mt-3 max-w-xs text-sm opacity-80">Sarees and blouses crafted with grace, for every celebration of you.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm opacity-90">
          <Link to="/shop">Shop all</Link>
          <Link to="/about">Our story</Link>
          <Link to="/contact">Contact & returns</Link>
        </div>
        <p className="text-sm opacity-80">Secure payments · Cash on delivery · Pan-India delivery</p>
      </div>
      <p className="pb-6 text-center text-xs opacity-60">© {new Date().getFullYear()} Sakhisaaj</p>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

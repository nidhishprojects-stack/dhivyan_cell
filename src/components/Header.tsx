import { Link, NavLink } from "react-router-dom";
import { shopConfig } from "../config/shop";
import { useCart } from "../context/CartContext";

export function Header() {
  const { totalItems } = useCart();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-accent underline underline-offset-4" : "text-primary hover:text-accent"
    }`;

  return (
    <header className="bg-white border-b border-border sticky top-0 z-40">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="w-9 h-9 rounded-lg bg-accent text-white flex items-center justify-center font-headline font-bold text-sm">
            AE
          </span>
          <span className="font-headline font-bold text-lg text-primary hidden sm:block">
            {shopConfig.name}
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink to="/shop" className={linkClass}>
            Shop
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/cart" className={`${linkClass} relative`}>
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

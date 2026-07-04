import { Link } from "react-router-dom";
import { shopConfig } from "../config/shop";

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-headline font-bold">{shopConfig.name}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
          <Link to="/cart" className="hover:text-white">
            Terms & Checkout
          </Link>
          <Link to="/about" className="hover:text-white">
            Contact
          </Link>
        </div>
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} {shopConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

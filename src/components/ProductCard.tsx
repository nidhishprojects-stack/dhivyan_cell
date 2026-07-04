import { useCart } from "../context/CartContext";
import type { Product } from "../data/product";
import { formatPrice } from "../utils/whatsappOrder";

type ProductCardProps = {
  product: Product;
  badge?: string;
};

export function ProductCard({ product, badge }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="relative aspect-square bg-surface-container p-4 flex items-center justify-center">
        {badge && (
          <span className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-2 py-1 rounded">
            {badge}
          </span>
        )}
        {!product.inStock && (
          <span className="absolute top-3 left-3 bg-secondary/80 text-white text-xs font-semibold px-2 py-1 rounded">
            OUT OF STOCK
          </span>
        )}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <p className="text-xs font-semibold tracking-wide text-muted uppercase">
          {product.category}
        </p>
        <h3 className="font-headline font-semibold text-primary leading-snug">
          {product.name}
        </h3>
        <p className="text-lg font-semibold text-primary mt-auto">
          {formatPrice(product.price)}
        </p>
        <button
          type="button"
          disabled={!product.inStock}
          onClick={() => addItem(product.id)}
          className="mt-2 w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover disabled:bg-secondary/40 disabled:cursor-not-allowed text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
        >
          <CartIcon />
          {product.inStock ? "Add to Cart" : "Notify Me"}
        </button>
      </div>
    </article>
  );
}

function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

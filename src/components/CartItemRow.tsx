import { useCart } from "../context/CartContext";
import type { Product } from "../data/product";
import { formatPrice } from "../utils/whatsappOrder";

type CartItemRowProps = {
  product: Product;
  quantity: number;
};

export function CartItemRow({ product, quantity }: CartItemRowProps) {
  const { updateQuantity, removeItem } = useCart();
  const lineTotal = product.price * quantity;

  return (
    <div className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[2fr_1fr_1fr] gap-4 items-center py-6 border-b border-border">
      <div className="flex gap-4 col-span-3 sm:col-span-1">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-20 h-20 object-contain bg-surface rounded-lg border border-border p-2 shrink-0"
        />
        <div>
          <h3 className="font-headline font-semibold text-primary">{product.name}</h3>
          <p className="text-sm text-muted mt-1">{product.category}</p>
          <button
            type="button"
            onClick={() => removeItem(product.id)}
            className="text-error text-sm mt-2 hover:underline flex items-center gap-1"
          >
            <TrashIcon />
            Remove
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 justify-self-center sm:justify-self-start">
        <span className="text-xs font-semibold text-muted uppercase sm:hidden">Qty</span>
        <button
          type="button"
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className="w-8 h-8 rounded border border-border hover:bg-surface flex items-center justify-center"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-10 text-center font-medium">{quantity}</span>
        <button
          type="button"
          onClick={() => updateQuantity(product.id, quantity + 1)}
          className="w-8 h-8 rounded border border-border hover:bg-surface flex items-center justify-center"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <div className="text-right font-semibold text-primary justify-self-end">
        <span className="text-xs font-semibold text-muted uppercase sm:hidden block mb-1">
          Total
        </span>
        {formatPrice(lineTotal)}
      </div>
    </div>
  );
}

function TrashIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { CartItemRow } from "../components/CartItemRow";
import { shopConfig } from "../config/shop";
import { useCart } from "../context/CartContext";
import { useCustomer } from "../context/CustomerContext";
import { generateOrderId, saveOrderRecord } from "../utils/orderId";
import {
  buildWhatsAppMessage,
  formatPrice,
  getWhatsAppUrl,
} from "../utils/whatsappOrder";

export function Cart() {
  const { getCartLines, totalItems, totalPrice, clearCart } = useCart();
  const {
    customer,
    termsAccepted,
    isComplete,
    updateCustomer,
    setTermsAccepted,
    saveCustomer,
  } = useCustomer();

  const lines = getCartLines();
  const [orderId, setOrderId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSaveDetails = () => {
    saveCustomer();
  };

  const handlePlaceOrder = () => {
    if (!isComplete || lines.length === 0) return;
    saveCustomer();
    const id = generateOrderId();
    setOrderId(id);
    saveOrderRecord({
      orderId: id,
      createdAt: new Date().toISOString(),
      total: totalPrice,
    });
    const message = buildWhatsAppMessage(id, customer, lines);
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const handleCopyOrderId = async () => {
    if (!orderId) return;
    await navigator.clipboard.writeText(orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (lines.length === 0 && !orderId) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 py-20 text-center">
        <h1 className="font-headline text-3xl font-bold">Your Cart</h1>
        <p className="text-muted mt-4">Your cart is empty.</p>
        <Link
          to="/shop"
          className="inline-block mt-6 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10">
      <h1 className="font-headline text-3xl font-bold">Your Cart</h1>
      <p className="text-muted mt-1">
        {totalItems} item{totalItems !== 1 ? "s" : ""} waiting for checkout
      </p>

      <div className="mt-8 grid lg:grid-cols-[1fr_380px] gap-10">
        <div>
          <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr] gap-4 pb-3 border-b border-border text-xs font-semibold text-muted uppercase tracking-wide">
            <span>Product</span>
            <span>Quantity</span>
            <span className="text-right">Total</span>
          </div>
          {lines.map((line) => (
            <CartItemRow
              key={line.product.id}
              product={line.product}
              quantity={line.quantity}
            />
          ))}

          <section className="mt-10 bg-white border border-border rounded-2xl p-6">
            <h2 className="font-headline text-xl font-semibold mb-4">
              Delivery Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Full Name"
                required
                value={customer.name}
                onChange={(v) => updateCustomer({ name: v })}
              />
              <Field
                label="Phone Number"
                required
                type="tel"
                value={customer.phone}
                onChange={(v) => updateCustomer({ phone: v })}
              />
              <Field
                label="Email"
                required
                type="email"
                value={customer.email}
                onChange={(v) => updateCustomer({ email: v })}
                className="sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Delivery Address <span className="text-error">*</span>
                </label>
                <textarea
                  value={customer.address}
                  onChange={(e) => updateCustomer({ address: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
                  placeholder="Street, area, city, pincode"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Branch</label>
                <input
                  readOnly
                  value={shopConfig.branch}
                  className="w-full px-4 py-2.5 border border-border rounded-lg bg-surface text-muted"
                />
              </div>
            </div>

            <label className="flex items-start gap-3 mt-6 cursor-pointer">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mt-1 rounded accent-accent"
              />
              <span className="text-sm">
                I agree — <strong>no refund and no returns of product</strong>;
                payment after product delivery. <span className="text-error">*</span>
              </span>
            </label>

            <button
              type="button"
              onClick={handleSaveDetails}
              className="mt-4 text-sm text-accent font-medium hover:underline"
            >
              Save details to top bar
            </button>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="font-headline text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Subtotal ({totalItems} items)</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Delivery</span>
                <span className="text-accent font-medium">Contact via WhatsApp</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-border">
              <span>Total</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>

            {orderId && (
              <div className="mt-6 p-4 bg-accent/10 border border-accent/30 rounded-xl">
                <p className="text-xs font-semibold text-accent uppercase tracking-wide">
                  Your Order ID
                </p>
                <p className="font-headline text-2xl font-bold text-primary mt-1 tracking-wider">
                  {orderId}
                </p>
                <p className="text-xs text-muted mt-2">
                  Save this ID — share it with us on WhatsApp to check delivery status.
                </p>
                <button
                  type="button"
                  onClick={handleCopyOrderId}
                  className="mt-2 text-sm text-accent font-medium hover:underline"
                >
                  {copied ? "Copied!" : "Copy Order ID"}
                </button>
              </div>
            )}

            <button
              type="button"
              disabled={!isComplete || lines.length === 0}
              onClick={handlePlaceOrder}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover disabled:bg-secondary/40 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              <WhatsAppIcon />
              Order via WhatsApp
            </button>

            {!isComplete && (
              <p className="text-xs text-error mt-2 text-center">
                Fill all details and accept terms to place order.
              </p>
            )}

            <p className="text-xs text-muted text-center mt-4">
              Payment details will be shared by the shop owner on WhatsApp.
            </p>

            {orderId && (
              <button
                type="button"
                onClick={() => {
                  clearCart();
                  setOrderId(null);
                }}
                className="mt-4 w-full border border-border py-2.5 rounded-lg text-sm hover:bg-surface"
              >
                Clear cart & start new order
              </button>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

type FieldProps = {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  className?: string;
};

function Field({
  label,
  required,
  value,
  onChange,
  type = "text",
  className = "",
}: FieldProps) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-1">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

import { shopConfig } from "../config/shop";
import type { Product } from "../data/product";

export type CartLine = {
  product: Product;
  quantity: number;
};

export type CustomerDetails = {
  name: string;
  address: string;
  phone: string;
  email: string;
};

export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function buildWhatsAppMessage(
  orderId: string,
  customer: CustomerDetails,
  items: CartLine[],
): string {
  const lines = items.map(
    (item) =>
      `- ${item.product.name} x ${item.quantity} — ${formatPrice(item.product.price * item.quantity)}`,
  );
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return [
    `New order — ${shopConfig.name}`,
    `Order ID: ${orderId}`,
    "",
    `Customer: ${customer.name}`,
    `Phone: ${customer.phone}`,
    `Email: ${customer.email}`,
    `Branch: ${shopConfig.branch}`,
    `Delivery address: ${customer.address}`,
    "",
    "Items:",
    ...lines,
    "",
    `Cart total: ${formatPrice(total)}`,
    "",
    "Terms accepted: No refund and no returns of product. Payment after product delivery.",
  ].join("\n");
}

export function getWhatsAppUrl(message: string): string {
  const number = shopConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

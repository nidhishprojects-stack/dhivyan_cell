# Anand Electronics Shop

Static e-commerce website for **Anand Electronics**, Madurai. Browse products, add to cart, fill delivery details, and place orders via WhatsApp.

## Quick Start

```bash
cd anand-shop
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

## Managing Products

Edit **[src/data/product.ts](src/data/product.ts)** — this is the only file you need for product changes.

### Add a product

Append an object to the `products` array:

```typescript
{
  id: "unique-id",
  name: "Product Name",
  category: "Switches",
  description: "Optional description",
  price: 100,
  imageUrl: "https://...",  // use Wikimedia Commons or Unsplash
  inStock: true,
}
```

### Remove a product

Delete its entry from the `products` array.

### Update price, image, or stock

Edit the fields on the existing product object.

## Payment Details (Future)

Edit **[src/data/payment.ts](src/data/payment.ts)** when you want to show payment info on the site. Currently all values are `null` and `enabled: false`.

## Shop Settings

Edit **[src/config/shop.ts](src/config/shop.ts)** for WhatsApp number, branch, address, and contact info.

## Order ID Format

Each order gets a unique ID: `YYMMDD` for the first order of the day, then `YYMMDD02`, `YYMMDD03`, etc. for additional orders. Customers share this ID on WhatsApp to track delivery.

## Project Structure

```
src/
├── data/
│   ├── product.ts    ← edit products here
│   └── payment.ts    ← payment info (nil for now)
├── config/
│   └── shop.ts       ← shop & WhatsApp settings
├── pages/            ← Home, Shop, Cart, About
└── components/       ← UI components
```

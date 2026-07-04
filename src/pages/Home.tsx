import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { shopConfig } from "../config/shop";
import { products } from "../data/product";

export function Home() {
  const topPicks = products.filter((p) => p.inStock).slice(0, 4);

  return (
    <div>
      <section className="relative bg-primary text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        <div className="relative max-w-[1280px] mx-auto px-6 py-20 lg:py-28">
          <h1 className="font-headline text-3xl sm:text-5xl font-bold max-w-2xl leading-tight">
            Precision Components for Every Project
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            Quality electronic components, switches, potentiometers, and tools —
            trusted by hobbyists and professionals in Madurai.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Shop Now →
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: "Expert Support",
              desc: "Get guidance on components and compatibility from our team.",
              icon: "🎧",
            },
            {
              title: "Quality Guaranteed",
              desc: "Trusted brands and tested components for reliable builds.",
              icon: "🛡️",
            },
            {
              title: "Local Delivery",
              desc: `Fast delivery across Madurai from ${shopConfig.branch}.`,
              icon: "🚚",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-border rounded-2xl p-6 text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-headline font-semibold text-lg">{item.title}</h3>
              <p className="text-muted text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-headline text-2xl font-bold">Top Picks</h2>
          <Link to="/shop" className="text-accent font-medium hover:underline">
            View all products →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topPicks.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              badge={i === 0 ? "TOP RATED" : undefined}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

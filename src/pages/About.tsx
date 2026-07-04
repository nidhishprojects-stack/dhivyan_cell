import { shopConfig } from "../config/shop";

export function About() {
  return (
    <div>
      <section className="max-w-[1280px] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-headline text-3xl lg:text-4xl font-bold">
            Our Professional Promise
          </h1>
          <p className="text-muted mt-4 leading-relaxed">
            {shopConfig.name} has been serving Madurai with quality electronic
            components, switches, potentiometers, and tools. We are committed to
            providing reliable parts for hobbyists, technicians, and businesses
            — with honest service and local expertise you can trust.
          </p>
        </div>
        <div className="bg-primary rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
            alt="Electronics workspace"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </section>

      <section className="bg-white border-y border-border py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="font-headline text-2xl font-bold text-center">
            Meet the Standards
          </h2>
          <p className="text-muted text-center mt-2 max-w-xl mx-auto">
            We source quality components and stand behind every product we sell.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Quality Components",
                desc: "Trusted brands and tested parts for dependable projects.",
              },
              {
                title: "Local Expertise",
                desc: "Madurai-based team with deep knowledge of electronics.",
              },
              {
                title: "WhatsApp Support",
                desc: "Order and track delivery easily through WhatsApp.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-border rounded-2xl p-6 text-center"
              >
                <h3 className="font-headline font-semibold">{item.title}</h3>
                <p className="text-sm text-muted mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-headline text-2xl font-bold">Visit Us</h2>
          <p className="text-muted mt-2">
            Get in touch or visit our shop at Town Hall, Madurai.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-accent">Address</dt>
              <dd className="text-muted mt-1">{shopConfig.address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-accent">Branch</dt>
              <dd className="text-muted mt-1">{shopConfig.branch}</dd>
            </div>
            <div>
              <dt className="font-semibold text-accent">Phone / WhatsApp</dt>
              <dd className="text-muted mt-1">
                <a
                  href={`https://wa.me/${shopConfig.whatsappNumber.replace(/\D/g, "")}`}
                  className="hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {shopConfig.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="bg-surface border border-border rounded-2xl p-8 flex items-center justify-center min-h-[280px]">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center text-white font-headline font-bold text-xl">
              AE
            </div>
            <p className="font-headline font-bold mt-4 text-lg">HEADQUARTERS</p>
            <p className="text-sm text-muted mt-2">Town Hall, Madurai</p>
            <p className="text-xs text-muted mt-1">Tamil Nadu, India</p>
          </div>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Barbers } from "@/components/Barbers";
import { Gallery } from "@/components/Gallery";
import { Booking } from "@/components/Booking";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";
import { Marquee } from "@/components/Marquee";
import { SHOP } from "@/lib/shop-data";

const title = "King Of Rock Barbershop | Κουρείο στο Ηράκλειο Κρήτης";
const description =
  "Rock 'n' roll barbershop στο Ηράκλειο Κρήτης. Κούρεμα, γένια και ξύρισμα με ζεστή πετσέτα. Κλείσε ραντεβού online στο King Of Rock Barbershop.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: SHOP.name,
          description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Λεωφ. Ηρακλείου 514",
            addressLocality: "Ηράκλειο",
            addressRegion: "Κρήτη",
            addressCountry: "GR",
          },
          telephone: SHOP.phone,
          priceRange: "€€",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Marquee
          items={[
            "King Of Rock",
            "Κουρείο • Ηράκλειο",
            "Rock 'n' Roll",
            "Κλείσε Ραντεβού",
            "Est. στο Ηράκλειο",
          ]}
        />
        <About />
        <Services />
        <Barbers />
        <Marquee
          variant="outline"
          speed={26}
          items={[
            "Loud Music",
            "Sharp Cuts",
            "Ψαλίδι & Ξυράφι",
            "Χωρίς Βιασύνη",
          ]}
        />
        <Gallery />
        <Booking />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />

      {/* Sticky mobile CTA */}
      <a
        href="#booking"
        className="btn-base btn-hero fixed inset-x-4 bottom-4 z-40 shadow-lg lg:hidden"
      >
        Κλείσε Ραντεβού
      </a>
    </div>
  );
}

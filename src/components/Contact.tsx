import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { SHOP, HOURS } from "@/lib/shop-data";

export function Contact() {
  return (
    <section
      id="contact"
      className="texture-grain relative border-t border-border bg-[oklch(0.17_0.006_60)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Πού Είμαστε" title="Έλα από το μαγαζί" />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="card-rock h-full overflow-hidden">
              <iframe
                title="Χάρτης — King Of Rock Barbershop, Ηράκλειο"
                src={SHOP.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full grayscale-[35%] contrast-110"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-rock h-full p-6">
              <h3 className="text-2xl">Στοιχεία</h3>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                  <a href={SHOP.mapsLink} target="_blank" rel="noreferrer" className="hover:text-primary">
                    {SHOP.address}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-primary" />
                  <a href={`tel:${SHOP.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                    {SHOP.phone}
                  </a>
                </li>
              </ul>

              <h3 className="mt-8 flex items-center gap-2 text-xl">
                <Clock size={18} className="text-primary" /> Ωράριο
              </h3>
              <table className="mt-4 w-full text-sm">
                <tbody>
                  {HOURS.map((row) => (
                    <tr key={row.day} className="border-b border-border/60 last:border-0">
                      <td className="py-2 text-muted-foreground">{row.day}</td>
                      <td className="py-2 text-right font-medium">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${SHOP.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base btn-hero flex-1 px-4 py-2.5 text-sm"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a
                  href={SHOP.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="btn-base btn-outline px-4 py-2.5"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={SHOP.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="btn-base btn-outline px-4 py-2.5"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

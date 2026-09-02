import { Scissors } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { SERVICES } from "@/lib/shop-data";
import { upperEl } from "@/lib/utils";

export function Services() {
  return (
    <section
      id="services"
      className="texture-grain relative border-y border-border bg-[oklch(0.17_0.006_60)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Τιμοκατάλογος"
          title="Υπηρεσίες"
          titleVariant="script"
          subtitle="Καθαρές τιμές, χωρίς αστερίσκους. Πληρωμή σε μετρητά ή κάρτα."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal as="li" key={service.name} delay={i * 70}>
              <div className="card-rock group h-full p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-sm border border-border text-primary transition-colors group-hover:border-primary">
                      <Scissors size={18} />
                    </span>
                    <h3 className="text-xl">{upperEl(service.name)}</h3>
                  </div>
                  <span className="font-display text-2xl text-primary">
                    {service.price}
                  </span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {upperEl(`Διάρκεια ${service.duration}`)}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 text-center">
          <a href="#booking" className="btn-base btn-hero btn-pole">
            <span>{upperEl("Κλείσε Ραντεβού")}</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

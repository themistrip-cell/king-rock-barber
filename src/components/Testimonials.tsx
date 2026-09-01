import { Star, Quote } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { TESTIMONIALS } from "@/lib/shop-data";
import { upperEl } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Words From The Chair"
          title="Τι λένε οι πελάτες"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <blockquote className="card-rock h-full p-6">
                <Quote className="text-primary/70" size={22} />
                <p className="mt-4 text-sm text-muted-foreground">"{item.text}"</p>
                <footer className="mt-6">
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: item.rating }).map((_, s) => (
                      <Star key={s} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <cite className="mt-2 block font-display text-lg not-italic">
                    {upperEl(item.name)}
                  </cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

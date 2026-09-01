import { Instagram } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { upperEl } from "@/lib/utils";
import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";
import barber3 from "@/assets/barber-3.jpg";

// Add or remove entries here to change the team grid.
export const BARBERS = [
  {
    name: "Μάνος",
    role: "Owner / Master Barber",
    bio: "Ο άνθρωπος πίσω από το μαγαζί. Fades, κλασικά κουρέματα και δίσκοι βινυλίου.",
    instagram: "https://www.instagram.com/",
    image: barber1,
  },
  {
    name: "Στέφανος",
    role: "Barber & Beard Specialist",
    bio: "Γένια, σχηματισμοί και ξύρισμα με ξυράφι. Υπομονετικός μέχρι το τελευταίο χιλιοστό.",
    instagram: "https://www.instagram.com/",
    image: barber2,
  },
  {
    name: "Άκης",
    role: "Barber",
    bio: "Pompadours, slick backs και ό,τι θέλει στυλ. Ροκ μέχρι το κόκαλο.",
    instagram: "https://www.instagram.com/",
    image: barber3,
  },
];

export function Barbers() {
  return (
    <section id="barbers" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Η Ομάδα"
          title="Οι Barbers"
          subtitle="Πραγματικοί τεχνίτες, όχι γραμμή παραγωγής."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BARBERS.map((barber, i) => (
            <Reveal key={barber.name} delay={i * 90}>
              <article className="card-rock group h-full overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={barber.image}
                    alt={`${barber.name} — barber στο King Of Rock Barbershop`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl">{upperEl(barber.name)}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-primary">
                    {barber.role}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {barber.bio}
                  </p>
                  <a
                    href={barber.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Instagram size={16} /> Instagram
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

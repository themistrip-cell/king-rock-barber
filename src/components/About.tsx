import { Reveal } from "./Reveal";
import { upperEl } from "@/lib/utils";
import guitar from "@/assets/guitar.jpg";
import motorcycle from "@/assets/motorcycle.jpg";
import amp from "@/assets/amp.jpg";
import chair from "@/assets/chair-mirror.jpg";
import storefront from "@/assets/storefront.jpg";

const STRIP = [
  { src: guitar, alt: "Ηλεκτρική κιθάρα κρεμασμένη σε τοίχο από τούβλα" },
  { src: motorcycle, alt: "Vintage μοντέλο μοτοσυκλέτας στον πάγκο του κουρείου" },
  { src: amp, alt: "Ενισχυτής Marshall δίπλα σε ξύλινο βαρέλι" },
  { src: chair, alt: "Πολυθρόνα barber μπροστά σε καθρέφτη και τούβλα" },
  { src: storefront, alt: "Η βιτρίνα του King Of Rock Barbershop στο Νέο Ηράκλειο" },
];

export function About() {
  return (
    <section id="about" className="texture-grain relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">{upperEl("Το Μαγαζί")}</p>
          <h2 className="mt-3 text-4xl leading-[1.05] sm:text-5xl">
            {upperEl("Ροκ ψυχή,")}
            <br />
            {upperEl("κουρείο παλιάς κοπής")}
          </h2>
          <div className="diamond-divider mt-6">
            <span className="diamond-mark" />
          </div>
          <p className="mt-6 text-muted-foreground">
            Χωρίς φιοριτούρες και χωρίς βιασύνη. Δύο πολυθρόνες, τούβλα στον
            τοίχο, ντραμς στη γωνία και μουσική που παίζει δυνατά. Κάθε κούρεμα
            γίνεται με το χέρι, με ψαλίδι και ξυράφι, όπως μαθεύτηκε παλιά.
          </p>
          <p className="mt-4 text-muted-foreground">
            Έρχεσαι για ένα fade, μένεις για την κουβέντα. Αυτό είναι το King Of
            Rock — ένα μαγαζί στο Νέο Ηράκλειο που μυρίζει aftershave και
            ακούγεται σαν δισκοπωλείο.
          </p>
          <dl className="mt-9 grid grid-cols-3 gap-6">
            {[
              { k: "10+", v: "χρόνια στο ψαλίδι" },
              { k: "4.9★", v: "στο Google" },
              { k: "100%", v: "χωρίς βιασύνη" },
            ].map((item) => (
              <div key={item.k}>
                <dt className="font-display text-3xl text-primary">{item.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {upperEl(item.v)}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-2 lg:overflow-visible">
            {STRIP.map((item, i) => (
              <figure
                key={item.src}
                className={`group relative h-56 w-64 shrink-0 snap-start overflow-hidden rounded-sm border border-border lg:h-full lg:w-full ${
                  i === 0 ? "lg:row-span-2 lg:h-[28rem]" : ""
                } ${i > 2 ? "lg:hidden" : ""}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-70 transition-opacity group-hover:opacity-30" />
              </figure>
            ))}
          </div>
          <p className="mt-2 text-center text-xs uppercase tracking-widest text-muted-foreground lg:hidden">
            {upperEl("Σύρε για περισσότερα →")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

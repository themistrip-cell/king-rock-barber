import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import interior from "@/assets/interior-chairs.jpg";
import chair from "@/assets/chair-mirror.jpg";
import guitar from "@/assets/guitar.jpg";
import motorcycle from "@/assets/motorcycle.jpg";
import amp from "@/assets/amp.jpg";
import storefront from "@/assets/storefront.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";

const IMAGES = [
  { src: interior, alt: "Οι πολυθρόνες barber και τα ντραμς στο King Of Rock" },
  { src: work1, alt: "Skin fade κούρεμα σε εξέλιξη" },
  { src: chair, alt: "Πολυθρόνα barber μπροστά στον μεγάλο καθρέφτη" },
  { src: guitar, alt: "Ηλεκτρική κιθάρα σε τοίχο από τούβλα" },
  { src: work2, alt: "Ξύρισμα με ζεστή πετσέτα και ξυράφι" },
  { src: motorcycle, alt: "Vintage μοντέλο μοτοσυκλέτας στο κουρείο" },
  { src: amp, alt: "Ενισχυτής Marshall στο εσωτερικό του μαγαζιού" },
  { src: storefront, alt: "Η πρόσοψη του King Of Rock Barbershop" },
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => ((i ?? 0) + 1) % IMAGES.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => ((i ?? 0) - 1 + IMAGES.length) % IMAGES.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  return (
    <section
      id="gallery"
      className="texture-grain relative border-y border-border bg-[oklch(0.17_0.006_60)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Behind the Chair"
          title="Gallery"
          subtitle="Το μαγαζί, τα εργαλεία και η δουλειά μας."
        />

        <div className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {IMAGES.map((image, i) => (
            <Reveal key={image.src} delay={(i % 4) * 60} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-sm border border-border"
                aria-label={`Άνοιγμα φωτογραφίας: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="pointer-events-none absolute inset-0 bg-background/40 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {index !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            aria-label="Κλείσιμο"
            onClick={() => setIndex(null)}
            className="absolute right-4 top-4 rounded-md border border-border p-2 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <X size={20} />
          </button>
          <button
            type="button"
            aria-label="Προηγούμενη"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => ((i ?? 0) - 1 + IMAGES.length) % IMAGES.length);
            }}
            className="absolute left-3 rounded-md border border-border p-2 text-foreground transition-colors hover:border-primary hover:text-primary sm:left-8"
          >
            <ChevronLeft size={22} />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
            <img
              src={IMAGES[index]?.src}
              alt={IMAGES[index]?.alt ?? ""}
              className="max-h-[80svh] w-auto rounded-sm border border-border object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              {IMAGES[index]?.alt}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Επόμενη"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => ((i ?? 0) + 1) % IMAGES.length);
            }}
            className="absolute right-3 rounded-md border border-border p-2 text-foreground transition-colors hover:border-primary hover:text-primary sm:right-8"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      ) : null}
    </section>
  );
}

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import interior from "@/assets/interior-chairs.jpg";
import emblem from "@/assets/emblem.png";
import { upperEl } from "@/lib/utils";

/*
 * Tagline alternatives:
 *  - "Where Rock Meets the Razor" / "Εκεί που το ροκ συναντά το ξυράφι"
 *  - "Loud Music. Sharp Cuts."
 *  - "Old-School Craft, Rock 'n' Roll Soul"
 */

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setOffset(window.scrollY);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div
        className="cine-plate absolute inset-0 z-0 will-change-transform"
        style={{ translate: `0 ${offset * 0.3}px` }}
      >
        <img
          src={interior}
          alt="Το εσωτερικό του King Of Rock Barbershop στο Νέο Ηράκλειο με πολυθρόνες barber, τούβλα και ντραμς"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-background/55" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/80 via-background/30 to-background" />
      <div className="stage-glow absolute inset-0 z-[1]" />
      <div className="texture-grain absolute inset-0 z-[1]" />
      {/* cinematic curtain lift — fades once on load */}
      <div
        aria-hidden="true"
        className="cine-curtain pointer-events-none absolute inset-0 z-20 bg-background"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-28 text-center">
        <img
          src={emblem}
          alt=""
          aria-hidden="true"
          width={1085}
          height={916}
          className="cine-line mx-auto h-24 w-24 object-contain opacity-90 sm:h-28 sm:w-28"
          style={{ animationDelay: "0.5s" }}
        />
        <h1
          className="cine-line mt-6 font-display text-6xl leading-[0.9] sm:text-8xl lg:text-9xl"
          style={{ animationDelay: "0.7s" }}
        >
          King Of Rock
        </h1>
        <p
          className="cine-line mt-4 text-xs tracking-[0.7em] text-primary sm:text-base"
          style={{ animationDelay: "0.9s" }}
        >
          BARBERSHOP
        </p>
        <p
          className="cine-line mx-auto mt-7 max-w-xl text-lg text-muted-foreground"
          style={{ animationDelay: "1.05s" }}
        >
          Εκεί που το ροκ συναντά το ξυράφι. Κουρείο παλιάς κοπής στο Νέο
          Ηράκλειο — τούβλα, δέρμα, κιθάρες και κουρέματα χωρίς εκπτώσεις.
        </p>
        <div
          className="cine-line mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "1.2s" }}
        >
          <a href="#booking" className="btn-base btn-hero w-full sm:w-auto">
            {upperEl("Κλείσε Ραντεβού")}
          </a>
          <a href="#services" className="btn-base btn-outline w-full sm:w-auto">
            {upperEl("Δες τις Υπηρεσίες")}
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Συνέχεια παρακάτω"
        className="cine-line absolute bottom-6 left-1/2 -translate-x-1/2 text-primary/80 transition-colors hover:text-primary"
        style={{ animationDelay: "1.5s" }}
      >
        <ChevronDown className="animate-bounce" />
      </a>
    </section>
  );
}

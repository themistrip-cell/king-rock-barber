import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import emblem from "@/assets/emblem.png";
import { upperEl } from "@/lib/utils";

const NAV = [
  { href: "#about", label: "Το Μαγαζί" },
  { href: "#services", label: "Υπηρεσίες" },
  { href: "#barbers", label: "Οι Barbers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#booking", label: "Ραντεβού" },
  { href: "#contact", label: "Πού Είμαστε" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={emblem}
            alt="Έμβλημα King Of Rock Barbershop"
            width={1085}
            height={916}
            className="h-11 w-11 object-contain"
          />
          <span className="font-display text-lg leading-none tracking-wide sm:text-xl">
            King Of Rock
            <span className="block text-[0.6rem] tracking-[0.4em] text-primary">
              Barbershop
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              {upperEl(item.label)}
            </a>
          ))}
          <a href="#booking" className="btn-base btn-hero px-5 py-2.5 text-sm">
            {upperEl("Κλείσε Ραντεβού")}
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 top-[64px] z-40 bg-background/98 backdrop-blur-md transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-8">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 font-display text-2xl text-foreground transition-colors hover:text-primary"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {upperEl(item.label)}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="btn-base btn-hero mt-6"
          >
            {upperEl("Κλείσε Ραντεβού")}
          </a>
          <a
            href="tel:+300000000000"
            className="btn-base btn-outline mt-3 gap-2"
          >
            <Phone size={16} /> {upperEl("Τηλεφώνησε")}
          </a>
        </nav>
      </div>
    </header>
  );
}

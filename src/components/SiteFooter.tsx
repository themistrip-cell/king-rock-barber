import { Instagram, Facebook } from "lucide-react";
import emblem from "@/assets/emblem.png";
import { SHOP, HOURS } from "@/lib/shop-data";
import { upperEl } from "@/lib/utils";

const LINKS = [
  { href: "#about", label: "Το Μαγαζί" },
  { href: "#services", label: "Υπηρεσίες" },
  { href: "#barbers", label: "Οι Barbers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#booking", label: "Ραντεβού" },
  { href: "#contact", label: "Πού Είμαστε" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={emblem}
              alt="King Of Rock Barbershop"
              loading="lazy"
              width={1085}
              height={916}
              className="h-14 w-14 object-contain"
            />
            <span className="font-display text-xl leading-none">
              King Of Rock
              <span className="block text-[0.6rem] tracking-[0.4em] text-primary">
                Barbershop
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">
            Κουρείο με ροκ ψυχή στο Νέο Ηράκλειο. {SHOP.address}
          </p>
          <div className="mt-5 flex gap-3">
            <a href={SHOP.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="btn-base btn-outline px-3 py-2">
              <Instagram size={16} />
            </a>
            <a href={SHOP.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="btn-base btn-outline px-3 py-2">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <nav>
          <h2 className="text-lg">{upperEl("Πλοήγηση")}</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted-foreground transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-lg">{upperEl("Ωράριο")}</h2>
          <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
            {HOURS.map((row) => (
              <li key={row.day} className="flex justify-between gap-4">
                <span>{row.day}</span>
                <span>{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6">
        <div className="diamond-divider">
          <span className="diamond-mark" />
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} King Of Rock Barbershop — Νέο Ηράκλειο, Αθήνα.
          Όλα τα δικαιώματα διατηρούνται.
        </p>
      </div>
    </footer>
  );
}

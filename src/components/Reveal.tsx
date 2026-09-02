import { useEffect, useRef, useState, type ReactNode } from "react";
import { upperEl } from "@/lib/utils";

/** Scroll-triggered fade + slide-up wrapper. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as "div";

  return (
    <Component
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  titleVariant = "display",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** "script" renders the title in its natural case with the EB Garamond italic accent face — an italic serif keeps its shape (and its Greek glyphs) where a Latin-only cursive font would lose both in all-caps. */
  titleVariant?: "display" | "script";
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{upperEl(eyebrow)}</p>
      <h2
        className={
          titleVariant === "script"
            ? "mt-3 font-script italic font-medium normal-case text-5xl leading-[1.05] text-primary sm:text-6xl"
            : "mt-3 text-4xl leading-[1.05] sm:text-5xl"
        }
      >
        {titleVariant === "script" ? title : upperEl(title)}
      </h2>
      <div className="diamond-divider mt-5">
        <span className="diamond-mark" />
      </div>
      {subtitle ? (
        <p className="mt-5 text-muted-foreground">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}

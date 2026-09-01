type MarqueeProps = {
  items: string[];
  /** seconds for one full loop */
  speed?: number;
  variant?: "solid" | "outline";
};

/**
 * Infinite marquee ticker — don-barber.gr style, but in King Of Rock flavor.
 * Two duplicated tracks animate with translateX only (GPU-friendly).
 */
export function Marquee({ items, speed = 22, variant = "solid" }: MarqueeProps) {
  const track = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden}
      className="marquee-track flex shrink-0 items-center gap-8 pr-8"
      style={{ animationDuration: `${speed}s` }}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-8">
          <span
            className={`whitespace-nowrap font-display text-3xl uppercase leading-none sm:text-4xl ${
              variant === "outline" ? "marquee-outline" : ""
            }`}
          >
            {item}
          </span>
          <span className="diamond-mark shrink-0" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`relative overflow-hidden border-y border-border py-4 ${
        variant === "solid"
          ? "bg-primary text-primary-foreground"
          : "bg-transparent text-foreground"
      }`}
    >
      <div className="flex w-max">{[track(false), track(true)]}</div>
    </div>
  );
}

import { useMemo, useState } from "react";
import { Check, ChevronLeft, Loader2, CalendarCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Reveal, SectionHeading } from "./Reveal";
import { SERVICES, TIME_SLOTS, SHOP } from "@/lib/shop-data";
import { BARBERS } from "./Barbers";

const STEPS = ["Υπηρεσία", "Barber", "Ημέρα & Ώρα", "Στοιχεία", "Έτοιμο"];
const NO_PREFERENCE = "Χωρίς προτίμηση";

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function labelDate(date: Date) {
  return date.toLocaleDateString("el-GR", { weekday: "short", day: "numeric", month: "short" });
}

export function Booking() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  const [barber, setBarber] = useState(NO_PREFERENCE);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Next 14 days, Sundays excluded (shop closed).
  const days = useMemo(() => {
    const out: { value: string; label: string }[] = [];
    const today = new Date();
    for (let i = 0; out.length < 12 && i < 20; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      if (d.getDay() === 0) continue;
      out.push({ value: formatDate(d), label: labelDate(d) });
    }
    return out;
  }, []);

  const canContinue =
    (step === 0 && service) ||
    step === 1 ||
    (step === 2 && date && slot) ||
    (step === 3 && name.trim().length > 1 && phone.trim().length >= 8);

  async function submit() {
    setSaving(true);
    setError(null);
    const { error: insertError } = await supabase.from("bookings").insert({
      service,
      barber,
      appointment_date: date,
      time_slot: slot,
      customer_name: name.trim(),
      phone: phone.trim(),
      notes: notes.trim() || null,
    });
    setSaving(false);
    if (insertError) {
      setError("Κάτι πήγε στραβά. Δοκίμασε ξανά ή πάρε μας τηλέφωνο.");
      return;
    }
    setStep(4);
  }

  function reset() {
    setStep(0);
    setService("");
    setBarber(NO_PREFERENCE);
    setDate("");
    setSlot("");
    setName("");
    setPhone("");
    setNotes("");
  }

  return (
    <section id="booking" className="relative isolate py-24 sm:py-32">
      <div className="stage-glow pointer-events-none absolute inset-0 z-0" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Booking"
          title="Κλείσε Ραντεβού"
          subtitle="Τέσσερα βήματα και η καρέκλα είναι δική σου."
        />

        <Reveal className="mt-12">
          <div className="card-rock p-5 sm:p-8">
            {/* Progress */}
            <ol className="flex items-center gap-2">
              {STEPS.map((label, i) => (
                <li key={label} className="flex flex-1 items-center gap-2">
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-sm font-semibold transition-colors ${
                      i < step
                        ? "border-primary bg-primary text-primary-foreground"
                        : i === step
                          ? "border-primary text-primary"
                          : "border-border text-muted-foreground"
                    }`}
                  >
                    {i < step ? <Check size={15} /> : i + 1}
                  </span>
                  {i < STEPS.length - 1 ? (
                    <span
                      className={`h-px flex-1 transition-colors ${i < step ? "bg-primary" : "bg-border"}`}
                    />
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Βήμα {Math.min(step + 1, 5)} / 5 — {STEPS[step]}
            </p>

            <div key={step} className="mt-7 animate-in fade-in slide-in-from-right-4 duration-300">
              {step === 0 ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {SERVICES.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => {
                        setService(item.name);
                        setStep(1);
                      }}
                      className={`rounded-sm border p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary ${
                        service === item.name ? "border-primary bg-primary/10" : "border-border"
                      }`}
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span className="font-display text-lg">{item.name}</span>
                        <span className="font-display text-primary">{item.price}</span>
                      </span>
                      <span className="mt-1 block text-xs uppercase tracking-widest text-muted-foreground">
                        {item.duration}
                      </span>
                    </button>
                  ))}
                </div>
              ) : null}

              {step === 1 ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {[NO_PREFERENCE, ...BARBERS.map((b) => b.name)].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setBarber(option);
                        setStep(2);
                      }}
                      className={`rounded-sm border p-4 text-left font-display text-lg transition-all hover:-translate-y-0.5 hover:border-primary ${
                        barber === option ? "border-primary bg-primary/10" : "border-border"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : null}

              {step === 2 ? (
                <div>
                  <p className="mb-3 text-sm text-muted-foreground">Διάλεξε ημέρα</p>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {days.map((day) => (
                      <button
                        key={day.value}
                        type="button"
                        onClick={() => setDate(day.value)}
                        className={`min-w-[5.5rem] shrink-0 rounded-sm border px-3 py-3 text-center text-sm capitalize transition-all hover:border-primary ${
                          date === day.value ? "border-primary bg-primary/10 text-primary" : "border-border"
                        }`}
                      >
                        {day.label}
                      </button>
                    ))}
                  </div>

                  <p className="mb-3 mt-6 text-sm text-muted-foreground">Διάλεξε ώρα</p>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSlot(time)}
                        className={`rounded-sm border py-3 text-sm transition-all hover:border-primary ${
                          slot === time ? "border-primary bg-primary/10 text-primary" : "border-border"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {step === 3 ? (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (canContinue) void submit();
                  }}
                >
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm text-muted-foreground">
                      Όνομα
                    </label>
                    <input
                      id="name"
                      className="field"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Το όνομά σου"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm text-muted-foreground">
                      Τηλέφωνο
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="field"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="69XXXXXXXX"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="notes" className="mb-1.5 block text-sm text-muted-foreground">
                      Σημείωση (προαιρετικό)
                    </label>
                    <textarea
                      id="notes"
                      className="field min-h-24"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="π.χ. fade νούμερο 1 στα πλαϊνά"
                    />
                  </div>

                  <div className="rounded-sm border border-border bg-background/50 p-4 text-sm">
                    <p className="text-muted-foreground">Σύνοψη</p>
                    <p className="mt-2 font-display text-lg">
                      {service} · {barber}
                    </p>
                    <p className="text-primary">
                      {date} στις {slot}
                    </p>
                  </div>

                  {error ? <p className="text-sm text-destructive">{error}</p> : null}
                </form>
              ) : null}

              {step === 4 ? (
                <div className="py-6 text-center">
                  <CalendarCheck className="mx-auto text-primary" size={44} />
                  <h3 className="mt-4 text-3xl">Το ραντεβού καταχωρήθηκε</h3>
                  <p className="mt-3 text-muted-foreground">
                    {name}, σε περιμένουμε {date} στις {slot} για {service.toLowerCase()}
                    {barber !== NO_PREFERENCE ? ` με τον ${barber}` : ""}. Θα σε πάρουμε
                    τηλέφωνο για επιβεβαίωση.
                  </p>
                  <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                    <button type="button" onClick={reset} className="btn-base btn-outline">
                      Νέο ραντεβού
                    </button>
                    <a href={`tel:${SHOP.phone.replace(/\s/g, "")}`} className="btn-base btn-hero">
                      Κάλεσέ μας
                    </a>
                  </div>
                </div>
              ) : null}
            </div>

            {step < 4 ? (
              <div className="mt-8 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="btn-base btn-outline px-4 py-2.5 text-sm disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronLeft size={16} /> Πίσω
                </button>
                <button
                  type="button"
                  disabled={!canContinue || saving}
                  onClick={() => (step === 3 ? void submit() : setStep((s) => s + 1))}
                  className="btn-base btn-hero px-6 py-2.5 text-sm disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {saving ? <Loader2 className="animate-spin" size={16} /> : null}
                  {step === 3 ? "Επιβεβαίωση" : "Συνέχεια"}
                </button>
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

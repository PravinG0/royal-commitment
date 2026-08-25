import { useEffect, useRef, useState } from "react";

const points = [
  {
    num: "01",
    title: "Monitor Patient\u2019s Progress",
    body: "We closely monitor each patient\u2019s progress\u2014whether in hormone therapy or weight loss programs\u2014to ensure results are effective and levels reach their optimal range.",
  },
  {
    num: "02",
    title: "No Fine Print",
    body: "We tell patients upfront what our programs cost. Unlike other clinics, there are no hidden costs or additional fees.",
  },
];

export function OurCommitment() {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="commitment-heading"
      data-shown={shown ? "true" : "false"}
      className="commitment relative overflow-hidden bg-background py-[100px] lg:py-[120px]"
    >
      <div className="commitment-glow" aria-hidden="true" />
      <div className="commitment-rule" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[45fr_55fr] lg:gap-20">
        {/* Visual */}
        <div className="order-2 flex justify-center lg:order-1">
          <svg
            viewBox="0 0 420 460"
            className="journey w-full max-w-[340px] sm:max-w-[420px]"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <radialGradient id="rmc-core" cx="42%" cy="36%" r="70%">
                <stop offset="0%" stopColor="var(--accent-soft)" />
                <stop offset="100%" stopColor="var(--accent-faint)" />
              </radialGradient>
              <linearGradient id="rmc-line" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
                <stop offset="35%" stopColor="var(--accent)" stopOpacity="0.75" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            <circle className="pulse-ring" cx="210" cy="150" r="126" fill="none" stroke="var(--accent)" strokeOpacity="0.14" />
            <circle cx="210" cy="150" r="104" fill="url(#rmc-core)" />
            <circle cx="210" cy="150" r="104" fill="none" stroke="var(--accent)" strokeOpacity="0.25" />
            <circle cx="210" cy="150" r="66" fill="none" stroke="var(--accent)" strokeOpacity="0.18" strokeDasharray="2 7" />

            <path
              className="draw-line"
              d="M210 150 C 210 250, 186 280, 210 340 S 210 400, 210 438"
              fill="none"
              stroke="url(#rmc-line)"
              strokeWidth="1.25"
            />

            <g className={`milestone ${active === 0 ? "is-active" : ""}`}>
              <circle cx="203" cy="300" r="18" fill="none" stroke="var(--accent)" strokeOpacity="0.22" />
              <circle cx="203" cy="300" r="5" fill="var(--accent)" />
            </g>
            <g className={`milestone ${active === 1 ? "is-active" : ""}`}>
              <circle cx="210" cy="408" r="18" fill="none" stroke="var(--accent)" strokeOpacity="0.22" />
              <circle cx="210" cy="408" r="5" fill="var(--accent)" />
            </g>

            <line x1="118" y1="150" x2="70" y2="150" stroke="var(--accent)" strokeOpacity="0.2" />
            <line x1="302" y1="150" x2="350" y2="150" stroke="var(--accent)" strokeOpacity="0.2" />
          </svg>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <p className="reveal r1 text-xs uppercase tracking-[0.32em] text-accent-strong">
            Our Commitment
          </p>
          <h2
            id="commitment-heading"
            className="reveal r2 mt-6 font-display text-[2.1rem] leading-[1.12] tracking-[-0.01em] text-foreground sm:text-[2.6rem] lg:text-[3.1rem]"
          >
            Your Health Journey Deserves Ongoing Care.
          </h2>
          <p className="reveal r3 mt-6 max-w-[54ch] text-base leading-relaxed text-muted-foreground">
            We encourage prospective patients to research their options and make informed
            healthcare decisions. Royal Medical Center provides personalized Hormone
            Replacement Therapy Programs with transparent competitive pricing and licensed
            medical supervision.
          </p>

          <ol className="timeline mt-12 space-y-10">
            {points.map((p, i) => (
              <li
                key={p.num}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className={`reveal ${i === 0 ? "r4" : "r5"} timeline-item relative pl-12 outline-none`}
              >
                <span className="node" aria-hidden="true" />
                <span className="font-display text-2xl font-light tracking-[0.08em] text-accent-strong/70">
                  {p.num}
                </span>
                <h3 className="mt-2 text-lg font-medium text-foreground">{p.title}</h3>
                <p className="mt-2 max-w-[52ch] text-[0.95rem] leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

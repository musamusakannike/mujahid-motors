"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    role: "Business Executive, VI",
    quote:
      "Mujahid Motors made buying my Land Cruiser effortless. No stories — the price was fair, the papers were clean, and I drove off the same week. Highly recommend.",
    vehicle: "Toyota Land Cruiser V8",
    initials: "AO",
  },
  {
    id: 2,
    name: "Emeka Nwosu",
    role: "CEO, Abuja",
    quote:
      "I've bought three vehicles from them over the years. Every time, the experience is consistent: professional, honest, no hidden fees. That's rare in this market.",
    vehicle: "Mercedes-Benz GLE 450",
    initials: "EN",
  },
  {
    id: 3,
    name: "Fatima Al-Hassan",
    role: "Entrepreneur, Kano",
    quote:
      "The team helped me secure financing within 48 hours. They genuinely wanted the best deal for me, not just a quick sale. Excellent service.",
    vehicle: "Lexus LX 600",
    initials: "FA",
  },
  {
    id: 4,
    name: "Tunde Badmos",
    role: "Engineer, Lekki",
    quote:
      "Vehicle inspection report was thorough and transparent — they even pointed out minor wear I hadn't noticed and arranged the fix before handover. Integrity personified.",
    vehicle: "Honda CR-V Touring",
    initials: "TB",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const current = TESTIMONIALS[active];

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        background: "var(--mm-canvas)",
        padding: "100px 0",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ marginBottom: 64, maxWidth: 540 }}>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}
          >
            <span className="mm-accent-line" />
            <span className="mm-label">Client Stories</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mm-display"
            style={{ fontSize: "clamp(40px, 5vw, 68px)", color: "var(--mm-text-primary)" }}
          >
            Voices of Trust.
          </motion.h2>
        </div>

        {/* Testimonial display */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
          }}
          className="testimonial-grid"
        >
          {/* Quote area */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                {/* Large quote mark */}
                <div
                  style={{
                    fontFamily: "var(--mm-font-display)",
                    fontSize: 96,
                    lineHeight: 0.7,
                    color: "var(--mm-gold)",
                    marginBottom: 24,
                    fontWeight: 800,
                  }}
                >
                  &ldquo;
                </div>

                <p
                  style={{
                    fontFamily: "var(--mm-font-body)",
                    fontSize: "clamp(17px, 2vw, 21px)",
                    color: "var(--mm-text-primary)",
                    lineHeight: 1.65,
                    marginBottom: 36,
                    fontStyle: "italic",
                  }}
                >
                  {current.quote}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  {/* Avatar initials */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "var(--mm-gold-mist)",
                      border: "1px solid var(--mm-gold-dim)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--mm-font-display)",
                      fontWeight: 700,
                      fontSize: 16,
                      color: "var(--mm-gold)",
                      flexShrink: 0,
                    }}
                  >
                    {current.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--mm-font-body)",
                        fontWeight: 600,
                        fontSize: 15,
                        color: "var(--mm-text-primary)",
                      }}
                    >
                      {current.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mm-font-body)",
                        fontSize: 13,
                        color: "var(--mm-text-muted)",
                        marginTop: 2,
                      }}
                    >
                      {current.role} · {current.vehicle}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                style={{
                  background: active === i ? "var(--mm-gold-mist)" : "transparent",
                  border: "none",
                  borderLeft: `2px solid ${active === i ? "var(--mm-gold)" : "var(--mm-hairline)"}`,
                  padding: "20px 24px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "border-color 0.3s ease, background 0.3s ease",
                  borderRadius: `0 var(--mm-r-sm) var(--mm-r-sm) 0`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mm-font-body)",
                    fontWeight: 600,
                    fontSize: 15,
                    color:
                      active === i
                        ? "var(--mm-text-primary)"
                        : "var(--mm-text-secondary)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {t.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--mm-font-body)",
                    fontSize: 12,
                    color: "var(--mm-text-muted)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {t.vehicle}
                </span>
              </button>
            ))}

            {/* Dot indicators */}
            <div style={{ display: "flex", gap: 8, paddingLeft: 24, marginTop: 16 }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  style={{
                    width: active === i ? 24 : 6,
                    height: 6,
                    borderRadius: 3,
                    background:
                      active === i ? "var(--mm-gold)" : "var(--mm-hairline)",
                    border: "none",
                    cursor: "pointer",
                    transition: "width 0.3s ease, background 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonial-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

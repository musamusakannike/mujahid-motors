"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PILLARS = [
  {
    num: "01",
    title: "Verified Inventory",
    body: "Every vehicle undergoes a 120-point inspection before it reaches our lot. Full service history and FRSC documentation included.",
  },
  {
    num: "02",
    title: "Transparent Pricing",
    body: "What you see is what you pay. No hidden charges, no pressure tactics — just honest numbers and fair trade-in valuations.",
  },
  {
    num: "03",
    title: "Finance & Insurance",
    body: "We partner with leading Nigerian banks and insurance firms to structure flexible payment plans tailored to your budget.",
  },
  {
    num: "04",
    title: "After-Sales Support",
    body: "Your relationship with us doesn't end at the handshake. We provide ongoing maintenance guidance and priority service slots.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="why-us"
      style={{
        background: "var(--mm-canvas-raised)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background large number watermark */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-2%",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--mm-font-display)",
          fontWeight: 800,
          fontSize: "clamp(160px, 22vw, 320px)",
          lineHeight: 1,
          textTransform: "uppercase",
          color: "transparent",
          WebkitTextStroke: "1px var(--mm-hairline)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        TRUST
      </div>

      <div
        ref={ref}
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 72, maxWidth: 640 }}>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}
          >
            <span className="mm-accent-line" />
            <span className="mm-label">Why Mujahid Motors</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mm-display"
            style={{ fontSize: "clamp(40px, 5vw, 68px)", color: "var(--mm-text-primary)" }}
          >
            Built on{" "}
            <span style={{ color: "var(--mm-gold)" }}>Integrity.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "var(--mm-font-body)",
              fontSize: 16,
              color: "var(--mm-text-secondary)",
              lineHeight: 1.7,
              marginTop: 20,
            }}
          >
            Over a decade serving Lagos, we've built our reputation one handshake at a time.
          </motion.p>
        </div>

        {/* Pillars grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1px",
            background: "var(--mm-hairline)",
            border: "1px solid var(--mm-hairline)",
            borderRadius: "var(--mm-r-md)",
            overflow: "hidden",
          }}
        >
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              style={{
                background: "var(--mm-canvas-raised)",
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                transition: "background 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--mm-canvas-card)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--mm-canvas-raised)")
              }
            >
              <span
                className="mm-label"
                style={{
                  fontSize: 28,
                  fontFamily: "var(--mm-font-display)",
                  fontWeight: 800,
                  color: "var(--mm-gold-dim)",
                  letterSpacing: 0,
                }}
              >
                {pillar.num}
              </span>
              <h3
                className="mm-heading"
                style={{ fontSize: 20, color: "var(--mm-text-primary)" }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--mm-font-body)",
                  fontSize: 14,
                  color: "var(--mm-text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom image band */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ marginTop: 56, display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}
          className="why-image-grid"
        >
          <div
            className="mm-img-placeholder"
            style={{ height: 280, borderRadius: "var(--mm-r-md)" }}
            title="[IMAGE PROMPT: Interior shot of a bright Nigerian car dealership showroom — polished epoxy floor, several premium vehicles on display, warm overhead lighting, a salesperson in a smart blazer conversing with a couple, modern minimalist architecture, professional photography]"
          >
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--mm-font-body)", fontSize: 11, color: "var(--mm-text-muted)", letterSpacing: "0.06em" }}>
                Showroom Interior · See title for image prompt
              </span>
            </div>
          </div>
          <div
            className="mm-img-placeholder"
            style={{ height: 280, borderRadius: "var(--mm-r-md)" }}
            title="[IMAGE PROMPT: Close-up of a car mechanic's hands in latex gloves inspecting the engine bay of a Toyota Land Cruiser, clean workshop environment, workshop tools in background, shallow depth of field, warm lighting, photorealistic]"
          >
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--mm-font-body)", fontSize: 11, color: "var(--mm-text-muted)", letterSpacing: "0.06em" }}>
                Inspection · See title for image prompt
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .why-image-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

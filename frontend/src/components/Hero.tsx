"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  const bgX = useTransform(springX, [-1, 1], ["-1.5%", "1.5%"]);
  const bgY = useTransform(springY, [-1, 1], ["-1%", "1%"]);

  useEffect(() => {
    setMounted(true);
    const handleMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set((e.clientX - cx) / cx);
      mouseY.set((e.clientY - cy) / cy);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        height: "100svh",
        width: "100%",
        overflow: "hidden",
        background: "#0D0D0D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Full-bleed vehicle image with parallax */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-3%",
          x: bgX,
          y: bgY,
          zIndex: 0,
        }}
      >
        <Image
          src="/hero.png"
          alt="Mujahid Motors premium vehicle"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
        />
        {/* Very subtle darkening only at top and bottom edges */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0.45) 0%, transparent 22%, transparent 65%, rgba(13,13,13,0.55) 100%)",
            zIndex: 1,
          }}
        />
      </motion.div>

      {/* TOP: wordmark / model name */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "clamp(36px, 6vh, 64px)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <p
          style={{
            fontFamily: "var(--mm-font-label)",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--mm-gold)",
            margin: 0,
          }}
        >
          Mujahid Motors · Lagos
        </p>
        <h1
          className="mm-display"
          style={{
            fontSize: "clamp(52px, 7vw, 96px)",
            color: "var(--mm-text-primary)",
            margin: 0,
            lineHeight: 0.9,
            letterSpacing: "-0.01em",
          }}
        >
          Drive Beyond.
        </h1>
      </motion.div>

      {/* BOTTOM: CTAs + subtle stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        style={{
          position: "relative",
          zIndex: 2,
          paddingBottom: "clamp(32px, 5vh, 56px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          width: "100%",
        }}
      >
        {/* Optional sub-label */}
        <p
          style={{
            fontFamily: "var(--mm-font-body)",
            fontSize: "clamp(13px, 1.4vw, 15px)",
            color: "rgba(242,237,230,0.72)",
            margin: 0,
            letterSpacing: "0.02em",
          }}
        >
          Premium vehicles. Transparent pricing. No surprises.
        </p>

        {/* CTA row — Tesla-style side-by-side pills */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="#fleet"
            className="mm-btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#fleet")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{ minWidth: 180, textAlign: "center" }}
          >
            Explore Fleet
          </a>
          <a
            href="#contact"
            className="mm-btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              minWidth: 180,
              textAlign: "center",
              /* Frosted glass feel on dark bg */
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderColor: "rgba(255,255,255,0.22)",
            }}
          >
            Book a Viewing
          </a>
        </div>

        {/* Stat strip */}
        <div
          style={{
            display: "flex",
            gap: "clamp(24px, 5vw, 64px)",
            alignItems: "center",
            marginTop: 4,
          }}
        >
          {[
            { value: "500+", label: "Vehicles Sold" },
            { value: "12yr", label: "In Business" },
            { value: "98%", label: "Satisfaction" },
          ].map((s, i) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                className="mm-heading"
                style={{
                  fontSize: "clamp(20px, 2.4vw, 28px)",
                  color: "var(--mm-gold)",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--mm-font-body)",
                  fontSize: 11,
                  color: "rgba(242,237,230,0.5)",
                  marginTop: 4,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll chevron — centered, pulsing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "clamp(80px, 10vh, 110px)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L10 10L19 1"
              stroke="var(--mm-gold)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
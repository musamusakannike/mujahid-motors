"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const STATS = [
  { value: "500+", label: "Vehicles Sold" },
  { value: "12yr", label: "In Business" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-word",
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.2,
        }
      );
      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.85 }
      );
      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          delay: 1.0,
        }
      );
      gsap.fromTo(
        ".hero-stat",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          delay: 1.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!imgRef.current) return;
    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (clientX - cx) / cx;
      const dy = (clientY - cy) / cy;
      gsap.to(imgRef.current, {
        x: dx * 12,
        y: dy * 8,
        duration: 1.4,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        background: "var(--mm-canvas)",
      }}
    >
      {/* Background hero image */}
      <div
        ref={imgRef}
        className="mm-img-placeholder"
        style={{
          position: "absolute",
          inset: "-5%",
          zIndex: 0,
        }}
        title="[IMAGE PROMPT: Cinematic wide-angle shot of a gleaming black luxury SUV (e.g., Range Rover or Lexus LX) parked on a rain-slicked Lagos expressway at dusk, city lights reflecting off the hood, warm amber streetlights creating golden bokeh, atmospheric haze in background, shot from low angle at front-quarter view, ultra-wide lens, f/2.8, photorealistic]"
      >
        <Image
          src="/lexus-lx.png"
          alt="Mujahid Motors premium SUV"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        {/* Gradient overlays */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(13,13,13,1) 0%, rgba(13,13,13,0.7) 30%, rgba(13,13,13,0.2) 60%, rgba(13,13,13,0.05) 100%)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(13,13,13,0.6) 0%, transparent 50%)",
            zIndex: 1,
          }}
        />
        {/* Placeholder indicator removed once image is provided */}
      </div>

      {/* Noise grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 32px 80px",
          width: "100%",
        }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{ marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}
        >
          <span className="mm-accent-line" />
          <span className="mm-label" style={{ textShadow: "var(--mm-shadow-text-sm)" }}>
            Lagos, Nigeria · Est. 2012
          </span>
        </motion.div>

        {/* Headline */}
        <div
          style={{
            overflow: "hidden",
            marginBottom: 4,
          }}
        >
          <h1
            className="mm-display"
            style={{
              fontSize: "clamp(64px, 10vw, 148px)",
              color: "var(--mm-text-primary)",
              display: "flex",
              flexWrap: "wrap",
              gap: "0 0.2em",
            }}
          >
            {"Drive".split("").map((char, i) => (
                <span
                  key={i}
                  className="hero-word"
                  style={{ 
                    display: "inline-block", 
                    opacity: 0,
                    textShadow: "var(--mm-shadow-text-lg)",
                  }}
                >
                  {char}
                </span>
              ))}
          </h1>
        </div>
        <div style={{ overflow: "hidden", marginBottom: 4 }}>
          <h1
            className="mm-display"
            style={{
              fontSize: "clamp(64px, 10vw, 148px)",
              WebkitTextStroke: "1px var(--mm-text-muted)",
              color: "transparent",
            }}
          >
            <span 
              className="hero-word" 
              style={{ 
                display: "inline-block", 
                opacity: 0,
                textShadow: "var(--mm-shadow-text-lg)",
              }}
            >
              Beyond.
            </span>
          </h1>
        </div>

        {/* Sub-headline */}
        <p
          className="hero-sub"
          style={{
            fontFamily: "var(--mm-font-body)",
            fontSize: "clamp(15px, 1.8vw, 18px)",
            color: "var(--mm-text-secondary)",
            maxWidth: 480,
            lineHeight: 1.65,
            marginTop: 32,
            marginBottom: 48,
            opacity: 0,
            textShadow: "var(--mm-shadow-text-md)",
          }}
        >
          Nigeria&apos;s curated destination for premium vehicles — new, certified
          pre-owned, and trade-in ready. Transparent pricing. No surprises.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 72 }}>
          <a href="#fleet" className="mm-btn-primary hero-cta" style={{ opacity: 0 }}
            onClick={(e) => { e.preventDefault(); document.querySelector("#fleet")?.scrollIntoView({ behavior: "smooth" }); }}>
            Explore Fleet
          </a>
          <a href="#contact" className="mm-btn-outline hero-cta" style={{ opacity: 0 }}
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            Book a Viewing
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 48,
            flexWrap: "wrap",
            paddingTop: 32,
            borderTop: "1px solid var(--mm-hairline)",
          }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="hero-stat" style={{ opacity: 0 }}>
              <div
                className="mm-heading"
                style={{ 
                  fontSize: 32, 
                  color: "var(--mm-gold)", 
                  lineHeight: 1,
                  textShadow: "var(--mm-shadow-text-sm)",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--mm-font-body)",
                  fontSize: 13,
                  color: "var(--mm-text-muted)",
                  marginTop: 4,
                  letterSpacing: "0.04em",
                  textShadow: "var(--mm-shadow-text-sm)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: "absolute",
          bottom: 32,
          right: 40,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--mm-font-body)",
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--mm-text-muted)",
            writingMode: "vertical-rl",
            textShadow: "var(--mm-shadow-text-sm)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{
            width: 1,
            height: 40,
            background: "var(--mm-gold)",
            borderRadius: 1,
          }}
        />
      </motion.div>
    </section>
  );
}

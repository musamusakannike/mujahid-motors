"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const ITEMS = [
  "Toyota Land Cruiser",
  "Mercedes-Benz GLE",
  "Lexus LX 600",
  "Honda CR-V",
  "Ford Ranger Raptor",
  "Hyundai Palisade",
  "BMW X5",
  "Prado TX",
  "Verified Inventory",
  "Transparent Pricing",
  "Lagos & Abuja",
];

export default function Ticker() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    const current = x.get();
    const newX = current - (delta / 1000) * 60;
    if (containerRef.current) {
      const half = containerRef.current.scrollWidth / 2;
      x.set(newX <= -half ? 0 : newX);
    }
  });

  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div
      style={{
        borderTop: "1px solid var(--mm-hairline)",
        borderBottom: "1px solid var(--mm-hairline)",
        background: "var(--mm-canvas-raised)",
        overflow: "hidden",
        padding: "16px 0",
      }}
    >
      <motion.div
        ref={containerRef}
        style={{ x, display: "flex", width: "max-content", willChange: "transform" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 20,
              paddingRight: 48,
              fontFamily: "var(--mm-font-display)",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              color: i % 3 === 0 ? "var(--mm-gold)" : "var(--mm-text-muted)",
            }}
          >
            {item}
            <span
              style={{
                display: "inline-block",
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "var(--mm-gold-dim)",
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

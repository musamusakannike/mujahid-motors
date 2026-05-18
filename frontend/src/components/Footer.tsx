"use client";

import { motion } from "framer-motion";

const LINKS = {
  Vehicles: ["New Arrivals", "Pre-Owned", "SUVs", "Sedans", "Pickup Trucks", "Luxury"],
  Services: ["Trade-In Valuation", "Vehicle Financing", "Insurance", "After-Sales", "Fleet Sales"],
  Company: ["About Us", "Careers", "Press", "Dealers Portal", "Contact"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--mm-canvas)",
        borderTop: "1px solid var(--mm-hairline)",
        padding: "72px 0 40px",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr repeat(3, 1fr)",
            gap: 48,
            marginBottom: 64,
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontFamily: "var(--mm-font-display)",
                fontWeight: 800,
                fontSize: 22,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--mm-text-primary)",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--mm-gold)",
                  flexShrink: 0,
                }}
              />
              Mujahid Motors
            </div>
            <p
              style={{
                fontFamily: "var(--mm-font-body)",
                fontSize: 14,
                color: "var(--mm-text-secondary)",
                lineHeight: 1.7,
                maxWidth: 280,
                marginBottom: 28,
              }}
            >
              Nigeria&apos;s trusted dealership for premium and certified pre-owned
              vehicles. Lagos Island since 2012.
            </p>
            {/* Social links — minimal, text-only */}
            <div style={{ display: "flex", gap: 20 }}>
              {["Instagram", "WhatsApp", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontFamily: "var(--mm-font-body)",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    color: "var(--mm-text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--mm-gold)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--mm-text-muted)")
                  }
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <div
                style={{
                  fontFamily: "var(--mm-font-body)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--mm-text-primary)",
                  marginBottom: 20,
                }}
              >
                {heading}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "var(--mm-font-body)",
                        fontSize: 14,
                        color: "var(--mm-text-muted)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--mm-text-secondary)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--mm-text-muted)")
                      }
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mm-divider" style={{ marginBottom: 28 }} />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--mm-font-body)",
              fontSize: 12,
              color: "var(--mm-text-muted)",
            }}
          >
            © {year} Mujahid Motors Nigeria Ltd. All rights reserved. RC 1234567.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  fontFamily: "var(--mm-font-body)",
                  fontSize: 12,
                  color: "var(--mm-text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--mm-text-secondary)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--mm-text-muted)")
                }
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Large watermark wordmark at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        aria-hidden
        style={{
          fontFamily: "var(--mm-font-display)",
          fontWeight: 800,
          fontSize: "clamp(56px, 9vw, 140px)",
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          color: "transparent",
          WebkitTextStroke: "1px var(--mm-hairline)",
          textAlign: "center",
          marginTop: 40,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        Mujahid Motors
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

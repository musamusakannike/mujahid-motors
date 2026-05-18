"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Fleet", href: "#fleet" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prevScrollY = useRef(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setVisible(y < 80 || y < prevScrollY.current);
      prevScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          borderBottom: scrolled
            ? "1px solid var(--mm-hairline)"
            : "1px solid transparent",
          background: scrolled
            ? "rgba(13,13,13,0.88)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          transition:
            "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 32px",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{
              fontFamily: "var(--mm-font-display)",
              fontWeight: 800,
              fontSize: 22,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--mm-text-primary)",
              textDecoration: "none",
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
              }}
            />
            Mujahid Motors
          </a>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 36,
            }}
            className="mm-desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontFamily: "var(--mm-font-body)",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--mm-text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--mm-text-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--mm-text-secondary)")
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="mm-btn-primary"
              style={{ fontSize: 13, padding: "10px 24px" }}
            >
              Browse Fleet
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="mm-hamburger"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              gap: 5,
              padding: 6,
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "var(--mm-text-primary)",
                borderRadius: 1,
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen
                  ? "translateY(7px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "var(--mm-text-primary)",
                borderRadius: 1,
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.3s ease",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "var(--mm-text-primary)",
                borderRadius: 1,
                transition: "transform 0.3s ease",
                transform: menuOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "var(--mm-canvas)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 40px",
              gap: 40,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontFamily: "var(--mm-font-display)",
                  fontSize: 48,
                  fontWeight: 800,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: "var(--mm-text-primary)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="mm-btn-primary"
              style={{ alignSelf: "flex-start", marginTop: 8 }}
            >
              Browse Fleet
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .mm-desktop-nav { display: none !important; }
          .mm-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

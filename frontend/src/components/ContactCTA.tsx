"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const INTERESTS = [
  "New Vehicle",
  "Pre-Owned",
  "Trade-In",
  "Financing",
  "Fleet Purchase",
  "General Inquiry",
];

export default function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const toggle = (tag: string) =>
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: "var(--mm-canvas-raised)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative gold gradient orb */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          right: "-10%",
          transform: "translateY(-50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,151,58,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span className="mm-accent-line" />
            <span className="mm-label">Get In Touch</span>
          </div>

          <h2
            className="mm-display"
            style={{
              fontSize: "clamp(40px, 5vw, 72px)",
              color: "var(--mm-text-primary)",
              marginBottom: 24,
            }}
          >
            Your Next Car{" "}
            <span style={{ color: "var(--mm-gold)" }}>Awaits.</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--mm-font-body)",
              fontSize: 16,
              color: "var(--mm-text-secondary)",
              lineHeight: 1.7,
              marginBottom: 48,
              maxWidth: 440,
            }}
          >
            Tell us what you&apos;re looking for — we&apos;ll reach out within 24 hours
            with matching vehicles, pricing, and financing options tailored to you.
          </p>

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { label: "Showroom", value: "12 Marina Road, Lagos Island, Lagos" },
              { label: "Phone", value: "+234 801 234 5678" },
              { label: "Hours", value: "Mon–Sat: 8am – 7pm · Sun: 10am – 4pm" },
              { label: "Email", value: "sales@mujahidmotors.ng" },
            ].map((item) => (
              <div key={item.label}>
                <div className="mm-label" style={{ marginBottom: 4 }}>
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--mm-font-body)",
                    fontSize: 15,
                    color: "var(--mm-text-primary)",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: "var(--mm-canvas-card)",
                border: "1px solid var(--mm-gold-dim)",
                borderRadius: "var(--mm-r-md)",
                padding: "56px 40px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "var(--mm-gold-mist)",
                  border: "1px solid var(--mm-gold-dim)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  fontSize: 24,
                  color: "var(--mm-gold)",
                }}
              >
                ✓
              </div>
              <h3
                className="mm-heading"
                style={{ fontSize: 24, color: "var(--mm-text-primary)", marginBottom: 12 }}
              >
                Message Sent
              </h3>
              <p style={{ fontFamily: "var(--mm-font-body)", fontSize: 15, color: "var(--mm-text-secondary)", lineHeight: 1.6 }}>
                We&apos;ll be in touch within 24 hours. Thank you for reaching out.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: "var(--mm-canvas-card)",
                border: "1px solid var(--mm-hairline)",
                borderRadius: "var(--mm-r-md)",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              {/* Name + Phone */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                <InputField
                  label="Full Name"
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  placeholder="Emeka Obi"
                  required
                />
                <InputField
                  label="Phone"
                  value={form.phone}
                  onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                  placeholder="+234 800 000 0000"
                  type="tel"
                />
              </div>

              <InputField
                label="Email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                placeholder="you@example.com"
                type="email"
              />

              {/* Interest tags */}
              <div>
                <div className="mm-label" style={{ marginBottom: 12 }}>
                  I&apos;m interested in
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {INTERESTS.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggle(tag)}
                      style={{
                        fontFamily: "var(--mm-font-body)",
                        fontSize: 12,
                        fontWeight: 500,
                        letterSpacing: "0.04em",
                        padding: "7px 14px",
                        borderRadius: "var(--mm-r-full)",
                        border: `1px solid ${selected.includes(tag) ? "var(--mm-gold)" : "var(--mm-hairline)"}`,
                        background: selected.includes(tag)
                          ? "var(--mm-gold-mist)"
                          : "transparent",
                        color: selected.includes(tag)
                          ? "var(--mm-gold)"
                          : "var(--mm-text-secondary)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <div className="mm-label" style={{ marginBottom: 8 }}>Message</div>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell us more about what you're looking for..."
                  rows={4}
                  style={{
                    width: "100%",
                    background: "var(--mm-canvas-raised)",
                    border: "1px solid var(--mm-hairline)",
                    borderRadius: "var(--mm-r-sm)",
                    padding: "12px 16px",
                    fontFamily: "var(--mm-font-body)",
                    fontSize: 14,
                    color: "var(--mm-text-primary)",
                    lineHeight: 1.6,
                    resize: "vertical",
                    outline: "none",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--mm-gold-dim)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--mm-hairline)")}
                />
              </div>

              <button type="submit" className="mm-btn-primary" style={{ alignSelf: "flex-start" }}>
                Send Enquiry
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <div className="mm-label" style={{ marginBottom: 8 }}>{label}</div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        style={{
          width: "100%",
          background: "var(--mm-canvas-raised)",
          border: "1px solid var(--mm-hairline)",
          borderRadius: "var(--mm-r-sm)",
          padding: "11px 14px",
          fontFamily: "var(--mm-font-body)",
          fontSize: 14,
          color: "var(--mm-text-primary)",
          outline: "none",
          transition: "border-color 0.2s ease",
        }}
        onFocus={(e) => (e.target.style.borderColor = "var(--mm-gold-dim)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--mm-hairline)")}
      />
    </div>
  );
}

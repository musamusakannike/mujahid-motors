"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CARS = [
  {
    id: 1,
    brand: "Toyota",
    model: "Land Cruiser V8",
    year: 2023,
    price: "₦78,500,000",
    tag: "New Arrival",
    tagColor: "var(--mm-gold)",
    specs: ["4.5L V8 Diesel", "7-Seater", "4WD"],
    imageSrc: "/toyota-land-cruiser.jpg",
    imgPrompt:
      "[IMAGE PROMPT: Studio 3/4 front view of a white Toyota Land Cruiser 300 series on a matte black seamless studio background, professional automotive photography, rim-lighting, sharp reflections, ultra-sharp, 8K]",
  },
  {
    id: 2,
    brand: "Mercedes-Benz",
    model: "GLE 450 AMG",
    year: 2022,
    price: "₦92,000,000",
    tag: "Pre-Owned",
    tagColor: "var(--mm-text-secondary)",
    specs: ["3.0L Inline-6", "5-Seater", "4MATIC"],
    imageSrc: "/gle-450-amg.jpg",
    imgPrompt:
      "[IMAGE PROMPT: Side profile of a Obsidian Black Mercedes GLE 450 AMG on wet asphalt at night, city lights reflecting on the body, cinematic colour grade, automotive editorial, f/2.8 bokeh background]",
  },
  {
    id: 3,
    brand: "Lexus",
    model: "LX 600",
    year: 2023,
    price: "₦115,000,000",
    tag: "Premium",
    tagColor: "var(--mm-gold)",
    specs: ["3.4L Twin-Turbo V6", "7-Seater", "AWD"],
    imageSrc: "/titanium-lx-600.jpg",
    imgPrompt:
      "[IMAGE PROMPT: Glamorous 3/4 rear view of a Sonic Titanium Lexus LX 600 on a desert dune at golden hour, dramatic sky, long shadow, low angle, photorealistic automotive CGI quality]",
  },
  {
    id: 4,
    brand: "Honda",
    model: "CR-V Touring",
    year: 2024,
    price: "₦38,000,000",
    tag: "New Arrival",
    tagColor: "var(--mm-gold)",
    specs: ["1.5L Turbo", "5-Seater", "AWD"],
    imgPrompt:
      "[IMAGE PROMPT: Front 3/4 view of a Sonic Grey Pearl Honda CR-V 2024 on a clean concrete surface in morning light, soft studio-like lighting, reflections visible on the paintwork, crisp automotive photography]",
  },
  {
    id: 5,
    brand: "Ford",
    model: "Ranger Raptor",
    year: 2023,
    price: "₦52,000,000",
    tag: "Off-Road Ready",
    tagColor: "var(--mm-text-secondary)",
    specs: ["3.0L V6 EcoBoost", "5-Seater", "4WD"],
    imageSrc: "/ford-midair.jpg",
    imgPrompt:
      "[IMAGE PROMPT: Dynamic angled shot of a Performance Blue Ford Ranger Raptor mid-jump on a dusty off-road track, motion blur on wheels, dust cloud behind, dramatic low angle, golden afternoon light, action automotive photography]",
  },
  {
    id: 6,
    brand: "Hyundai",
    model: "Palisade Calligraphy",
    year: 2024,
    price: "₦44,500,000",
    tag: "Best Value",
    tagColor: "var(--mm-success)",
    specs: ["3.8L V6", "8-Seater", "AWD"],
    imageSrc: "/hyundai-palisade.jpg",
    imgPrompt:
      "[IMAGE PROMPT: Head-on symmetrical shot of an Abyss Black Hyundai Palisade Calligraphy in a modern showroom with reflective floor, dramatic overhead lighting, high-end automotive studio photography]",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

function CarCard({ car, index }: { car: (typeof CARS)[number]; index: number }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="mm-card"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* Image placeholder */}
      <div
        className="mm-img-placeholder"
        style={{ aspectRatio: "16/10", position: "relative" }}
        title={car.imgPrompt}
      >
        {/* Tag badge */}
        <span
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            fontFamily: "var(--mm-font-body)",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: car.tagColor,
            background: "rgba(255,255,255,0.75)",
            border: `1px solid ${car.tagColor}`,
            borderRadius: "var(--mm-r-full)",
            padding: "4px 10px",
            backdropFilter: "blur(8px)",
            zIndex: 1,
          }}
        >
          {car.tag}
        </span>
        {car.imageSrc ? (
          <Image
            src={car.imageSrc}
            alt={`${car.brand} ${car.model}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
            priority={car.id <= 2}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--mm-font-body)",
                fontSize: 11,
                color: "var(--mm-text-muted)",
                letterSpacing: "0.06em",
              }}
            >
              {car.brand} · hover title for image prompt
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "20px 22px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <div
            style={{
              fontFamily: "var(--mm-font-body)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--mm-text-muted)",
              marginBottom: 4,
            }}
          >
            {car.brand} · {car.year}
          </div>
          <h3
            className="mm-heading"
            style={{ fontSize: 22, color: "var(--mm-text-primary)" }}
          >
            {car.model}
          </h3>
        </div>

        {/* Specs pills */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {car.specs.map((spec) => (
            <span
              key={spec}
              style={{
                fontFamily: "var(--mm-font-body)",
                fontSize: 11,
                color: "var(--mm-text-secondary)",
                background: "var(--mm-canvas-raised)",
                border: "1px solid var(--mm-hairline)",
                borderRadius: "var(--mm-r-full)",
                padding: "4px 10px",
              }}
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: 14,
            borderTop: "1px solid var(--mm-hairline)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--mm-font-body)",
                fontSize: 11,
                color: "var(--mm-text-muted)",
                letterSpacing: "0.06em",
                marginBottom: 2,
              }}
            >
              Starting from
            </div>
            <div
              className="mm-heading"
              style={{ fontSize: 20, color: "var(--mm-gold)" }}
            >
              {car.price}
            </div>
          </div>
          <button
            className="mm-btn-outline"
            style={{ fontSize: 12, padding: "9px 18px" }}
          >
            Enquire
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Fleet() {
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true, amount: 0.5 });

  return (
    <section
      id="fleet"
      style={{
        background: "var(--mm-canvas)",
        padding: "var(--mm-sp-sec) 0 80px",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* Section header */}
        <div
          ref={headingRef}
          style={{ marginBottom: 56, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}
            >
              <span className="mm-accent-line" />
              <span className="mm-label">Featured Inventory</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mm-display"
              style={{ fontSize: "clamp(40px, 5.5vw, 72px)", color: "var(--mm-text-primary)" }}
            >
              Our Fleet
            </motion.h2>
          </div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mm-btn-outline"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            View All Vehicles
          </motion.a>
        </div>

        {/* Cars grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {CARS.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

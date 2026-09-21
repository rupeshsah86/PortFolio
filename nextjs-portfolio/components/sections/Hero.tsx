"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { personal } from "@/lib/data";

const E = [0.22, 1, 0.36, 1] as const;
const up = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: E, delay },
});

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 100,
        paddingBottom: 80,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#07080b",
      }}
    >
      {/* Soft Blue Ambient Lighting & Depth Background */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(59, 130, 246, 0.03) 40%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Faint Grid Pattern Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 64,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Side Content */}
          <div style={{ maxWidth: 640 }}>
            {/* Soft Green Pill Badge */}
            <motion.div
              {...up(0.1)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 9999,
                border: "1px solid rgba(74, 222, 128, 0.25)",
                background: "rgba(74, 222, 128, 0.08)",
                color: "#4ade80",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.01em",
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#4ade80",
                  display: "inline-block",
                  boxShadow: "0 0 10px rgba(74, 222, 128, 0.8)",
                }}
              />
              Available for new opportunities
            </motion.div>

            {/* Large Elegant White Heading */}
            <motion.h1
              {...up(0.18)}
              style={{
                fontSize: "clamp(2.5rem, 4.8vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                marginBottom: 24,
              }}
            >
              Building scalable <br />
              <span style={{ color: "#38bdf8" }}>full-stack</span> applications.
            </motion.h1>

            {/* Short Clean Bio Paragraph */}
            <motion.p
              {...up(0.24)}
              style={{
                fontSize: 17,
                color: "#9ca3af",
                lineHeight: 1.7,
                marginBottom: 36,
                maxWidth: 540,
                fontWeight: 400,
              }}
            >
              I build robust, scalable web applications with modern technologies. Focused on clean code, performance, and exceptional user experiences.
            </motion.p>

            {/* Two Buttons Only */}
            <motion.div
              {...up(0.3)}
              style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}
            >
              <button
                onClick={() => go("projects")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 26px",
                  borderRadius: 8,
                  background: "#2563eb",
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 20px rgba(37, 99, 235, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1d4ed8";
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 6px 24px rgba(37, 99, 235, 0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2563eb";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(37, 99, 235, 0.3)";
                }}
              >
                View My Work <ArrowRight size={16} />
              </button>

              <a
                href={personal.resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 26px",
                  borderRadius: 8,
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  background: "rgba(255, 255, 255, 0.03)",
                  color: "#e5e7eb",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.16)";
                  e.currentTarget.style.color = "#e5e7eb";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                View Resume
              </a>
            </motion.div>
          </div>

          {/* Right Side Content — Clean Perfect Circular Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: E, delay: 0.2 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 330,
                height: 330,
                borderRadius: "50%",
                padding: 4,
                border: "1px solid rgba(56, 189, 248, 0.4)",
                boxShadow:
                  "0 0 35px rgba(56, 189, 248, 0.18), inset 0 0 20px rgba(56, 189, 248, 0.1), 0 20px 40px rgba(0, 0, 0, 0.6)",
                background: "linear-gradient(145deg, rgba(56, 189, 248, 0.15), rgba(15, 23, 42, 0.8))",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "#0f172a",
                }}
              >
                {!imgError ? (
                  <Image
                    src="/images/profile.jpg"
                    alt="Rupesh Kumar"
                    fill
                    priority
                    sizes="330px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 800,
                      fontSize: "1.8rem",
                      color: "#38bdf8",
                    }}
                  >
                    RUPESH
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            text-align: center;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
          .hero-grid > div:first-child {
            margin: 0 auto;
          }
          .hero-grid > div:first-child > div {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

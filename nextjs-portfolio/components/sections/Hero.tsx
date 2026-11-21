"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Briefcase } from "lucide-react";
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
        backgroundColor: "var(--c-bg)",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Soft Ambient Lighting & Depth Background */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--c-glow) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, var(--c-glow) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Faint Grid Pattern Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.8,
          backgroundImage:
            "linear-gradient(var(--c-grid) 1px, transparent 1px), linear-gradient(90deg, var(--c-grid) 1px, transparent 1px)",
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
            gridTemplateColumns: "1.25fr 0.75fr",
            gap: 56,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Side Content */}
          <div style={{ maxWidth: 660 }}>
            {/* Main Headline */}
            <motion.h1
              {...up(0.08)}
              style={{
                fontSize: "clamp(2.5rem, 4.6vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "var(--c-text)",
                marginBottom: 18,
                transition: "color 0.3s ease",
              }}
            >
              Full-Stack Engineer <br />
              <span style={{ color: "var(--c-accent)" }}>Backend Systems</span> · AI/ML
            </motion.h1>

            {/* Clean Tagline */}
            <motion.p
              {...up(0.22)}
              style={{
                fontSize: 18,
                color: "var(--c-muted)",
                lineHeight: 1.6,
                marginBottom: 32,
                maxWidth: 580,
                fontWeight: 400,
                transition: "color 0.3s ease",
              }}
            >
              {personal.tagline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              {...up(0.34)}
              style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}
            >
              <button
                onClick={() => go("projects")}
                className="btn-primary"
              >
                Featured Projects <ArrowRight size={16} />
              </button>

              <button
                onClick={() => go("experience")}
                className="btn-ghost"
              >
                <Briefcase size={15} /> Experience
              </button>

              <a
                href={personal.resumeUrl}
                download="Rupesh_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Download size={15} /> Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right Side Content — Circular Frame */}
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
                border: "1px solid var(--c-border-hi)",
                boxShadow:
                  "0 0 35px var(--c-glow), inset 0 0 20px var(--c-glow), 0 20px 40px rgba(0, 0, 0, 0.15)",
                background: "linear-gradient(145deg, var(--c-glow), var(--c-card))",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "var(--c-raised)",
                  transition: "background-color 0.3s ease",
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
                      color: "var(--c-accent)",
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
            gap: 40px !important;
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

"use client";

import { motion } from "framer-motion";
import { personal, stats, codingProfiles } from "@/lib/data";
import { GraduationCap, Award, ExternalLink, Code2, Database, Cpu } from "lucide-react";
import Tilt3DCard from "@/components/ui/Tilt3DCard";

const E = [0.22, 1, 0.36, 1] as const;
const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: E, delay },
});

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--c-bg)" }}>
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: 52,
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Stats Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              position: "sticky",
              top: 96,
            }}
          >
            {stats.map((s, i) => (
              <motion.div key={i} {...inView(i * 0.06)}>
                <Tilt3DCard maxRotation={6} scaleOnHover={1.02}>
                  <div className="card" style={{ padding: "18px 22px" }}>
                    <div
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        letterSpacing: "-0.04em",
                        lineHeight: 1.1,
                        marginBottom: 4,
                      }}
                      className="gradient-text"
                    >
                      {s.n}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--c-subtle)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {s.l}
                    </div>
                  </div>
                </Tilt3DCard>
              </motion.div>
            ))}

            {/* Verified Education Card */}
            <motion.div {...inView(0.35)}>
              <div
                className="card"
                style={{
                  padding: "20px",
                  borderLeft: "3px solid var(--c-accent)",
                  background: "var(--c-card)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 10,
                    color: "var(--c-accent)",
                  }}
                >
                  <GraduationCap size={18} />
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      fontFamily: "'JetBrains Mono', monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Education
                  </span>
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--c-text)", marginBottom: 4 }}>
                  {personal.college}
                </div>
                <div style={{ fontSize: 13, color: "var(--c-muted)", marginBottom: 6 }}>
                  {personal.degree}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 8,
                    fontSize: 12,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  <span style={{ color: "var(--c-subtle)" }}>{personal.educationPeriod}</span>
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: 12,
                      background: "var(--c-raised)",
                      color: "var(--c-accent)",
                      fontWeight: 600,
                      border: "1px solid var(--c-border)",
                    }}
                  >
                    CGPA: {personal.cgpa}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Bio Content */}
          <div>
            <motion.div {...inView(0)}>
              <div className="label">About & Engineering Focus</div>
              <h2 className="heading">Transforming Complex Logic into Reliable Software</h2>
            </motion.div>

            {/* Professional Introduction Paragraphs */}
            <div
              style={{
                marginTop: 20,
                marginBottom: 32,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {personal.about.map((p, i) => (
                <motion.p
                  key={i}
                  {...inView(0.08 + i * 0.06)}
                  style={{ fontSize: 16, color: "var(--c-muted)", lineHeight: 1.8 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Core Pillars Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
                marginBottom: 36,
              }}
              className="pillars-grid"
            >
              <motion.div {...inView(0.2)}>
                <div className="card" style={{ padding: "20px", height: "100%" }}>
                  <div
                    style={{
                      padding: 10,
                      borderRadius: 8,
                      background: "var(--c-raised)",
                      width: "fit-content",
                      marginBottom: 12,
                    }}
                  >
                    <Database size={18} color="var(--c-accent)" />
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--c-text)", marginBottom: 6 }}>
                    Backend & Databases
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--c-muted)", lineHeight: 1.6 }}>
                    Spring Boot, Node.js, and relational schema normalization with ACID-compliant transactions and indexing.
                  </p>
                </div>
              </motion.div>

              <motion.div {...inView(0.25)}>
                <div className="card" style={{ padding: "20px", height: "100%" }}>
                  <div
                    style={{
                      padding: 10,
                      borderRadius: 8,
                      background: "var(--c-raised)",
                      width: "fit-content",
                      marginBottom: 12,
                    }}
                  >
                    <Code2 size={18} color="var(--c-purple)" />
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--c-text)", marginBottom: 6 }}>
                    Full-Stack Engineering
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--c-muted)", lineHeight: 1.6 }}>
                    Clean Next.js & React architectures, modular components, RESTful APIs, and predictable state transitions.
                  </p>
                </div>
              </motion.div>

              <motion.div {...inView(0.3)}>
                <div className="card" style={{ padding: "20px", height: "100%" }}>
                  <div
                    style={{
                      padding: 10,
                      borderRadius: 8,
                      background: "var(--c-raised)",
                      width: "fit-content",
                      marginBottom: 12,
                    }}
                  >
                    <Cpu size={18} color="var(--c-green)" />
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--c-text)", marginBottom: 6 }}>
                    Applied AI & ML
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--c-muted)", lineHeight: 1.6 }}>
                    Fast Groq LLM RAG pipelines, graph routing (NetworkX), OCR text extraction, and supervised classification.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Compact Competitive Programming Section */}
            <motion.div {...inView(0.35)}>
              <div
                className="card"
                style={{
                  padding: "24px",
                  background: "var(--c-card)",
                  border: "1px solid var(--c-border-md)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Award size={20} color="var(--c-accent)" />
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--c-text)" }}>
                      Competitive Programming & DSA Benchmarks
                    </h3>
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                      color: "var(--c-accent)",
                      background: "var(--c-glow)",
                      padding: "4px 10px",
                      borderRadius: 14,
                      border: "1px solid var(--c-border-md)",
                    }}
                  >
                    2,800+ Problems Solved
                  </span>
                </div>

                <p style={{ fontSize: 13, color: "var(--c-muted)", lineHeight: 1.6, marginBottom: 18 }}>
                  Consistent algorithmic problem solving focused on optimal time/space complexity analysis, memory bounds, and technical problem decomposition.
                </p>

                {/* Profiles Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: 10,
                  }}
                >
                  {codingProfiles.map((cp) => (
                    <a
                      key={cp.platform}
                      href={cp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "10px 14px",
                        borderRadius: 10,
                        background: "var(--c-raised)",
                        border: "1px solid var(--c-border)",
                        textDecoration: "none",
                        color: "var(--c-text)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--c-accent)";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--c-border)";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          fontSize: 13,
                          fontWeight: 700,
                        }}
                      >
                        <span>{cp.platform}</span>
                        <ExternalLink size={12} color="var(--c-subtle)" />
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--c-accent)",
                          fontFamily: "'JetBrains Mono', monospace",
                          fontWeight: 600,
                        }}
                      >
                        {cp.solved}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--c-subtle)" }}>
                        {cp.highlight}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-grid > div:first-child { position: static !important; display: grid !important; grid-template-columns: repeat(2, 1fr); }
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

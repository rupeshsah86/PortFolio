"use client";

import { motion } from "framer-motion";
import { Trophy, Award, BookmarkCheck } from "lucide-react";
import { achievements, certifications } from "@/lib/data";

const E = [0.22, 1, 0.36, 1] as const;
const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: E, delay },
});

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ background: "var(--c-bg)" }}>
      <div className="wrap">
        <motion.div {...inView(0)} style={{ marginBottom: 44 }}>
          <div className="label">Milestones & Validation</div>
          <h2 className="heading">Achievements & Certifications</h2>
          <p className="subtext">
            Verified competition prizes, hackathon participation, and technical engineering certifications.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            alignItems: "start",
          }}
          className="achieve-grid"
        >
          {/* Left: Hackathons & Competition Achievements */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
                color: "var(--c-accent)",
              }}
            >
              <Trophy size={20} />
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--c-text)", margin: 0 }}>
                Hackathons & Competitions
              </h3>
            </div>

            {/* Judging Panel Presentation Banner */}
            <div
              style={{
                padding: "12px 16px",
                borderRadius: 10,
                background: "var(--c-raised)",
                border: "1px solid var(--c-border-md)",
                marginBottom: 14,
                fontSize: 13,
                color: "var(--c-muted)",
                lineHeight: 1.5,
              }}
            >
              <span style={{ color: "var(--c-accent)", fontWeight: 700 }}>Judging Panel Presentations:</span>{" "}
              Presented project architectures and live prototypes to panels at Hack Spark, SDG Challenge, LLM Forge (Sri Eshwar College), and KSP Hackathon.
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {achievements.map((item, i) => (
                <motion.div key={item.event} {...inView(i * 0.07)}>
                  <div
                    className="card"
                    style={{
                      padding: "20px",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 14,
                      borderLeft: "3px solid var(--c-accent)",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 700,
                          color: "var(--c-text)",
                          marginBottom: 4,
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <span>{item.title}</span>
                      </div>
                      <div style={{ fontSize: 13, color: "var(--c-muted)", lineHeight: 1.5, marginBottom: item.highlight ? 4 : 0 }}>
                        {item.event}
                      </div>
                      {item.highlight && (
                        <div style={{ fontSize: 12, color: "var(--c-subtle)", lineHeight: 1.4 }}>
                          {item.highlight}
                        </div>
                      )}
                    </div>

                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "3px 8px",
                          borderRadius: 12,
                          background: "var(--c-glow)",
                          color: "var(--c-accent)",
                          border: "1px solid var(--c-border-md)",
                          fontFamily: "'JetBrains Mono', monospace",
                          display: "inline-block",
                          marginBottom: 4,
                        }}
                      >
                        {item.badge}
                      </span>
                      <div style={{ fontSize: 11, color: "var(--c-subtle)", fontFamily: "'JetBrains Mono', monospace" }}>
                        {item.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Technical Certifications */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 20,
                color: "var(--c-purple)",
              }}
            >
              <BookmarkCheck size={20} />
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--c-text)", margin: 0 }}>
                Technical Certifications
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {certifications.map((cert, i) => {
                const isAws = cert.name.includes("AWS");
                const iconColor = isAws ? "#f59e0b" : "var(--c-purple)";
                const cardBorder = isAws ? "1px solid rgba(245, 158, 11, 0.4)" : "1px solid var(--c-border)";
                const cardBg = isAws ? "linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, var(--c-card) 100%)" : "var(--c-card)";

                return (
                  <motion.div key={cert.name} {...inView(0.1 + i * 0.06)}>
                    <div
                      className="card"
                      style={{
                        padding: "16px 20px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 12,
                        border: cardBorder,
                        background: cardBg,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div
                          style={{
                            width: 34,
                            height: 34,
                            borderRadius: 8,
                            background: isAws ? "rgba(245, 158, 11, 0.12)" : "var(--c-raised)",
                            border: `1px solid ${isAws ? "rgba(245, 158, 11, 0.3)" : "var(--c-border)"}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: iconColor,
                            flexShrink: 0,
                          }}
                        >
                          <Award size={18} />
                        </div>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--c-text)", lineHeight: 1.3 }}>
                              {cert.name}
                            </span>
                            {isAws && (
                              <span
                                style={{
                                  fontSize: 10,
                                  fontWeight: 700,
                                  padding: "2px 8px",
                                  borderRadius: 4,
                                  background: "rgba(245, 158, 11, 0.15)",
                                  color: "#f59e0b",
                                  border: "1px solid rgba(245, 158, 11, 0.35)",
                                  fontFamily: "'JetBrains Mono', monospace",
                                }}
                              >
                                AWS CERTIFIED
                              </span>
                            )}
                          </div>
                          <div style={{ fontSize: 12, color: "var(--c-subtle)", marginTop: 2 }}>
                            {cert.issuer}
                          </div>
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: 11,
                          color: isAws ? "#f59e0b" : "var(--c-subtle)",
                          fontWeight: isAws ? 700 : 400,
                          fontFamily: "'JetBrains Mono', monospace",
                          flexShrink: 0,
                        }}
                      >
                        {cert.year}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .achieve-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  );
}

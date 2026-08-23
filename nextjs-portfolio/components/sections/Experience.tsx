"use client";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

const typeColor: Record<string, string> = {
  education: "#38bdf8",
  project: "#818cf8",
  practice: "#22c55e",
};

const E = [0.22, 1, 0.36, 1] as const;
const inView = (delay = 0) => ({
  initial: { opacity: 0, x: -16 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: E, delay },
});

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: "var(--c-bg)" }}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: E }} style={{ marginBottom: 48 }}>
          <div className="label">Timeline & Milestones</div>
          <h2 className="heading">Academic & Engineering Journey</h2>
          <p className="subtext">A log of my engineering projects, computer science education, and DSA problem-solving benchmarks.</p>
        </motion.div>

        <div style={{ position: "relative", maxWidth: 840 }}>
          {/* Timeline Vertical Line */}
          <div
            style={{
              position: "absolute",
              left: 12,
              top: 12,
              bottom: 12,
              width: 2,
              background: "linear-gradient(to bottom, var(--c-accent) 0%, var(--c-purple) 60%, transparent 100%)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 28, paddingLeft: 44 }}>
            {experiences.map((exp, i) => {
              const color = typeColor[exp.type] || "var(--c-accent)";
              return (
                <motion.div key={i} {...inView(i * 0.07)} style={{ position: "relative" }}>
                  {/* Timeline Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: -48,
                      top: 20,
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: color,
                      border: "3px solid var(--c-bg)",
                      boxShadow: `0 0 10px ${color}`,
                    }}
                  />

                  <div className="card" style={{ padding: "24px", borderLeft: `3px solid ${color}` }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 6 }}>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--c-text)", letterSpacing: "-0.01em" }}>{exp.role}</h3>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "4px 12px",
                          borderRadius: 20,
                          fontFamily: "'JetBrains Mono', monospace",
                          background: `${color}15`,
                          color,
                          border: `1px solid ${color}35`,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p style={{ fontSize: 13, color: "var(--c-subtle)", marginBottom: 16, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>{exp.company}</p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--c-muted)", lineHeight: 1.65 }}>
                          <span style={{ color, flexShrink: 0, marginTop: 2, fontSize: 12 }}>▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

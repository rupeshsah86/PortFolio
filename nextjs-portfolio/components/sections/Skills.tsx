"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const E = [0.22, 1, 0.36, 1] as const;
const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: E, delay },
});

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "var(--c-bg)" }}>
      <div className="wrap">
        <motion.div {...inView(0)} style={{ marginBottom: 44 }}>
          <div className="label">Technical Stack</div>
          <h2 className="heading">Tools & Domain Expertise</h2>
          <p className="subtext">
            Technologies I use daily to build robust APIs, database engines, machine learning pipelines, and frontend applications.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="skills-grid">
          {skills.map((cat, i) => (
            <motion.div key={cat.title} {...inView(i * 0.06)} className="card" style={{ padding: "26px" }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--c-accent)",
                  fontFamily: "'JetBrains Mono', monospace",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--c-accent)" }} />
                {cat.title}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.skills.map((s) => (
                  <span key={s.name} className={s.primary ? "badge badge-accent" : "badge"}>
                    {s.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

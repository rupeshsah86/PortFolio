"use client";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import { ShieldCheck, Cpu, Code2 } from "lucide-react";
import Tilt3DCard from "@/components/ui/Tilt3DCard";

const stats = [
  { n: "5+", l: "Projects Built" },
  { n: "2000+", l: "DSA Problems" },
  { n: "3rd Year", l: "B.Tech CSE" },
  { n: "Database", l: "Query Optimization" },
];

const philosophy = [
  { icon: <Cpu size={20} color="var(--c-accent)" />, title: "Systems Thinking", text: "Designing normalized database schemas, explicit state transitions, and clear REST APIs." },
  { icon: <Code2 size={20} color="var(--c-purple)" />, title: "Maintainable Code", text: "Prioritizing clean architecture, modular components, and good developer experience." },
  { icon: <ShieldCheck size={20} color="#22c55e" />, title: "Reliability & Quality", text: "Focusing on data integrity, input validation, and proper error handling." },
];

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
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "start" }} className="about-grid">
          {/* Stats Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "sticky", top: 96 }}>
            {stats.map((s, i) => (
              <motion.div key={i} {...inView(i * 0.07)}>
                <Tilt3DCard maxRotation={8} scaleOnHover={1.02}>
                  <div className="card" style={{ padding: "20px 24px" }}>
                    <div style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6 }} className="gradient-text">
                      {s.n}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--c-subtle)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "'JetBrains Mono', monospace" }}>
                      {s.l}
                    </div>
                  </div>
                </Tilt3DCard>
              </motion.div>
            ))}
          </div>

          {/* Main Content Column */}
          <div>
            <motion.div {...inView(0)}>
              <div className="label">Engineering Philosophy</div>
              <h2 className="heading">Engineering Philosophy & Practice</h2>
            </motion.div>

            <div style={{ marginTop: 24, marginBottom: 36, display: "flex", flexDirection: "column", gap: 18 }}>
              {personal.about.map((p, i) => (
                <motion.p key={i} {...inView(0.1 + i * 0.07)} style={{ fontSize: 16, color: "var(--c-muted)", lineHeight: 1.8 }}>
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Philosophy Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="philosophy-grid">
              {philosophy.map((p, i) => (
                <motion.div key={p.title} {...inView(0.2 + i * 0.08)}>
                  <Tilt3DCard maxRotation={10} scaleOnHover={1.03}>
                    <div
                      className="card"
                      style={{ padding: "22px", display: "flex", flexDirection: "column", gap: 10, height: "100%" }}
                    >
                      <div style={{ padding: 10, borderRadius: 10, background: "var(--c-raised)", width: "fit-content" }}>
                        {p.icon}
                      </div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--c-text)" }}>{p.title}</h3>
                      <p style={{ fontSize: 13, color: "var(--c-muted)", lineHeight: 1.6 }}>{p.text}</p>
                    </div>
                  </Tilt3DCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-grid > div:first-child { position: static !important; display: grid !important; grid-template-columns: repeat(2, 1fr); }
          .philosophy-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

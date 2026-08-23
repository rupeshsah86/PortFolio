"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Layers, ArrowUpRight, ShieldCheck, Activity } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/types";
import ProjectModal from "@/components/shared/ProjectModal";

const E = [0.22, 1, 0.36, 1] as const;
const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: E, delay },
});

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const categories = ["All", "Backend & Systems", "Full Stack", "Machine Learning"];

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="section" style={{ background: "var(--c-bg)" }}>
      <div className="wrap">
        <motion.div {...inView(0)} style={{ marginBottom: 36 }}>
          <div className="label">Featured Engineering Systems</div>
          <h2 className="heading">Production-Grade Applications</h2>
          <p className="subtext">
            Architectures, ML pipelines, and backend systems I designed and engineered with explicit tradeoffs and benchmarked performance.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div {...inView(0.1)} style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 36 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                border: "1px solid",
                borderColor: filter === cat ? "var(--c-accent)" : "var(--c-border-md)",
                background: filter === cat ? "var(--c-raised)" : "var(--c-card)",
                color: filter === cat ? "var(--c-accent)" : "var(--c-muted)",
                transition: "all 0.2s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="proj-grid">
          {filteredProjects.map((p, i) => (
            <motion.div key={p.id} {...inView(i * 0.08)} layout style={{ height: "100%" }}>
              <div
                className="card project-card"
                onClick={() => setSelected(p)}
                style={{
                  cursor: "pointer",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  border: "1px solid var(--c-border-md)",
                  borderRadius: 16,
                  background: "var(--c-card)",
                  transition: "all 0.25s ease",
                }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    height: 200,
                    background: `linear-gradient(135deg, var(--c-raised) 0%, var(--c-card) 100%)`,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    flexShrink: 0,
                    borderBottom: "1px solid var(--c-border-md)",
                  }}
                >
                  {p.image && !imgErrors[p.id] ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      onError={() => setImgErrors((prev) => ({ ...prev, [p.id]: true }))}
                    />
                  ) : p.id === "datapulse" ? (
                    /* High-End DataPulse Dashboard UI Card Preview */
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, #090d16 0%, #0f172a 100%)",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        borderBottom: "1px solid var(--c-border-md)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <ShieldCheck size={18} color="#38bdf8" />
                          <span style={{ fontSize: 13, fontWeight: 800, color: "#f8fafc", fontFamily: "'JetBrains Mono', monospace" }}>DataPulse</span>
                        </div>
                        <span style={{ fontSize: 10, background: "rgba(56,189,248,0.15)", color: "#38bdf8", padding: "3px 10px", borderRadius: 12, border: "1px solid rgba(56,189,248,0.3)", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
                          Groq LLM RAG + Three.js
                        </span>
                      </div>

                      <div>
                        <div style={{ fontSize: 16, fontWeight: 800, color: "#f8fafc", lineHeight: 1.25, marginBottom: 8, letterSpacing: "-0.02em" }}>
                          Transform Crime Data Into <span style={{ color: "#38bdf8" }}>Actionable Intelligence</span>
                        </div>
                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", fontSize: 11, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>
                          <span style={{ background: "rgba(255,255,255,0.06)", padding: "2px 8px", borderRadius: 4 }}>15+ Categories</span>
                          <span style={{ background: "rgba(255,255,255,0.06)", padding: "2px 8px", borderRadius: 4 }}>1000+ Analyzed</span>
                          <span style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e", padding: "2px 8px", borderRadius: 4 }}>Live Deployed</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage:
                            "linear-gradient(var(--c-border-md) 1px, transparent 1px), linear-gradient(90deg, var(--c-border-md) 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                          opacity: 0.4,
                        }}
                      />
                      <span
                        style={{
                          position: "relative",
                          zIndex: 1,
                          fontSize: "4rem",
                          fontWeight: 800,
                          fontFamily: "'JetBrains Mono', monospace",
                          color: p.accentColor || "var(--c-accent)",
                          opacity: 0.3,
                          letterSpacing: "-0.06em",
                          userSelect: "none",
                        }}
                      >
                        {p.initials}
                      </span>
                    </>
                  )}

                  {/* Category Tag Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: "rgba(15, 23, 42, 0.85)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid var(--c-border-md)",
                      color: "var(--c-text)",
                      fontSize: 11,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 600,
                    }}
                  >
                    {p.category || "Engineering"}
                  </div>

                  {/* Overlay on hover */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(9, 13, 22, 0.85)",
                      backdropFilter: "blur(4px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.25s ease",
                    }}
                    className="proj-overlay"
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        padding: "8px 18px",
                        borderRadius: 20,
                        background: "var(--c-accent)",
                        color: "#090d16",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <Layers size={14} /> Read Case Study
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: "var(--c-text)",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.3,
                      }}
                    >
                      {p.title}
                    </h3>
                    <ArrowUpRight size={18} color="var(--c-subtle)" className="proj-arrow" />
                  </div>
                  <p style={{ fontSize: 14, color: "var(--c-muted)", lineHeight: 1.65, marginBottom: 20, flex: 1 }}>
                    {p.shortDesc}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                    {p.primaryTech.map((t) => (
                      <span key={t} className="badge badge-accent">
                        {t}
                      </span>
                    ))}
                    {p.tech
                      .filter((t) => !p.primaryTech.includes(t))
                      .slice(0, 3)
                      .map((t) => (
                        <span key={t} className="badge">
                          {t}
                        </span>
                      ))}
                  </div>

                  <div style={{ display: "flex", gap: 10 }} onClick={(e) => e.stopPropagation()}>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ fontSize: 13, padding: "8px 14px", flex: 1, justifyContent: "center" }}
                    >
                      <GithubIcon size={14} /> Repository
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ fontSize: 13, padding: "8px 14px", flex: 1, justifyContent: "center" }}
                      >
                        <ExternalLink size={14} /> Live System
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />

      <style>{`
        .project-card:hover {
          transform: translateY(-4px);
          border-color: var(--c-border-hi) !important;
          box-shadow: 0 16px 36px -12px rgba(0,0,0,0.6);
        }
        .project-card:hover .proj-overlay { opacity: 1 !important; }
        .project-card:hover .proj-arrow { color: var(--c-accent) !important; }
        @media (max-width: 768px) { .proj-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

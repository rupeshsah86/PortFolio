"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/types";
import ProjectModal from "@/components/shared/ProjectModal";
import Tilt3DCard from "@/components/ui/Tilt3DCard";

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

  const categories = ["All", "Full Stack", "Backend & ML", "Systems"];

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Full Stack") return p.tech.includes("React") || p.tech.includes("Next.js");
    if (filter === "Backend & ML") return p.tech.includes("Python") || p.tech.includes("Node.js") || p.tech.includes("Flask");
    if (filter === "Systems") return p.tech.includes("Docker") || p.tech.includes("PostgreSQL") || p.tech.includes("Redis");
    return true;
  });

  return (
    <section id="projects" className="section" style={{ background: "var(--c-bg)" }}>
      <div className="wrap">
        <motion.div {...inView(0)} style={{ marginBottom: 36 }}>
          <div className="label">Featured Engineering Projects</div>
          <h2 className="heading">Production-Grade Applications</h2>
          <p className="subtext">
            End-to-end architectures I designed, engineered, and optimized for performance and scale.
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
                borderRadius: 30,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                border: "1px solid",
                borderColor: filter === cat ? "var(--c-accent)" : "var(--c-border)",
                background: filter === cat ? "var(--c-accent)15" : "var(--c-card)",
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
              <Tilt3DCard onClick={() => setSelected(p)} maxRotation={10} scaleOnHover={1.02}>
                <div
                  className="card"
                  style={{ overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}
                >
                {/* Thumbnail */}
                <div
                  style={{
                    height: 180,
                    background: `linear-gradient(135deg, var(--c-raised) 0%, var(--c-card) 100%)`,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  ) : (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage:
                            "linear-gradient(var(--c-border) 1px, transparent 1px), linear-gradient(90deg, var(--c-border) 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                          opacity: 0.5,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: `radial-gradient(circle at 50% 50%, ${p.accentColor}20 0%, transparent 70%)`,
                        }}
                      />
                      <span
                        style={{
                          position: "relative",
                          zIndex: 1,
                          fontSize: "4.5rem",
                          fontWeight: 800,
                          fontFamily: "'JetBrains Mono',monospace",
                          color: p.accentColor,
                          opacity: 0.3,
                          letterSpacing: "-0.06em",
                          userSelect: "none",
                        }}
                      >
                        {p.initials}
                      </span>
                    </>
                  )}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(7, 11, 23, 0.75)",
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
                        color: "#070b17",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <Layers size={14} /> Explore Case Study
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--c-text)",
                      marginBottom: 8,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--c-muted)", lineHeight: 1.65, marginBottom: 18, flex: 1 }}>
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
                      <GithubIcon size={14} /> GitHub
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{ fontSize: 13, padding: "8px 14px", flex: 1, justifyContent: "center" }}
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />

      <style>{`
        .card:hover .proj-overlay { opacity: 1 !important; }
        @media (max-width: 768px) { .proj-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

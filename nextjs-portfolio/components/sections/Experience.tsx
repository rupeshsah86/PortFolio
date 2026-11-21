"use client";

import { motion } from "framer-motion";
import { professionalExperiences } from "@/lib/data";
import { GitPullRequest, GitMerge, ExternalLink, Briefcase, CheckCircle2 } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;
const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: E, delay },
});

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: "var(--c-bg)" }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: E }}
          style={{ marginBottom: 44 }}
        >
          <div className="label">Hands-on Engineering</div>
          <h2 className="heading">Professional Experience & Open Source</h2>
          <p className="subtext">
            Contributions to enterprise open-source codebases, production bug fixes, and full-stack software development.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 940 }}>
          {professionalExperiences.map((exp, i) => {
            const isOpensource = exp.type === "opensource";
            const accentColor = isOpensource ? "var(--c-accent)" : "var(--c-green)";

            return (
              <motion.div key={exp.organization} {...inView(i * 0.08)}>
                <div
                  className="card"
                  style={{
                    padding: "28px",
                    borderLeft: `4px solid ${accentColor}`,
                    background: "var(--c-card)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  {/* Top Bar: Title, Org, Date, Badges */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 12,
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                        <h3 style={{ fontSize: 18, fontWeight: 800, color: "var(--c-text)", letterSpacing: "-0.01em" }}>
                          {exp.role}
                        </h3>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            padding: "3px 10px",
                            borderRadius: 14,
                            fontFamily: "'JetBrains Mono', monospace",
                            background: isOpensource ? "var(--c-glow)" : "rgba(34, 197, 94, 0.12)",
                            color: accentColor,
                            border: `1px solid ${accentColor}40`,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 5,
                          }}
                        >
                          {isOpensource ? <GitMerge size={12} /> : <Briefcase size={12} />}
                          {isOpensource ? "Open Source Contribution" : "Internship"}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: "var(--c-subtle)",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {exp.organization}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          padding: "4px 12px",
                          borderRadius: 20,
                          fontFamily: "'JetBrains Mono', monospace",
                          background: "var(--c-raised)",
                          color: "var(--c-text)",
                          border: "1px solid var(--c-border)",
                        }}
                      >
                        {exp.period}
                      </span>

                      {exp.repoUrl && (
                        <a
                          href={exp.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Repository for ${exp.organization}`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            fontSize: 12,
                            fontWeight: 600,
                            color: "var(--c-accent)",
                            textDecoration: "none",
                            padding: "4px 12px",
                            borderRadius: 20,
                            background: "var(--c-raised)",
                            border: "1px solid var(--c-border-md)",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "var(--c-accent)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "var(--c-border-md)";
                          }}
                        >
                          <GitPullRequest size={13} />
                          <span>Repository</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--c-text)",
                      lineHeight: 1.65,
                      fontWeight: 500,
                    }}
                  >
                    &ldquo;{exp.description}&rdquo;
                  </p>

                  {/* Specific Highlight Bullets */}
                  <ul style={{ display: "flex", flexDirection: "column", gap: 8, paddingLeft: 0, listStyle: "none" }}>
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontSize: 13,
                          color: "var(--c-muted)",
                          lineHeight: 1.6,
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          color={accentColor}
                          style={{ flexShrink: 0, marginTop: 3 }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pull Request Badges & Key Tags */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 10,
                      paddingTop: 10,
                      borderTop: "1px solid var(--c-border)",
                    }}
                  >
                    {/* Key Technical Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {exp.keyTags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: 11,
                            padding: "3px 8px",
                            borderRadius: 4,
                            background: "var(--c-raised)",
                            color: "var(--c-subtle)",
                            fontFamily: "'JetBrains Mono', monospace",
                            border: "1px solid var(--c-border)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Pull Request chips if any */}
                    {exp.pullRequests && (
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        {exp.pullRequests.map((pr) => (
                          <span
                            key={pr}
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              fontFamily: "'JetBrains Mono', monospace",
                              color: "var(--c-accent)",
                              background: "var(--c-glow)",
                              border: "1px solid var(--c-border-md)",
                              padding: "2px 8px",
                              borderRadius: 4,
                            }}
                          >
                            {pr}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

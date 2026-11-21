"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";

const E = [0.22, 1, 0.36, 1] as const;
const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: E, delay },
});

export default function Blog() {
  return (
    <section
      id="writing"
      className="section"
      style={{
        background: "var(--c-bg)",
        borderTop: "1px solid var(--c-border)",
      }}
    >
      <div className="wrap">
        <motion.div {...inView(0)} style={{ marginBottom: 44 }}>
          <div className="label">Technical Writing & Case Studies</div>
          <h2 className="heading">Engineering Notes & Deep Dives</h2>
          <p className="subtext">
            Planned and upcoming technical breakdowns on database indexing, backend state machines, and algorithmic intuition.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
          className="blog-grid"
        >
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              {...inView(i * 0.08)}
              className="card"
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                border: "1px solid var(--c-border)",
              }}
            >
              <div>
                {/* Status chip */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 14,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: "var(--c-accent)",
                      background: "var(--c-glow)",
                      border: "1px solid var(--c-border-md)",
                      fontFamily: "'JetBrains Mono', monospace",
                      padding: "3px 8px",
                      borderRadius: 12,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {post.date}
                  </span>

                  <span
                    style={{
                      fontSize: 11,
                      color: "var(--c-subtle)",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--c-text)",
                    lineHeight: 1.4,
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--c-muted)",
                    lineHeight: 1.65,
                    marginBottom: 20,
                  }}
                >
                  {post.excerpt}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 14, borderTop: "1px solid var(--c-border)" }}>
                {post.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 11,
                      padding: "2px 8px",
                      borderRadius: 4,
                      background: "var(--c-raised)",
                      color: "var(--c-subtle)",
                      fontFamily: "'JetBrains Mono', monospace",
                      border: "1px solid var(--c-border)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

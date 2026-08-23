"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Cpu, Database, Server, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/lib/data";
import Tilt3DCard from "@/components/ui/Tilt3DCard";

const E = [0.22, 1, 0.36, 1] as const;
const up = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: E, delay },
});

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const metrics = [
    { label: "Production Systems", value: "5+", icon: <Server size={14} /> },
    { label: "Algorithmic Problems", value: "100+", icon: <Cpu size={14} /> },
    { label: "Query Optimizations", value: "<100ms", icon: <Database size={14} /> },
  ];

  const floatingBadges = [
    { label: "⚡ Next.js 16", top: "-14px", right: "-16px", color: "#38bdf8", z: "50px", delay: 0 },
    { label: "🤖 Groq LLM", top: "45%", right: "-24px", color: "#818cf8", z: "60px", delay: 1 },
    { label: "🟢 Spring Boot", bottom: "30px", left: "-24px", color: "#22c55e", z: "55px", delay: 2 },
    { label: "🗄️ Postgres 17", top: "20px", left: "-20px", color: "#f59e0b", z: "45px", delay: 1.5 },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 80,
        paddingBottom: 60,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 3D Grid Perspective Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          backgroundImage: "linear-gradient(var(--c-border-md) 1px, transparent 1px), linear-gradient(90deg, var(--c-border-md) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 35%, black 40%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* 3D Floating Ambient Orbs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,140,248,0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 56,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column */}
          <div>
            {/* Status Pill */}
            <motion.div
              {...up(0.1)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 20,
                border: "1px solid var(--c-border-hi)",
                background: "var(--c-raised)",
                color: "var(--c-text)",
                fontSize: 12,
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
                marginBottom: 24,
              }}
              className="hero-badge"
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  display: "block",
                  boxShadow: "0 0 8px rgba(34, 197, 94, 0.6)",
                }}
              />
              Available for Full-Stack & Engineering Roles
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...up(0.16)}
              style={{
                fontSize: "clamp(2.5rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--c-text)",
                marginBottom: 20,
              }}
            >
              Architecting scalable <br />
              <span className="gradient-text">full-stack systems.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...up(0.22)}
              style={{
                fontSize: 17,
                color: "var(--c-muted)",
                lineHeight: 1.7,
                marginBottom: 32,
                maxWidth: 520,
              }}
            >
              {personal.subheadline} Focused on backend scalability, ACID compliance, optimized database schemas, and clean frontend engineering.
            </motion.p>

            {/* Key Engineering Metrics */}
            <motion.div
              {...up(0.28)}
              style={{
                display: "flex",
                gap: 24,
                marginBottom: 36,
                padding: "16px 20px",
                borderRadius: 14,
                border: "1px solid var(--c-border-md)",
                background: "var(--c-card)",
                maxWidth: 520,
              }}
            >
              {metrics.map((m) => (
                <div key={m.label} style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--c-accent)", fontSize: 12, fontWeight: 600, marginBottom: 4 }}>
                    {m.icon}
                    <span>{m.value}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--c-subtle)", fontWeight: 500 }}>{m.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...up(0.34)} style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 32 }} className="hero-buttons">
              <button className="btn-primary" onClick={() => go("projects")}>
                Explore Featured Systems <ArrowRight size={15} />
              </button>
              <a href={personal.resumeUrl} download target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Download size={14} /> Download Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div {...up(0.4)} style={{ display: "flex", gap: 10, alignItems: "center" }} className="hero-social">
              <span style={{ fontSize: 12, color: "var(--c-subtle)", marginRight: 6, fontFamily: "'JetBrains Mono', monospace" }}>CONNECT:</span>
              {[
                { href: personal.github, icon: <GithubIcon size={16} />, label: "GitHub" },
                { href: personal.linkedin, icon: <LinkedinIcon size={16} />, label: "LinkedIn" },
                { href: personal.twitter, icon: <TwitterIcon size={16} />, label: "Twitter" },
                { href: `mailto:${personal.email}`, icon: <MailIcon size={16} />, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 8,
                    border: "1px solid var(--c-border-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--c-subtle)",
                    textDecoration: "none",
                    background: "var(--c-card)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--c-accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--c-accent)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--c-border-md)";
                    (e.currentTarget as HTMLElement).style.color = "var(--c-subtle)";
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Interactive 3D Card Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: E, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}
          >
            <Tilt3DCard maxRotation={15} scaleOnHover={1.03}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "center", position: "relative", padding: "10px 0" }}>
                {/* 3D Depth Floating Tech Badges */}
                {floatingBadges.map((b) => (
                  <div
                    key={b.label}
                    style={{
                      position: "absolute",
                      top: (b as any).top,
                      bottom: (b as any).bottom,
                      right: (b as any).right,
                      left: (b as any).left,
                      transform: `translateZ(${b.z})`,
                      background: "rgba(15, 23, 42, 0.85)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: `1px solid ${b.color}50`,
                      padding: "6px 14px",
                      borderRadius: 10,
                      fontSize: 12,
                      fontWeight: 700,
                      color: b.color,
                      fontFamily: "'JetBrains Mono', monospace",
                      boxShadow: `0 10px 25px -5px rgba(0,0,0,0.6), 0 0 15px ${b.color}25`,
                      zIndex: 12,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {b.label}
                  </div>
                ))}

                {/* Profile Frame with 3D Border Glow */}
                <div
                  style={{
                    position: "relative",
                    width: 290,
                    height: 290,
                    borderRadius: 20,
                    padding: 6,
                    background: "linear-gradient(135deg, var(--c-accent) 0%, var(--c-purple) 100%)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.2)",
                    transform: "translateZ(30px)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      borderRadius: 14,
                      overflow: "hidden",
                      background: "var(--c-raised)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {!imgError ? (
                      <Image
                        src="/images/profile.png"
                        alt="Rupesh Kumar"
                        fill
                        priority
                        sizes="290px"
                        style={{ objectFit: "cover", objectPosition: "center top" }}
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

                {/* Sleek Terminal / Architectural Preview Box with 3D depth */}
                <div
                  style={{
                    width: "100%",
                    maxWidth: 320,
                    padding: "16px 20px",
                    borderRadius: 14,
                    border: "1px solid var(--c-border-hi)",
                    background: "rgba(15, 23, 42, 0.8)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    lineHeight: 1.6,
                    color: "var(--c-subtle)",
                    boxShadow: "0 15px 35px -10px rgba(0,0,0,0.6)",
                    transform: "translateZ(40px)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--c-muted)" }}>
                      <Terminal size={14} color="var(--c-accent)" />
                      <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>System Spec</span>
                    </div>
                    <span style={{ fontSize: 10, background: "rgba(34,197,94,0.15)", color: "#22c55e", padding: "2px 8px", borderRadius: 4 }}>Active</span>
                  </div>
                  <div style={{ color: "var(--c-text)" }}>
                    <span style={{ color: "var(--c-accent)" }}>const</span> engineer = &#123;
                  </div>
                  <div style={{ paddingLeft: 12 }}>
                    focus: <span style={{ color: "#22c55e" }}>"Scalable Backends & ML"</span>,<br />
                    stack: <span style={{ color: "#22c55e" }}>["Next.js", "Spring Boot"]</span>,<br />
                    architecture: <span style={{ color: "#22c55e" }}>["ACID", "3D WebGL"]</span>
                  </div>
                  <div style={{ color: "var(--c-text)" }}>&#125;;</div>
                </div>
              </div>
            </Tilt3DCard>
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
          .hero-grid > div:last-child { order: -1; }
          .hero-social, .hero-buttons, .hero-badge { justify-content: center; }
          .hero-grid > div:first-child > div { margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </section>
  );
}

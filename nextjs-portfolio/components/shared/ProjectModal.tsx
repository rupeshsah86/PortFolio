"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Cpu, Wrench, AlertTriangle, Trophy, Lightbulb } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { Project } from "@/lib/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
        }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(7, 11, 23, 0.85)",
            backdropFilter: "blur(12px)",
          }}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          style={{
            position: "relative",
            zIndex: 101,
            width: "100%",
            maxWidth: 720,
            maxHeight: "85vh",
            overflowY: "auto",
            background: "var(--c-bg)",
            border: "1px solid var(--c-border-hi)",
            borderRadius: 24,
            padding: 32,
            boxShadow: `0 20px 50px ${project.accentColor}25, 0 10px 30px rgba(0,0,0,0.5)`,
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "var(--c-raised)",
              border: "1px solid var(--c-border)",
              color: "var(--c-muted)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: `linear-gradient(135deg, ${project.accentColor}40, ${project.accentColor}10)`,
                border: `1px solid ${project.accentColor}60`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                color: project.accentColor,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {project.initials}
            </div>
            <div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "var(--c-text)", margin: 0 }}>
                {project.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--c-muted)", margin: 0, marginTop: 4 }}>
                {project.shortDesc}
              </p>
            </div>
          </div>

          {/* Tech Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "4px 12px",
                  borderRadius: 20,
                  background: "var(--c-raised)",
                  color: project.primaryTech.includes(t) ? project.accentColor : "var(--c-muted)",
                  border: `1px solid ${
                    project.primaryTech.includes(t) ? `${project.accentColor}40` : "var(--c-border)"
                  }`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Case Study Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 28 }}>
            {/* Problem */}
            <div className="card" style={{ padding: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#f87171", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                <AlertTriangle size={16} /> The Problem
              </div>
              <p style={{ fontSize: 14, color: "var(--c-text)", lineHeight: 1.6 }}>{project.problem}</p>
            </div>

            {/* Approach */}
            <div className="card" style={{ padding: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: project.accentColor, fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                <Wrench size={16} /> Architectural Approach
              </div>
              <p style={{ fontSize: 14, color: "var(--c-text)", lineHeight: 1.6 }}>{project.approach}</p>
            </div>

            {/* Key Challenges */}
            <div className="card" style={{ padding: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fbbf24", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                <Cpu size={16} /> Key Challenges Solved
              </div>
              <p style={{ fontSize: 14, color: "var(--c-text)", lineHeight: 1.6 }}>{project.challenges}</p>
            </div>

            {/* Results & Impact */}
            <div className="card" style={{ padding: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--c-green)", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                <Trophy size={16} /> Results & Impact
              </div>
              <p style={{ fontSize: 14, color: "var(--c-text)", lineHeight: 1.6 }}>{project.results}</p>
            </div>

            {/* Key Learnings */}
            <div className="card" style={{ padding: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--c-purple)", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                <Lightbulb size={16} /> Key Engineering Takeaways
              </div>
              <p style={{ fontSize: 14, color: "var(--c-text)", lineHeight: 1.6 }}>{project.learnings}</p>
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: "flex", gap: 12 }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ flex: 1, justifyContent: "center" }}
            >
              <GithubIcon size={16} /> View Source Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, justifyContent: "center" }}
              >
                <ExternalLink size={16} /> Live Application
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

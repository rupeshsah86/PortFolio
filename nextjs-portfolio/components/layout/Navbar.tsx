"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { personal } from "@/lib/data";

const links = ["About", "Projects", "Skills", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs = links.map((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (!el) return null;
      const o = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setActive(l.toLowerCase());
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o?.disconnect());
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? "var(--c-card)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--c-border)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div
          className="wrap"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 800,
              fontSize: 18,
              color: "var(--c-text)",
              cursor: "pointer",
              border: "none",
              background: "none",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span style={{ color: "var(--c-accent)" }}>//</span> RUPESH
          </button>

          {/* Desktop Nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "4px 6px",
              borderRadius: 30,
              background: scrolled ? "var(--c-raised)" : "rgba(15, 23, 42, 0.4)",
              border: "1px solid var(--c-border)",
            }}
            className="hidden md:flex"
          >
            {links.map((l) => {
              const isActive = active === l.toLowerCase();
              return (
                <button
                  key={l}
                  onClick={() => go(l.toLowerCase())}
                  style={{
                    padding: "6px 16px",
                    borderRadius: 20,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "none",
                    background: isActive ? "var(--c-accent)" : "transparent",
                    color: isActive ? "#090d16" : "var(--c-muted)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = "var(--c-text)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = "var(--c-muted)";
                    }
                  }}
                >
                  {l}
                </button>
              );
            })}
          </nav>

          {/* Right Section */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="hidden md:flex">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  border: "1px solid var(--c-border)",
                  background: "var(--c-raised)",
                  color: "var(--c-text)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            <a
              href={personal.resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "8px 16px", fontSize: 13, borderRadius: 8 }}
            >
              <Download size={13} /> Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              background: "var(--c-raised)",
              border: "1px solid var(--c-border)",
              color: "var(--c-text)",
              cursor: "pointer",
              padding: 8,
              borderRadius: 8,
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 68,
              left: 0,
              right: 0,
              zIndex: 40,
              background: "var(--c-bg)",
              borderBottom: "1px solid var(--c-border)",
              padding: "16px 0",
            }}
          >
            <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {links.map((l, i) => (
                <motion.button
                  key={l}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => go(l.toLowerCase())}
                  style={{
                    textAlign: "left",
                    padding: "12px 16px",
                    borderRadius: 8,
                    fontSize: 15,
                    fontWeight: 600,
                    color: active === l.toLowerCase() ? "var(--c-accent)" : "var(--c-text)",
                    background: active === l.toLowerCase() ? "var(--c-raised)" : "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {l}
                </motion.button>
              ))}
              <div style={{ padding: "8px 16px" }}>
                <a
                  href={personal.resumeUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <Download size={14} /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

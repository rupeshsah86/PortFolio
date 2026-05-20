"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { personal } from "@/lib/data";

const links = ["About","Projects","Skills","Experience","Contact"];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [active, setActive]       = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs = links.map((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (!el) return null;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(l.toLowerCase()); },
        { rootMargin: "-40% 0px -55% 0px" }
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
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--c-border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
        <div className="wrap" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
          {/* Logo */}
          <button onClick={() => window.scrollTo({top:0,behavior:"smooth"})}
            style={{ fontFamily:"'JetBrains Mono',monospace", fontWeight:700, fontSize:18, background:"linear-gradient(135deg,#fff,#4d9ef7)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", cursor:"pointer", border:"none" }}>
            RUPESH.
          </button>

          {/* Desktop nav */}
          <nav style={{ display:"flex", gap:4 }} className="hidden md:flex">
            {links.map((l) => (
              <button key={l} onClick={() => go(l.toLowerCase())}
                style={{
                  padding:"6px 14px", borderRadius:8, fontSize:14, fontWeight:500, cursor:"pointer", border:"none",
                  background: active===l.toLowerCase() ? "var(--c-raised)" : "transparent",
                  color: active===l.toLowerCase() ? "var(--c-text)" : "var(--c-muted)",
                  transition:"all 0.2s",
                }}
                onMouseEnter={e => { if(active!==l.toLowerCase()) { (e.target as HTMLElement).style.color="var(--c-text)"; (e.target as HTMLElement).style.background="var(--c-raised)"; }}}
                onMouseLeave={e => { if(active!==l.toLowerCase()) { (e.target as HTMLElement).style.color="var(--c-muted)"; (e.target as HTMLElement).style.background="transparent"; }}}
              >{l}</button>
            ))}
          </nav>

          {/* Right */}
          <div style={{ display:"flex", alignItems:"center", gap:12 }} className="hidden md:flex">
            <div style={{ display:"flex", alignItems:"center", gap:6, padding:"5px 12px", borderRadius:999, border:"1px solid rgba(34,197,94,0.3)", background:"rgba(34,197,94,0.06)", color:"var(--c-green)", fontSize:12, fontWeight:500 }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--c-green)", animation:"pulse 2s ease-in-out infinite", display:"block" }} />
              Open to work
            </div>
            <a href={personal.resumeUrl} download target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding:"6px 14px", fontSize:13 }}>
              <Download size={13} /> Resume
            </a>
          </div>

          {/* Hamburger */}
          <button className="md:hidden" onClick={() => setOpen(!open)}
            style={{ background:"none", border:"none", color:"var(--c-muted)", cursor:"pointer", padding:4 }}>
            {open ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:0.2}}
            style={{ position:"fixed", top:64, left:0, right:0, zIndex:40, background:"rgba(10,10,10,0.97)", backdropFilter:"blur(16px)", borderBottom:"1px solid var(--c-border)", padding:"12px 0" }}>
            <div className="wrap" style={{ display:"flex", flexDirection:"column", gap:4 }}>
              {links.map((l,i) => (
                <motion.button key={l} initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}} transition={{delay:i*0.05}}
                  onClick={() => go(l.toLowerCase())}
                  style={{ textAlign:"left", padding:"12px 16px", borderRadius:8, fontSize:15, fontWeight:500, color:"var(--c-muted)", background:"none", border:"none", cursor:"pointer" }}>
                  {l}
                </motion.button>
              ))}
              <motion.div initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}} transition={{delay:links.length*0.05}}
                style={{ padding:"8px 16px" }}>
                <a href={personal.resumeUrl} download target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ width:"100%", justifyContent:"center" }}>
                  <Download size={13}/> Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

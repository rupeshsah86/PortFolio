"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/lib/data";

const E = [0.22, 1, 0.36, 1] as const;
const up = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: E, delay },
});

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" style={{ minHeight:"100vh", display:"flex", alignItems:"center", paddingTop:64, position:"relative", overflow:"hidden" }}>

      {/* Subtle dot grid */}
      <div style={{
        position:"absolute", inset:0, opacity:0.35,
        backgroundImage:"radial-gradient(circle, #333 1px, transparent 1px)",
        backgroundSize:"32px 32px",
        maskImage:"radial-gradient(ellipse 70% 70% at 50% 40%, black 30%, transparent 100%)",
      }}/>

      {/* Glow */}
      <div style={{ position:"absolute", top:"15%", right:"5%", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(77,158,247,0.1) 0%, transparent 70%)", filter:"blur(60px)", pointerEvents:"none", animation:"float 10s ease-in-out infinite" }}/>

      <div className="wrap" style={{ position:"relative", zIndex:1, width:"100%" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center", minHeight:"calc(100vh - 64px)", padding:"64px 0" }}
          className="hero-grid">

          {/* Left */}
          <div>
            <motion.div {...up(0.1)} style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"5px 14px", borderRadius:999, border:"1px solid var(--c-border-md)", background:"var(--c-card)", color:"var(--c-subtle)", fontSize:12, fontFamily:"'JetBrains Mono',monospace", marginBottom:28 }} className="hero-badge">
              <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--c-accent)", display:"block", animation:"pulse 2s ease-in-out infinite" }}/>
              &lt; available for internships &amp; roles /&gt;
            </motion.div>

            <motion.h1 {...up(0.18)} style={{ fontSize:"clamp(2.6rem,5vw,4rem)", fontWeight:800, lineHeight:1.08, letterSpacing:"-0.04em", color:"var(--c-text)", marginBottom:20 }}>
              I build systems<br/>that <span className="gradient-text">scale.</span>
            </motion.h1>

            <motion.p {...up(0.26)} style={{ fontSize:17, color:"var(--c-muted)", lineHeight:1.75, marginBottom:36, maxWidth:460 }}>
              {personal.subheadline}
            </motion.p>

            <motion.div {...up(0.34)} style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:36 }} className="hero-buttons">
              <button className="btn-primary" onClick={() => go("projects")}>
                View My Work <ArrowRight size={15}/>
              </button>
              <a href={personal.resumeUrl} download target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Download size={14}/> Resume
              </a>
            </motion.div>

            <motion.div {...up(0.42)} style={{ display:"flex", gap:10 }} className="hero-social">
              {[
                { href: personal.github,   icon: <GithubIcon size={16}/>,   label:"GitHub" },
                { href: personal.linkedin, icon: <LinkedinIcon size={16}/>, label:"LinkedIn" },
                { href: personal.twitter,  icon: <TwitterIcon size={16}/>,  label:"Twitter" },
                { href:`mailto:${personal.email}`, icon:<MailIcon size={16}/>, label:"Email" },
              ].map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith("mailto")?undefined:"_blank"} rel="noopener noreferrer" aria-label={s.label}
                  style={{ width:38, height:38, borderRadius:8, border:"1px solid var(--c-border-md)", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--c-subtle)", textDecoration:"none", transition:"all 0.2s" }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--c-accent)";(e.currentTarget as HTMLElement).style.color="var(--c-accent)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--c-border-md)";(e.currentTarget as HTMLElement).style.color="var(--c-subtle)";}}>
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — profile */}
          <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} transition={{duration:0.7,ease:E,delay:0.3}}
            style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
            <div style={{ position:"relative" }} className="hero-profile-wrap">
              {/* Spinning gradient ring */}
              <div style={{ position:"absolute", inset:-3, borderRadius:"50%", background:"conic-gradient(from 0deg, #4d9ef7, #00d4ff, #4d9ef7)", animation:"spin 8s linear infinite" }}/>
              {/* Glow */}
              <div style={{ position:"absolute", inset:-24, borderRadius:"50%", background:"radial-gradient(circle, rgba(77,158,247,0.15) 0%, transparent 70%)", pointerEvents:"none" }}/>
              {/* Image */}
              <div style={{ position:"relative", width:280, height:280, borderRadius:"50%", overflow:"hidden", border:"3px solid var(--c-bg)", background:"var(--c-raised)", display:"flex", alignItems:"center", justifyContent:"center" }} className="hero-profile">
                {!imgError ? (
                  <Image
                    src="/images/rupesh.jpeg"
                    alt="Rupesh Kumar"
                    fill
                    priority
                    sizes="280px"
                    style={{ objectFit:"cover", objectPosition:"center top" }}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'JetBrains Mono',monospace", fontWeight:800, fontSize:"1.8rem", letterSpacing:"-0.04em", color:"var(--c-accent)" }}>RUPESH</div>
                )}
              </div>
              {/* Floating badges */}
              {[
                { label:"⚛ React",       top:"8%",   right:"-20px", cls:"hero-badge-1" },
                { label:"🟦 TypeScript", bottom:"20%", right:"-28px", cls:"hero-badge-2" },
                { label:"🟢 Node.js",    bottom:"8%",  left:"-20px",  cls:"hero-badge-3" },
                { label:"🐍 Python",     top:"20%",    left:"-28px",  cls:"hero-badge-4" },
              ].map((b,i) => (
                <div key={b.label} className={b.cls} style={{ position:"absolute", top:b.top, bottom:(b as any).bottom, right:(b as any).right, left:(b as any).left, padding:"5px 12px", borderRadius:8, background:"var(--c-card)", border:"1px solid var(--c-border-md)", fontSize:12, fontWeight:600, color:"var(--c-muted)", whiteSpace:"nowrap", animation:`float 6s ease-in-out ${i*1.5}s infinite` }}>
                  {b.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}
        style={{ position:"absolute", bottom:28, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6, color:"var(--c-subtle)" }}>
        <span style={{ fontSize:10, fontFamily:"'JetBrains Mono',monospace", letterSpacing:"0.1em", textTransform:"uppercase" }}>scroll</span>
        <div style={{ width:14, height:14, borderRight:"1.5px solid var(--c-subtle)", borderBottom:"1.5px solid var(--c-subtle)", animation:"bounce 1.5s ease-in-out infinite" }}/>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
            padding: 32px 0 !important;
            min-height: unset !important;
          }
          .hero-grid > div:last-child { order: -1; }
          .hero-social { justify-content: center; }
          .hero-buttons { justify-content: center; }
          .hero-badge { justify-content: center; }
          .hero-profile { width: 220px !important; height: 220px !important; }
          .hero-badge-1 { right: -8px !important; font-size: 11px !important; padding: 4px 8px !important; }
          .hero-badge-2 { right: -8px !important; font-size: 11px !important; padding: 4px 8px !important; }
          .hero-badge-3 { left: -8px !important; font-size: 11px !important; padding: 4px 8px !important; }
          .hero-badge-4 { left: -8px !important; font-size: 11px !important; padding: 4px 8px !important; }
        }
        @media (max-width: 480px) {
          .hero-profile { width: 180px !important; height: 180px !important; }
          .hero-badge-1, .hero-badge-2, .hero-badge-3, .hero-badge-4 { display: none !important; }
          .hero-grid { gap: 28px !important; }
        }
      `}</style>
    </section>
  );
}

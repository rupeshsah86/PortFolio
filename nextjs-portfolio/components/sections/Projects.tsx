"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/types";

const E = [0.22, 1, 0.36, 1] as const;
const inView = (delay=0) => ({
  initial:{opacity:0,y:20},
  whileInView:{opacity:1,y:0},
  viewport:{once:true},
  transition:{duration:0.5,ease:E,delay},
});

function Modal({ p, onClose }: { p: Project; onClose: ()=>void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if(e.key==="Escape") onClose(); };
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [onClose]);

  const sections = [
    { label:"Problem",              text: p.problem },
    { label:"Approach",             text: p.approach },
    { label:"Technical Challenges", text: p.challenges },
    { label:"Results",              text: p.results },
    { label:"Learnings",            text: p.learnings },
  ];

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
      onClick={onClose}
      style={{ position:"fixed", inset:0, zIndex:100, background:"rgba(0,0,0,0.8)", backdropFilter:"blur(8px)", display:"flex", alignItems:"center", justifyContent:"center", padding:24 }}>
      <motion.div initial={{opacity:0,y:20,scale:0.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:20,scale:0.97}} transition={{duration:0.25,ease:[0.22,1,0.36,1]}}
        onClick={e=>e.stopPropagation()}
        style={{ background:"var(--c-card)", border:"1px solid var(--c-border-md)", borderRadius:16, width:"100%", maxWidth:680, maxHeight:"88vh", overflowY:"auto" }}>

        {/* Header */}
        <div style={{ padding:"28px 28px 0", display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:16 }}>
          <div>
            <h2 style={{ fontSize:"1.3rem", fontWeight:700, color:"var(--c-text)", letterSpacing:"-0.02em", marginBottom:6 }}>{p.title}</h2>
            <p style={{ fontSize:14, color:"var(--c-muted)" }}>{p.shortDesc}</p>
          </div>
          <button onClick={onClose} style={{ width:32, height:32, borderRadius:8, border:"1px solid var(--c-border-md)", background:"none", color:"var(--c-muted)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <X size={16}/>
          </button>
        </div>

        {/* Body */}
        <div style={{ padding:"24px 28px 28px", display:"flex", flexDirection:"column", gap:20 }}>
          {sections.map(s => (
            <div key={s.label}>
              <div style={{ fontSize:11, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--c-accent)", fontFamily:"'JetBrains Mono',monospace", marginBottom:8 }}>{s.label}</div>
              <p style={{ fontSize:14, color:"var(--c-muted)", lineHeight:1.75 }}>{s.text}</p>
            </div>
          ))}

          <div>
            <div style={{ fontSize:11, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--c-accent)", fontFamily:"'JetBrains Mono',monospace", marginBottom:10 }}>Tech Stack</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
              {p.tech.map(t => (
                <span key={t} className={p.primaryTech.includes(t) ? "badge badge-accent" : "badge"}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ display:"flex", gap:10, paddingTop:20, borderTop:"1px solid var(--c-border)" }}>
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize:13, padding:"8px 16px" }}>
              <GithubIcon size={14}/> View Code
            </a>
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize:13, padding:"8px 16px" }}>
                <ExternalLink size={14}/> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project|null>(null);

  return (
    <section id="projects" className="section" style={{ background:"var(--c-bg)" }}>
      <div className="wrap">
        <motion.div {...inView(0)} style={{ marginBottom:48 }}>
          <div className="label">Featured Projects</div>
          <h2 className="heading">Things I've built</h2>
          <p className="subtext">Projects where I owned the architecture, implementation, and delivery end-to-end.</p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:20 }} className="proj-grid">
          {projects.map((p,i) => (
            <motion.div key={p.id} {...inView(i*0.08)}>
              <motion.div className="card" whileHover={{y:-4}} transition={{duration:0.2}}
                onClick={() => setSelected(p)}
                style={{ cursor:"pointer", overflow:"hidden", display:"flex", flexDirection:"column" }}>

                {/* Thumbnail */}
                <div style={{ height:160, background:`linear-gradient(135deg, var(--c-raised) 0%, var(--c-card) 100%)`, position:"relative", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
                  {p.image ? (
                    <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit:"cover", objectPosition:"top" }}/>
                  ) : (
                    <>
                      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(var(--c-border) 1px, transparent 1px), linear-gradient(90deg, var(--c-border) 1px, transparent 1px)", backgroundSize:"24px 24px", opacity:0.5 }}/>
                      <div style={{ position:"absolute", inset:0, background:`radial-gradient(circle at 50% 50%, ${p.accentColor}15 0%, transparent 70%)` }}/>
                      <span style={{ position:"relative", zIndex:1, fontSize:"4rem", fontWeight:800, fontFamily:"'JetBrains Mono',monospace", color:p.accentColor, opacity:0.25, letterSpacing:"-0.06em", userSelect:"none" }}>{p.initials}</span>
                    </>
                  )}
                  <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.6)", display:"flex", alignItems:"center", justifyContent:"center", opacity:0, transition:"opacity 0.2s" }}
                    className="proj-overlay">
                    <span style={{ fontSize:13, fontWeight:600, color:"#fff" }}>View Case Study →</span>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding:"20px 22px", display:"flex", flexDirection:"column", flex:1 }}>
                  <h3 style={{ fontSize:15, fontWeight:700, color:"var(--c-text)", marginBottom:8, letterSpacing:"-0.01em", lineHeight:1.3 }}>{p.title}</h3>
                  <p style={{ fontSize:13, color:"var(--c-muted)", lineHeight:1.65, marginBottom:16, flex:1 }}>{p.shortDesc}</p>

                  <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:16 }}>
                    {p.primaryTech.map(t => <span key={t} className="badge badge-accent">{t}</span>)}
                    {p.tech.filter(t=>!p.primaryTech.includes(t)).slice(0,2).map(t => <span key={t} className="badge">{t}</span>)}
                  </div>

                  <div style={{ display:"flex", gap:8 }} onClick={e=>e.stopPropagation()}>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize:12, padding:"6px 12px" }}>
                      <GithubIcon size={12}/> GitHub
                    </a>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize:12, padding:"6px 12px" }}>
                        <ExternalLink size={12}/> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>{selected && <Modal p={selected} onClose={()=>setSelected(null)}/>}</AnimatePresence>

      <style>{`
        .proj-grid { }
        .proj-overlay { }
        .card:hover .proj-overlay { opacity: 1 !important; }
        @media (max-width: 768px) { .proj-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

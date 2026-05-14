"use client";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";

const stats = [
  { n:"5+",   l:"Projects Shipped" },
  { n:"100+", l:"Problems Solved" },
  { n:"3rd",  l:"Year CS Student" },
  { n:"∞",    l:"Curiosity" },
];

const philosophy = [
  { icon:"⚡", text:"Performance is a feature, not an afterthought" },
  { icon:"🧱", text:"Maintainability over cleverness, always" },
  { icon:"🔍", text:"Understand the problem before writing a line" },
];

const E = [0.22, 1, 0.36, 1] as const;
const inView = (delay=0) => ({
  initial:{opacity:0,y:20},
  whileInView:{opacity:1,y:0},
  viewport:{once:true},
  transition:{duration:0.5,ease:E,delay},
});

export default function About() {
  return (
    <section id="about" className="section" style={{ background:"var(--c-bg)" }}>
      <div className="wrap">
        <div style={{ display:"grid", gridTemplateColumns:"240px 1fr", gap:64, alignItems:"start" }} className="about-grid">

          {/* Stats */}
          <div style={{ display:"flex", flexDirection:"column", gap:12, position:"sticky", top:88 }}>
            {stats.map((s,i) => (
              <motion.div key={i} {...inView(i*0.07)} className="card" style={{ padding:"20px 24px" }}>
                <div style={{ fontSize:"2rem", fontWeight:800, letterSpacing:"-0.04em", lineHeight:1, marginBottom:4 }} className="gradient-text">{s.n}</div>
                <div style={{ fontSize:12, color:"var(--c-subtle)", fontWeight:500, textTransform:"uppercase", letterSpacing:"0.06em" }}>{s.l}</div>
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div>
            <motion.div {...inView(0)}>
              <div className="label">About Me</div>
              <h2 className="heading">Engineer by mindset,<br/>developer by craft.</h2>
            </motion.div>

            <div style={{ marginTop:24, marginBottom:32, display:"flex", flexDirection:"column", gap:16 }}>
              {personal.about.map((p,i) => (
                <motion.p key={i} {...inView(0.1+i*0.07)} style={{ fontSize:15, color:"var(--c-muted)", lineHeight:1.8 }}>{p}</motion.p>
              ))}
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12 }}>
              {philosophy.map((p,i) => (
                <motion.div key={i} {...inView(0.2+i*0.08)} className="card"
                  style={{ padding:"20px", cursor:"default" }}
                  whileHover={{ y:-3, borderColor:"var(--c-accent)" } as any}>
                  <span style={{ fontSize:"1.4rem", display:"block", marginBottom:10 }}>{p.icon}</span>
                  <p style={{ fontSize:13, color:"var(--c-muted)", lineHeight:1.6 }}>{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-grid > div:first-child { position: static !important; display: grid !important; grid-template-columns: repeat(2,1fr); }
        }
      `}</style>
    </section>
  );
}

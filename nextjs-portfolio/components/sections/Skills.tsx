"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const E = [0.22, 1, 0.36, 1] as const;
const inView = (delay=0) => ({
  initial:{opacity:0,y:16},
  whileInView:{opacity:1,y:0},
  viewport:{once:true},
  transition:{duration:0.5,ease:E,delay},
});

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background:"var(--c-card)", borderTop:"1px solid var(--c-border)", borderBottom:"1px solid var(--c-border)" }}>
      <div className="wrap">
        <motion.div {...inView(0)} style={{ textAlign:"center", marginBottom:48 }}>
          <div className="label" style={{ justifyContent:"center" }}>Skills & Expertise</div>
          <h2 className="heading" style={{ textAlign:"center" }}>What I work with</h2>
          <p className="subtext" style={{ margin:"0 auto", textAlign:"center" }}>Tools and technologies I use to build reliable, scalable software.</p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }} className="skills-grid">
          {skills.map((cat,i) => (
            <motion.div key={cat.title} {...inView(i*0.07)} className="card" style={{ padding:"24px" }}>
              <div style={{ fontSize:11, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--c-accent)", fontFamily:"'JetBrains Mono',monospace", marginBottom:14 }}>{cat.title}</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {cat.skills.map(s => (
                  <span key={s.name} className={s.primary ? "badge badge-accent" : "badge"}>{s.name}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p {...inView(0.4)} style={{ textAlign:"center", marginTop:40, fontSize:13, color:"var(--c-subtle)", fontStyle:"italic" }}>
          "I learn new tools fast. The thinking matters more than the stack."
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

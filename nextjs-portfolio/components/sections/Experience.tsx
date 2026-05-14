"use client";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

const typeColor: Record<string,string> = {
  education: "#6366f1",
  project:   "#8b5cf6",
  practice:  "#22c55e",
};

const E = [0.22, 1, 0.36, 1] as const;
const inView = (delay=0) => ({
  initial:{opacity:0,x:-16},
  whileInView:{opacity:1,x:0},
  viewport:{once:true},
  transition:{duration:0.5,ease:E,delay},
});

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background:"var(--c-bg)" }}>
      <div className="wrap">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,ease:E}} style={{ marginBottom:48 }}>
          <div className="label">Experience</div>
          <h2 className="heading">Academic & Project Journey</h2>
          <p className="subtext">Every project was an opportunity to think like an engineer, not just a student.</p>
        </motion.div>

        <div style={{ position:"relative", maxWidth:760 }}>
          {/* Timeline line */}
          <div style={{ position:"absolute", left:0, top:8, bottom:0, width:1, background:"linear-gradient(to bottom, var(--c-accent) 0%, var(--c-border) 60%, transparent 100%)" }}/>

          <div style={{ display:"flex", flexDirection:"column", gap:28, paddingLeft:36 }}>
            {experiences.map((exp,i) => {
              const color = typeColor[exp.type];
              return (
                <motion.div key={i} {...inView(i*0.07)} style={{ position:"relative" }}>
                  {/* Node */}
                  <div style={{ position:"absolute", left:-40, top:12, width:10, height:10, borderRadius:"50%", background:color, border:"2px solid var(--c-bg)", boxShadow:`0 0 0 3px ${color}22` }}/>

                  <div className="card" style={{ padding:"22px 24px", borderLeft:`2px solid ${color}` }}>
                    <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"flex-start", gap:10, marginBottom:4 }}>
                      <h3 style={{ fontSize:15, fontWeight:700, color:"var(--c-text)", letterSpacing:"-0.01em" }}>{exp.role}</h3>
                      <span style={{ fontSize:11, fontWeight:600, padding:"3px 10px", borderRadius:999, fontFamily:"'JetBrains Mono',monospace", background:`${color}15`, color, border:`1px solid ${color}30`, whiteSpace:"nowrap" }}>{exp.period}</span>
                    </div>
                    <p style={{ fontSize:12, color:"var(--c-subtle)", marginBottom:14, fontWeight:500 }}>{exp.company}</p>
                    <ul style={{ display:"flex", flexDirection:"column", gap:8 }}>
                      {exp.bullets.map((b,j) => (
                        <li key={j} style={{ display:"flex", gap:10, fontSize:13, color:"var(--c-muted)", lineHeight:1.65 }}>
                          <span style={{ color:"var(--c-accent)", flexShrink:0, marginTop:2, fontSize:11 }}>→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

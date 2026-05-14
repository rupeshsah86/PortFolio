"use client";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

const E = [0.22, 1, 0.36, 1] as const;
const inView = (delay=0) => ({
  initial:{opacity:0,y:16},
  whileInView:{opacity:1,y:0},
  viewport:{once:true},
  transition:{duration:0.5,ease:E,delay},
});

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ background:"var(--c-bg)" }}>
      <div className="wrap">
        <motion.div {...inView(0)} style={{ textAlign:"center", marginBottom:48 }}>
          <div className="label" style={{ justifyContent:"center" }}>Testimonials</div>
          <h2 className="heading" style={{ textAlign:"center" }}>What people say</h2>
          <p className="subtext" style={{ margin:"0 auto", textAlign:"center" }}>Recommendations from professors, mentors, and collaborators.</p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }} className="test-grid">
          {testimonials.map((t,i) => (
            <motion.div key={i} {...inView(i*0.1)} className="card" whileHover={{y:-3} as any}
              style={{ padding:"28px 24px", display:"flex", flexDirection:"column" }}>
              <div style={{ fontSize:"3rem", lineHeight:1, marginBottom:16, color:"var(--c-accent)", opacity:0.35, fontFamily:"Georgia,serif" }}>"</div>
              <p style={{ fontSize:14, color:"var(--c-muted)", lineHeight:1.75, flex:1, marginBottom:20, fontStyle:"italic" }}>{t.quote}</p>
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:36, height:36, borderRadius:"50%", background:"var(--c-raised)", border:"1px solid var(--c-border-md)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, color:"var(--c-accent)", fontFamily:"'JetBrains Mono',monospace", flexShrink:0 }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize:13, fontWeight:600, color:"var(--c-text)" }}>{t.name}</div>
                  <div style={{ fontSize:11, color:"var(--c-subtle)" }}>{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .test-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

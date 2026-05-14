"use client";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";

const E = [0.22, 1, 0.36, 1] as const;
const inView = (delay=0) => ({
  initial:{opacity:0,y:16},
  whileInView:{opacity:1,y:0},
  viewport:{once:true},
  transition:{duration:0.5,ease:E,delay},
});

export default function Blog() {
  return (
    <section id="blog" className="section" style={{ background:"var(--c-card)", borderTop:"1px solid var(--c-border)", borderBottom:"1px solid var(--c-border)" }}>
      <div className="wrap">
        <motion.div {...inView(0)} style={{ textAlign:"center", marginBottom:48 }}>
          <div className="label" style={{ justifyContent:"center" }}>Technical Writing</div>
          <h2 className="heading" style={{ textAlign:"center" }}>Insights & deep dives</h2>
          <p className="subtext" style={{ margin:"0 auto", textAlign:"center" }}>Writing about architecture decisions, engineering tradeoffs, and lessons from real systems.</p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }} className="blog-grid">
          {blogPosts.map((post,i) => (
            <motion.div key={post.slug} {...inView(i*0.08)} className="card" style={{ overflow:"hidden", display:"flex", flexDirection:"column" }}>
              {/* Shimmer */}
              <div style={{ height:100, position:"relative", overflow:"hidden" }} className="animate-shimmer">
                <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ fontSize:10, fontWeight:600, color:"var(--c-subtle)", fontFamily:"'JetBrains Mono',monospace", letterSpacing:"0.1em", textTransform:"uppercase" }}>Coming Soon</span>
                </div>
              </div>

              <div style={{ padding:"18px 20px", display:"flex", flexDirection:"column", flex:1 }}>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:10 }}>
                  {post.tags.map(t => <span key={t} className="badge badge-accent" style={{ fontSize:11 }}>{t}</span>)}
                </div>
                <h3 style={{ fontSize:14, fontWeight:600, color:"var(--c-text)", lineHeight:1.45, marginBottom:8, flex:1, letterSpacing:"-0.01em" }}>{post.title}</h3>
                <p style={{ fontSize:12, color:"var(--c-subtle)", lineHeight:1.6, marginBottom:14 }}>{post.excerpt}</p>
                <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:"var(--c-subtle)" }}>
                  <span style={{ display:"flex", alignItems:"center", gap:4 }}><Clock size={10}/>{post.readTime}</span>
                  <span style={{ fontFamily:"'JetBrains Mono',monospace" }}>{post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .blog-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

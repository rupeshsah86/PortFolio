"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/lib/data";

export default function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const socials = [
    { href:personal.github,   icon:<GithubIcon size={14}/>,   label:"GitHub" },
    { href:personal.linkedin, icon:<LinkedinIcon size={14}/>, label:"LinkedIn" },
    { href:personal.twitter,  icon:<TwitterIcon size={14}/>,  label:"Twitter" },
    { href:`mailto:${personal.email}`, icon:<MailIcon size={14}/>, label:"Email" },
  ];

  return (
    <>
      <footer style={{ background:"var(--c-card)", borderTop:"1px solid var(--c-border)", padding:"28px 0" }}>
        <div className="wrap" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontWeight:700, fontSize:16, background:"linear-gradient(135deg,#fff,var(--c-accent))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>RK.</span>
          <p style={{ fontSize:12, color:"var(--c-subtle)", textAlign:"center" }}>© {new Date().getFullYear()} Rupesh Kumar · Built with Next.js & Tailwind</p>
          <div style={{ display:"flex", gap:8 }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target={s.href.startsWith("mailto")?undefined:"_blank"} rel="noopener noreferrer" aria-label={s.label}
                style={{ width:32, height:32, borderRadius:8, border:"1px solid var(--c-border)", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--c-subtle)", textDecoration:"none", transition:"all 0.2s" }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--c-accent)";(e.currentTarget as HTMLElement).style.color="var(--c-accent)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--c-border)";(e.currentTarget as HTMLElement).style.color="var(--c-subtle)";}}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {show && (
          <motion.button initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.8}}
            onClick={() => window.scrollTo({top:0,behavior:"smooth"})}
            style={{ position:"fixed", bottom:24, right:24, zIndex:40, width:40, height:40, borderRadius:10, background:"var(--c-raised)", border:"1px solid var(--c-border-md)", color:"var(--c-muted)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s" }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--c-accent)";(e.currentTarget as HTMLElement).style.color="var(--c-accent)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--c-border-md)";(e.currentTarget as HTMLElement).style.color="var(--c-muted)";}}>
            <ArrowUp size={16}/>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

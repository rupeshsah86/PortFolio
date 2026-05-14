"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/lib/data";

const schema = z.object({
  name:    z.string().min(2, "Name is required"),
  email:   z.string().email("Valid email required"),
  message: z.string().min(10, "Message too short"),
});
type F = z.infer<typeof schema>;

const contactLinks = [
  { icon:<MailIcon size={15}/>,     label:personal.email,                href:`mailto:${personal.email}` },
  { icon:<LinkedinIcon size={15}/>, label:"linkedin.com/in/rupesh-shah", href:personal.linkedin },
  { icon:<GithubIcon size={15}/>,   label:"github.com/rupeshsah86",      href:personal.github },
  { icon:<TwitterIcon size={15}/>,  label:"x.com/RupeshshahB86",         href:personal.twitter },
];

const inputStyle = {
  width:"100%", padding:"11px 14px", background:"var(--c-raised)", border:"1px solid var(--c-border-md)",
  borderRadius:8, fontSize:14, color:"var(--c-text)", fontFamily:"inherit", outline:"none", transition:"border-color 0.2s",
};

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const { register, handleSubmit, reset, formState:{errors} } = useForm<F>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: F) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data) });
      if (res.ok) { setStatus("success"); reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="section" style={{ background:"var(--c-card)", borderTop:"1px solid var(--c-border)" }}>
      <div className="wrap">
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.3fr", gap:64, alignItems:"start" }} className="contact-grid">

          {/* Left */}
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}>
            <div className="label">Contact</div>
            <h2 className="heading">Let's build something<br/>together.</h2>
            <p style={{ fontSize:15, color:"var(--c-muted)", lineHeight:1.75, marginBottom:32 }}>
              I'm actively looking for internship and full-time opportunities. If you have a role, a project, or just want to talk engineering — I'd love to hear from you.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {contactLinks.map(l => (
                <motion.a key={l.label} href={l.href} target={l.href.startsWith("mailto")?undefined:"_blank"} rel="noopener noreferrer"
                  whileHover={{x:4} as any}
                  style={{ display:"flex", alignItems:"center", gap:12, padding:"14px 16px", background:"var(--c-raised)", border:"1px solid var(--c-border)", borderRadius:10, textDecoration:"none", color:"var(--c-muted)", fontSize:14, transition:"border-color 0.2s" }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--c-accent)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--c-border)";}}>
                  <span style={{ color:"var(--c-accent)" }}>{l.icon}</span>
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:0.1}}
            onSubmit={handleSubmit(onSubmit)} style={{ display:"flex", flexDirection:"column", gap:16 }}>

            {[
              { id:"name",    label:"Name",    type:"text",  placeholder:"Your name" },
              { id:"email",   label:"Email",   type:"email", placeholder:"your@email.com" },
            ].map(f => (
              <div key={f.id}>
                <label style={{ display:"block", fontSize:12, fontWeight:500, color:"var(--c-muted)", marginBottom:6 }}>{f.label}</label>
                <input {...register(f.id as keyof F)} type={f.type} placeholder={f.placeholder} style={inputStyle}
                  onFocus={e=>{e.target.style.borderColor="var(--c-accent)";}}
                  onBlur={e=>{e.target.style.borderColor="var(--c-border-md)";}}/>
                {errors[f.id as keyof F] && <p style={{ fontSize:12, color:"#f87171", marginTop:4 }}>{errors[f.id as keyof F]?.message}</p>}
              </div>
            ))}

            <div>
              <label style={{ display:"block", fontSize:12, fontWeight:500, color:"var(--c-muted)", marginBottom:6 }}>Message</label>
              <textarea {...register("message")} rows={5} placeholder="What's on your mind?" style={{ ...inputStyle, resize:"vertical" }}
                onFocus={e=>{e.target.style.borderColor="var(--c-accent)";}}
                onBlur={e=>{e.target.style.borderColor="var(--c-border-md)";}}>
              </textarea>
              {errors.message && <p style={{ fontSize:12, color:"#f87171", marginTop:4 }}>{errors.message.message}</p>}
            </div>

            <button type="submit" disabled={status==="loading"} className="btn-primary" style={{ justifyContent:"center", opacity:status==="loading"?0.6:1 }}>
              {status==="loading"
                ? <><span style={{ width:14, height:14, border:"2px solid rgba(255,255,255,0.3)", borderTopColor:"#fff", borderRadius:"50%", animation:"spin 0.7s linear infinite", display:"block" }}/> Sending...</>
                : <><Send size={14}/> Send Message</>}
            </button>

            {status==="success" && (
              <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} style={{ display:"flex", alignItems:"center", gap:8, padding:"12px 16px", borderRadius:8, background:"rgba(34,197,94,0.08)", border:"1px solid rgba(34,197,94,0.25)", color:"var(--c-green)", fontSize:14 }}>
                <CheckCircle size={15}/> Message sent! I'll get back to you soon.
              </motion.div>
            )}
            {status==="error" && (
              <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} style={{ display:"flex", alignItems:"center", gap:8, padding:"12px 16px", borderRadius:8, background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.25)", color:"#f87171", fontSize:14 }}>
                <AlertCircle size={15}/> Something went wrong. Please try again.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Message too short"),
});
type F = z.infer<typeof schema>;

const contactLinks = [
  { icon: <MailIcon size={16} />, label: personal.email, href: `mailto:${personal.email}` },
  { icon: <LinkedinIcon size={16} />, label: "linkedin.com/in/rupesh-shah", href: personal.linkedin },
  { icon: <GithubIcon size={16} />, label: "github.com/rupeshsah86", href: personal.github },
  { icon: <TwitterIcon size={16} />, label: "x.com/RupeshshahB86", href: personal.twitter },
];

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  background: "var(--c-raised)",
  border: "1px solid var(--c-border)",
  borderRadius: 10,
  fontSize: 14,
  color: "var(--c-text)",
  fontFamily: "inherit",
  outline: "none",
  transition: "all 0.2s ease",
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<F>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: F) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (res.ok) { setStatus("success"); reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--c-bg)", borderTop: "1px solid var(--c-border)" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56, alignItems: "start" }} className="contact-grid">
          {/* Left Column */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="label">Get in Touch</div>
            <h2 className="heading">Let's discuss engineering & opportunity.</h2>
            <p style={{ fontSize: 16, color: "var(--c-muted)", lineHeight: 1.75, marginBottom: 32 }}>
              I am actively open to internship and full-stack engineering roles. Whether you have a position, an open-source project, or want to talk system architecture, send me a message!
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contactLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 20px",
                    textDecoration: "none",
                    color: "var(--c-text)",
                    fontSize: 14,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ color: "var(--c-accent)" }}>{l.icon}</span>
                    <span>{l.label}</span>
                  </div>
                  <ArrowUpRight size={16} color="var(--c-subtle)" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="card"
            style={{ padding: "32px", display: "flex", flexDirection: "column", gap: 20 }}
          >
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--c-text)", marginBottom: 8 }}>Name</label>
              <input
                {...register("name")}
                type="text"
                placeholder="Your Name"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--c-accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--c-border)")}
              />
              {errors.name && <p style={{ fontSize: 12, color: "#f87171", marginTop: 4 }}>{errors.name.message}</p>}
            </div>

            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--c-text)", marginBottom: 8 }}>Email Address</label>
              <input
                {...register("email")}
                type="email"
                placeholder="you@company.com"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--c-accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--c-border)")}
              />
              {errors.email && <p style={{ fontSize: 12, color: "#f87171", marginTop: 4 }}>{errors.email.message}</p>}
            </div>

            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--c-text)", marginBottom: 8 }}>Message</label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell me about the role, project, or inquiry..."
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--c-accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--c-border)")}
              />
              {errors.message && <p style={{ fontSize: 12, color: "#f87171", marginTop: 4 }}>{errors.message.message}</p>}
            </div>

            <button type="submit" disabled={status === "loading"} className="btn-primary" style={{ justifyContent: "center", width: "100%" }}>
              {status === "loading" ? (
                <>
                  <span style={{ width: 14, height: 14, border: "2px solid rgba(0,0,0,0.3)", borderTopColor: "#000", borderRadius: "50%", animation: "spin 0.7s linear infinite", display: "block" }} /> Sending...
                </>
              ) : (
                <>
                  <Send size={15} /> Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", borderRadius: 8, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e", fontSize: 14 }}>
                <CheckCircle size={16} /> Thank you! Your message has been sent successfully.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", borderRadius: 8, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171", fontSize: 14 }}>
                <AlertCircle size={16} /> Failed to send message. Please try sending directly to rupeshshah.86@gmail.com.
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

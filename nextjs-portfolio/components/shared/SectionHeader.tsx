interface SectionLabelProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ label, title, subtitle, centered }: SectionLabelProps) {
  return (
    <div className={centered ? "text-center mb-16" : "mb-14"}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent font-mono mb-4">
        <span className="block w-5 h-px bg-accent" />
        {label}
      </span>
      <h2
        className="text-4xl font-bold tracking-tightest text-text-primary leading-tight mb-4"
        style={{ letterSpacing: "-0.03em" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-lg text-text-secondary leading-relaxed"
          style={{ maxWidth: centered ? "560px" : "600px", margin: centered ? "0 auto" : undefined }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

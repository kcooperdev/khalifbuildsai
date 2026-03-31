const variantStyles = {
  tip: {
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
    label: "Tip",
    labelColor: "text-emerald-400/80",
    text: "text-white/40",
  },
  warning: {
    border: "border-red-400/20",
    bg: "bg-red-400/5",
    label: "Warning",
    labelColor: "text-red-400/80",
    text: "text-white/40",
  },
  info: {
    border: "border-violet-400/20",
    bg: "bg-violet-400/5",
    label: "Note",
    labelColor: "text-violet-400/80",
    text: "text-white/40",
  },
};

export function Callout({
  variant = "info",
  content,
}: {
  variant?: "tip" | "warning" | "info";
  content: string;
}) {
  const style = variantStyles[variant];

  return (
    <div className={`my-6 rounded-xl border ${style.border} ${style.bg} p-5`}>
      <p
        className={`mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${style.labelColor}`}>
        {style.label}
      </p>
      <p className={`text-[14px] leading-relaxed ${style.text}`}>{content}</p>
    </div>
  );
}

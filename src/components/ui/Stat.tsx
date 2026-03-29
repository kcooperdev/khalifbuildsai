export interface StatProps {
  value: string;
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04]">
      <span className="text-3xl font-bold tracking-tight text-gradient-warm md:text-4xl lg:text-[2.75rem]">
        {value}
      </span>
      <span className="text-xs font-medium text-white/40 md:text-sm">{label}</span>
    </div>
  );
}

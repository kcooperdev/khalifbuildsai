export function SectionHead({
  n,
  label,
  tag,
}: {
  n: string;
  label: string;
  tag?: string;
}) {
  return (
    <div className="sec-head">
      <span className="num">{n}</span>
      <span className="ttl">{label}</span>
      <span className="ln" />
      {tag && <span>{tag}</span>}
    </div>
  );
}

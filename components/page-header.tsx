export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-12 border-b border-border pb-8">
      {eyebrow ? (
        <span className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-tight text-balance">
        {title}
      </h1>
      {description ? (
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  )
}

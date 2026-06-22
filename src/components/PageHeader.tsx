interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}
export function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <header className="mb-8 animate-slide-up">
      {eyebrow && (
        <span className="tag-chip mb-3">{eyebrow}</span>
      )}
      <h1 className="text-4xl sm:text-6xl font-black uppercase leading-[0.95] tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base sm:text-lg font-medium text-muted-foreground">{subtitle}</p>
      )}
      <div className="mt-5 h-[6px] w-24 bg-foreground" />
    </header>
  );
}

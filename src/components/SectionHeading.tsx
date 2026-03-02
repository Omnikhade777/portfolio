interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mb-6 md:mb-8 relative">
      <div className="flex items-center gap-2">
        <span className="text-accent/40 font-mono text-sm font-bold">_</span>
        <h2 className="text-xl md:text-2xl font-extrabold text-foreground">{title}</h2>
        <span className="text-accent/40 font-mono text-sm font-bold">_</span>
      </div>
      {subtitle && (
        <p className="text-muted-foreground text-xs max-w-xl mt-1">{subtitle}</p>
      )}
      <div className="accent-line mt-2 w-16" />
    </div>
  );
};

export default SectionHeading;

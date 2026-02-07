interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mb-8 md:mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-sm max-w-xl">{subtitle}</p>
      )}
      <div className="mt-3 h-0.5 w-10 rounded-full bg-accent" />
    </div>
  );
};

export default SectionHeading;

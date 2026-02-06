interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-12 rounded-full bg-accent" />
    </div>
  );
};

export default SectionHeading;

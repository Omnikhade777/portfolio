interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mb-10 md:mb-12">
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-sm max-w-xl">{subtitle}</p>
      )}
      <div className="accent-line mt-3" />
    </div>
  );
};

export default SectionHeading;

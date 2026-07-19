import { LogoTag, type LogoItem } from "@/components/logo-tag";

type LogoListSectionProps = {
  title: string;
  subtitle?: string;
  logos: LogoItem[];
};

export function LogoListSection({ title, subtitle, logos }: LogoListSectionProps) {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
        {subtitle && <p className="text-sm text-muted-foreground md:text-base">{subtitle}</p>}
      </div>

      <div className="flex flex-wrap gap-3">
        {logos.map((logo) => (
          <LogoTag key={logo.title} {...logo} />
        ))}
      </div>
    </section>
  );
}

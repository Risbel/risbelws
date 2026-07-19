import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const logoTagVariants = cva(
  "inline-flex items-center rounded-lg border border-border bg-muted/50 font-medium text-foreground transition-colors hover:bg-muted",
  {
    variants: {
      size: {
        sm: "gap-1.5 px-2 py-1 text-xs [&_img]:size-4",
        md: "gap-2 px-3 py-1.5 text-sm [&_img]:size-6",
        lg: "gap-2.5 px-4 py-2 text-base [&_img]:size-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type LogoIcon = (props: { className?: string }) => React.ReactElement;

export type LogoItem = {
  url?: string;
  icon?: LogoIcon;
  title: string;

  size?: VariantProps<typeof logoTagVariants>["size"];
};

type LogoTagProps = LogoItem & { className?: string };

const iconSizeClasses = {
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
} as const;

export function LogoTag({ url, icon: Icon, title, size, className }: LogoTagProps) {
  return (
    <div className={cn(logoTagVariants({ size }), className)}>
      {Icon ? <Icon className={iconSizeClasses[size ?? "md"]} /> : <img src={url} alt={title} />}
      <span>{title}</span>
    </div>
  );
}

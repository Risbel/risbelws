import { cn } from "@/lib/utils";

export function TechBadge({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-border bg-muted/50 px-2 py-1 text-xs font-medium text-foreground",
        className,
      )}
    >
      {label}
    </span>
  );
}

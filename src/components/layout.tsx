import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Layout({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("space-y-6 px-6 md:px-10 lg:px-16 py-8", className)}>{children}</div>;
}

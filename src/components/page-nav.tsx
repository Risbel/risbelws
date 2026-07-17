import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router";

import { Button } from "@/components/ui/button";
import { menuItems } from "@/components/menu-items";

export function PageNav() {
  const { pathname } = useLocation();
  const index = menuItems.findIndex((item) => item.url === pathname);

  if (index === -1) return null;

  const prev = menuItems[index - 1];
  const next = menuItems[index + 1];

  return (
    <nav className="mt-auto flex items-center justify-between pb-10 px-4">
      {prev ? (
        <Button variant="ghost">
          <Link to={prev.url} className="flex items-center gap-1 group">
            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" data-icon="inline-start" />
            {prev.title}
          </Link>
        </Button>
      ) : (
        <span />
      )}
      {next ? (
        <Button variant="ghost">
          <Link to={next.url} className="flex items-center gap-1 group">
            {next.title}
            <ChevronRight className="group-hover:translate-x-1 transition-transform" data-icon="inline-end" />
          </Link>
        </Button>
      ) : (
        <span />
      )}
    </nav>
  );
}

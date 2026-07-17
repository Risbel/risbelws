import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Outlet } from "react-router";
import { PageNav } from "./components/page-nav";
import { cn } from "@/lib/utils";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <main className="relative flex w-full flex-col">
          <div
            className={cn(
              "pointer-events-none absolute -z-10 inset-0 bg-size-[40px_40px] select-none",
              "bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)]",
              "dark:bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
            )}
          />

          <div className="flex items-center justify-between md:justify-end border-b p-4 backdrop-blur-xs">
            <SidebarTrigger className="cursor-pointer md:hidden" />

            <ModeToggle />
          </div>
          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
          <PageNav />
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;

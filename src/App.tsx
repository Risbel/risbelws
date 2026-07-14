import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Outlet } from "react-router"

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex w-full flex-col">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="text-lg font-semibold">My Portfolio</h1>
            </div>
            <ModeToggle />
          </div>
          <div className="flex-1 p-6 overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App

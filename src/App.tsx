import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex w-full flex-col">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="text-lg font-semibold">Welcome to the App</h1>
            </div>
            <ModeToggle />
          </div>
          <div className="flex-1 p-6">
            <p className="text-muted-foreground">
              Click the sidebar trigger to toggle the sidebar. Use Ctrl+B (or Cmd+B on Mac) for quick toggle.
            </p>
          </div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App

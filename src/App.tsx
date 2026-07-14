import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

const App = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex w-full flex-col">
        <div className="flex items-center gap-2 border-b p-4">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Welcome to the App</h1>
        </div>
        <div className="flex-1 p-6">
          <p className="text-muted-foreground">
            Click the sidebar trigger to toggle the sidebar. Use Ctrl+B (or Cmd+B on Mac) for quick toggle.
          </p>
        </div>
      </main>
    </SidebarProvider>
  )
}

export default App

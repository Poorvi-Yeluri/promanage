// src/pages/_app.tsx

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar"; 
import { AppSidebar } from "@/components/app-sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <div className="flex min-h-screen">
          {/* Sidebar Component */}
          <AppSidebar />

          <div className="flex-1">
            {/* Main content */}
            <main className="flex-1 p-4">
              <Component {...pageProps} />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

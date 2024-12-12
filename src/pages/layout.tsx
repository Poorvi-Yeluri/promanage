// src/components/layout.tsx
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import Navbar from "@/components/navbar";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <SidebarProvider>
                <div className="flex min-h-screen">
                    {/* Sidebar Component */}
                    <AppSidebar />
                </div>
                {/* Main content area */}
                <div className="flex flex-col flex-1">
                    {/* Navbar Component */}
                    <Navbar />

                    {/* Main content */}
                    <main className="flex-1 p-4 overflow-auto">
                        {children}
                    </main>
                </div>
            </SidebarProvider>
        </ThemeProvider>
    );
}

import * as React from "react";
import { Menu, LogOut } from "lucide-react"; // Import Lucide icons
import { useState } from "react";

export default function Navbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <header className="navbar-foreground w-full border-b shadow-md z-10">
      <div className="flex w-full h-12 px-4 justify-between items-center">
        {/* Left-aligned buttons with icons */}
        <div className="flex items-center">
          {/* Menu Icon (Sidebar Toggle) */}
          <Menu className="h-4 w-4 cursor-pointer" onClick={onToggleSidebar} />
        </div>

        {/* Right-aligned logout button */}
        <div className="flex flex-end gap-6">
          {/* LogOut Icon */}
          <LogOut className="h-4 w-4" />
        </div>
      </div>
    </header>
  );
}

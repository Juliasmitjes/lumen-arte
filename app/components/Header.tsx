"use client";

import { useState } from "react";
import { Menu, X, Palette } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border shadow-soft">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

        {/* logo */}
        <link href="#" onClick={() => setIsMenuOpen(false)}/>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Palette className="w-5 h-5 text-primary-foreground text-white" />
          </div>
        </div>
        </div>
      </nav>
    </header>
  );
}

export default Header
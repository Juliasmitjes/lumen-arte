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
          <h1 className="font-playful">test</h1>

        {/* logo */}

        </div>
      </nav>
    </header>
  );
}

export default Header
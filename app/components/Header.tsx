"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // alleen mobiel gedrag (< md)
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          // naar beneden scrollen → verberg header
          setShowHeader(false);
        } else {
          // naar boven scrollen → toon header
          setShowHeader(true);
        }
      } else {
        // desktop: altijd tonen
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={`
    fixed top-0 left-0 right-0 z-50
    bg-card/80 backdrop-blur-sm border-b border-border shadow-soft
    transition-transform duration-300
    translate-y-0 -translate-y-full
    ${showHeader ? "translate-y-0" : "-translate-y-full"}
  `}
>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* logo */}
          <Link href="/#hero" onClick={() => setIsMenuOpen(false)}>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <Image src={Logo} alt="LumenArte logo" />
              </div>
              <div>
                <h1 className="text-xl font-business font-bold text-foreground">
                  LumenArte
                </h1>
                <p className="text-sm text-muted-foreground font-playful">
                  Lichtsculpturen en pasteltekeningen
                </p>
              </div>
            </div>
          </Link>

          {/* mobiel menu */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* mobiele navigatie */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-warm">
              <div className="px-6 py-4 space-y-4">
                <Link href="/#galerij" onClick={() => setIsMenuOpen(false)}>
                  <button className="block text-foreground mb-6 mt-2 hover:text-primary transition-colors duration-300">
                    Galerij
                  </button>
                </Link>

                <Link href="/#over-mij" onClick={() => setIsMenuOpen(false)}>
                  <button className="block text-foreground mb-6 hover:text-primary transition-colors duration-300">
                    Over mij
                  </button>
                </Link>

                <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="organic" size="sm" className="w-full">
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

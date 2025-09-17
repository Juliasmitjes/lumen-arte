"use client";

import { useState } from "react";
import { Menu, X, Palette } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border shadow-soft">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

         {/* logo */}
          <Link href="/#hero" onClick={() => setIsMenuOpen(false)}>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Palette className="w-5 h-5 text-primary-foreground text-white" />
              </div>
              <div>
                <h1 className="text-xl font-business font-bold text-foreground">
                  Jacqueline Tiemens
                </h1>
                <p className="text-sm text-muted-foreground font-playful">
                  Handgemaakte kunst
                </p>
              </div>
            </div>
          </Link>

          {/* dekstop */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#galerij" onClick={() => setIsMenuOpen(false)}>
            <button className="text-foreground cursor-pointer hover:text-primary text-xl font-business font-bold  transition-colors duration-300">
              Galerij
            </button>        
            </Link>

            <Link href="/#over-mij" onClick={() => setIsMenuOpen(false)}>
             <button className="text-foreground cursor-pointer hover:text-primary text-xl font-business font-bold transition-colors duration-300">
              Over mij
            </button>
            </Link>

            <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
            <Button 
              variant="organic"
              size="sm"
              className="font-business text-xl font-bold">
              Contact
            </Button>  
            </Link>
          </div>

          










        </div>





      </nav>
    </header>
  );
}

export default Header
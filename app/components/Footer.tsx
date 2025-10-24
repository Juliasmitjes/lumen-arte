"use client";

import { Heart, Palette } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* logo */}
          <Link href="/#hero" className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image src={Logo} 
                alt="LumenArte logo" 
                 />
              </div>
              <span className="font-business text-lg">LumenArte</span>
            </div>
            <p className="font-playful text-accent-light text-sm">Handgemaakte lichtsculpturen</p>
          </Link>      

           {/* links naar pagina's */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#galerij" className="text-background/80 font-business hover:text-accent transition-colors">
                Galerij
              </Link>
              <Link href="/#over-mij" className="text-background/80 font-business hover:text-accent transition-colors">
                Over mij
              </Link>
              <Link href="/#contact" className="text-background/80 font-business hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* copyright */}
          <div className="text-center md:text-right">
            <p className="text-background/60 text-sm font-business flex items-center justify-center md:justify-end gap-1">
              © {currentYear} LumenArte
              <Heart className="w-4 h-4 text-primary" />
              Gemaakt met aandacht
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t font-business border-background/20 text-center">
          <p className="text-background/60 text-xs">
            Duurzame kunst voor alle seizoenen • Handgemaakt in Nederland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
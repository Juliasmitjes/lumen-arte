"use client"; 

import { useState } from "react";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";


export default function Home() {
   const [activeCategory, setActiveCategory] = useState<
    "sculpturen" | "schilderijen"
  >("sculpturen");

  return (
    <div className="min-h-screen">
      <Hero 
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      />
      <Gallery 
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      />
      <About />
      <Contact />
    </div>
  );
}

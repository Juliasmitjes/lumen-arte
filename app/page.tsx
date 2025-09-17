"use client"; 

import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import About from "./components/About";
import Story from "./components/Story";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Gallery />
      <About />
      <Story />
      <Contact />
    </div>
  );
}

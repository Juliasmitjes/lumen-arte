"use client"; 

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Gallery from "./components/Gallery";
import Hero from "./components/Hero";


import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Gallery />
    </div>
  );
}

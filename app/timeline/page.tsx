"use client";

import { motion } from "framer-motion";
import TimelineInput from "../components/TimelineInput";

const Timeline = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block mt-50 text-primary font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-6"
          >
            A Visual Story
          </motion.span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6">
            Our Timeline
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Capturing life's beautiful moments, one photograph at a time.
          </p>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 mx-auto flex justify-center pt-2"
            >
              <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
            </motion.div>
          </motion.div>
        </motion.div>
      </header>

      {/* Timeline Section */}
      <main>
        <TimelineInput />
      </main>
    </div>
  );
};

export default Timeline;

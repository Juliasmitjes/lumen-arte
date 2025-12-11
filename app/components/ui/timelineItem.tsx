import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image: StaticImageData;
  isLeft: boolean;
  index: number;
}

const TimelineItem = ({ year, title, description, image, isLeft, index }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative flex w-full items-center ${isLeft ? "justify-start" : "justify-end"} mb-8 md:mb-16`}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-4 h-4 rounded-full bg-timeline-dot border-4 border-background animate-pulse-glow" />
      </div>

      {/* Content card */}
      <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
        <div className="group relative overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-500">
          {/* Image */}
          <div className="relative h-48 md:h-64 overflow-hidden">
            <Image
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <span className="absolute bottom-4 left-4 text-primary-foreground font-display text-3xl md:text-4xl font-semibold">
              {year}
            </span>
          </div>

          {/* Text content */}
          <div className="p-6">
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Accent line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </div>

      {/* Mobile timeline dot */}
      <div className="absolute left-0 top-0 md:hidden">
        <div className="w-3 h-3 rounded-full bg-timeline-dot border-2 border-background" />
      </div>
    </motion.div>
  );
};

export default TimelineItem;

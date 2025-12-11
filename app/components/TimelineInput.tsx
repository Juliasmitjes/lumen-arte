import { motion } from "framer-motion";
import TimelineItem from "./ui/timelineItem";

const timelineData = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Our journey started with a simple idea and a passion for creating something meaningful. This was the moment everything changed.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
  },
  {
    year: "2019",
    title: "First Milestone",
    description: "We celebrated our first major achievement, bringing together a community of like-minded individuals who shared our vision.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
  },
  {
    year: "2020",
    title: "Growing Together",
    description: "Despite challenges, we adapted and grew stronger. This year taught us resilience and the importance of staying connected.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
  },
  {
    year: "2021",
    title: "New Horizons",
    description: "Expanding our reach and exploring new possibilities. Every step forward brought exciting opportunities and unforgettable experiences.",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop",
  },
  {
    year: "2022",
    title: "Making Memories",
    description: "A year filled with precious moments and cherished memories. We documented our journey through beautiful captures of time.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
  },
  {
    year: "2023",
    title: "Looking Forward",
    description: "With gratitude for the past and excitement for the future, we continue writing our story one chapter at a time.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
  },
];

const TimelineInput = () => {
  return (
    <section className="relative pb-16 md:pb-24">
      {/* Timeline line - desktop */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-timeline-line to-transparent hidden md:block" />
      
      {/* Timeline line - mobile */}
      <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-timeline-line to-transparent md:hidden" />

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
      

        {/* Timeline items */}
        <div className="relative pl-8 md:pl-0">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.year}
              {...item}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>

        {/* End marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mt-8"
        >
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary-foreground" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineInput;

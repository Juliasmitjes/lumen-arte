import { motion } from "framer-motion";
import TimelineItem from "./ui/timelineItem";

import Moment1 from "../../public/images/moment1.jpg";
import Moment2 from "../../public/images/moment2.jpg";
import Moment3 from "../../public/images/moment3.jpg";
import Moment4 from "../../public/images/moment4.jpg";

const timelineData = [
  {
    year: "Februari 2025",
    title: "Het begin",
    description: "Met een biertje in onze hand proostten wij op het ontstaan van LumenArte ...",
    image: Moment1,
  },
  {
    year: "Oktober 2025",
    title: "Website live",
    description: "De website is live! ... ",
    image: Moment2,
  },
  {
    year: "November 2025",
    title: "Eerste expositie",
    description: "De eerste officiële expositie in de Mariënburg ...",
    image: Moment3,
  },
  {
    year: "December 2025",
    title: "Verkoop",
    description: "Twee bomen zijn verkocht ...",
    image: Moment4,
  },
  {
    year: "xxx1",
    title: "xxx1",
    description: "xxx1",
    image: Moment1,
  },
  {
    year: "xxx2",
    title: "xxx2",
    description: "xxx2",
    image: Moment1,
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

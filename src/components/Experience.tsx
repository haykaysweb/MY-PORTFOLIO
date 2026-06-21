import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Full-Stack Developer (Capstone)",
    company: "Tech Studio Academy",
    period: "2025",
    responsibilities: [
      "Engineered the 'Laundry Wash' application as a solo capstone project.",
      "Handled end-to-end features from UI implementation to backend API integration.",
      "Ensured responsive design and smooth user experience across varying device sizes.",
    ],
  },
  {
    title: "Full-Stack Developer (Collaborative Project)",
    company: "Tech Studio Academy Internships",
    period: "2025 - 2026",
    responsibilities: [
      "Collaborated with intern colleagues to architect and build 'Miles Car Rentals'.",
      "Integrated full-stack features including user dashboard interactions, listing management, and backend database connectivity.",
      "Practiced Git version control, resolved merge conflicts, and maintained consistent agile team workflows.",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 sm:py-32 bg-surface text-main-text transition-colors duration-300 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted">
            My professional journey & projects
          </p>
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl space-y-16">
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid md:grid-cols-12 gap-8 md:gap-12"
            >
              {/* Title & Company/Responsibilities */}
              <div className="md:col-span-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold tracking-tight text-main-text">
                    {exp.title}
                  </h3>
                  <span className="text-sm font-medium text-accent">
                    {exp.period}
                  </span>
                </div>

                <p className="text-lg font-medium text-muted mb-6">
                  {exp.company}
                </p>

                <ul className="space-y-3">
                  {exp.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base text-muted leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

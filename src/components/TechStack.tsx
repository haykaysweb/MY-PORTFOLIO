import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Code, Server, Cloud, Database, Globe, Cpu, Wind } from "lucide-react";
import { FiFigma } from "react-icons/fi";

interface TechItem {
  name: string;
  icon: ReactNode;
  size?: "small" | "medium" | "large";
}

const techStack: TechItem[] = [
  { name: "React", icon: <Code size={28} />, size: "large" },
  { name: "Node.js", icon: <Server size={28} />, size: "medium" },
  { name: "TypeScript", icon: <Globe size={24} />, size: "medium" },
  { name: "Javascript", icon: <Cloud size={28} />, size: "large" },
  { name: "TailwindCSS", icon: <Wind size={24} />, size: "small" },
  { name: "Express", icon: <Cpu size={24} />, size: "small" },
  { name: "Figma", icon: <FiFigma size={28} />, size: "medium" },
  { name: "MongoDB", icon: <Database size={28} />, size: "medium" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getSizeClasses = (size?: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-2";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  const getContentSize = (size?: string) => {
    switch (size) {
      case "large":
        return { icon: 48, title: "text-2xl" };
      case "medium":
        return { icon: 32, title: "text-xl" };
      default:
        return { icon: 24, title: "text-lg" };
    }
  };

  return (
    <section
      id="stack"
      ref={ref}
      className="py-24 sm:py-32 bg-surface transition-colors duration-300 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-main-text">
            Tech Stack
          </h2>
          <p className="text-lg text-muted">Technologies I work with daily</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[160px] gap-4"
        >
          {techStack.map((tech) => {
            const contentSize = getContentSize(tech.size);
            return (
              <motion.div
                key={tech.name}
                variants={item}
                whileHover={{
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: -5,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={`${getSizeClasses(
                  tech.size,
                )} group relative overflow-hidden rounded-2xl p-6 cursor-pointer bg-page-bg border border-border hover:border-accent/50 transition-colors duration-300`}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-accent/5" />
                <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-accent/20" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div
                    className="text-muted transition-colors duration-300 group-hover:text-accent"
                    style={{
                      width: contentSize.icon,
                      height: contentSize.icon,
                    }}
                  >
                    {tech.icon}
                  </div>
                  <h3
                    className={`font-semibold ${contentSize.title} text-main-text transition-colors duration-300`}
                  >
                    {tech.name}
                  </h3>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-30 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-bl from-accent/20 to-transparent" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

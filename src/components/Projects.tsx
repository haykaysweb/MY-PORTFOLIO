import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  caseStudyLink: string;
  image: string;
  imagePosition: "left" | "right";
}

const projectsData: Project[] = [
  {
    id: "project-1",
    number: "Project 01",
    title: "Miles Car Rental",
    description:
      "Miles Car Rental is a highly scalable, full-stack vehicle reservation and fleet management platform engineered to deliver a frictionless booking experience. Designed with a premium, high-end SaaS aesthetic, the platform bridges the gap between sleek consumer-facing accessibility and robust administrative control. By prioritizing responsive design, secure data handling, and buttery-smooth user interactions, the application redefines the digital car rental experience.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    liveLink: "https://milescar-rental.vercel.app/",
    caseStudyLink: "#",
    image:
      "https://res.cloudinary.com/dw5bai7mk/image/upload/v1781555198/Screenshot_2026-06-15_092434_isayxe.png",
    imagePosition: "right",
  },
  {
    id: "project-2",
    number: "Project 02",
    title: "Laundry Wash",
    description:
      "The Laundry Wash Platform is a modern, full-stack on-demand laundry and dry-cleaning service application engineered to simplify the chore of garment care. Designed with a clean, premium aesthetic, the platform connects everyday users directly to laundry service providers, offering a frictionless ordering, tracking, and fulfillment workflow. By prioritizing real-time status updates, secure transactions, and a highly responsive mobile-first interface, the application modernizes the traditional laundry experience.",
    techStack: ["MongoDB", "JavaScript", "Express", "React", "Node.js"],
    liveLink: "https://laundry-wash-client-two.vercel.app/",
    caseStudyLink: "#",
    image:
      "https://res.cloudinary.com/dw5bai7mk/image/upload/v1781528825/Screenshot_2026-06-15_020446_cbyh2r.png",
    imagePosition: "left",
  },
  {
    id: "project-3",
    number: "Project 03",
    title: "Task Duty",
    description:
      "Task Duty is a highly efficient, feature-rich task management and productivity application designed to help individuals and teams organize their daily workflows. Built with a clean, intuitive user interface, it allows users to seamlessly create, track, manage, and prioritize tasks from inception to completion.",
    techStack: ["MongoDB", "JavaScript", "Express", "React", "Node.js"],
    liveLink: "https://task-duty-seven.vercel.app/",
    caseStudyLink: "#",
    image:
      "https://res.cloudinary.com/dw5bai7mk/image/upload/v1781557869/Screenshot_2026-06-15_101059_dlymnj.png",
    imagePosition: "left",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className=" py-24 sm:py-32 bg-page-bg text-main-text transition-colors duration-300 font-sans "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted">Selected work I've crafted</p>
        </motion.div>

        {/* Projects Grid / Content */}
        <div className="space-y-32">
          {projectsData.map((project) => {
            const isImageLeft = project.imagePosition === "left";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isImageLeft ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Project Image Column */}
                <div
                  className={`lg:col-span-6 relative group ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-fill"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  {/* Subtle background glow */}
                  <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>

                {/* Project Info Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className="text-xs font-semibold tracking-wider uppercase mb-4 text-accent">
                    {project.number}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-muted mb-8">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-xs font-medium rounded-xl bg-surface border border-border text-main-text shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Call To Action Buttons */}
                  <div className="flex flex-wrap items-center gap-6">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-accent/20"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>

                    <motion.a
                      href={project.caseStudyLink}
                      className="inline-flex items-center justify-center gap-2 text-main-text font-medium hover:text-accent transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      View Case Study
                      <ArrowRight size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

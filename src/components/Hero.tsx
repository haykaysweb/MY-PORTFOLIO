import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="about"
      className="w-full h-screen sm:h-auto flex items-center relative overflow-hidden bg-page-bg text-main-text transition-colors duration-300 font-sans pt-32 pb-20 md:pt-40 md:pb-32"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-page-bg via-transparent to-surface transition-colors duration-300" />

      <div className="container mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <motion.p
              initial="hidden"
              animate="visible"
              className="text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 text-accent flex flex-wrap"
            >
              {"Hello, I'm Akeredolu Kolawole"
                .split("")
                .map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.2 + index * 0.03,
                      duration: 0.3,
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-main-text"
            >
              Full Stack
              <br />
              <span className="text-accent">Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base sm:text-xl leading-relaxed mb-10 max-w-xl text-muted"
            >
              I craft digital experiences that merge elegant design with
              powerful engineering. Specializing in building scalable,
              performant applications that solve real problems.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                className="bg-accent hover:bg-accent-hover text-white font-medium px-8 py-4 rounded-xl inline-flex items-center justify-center text-center transition-all duration-300 shadow-lg shadow-accent/20 w-full sm:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="bg-surface border border-border text-main-text hover:bg-accent-hover font-medium px-8 py-4 rounded-xl inline-flex items-center justify-center text-center transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column - Philosophy statement  */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block lg:col-span-5 w-full h-fit"
          >
            <div className="relative h-full flex flex-col justify-center p-8 rounded-2xl border bg-surface/50 border-border backdrop-blur-sm transition-colors duration-300">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest mb-2 text-accent">
                    Philosophy
                  </p>
                  <p className="text-xl xl:text-2xl font-light leading-relaxed italic text-main-text">
                    "Code is poetry written for machines to execute and humans
                    to understand."
                  </p>
                </div>

                <div className="flex gap-8 pt-4 border-t border-border/60">
                  <div>
                    <p className="text-3xl font-bold text-main-text">1+</p>
                    <p className="text-sm text-muted">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-main-text">15+</p>
                    <p className="text-sm text-muted">Projects Completed</p>
                  </div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl bg-accent/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

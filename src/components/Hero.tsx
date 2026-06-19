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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 text-accent"
            >
              Hello, I'm Akeredolu Kolawole
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

            {/* Social Links */}

            <div className="flex gap-6 mb-10 text-muted">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-accent"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.766c1.397-2.567 7-2.777 7 2.477v4.757z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://github.com/haykaysweb"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-accent"
                aria-label="GitHub"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.313.469-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.908 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
              {/* <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-accent"
                aria-label="X / Twitter"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a> */}
              <motion.a
                href="https://instagram.com/haykays_world"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-accent"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.314.06 2.239.276 3.034.584.821.318 1.519.742 2.199 1.422.68.68 1.104 1.378 1.422 2.199.308.795.525 1.72.584 3.034.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.06 1.314-.276 2.239-.584 3.034-.318.821-.742 1.519-1.422 2.199-.68.68-1.378 1.104-2.199 1.422-.795.308-1.72.525-3.034.584-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.85-.07-1.314-.06-2.239-.276-3.034-.584-.821-.318-1.519-.742-2.199-1.422-.68-.68-1.104-1.378-1.422-2.199-.308-.795-.525-1.72-.584-3.034-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.06-1.314.276-2.239.584-3.034.318-.821.742-1.519 1.422-2.199.68-.68 1.378-1.104 2.199-1.422.795-.308 1.72-.525 3.034-.584 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.058-2.148.262-2.913.56-.79.306-1.457.717-2.126 1.386-.669.669-1.08 1.336-1.386 2.126-.298.765-.502 1.636-.56 2.913-.058 1.28-.072 1.688-.072 4.947 0 3.259.014 3.667.072 4.947.058 1.277.262 2.148.56 2.913.306.79.717 1.457 1.386 2.126.669.669 1.336 1.08 2.126 1.386.765.298 1.636.502 2.913.56 1.28.058 1.688.072 4.947.072 3.259 0 3.667-.014 4.947-.072 1.277-.058 2.148-.262 2.913-.56.79-.306 1.457-.717 2.126-1.386.669-.669 1.08-1.336 1.386-2.126.298-.765.502-1.636.56-2.913.058-1.28.072-1.688.072-4.947 0-3.259-.014-3.667-.072-4.947-.058-1.277-.262-2.148-.56-2.913-.306-.79-.717-1.457-1.386-2.126-.669-.669-1.336-1.08-2.126-1.386-.765-.298-1.636-.502-2.913-.56-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.397 0-6.162 2.765-6.162 6.162 0 3.397 2.765 6.162 6.162 6.162 3.397 0 6.162-2.765 6.162-6.162 0-3.397-2.765-6.162-6.162-6.162zm0 10.132c-2.207 0-3.97-1.763-3.97-3.97 0-2.207 1.763-3.97 3.97-3.97 2.207 0 3.97 1.763 3.97 3.97 0 2.207-1.763 3.97-3.97 3.97zm5.099-12.658c0 .794-.644 1.438-1.438 1.438-.794 0-1.438-.644-1.438-1.438 0-.794.644-1.438 1.438-1.438.794 0 1.438.644 1.438 1.438z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://wa.me/7061543959"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-accent"
                aria-label="WhatsApp"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M17.405 6.380a9.814 9.814 0 0 0-7.788-3.725C5.074 2.655.578 7.15.578 12.693c0 1.765.442 3.488 1.285 5.002L0 24l6.45-1.681a9.927 9.927 0 0 0 4.757 1.212h.004c5.492 0 9.985-4.495 9.985-10.037a9.837 9.837 0 0 0-3.784-7.814zm-7.788 12.923h-.003a8.214 8.214 0 0 1-4.2-1.151l-.3-.178-3.11.815.829-3.027-.195-.316a8.318 8.318 0 0 1-1.272-4.321c0-4.62 3.765-8.381 8.396-8.381a8.358 8.358 0 0 1 5.918 2.453A8.355 8.355 0 0 1 20.2 12.693c0 4.623-3.767 8.382-8.397 8.382zm4.607-6.269c-.252-.126-1.492-.736-1.722-.843-.23-.106-.398-.16-.567.106-.17.266-.658.843-.807 1.02-.148.176-.296.198-.548.072-.252-.126-1.062-.391-2.028-1.25-.75-.668-1.255-1.493-1.403-1.745-.148-.252-.016-.388.11-.513.114-.114.253-.298.38-.447.126-.149.168-.252.252-.422.084-.17.042-.319-.021-.447-.063-.128-.567-1.367-.777-1.869-.205-.494-.412-.426-.567-.426-.146 0-.313-.005-.48-.005-.167 0-.438.063-.668.319-.23.256-.878.857-.878 2.09 0 1.233.899 2.421 1.025 2.59.126.168 1.77 2.701 4.286 3.788.599.258 1.066.411 1.431.526.601.191 1.149.164 1.583.101.482-.071 1.492-.609 1.702-1.197.21-.588.21-1.092.147-1.197-.063-.105-.231-.168-.483-.294z" />
                </svg>
              </motion.a>
            </div>

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

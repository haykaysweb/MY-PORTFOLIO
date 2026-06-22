import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  Copy,
  Check,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { contactSchema, type ContactFormData } from "../utils/schemaType";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

// Container variant for staggering the social icons
const socialContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const socialIconVariants = {
  hidden: { opacity: 0, scale: 0, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 12,
    },
  },
};

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = "akeredolukolawoleolaoluwa100@gmail.com";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!FORMSPREE_ENDPOINT) {
        throw new Error("Formspree endpoint is not defined");
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      return response.json();
    },
    onSuccess: () => {
      reset();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    },
    onError: () => {
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isButtonDisabled = mutation.isPending || !isValid;

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 sm:py-32 relative overflow-hidden bg-page-bg text-main-text transition-colors duration-300 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-main-text">
            Let's Build Something
          </h2>
          <p className="text-lg text-muted">
            Got a project in mind? Let's make it happen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Column Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-3 flex flex-col justify-between space-y-6 bg-surface p-6 sm:p-8 rounded-2xl border border-border transition-colors duration-300 h-full"
          >
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={`w-full px-6 py-4 rounded-xl text-lg transition-all duration-300 focus:outline-none bg-page-bg text-main-text placeholder-muted border ${
                      errors.name
                        ? "border-red-500"
                        : "border-border focus:border-accent focus:shadow-lg focus:shadow-accent/10"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={`w-full px-6 py-4 rounded-xl text-lg transition-all duration-300 focus:outline-none bg-page-bg text-main-text placeholder-muted border ${
                      errors.email
                        ? "border-red-500"
                        : "border-border focus:border-accent focus:shadow-lg focus:shadow-accent/10"
                    }`}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className={`w-full px-6 py-4 rounded-xl text-lg resize-none transition-all duration-300 focus:outline-none bg-page-bg text-main-text placeholder-muted border ${
                    errors.message
                      ? "border-red-500"
                      : "border-border focus:border-accent focus:shadow-lg focus:shadow-accent/10"
                  }`}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4 mt-auto pt-2">
              <motion.button
                type="submit"
                disabled={isButtonDisabled}
                className={`w-full py-4 rounded-xl text-lg font-medium flex items-center justify-center gap-3 transition-all duration-300 bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20 ${
                  isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                whileHover={!isButtonDisabled ? { scale: 1.02 } : {}}
                whileTap={!isButtonDisabled ? { scale: 0.98 } : {}}
              >
                {mutation.isPending ? (
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Sending...
                  </motion.span>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-accent py-2"
                >
                  <CheckCircle size={20} />
                  <span>Message sent successfully!</span>
                </motion.div>
              )}

              {showError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-red-500 py-2"
                >
                  <AlertCircle size={20} />
                  <span>Failed to send. Please try again.</span>
                </motion.div>
              )}
            </div>
          </motion.form>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 bg-surface p-6 sm:p-8 rounded-2xl border border-border flex flex-col justify-between h-full transition-colors duration-300"
          >
            <div>
              <div className="inline-flex p-4 bg-accent/10 rounded-full text-accent w-fit mb-6">
                <Mail size={32} />
              </div>

              <h3 className="text-2xl font-bold text-main-text mb-2">
                Direct Contact
              </h3>
              <p className="text-muted mb-6 text-sm sm:text-base">
                Prefer to reach out directly? Copy my email and send me a
                message.
              </p>

              <div className="bg-page-bg border border-border rounded-xl px-4 py-3.5 flex items-center justify-between gap-4 mb-6 transition-colors duration-300">
                <span className="text-main-text font-medium text-xs sm:text-sm break-all truncate">
                  {emailAddress}
                </span>
              </div>

              <motion.button
                onClick={handleCopyEmail}
                className="w-full inline-flex items-center justify-center gap-2 bg-page-bg hover:bg-surface border border-border text-main-text px-6 py-4 rounded-xl font-semibold transition-all duration-300 text-base cursor-pointer shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {copied ? (
                  <Check size={20} className="text-accent" />
                ) : (
                  <Copy size={20} />
                )}
                {copied ? "Copied!" : "Copy Email"}
              </motion.button>
            </div>

            {/* Social Links Container */}
            <div className="border-t border-border mt-8 pt-6 flex flex-col justify-start gap-4">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="text-xs font-medium text-muted tracking-wide uppercase"
              >
                Or find me on social media
              </motion.span>

              <motion.div
                variants={socialContainerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex items-center gap-6 text-muted"
              >
                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com/in/akeredolu-kolawole-7a18643b7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-accent"
                  aria-label="LinkedIn"
                  variants={socialIconVariants}
                  whileHover={{ scale: 1.2, y: -6, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.766c1.397-2.567 7-2.777 7 2.477v4.757z" />
                  </svg>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/haykaysweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-accent"
                  aria-label="GitHub"
                  variants={socialIconVariants}
                  whileHover={{ scale: 1.2, y: -6, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.313.469-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.908 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://instagram.com/haykays_world"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-accent"
                  aria-label="Instagram"
                  variants={socialIconVariants}
                  whileHover={{ scale: 1.2, y: -6, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.314.06 2.239.276 3.034.584.821.318 1.519.742 2.199 1.422.68.68 1.104 1.378 1.422 2.199.308.795.525 1.72.584 3.034.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.06 1.314-.276 2.239-.584 3.034-.318.821-.742 1.519-1.422 2.199-.68.68-1.378 1.104-2.199 1.422-.795.308-1.72.525-3.034.584-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.85-.07-1.314-.06-2.239-.276-3.034-.584-.821-.318-1.519-.742-2.199-1.422-.68-.68-1.104-1.378-1.422-2.199-.308-.795-.525-1.72-.584-3.034-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.06-1.314.276-2.239.584-3.034.318-.821.742-1.519 1.422-2.199.68-.68 1.378-1.104 2.199-1.422.795-.308 1.72-.525 3.034-.584 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.058-2.148.262-2.913.56-.79.306-1.457.717-2.126 1.386-.669.669-1.08 1.336-1.386 2.126-.298.765-.502 1.636-.56 2.913-.058 1.28-.072 1.688-.072 4.947 0 3.259.014 3.667.072 4.947.058 1.277.262 2.148.56 2.913.306.79.717 1.457 1.386 2.126.669.669 1.336 1.08 2.126 1.386.765.298 1.636.502 2.913.56 1.28.058 1.688.072 4.947.072 3.259 0 3.667-.014 4.947-.072 1.277-.058 2.148-.262 2.913-.56.79-.306 1.457-.717 2.126-1.386.669-.669 1.08-1.336 1.386-2.126.298-.765.502-1.636.56-2.913.058-1.28.072-1.688.072-4.947 0-3.259-.014-3.667-.072-4.947-.058-1.277-.262-2.148-.56-2.913-.306-.79-.717-1.457-1.386-2.126-.669-.669-1.336-1.08-2.126-1.386-.765-.298-1.636-.502-2.913-.56-1.28-.058-1.688-.072 4.947-.072zm0 5.838c-3.397 0-6.162 2.765-6.162 6.162 0 3.397 2.765 6.162 6.162 6.162 3.397 0 6.162-2.765 6.162-6.162 0-3.397-2.765-6.162-6.162-6.162zm0 10.132c-2.207 0-3.97-1.763-3.97-3.97 0-2.207 1.763-3.97 3.97-3.97 2.207 0 3.97 1.763 3.97 3.97 0 2.207-1.763 3.97-3.97 3.97zm5.099-12.658c0 .794-.644 1.438-1.438 1.438-.794 0-1.438-.644-1.438-1.438 0-.794.644-1.438 1.438-1.438.794 0 1.438.644 1.438 1.438z" />
                  </svg>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/2347061543959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-accent"
                  aria-label="WhatsApp"
                  variants={socialIconVariants}
                  whileHover={{ scale: 1.2, y: -6, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M17.405 6.380a9.814 9.814 0 0 0-7.788-3.725C5.074 2.655.578 7.15.578 12.693c0 1.765.442 3.488 1.285 5.002L0 24l6.45-1.681a9.927 9.927 0 0 0 4.757 1.212h.004c5.492 0 9.985-4.495 9.985-10.037a9.837 9.837 0 0 0-3.784-7.814zm-7.788 12.923h-.003a8.214 8.214 0 0 1-4.2-1.151l-.3-.178-3.11.815.829-3.027-.195-.316a8.318 8.318 0 0 1-1.272-4.321c0-4.62 3.765-8.381 8.396-8.381a8.358 8.358 0 0 1 5.918 2.453A8.355 8.355 0 0 1 20.2 12.693c0 4.623-3.767 8.382-8.397 8.382zm4.607-6.269c-.252-.126-1.492-.736-1.722-.843-.23-.106-.398-.16-.567.106-.17.266-.658.843-.807 1.02-.148.176-.296.198-.548.072-.252-.126-1.062-.391-2.028-1.25-.75-.668-1.255-1.493-1.403-1.745-.148-.252-.016-.388.11-.513.114-.114.253-.298.38-.447.126-.149.168-.252.252-.422.084-.17.042-.319-.021-.447-.063-.128-.567-1.367-.777-1.869-.205-.494-.412-.426-.567-.426-.146 0-.313-.005-.48-.005-.167 0-.438.063-.668.319-.23.256-.878.857-.878 2.09 0 1.233.899 2.421 1.025 2.59.126.168 1.77 2.701 4.286 3.788.599.258 1.066.411 1.431.526.601.191 1.149.164 1.583.101.482-.071 1.492-.609 1.702-1.197.21-.588.21-1.092.147-1.197-.063-.105-.231-.168-.483-.294z" />
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

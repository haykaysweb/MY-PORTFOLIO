import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { contactSchema, type ContactFormData } from "../utils/schemaType";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

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

  const isButtonDisabled = mutation.isPending || !isValid;

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 sm:py-32 relative overflow-hidden bg-surface text-main-text transition-colors duration-300 font-sans"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                id="name"
                {...register("name")}
                className={`w-full px-6 py-4 rounded-xl text-lg transition-all duration-300 focus:outline-none bg-surface text-main-text placeholder-muted border ${
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
                className={`w-full px-6 py-4 rounded-xl text-lg transition-all duration-300 focus:outline-none bg-surface text-main-text placeholder-muted border ${
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
              className={`w-full px-6 py-4 rounded-xl text-lg resize-none transition-all duration-300 focus:outline-none bg-surface text-main-text placeholder-muted border ${
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
        </motion.form>
      </div>
    </section>
  );
}

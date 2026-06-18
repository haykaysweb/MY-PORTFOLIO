import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center bg-page-bg transition-colors duration-300 font-sans">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-sm text-muted"
      >
        &copy; {currentYear} Akeredolu Kolawole O. All rights reserved.
      </motion.p>
    </footer>
  );
}
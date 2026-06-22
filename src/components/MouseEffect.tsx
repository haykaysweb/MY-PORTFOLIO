import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseEffect() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-6 h-6 bg-[#10b981] rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-multiply"
      animate={{
        x: mousePos.x - 12,
        y: mousePos.y - 12,
      }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 30,
      }}
      style={{ willChange: "transform" }}
    />
  );
}

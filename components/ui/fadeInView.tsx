"use client";
import { motion, Variants } from "framer-motion";
import { FadeInViewProps } from "@/interfaces";

const FadeInView = ({ children, delay = 0, direction = "up" }: FadeInViewProps) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={variants}>
      {children}
    </motion.div>
  );
};

export default FadeInView;

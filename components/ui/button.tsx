"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/interfaces";


const Button = ({
  label,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-2 rounded-xl font-medium text-sm transition-all duration-300";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline:
      "border border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {label || children}
    </motion.button>
  );
};

export default Button;

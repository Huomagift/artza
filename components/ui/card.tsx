"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cardProps } from "@/interfaces";

const Card = ({ children, className}: cardProps) => (
    <motion.div
        className={`rounded-2xl border border-gray-200 p-6 bg-white ${className}`}
        transition={{type:"spring", stiffness: 200}}
        whileHover={{y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.12)"}} >
        {children}
        </motion.div>
);

export default Card;
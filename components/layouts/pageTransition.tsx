import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { pageTransitionProps } from "@/interfaces";

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: -20 },
};

export default function PageTransition({ children }: pageTransitionProps) {
    const router = useRouter();

    return (
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
            <motion.div
                key={router.route}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                className="min-h-screen" >
                    {children}
                </motion.div>
        </AnimatePresence>
    );
}
"useClient";
import { motion } from "framer-motion";
import { sectionHeadingProps } from "@/interfaces";

const SectionHeading = ({ title, subtitle, align = "center" }: sectionHeadingProps) => (
  <div className={`text-${align} mb-10`}>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-400 mt-2"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionHeading;

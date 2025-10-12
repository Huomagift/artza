"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 pt-24 text-center">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to ARTZA</h1>
        <p className="text-gray-600 mb-8">
          Crafting creativity into emotion, beauty, and connection through art,
          design, and innovation.
        </p>
        <Button label="Explore Our Works" variant="primary" className="mt-4" />
      </motion.section>

      {/* Featured Works */}
      <motion.section
        className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl border p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="font-semibold mb-2">Featured Work {item}</h3>
            <p className="text-sm text-gray-500">
              A glimpse into the creative universe of ARTZA.
            </p>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}

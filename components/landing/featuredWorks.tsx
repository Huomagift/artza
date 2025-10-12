"use client";

import { motion } from "framer-motion";

export default function FeaturedArtworksPage() {
  const artworks = [
    {
      title: "Golden Harmony",
      desc: "A hand-painted abstract expression of balance and warmth.",
    },
    {
      title: "Digital Dreamscape",
      desc: "A modern digital blend of surreal art and imagination.",
    },
    {
      title: "Framed Legacy Series",
      desc: "Curated wall pieces preserving timeless artistry.",
    },
    {
      title: "Nature in Motion",
      desc: "Dynamic art inspired by movement in natural elements.",
    },
    {
      title: "Emotive Lines",
      desc: "Minimalist strokes capturing deep human emotions.",
    },
    {
      title: "The Collector’s Touch",
      desc: "Limited edition mixed-media pieces designed for collectors.",
    },
  ];

  return (
    <main className="min-h-screen px-6 pt-24 bg-black">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Featured Artworks
      </motion.h1>

      {/* Artworks Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {artworks.map((art, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-all"
          >
            <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-2xl mb-4">
              Artwork #{idx + 1}
            </div>
            <h3 className="text-xl font-semibold mb-2">{art.title}</h3>
            <p className="text-gray-600 mb-4">{art.desc}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-medium border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition"
            >
              View Details
            </motion.button>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

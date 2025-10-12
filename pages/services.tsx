"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      title: "Fine Art",
      desc: "Original artworks blending creativity and emotion.",
    },
    {
      title: "Customized Gifts",
      desc: "Personalized art pieces and keepsakes for any occasion.",
    },
    {
      title: "Event Art Experience",
      desc: "Immersive art setups for events, galleries, and showcases.",
    },
  ];

  return (
    <main className="min-h-screen px-6 pt-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Our Services
      </motion.h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border p-6 shadow-sm hover:shadow-md bg-white"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

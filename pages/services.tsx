"use client";

import React from "react";
import { Work } from "@/interfaces";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";

const Services: Work[] = [
  { id: "s1", title: "Custom Portrait" },
  { id: "s2", title: "Money Bouquet" },
  { id: "s3", title: "Interior Surprise" },
  { id: "s4", title: "Digital Print" },
  { id: "s5", title: "Framed Series" },
  { id: "s6", title: "Event Installation" },
];

// Animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 15 },
  },
};

export default function ServicesSection() {
  // Replace with your WhatsApp business number in international format (no +)
  const whatsappNumber = "2348123456789";

  // Function to handle redirect
  const handleBookService = (serviceName: string) => {
    const message = `Hello Artza Team 👋, I’m interested in booking your *${serviceName}* service. Please share more details.`;
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank");
  };

  return (
    <motion.section
      aria-labelledby="services"
      className="border-b py-12 bg-blac"
      initial="hidden"
      whileInView="show"
      variants={containerVariants}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <motion.h3
            id="services"
            className="text-2xl font-semibold"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Services
          </motion.h3>

          <motion.p
            className="text-sm text-gray-500"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Discover creative solutions designed uniquely for you
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          {Services.map((service) => (
            <motion.article
              key={service.id}
              className="border rounded-md overflow-hidden bg-amber-50 hover:shadow-xl transition-transform"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.div
                className="h-44 flex items-center justify-center text-3xl bg-gradient-to-br from-gray-200 to-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                #
              </motion.div>

              <div className="p-4">
                <h4 className="font-medium">{service.title}</h4>
                <p className="mt-2 text-sm text-gray-600">
                  {service.subtitle ?? "Book this service for your next occasion"}
                </p>
                <div className="mt-3">
                  <Button
                    variant="outline"
                    onClick={() => handleBookService(service.title)}
                  >
                    Book Our Service
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

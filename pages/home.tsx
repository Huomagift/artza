"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/button";

export default function HomePage() {
  const categories = [
    { name: "Fine Art", image: "/assets/art1.jpg" },
    { name: "Customized Gifts", image: "/assets/art2.jpg" },
    { name: "Event Art", image: "/assets/art3.jpg" },
  ];

  const featured = [
    { title: "Golden Harmony", desc: "Hand-painted abstract piece." },
    { title: "Digital Dreamscape", desc: "AI-aided surreal art." },
    { title: "Framed Legacy", desc: "Modern classics preserved." },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-20 text-center px-6 bg-white text-black">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Welcome to <span className="font-black">ARTZA</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Discover creativity redefined — unique artworks, curated collections, and
          personalized experiences that connect emotion, beauty, and innovation.
        </p>
        <Button label="Explore Artworks" variant="primary" className="mt-4" />
      </motion.section>

      {/* Categories Section */}
      <motion.section
        className="w-full max-w-6xl mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-left">Shop by Category</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-md cursor-pointer group"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">
                  {cat.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Works */}
      <motion.section
        className="w-full max-w-6xl mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-left">Featured Artworks</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-left"
            >
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4" />
              <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <Button variant="outline" label="View Details" className="text-sm" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="w-full max-w-5xl mb-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4">About ARTZA</h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          ARTZA is more than a brand — it’s a creative movement that brings imagination
          to life through fine art, customized gifts, and immersive experiences.
          Every creation is a story, every piece a connection.
        </p>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="w-full max-w-4xl py-12 border-t"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold mb-3">Bring Art to Your Space</h3>
        <p className="text-gray-600 mb-6">
          Ready to transform your environment with creativity and emotion?
        </p>
        <Link href="https://wa.me/2340000000000" target="_blank">
          <Button label="Book a Consultation" variant="primary" />
        </Link>
      </motion.section>
    </main>
  );
}

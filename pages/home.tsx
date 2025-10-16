"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function HomePage() {
  const featured = [
    { title: "Golden Harmony", desc: "Hand-painted abstract piece." },
    { title: "Digital Dreamscape", desc: "AI-aided surreal art." },
    { title: "Framed Legacy", desc: "Modern classics preserved." },
  ];

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 text-center px-6 
                 bg-black text-white bg-[url('/assets/artza-bg.jpg')] bg-cover bg-center bg-fixed"
    >
      {/* Dark overlay to make text visible */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Page content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mb-10 h-screen items-center justify-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-1 text-white/90 tracking-tight">
            ARTZA
          </h1>
          <p className="text-white/60 text-sm mb-10">
            Where <span className="text-amber-500">Vision</span> becomes{" "}
            <span className="text-amber-500">masterpiece</span>
          </p>
          <p className="text-white max-w-2xl mx-auto mt-2 mb-6">
            Artza is a luxury art and creative brand redefining how Africa
            experiences art; where technology, expression, and legacy merge to
            create timeless value. We craft sophisticated, tech-infused artworks
            and curated experiences that connect culture with prestige.
          </p>
          <Button
            label="Explore Artworks"
            variant="primary"
            className="mt-4 bg-amber-500 text-white/90"
          />
        </motion.section>

        {/* Featured Works */}
        <motion.section
          className="w-full max-w-6xl mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-8 text-left">
            Featured Artworks
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl border border-gray-200/30 p-6 shadow-sm hover:shadow-lg 
                           transition-all duration-300 text-left bg-black/30 backdrop-blur-sm"
              >
                <div className="h-48 bg-gradient-to-br from-gray-200/20 to-gray-400/30 rounded-lg mb-4" />
                <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.desc}</p>
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
          <h2 className="text-2xl font-semibold mb-4 text-amber-500">
            About ARTZA
          </h2>
          <p className="text-white/90 max-w-6xl mx-auto leading-relaxed">
            Artza was founded in Port Harcourt by young creatives from Rivers
            State, redefining how African art is seen and valued. Blending art
            and technology, we create everything from traditional works to
            digital and electronic installations that transform spaces and tell
            stories. Beyond artwork, we design luxury gift experiences and
            large-scale installations rooted in African creativity with global
            appeal. Our mission is to make African art something to invest in,
            not just admire; while supporting local artists and proving that
            world-class art is being made in Rivers State.
          </p>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="w-full max-w-6xl py-12 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-3">Bring Art to Your Space</h3>
          <p className="text-white/90 mb-6 italic">
            Ready to transform your environment with creativity and emotion?
          </p>
          <Link href="https://wa.me/2349064178807" target="_blank">
            <Button
              label="Book a Consultation"
              variant="primary"
              className="bg-amber-500 text-white/90"
            />
          </Link>
        </motion.section>
      </div>
    </main>
  );
}

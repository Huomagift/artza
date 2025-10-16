"use client";

import { eventProps } from "@/interfaces";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC<eventProps> = ({ ticketURL = "#" }) => {
  return (
    <motion.section
      aria-label="Hero"
      className="relative w-full h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute w-full h-full inset-0">
        {/* Background video */}
          <video autoPlay loop muted playsInline className="absolute object-cover w-full h-full top-0 left-0 sm:object-center object-[center_center]">
            <source src="/assets/bg_video.mp4" type="video/mp4" />
          </video>
      </div>

       <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      <div className="absolute inset-0 bg-black/70" />

      {/* Hero content */}
      <motion.div
        className="relative z-10 flex items-center justify-center px-4 md:px-8 h-full"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 text-white">
          <div className="md:text-left max-w-2xl text-white">
            <motion.h1
              className="text-3xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Image src="/assets/TSS-primary-logo-2.png" alt="Artza Logo" width={450} height={200} className="object-contain"/>
              Art For LEGACY: <span className="text-amber-500">Timed. Sealed. Timeless.</span>
            </motion.h1>

            <motion.p
              className="mt-4 text-sm md:text-base text-white/90"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              The Signature Series is <span className="font-semibold">ARTZA’s</span> premier exhibition and auction, blending art, culture, and innovation.
              On <span className="text-amber-500 font-semibold">December 14th, 2025, at Daffodil Hotel, Port Harcourt</span>, <span className="font-semibold">ARTZA</span> redefines how the city experiences creativity and connection.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-col sm:flex-row gap-3 justify-start md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                href={ticketURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded border border-black px-5 py-2 text-sm font-medium transition text-white/90 bg-amber-500 hover:bg-amber-600 hover:text-black">
                Register for Event
              </Link>

              <Link
                href="/home"
                className="inline-flex items-center justify-center rounded border border-black px-5 py-2 text-sm font-medium transition text-white/90 bg-amber-500 hover:bg-amber-600 hover:text-black">
                Explore Artza
              </Link>
            </motion.div>

            <motion.div
              className="mt-4 text-xs text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Tickets: Bronze • Silver • Gold • Platinum.
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

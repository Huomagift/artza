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
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative min-h-[450px] w-full">
        {/* Background image */}
        <motion.div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center text-6xl text-gray-300 placeholder"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/assets/Free_Billboard.jpg"
            alt="Hero image"
            className="object-cover w-full h-full rounded-lg"
            fill
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/60" />

      {/* Hero content */}
      <motion.div
        className="absolute inset-0 flex items-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 text-white">
          <div className="max-w-2xl">
            <motion.h1
              className="text-3xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Artza Signature Series — an immersive exhibition
            </motion.h1>

            <motion.p
              className="mt-4 text-sm md:text-base text-white/90"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Join us for an evening celebrating curated digital and handmade art,
              unique gift experiences, and creative encounters. Limited seats available.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                href={ticketURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded border border-white px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-black"
              >
                Register for Event
              </Link>

              <Link
                href="/home"
                className="inline-flex items-center justify-center rounded border border-white px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-black"
              >
                Explore Artza
              </Link>
            </motion.div>

            <motion.div
              className="mt-4 text-xs text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Tickets: Regular • VIP • Early Bird (links open on the ticketing platform).
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

"use client";

import React from "react";
import Link from "next/link";
import { eventProps } from "@/interfaces";
import { motion } from "framer-motion";

export default function About({ ticketURL = "#" }: eventProps) {
  return (
    <motion.section
      className="border-b"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-4">About Event</h2>
            <p className="mt-3 text-gray-700">
              The Artza Signature Series brings together local and digital artists
              for a themed exhibition showcasing contemporary pieces, commissioned works,
              and live installations. Expect curated displays, artist talks, and
              limited-edition collectibles.
            </p>

            <div className="mt-6">
              <h3 className="font-medium">Tickets & Access</h3>
              <motion.ul
                className="mt-3 space-y-2 text-sm text-gray-700"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                {[
                  "Regular — General entry, exhibition access.",
                  "VIP — Priority seating, meet-and-greet.",
                  "Early Bird — Discounted price for early purchasers.",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <strong>{item.split("—")[0]}</strong> — {item.split("—")[1]}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href={ticketURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded border px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
                >
                  Register for Event
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h4 className="text-lg font-semibold">Why attend?</h4>
            <p className="mt-3 text-gray-700">
              Connect with creatives, discover bespoke pieces, and support a new wave of
              artists. Perfect for collectors, gift seekers, and those who love immersive
              cultural experiences.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Artist Talks", "Limited Prints"].map((item, i) => (
                <motion.div
                  key={i}
                  className="border p-3 rounded-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="placeholder h-28 flex items-center justify-center text-3xl">#</div>
                  <p className="mt-2 text-sm font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
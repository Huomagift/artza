"use client";

import React from "react";
import Link from "next/link";
import { eventProps } from "@/interfaces";
import { motion } from "framer-motion";

export default function About({ ticketURL = "#" }: eventProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-black text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-16 gap-10 items-start">
          {/* About the Event */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-amber-500">
              About the Event
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>The Signature Series by Artza</strong> is more than an exhibition — 
              it’s a convergence of visionaries. It brings together collectors, investors, 
              cultural icons, and creators under one luxurious roof to celebrate a new era 
              of African expression.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              From <em>3D and Infinity Artworks</em> to <em>Electronic and Vortex installations</em>, 
              every piece showcased is crafted to evoke emotion, command attention, 
              and redefine what art can be.
            </p>

            <h3 className="font-semibold mt-6 mb-2">Guests will experience:</h3>
            <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
              <li>
                Live art auctions featuring exclusive, high-value pieces from emerging and
                established artists.
              </li>
              <li>Immersive art experiences merging creativity with technology.</li>
              <li>
                Networking moments with collectors, creators, and cultural leaders.
              </li>
              <li>
                A Post-Event Mixer where conversations turn into collaborations and
                opportunities.
              </li>
            </ul>

            <p className="text-white/80 leading-relaxed mb-4">
              This event marks the rebirth of Port Harcourt’s art scene — a declaration that
              the city’s creativity belongs on the global stage.
            </p>
            <p className="text-white/90 italic">
              Join us as we create legacy, one masterpiece at a time.
            </p>
          </motion.div>

          {/* Tickets & Access */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-amber-500">
              Tickets & Access
            </h3>
            <p className="text-white/70 mb-6">
              Experience <strong>The Signature Series</strong> the way it was meant to be — 
              with comfort, class, and exclusivity. Choose your seat at the table of culture 
              and innovation.
            </p>

            {/* Ticket Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  name: "Platinum Table",
                  price: "₦100,000",
                  desc: "Exclusive access for 6 guests. Premium catering, luxury souvenir box, and first bidding rights. (Only 5 tables available – 30 seats total.)",
                },
                {
                  name: "Gold Table",
                  price: "₦60,000",
                  desc: "Reserved access for 4 guests. Premium seating, souvenir, and access to the post-event mixer. (10 tables available – 40 seats total.)",
                },
                {
                  name: "Silver Pass",
                  price: "₦10,000",
                  desc: "Individual entry. Full exhibition and auction access, refreshments, and media coverage.",
                },
                {
                  name: "Bronze Pass",
                  price: "₦5,000",
                  desc: "General admission to exhibition and networking area.",
                },
              ].map((ticket, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="border border-white/20 rounded-md p-4 bg-white/5 backdrop-blur-sm"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-white">{ticket.name}</h4>
                    <span className="text-amber-400 font-medium">{ticket.price}</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{ticket.desc}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-white/60 text-sm mb-4">
              Tickets are limited. Early reservations are highly recommended.
            </p>

            <Link
              href={ticketURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-amber-500 text-white/80 px-5 py-2 text-sm font-medium hover:text-black transition"
            >
              Secure Your Slot
            </Link>
          </motion.div>
        </div>

        {/* Why Attend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-3 text-amber-500">Why Attend</h3>
          <ul className="list-disc list-inside space-y-2 text-white/80 text-sm text-left sm:text-center">
            <li>
              Witness Port Harcourt’s first luxury art auction and cultural showcase.
            </li>
            <li>
              Connect with investors, collectors, and creatives shaping Nigeria’s
              cultural economy.
            </li>
            <li>Discover art that moves, breathes, and illuminates emotion.</li>
            <li>Enjoy a night of elegance, music, and refined networking.</li>
          </ul>

          <p className="mt-4 text-white/70 italic max-w-xl">
            The Signature Series isn’t just an event — it’s an experience. You won’t just
            see art; you’ll feel it, own it, and become part of its story.
          </p>

          <div className="mt-6 text-sm text-white/60">
            <p>
              <strong>Date:</strong> December 14th, 2025
            </p>
            <p>
              <strong>Venue:</strong> Daffodil Hotel, Port Harcourt, Nigeria
            </p>
            <p>
              <strong>Dress Code:</strong> Luxury & Cultural Elegance
            </p>
            <p>
              <strong>Contact:</strong>{" "}
              <Link
                href="https://wa.me/2349064178807"
                target="_blank"
                className="text-amber-400"
              >
                09064178807
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

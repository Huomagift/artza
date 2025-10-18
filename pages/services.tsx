"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Luxury Fine Artworks",
    desc: `From timeless hand-painted pieces to futuristic 3D, infinity, and vortex artworks, every Artza creation is designed to move beyond aesthetics into emotion. Our works illuminate spaces, evoke stories, and invite you to experience art as living energy—soulful, intelligent, and timeless.`,
    details: `At Artza, art starts where it should: with a feeling. We work with artists who care about what they make—people who turn ideas into something you can see, touch, and live with. Whether it's a portrait that catches you off guard or a minimal piece that just feels right, each work carries the mark of the person who made it. Good work takes time, attention, and obsession, and that’s exactly what we bring.`,
    cta: "Learn More",
  },
  {
    id: 2,
    title: "Digital & Electronic Art",
    desc: `We bring innovation to imagination. Through motion art, LED installations, and interactive digital designs, we merge technology with creative mastery—redefining what modern collectors call “fine art.”`,
    details: `At Artza, technology doesn’t replace the human touch—it extends it. Our digital and electronic works respond to light, movement, and space, turning walls into experiences. From 3D light sculptures to motion-sensitive installations, each piece reacts, breathes, and transforms its environment.`,
    cta: "Learn More",
  },
  {
    id: 3,
    title: "Personalized Art & Gift Concepts",
    desc: `Artza crafts bespoke, heartfelt pieces tailored to personal stories, brands, and relationships—from engraved art frames to symbolic keepsakes.`,
    details: `We translate emotion into form, creating gifts that speak louder than words. From custom portraits to engraved wall art, every creation is built around the soul of its recipient. It’s not mass-produced. It’s not impersonal. It’s yours and yours truly.`,
    cta: "Learn More",
  },
  {
    id: 4,
    title: "Luxury Gift Packages",
    desc: `Each package is a statement curated with artistry, elegance, and meaning—combining fine art with thoughtful design.`,
    details: `Inside every Artza box are things worth keeping: small sculptures, art-inspired pieces, and curated details chosen to feel personal. For celebrations, proposals, milestones, or corporate gifting, every Artza box is built with intention.`,
    cta: "Learn More",
  },
  {
    id: 5,
    title: "Artistic Installations & Interior Experiences",
    desc: `We design immersive installations that elevate homes, offices, hotels, and event spaces into visual masterpieces.`,
    details: `Using sculpture, light, and interactive elements, we turn empty walls into something people stop and notice. Each installation is built for its environment—crafted to make a space feel alive, not just look good.`,
    cta: "Learn More",
  },
  {
    id: 6,
    title: "Brand Collaborations & Visual Concepts",
    desc: `We collaborate with brands, architects, and curators to bring artistic storytelling into commercial and cultural spaces.`,
    details: `We help brands show up differently—with art that reflects who they are. From fashion campaigns to hotel installations, every collaboration starts with your story and becomes a visual experience people remember.`,
    cta: "Learn More",
  },
  {
    id: 7,
    title: "Art Consulting & Collectors’ Advisory",
    desc: `For collectors, investors, and enthusiasts, we offer personalized guidance in art selection, valuation, and curation.`,
    details: `We connect you to emerging African creators and global voices worth collecting. Whether you’re building your first collection or expanding one, we help you buy art with confidence, knowledge, and connection.`,
    cta: "Learn More",
  },
];

// Framer motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

export default function ServicesSection() {
  const whatsappNumber = "2349073887686";

  const handleBookService = (serviceName: string) => {
    const message = `Hello Artza Team 👋, I’m interested in your *${serviceName}* service. Please share more details.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
  };

  return (
    <section className="py-16 bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-semibold mb-2">Our Services</h2>
          <p className="text-gray-400">
            Discover creative solutions designed uniquely for you
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="flex flex-col md:flex-row gap-8 items-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={fadeUp}
            >
              {/* Image Placeholder */}
              <div className="w-full md:w-1/2 h-64 bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 text-sm">
                Image Placeholder
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-medium">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
                <p className="text-gray-400 leading-relaxed">{service.details}</p>
                <Button
                  variant="outline"
                  onClick={() => handleBookService(service.title)}
                  className="mt-4 border-gray-500 bg-amber-500/80 text-gray-200 hover:bg-gray-800"
                >
                  {service.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

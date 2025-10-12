import Hero from "@/components/landing/index";
import About from "@/components/landing/about";
import React from "react";
import FeaturedWorks from "@/components/landing/featuredWorks";

export default function Landing() {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedWorks />
    </div>
  );
}
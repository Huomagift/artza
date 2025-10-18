"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/pages/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => router.push("/home"), 2500); // Redirect after 2.5s
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen px-6 pt-24 flex flex-col items-center bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Contact Us
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-6 backdrop-blur-sm"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-white/20 bg-transparent rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-white/20 bg-transparent rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border border-white/20 bg-transparent rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 outline-none"
          ></textarea>
        </div>

        <Button
          label={status === "sending" ? "Sending..." : "Send Message"}
          type="submit"
          variant="primary"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition"
        />

        {status === "success" && (
          <div className="mt-4 p-3 text-sm bg-green-600/30 border border-green-500 text-green-300 rounded-lg text-center">
            ✅ Message sent successfully! Redirecting...
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 p-3 text-sm bg-red-600/30 border border-red-500 text-red-300 rounded-lg text-center">
            ❌ Something went wrong. Please try again.
          </div>
        )}
      </motion.form>
    </main>
  );
}

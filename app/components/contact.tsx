"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl p-10"
      >
        <h2 className="text-4xl font-bold text-center">
          Let's Work Together
        </h2>

        <p className="text-center text-zinc-400 mt-4 max-w-2xl mx-auto">
          I'm currently open to internships, freelance work,
          and full-time opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <Mail className="text-violet-400" />
              <span>mudassir7991@gmail.com</span>
            </div>

            <div className="flex gap-4 items-center">
              <Phone className="text-violet-400" />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="flex gap-4 items-center">
              <MapPin className="text-violet-400" />
              <span>New Delhi, India</span>
            </div>

            <div className="flex gap-5 pt-4 text-2xl">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-violet-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-violet-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-3 outline-none focus:border-violet-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-3 outline-none focus:border-violet-500"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-3 outline-none focus:border-violet-500"
            />

            <button
              className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-[1.02] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>

      <footer className="mt-16 text-center text-zinc-500">
        © 2025 Mudassir Akhter. Built with Next.js & Tailwind CSS.
      </footer>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const timeline = [
  {
    title: "Bachelor of Technology",
    company: "JMS Group Of Institutions",
    period: "2022 - 2025",
    location: "Uttar Pradesh",
    icon: GraduationCap,
  },
  {
    title: "Diploma in Computer Science",
    company: "Jamia Millia Islamia",
    period: "2018 - 2021",
    location: "New Delhi",
    icon: GraduationCap,
  },
  {
    title: "Web Development Cohort",
    company: "Chai Aur Code",
    period: "2026 - Present",
    location: "Remote",
    icon: Briefcase,
  },
];

export default function Education() {
  return (
    <section
      id="experience"
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Education & Journey
      </motion.h2>

      <div className="relative border-l border-zinc-700 ml-4">
        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 ml-8"
            >
              <div className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-violet-600">
                <Icon size={20} />
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm hover:border-violet-500 transition">
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-violet-400 mt-1">
                  {item.company}
                </p>

                <p className="text-zinc-400 text-sm mt-2">
                  {item.period}
                </p>

                <p className="text-zinc-500 text-sm">
                  {item.location}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
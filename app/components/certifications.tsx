"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    description:
      "Built responsive websites using HTML5, CSS3, Flexbox, Grid, and Mobile-First Design.",
  },
  {
    title: "Full Stack Development Cohort",
    issuer: "Chai Aur Code",
    description:
      "Learning React, Next.js, Node.js, Express, MongoDB, Authentication, APIs, and Deployment.",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm hover:border-violet-500 transition-all"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-xl bg-violet-600/20">
                {index === 0 ? (
                  <Award className="text-violet-400" />
                ) : (
                  <BadgeCheck className="text-violet-400" />
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {cert.title}
                </h3>

                <p className="text-violet-400">
                  {cert.issuer}
                </p>
              </div>
            </div>

            <p className="text-zinc-400 leading-relaxed">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Junior Software Developer",
    company: "Anchovies IT Solutions",
    duration: "Aug 2025 - Present",
    achievements: [
      "Designed and implemented GST API integration for automated GSTR-1 filing.",
      "Developed RESTful APIs for invoice creation, search and retrieval.",
      "Integrated invoice export module with Tally ERP.",
      "Built dynamic reporting modules using DevExtreme MVC.",
      "Developed server-side rendered React components.",
      "Optimized SQL queries and stored procedures.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Anchovies IT Solutions",
    duration: "Oct 2024 - Jul 2025",
    achievements: [
      "Contributed to SaaS Billing Application development.",
      "Built AngularJS dashboard modules.",
      "Implemented API integrations for billing workflows.",
      "Improved SQL query performance.",
      "Assisted backend development in ASP.NET MVC.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="heading-font gradient-text mb-16 text-center text-4xl font-bold">
          Work Experience
        </h2>

        <div className="relative border-l border-white/10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="relative mb-12 ml-8"
            >
              <div className="timeline-dot absolute -left-12 top-2 h-5 w-5 rounded-full bg-blue-500" />

              <div className="glass rounded-3xl p-8">
                <span className="text-sm text-blue-400">
                  {exp.duration}
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  {exp.title}
                </h3>

                <p className="mb-6 text-gray-400">
                  {exp.company}
                </p>

                <ul className="space-y-3">
                  {exp.achievements.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-gray-300"
                    >
                      <span className="mt-1 text-blue-400">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
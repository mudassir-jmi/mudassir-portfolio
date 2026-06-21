"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "AngularJS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "ASP.NET MVC",
      "REST APIs",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Database",
    skills: [
      "SQL Server",
      "Stored Procedures",
      "Query Optimization",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "DevExtreme",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="heading-font gradient-text mb-16 text-center text-4xl font-bold">
          Skills & Technologies
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="mb-6 text-2xl font-bold">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:scale-105 hover:border-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
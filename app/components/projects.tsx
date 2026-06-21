"use client";

import { motion } from "framer-motion";
import { FaGithub} from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "SaaS Billing Platform",
    description:
      "Enterprise billing solution featuring GST automation, invoice management, reporting dashboards, REST APIs, and Tally ERP integration.",

    tech: [
      "ASP.NET MVC",
      "SQL Server",
      "AngularJS",
      "REST API",
      "DevExtreme",
    ],

    github: "#",
    live: "#",
  },

  {
    title: "Chrome Extension - Image Extractor",
    description:
      "Chrome extension for extracting images and screenshots from websites with ZIP downloads, real-time previews, and DOM parsing.",

    tech: [
      "JavaScript",
      "Chrome API",
      "HTML",
      "CSS",
    ],

    github: "https://github.com/mudassir-jmi",
    live: "#",
  },

  {
    title: "SPWebCrafts",
    description:
      "SEO-optimized business website built with Next.js and modern web standards to improve search rankings and user engagement.",

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "SEO",
    ],

    github: "https://github.com/mudassir-jmi",
    live: "#",
  },
];


export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="heading-font gradient-text mb-16 text-center text-4xl font-bold">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                delay: index * 0.15,
              }}
              className="group glass rounded-3xl overflow-hidden hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />

              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mb-6 text-gray-400">
                  {project.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 transition hover:border-blue-500"
                  >
                    <FaGithub size={18} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 transition hover:bg-blue-500"
                  >
                    <ArrowUpRight size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
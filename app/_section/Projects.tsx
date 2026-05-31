const projects = [
  {
    title: "SaaS Billing Application",
    description:
      "Enterprise billing platform with GST integration, invoice management, reporting and Tally ERP export.",

    tech: [
      "ASP.NET MVC",
      "SQL Server",
      "REST API",
      "DevExtreme",
    ],

    github: "#",
    demo: "#",
  },

  {
    title: "Chrome Extension - Image Extractor",

    description:
      "Chrome extension for extracting website images, screenshots and bulk downloading media.",

    tech: [
      "JavaScript",
      "Chrome API",
      "HTML",
      "CSS",
    ],

    github: "#",
    demo: "#",
  },

  {
    title: "SPWebCrafts",

    description:
      "SEO optimized website built with Next.js focused on performance and modern design.",

    tech: [
      "Next.js",
      "React",
      "Tailwind",
      "SEO",
    ],

    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-10 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Featured Projects
        </h2>

        <p className="text-center mt-4 text-zinc-500">
          A few projects I've worked on.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group border rounded-3xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="h-52 bg-gradient-to-br from-blue-500 to-purple-600" />

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-zinc-600">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    className="px-4 py-2 rounded-lg border"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="px-4 py-2 rounded-lg bg-black text-white"
                  >
                    Live Demo
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
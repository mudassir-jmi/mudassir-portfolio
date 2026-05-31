const experiences = [
  {
    title: "Junior Software Developer",
    company: "Anchovies IT Solutions",
    period: "Aug 2025 - Present",
    points: [
      "Built SaaS billing application features",
      "Developed GST integrations",
      "Created REST APIs",
      "Optimized SQL queries",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Anchovies IT Solutions",
    period: "Oct 2024 - Jul 2025",
    points: [
      "Worked on AngularJS dashboard modules",
      "Built backend APIs",
      "Improved database performance",
      "Integrated business workflows",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="pt-5 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Experience
        </h2>

        <div className="mt-16 space-y-8">

          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="border rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold">
                {exp.title}
              </h3>

              <p className="text-zinc-500 mt-1">
                {exp.company}
              </p>

              <p className="text-sm mt-2">
                {exp.period}
              </p>

              <ul className="mt-4 space-y-2">
                {exp.points.map((point) => (
                  <li key={point}>
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
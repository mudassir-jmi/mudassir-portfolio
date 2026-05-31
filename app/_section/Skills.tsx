const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "ASP.NET MVC",
  "REST APIs",
  "SQL Server",
  "AngularJS",
  "Git",
  "Postman",
  "Bootstrap",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Skills & Technologies
        </h2>

        <p className="text-center mt-4 text-zinc-500">
          Technologies I use to build modern applications.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-12">

          {skills.map((skill) => (
            <div
              key={skill}
              className="group border rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="font-semibold text-lg">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
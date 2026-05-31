import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="inline-block px-4 py-2 rounded-full border border-zinc-700 text-sm">
          👋 Welcome to my portfolio
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold">
          MD Mudassir Akhter
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl text-zinc-500">
          Full Stack Developer
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-lg text-zinc-600">
          Building scalable SaaS applications,
          REST APIs, automation tools and modern
          web experiences with Next.js, React,
          ASP.NET MVC and SQL Server.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <button className="px-6 py-3 rounded-xl bg-black text-white hover:scale-105 transition cursor-pointer">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-xl border hover:scale-105 transition cursor-pointer">
            Download Resume
          </button>

        </div>

        <div className="flex justify-center gap-6 mt-10 text-3xl">

          <a
            href="https://github.com/mudassir-jmi"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/mudassir-akhter"
            target="_blank"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  );
}
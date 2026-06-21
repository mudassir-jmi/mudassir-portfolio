"use client";

import { TypeAnimation } from "react-type-animation";
import { portfolio } from "../lib/data";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="max-w-4xl text-center">
        <p className="mb-4 text-blue-400">
          Hello, I'm
        </p>

        <h1 className="heading-font text-6xl font-bold md:text-8xl">
          {portfolio.name}
        </h1>

        <div className="mt-6 text-2xl md:text-4xl">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Next.js Developer",
              2000,
              "API Builder",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-gray-400">
          {portfolio.description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
  <a
    href="#projects"
    className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:scale-105"
  >
    View Projects
  </a>

  <a
    href="/Mudassir_CV.pdf"
    download
    className="glass rounded-xl px-6 py-3 transition hover:scale-105"
  >
    Download CV
  </a>
</div>

<div className="mt-8 flex justify-center gap-6">
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

  <a href="mailto:mudassir7991@gmail.com">
    <Mail />
  </a>
  <a
    href="https://x.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaXTwitter />
  </a>
</div>
      </div>
    </section>
  );
}
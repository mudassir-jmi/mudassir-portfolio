import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-5 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-5xl font-bold">
          Let's Build Something
        </h2>

        <p className="mt-6 text-zinc-500">
          Open to full-time opportunities,
          freelance projects and collaboration.
        </p>

        <div className="flex justify-center gap-6 mt-10">

          <a
            href="mailto:mudassir7991@gmail.com"
            className="border rounded-xl px-5 py-3"
          >
            <Mail />
          </a>

          <a
            href="https://github.com/mudassir-jmi"
            target="_blank"
            className="border rounded-xl px-5 py-3"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/mudassir-akhter"
            target="_blank"
            className="border rounded-xl px-5 py-3"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  );
}
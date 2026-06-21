"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass mt-4 flex items-center justify-between rounded-2xl px-6 py-4">
          <h2 className="heading-font text-xl font-bold">
            Mudassir.dev
          </h2>

          <nav className="hidden gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-300 transition hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="glass mt-2 rounded-2xl p-4 md:hidden">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-2"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
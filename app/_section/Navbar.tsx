import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-5">
        <div className="
          flex items-center justify-between
          rounded-full
          border border-zinc-300 dark:border-zinc-700
          bg-white/95 dark:bg-zinc-900/80
          backdrop-blur-xl
          px-6 py-3
          shadow-lg
        ">
          {/* Logo */}
          <a
            href="#"
            className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white"
          >
            Mudassir<span className="text-blue-500">.</span>
          </a>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-sm
                  font-medium
                  text-zinc-800
                  dark:text-zinc-200
                  hover:text-blue-600
                  dark:hover:text-blue-400
                  transition-colors
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href="/resume.pdf"
              download
              className="
                hidden md:block
                rounded-full
                bg-zinc-900
                text-white
                dark:bg-white
                dark:text-zinc-900
                px-4 py-2
                text-sm
                font-medium
                hover:scale-105
                transition
              "
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
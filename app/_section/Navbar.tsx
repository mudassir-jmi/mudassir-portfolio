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
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border bg-white/70 backdrop-blur-md px-6 py-4">

          <h2 className="font-bold text-xl">
            Mudassir
          </h2>

          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

         <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
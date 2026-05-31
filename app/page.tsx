import Navbar from "./_section/Navbar";
import Hero from "./_section/Hero";
import About from "./_section/About";
import Skills from "./_section/Skills";
import Experience from "./_section/Experience";
import Projects from "./_section/Projects";
import Education from "./_section/Education";
import Footer from "./_section/Footer";
import Contact  from "./_section/Contact";

export default function Home() {
  return (
    <>
    <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
import Navbar from "./_section/Navbar";
import Hero from "./_section/Hero";
import About from "./_section/About";

export default function Home() {
  return (
    <>
    <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
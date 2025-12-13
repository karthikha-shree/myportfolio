import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-retro-bg dark:bg-midnight-bg text-retro-text dark:text-midnight-text transition-all duration-300">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      
    </div>
  );
}

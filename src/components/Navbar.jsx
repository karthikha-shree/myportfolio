import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/50 dark:bg-black/40 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-black dark:text-white">
          {"<"}KS{"/>"}
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center">
          <a className="hover:text-pink-500 dark:hover:text-pink-400" href="#home">Home</a>
          <a className="hover:text-pink-500 dark:hover:text-pink-400" href="#projects">Projects</a>
          <a className="hover:text-pink-500 dark:hover:text-pink-400" href="#skills">Skills</a>
          <a className="hover:text-pink-500 dark:hover:text-pink-400" href="#contact">Contact</a>

          <ThemeToggle />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl text-black dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/60 dark:bg-black/60 backdrop-blur-xl shadow-lg px-6 py-4 flex flex-col gap-4 text-lg"
        >
          <a onClick={() => setMenuOpen(false)} className="hover:text-pink-500 dark:hover:text-pink-400" href="#home">Home</a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-pink-500 dark:hover:text-pink-400" href="#projects">Projects</a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-pink-500 dark:hover:text-pink-400" href="#skills">Skills</a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-pink-500 dark:hover:text-pink-400" href="#contact">Contact</a>

          <div className="mt-2">
            <ThemeToggle />
          </div>
        </motion.div>
      )}
    </nav>
  );
}

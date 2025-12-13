import { motion } from "framer-motion";

const projects = [
  {
    title: "CSCORSENEST – Department Material Management",
    description:
      "A full MERN platform for college departments to manage syllabus, notes, CIAT, and semester papers with Cloudinary storage and admin dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary",'JWT'],
    github: "https://github.com/karthikha-shree/cscoursenest.git",
    live: "",
  },
  {
    title: "College Question Bank System",
    description:
      "Regulation-wise Question Bank website with admin authentication, PDF management, file uploads, and dynamic department/semester creation.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    github: "https://github.com/karthikha-shree/siet_qb.git",
    live: "https://siet-qb.vercel.app",
  },
  {
    title: "E-Commerce Gadget Store (Internship Project)",
    description:
      "A complete MERN E-Commerce project with cart, filters, product pages, user login, and Redux state handling.",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/karthikha-shree/ecommerce-gadget-.git",
    live: "",
  },
  {
    title: "Text-Based Adventure Game (IJCRT Publication)",
    description:
      "A Python GUI-based adventure game using Tkinter, Pygame, animations, and combat mechanics. Published in IJCRT Journal.",
    tech: ["Python", "Tkinter", "Pygame"],
    github: "https://github.com/karthikha-shree/text-based-adventure-game.git",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-retro-text dark:text-midnight-text"
      >
        Projects
      </motion.h2>

      {/* Project Cards Grid */}
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl shadow-xl bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-retro-text dark:text-midnight-primary">
              {project.title}
            </h3>

            <p className="mt-3 text-retro-subtext dark:text-midnight-subtext">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-retro-primary/20 dark:bg-midnight-primary/20 text-retro-primary dark:text-midnight-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="px-5 py-2 rounded-xl bg-midnight-primary dark:bg-retro-primary text-white font-semibold hover:scale-105 transition-all"
              >
                GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="px-5 py-2 rounded-xl bg-retro-secondary dark:bg-midnight-secondary text-white font-semibold hover:scale-105 transition-all"
                >
                Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

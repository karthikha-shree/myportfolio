import { motion } from "framer-motion";
import { FaCode, FaServer, FaBrain, FaTools } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-blue-500 dark:text-pink-400 text-3xl" />,
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-blue-500 dark:text-pink-400 text-3xl" />,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "Authentication (JWT)",
    ],
  },
  {
    title: "Other Skills",
    icon: <FaBrain className="text-blue-500 dark:text-pink-400 text-3xl" />,
    skills: [
      "Python",
      
      "Machine Learning Basics",
      
      "Prompt Engineering",
      "Problem Solving",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <FaTools className="text-blue-500 dark:text-pink-400 text-3xl" />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "PyCharm",
      "Postman",
      "Cloudinary",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 max-w-7xl mx-auto">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-12 
        text-black dark:text-white tracking-wide"
      >
        Skills & Expertise
      </motion.h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}

            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 20px rgba(0,0,0,0.15)",
            }}

            className="p-8 rounded-2xl shadow-xl bg-white dark:bg-[#0f172a] 
            border border-gray-200 dark:border-gray-700"
          >
            {/* ICON + TITLE */}
            <div className="flex items-center gap-4 mb-3">
              {category.icon}
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                {category.title}
              </h3>
            </div>

            {/* SKILL CHIPS */}
            <div className="mt-4 flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  className="
    px-3 py-1 text-sm rounded-full font-medium
    bg-[#ffe1e1] text-[#ff6b6b] 
    dark:bg-[#1e293b] dark:text-[#38bdf8]
  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

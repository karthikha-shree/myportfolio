import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
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
    title: "AI / ML & Python",
    skills: [
      "Python",
      "OCR & Document Processing",
      "Machine Learning Basics",
      "Game Development",
    ],
  },
  {
    title: "Tools & Platforms",
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
    <section id="skills" className="px-6 py-20 max-w-7xl mx-auto">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white"
      >
        Skills
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl shadow-xl bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-black dark:text-white">
              {category.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full 
                  bg-[#ffe1e1] dark:bg-[#1e293b]
                  text-[#ff6b6b] dark:text-[#38bdf8]
                  font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FaCode, FaBrain, FaServer, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 text-black dark:text-white"
      >
        About Me
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT — PERSONAL INTRO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
            Who Am I?
          </h3>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m <span className="font-bold">Karthikha Shree</span>, a passionate  
            <span className="font-semibold text-pink-500"> MERN Stack Developer</span>  
            and  
            <span className="font-semibold text-blue-500 dark:text-yellow-300"> AI/ML Enthusiast</span>.  
            My focus is on building intelligent, scalable digital experiences that solve real-world problems.
          </p>

          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I specialize in backend engineering, OCR automation, cloud deployments,
            and crafting modern UI experiences with deep attention to detail and performance.
          </p>

          {/* QUOTE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 p-5 rounded-xl bg-gradient-to-r from-pink-200/40 to-yellow-200/40 
                       dark:from-blue-900/30 dark:to-purple-900/30 border border-gray-300 dark:border-gray-700"
          >
            <p className="italic text-gray-700 dark:text-gray-300 text-md">
              “Code is not just logic — it’s a way to turn imagination into reality.”
            </p>
          </motion.div>

          

        </motion.div>

        {/* RIGHT — EDUCATION + TIMELINE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-black dark:text-white">
            {"   ->"}Education & Journey
          </h3>

          {/* TIMELINE */}
          <div className="space-y-6 border-l-4 border-pink-500 dark:border-blue-400 pl-6">

            {/* ENGINEERING */}
            <div>
              <h4 className="text-xl font-semibold text-black dark:text-white">
                B.E. CSE (2023 – Present)
              </h4>
              <p className="text-gray-700 dark:text-gray-400">Sri Shakthi Institute of Engineering and Technology</p>
              <p className="text-gray-600 dark:text-gray-300">CGPA - 8.25</p>
            </div>

            {/* HSC */}
            <div>
              <h4 className="text-xl font-semibold text-black dark:text-white">
                HSC (State Board) — 86%
              </h4>
              <p className="text-gray-700 dark:text-gray-400">
                Vijayalakshmi Matric Hr. Sec. School
              </p>
              <p className="text-gray-600 dark:text-gray-500">Sirumugai, Mettupalayam, Coimbatore</p>
            </div>

            {/* SSLC */}
            <div>
              <h4 className="text-xl font-semibold text-black dark:text-white">
                SSLC (State Board)
              </h4>
              <p className="text-gray-700 dark:text-gray-400">
                Vijayalakshmi Matric Hr. Sec. School
              </p>
            </div>
          </div>

          

        </motion.div>
      </div>
    </section>
  );
}

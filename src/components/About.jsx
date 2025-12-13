import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 max-w-7xl mx-auto">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white"
      >
        About Me
      </motion.h2>

      {/* Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

        {/* LEFT — IMAGE */}
        <motion.img
          src="/image.png"
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-xl border-4 
          border-retro-secondary dark:border-midnight-primary"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        /> 

        {/* RIGHT — TEXT */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-black dark:text-white">
            Who Am I?
          </h3>

          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m <span className="font-bold">Karthikha Shree</span>, a passionate
            <span className="font-semibold text-pink-500"> MERN Stack Developer</span> 
            and <span className="font-semibold text-blue-400 dark:text-yellow-300">AI/ML Enthusiast</span>.
            I specialize in building scalable full-stack applications, secure APIs,
            and intelligent systems that solve real-world problems.
          </p>

          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I enjoy exploring cloud deployments, OCR automation, backend engineering,
            and crafting clean UI experiences. My goal is to become a highly skilled 
            software engineer capable of building impactful digital products.
          </p>

          {/* Highlight Box */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 p-5 rounded-xl bg-[#ffe1e1] dark:bg-[#1e293b] border border-gray-300 dark:border-gray-600 shadow-md"
          >
            <p className="text-lg font-semibold text-[#ff6b6b] dark:text-[#38bdf8]">
              🎓 Education
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              B.Tech in Computer Science Engineering  
              <br />
              <span className="text-sm">Sri Shakthi Institute of Engineering and Technology</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

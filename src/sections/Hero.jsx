import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
export default function Hero() {
  // Role stagger animations
  const roleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const roleItem = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="min-h-screen px-6 pt-28 flex flex-col-reverse md:flex-row items-center md:items-center justify-center gap-12"
    >
      {/* LEFT SIDE — TEXT */}
      <motion.div
        className="text-left max-w-xl w-full"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-lg md:text-xl text-retro-subtext dark:text-midnight-subtext">
          Hi, I’m
        </h2>

        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-400 text-transparent bg-clip-text">
          Karthikha Shree
        </h1>

        {/* ANIMATED ROLE TEXT
        <motion.div
          className="mt-4 flex flex-col md:text-xl text-lg text-retro-text dark:text-midnight-text gap-1"
          variants={roleContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={roleItem} className="font-medium">
            MERN Stack Developer
          </motion.p>

          <motion.p variants={roleItem} className="font-medium">
            AI/ML Enthusiast
          </motion.p>

          <motion.p variants={roleItem} className="font-medium">
            Full-Stack Innovator
          </motion.p>
        </motion.div> */}
        {/* TYPING ROLE TEXT */}
        <p className="mt-4 md:text-xl text-lg font-semibold text-retro-text dark:text-midnight-text">
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Turning Ideas into Scalable Web Solutions",
              "Full-Stack Innovator",
            ]}
            loop={0}          // infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>

        <p className="mt-4 text-md md:text-lg text-retro-subtext dark:text-midnight-subtext">
          I build scalable full-stack web applications and robust backends using modern technologies, with a strong focus on real-world problem solving.
        </p>

        {/* SOCIAL ICONS */}
        <div className="mt-6 flex justify-start gap-6">
          {[
            {
              href: "https://www.linkedin.com/in/karthikha-shree-s-m-4315ba296",
              icon: "fa-brands fa-linkedin",
            },
            {
              href: "https://github.com/karthikha-shree",
              icon: "fa-brands fa-github",
            },
            {
              href: "https://leetcode.com/u/karthikha_shree/",
              icon: "fa-solid fa-code",
            },
            {
              href: "https://www.hackerrank.com/profile/karthikha_2006",
              icon: "fa-brands fa-hackerrank",
            },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: idx * 0.2 }}
              className="text-3xl text-retro-text dark:text-midnight-text hover:text-retro-primary dark:hover:text-midnight-primary transition-all"
            >
              <i className={item.icon}></i>
            </motion.a>
          ))}
        </div>
        {/* ALL BUTTONS TOGETHER */}
        <div className="mt-8 flex flex-wrap gap-4">

          {/* View Projects */}
          <a
            href="#projects"
            className="w-full md:w-48 text-center px-6 py-3 rounded-xl bg-midnight-primary dark:bg-retro-primary text-white font-semibold hover:scale-105 transition-all"
          >
            View Projects
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
           
            className="w-full md:w-48 text-center px-6 py-3 rounded-xl bg-midnight-primary dark:bg-retro-primary text-white font-semibold hover:scale-105 transition-all"
          >
            Contact Me
          </a>

          {/* View Resume */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Karthikha_Resume.pdf"
            target="_blank"
             className="w-full md:w-48 text-center px-6 py-3 rounded-xl bg-midnight-secondary dark:bg-retro-secondary text-white font-semibold hover:scale-105 transition-all"
          >
            View Resume
          </motion.a>

          {/* Download Resume */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Karthikha_Resume.pdf"
            download="Karthikha_Shree_Resume.pdf"
            className="w-full md:w-48 text-center px-6 py-3 rounded-xl bg-midnight-secondary dark:bg-retro-secondary text-white font-semibold hover:scale-105 transition-all"
          >
            Download Resume
          </motion.a>

        </div>

      </motion.div>



      {/* RIGHT SIDE  */}
      <motion.img
        src="/profile.png"
        alt="Karthikha"
        className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border-4 border-retro-secondary dark:border-midnight-primary shadow-xl"
        initial={{ opacity: 0, x: 40 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -10, 0], // bounce ONLY
        }}
        transition={{
          opacity: { duration: 0.8 },
          x: { duration: 0.8 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </section>
  );
}

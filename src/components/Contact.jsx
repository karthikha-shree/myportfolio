import { motion } from "framer-motion";
import { useState } from "react";

export default function Connect() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const res = await fetch("https://formsubmit.co/karthikha.2006@gmail.com", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-3 text-black dark:text-white">
        Let’s Connect
      </h2>

      <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Have a project in mind or want to chat? I’d love to hear from you.
        Let’s create something amazing together!
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-retro-surface dark:bg-midnight-surface p-8 rounded-2xl shadow-xl space-y-6 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-semibold text-retro-text dark:text-midnight-text mb-4">
            Get in Touch
          </h3>

          {/* EMAIL */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/60 dark:bg-black/40">
            <i className="fa-solid fa-envelope text-xl text-retro-primary dark:text-midnight-primary"></i>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="font-medium">karthikha.2006@gmail.com</p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/60 dark:bg-black/40">
            <i className="fa-solid fa-phone text-xl text-retro-primary dark:text-midnight-primary"></i>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
              <p className="font-medium">+91 9500643892</p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/60 dark:bg-black/40">
            <i className="fa-solid fa-location-dot text-xl text-retro-primary dark:text-midnight-primary"></i>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
              <p className="font-medium">Tamil Nadu, India</p>
            </div>
          </div>

          {/* SOCIAL */}
          <h3 className="text-xl font-semibold mt-6 text-retro-text dark:text-midnight-text">
            Follow Me
          </h3>

          <div className="flex gap-4 mt-2">
            {[
              { icon: "fa-brands fa-github", link: "https://github.com/karthikha-shree" },
              { icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com/in/karthikha-shree-s-m-4315ba296" },
              { icon: "fa-brands fa-hackerrank", link: "https://www.hackerrank.com/profile/karthikha_2006" },
              { icon: "fa-solid fa-code", link: "https://leetcode.com/u/karthikha_shree/" }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="p-3 rounded-xl bg-white dark:bg-black text-black dark:text-white text-xl shadow"
              >
                <i className={item.icon}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CONTACT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-retro-surface dark:bg-midnight-surface p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 space-y-6"
        >
          <h3 className="text-2xl font-semibold text-retro-text dark:text-midnight-text mb-4">
            Send Message
          </h3>

          {status === "success" && (
            <p className="p-3 text-center rounded-lg bg-teal-500 text-white font-semibold">
             Thank you for contacting me ! I will get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="p-3 text-center rounded-lg bg-red-600 text-white font-semibold">
              Failed to send message
            </p>
          )}

          <input type="hidden" name="_captcha" value="false" />

          <div className="grid grid-cols-2 gap-4">
            <input
              required
              name="name"
              placeholder="Enter your name"
              className="p-3 rounded-lg bg-white dark:bg-black/40 border dark:border-gray-700"
            />

            <input
              required
              name="email"
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg bg-white dark:bg-black/40 border dark:border-gray-700"
            />
          </div>

          <input
            required
            name="subject"
            placeholder="What’s this about?"
            className="w-full p-3 rounded-lg bg-white dark:bg-black/40 border dark:border-gray-700"
          />

          <textarea
            required
            name="message"
            placeholder="Tell me about your project or just say hi!"
            className="w-full p-3 h-40 rounded-lg bg-white dark:bg-black/40 border dark:border-gray-700"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full p-3 rounded-lg bg-midnight-primary dark:bg-retro-primary text-white font-semibold shadow"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-gray-300 dark:border-gray-700 pt-10 py-6 text-black dark:text-white">
        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold">KS.dev</h3>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-400">
              Building tomorrow’s web with scalable backend, modern UI, and real-world solutions.
            </p>
            <p className="text-green-600 dark:text-green-400 mt-2 text-sm">
              ● Available for new projects
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2">
              <li><a className="text-gray-700 dark:text-gray-300" href="#home">Home</a></li>
              <li><a className="text-gray-700 dark:text-gray-300" href="#skills">Skills</a></li>
              <li><a className="text-gray-700 dark:text-gray-300" href="#projects">Projects</a></li>
              <li><a className="text-gray-700 dark:text-gray-300" href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <p className="text-gray-700 dark:text-gray-300">📧 karthikha.2006@gmail.com</p>
            <p className="text-gray-700 dark:text-gray-300">📍 Tamil Nadu, India</p>
          </div>

          {/* FOLLOW ME */}
          <div>
            <h4 className="font-semibold mb-3">Follow Me</h4>
            <div className="flex gap-3">
              {[
                { icon: "fa-brands fa-github", link: "https://github.com/karthikha-shree" },
                { icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com/in/karthikha-shree-s-m-4315ba296" },
                { icon: "fa-brands fa-hackerrank", link: "https://www.hackerrank.com/profile/karthikha_2006" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="p-2 rounded-lg bg-gray-200 dark:bg-black/40 text-black dark:text-white shadow"
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center mt-10 text-gray-700 dark:text-gray-400 text-sm">
          © 2025 Karthikha Shree. All rights reserved.
        </p>
      </footer>
    </section>
  );
}

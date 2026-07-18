import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
  FaDownload,
  FaEye,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0B0F19] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Section */}
        <div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block border border-cyan-400 text-cyan-400 px-5 py-2 rounded-full font-medium"
          >
            🚀 AVAILABLE FOR OPPORTUNITIES
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-6xl md:text-8xl font-extrabold leading-tight"
          >
            Edara
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Karthik.
            </span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Java Full Stack Developer",
              2000,
              "Spring Boot Developer",
              2000,
              "React Developer",
              2000,
              "Backend Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="block mt-6 text-2xl md:text-4xl font-semibold text-cyan-400"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-xl text-lg leading-8 text-gray-400"
          >
            Passionate Java Full Stack Developer with experience building
            scalable, secure, and responsive web applications using Java,
            Spring Boot, React, MySQL, REST APIs, and modern frontend
            technologies.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              🚀 See My Work
            </a>

            <a
              href="/Edara-Karthik-SE-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cyan-400 px-8 py-4 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              <FaEye />
              View Resume
            </a>

            <a
              href="/Edara-Karthik-SE-Resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-cyan-400 px-8 py-4 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/Edarakarthik-chowdary"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/edara-karthik-0029471a4/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

            {[
              ["2+", "Years"],
              ["10+", "Projects"],
              ["15+", "Technologies"],
              ["100%", "Dedication"],
            ].map(([value, label]) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.08 }}
                className="bg-[#151A28] rounded-xl p-5 border border-cyan-500/20 text-center"
              >
                <h2 className="text-4xl font-bold text-cyan-400">{value}</h2>
                <p className="text-gray-400 mt-2">{label}</p>
              </motion.div>
            ))}

          </div>

        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [1, 1.03, 1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-20"></div>

            <img
              src="/profile.jpeg"
              alt="Edara Karthik"
              className="relative w-[420px] h-[420px] object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_80px_#06b6d4] hover:scale-110 hover:rotate-2 transition-all duration-500"
            />

          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 text-3xl"
      >
        <FaArrowDown />
      </motion.div>

    </section>
  );
}
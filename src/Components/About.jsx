import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaDatabase,
  FaDownload,
  FaEye,
  FaMapMarkerAlt,
  FaBriefcase,
  FaFolderOpen,
  FaCheckCircle,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-[#111827] text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Passionate about building modern web applications with Java,
            Spring Boot and React.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-3xl bg-cyan-400 blur-3xl opacity-20"></div>

              <img
                src="/profile.jpeg"
                alt="Edara Karthik"
                className="relative w-[400px] md:w-[450px] rounded-3xl border-4 border-cyan-400 shadow-[0_0_50px_#06b6d4] hover:scale-105 transition duration-500"
              />

            </div>
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold">
              Java Full Stack Developer
            </h3>

            <p className="mt-6 text-lg text-gray-400 leading-8">
              I'm{" "}
              <span className="text-cyan-400 font-semibold">
                Edara Karthik
              </span>
              , a passionate Java Full Stack Developer focused on creating
              scalable, secure, and responsive web applications using Java,
              Spring Boot, React, MySQL, REST APIs, and modern frontend
              technologies. I enjoy solving real-world problems and building
              applications that deliver great user experiences.
            </p>

            {/* Info Cards */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-[#151A28] border border-cyan-500/20 rounded-2xl p-5 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
                <FaBriefcase className="text-cyan-400 text-2xl mb-3" />
                <h4 className="font-semibold">Experience</h4>
                <p className="text-gray-400 mt-2">2+ Years</p>
              </div>

              <div className="bg-[#151A28] border border-cyan-500/20 rounded-2xl p-5 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
                <FaFolderOpen className="text-cyan-400 text-2xl mb-3" />
                <h4 className="font-semibold">Projects</h4>
                <p className="text-gray-400 mt-2">10+ Completed</p>
              </div>

              <div className="bg-[#151A28] border border-cyan-500/20 rounded-2xl p-5 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl mb-3" />
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-400 mt-2">Andhra Pradesh, India</p>
              </div>

              <div className="bg-[#151A28] border border-cyan-500/20 rounded-2xl p-5 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
                <FaCheckCircle className="text-cyan-400 text-2xl mb-3" />
                <h4 className="font-semibold">Availability</h4>
                <p className="text-gray-400 mt-2">Open to Work</p>
              </div>

            </div>

            {/* Technology Cards */}

            <div className="grid grid-cols-3 gap-6 mt-12">

              <div className="bg-[#151A28] rounded-2xl p-6 text-center border border-transparent hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_25px_#06b6d4] transition-all duration-300">
                <FaJava className="mx-auto text-cyan-400 text-5xl" />
                <p className="mt-4 font-semibold">Java</p>
              </div>

              <div className="bg-[#151A28] rounded-2xl p-6 text-center border border-transparent hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_25px_#06b6d4] transition-all duration-300">
                <FaReact className="mx-auto text-cyan-400 text-5xl" />
                <p className="mt-4 font-semibold">React</p>
              </div>

              <div className="bg-[#151A28] rounded-2xl p-6 text-center border border-transparent hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_25px_#06b6d4] transition-all duration-300">
                <FaDatabase className="mx-auto text-cyan-400 text-5xl" />
                <p className="mt-4 font-semibold">MySQL</p>
              </div>

            </div>

            {/* Resume Buttons */}

            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href="/Edara-Karthik-SE-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-cyan-400 text-cyan-400 px-7 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                <FaEye />
                View Resume
              </a>

              <a
                href="/Edara-Karthik-SE-Resume.pdf"
                download
                className="inline-flex items-center gap-3 bg-cyan-400 text-black px-7 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                <FaDownload />
                Download Resume
              </a>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
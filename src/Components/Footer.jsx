import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaDownload,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#0B0F19] overflow-hidden border-t border-cyan-500/20">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[150px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-7xl mx-auto px-6 py-14"
      >

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Edara <span className="text-cyan-400">Karthik</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Java Full Stack Developer passionate about creating scalable,
              secure and modern web applications using Java, Spring Boot,
              React and MySQL.
            </p>

            <a
              href="/Edara-Karthik-SE-Resume.pdf"
              download
              className="inline-flex items-center gap-2 mt-6 bg-cyan-400 text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              <FaDownload />
              Resume
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://github.com/Edarakarthik-chowdary"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 hover:scale-125 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/edara-karthik-0029471a4"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 hover:scale-125 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:edarakarthik6@gmail.com"
                className="hover:text-cyan-400 hover:scale-125 transition"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-cyan-500/20 my-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Edara Karthik. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="bg-cyan-400 text-black p-4 rounded-full hover:scale-110 transition shadow-lg shadow-cyan-500/30"
          >
            <FaArrowUp />
          </button>

        </div>

      </motion.div>
    </footer>
  );
}
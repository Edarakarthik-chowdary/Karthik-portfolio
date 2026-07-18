import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaUniversity,
  FaShoppingCart,
  FaCreditCard,
} from "react-icons/fa";

const projects = [
  {
    title: "Banking Application",
    icon: <FaUniversity />,
    description:
      "A secure banking application with user authentication, account management, money transfer, transaction history, and Spring Security authentication.",
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "Spring Security",
    ],
    github: "https://github.com/Edarakarthik-chowdary",
    demo: "#",
  },
  {
    title: "E-Commerce Application",
    icon: <FaShoppingCart />,
    description:
      "Full-stack e-commerce platform featuring product catalog, shopping cart, order management, admin dashboard, authentication, and payment workflow.",
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "REST API",
    ],
    github: "https://github.com/Edarakarthik-chowdary",
    demo: "#",
  },
  {
    title: "Credit Card Fraud Detection",
    icon: <FaCreditCard />,
    description:
      "Machine learning project that detects fraudulent credit card transactions using Random Forest and Decision Tree algorithms with data preprocessing and model evaluation.",
    tech: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Machine Learning",
    ],
    github: "https://github.com/Edarakarthik-chowdary",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 bg-[#0B0F19] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            A selection of projects showcasing my full-stack development skills.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-[#151A28] rounded-3xl border border-cyan-500/20 p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_#06b6d4] transition-all duration-300"
            >
              <div className="flex justify-center mb-6 text-5xl text-cyan-400">
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold text-center mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 text-center mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
} from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

const skills = [
  {
    name: "Java",
    level: 95,
    icon: <FaJava className="text-5xl text-cyan-400" />,
    description: "Core Java, Collections, Streams, Multithreading, OOP",
  },
  {
    name: "Spring Boot",
    level: 90,
    icon: <SiSpringboot className="text-5xl text-cyan-400" />,
    description: "REST APIs, Spring MVC, Spring Security, JPA, Hibernate",
  },
  {
    name: "React",
    level: 85,
    icon: <FaReact className="text-5xl text-cyan-400" />,
    description: "React Hooks, Routing, Context API, Responsive UI",
  },
  {
    name: "JavaScript",
    level: 85,
    icon: <FaJsSquare className="text-5xl text-cyan-400" />,
    description: "ES6+, Async/Await, DOM, Fetch API",
  },
  {
    name: "MySQL",
    level: 90,
    icon: <FaDatabase className="text-5xl text-cyan-400" />,
    description: "Queries, Joins, Stored Procedures, Database Design",
  },
  {
    name: "HTML & CSS",
    level: 95,
    icon: (
      <div className="flex gap-2">
        <FaHtml5 className="text-5xl text-cyan-400" />
        <FaCss3Alt className="text-5xl text-cyan-400" />
      </div>
    ),
    description: "Responsive Design, Flexbox, Grid, Tailwind CSS",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 bg-[#0B0F19] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, secure, and
            high-performance full-stack web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-[#151A28] rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_#06b6d4] transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-semibold text-center">
                {skill.name}
              </h3>

              <p className="text-gray-400 text-center text-sm mt-3 leading-6 min-h-[72px]">
                {skill.description}
              </p>

              <div className="mt-6">

                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Proficiency</span>
                  <span className="font-bold text-cyan-400">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                    }}
                    className="h-3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
                  />

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
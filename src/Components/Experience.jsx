import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";

const experience = [
  {
    year: "2024 - Present",
    title: "Java Full Stack Developer Intern",
    company: "Sri Technologies Pvt. Ltd.",
    icon: <FaBriefcase />,
    description:
      "Worked on enterprise web applications using Java, Spring Boot, React, MySQL, REST APIs, Hibernate, and Git. Built responsive user interfaces, developed backend APIs, integrated databases, and collaborated with the development team on real-world projects.",
  },
  {
    year: "2019 - 2023",
    title: "Bachelor of Technology (CSE)",
    company: "QIS Institute of Technology",
    icon: <FaGraduationCap />,
    description:
      "Completed B.Tech in Computer Science and Engineering. Built multiple academic and personal projects in Java, React, Spring Boot, SQL, and Web Technologies while strengthening problem-solving and software development skills.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 bg-[#111827] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            My professional journey and educational background.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-cyan-400 rounded-full"></div>

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              className="relative flex items-start gap-8 mb-16"
            >
              {/* Timeline Icon */}
              <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400 text-black text-xl shadow-[0_0_20px_#06b6d4]">
                {item.icon}
              </div>

              {/* Card */}
              <div className="flex-1 bg-[#151A28] border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_30px_#06b6d4] transition-all duration-300">

                <div className="flex flex-wrap items-center gap-4 mb-4">

                  <span className="flex items-center gap-2 text-cyan-400 font-semibold">
                    <FaCalendarAlt />
                    {item.year}
                  </span>

                </div>

                <h3 className="text-3xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="flex items-center gap-2 text-gray-400 font-medium mb-5">
                  <FaBuilding className="text-cyan-400" />
                  {item.company}
                </p>

                <p className="text-gray-400 leading-8">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
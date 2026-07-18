import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_5xcvncq",
        "template_43840dg",
        form.current,
        "q8TtHrLbvgT-05lgQ"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-[#0B0F19] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Have a project or job opportunity? Let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >

            {/* Email */}
            <div className="bg-[#151A28]/80 backdrop-blur-xl p-6 rounded-3xl border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_#06b6d4] transition-all duration-300 flex gap-5 items-center">

              <div className="bg-cyan-400 w-14 h-14 rounded-full flex items-center justify-center text-black">
                <FaEnvelope size={22} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">Email</h3>
                <p className="text-gray-400">
                  edarakarthik6@gmail.com
                </p>
              </div>

            </div>

            {/* Phone */}
            <div className="bg-[#151A28]/80 backdrop-blur-xl p-6 rounded-3xl border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_#06b6d4] transition-all duration-300 flex gap-5 items-center">

              <div className="bg-cyan-400 w-14 h-14 rounded-full flex items-center justify-center text-black">
                <FaPhone size={22} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">Phone</h3>
                <p className="text-gray-400">
                  +91 8341215644
                </p>
              </div>

            </div>

            {/* GitHub */}
            <div className="bg-[#151A28]/80 backdrop-blur-xl p-6 rounded-3xl border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_#06b6d4] transition-all duration-300 flex gap-5 items-center">

              <div className="bg-cyan-400 w-14 h-14 rounded-full flex items-center justify-center text-black">
                <FaGithub size={22} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">GitHub</h3>

                <a
                  href="https://github.com/Edarakarthik-chowdary"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline break-all"
                >
                  github.com/Edarakarthik-chowdary
                </a>
              </div>

            </div>

            {/* LinkedIn */}
            <div className="bg-[#151A28]/80 backdrop-blur-xl p-6 rounded-3xl border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_#06b6d4] transition-all duration-300 flex gap-5 items-center">

              <div className="bg-cyan-400 w-14 h-14 rounded-full flex items-center justify-center text-black">
                <FaLinkedin size={22} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">LinkedIn</h3>

                <a
                  href="https://www.linkedin.com/in/edara-karthik-0029471a4"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline break-all"
                >
                  linkedin.com/in/edara-karthik-0029471a4
                </a>
              </div>

            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#151A28]/80 backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/20"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full mb-5 p-4 rounded-xl bg-[#0B0F19] border border-gray-700 focus:border-cyan-400 outline-none text-white"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full mb-5 p-4 rounded-xl bg-[#0B0F19] border border-gray-700 focus:border-cyan-400 outline-none text-white"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full mb-5 p-4 rounded-xl bg-[#0B0F19] border border-gray-700 focus:border-cyan-400 outline-none text-white"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              required
              className="w-full mb-6 p-4 rounded-xl bg-[#0B0F19] border border-gray-700 focus:border-cyan-400 outline-none resize-none text-white"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-400 text-black py-4 rounded-xl font-bold flex justify-center items-center gap-3 hover:scale-105 transition disabled:opacity-60"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}
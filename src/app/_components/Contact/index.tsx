"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactMe() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <motion.h2
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Let&apos;s Build Something Great Together
      </motion.h2>
      <motion.p
        className="text-lg text-center mb-6 max-w-xl text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Whether you&apos;re looking for a passionate developer to join your team
        or collaborate on a project, feel free to reach out. I&apos;m always
        open to new opportunities and innovative ideas.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg space-y-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          placeholder="Company name where my skills will shine"
          className="input input-bordered w-full"
        />
        <textarea
          placeholder="Your Message"
          className="textarea textarea-bordered w-full h-28"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary w-full">
          {submitted ? "🚀 Sending..." : "Send Message"}
        </button>
        {submitted && (
          <motion.p
            className="text-center text-green-400 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Message sent! I&apos;ll get back to you as soon as possible.
          </motion.p>
        )}
      </motion.form>

      {/* Direct Contact Links */}
      <div className="flex space-x-6 mt-6">
        <a
          href="mailto:nurisalihersoy@example.com"
          className="text-gray-400 hover:text-white transition duration-300 text-2xl"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://linkedin.com/in/nurisalihersoy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300 text-2xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/nurio34s"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300 text-2xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

'use client'

import { motion } from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
}

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
              I am a third-year Computer Science student at Cambodia Academy of Digital Technology (CADT) with a strong passion for building scalable web applications and solving complex problems through code.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
              With hands-on experience in full-stack development, I've worked on diverse projects ranging from real-time chat applications to AI-powered pricing systems. I am motivated by the challenge of turning ideas into practical, user-friendly solutions.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
              I thrive in collaborative environments and am constantly eager to learn new technologies and best practices. My detail-oriented approach ensures clean, maintainable code and attention to performance and user experience.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg border border-gray-200 h-fit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold">📍</span>
                <span>Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold">🎓</span>
                <span>CADT Student (2024-2027)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold">💬</span>
                <span>Fluent in Khmer & English</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold">🔗</span>
                <span>Active on GitHub & LinkedIn</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

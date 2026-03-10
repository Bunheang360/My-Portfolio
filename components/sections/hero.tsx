'use client'

import { motion } from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-24 sm:py-32 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white"
    >
      <motion.div
        className="max-w-3xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-linear-to-br from-gray-200 to-gray-300 border-4 border-gray-900 flex items-center justify-center overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Chheng Bunheang"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
        >
          Chheng Bunheang
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-600 mb-4"
        >
          Fullstack Developer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-500 mb-8"
        >
          Building scalable web applications with React, Node.js, and modern technologies
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

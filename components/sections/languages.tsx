'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export default function Languages() {
  const languages = [
    {
      name: 'Java',
      proficiency: 'Advanced',
      description: 'Desktop and backend applications'
    },
    {
      name: 'JavaScript/TypeScript',
      proficiency: 'Advanced',
      description: 'Frontend and fullstack development'
    },
    {
      name: 'Python',
      proficiency: 'Intermediate',
      description: 'Automata and backend systems'
    },
    {
      name: 'PHP',
      proficiency: 'Intermediate',
      description: 'Backend web development'
    },
    {
      name: 'Dart',
      proficiency: 'Intermediate',
      description: 'Mobile app development with Flutter'
    },
    {
      name: 'SQL',
      proficiency: 'Advanced',
      description: 'Database design and optimization'
    },
  ]

  const [duplicate, setDuplicate] = useState(false)

  useEffect(() => {
    setDuplicate(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  return (
    <section id="languages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
          Programming Languages
        </h2>
        
        {/* Animated Grid Section */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              }}
              className="bg-white p-6 rounded-lg border border-gray-200 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-900">{lang.name}</h3>
                <motion.span
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                >
                  {lang.proficiency}
                </motion.span>
              </div>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {lang.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scrolling Marquee Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 overflow-hidden">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Tech Stack Overview
          </h3>
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-4 whitespace-nowrap"
              animate={{ x: duplicate ? [-100, 0] : 0 }}
              transition={{
                duration: 20,
                repeat: duplicate ? Infinity : 0,
                ease: 'linear',
              }}
            >
              {[...languages, ...(duplicate ? languages : [])].map((lang, idx) => (
                <motion.div
                  key={`${lang.name}-${idx}`}
                  className="flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-lg border border-gray-200 flex-shrink-0"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: '#f3f4f6',
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                  <span className="font-medium text-gray-700">{lang.name}</span>
                  <span className="text-xs text-gray-500 font-medium">
                    {lang.proficiency}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Continuously learning and expanding my tech stack
          </p>
        </div>
      </div>
    </section>
  )
}

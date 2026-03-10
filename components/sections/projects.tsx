'use client'

import { motion } from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

export default function Projects() {
  const projects = [
    {
      title: 'AUREA Fee Estimator',
      period: 'Sep 2025 - Present',
      description: 'Smart web-based pricing calculator for freelance designers using AI-powered brief analysis',
      technologies: ['React', 'TypeScript', 'Express', 'Supabase', 'Google Gemini'],
      highlights: ['AI-powered PDF analysis', 'Dynamic pricing calculation', 'Invoice automation'],
      role: 'Backend Developer'
    },
    {
      title: 'Real-Time Chat Web Application',
      period: 'Aug - Sep 2025',
      description: 'Fullstack chat application with secure authentication and real-time messaging',
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Socket.IO', 'Tailwind CSS'],
      highlights: ['JWT authentication', 'Real-time messaging', 'Image messaging integration', 'Responsive UI'],
      role: 'Fullstack Developer'
    },
    {
      title: 'FitTrack - Fitness Tracking Application',
      period: 'Nov 2025 - Jan 2026',
      description: 'Personalized workout tracking mobile app for gym and home fitness users',
      technologies: ['Flutter', 'Dart', 'SQLite'],
      highlights: ['Custom workout plans', 'Progress tracking', 'Offline support', 'Analytics dashboard'],
      role: 'Fullstack Developer'
    },
    {
      title: 'Room Rental Management System',
      period: 'Jan - Mar 2025',
      description: 'Desktop application for managing buildings, rooms, tenants, and billing',
      technologies: ['Java', 'Swing', 'MySQL'],
      highlights: ['Role-based portals', 'Automated billing', 'Real-time data updates', 'MVC architecture'],
      role: 'Backend Developer'
    },
    {
      title: 'CFCC Leaderboard System',
      period: 'May - Jul 2025',
      description: 'Real-time leaderboard integration (Firebase) for CADT Freshman Coding Championship',
      technologies: ['React', 'Node.js', 'Firebase', 'HackerRank API'],
      highlights: ['Real-time scoring', 'Event automation', 'Transparent rankings'],
      role: 'Configuration Team Member'
    },
    {
      title: 'Automata Visualizer',
      period: 'Jul 2025',
      description: 'Educational tool demonstrating automata theory and computational algorithms',
      technologies: ['Python', 'Django'],
      highlights: ['Algorithm visualization', 'Educational applications', 'Efficient code structures'],
      role: 'Backend Developer'
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
        >
          {/* Currently Working On */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            className="border-2 border-gray-900 rounded-lg p-8 bg-white cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-900" />
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-900 text-white text-xs font-semibold rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    In Progress
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Room Rental Management System version 2</h3>
                <p className="text-sm text-gray-500 font-medium">Mar 2026 - Present</p>
              </div>
              <span className="px-4 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full whitespace-nowrap h-fit">
                Fullstack Developer
              </span>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Rebuilding the Room Rental Management System as a modern web application for personal deployment — migrating from the original Java/Swing desktop app to a fullstack web stack.
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-bold text-gray-900 mb-2">Highlights:</h4>
              <ul className="flex flex-wrap gap-2">
                {['Web-based rebuild of desktop app', 'Personal deployment', 'Modern fullstack rewrite'].map((h) => (
                  <li key={h} className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded">• {h}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Express','Supabase'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              }}
              className="border border-gray-200 rounded-lg p-8 bg-white cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 font-medium">{project.period}</p>
                </div>
                <span className="px-4 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full whitespace-nowrap h-fit">
                  {project.role}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-bold text-gray-900 mb-2">Highlights:</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded">
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

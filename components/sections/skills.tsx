'use client'

import { motion } from 'motion/react'
import {
  SiJavascript, SiTypescript, SiCplusplus, SiHtml5, SiCss, SiDart, SiPython, SiPhp,
  SiReact, SiNextdotjs, SiTailwindcss, SiFlutter, SiExpress, SiDjango, SiLaravel,
  SiNodedotjs, SiPostgresql, SiMongodb, SiMysql, SiMariadb, SiFirebase, SiSupabase,
  SiDocker, SiGit, SiLinux, SiPostman, SiFigma, SiDigitalocean,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const categories = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'C++',        icon: SiCplusplus,  color: '#00599C' },
      { name: 'Java',       icon: FaJava,        color: '#ED8B00' },
      { name: 'HTML5',      icon: SiHtml5,       color: '#E34F26' },
      { name: 'CSS3',       icon: SiCss,         color: '#1572B6' },
      { name: 'Dart',       icon: SiDart,        color: '#0175C2' },
      { name: 'Python',     icon: SiPython,      color: '#3776AB' },
      { name: 'PHP',        icon: SiPhp,         color: '#777BB4' },
    ],
  },
  {
    title: 'Framework',
    items: [
      { name: 'React',       icon: SiReact,       color: '#61DAFB' },
      { name: 'Next.js',     icon: SiNextdotjs,   color: '#000000' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Flutter',     icon: SiFlutter,     color: '#02569B' },
      { name: 'Express',     icon: SiExpress,     color: '#404040' },
      { name: 'Django',      icon: SiDjango,      color: '#092E20' },
      { name: 'Laravel',     icon: SiLaravel,     color: '#FF2D20' },
    ],
  },
  {
    title: 'Backend & Databases',
    items: [
      { name: 'Node.js',     icon: SiNodedotjs,    color: '#339933' },
      { name: 'PostgreSQL',  icon: SiPostgresql,   color: '#4169E1' },
      { name: 'MongoDB',     icon: SiMongodb,      color: '#47A248' },
      { name: 'MySQL',       icon: SiMysql,        color: '#4479A1' },
      { name: 'MariaDB',     icon: SiMariadb,      color: '#003545' },
      { name: 'Firebase',    icon: SiFirebase,     color: '#FFCA28' },
      { name: 'Supabase',    icon: SiSupabase,     color: '#3ECF8E' },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { name: 'Git',           icon: SiGit,          color: '#F05032' },
      { name: 'Linux',         icon: SiLinux,        color: '#FCC624' },
      { name: 'Postman',       icon: SiPostman,      color: '#FF6C37' },
      { name: 'Figma',         icon: SiFigma,        color: '#F24E1E' },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
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

export default function Skills() {
  return (
    <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 text-center">
          Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
                {category.title}
              </h3>
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                {category.items.map(({ name, icon: Icon, color }) => (
                  <motion.div
                    key={name}
                    variants={itemVariants}
                    whileHover={{
                      y: -8,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                    }}
                    className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 cursor-pointer"
                  >
                    <Icon size={28} color={color} />
                    <span className="text-sm font-medium text-gray-800">{name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import type { CSSProperties } from 'react'
import {
  SiJavascript, SiTypescript, SiCplusplus, SiHtml5, SiCss, SiDart, SiPython, SiPhp,
  SiReact, SiNextdotjs, SiTailwindcss, SiFlutter, SiExpress, SiDjango, SiLaravel,
  SiNodedotjs, SiPostgresql, SiMongodb, SiMysql, SiMariadb, SiFirebase, SiSupabase,
  SiGit, SiLinux, SiPostman, SiFigma,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import SpotlightGroup from '@/components/spotlight'
import SectionHeading from '@/components/section-heading'
import { cn } from '@/lib/utils'

// Brand colors show on hover only; dark-on-dark brands get a light stand-in.
const categories = [
  {
    title: 'Languages',
    span: 'lg:col-span-7',
    items: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'Python', icon: SiPython, color: '#FFD43B' },
      { name: 'PHP', icon: SiPhp, color: '#8993BE' },
      { name: 'Dart', icon: SiDart, color: '#0175C2' },
      { name: 'C++', icon: SiCplusplus, color: '#659AD2' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#2965F1' },
    ],
  },
  {
    title: 'Frameworks',
    span: 'lg:col-span-5',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Flutter', icon: SiFlutter, color: '#54C5F8' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { name: 'Django', icon: SiDjango, color: '#44B78B' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    ],
  },
  {
    title: 'Backend & databases',
    span: 'lg:col-span-7',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#6B9BD8' },
      { name: 'MySQL', icon: SiMysql, color: '#6FA8DC' },
      { name: 'MariaDB', icon: SiMariadb, color: '#C49A6C' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    ],
  },
  {
    title: 'Tools',
    span: 'lg:col-span-5',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="technologies" aria-labelledby="stack-title" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="stack-title"
          title="My stack"
          lede="The languages, frameworks, and tools I reach for, from the database up to the interface."
        />

        <SpotlightGroup className="grid gap-3 sm:gap-4 lg:grid-cols-12">
          {categories.map((category) => (
            <div key={category.title} className={cn('tile p-5 sm:p-7', category.span)}>
              <div className="mb-6 flex items-baseline justify-between">
                <h3 className="text-lg font-semibold tracking-tight text-text">{category.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.items.map(({ name, icon: Icon, color }) => (
                  <li
                    key={name}
                    style={{ '--brand': color } as CSSProperties}
                    className="group flex h-11 items-center gap-2.5 rounded-xl bg-white/[0.03] px-3.5 shadow-[inset_0_0_0_1px_var(--line)] transition-colors duration-300 hover:bg-white/[0.06]"
                  >
                    <Icon
                      size={18}
                      aria-hidden="true"
                      className="text-text-2 transition-colors duration-300 group-hover:text-[var(--brand)]"
                    />
                    <span className="text-sm font-medium text-text">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </SpotlightGroup>
      </div>
    </section>
  )
}

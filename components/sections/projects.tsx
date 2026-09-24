'use client'

import { useId, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Check, Plus } from 'lucide-react'
import SpotlightGroup from '@/components/spotlight'
import SectionHeading from '@/components/section-heading'
import ProjectVisual, { type VisualKind } from '@/components/project-visual'
import { cn } from '@/lib/utils'

type Category = 'Web' | 'AI' | 'Mobile' | 'Desktop'

type Project = {
  title: string
  period?: string
  status?: 'In progress' | 'Ongoing' | 'Completed'
  description: string
  technologies: string[]
  highlights: string[]
  role: string
  categories: Category[]
  visual: VisualKind
  wide?: boolean
}

const projects: Project[] = [
  {
    title: 'Room Rental Management System v2',
    period: 'Mar 2026 – Present',
    status: 'In progress',
    description:
      'Rebuilding the Room Rental Management System as a modern web application for personal deployment, migrating from the original Java/Swing desktop app to a fullstack web stack.',
    technologies: ['React', 'Node.js', 'Express', 'Supabase'],
    highlights: ['Web-based rebuild of desktop app', 'Personal deployment', 'Modern fullstack rewrite'],
    role: 'Fullstack Developer',
    categories: ['Web'],
    visual: 'rental-web',
    wide: true,
  },
  {
    title: 'Motify',
    status: 'Ongoing',
    description:
      'AI video generator for marketing teams creating SaaS explainers, product launches, demos, promotional videos, and feature announcements while retaining creative control.',
    technologies: [],
    highlights: ['SaaS explainer videos', 'Product launches and demos', 'Promotional videos', 'Feature announcements'],
    role: 'Backend Developer',
    categories: ['AI', 'Web'],
    visual: 'video',
  },
  {
    title: 'Storia Shop',
    status: 'Completed',
    description:
      'Web-based marketplace connecting customers, store owners, and administrators on one centralized platform.',
    technologies: ['React', 'Tailwind CSS', 'Laravel', 'PHP', 'PostgreSQL', 'Supabase'],
    highlights: ['Customer website', 'Store owner dashboard', 'Super admin dashboard'],
    role: 'Fullstack Developer',
    categories: ['Web'],
    visual: 'storefront',
  },
  {
    title: 'CFCC Leaderboard System',
    period: 'May – Jul 2025',
    description: 'Real-time leaderboard integration (Firebase) for the CADT Freshman Coding Championship.',
    technologies: ['React', 'Node.js', 'Firebase', 'HackerRank API'],
    highlights: ['Real-time scoring', 'Event automation', 'Transparent rankings'],
    role: 'Configuration Team Member',
    categories: ['Web'],
    visual: 'leaderboard',
    wide: true,
  },
  {
    title: 'AUREA Fee Estimator',
    period: 'Sep 2025 – Present',
    description: 'Smart web-based pricing calculator for freelance designers using AI-powered brief analysis.',
    technologies: ['React', 'TypeScript', 'Express', 'Supabase', 'Google Gemini'],
    highlights: ['AI-powered PDF analysis', 'Dynamic pricing calculation', 'Invoice automation'],
    role: 'Backend Developer',
    categories: ['AI', 'Web'],
    visual: 'estimator',
  },
  {
    title: 'Real-Time Chat Web App',
    period: 'Aug – Sep 2025',
    description: 'Fullstack chat application with secure authentication and real-time messaging.',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Socket.IO', 'Tailwind CSS'],
    highlights: ['JWT authentication', 'Real-time messaging', 'Image messaging integration', 'Responsive UI'],
    role: 'Fullstack Developer',
    categories: ['Web'],
    visual: 'chat',
  },
  {
    title: 'FitTrack',
    period: 'Nov 2025 – Jan 2026',
    description: 'Personalized workout tracking mobile app for gym and home fitness users.',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    highlights: ['Custom workout plans', 'Progress tracking', 'Offline support', 'Analytics dashboard'],
    role: 'Fullstack Developer',
    categories: ['Mobile'],
    visual: 'fitness',
  },
  {
    title: 'Room Rental Management System',
    period: 'Jan – Mar 2025',
    description: 'Desktop application for managing buildings, rooms, tenants, and billing.',
    technologies: ['Java', 'Swing', 'MySQL'],
    highlights: ['Role-based portals', 'Automated billing', 'Real-time data updates', 'MVC architecture'],
    role: 'Backend Developer',
    categories: ['Desktop'],
    visual: 'rental-desktop',
  },
  {
    title: 'Automata Visualizer',
    period: 'Jul 2025',
    description: 'Educational tool demonstrating automata theory and computational algorithms.',
    technologies: ['Python', 'Django'],
    highlights: ['Algorithm visualization', 'Educational applications', 'Efficient code structures'],
    role: 'Backend Developer',
    categories: ['Web'],
    visual: 'automata',
    wide: true,
  },
]

const filters = ['All', 'Web', 'AI', 'Mobile', 'Desktop'] as const
type Filter = (typeof filters)[number]

function StatusChip({ project }: { project: Project }) {
  if (!project.status) return null
  const live = project.status !== 'Completed'
  return (
    <span className={cn('chip', live && 'text-live')}>
      {live ? <span className="live-dot" aria-hidden="true" /> : <Check size={12} aria-hidden="true" />}
      {project.status}
    </span>
  )
}

function ProjectTile({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  const detailsId = useId()

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={cn('tile flex flex-col gap-6 p-4 sm:p-5', project.wide && 'md:col-span-2')}
    >
      <div className="relative overflow-hidden rounded-xl">
        <div className={cn('aspect-[5/3] w-full', project.wide && 'md:aspect-[2.4/1] md:[&_svg]:mx-auto md:[&_svg]:w-auto')}>
          <ProjectVisual kind={project.visual} title={project.title} />
        </div>
      </div>

      <motion.div layout="position" className="flex flex-1 flex-col px-1 pb-1">
        <div className="flex flex-wrap items-center gap-2">
          <StatusChip project={project} />
          {project.period && <span className="font-mono text-xs text-text-3">{project.period}</span>}
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-text sm:text-2xl">{project.title}</h3>
        <p className="mt-1 text-sm text-ice">{project.role}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-text-2">{project.description}</p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={detailsId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className={cn('grid gap-6 pt-6', project.wide && project.technologies.length > 0 && 'md:grid-cols-2')}>
                <div>
                  <h4 className="text-sm font-semibold text-text">Highlights</h4>
                  <ul className="mt-3 space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm text-text-2">
                        <span className="mt-[0.45rem] h-px w-3 shrink-0 bg-ember" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                {project.technologies.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-text">Built with</h4>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={detailsId}
          className="group mt-auto flex min-h-11 items-center gap-2 self-start pt-5 text-sm font-medium text-text-2 transition-colors hover:text-text"
        >
          <span className="grid size-6 place-items-center rounded-md bg-white/5 transition-colors group-hover:bg-ember group-hover:text-ink">
            <Plus size={14} className={cn('transition-transform duration-300', open && 'rotate-45')} aria-hidden="true" />
          </span>
          {open ? 'Hide details' : 'Highlights & stack'}
        </button>
      </motion.div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter as Category))

  return (
    <section id="projects" aria-labelledby="projects-title" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="projects-title"
          title="Things I've built"
          lede="Marketplaces, real-time apps, AI tools, and a live leaderboard for a campus coding championship. Nine projects across web, mobile, and desktop."
        >
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-1 rounded-xl bg-ink-2 p-1 shadow-[inset_0_0_0_1px_var(--line)]">
            {filters.map((name) => {
              const count = name === 'All' ? projects.length : projects.filter((p) => p.categories.includes(name as Category)).length
              const isActive = filter === name
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setFilter(name)}
                  aria-pressed={isActive}
                  className={cn(
                    'relative flex min-h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-medium transition-colors',
                    isActive ? 'text-text' : 'text-text-3 hover:text-text',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-active"
                      className="absolute inset-0 rounded-lg bg-ink-4"
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    />
                  )}
                  <span className="relative">{name}</span>
                  <span className="relative font-mono text-[0.7rem] text-text-3">{count}</span>
                </button>
              )
            })}
          </div>
        </SectionHeading>

        <SpotlightGroup>
          <motion.div layout className="grid grid-flow-dense gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((project) => (
                <ProjectTile key={project.title} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </SpotlightGroup>
      </div>
    </section>
  )
}

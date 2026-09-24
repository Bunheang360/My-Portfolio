'use client'

import { useEffect, useState } from 'react'
import { ArrowDownToLine, ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiLaravel, SiFlutter,
  SiPostgresql, SiSupabase, SiTailwindcss, SiDocker, SiFirebase, SiPython,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import SpotlightGroup from '@/components/spotlight'

const marqueeStack = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Java', icon: FaJava },
  { name: 'Python', icon: SiPython },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Docker', icon: SiDocker },
]

function PhnomPenhTime() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Phnom_Penh',
      }).format(new Date())
    setTime(format())
    const id = window.setInterval(() => setTime(format()), 15_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <time className="font-mono tabular-nums" suppressHydrationWarning>
      {time ?? '--:--'}
    </time>
  )
}

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative overflow-hidden px-3 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-28">
      <div className="horizon pointer-events-none absolute inset-x-0 top-0 h-[42rem]" aria-hidden="true" />

      <SpotlightGroup className="assemble relative mx-auto grid max-w-6xl gap-3 sm:gap-4 lg:grid-cols-12">
        {/* Statement */}
        <div className="tile flex flex-col justify-between gap-10 p-6 sm:p-10 lg:col-span-8 lg:row-span-2 lg:min-h-[30rem]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip">
              <span className="live-dot" aria-hidden="true" />
              Open to collaborate
            </span>
            <span className="chip">
              <MapPin size={12} aria-hidden="true" />
              Phnom Penh · <PhnomPenhTime />
            </span>
          </div>

          <div>
            <p className="mb-4 text-lg text-text-2">Hi, I&apos;m Chheng Bunheang.</p>
            <h1 id="hero-title" className="display text-[2.6rem] text-text sm:text-6xl lg:text-[4.6rem]">
              I build the whole stack, from pixels to <span className="text-ember">Postgres.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-2 sm:text-lg">
              Fullstack developer and fourth-year Computer Science student at CADT. I ship web, mobile, and desktop
              apps with React, Node.js, Laravel, and Flutter.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-primary">
              Get in touch
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="/downloads/chheng-bunheang-cv.pdf" download className="btn btn-ghost">
              <ArrowDownToLine size={16} aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>

        {/* Portrait */}
        <figure className="tile relative aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:col-span-4 lg:row-span-2 lg:aspect-auto">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_42%,oklch(0.7_0.19_38/0.32),transparent_70%),radial-gradient(60%_40%_at_80%_10%,oklch(0.84_0.09_220/0.14),transparent_70%)]"
            aria-hidden="true"
          />
          <img
            src="/profile-cutout.png"
            alt="Portrait of Chheng Bunheang"
            className="absolute bottom-0 left-1/2 h-[94%] w-auto max-w-none -translate-x-1/2 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
            fetchPriority="high"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,var(--ink-2)_0%,oklch(0.165_0.014_265/0.7)_22%,transparent_48%)]"
            aria-hidden="true"
          />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
            <div>
              <p className="font-semibold text-text">Chheng Bunheang</p>
              <p className="text-sm text-text-2">Fullstack Developer</p>
            </div>
            <span className="font-mono text-xs text-text-2">KH · EN</span>
          </figcaption>
        </figure>

        {/* Now building */}
        <a
          href="#projects"
          className="tile group flex flex-col justify-between gap-6 p-6 sm:p-7 lg:col-span-7"
        >
          <div>
            <div className="flex items-start justify-between gap-4">
              <p className="flex items-center gap-3 text-xl font-semibold tracking-tight text-text sm:text-2xl">
                <span className="live-dot shrink-0" aria-hidden="true" />
                Room Rental Management System v2
              </p>
              <ArrowUpRight
                size={18}
                className="mt-1.5 shrink-0 text-text-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text"
                aria-hidden="true"
              />
            </div>
            <p className="mt-1 font-mono text-xs text-live">Building now · since Mar 2026</p>
            <p className="mt-4 max-w-lg text-text-2">
              Rewriting my Java/Swing desktop app as a modern web app for personal deployment.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'Express', 'Supabase'].map((tech) => (
              <span key={tech} className="chip">{tech}</span>
            ))}
          </div>
        </a>

        {/* Latest role */}
        <a href="#experience" className="tile group flex flex-col gap-6 p-6 sm:p-7 lg:col-span-5">
          <div>
            <p className="text-xl font-semibold tracking-tight text-text sm:text-2xl">Fullstack Developer Intern</p>
            <p className="mt-1 font-mono text-xs text-ice">ECAM Solution · May–Aug 2026</p>
            <p className="mt-4 text-text-2">
              Built features for Storia, a B2C marketplace for customers, store owners, and admins.
            </p>
          </div>
        </a>

        {/* Stack marquee */}
        <div className="tile marquee overflow-hidden py-5 lg:col-span-12" aria-label="Technologies I use">
          <ul className="marquee-track flex w-max gap-10 pr-10">
            {[...marqueeStack, ...marqueeStack].map(({ name, icon: Icon }, index) => (
              <li
                key={`${name}-${index}`}
                className="flex items-center gap-2.5 text-text-2"
                aria-hidden={index >= marqueeStack.length ? 'true' : undefined}
              >
                <Icon size={20} aria-hidden="true" />
                <span className="text-sm font-medium">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </SpotlightGroup>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import SpotlightGroup from '@/components/spotlight'
import SectionHeading from '@/components/section-heading'

const certifications = [
  {
    title: 'Java (Basic)',
    issuer: 'HackerRank',
    date: 'Feb 2025',
    image: '/certificates/java-basic.png',
    href: 'https://www.hackerrank.com/certificates/iframe/67b1281228a4',
  },
  {
    title: 'Java Masterclass 2025',
    issuer: 'Udemy',
    date: 'Sep 2025',
    image: '/certificates/java-masterclass.png',
    href: '/certificates/java-masterclass.png',
  },
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'Sep 2025',
    image: '/certificates/full-stack-web-development-bootcamp.png',
    href: '/certificates/full-stack-web-development-bootcamp.png',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certs-title" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="certs-title"
          title="Certificates"
          lede="Verified coursework and assessments that back up my full-stack practice."
        />

        <SpotlightGroup className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {certifications.map((certification) => (
            <a
              key={certification.title}
              href={certification.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${certification.title} certificate from ${certification.issuer}`}
              className="tile group flex flex-col p-3 sm:p-4"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink shadow-[inset_0_0_0_1px_var(--line)]"
              >
                <Image
                  src={certification.image}
                  alt={`${certification.title} certificate issued by ${certification.issuer}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain p-3 drop-shadow-[0_12px_24px_oklch(0_0_0/0.5)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-start justify-between gap-4 px-2 pb-1 pt-5">
                <div>
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-text">{certification.title}</h3>
                  <p className="mt-1 font-mono text-xs text-text-3">
                    {certification.issuer} · {certification.date}
                  </p>
                </div>
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/5 text-text-2 transition-colors group-hover:bg-ember group-hover:text-ink">
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </SpotlightGroup>
      </div>
    </section>
  )
}

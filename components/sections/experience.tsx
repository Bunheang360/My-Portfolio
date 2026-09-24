import { ArrowDownToLine, MapPin } from 'lucide-react'
import SectionHeading from '@/components/section-heading'

const experiences = [
  {
    role: 'Fullstack Developer Intern',
    organization: 'ECAM Solution',
    period: 'May 2026 — Aug 2026',
    location: 'Phnom Penh, Cambodia',
    summary:
      'Contributed to Storia, a B2C online marketplace that connects customers, store owners, and administrators in one platform.',
    highlights: [
      'Developed features across the frontend and backend of the marketplace',
      'Worked on the customer storefront and role-based management experiences',
      'Collaborated with the team to turn product requirements into working features',
    ],
  },
  {
    role: 'Technical Team & Organizer',
    organization: 'CADT Freshman Coding Competition',
    period: 'May 2025 — Jul 2025',
    location: 'CADT, Phnom Penh, Cambodia',
    summary:
      'Helped organize a coding competition for incoming freshman students and supported the event’s technical delivery.',
    highlights: [
      'Built an interactive leaderboard website for live rankings',
      'Supported competition setup and technical coordination',
      'Helped deliver a clear, engaging experience for participants',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="experience-title"
          title="Where I've worked"
          lede="Building real products and creating technical experiences that bring people together."
        >
          <a href="/downloads/chheng-bunheang-cv.pdf" download className="btn btn-ghost shrink-0 self-start md:self-auto">
            <ArrowDownToLine size={16} aria-hidden="true" />
            Download CV
          </a>
        </SectionHeading>

        <ol className="relative border-l border-line pl-6 sm:pl-10">
          {experiences.map((experience, index) => (
            <li key={experience.organization} className="relative pb-14 last:pb-0">
              <span
                className={
                  index === 0
                    ? 'absolute -left-[calc(1.5rem+5px)] top-2 size-[9px] rounded-full bg-ember shadow-[0_0_0_4px_var(--ink),0_0_16px_2px_oklch(0.7_0.19_38/0.5)] sm:-left-[calc(2.5rem+5px)]'
                    : 'absolute -left-[calc(1.5rem+5px)] top-2 size-[9px] rounded-full bg-ink-4 shadow-[0_0_0_4px_var(--ink)] sm:-left-[calc(2.5rem+5px)]'
                }
                aria-hidden="true"
              />
              <div className="grid gap-4 md:grid-cols-[14rem_1fr] md:gap-12">
                <div className="space-y-1.5">
                  <p className="font-mono text-sm text-text">{experience.period}</p>
                  <p className="flex items-start gap-1.5 text-sm text-text-3">
                    <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                    {experience.location}
                  </p>
                </div>
                <article>
                  <h3 className="text-2xl font-semibold tracking-tight text-text">{experience.role}</h3>
                  <p className="mt-1 text-ice">{experience.organization}</p>
                  <p className="mt-5 max-w-2xl leading-relaxed text-text-2">{experience.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-text-2">
                        <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-ember" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

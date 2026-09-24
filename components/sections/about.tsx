import { GraduationCap, Languages, MapPin, AtSign } from 'lucide-react'

const facts = [
  { icon: MapPin, label: 'Based in', value: 'Phnom Penh, Cambodia' },
  { icon: GraduationCap, label: 'Studying', value: 'Computer Science, CADT (2024–2027)' },
  { icon: Languages, label: 'Speaks', value: 'Khmer and English' },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <h2 id="about-title" className="display text-4xl text-text sm:text-5xl lg:sticky lg:top-28 lg:self-start lg:text-6xl">
          Turning ideas into practical, <span className="text-text-3">user-friendly software.</span>
        </h2>

        <div>
          <div className="space-y-6 text-lg leading-relaxed text-text-2">
            <p>
              I&apos;m a fourth-year Computer Science student at the Cambodia Academy of Digital Technology (CADT) with a
              strong passion for building scalable web applications and solving complex problems through code.
            </p>
            <p>
              With hands-on experience in full-stack development, I&apos;ve worked on projects ranging from a multi-role
              online marketplace to an AI video generator for marketing teams. I&apos;m motivated by the challenge of
              turning ideas into practical, user-friendly solutions.
            </p>
            <p>
              I thrive in collaborative environments and I&apos;m always eager to learn new technologies and best
              practices. My detail-oriented approach means clean, maintainable code and attention to performance and
              user experience.
            </p>
          </div>

          <dl className="mt-12 divide-y divide-line border-y border-line">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="grid grid-cols-[1.5rem_7rem_1fr] items-center gap-3 py-4">
                <Icon size={18} className="text-ember" aria-hidden="true" />
                <dt className="font-mono text-xs uppercase tracking-wider text-text-3">{label}</dt>
                <dd className="text-text">{value}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[1.5rem_7rem_1fr] items-center gap-3 py-4">
              <AtSign size={18} className="text-ember" aria-hidden="true" />
              <dt className="font-mono text-xs uppercase tracking-wider text-text-3">Find me</dt>
              <dd className="flex flex-wrap gap-x-5 gap-y-1 text-text">
                <a href="https://t.me/CBHeang" target="_blank" rel="noopener noreferrer" className="underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ember">
                  Telegram
                </a>
                <a href="https://linkedin.com/in/cbh360" target="_blank" rel="noopener noreferrer" className="underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ember">
                  LinkedIn
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

import { ArrowUp } from 'lucide-react'

const links = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Stack', href: '#technologies' },
  { name: 'Certificates', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
  { name: 'Download CV', href: '/downloads/chheng-bunheang-cv.pdf', download: true },
]

const social = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/cbh360' },
  { name: 'Telegram', href: 'https://t.me/CBHeang' },
  { name: 'Email', href: 'mailto:2005chhengbunheang@gmail.com' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="overflow-hidden border-t border-line px-3 pt-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-lg font-semibold tracking-tight text-text">Chheng Bunheang</p>
            <p className="mt-2 max-w-xs text-text-2">Fullstack developer based in Phnom Penh, Cambodia.</p>
            <a href="#hero" className="btn btn-ghost mt-6 !min-h-10">
              <ArrowUp size={16} aria-hidden="true" />
              Back to top
            </a>
          </div>
          <nav aria-label="Footer">
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} download={link.download} className="text-text-2 transition-colors hover:text-text">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="sr-only">Social links</h2>
            <ul className="space-y-2.5">
              {social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-text-2 transition-colors hover:text-text"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-2 text-sm text-text-3 sm:flex-row">
          <p>© {currentYear} Chheng Bunheang</p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>

        <p
          aria-hidden="true"
          className="display pointer-events-none mt-8 select-none whitespace-nowrap text-center text-[15.5vw] leading-[0.8] text-ink-3 lg:text-[11.6rem]"
        >
          BUNHEANG
        </p>
      </div>
    </footer>
  )
}

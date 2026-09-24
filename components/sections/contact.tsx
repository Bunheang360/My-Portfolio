'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, Check, Linkedin, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { FaTelegram } from 'react-icons/fa'
import SpotlightGroup from '@/components/spotlight'
import { cn } from '@/lib/utils'

const channels = [
  { name: 'Telegram', handle: '@CBHeang', href: 'https://t.me/CBHeang', icon: FaTelegram },
  { name: 'Email', handle: '2005chhengbunheang@gmail.com', href: 'mailto:2005chhengbunheang@gmail.com', icon: Mail },
  { name: 'LinkedIn', handle: 'in/cbh360', href: 'https://linkedin.com/in/cbh360', icon: Linkedin },
]

type Status = 'idle' | 'sending' | 'sent' | 'error'
type Fields = { name: string; email: string; message: string }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(fields: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {}
  if (!fields.name.trim()) errors.name = 'Tell me your name.'
  if (!fields.email.trim()) errors.email = 'Add an email so I can reply.'
  else if (!EMAIL_PATTERN.test(fields.email.trim())) errors.email = 'That email looks incomplete, check for a typo.'
  if (fields.message.trim().length < 10) errors.message = 'Write at least a sentence (10+ characters).'
  return errors
}

const inputClass =
  'w-full rounded-xl bg-ink px-4 py-3 text-text placeholder:text-text-3 shadow-[inset_0_0_0_1px_var(--line-strong)] outline-none transition-shadow focus:shadow-[inset_0_0_0_1px_var(--ember),0_0_0_4px_var(--ember-soft)] aria-[invalid=true]:shadow-[inset_0_0_0_1px_var(--destructive)]'

export default function Contact() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof Fields]) setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (status === 'sent' || status === 'error') setStatus('idle')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0]
      document.getElementById(first)?.focus()
      return
    }

    setStatus('sending')
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Failed to send message')
      setStatus('sent')
      setFields({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setServerError(
        err instanceof Error ? err.message : 'Something went wrong. Try again, or message me on Telegram.',
      )
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="px-3 py-20 sm:px-6 sm:py-28">
      <SpotlightGroup className="mx-auto grid max-w-6xl gap-3 sm:gap-4 lg:grid-cols-12">
        <div className="flex flex-col lg:col-span-5">
          <h2 id="contact-title" className="display text-5xl text-text sm:text-6xl lg:text-7xl">
            Let&apos;s build <span className="text-ember">something.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-text-2">
            I&apos;m always open to new opportunities and collaborations. Telegram is the fastest way to reach me.
          </p>

          <ul className="mt-10 grid gap-3 lg:grid-cols-1">
            {channels.map(({ name, handle, href, icon: Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="tile group flex items-center gap-4 p-4"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/5 text-text-2 transition-colors group-hover:text-ember">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-text">{name}</span>
                    <span className="block truncate font-mono text-xs text-text-3">{handle}</span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-text-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-2 text-sm text-text-3">
            <p className="flex items-center gap-2">
              <Phone size={14} aria-hidden="true" />
              +855 69 763 854 / +855 97 991 9028
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={14} aria-hidden="true" />
              #32k, St.62, Russey Kao, Phnom Penh
            </p>
          </div>
        </div>

        <div className="tile flex flex-col p-5 sm:p-8 lg:col-span-7">
          {status === 'sent' ? (
            <div className="flex flex-1 flex-col items-start justify-center py-16" role="status">
              <span className="grid size-12 place-items-center rounded-2xl bg-live/15 text-live">
                <Check size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-text">Message sent.</h3>
              <p className="mt-2 max-w-sm text-text-2">Thanks for reaching out. I&apos;ll reply to your email soon.</p>
              <button type="button" onClick={() => setStatus('idle')} className="btn btn-ghost mt-8">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-1 flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {(['name', 'email'] as const).map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="mb-2 block text-sm font-medium text-text">
                      {field === 'name' ? 'Name' : 'Email'}
                    </label>
                    <input
                      id={field}
                      name={field}
                      type={field === 'email' ? 'email' : 'text'}
                      autoComplete={field}
                      value={fields[field]}
                      onChange={handleChange}
                      aria-invalid={errors[field] ? 'true' : undefined}
                      aria-describedby={errors[field] ? `${field}-error` : undefined}
                      placeholder={field === 'name' ? 'Your name' : 'you@example.com'}
                      className={inputClass}
                    />
                    {errors[field] && (
                      <p id={`${field}-error`} className="mt-2 text-sm text-destructive">
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-1 flex-col">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-text">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  value={fields.message}
                  onChange={handleChange}
                  aria-invalid={errors.message ? 'true' : undefined}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="What are you building?"
                  className={cn(inputClass, 'min-h-40 flex-1 resize-none')}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              {status === 'error' && (
                <p role="alert" className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-text shadow-[inset_0_0_0_1px_oklch(0.65_0.2_25/0.4)]">
                  {serverError} You can also reach me on{' '}
                  <a href="https://t.me/CBHeang" className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                  .
                </p>
              )}

              <div className="flex flex-col-reverse items-stretch justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                <p className="text-sm text-text-3">Goes straight to my inbox.</p>
                <button type="submit" disabled={status === 'sending'} className="btn btn-primary disabled:cursor-wait disabled:opacity-70">
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={16} aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </SpotlightGroup>
    </section>
  )
}

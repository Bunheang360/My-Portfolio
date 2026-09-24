import { cn } from '@/lib/utils'

export default function SectionHeading({
  id,
  title,
  lede,
  className,
  children,
}: {
  id: string
  title: string
  lede?: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={cn('mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between', className)}>
      <div className="max-w-2xl">
        <h2 id={id} className="display text-4xl text-text sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {lede && <p className="mt-5 text-lg leading-relaxed text-text-2">{lede}</p>}
      </div>
      {children}
    </div>
  )
}

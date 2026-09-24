'use client'

import { useRef, type ComponentPropsWithoutRef, type PointerEvent } from 'react'
import { cn } from '@/lib/utils'

/**
 * Tracks the pointer across a group of `.tile` elements and hands each tile
 * its local --mx/--my so the lit rim follows the cursor across the grid.
 */
export default function SpotlightGroup({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  const ref = useRef<HTMLDivElement>(null)
  const frame = useRef<number | null>(null)

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return
    const { clientX, clientY } = event
    if (frame.current) cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      ref.current?.querySelectorAll<HTMLElement>('.tile').forEach((tile) => {
        const rect = tile.getBoundingClientRect()
        tile.style.setProperty('--mx', `${clientX - rect.left}px`)
        tile.style.setProperty('--my', `${clientY - rect.top}px`)
      })
    })
  }

  return (
    <div
      ref={ref}
      data-spotlight=""
      onPointerMove={handleMove}
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  )
}

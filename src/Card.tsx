import type { ReactNode } from "react"

export interface CardProps {
  image?: string
  imageAlt?: string
  eyebrow?: string
  title: string
  children?: ReactNode
}

export function Card({ image, imageAlt = "", eyebrow, title, children }: CardProps) {
  return (
    <article className="flex w-full flex-col gap-3 rounded-xl bg-white p-6 shadow-sm">
      {image && (
        <img src={image} alt={imageAlt} className="aspect-[16/10] w-full rounded-lg object-cover" />
      )}
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">{eyebrow}</p>
      )}
      <h3 className="text-xl font-semibold leading-snug">{title}</h3>
      {children && <div className="text-neutral-600">{children}</div>}
    </article>
  )
}

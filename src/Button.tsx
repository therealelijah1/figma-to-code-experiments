import type { ButtonHTMLAttributes } from "react"

type Variant = "primary" | "secondary" | "ghost"
type Size = "sm" | "md" | "lg"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const VARIANT_STYLES: Record<Variant, string> = {
  primary: "bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-primary-hover)]",
  secondary: "bg-[var(--color-neutral-100)] text-[var(--color-neutral-900)] hover:bg-[var(--color-neutral-300)]",
  ghost: "bg-transparent text-[var(--color-neutral-900)] hover:bg-[var(--color-neutral-50)]",
}

const SIZE_STYLES: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-lg",
}

export function Button({ variant = "primary", size = "md", className = "", ...rest }: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-md font-semibold transition-colors",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    VARIANT_STYLES[variant],
    SIZE_STYLES[size],
    className,
  ].join(" ")
  return <button className={classes} {...rest} />
}

import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variante = 'branco' | 'azul' | 'vazado'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variante?: Variante
  children: ReactNode
}

const classesPorVariante: Record<Variante, string> = {
  branco:
    'bg-white text-brand-blue border border-white hover:opacity-90 hover:-translate-y-0.5',
  azul: 'bg-brand-blue text-white border border-brand-blue hover:opacity-90 hover:-translate-y-0.5',
  vazado:
    'bg-transparent text-white border border-white hover:bg-white hover:text-brand-blue hover:-translate-y-0.5',
}

export default function Button({ variante = 'azul', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-full px-6 py-3 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green ${classesPorVariante[variante]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

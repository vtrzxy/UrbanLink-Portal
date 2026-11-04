import { Link } from 'react-router'

export type CorIcone = 'blue' | 'green' | 'teal' | 'orange' | 'violet'

const corPorVariante: Record<CorIcone, string> = {
  blue: 'bg-[#E6F1FB]',
  green: 'bg-[#EAF3DE]',
  teal: 'bg-[#E1F5EE]',
  orange: 'bg-[#FAEEDA]',
  violet: 'bg-[#E9E6FB]',
}

export type LinkCard = {
  label: string
  to: string
}

type FeatureCardProps = {
  titulo: string
  descricao: string
  icone: string
  iconeAlt: string
  cor?: CorIcone
  links?: LinkCard[]
}

export default function FeatureCard({ titulo, descricao, icone, iconeAlt, cor = 'blue', links }: FeatureCardProps) {
  return (
    <article className="flex w-[55vw] flex-col items-start gap-6 rounded-[22px] bg-white p-6 shadow-[0_5px_10px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-lg sm:w-[50vw] lg:w-[520px] lg:min-h-[500px] lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:p-8">
      <div className="w-full lg:w-1/2">
        <h3 className="font-title text-2xl font-semibold text-slate-800 lg:text-[2rem]">{titulo}</h3>
        <p className="mt-4 text-base text-slate-700 lg:mb-8 lg:text-[1.1rem]">{descricao}</p>

        {links && links.length > 0 && (
          <div className="mt-4 flex flex-col gap-1 lg:mt-0">
            {links.map((link) => (
              <Link
                key={link.to + link.label}
                to={link.to}
                className="flex items-center justify-between border-t border-black/15 py-3 text-sm font-bold text-slate-800 no-underline transition hover:translate-x-1 hover:opacity-75"
              >
                {link.label}
                <span className="text-base">→</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div
        className={`flex size-24 shrink-0 items-center justify-center self-end rounded-[20px] lg:size-36 lg:self-auto ${corPorVariante[cor]}`}
      >
        <img className="size-11 brightness-0 lg:size-[4.2rem]" src={icone} alt={iconeAlt} />
      </div>
    </article>
  )
}

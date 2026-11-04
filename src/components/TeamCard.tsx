import type { Integrante } from '../types/integrante'

type TeamCardProps = {
  integrante: Integrante
  aoSelecionar: (integrante: Integrante) => void
}

export default function TeamCard({ integrante, aoSelecionar }: TeamCardProps) {
  function abrir() {
    aoSelecionar(integrante)
  }

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={abrir}
      onKeyDown={(evento) => {
        if (evento.key === 'Enter' || evento.key === ' ') {
          evento.preventDefault()
          abrir()
        }
      }}
      className="flex cursor-pointer flex-col items-center rounded-3xl border-t-4 border-brand-green bg-white p-8 text-center shadow-md shadow-black/10 outline-none transition hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-green/20 focus-visible:ring-2 focus-visible:ring-brand-blue/40"
    >
      <img
        className="size-28 rounded-full object-cover ring-4 ring-brand-blue/10"
        src={integrante.foto}
        alt={`Foto de ${integrante.nome}`}
      />

      <h3 className="mt-5 font-title text-lg font-semibold text-slate-800">{integrante.nome}</h3>
      <span className="mt-1 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold text-brand-blue">
        {integrante.cargo}
      </span>
      <p className="mt-3 text-sm font-bold text-brand-blue">{integrante.rm}</p>
      <p className="text-sm text-slate-500">{integrante.turma}</p>

      <div className="mt-5 flex gap-3">
        <a
          className="flex size-9 items-center justify-center rounded-full border border-slate-200 outline-none transition hover:bg-brand-blue hover:[&_img]:brightness-0 hover:[&_img]:invert focus-visible:ring-2 focus-visible:ring-brand-blue/40"
          href={integrante.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub de ${integrante.nome}`}
          onClick={(evento) => evento.stopPropagation()}
        >
          <img className="size-4.5" src="/assets/icons/socials/github.svg" alt="" />
        </a>

        <a
          className="flex size-9 items-center justify-center rounded-full border border-slate-200 outline-none transition hover:bg-brand-blue hover:[&_img]:brightness-0 hover:[&_img]:invert focus-visible:ring-2 focus-visible:ring-brand-blue/40"
          href={integrante.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn de ${integrante.nome}`}
          onClick={(evento) => evento.stopPropagation()}
        >
          <img className="size-4.5" src="/assets/icons/socials/linkedin.svg" alt="" />
        </a>
      </div>
    </article>
  )
}

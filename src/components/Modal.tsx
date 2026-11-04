import { useEffect } from 'react'
import type { Integrante } from '../types/integrante'

type ModalProps = {
  integrante: Integrante | null
  aoFechar: () => void
}

export default function Modal({ integrante, aoFechar }: ModalProps) {
  useEffect(() => {
    if (!integrante) return

    document.body.style.overflow = 'hidden'

    function aoPressionarTecla(evento: KeyboardEvent) {
      if (evento.key === 'Escape') aoFechar()
    }

    document.addEventListener('keydown', aoPressionarTecla)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', aoPressionarTecla)
    }
  }, [integrante, aoFechar])

  if (!integrante) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={(evento) => {
        if (evento.target === evento.currentTarget) aoFechar()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-integrante-nome"
        className="animate-fade-in-up relative flex w-full max-w-md flex-col items-center gap-3 rounded-3xl bg-white p-8 text-center sm:p-10"
      >
        <button
          type="button"
          onClick={aoFechar}
          aria-label="Fechar"
          className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-brand-bg text-slate-600 outline-none transition hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-brand-blue/40"
        >
          ✕
        </button>

        <img
          className="size-28 rounded-full object-cover"
          src={integrante.foto}
          alt={`Foto de ${integrante.nome}`}
        />

        <h2 id="modal-integrante-nome" className="font-title text-2xl font-bold text-slate-800">
          {integrante.nome}
        </h2>
        <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-sm font-bold text-brand-blue">
          {integrante.cargo}
        </span>
        <p className="text-sm font-bold text-brand-blue">{integrante.rm}</p>
        <p className="text-sm text-slate-500">{integrante.turma}</p>

        <div className="mt-2 flex justify-center gap-4">
          <a
            className="flex size-9 items-center justify-center rounded-full border border-slate-200 outline-none transition hover:bg-brand-blue hover:[&_img]:brightness-0 hover:[&_img]:invert focus-visible:ring-2 focus-visible:ring-brand-blue/40"
            href={integrante.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub de ${integrante.nome}`}
          >
            <img className="size-4.5" src="/assets/icons/socials/github.svg" alt="" />
          </a>
          <a
            className="flex size-9 items-center justify-center rounded-full border border-slate-200 outline-none transition hover:bg-brand-blue hover:[&_img]:brightness-0 hover:[&_img]:invert focus-visible:ring-2 focus-visible:ring-brand-blue/40"
            href={integrante.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${integrante.nome}`}
          >
            <img className="size-4.5" src="/assets/icons/socials/linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

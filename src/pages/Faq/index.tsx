import { useEffect, useMemo, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import { perguntasFaq } from '../../data/faq'

export default function Faq() {
  const [busca, setBusca] = useState('')
  const [abertaId, setAbertaId] = useState<number | null>(perguntasFaq[0]?.id ?? null)

  useEffect(() => {
    document.title = 'UrbanLink - FAQ'
  }, [])

  const perguntasFiltradas = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    if (!termo) return perguntasFaq
    return perguntasFaq.filter(
      (item) => item.pergunta.toLowerCase().includes(termo) || item.resposta.toLowerCase().includes(termo),
    )
  }, [busca])

  return (
    <>
      <PageHeader
        etiqueta="FAQ"
        titulo="Perguntas frequentes"
        descricao="Entenda como funciona a integração entre pontos, recompensas e mobilidade urbana dentro da proposta do UrbanLink."
        imagem="/assets/banners/faq-page-banner.png"
        imagemAlt="Ilustração de dúvidas frequentes sobre pontos, vouchers e transporte público"
      />

      <section className="faq-section bg-brand-bg px-6 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="font-title text-2xl font-bold text-slate-800 sm:text-3xl">
              Encontre respostas rápidas sobre o UrbanLink
            </h2>
            <p className="mt-3 text-slate-600">
              Reunimos as principais dúvidas sobre funcionamento, pontos, recompensas e uso da plataforma.
            </p>
          </div>

          <label className="sr-only" htmlFor="busca-faq">
            Buscar pergunta
          </label>
          <input
            id="busca-faq"
            type="search"
            value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
            placeholder="Buscar por palavra-chave (ex: pontos, cashback, fraude...)"
            className="mb-8 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus-visible:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue/30"
          />

          <div className="flex flex-col gap-3">
            {perguntasFiltradas.map((item) => {
              const aberta = abertaId === item.id
              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-title font-bold text-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30"
                    aria-expanded={aberta}
                    aria-controls={`resposta-${item.id}`}
                    onClick={() => setAbertaId(aberta ? null : item.id)}
                  >
                    {item.pergunta}
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full text-lg transition-colors ${
                        aberta ? 'bg-brand-green text-white' : 'bg-brand-green/15 text-brand-green'
                      }`}
                    >
                      {aberta ? '−' : '+'}
                    </span>
                  </button>

                  <div
                    id={`resposta-${item.id}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${aberta ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-slate-600">{item.resposta}</p>
                    </div>
                  </div>
                </div>
              )
            })}

            {perguntasFiltradas.length === 0 && (
              <p className="text-center text-slate-500">Nenhuma pergunta encontrada para "{busca}".</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

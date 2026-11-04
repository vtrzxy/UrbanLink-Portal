import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import PageHeader from '../../components/PageHeader'
import { recompensas } from '../../data/recompensas'
import type { CategoriaRecompensa } from '../../types/recompensa'

const categorias: Array<{ valor: CategoriaRecompensa | 'todas'; rotulo: string }> = [
  { valor: 'todas', rotulo: 'Todas' },
  { valor: 'passagem', rotulo: 'Passagens' },
  { valor: 'cashback', rotulo: 'Cashback' },
  { valor: 'parceiro', rotulo: 'Parceiros' },
]

export default function Recompensas() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<CategoriaRecompensa | 'todas'>('todas')

  useEffect(() => {
    document.title = 'UrbanLink - Recompensas'
  }, [])

  const recompensasFiltradas = useMemo(() => {
    if (categoriaAtiva === 'todas') return recompensas
    return recompensas.filter((item) => item.categoria === categoriaAtiva)
  }, [categoriaAtiva])

  return (
    <>
      <PageHeader
        etiqueta="Recompensas"
        titulo="Troque seus Créditos Ecoa por benefícios reais"
        descricao="Confira as recompensas disponíveis para quem valida trajetos de transporte público com a UrbanLink: passagens, cashback e descontos em parceiros."
        imagem="/assets/banners/recompensas-banner.svg"
        imagemAlt="Ilustração de recompensas: voucher, cartão de benefícios e créditos Ecoa"
      />

      <section className="px-6 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <button
                key={categoria.valor}
                type="button"
                onClick={() => setCategoriaAtiva(categoria.valor)}
                aria-pressed={categoriaAtiva === categoria.valor}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  categoriaAtiva === categoria.valor
                    ? 'border-brand-blue bg-brand-blue text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                {categoria.rotulo}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recompensasFiltradas.map((item) => (
              <article
                key={item.id}
                className="flex cursor-pointer flex-col rounded-3xl bg-white p-6 shadow-md shadow-black/10 transition hover:-translate-y-1.5 hover:shadow-xl"
              >
                <span className="text-xs font-bold tracking-wide text-brand-blue uppercase">{item.categoria}</span>
                <h3 className="mt-2 font-title text-lg font-semibold text-slate-800">{item.titulo}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{item.descricao}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-title text-lg font-bold text-brand-green">{item.pontos.toLocaleString('pt-BR')} pts</span>
                  <Link
                    className="text-sm font-bold text-brand-blue outline-none hover:underline focus-visible:underline"
                    to={`/recompensas/${item.id}`}
                  >
                    Ver detalhes →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {recompensasFiltradas.length === 0 && (
            <p className="text-center text-slate-500">Nenhuma recompensa encontrada nessa categoria.</p>
          )}
        </div>
      </section>
    </>
  )
}

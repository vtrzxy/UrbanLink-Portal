import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import Button from '../../components/Button'
import { recompensas } from '../../data/recompensas'

export default function RecompensaDetalhe() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const recompensa = recompensas.find((item) => item.id === Number(id))

  useEffect(() => {
    document.title = recompensa ? `UrbanLink - ${recompensa.titulo}` : 'UrbanLink - Recompensa não encontrada'
  }, [recompensa])

  if (!recompensa) {
    return (
      <section className="px-6 py-24 text-center">
        <h1 className="font-title text-3xl font-bold text-slate-800">Recompensa não encontrada</h1>
        <p className="mt-3 text-slate-600">O item que você procura não existe ou foi removido do catálogo.</p>
        <Button variante="azul" className="mt-8" onClick={() => navigate('/recompensas')}>
          Voltar às recompensas
        </Button>
      </section>
    )
  }

  return (
    <article className="px-6 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-md shadow-black/10 sm:p-12">
        <span className="text-xs font-bold tracking-wide text-brand-blue uppercase">
          Recompensa #{recompensa.id} · {recompensa.categoria}
        </span>
        <h1 className="mt-3 font-title text-3xl font-bold text-slate-800">{recompensa.titulo}</h1>
        <p className="mt-6 text-slate-600">{recompensa.descricao}</p>

        {recompensa.parceiro && (
          <p className="mt-4 text-sm text-slate-500">
            Parceiro: <span className="font-semibold text-slate-700">{recompensa.parceiro}</span>
          </p>
        )}

        <strong className="mt-8 block font-title text-3xl text-brand-green">
          {recompensa.pontos.toLocaleString('pt-BR')} pts
        </strong>

        <Button variante="azul" className="mt-10" onClick={() => navigate('/recompensas')}>
          Voltar às recompensas
        </Button>
      </div>
    </article>
  )
}

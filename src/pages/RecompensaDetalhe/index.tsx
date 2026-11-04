import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { buscarTransporte } from '../../services/urbanlink'
import type { Transporte } from '../../types/mobilidade'

function DetalheTransporte({ id }: { id: string }) {
  const [transporte, setTransporte] = useState<Transporte | null>(null)
  const [erro, setErro] = useState('')

  useEffect(() => {
    document.title = 'UrbanLink - Detalhe do transporte'
    const controle = new AbortController()
    buscarTransporte(id, controle.signal)
      .then(setTransporte)
      .catch((falha: Error) => {
        if (!controle.signal.aborted) setErro(falha.message)
      })

    return () => controle.abort()
  }, [id])

  return (
    <section className="px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-6 shadow-md sm:p-10">
        <Link className="font-bold text-brand-blue-dark underline" to="/recompensas">Voltar ao catálogo</Link>
        {erro && <p role="alert" className="mt-6 rounded-lg bg-red-50 p-3 text-red-800">{erro}</p>}
        {!transporte && !erro && <p className="mt-6" role="status">Carregando transporte…</p>}
        {transporte && (
          <>
            <p className="mt-6 text-sm font-bold uppercase text-brand-blue-dark">{transporte.modalidade}</p>
            <h1 className="mt-2 font-title text-3xl font-bold">{transporte.nome}</h1>
            <p className="mt-4">
              Tarifa {transporte.tarifaBase.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>

          </>
        )}
      </div>
    </section>
  )
}

export default function RecompensaDetalhe() {
  const { id = '' } = useParams()
  return <DetalheTransporte key={id} id={id} />
}

import { useEffect, useState } from 'react'
import TransporteCard from '../../components/TransporteCard'
import PageHeader from '../../components/PageHeader'
import { listarTransportes } from '../../services/urbanlink'
import type { Transporte } from '../../types/mobilidade'

export default function Recompensas() {
  const [transportes, setTransportes] = useState<Transporte[]>([])
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    document.title = 'UrbanLink - Recompensas'
    const controle = new AbortController()

    listarTransportes(controle.signal)
      .then(setTransportes)
      .catch((falha: Error) => {
        if (!controle.signal.aborted) setErro(falha.message)
      })
      .finally(() => {
        if (!controle.signal.aborted) setCarregando(false)
      })

    return () => controle.abort()
  }, [])

  return (
    <>
      <PageHeader
        etiqueta="Recompensas"
        titulo="Troque seus pontos por vouchers de transporte"
        descricao="Consulte o catálogo de transportes, escolha uma opção que aceite vouchers e use seus pontos para cobrir parte ou toda a tarifa."
        imagem="/assets/banners/recompensas-banner.svg"
        imagemAlt="Ilustração de voucher, cartão de benefícios e créditos Ecoa"
      />

      <section id="catalogo" className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
        <h2 className="mb-6 font-title text-2xl font-bold">Catálogo de transportes</h2>
        {carregando && <p role="status">Carregando transportes…</p>}
        {erro && <p role="alert" className="text-red-800">{erro}</p>}

        {!carregando && !erro && (
          <>
            {transportes.length === 0 && <p>Nenhum transporte disponível.</p>}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {transportes.map((item) => (
                <TransporteCard key={item.id} item={item} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  )
}

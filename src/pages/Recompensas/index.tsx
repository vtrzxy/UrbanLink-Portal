import { useEffect, useState } from 'react'
import TransporteCard from '../../components/TransporteCard'
import PageHeader from '../../components/PageHeader'
import { listarTransportes } from '../../services/urbanlink'
import type { Transporte } from '../../types/mobilidade'

export default function Recompensas() {
  const [transportes, setTransportes] = useState<Transporte[]>([])
  const [modalidade, setModalidade] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(true)
  const [tentativa, setTentativa] = useState(0)

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
  }, [tentativa])

  const modalidades = [...new Set(transportes.map((item) => item.modalidade))]
  const filtrados = transportes.filter((item) => !modalidade || item.modalidade === modalidade)

  return (
    <>
      <PageHeader
        etiqueta="Recompensas"
        titulo="Troque seus pontos por vouchers de transporte"
        descricao="Consulte o catálogo de transportes, escolha uma opção que aceite vouchers e use seus pontos para cobrir parte ou toda a tarifa."
        imagem="/assets/banners/recompensas-banner.svg"
        imagemAlt="Ilustração de voucher, cartão de benefícios e créditos Ecoa"
      >
        <a href="#catalogo" className="mt-6 inline-block rounded-full bg-white px-5 py-3 font-bold text-brand-blue-dark">
          Ver transportes
        </a>
      </PageHeader>

      <section id="catalogo" className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
        <h2 className="mb-6 font-title text-2xl font-bold">Catálogo de transportes</h2>
        {carregando && <p role="status">Carregando transportes…</p>}
        {erro && (
          <div role="alert" className="rounded-xl bg-red-50 p-4 text-red-800">
            <p>{erro}</p>
            <button
              type="button"
              className="mt-2 font-bold underline"
              onClick={() => {
                setErro('')
                setModalidade('')
                setCarregando(true)
                setTentativa(tentativa + 1)
              }}
            >
              Tentar novamente
            </button>
          </div>
        )}

        {!carregando && !erro && (
          <>
            {modalidades.length > 0 && (
              <label className="mb-6 flex flex-wrap items-center gap-3 font-semibold">
                Modalidade
                <select
                  className="rounded-lg border border-slate-400 bg-white px-3 py-2"
                  value={modalidade}
                  onChange={(event) => setModalidade(event.target.value)}
                >
                  <option value="">Todas</option>
                  {modalidades.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </label>
            )}

            {filtrados.length === 0 && <p>Nenhum transporte disponível.</p>}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtrados.map((item) => (
                <TransporteCard key={item.id} item={item} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  )
}

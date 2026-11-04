import { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import TeamCard from '../../components/TeamCard'
import Modal from '../../components/Modal'
import { integrantes } from '../../data/integrantes'
import type { Integrante } from '../../types/integrante'

export default function Integrantes() {
  const [selecionado, setSelecionado] = useState<Integrante | null>(null)

  useEffect(() => {
    document.title = 'UrbanLink - Quem Somos'
  }, [])

  return (
    <>
      <PageHeader
        etiqueta="Integrantes"
        titulo="Quem Somos?"
        descricao="Somos estudantes apaixonados por tecnologia e mobilidade urbana, unidos para transformar engajamento sustentável em soluções reais para as cidades."
        imagem="/assets/banners/quem-somos-banner.png"
        imagemAlt="Ilustração de equipe de estudantes desenvolvendo uma solução de mobilidade urbana sustentável"
      />

      <section className="quem-somos-section flex flex-col lg:min-h-screen justify-center px-6 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-10 font-title text-2xl font-bold text-slate-800 sm:text-3xl">Conheça o nosso Time!</h2>

          <div className="flex flex-wrap justify-center gap-6">
            {integrantes.map((integrante) => (
              <div key={integrante.id} className="w-full sm:basis-[calc((100%-3rem)/3)]">
                <TeamCard integrante={integrante} aoSelecionar={setSelecionado} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal integrante={selecionado} aoFechar={() => setSelecionado(null)} />
    </>
  )
}

import { useRef, useState } from 'react'
import FeatureCard from './FeatureCard'
import type { CorIcone, LinkCard } from './FeatureCard'

export type ItemCarousel = {
  titulo: string
  tabLabel?: string
  descricao: string
  icone: string
  cor: CorIcone
  links?: LinkCard[]
}

type TabCarouselProps = {
  rotulo: string
  itens: ItemCarousel[]
}

function animarScrollAte(container: HTMLDivElement, destino: number, duracaoMs: number) {
  const inicio = container.scrollLeft
  const distancia = destino - inicio
  const tempoInicio = performance.now()

  function passo(tempoAtual: number) {
    const tempoPassado = tempoAtual - tempoInicio
    const progresso = Math.min(tempoPassado / duracaoMs, 1)
    const suavizacao = progresso < 0.5 ? 2 * progresso * progresso : 1 - (-2 * progresso + 2) ** 2 / 2

    container.scrollLeft = inicio + distancia * suavizacao

    if (progresso < 1) {
      requestAnimationFrame(passo)
    }
  }

  requestAnimationFrame(passo)
}

export default function TabCarousel({ rotulo, itens }: TabCarouselProps) {
  const [ativo, setAtivo] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  const scrollPorCliqueRef = useRef(false)
  const timerScrollRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  function irParaCard(indice: number) {
    const container = containerRef.current
    const card = cardRefs.current[indice]
    if (!container || !card) return

    scrollPorCliqueRef.current = true
    setAtivo(indice)

    const destino = card.offsetLeft - container.offsetLeft
    animarScrollAte(container, destino, 700)

    window.setTimeout(() => {
      scrollPorCliqueRef.current = false
    }, 750)
  }

  function aoRolarManualmente() {
    if (scrollPorCliqueRef.current) return

    window.clearTimeout(timerScrollRef.current)
    timerScrollRef.current = setTimeout(() => {
      const container = containerRef.current
      if (!container) return

      const scrollAtual = container.scrollLeft
      let cardMaisProximo = 0
      let menorDistancia = Number.POSITIVE_INFINITY

      cardRefs.current.forEach((card, indice) => {
        if (!card) return
        const posicaoCard = card.offsetLeft - container.offsetLeft
        const distancia = Math.abs(scrollAtual - posicaoCard)
        if (distancia < menorDistancia) {
          menorDistancia = distancia
          cardMaisProximo = indice
        }
      })

      setAtivo(cardMaisProximo)
    }, 120)
  }

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="mr-2 text-sm font-bold tracking-wide text-slate-700 uppercase">{rotulo}</span>
        {itens.map((item, indice) => (
          <button
            key={item.titulo}
            type="button"
            onClick={() => irParaCard(indice)}
            aria-pressed={ativo === indice}
            className={`cursor-pointer rounded-lg border px-3 py-2 text-xs font-medium transition ${
              ativo === indice
                ? 'border-brand-green bg-brand-green/15 text-slate-800'
                : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'
            }`}
          >
            {item.tabLabel ?? item.titulo.split(' ').slice(0, 2).join(' ')}
          </button>
        ))}
      </div>

      <div ref={containerRef} onScroll={aoRolarManualmente} className="flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none]">
        {itens.map((item, indice) => (
          <div
            key={item.titulo}
            ref={(elemento) => {
              cardRefs.current[indice] = elemento
            }}
            className="shrink-0 cursor-pointer"
            onClick={() => irParaCard(indice)}
          >
            <FeatureCard
              titulo={item.titulo}
              descricao={item.descricao}
              icone={item.icone}
              iconeAlt=""
              cor={item.cor}
              links={item.links}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

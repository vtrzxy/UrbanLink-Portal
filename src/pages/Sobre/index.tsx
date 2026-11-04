import { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import TabCarousel from '../../components/TabCarousel'
import type { ItemCarousel } from '../../components/TabCarousel'

const pilares: ItemCarousel[] = [
  {
    titulo: 'Validação real',
    descricao:
      'Geolocalização e registro fotográfico confirmam cada trajeto, garantindo recompensas justas para quem realmente usa o transporte público.',
    icone: '/assets/icons/geo-alt.svg',
    cor: 'blue',
  },
  {
    titulo: 'Impacto mensurável',
    descricao:
      'Cada viagem gera dados de CO₂ não emitido, visíveis ao usuário e disponíveis para relatórios ESG de empresas parceiras.',
    icone: '/assets/icons/leaf.svg',
    cor: 'green',
  },
  {
    titulo: 'Gamificação',
    descricao: 'Desafios semanais, metas e rankings transformam o uso do ônibus em uma experiência interativa e motivadora.',
    icone: '/assets/icons/trophy.svg',
    cor: 'teal',
  },
  {
    titulo: 'Parcerias ESG',
    descricao:
      'Empresas financiam as recompensas e recebem métricas concretas de impacto ambiental — sustentabilidade que pode ser comprovada.',
    icone: '/assets/icons/building.svg',
    cor: 'orange',
  },
]

const stats = [
  { valor: '-14pts', descricao: 'queda no uso do transporte público no Brasil entre 2017 e 2024' },
  { valor: '29,4%', descricao: 'dos usuários deixaram o ônibus completamente' },
  { valor: '69,6%', descricao: 'voltariam a usar se o custo efetivo fosse menor' },
  { valor: '6×', descricao: 'menos CO₂ por passageiro no transporte coletivo vs. carro' },
]

const etapasLinhaTempo = [
  {
    tag: 'Origem',
    titulo: 'Demanda da SoulUp',
    resumo: 'A SoulUp identificou mobilidade sustentável como próxima vertical de expansão...',
    texto:
      'A SoulUp identificou mobilidade sustentável como próxima vertical de expansão e trouxe o desafio para a faculdade — a UrbanLink nasceu como resposta direta a essa demanda. Por ser uma feature nativa da SoulUp, a UrbanLink parte com infraestrutura, base de usuários e parcerias já estabelecidas desde o primeiro dia — eliminando os principais riscos de um produto novo.',
    pontos: [
      'Investimento e infraestrutura garantidos pela SoulUp',
      'Base de usuários existente desde o lançamento',
      'Parcerias ESG já no ecossistema da plataforma',
    ],
  },
  {
    tag: 'Pesquisa',
    titulo: 'Entendimento do problema',
    resumo: 'Mapeamento dos dados de queda no uso do transporte público...',
    texto:
      'O uso do transporte público caiu 14 pontos percentuais entre 2017 e 2024, segundo pesquisa CNT/NTU. Cerca de 29,4% dos usuários abandonaram o ônibus completamente, e 69,6% voltariam a usá-lo se o custo efetivo fosse menor. Ao mesmo tempo, o mercado de fidelização cresceu 17,6% em 2024, movimentando R$ 21,9 bilhões — provando que as pessoas respondem a incentivos.',
    pontos: [],
  },
  {
    tag: 'Concepção',
    titulo: 'Solução e modelo de negócio',
    resumo: 'Desenvolvimento da proposta com validação por geolocalização...',
    texto:
      'A UrbanLink valida cada trajeto combinando três camadas: foto do interior do veículo, geolocalização em tempo real e cruzamento com os horários reais das linhas via APIs externas. Trajetos validados geram Créditos Ecoa proporcionais à distância percorrida, resgatáveis em passagens, cashback e descontos em parceiros. A receita vem do patrocínio ESG de empresas que financiam as recompensas em troca de métricas concretas de impacto ambiental.',
    pontos: [],
  },
  {
    tag: 'Próximo passo',
    titulo: 'Piloto na Região Metropolitana de SP',
    resumo: 'Validação com usuários reais em uma linha de ônibus...',
    texto:
      'O piloto será conduzido em uma linha específica da RMSP, com um grupo controlado de usuários da SoulUp. Os objetivos são validar a taxa de engajamento com o sistema de recompensas, testar a eficácia do antifraude em condições reais e medir o interesse de empresas parceiras no modelo de patrocínio ESG antes de escalar para outras linhas e cidades.',
    pontos: [],
  },
]

export default function Sobre() {
  const [etapaAtiva, setEtapaAtiva] = useState(0)

  useEffect(() => {
    document.title = 'UrbanLink - Sobre'
  }, [])

  const etapa = etapasLinhaTempo[etapaAtiva]

  return (
    <>
      <PageHeader
        etiqueta="Sobre a UrbanLink"
        titulo="Mobilidade sustentável que recompensa de verdade"
        descricao="A UrbanLink nasceu de uma demanda real: criar incentivos concretos para que mais pessoas escolham o transporte público. Acumule pontos em cada trajeto, troque por benefícios e acompanhe seu impacto positivo na cidade."
        imagem="/assets/banners/sobre.png"
        imagemAlt="Ilustração sobre mobilidade sustentável, recompensas digitais e transporte público"
      />

      <section className="como-funciona-section flex flex-col lg:min-h-screen justify-center overflow-hidden bg-brand-bg px-6 py-16 sm:px-10 lg:py-24">
        <TabCarousel rotulo="O que nos move?" itens={pilares} />
      </section>

      <section className="stats-section flex flex-col lg:min-h-screen justify-center gap-10 bg-linear-to-br from-brand-blue to-brand-green px-6 py-16 text-white sm:px-10 lg:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="max-w-2xl font-title text-2xl leading-tight font-bold sm:text-3xl">O problema que resolvemos</h2>
          <p className="mt-4 max-w-2xl opacity-90">
            Dados que mostram por que incentivar o transporte público é essencial para criar uma cidade mais
            sustentável, acessível e eficiente.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.descricao}
                className="cursor-pointer rounded-2xl bg-white p-6 text-center text-slate-800 shadow-lg shadow-black/10 transition hover:-translate-y-1.5"
              >
                <h3 className="bg-linear-to-br from-brand-blue to-brand-green bg-clip-text font-title text-3xl font-bold text-transparent">
                  {stat.valor}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{stat.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="timeline-section flex flex-col lg:min-h-screen justify-center bg-brand-bg px-6 py-16 sm:px-10 lg:py-24"
        aria-labelledby="timeline-title"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2 id="timeline-title" className="font-title text-2xl font-bold text-slate-800 sm:text-3xl">
            Como chegamos até aqui
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div role="tablist" aria-label="Etapas do projeto" className="relative pl-10">
              <div className="absolute top-2 bottom-2 left-[7px] w-0.75 bg-linear-to-b from-brand-blue to-brand-green" />

              {etapasLinhaTempo.map((item, indice) => {
                const ativa = etapaAtiva === indice
                const ultima = indice === etapasLinhaTempo.length - 1
                return (
                  <button
                    key={item.tag}
                    role="tab"
                    aria-selected={ativa}
                    onClick={() => setEtapaAtiva(indice)}
                    onMouseEnter={() => setEtapaAtiva(indice)}
                    className="relative mb-6 block w-full cursor-pointer text-left outline-none transition last:mb-0 hover:translate-x-1"
                  >
                    <span
                      className={`absolute top-6 -left-10 size-4 rounded-full border-3 transition-colors ${
                        ultima ? 'border-brand-green' : 'border-brand-blue'
                      } ${ativa ? (ultima ? 'bg-brand-green' : 'bg-brand-blue') : 'bg-white'}`}
                    />
                    <div
                      className={`rounded-xl border bg-white p-6 shadow-sm transition ${
                        ativa ? 'border-brand-blue bg-brand-blue/5 shadow-md' : 'border-slate-100'
                      }`}
                    >
                      <span className="inline-flex rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold text-brand-blue">
                        {item.tag}
                      </span>
                      <h3 className="mt-2 font-title text-base font-bold text-slate-800">{item.titulo}</h3>
                      <p className="mt-1 hidden truncate text-xs text-slate-500 sm:block">{item.resumo}</p>
                    </div>
                  </button>
                )
              })}
            </div>

            <article
              key={etapa.tag}
              role="tabpanel"
              className="animate-fade-in-up rounded-2xl border border-slate-100 bg-white p-8 shadow-md shadow-black/5 lg:sticky lg:top-10 lg:self-start"
            >
              <span className="text-xs font-bold tracking-wide text-brand-blue uppercase">{etapa.tag}</span>
              <h2 className="mt-2 font-title text-2xl font-bold text-slate-800">{etapa.titulo}</h2>
              <p className="mt-4 font-medium text-slate-700">{etapa.texto.split('. ')[0]}.</p>
              <p className="mt-4 text-slate-600">{etapa.texto.split('. ').slice(1).join('. ')}</p>

              {etapa.pontos.length > 0 && (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-600">
                  {etapa.pontos.map((ponto) => (
                    <li key={ponto}>{ponto}</li>
                  ))}
                </ul>
              )}
            </article>
          </div>
        </div>
      </section>

      <aside aria-labelledby="cta-title" className="cta-final-section bg-linear-to-br from-brand-blue to-brand-green px-6 py-12 text-white sm:px-10 lg:px-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 id="cta-title" className="font-title text-2xl font-bold">
              Faça parte da mudança
            </h2>
            <p className="mt-2 opacity-90">Acumule pontos e ajude a transformar a mobilidade urbana</p>
          </div>
          <a
            className="rounded-xl border border-white/40 px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="#cadastro"
          >
            Cadastre-se agora
          </a>
        </div>
      </aside>
    </>
  )
}

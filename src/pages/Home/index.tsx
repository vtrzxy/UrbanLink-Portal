import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import PageHeader from '../../components/PageHeader'
import TabCarousel from '../../components/TabCarousel'
import Button from '../../components/Button'
import type { ItemCarousel } from '../../components/TabCarousel'

const etapas: ItemCarousel[] = [
  {
    titulo: 'Use transporte público',
    tabLabel: 'Trajeto',
    descricao:
      'O usuário inicia sua jornada usando ônibus, metrô ou trem e registra o trajeto dentro da plataforma UrbanLink.',
    icone: '/assets/icons/bus-front-fill.svg',
    cor: 'blue',
    links: [
      { label: 'Entender jornada', to: '/sobre' },
      { label: 'Ver dúvidas', to: '/faq' },
    ],
  },
  {
    titulo: 'Valide o trajeto',
    tabLabel: 'Validação',
    descricao:
      'A plataforma combina geolocalização, registro fotográfico e dados de mobilidade urbana para confirmar se o trajeto foi realmente realizado.',
    icone: '/assets/icons/sign-turn-right-fill.svg',
    cor: 'green',
    links: [
      { label: 'Como validamos', to: '/sobre' },
      { label: 'Regras de uso', to: '/faq' },
    ],
  },
  {
    titulo: 'Ganhe Créditos Ecoa',
    tabLabel: 'Créditos Ecoa',
    descricao: 'Após a validação, o usuário recebe pontos proporcionais ao trajeto e ao meio de transporte utilizado.',
    icone: '/assets/icons/cash-coin.svg',
    cor: 'teal',
    links: [
      { label: 'Consultar saldo', to: '#dashboard' },
      { label: 'Ver pontuação', to: '#dashboard' },
    ],
  },
  {
    titulo: 'Troque por benefícios',
    tabLabel: 'Recompensas',
    descricao: 'Os Créditos Ecoa podem ser resgatados por passagens, cashback e descontos em parceiros da plataforma.',
    icone: '/assets/icons/gift-fill.svg',
    cor: 'orange',
    links: [
      { label: 'Simular troca', to: '#dashboard' },
      { label: 'Ver benefícios', to: '/recompensas' },
    ],
  },
  {
    titulo: 'Acompanhe seu impacto',
    tabLabel: 'Impacto',
    descricao:
      'O usuário visualiza métricas como CO₂ não emitido, quantidade de trajetos realizados e evolução no sistema de gamificação.',
    icone: '/assets/icons/leaf.svg',
    cor: 'violet',
    links: [
      { label: 'Ver impacto', to: '/sobre' },
      { label: 'Dashboard ambiental', to: '#dashboard' },
    ],
  },
]

const ctaCards = [
  {
    numero: '01',
    titulo: 'Começa com vouchers',
    descricao: 'Um modelo inicial simples para permitir resgates de transporte de forma acessível.',
  },
  {
    numero: '02',
    titulo: 'Evolui com integração',
    descricao: 'A solução pode avançar para integração direta com sistemas de bilhetagem urbana.',
  },
  {
    numero: '03',
    titulo: 'Gera valor ESG',
    descricao: 'Empresas parceiras financiam recompensas e acompanham métricas reais de impacto.',
  },
]

const segurancaItens = [
  { titulo: 'Geolocalização', descricao: 'Confirma se o usuário está na rota informada.' },
  { titulo: 'Registro fotográfico', descricao: 'Ajuda a verificar se o usuário está em um transporte coletivo.' },
  { titulo: 'Score de confiança', descricao: 'Usuários consistentes ganham validações mais simples.' },
  { titulo: 'Limites diários', descricao: 'Reduz abuso e bloqueia comportamentos suspeitos.' },
]

const PONTOS_POR_TRAJETO = 180
const CO2_POR_TRAJETO_KG = 0.9

export default function Home() {
  const [trajetosPorSemana, setTrajetosPorSemana] = useState(10)

  useEffect(() => {
    document.title = 'UrbanLink - Home'
  }, [])

  const simulacao = useMemo(
    () => ({
      pontos: trajetosPorSemana * PONTOS_POR_TRAJETO,
      co2: Number((trajetosPorSemana * CO2_POR_TRAJETO_KG).toFixed(1)),
    }),
    [trajetosPorSemana],
  )

  return (
    <>
      <PageHeader
        etiqueta="Página Inicial"
        titulo="Seus pontos SoulUp virando mobilidade real"
        descricao="O UrbanLink conecta engajamento sustentável a benefícios concretos no transporte público. Acumule pontos, troque por vouchers e acompanhe o impacto positivo das suas escolhas na cidade."
        imagem="/assets/logosUrbanLink/logo_UrbanLink.svg"
        imagemAlt="Logo grande da UrbanLink"
      />

      <section className="como-funciona-section flex flex-col lg:min-h-screen justify-center overflow-hidden bg-brand-bg px-6 py-16 sm:px-10 lg:py-24">
        <TabCarousel rotulo="Como funciona?" itens={etapas} />
      </section>

      <section className="cta-secundaria-section flex flex-col justify-center gap-10 bg-linear-to-br from-brand-blue to-brand-green px-6 py-16 text-white text-center sm:px-10 lg:min-h-screen lg:py-24 lg:text-left">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-lg">
            <span className="mb-4 inline-block rounded-lg border border-white/35 bg-white/15 px-3 py-2 text-sm font-semibold">
              UrbanLink + SoulUp
            </span>
            <h2 className="font-title text-2xl font-bold sm:text-3xl">
              Mobilidade sustentável também pode ser recompensa.
            </h2>
            <p className="mt-4 opacity-90">
              A UrbanLink nasce como uma vertical da SoulUp para conectar engajamento, transporte público, impacto
              ambiental e benefícios reais em uma experiência simples e escalável.
            </p>
            <Link to="/sobre">
              <Button variante="vazado" className="mt-6">
                Conheça a solução
              </Button>
            </Link>
          </div>

          <div className="grid w-full gap-4 text-left sm:grid-cols-3 lg:w-1/2">
            {ctaCards.map((card) => (
              <article
                key={card.numero}
                className="cursor-pointer rounded-2xl border border-white/25 bg-white/15 p-6 transition hover:-translate-y-1.5 hover:bg-white/20"
              >
                <span className="text-sm font-bold opacity-80">{card.numero}</span>
                <h3 className="mt-3 font-title font-semibold">{card.titulo}</h3>
                <p className="mt-2 text-sm opacity-85">{card.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dashboard-simulacao-section flex flex-col lg:min-h-screen justify-center gap-10 bg-brand-bg px-6 py-16 sm:px-10 lg:py-24" id="dashboard">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-lg">
            <span className="mb-4 inline-block rounded-lg border border-brand-green/40 bg-brand-green/10 px-3 py-2 text-sm font-semibold text-brand-green">
              Simulação
            </span>
            <h2 className="font-title text-2xl font-bold text-slate-800 sm:text-3xl">Simule seus Créditos Ecoa</h2>
            <p className="mt-4 text-slate-600">
              Veja como um trajeto validado pode gerar pontos, benefícios e impacto ambiental mensurável dentro da
              carteira integrada à SoulUp.
            </p>

            <label className="mt-6 block text-sm font-semibold text-slate-700" htmlFor="trajetos-semana">
              Trajetos validados por semana: {trajetosPorSemana}
            </label>
            <input
              id="trajetos-semana"
              type="range"
              min={1}
              max={30}
              value={trajetosPorSemana}
              onChange={(evento) => setTrajetosPorSemana(Number(evento.target.value))}
              className="mt-2 w-full max-w-xs accent-brand-blue"
            />
          </div>

          <div className="rounded-[28px] bg-linear-to-br from-brand-blue to-brand-green p-8 shadow-2xl shadow-brand-blue/25 lg:w-1/2">
            <div className="grid gap-4">
              <div className="cursor-pointer rounded-2xl bg-white p-6 shadow-md shadow-black/10 transition hover:-translate-y-1.5">
                <p className="text-sm text-slate-500">Créditos Ecoa por semana</p>
                <p className="mt-2 font-title text-3xl font-bold text-slate-800">{simulacao.pontos.toLocaleString('pt-BR')} pts</p>
              </div>

              <div className="cursor-pointer rounded-2xl bg-white p-6 shadow-md shadow-black/10 transition hover:-translate-y-1.5">
                <p className="text-sm text-slate-500">Benefício sugerido</p>
                <p className="mt-2 font-title text-3xl font-bold text-slate-800">
                  R$ {(simulacao.pontos / 100).toFixed(2).replace('.', ',')}
                </p>
                <span className="rounded-full bg-brand-blue/15 px-3 py-1 text-xs font-bold text-brand-blue">Passagem</span>
              </div>

              <div className="cursor-pointer rounded-2xl bg-white p-6 shadow-md shadow-black/10 transition hover:-translate-y-1.5">
                <p className="text-sm text-slate-500">Impacto estimado</p>
                <p className="mt-2 font-title text-3xl font-bold text-slate-800">{simulacao.co2} kg CO₂ evitados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="seguranca-section flex flex-col lg:min-h-screen justify-center gap-10 bg-linear-to-br from-brand-blue to-brand-green px-6 py-16 text-white sm:px-10 lg:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <span className="mb-4 inline-block rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-sm font-semibold">
            Segurança
          </span>
          <h2 className="font-title text-2xl font-bold sm:text-3xl">Evolução prevista contra fraudes.</h2>
          <p className="mt-4 max-w-2xl opacity-90">
            Em versões futuras, a UrbanLink poderá cruzar geolocalização, registro fotográfico, horários de
            operação e padrões de comportamento. Esses recursos ainda não estão implementados nesta versão.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {segurancaItens.map((item) => (
              <article
                key={item.titulo}
                className="cursor-pointer rounded-2xl border border-white/10 bg-brand-bg p-6 text-slate-800 transition hover:-translate-y-1.5 hover:shadow-xl"
              >
                <h3 className="bg-linear-to-br from-brand-blue to-brand-green bg-clip-text font-title font-semibold text-transparent">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import type { Recompensa } from '../types/recompensa'

export const recompensas: Recompensa[] = [
  {
    id: 1,
    titulo: 'Passagem de ônibus',
    categoria: 'passagem',
    pontos: 800,
    descricao:
      'Troque seus Créditos Ecoa por uma passagem de ônibus municipal, válida em qualquer linha integrada à plataforma.',
  },
  {
    id: 2,
    titulo: 'Passagem de metrô',
    categoria: 'passagem',
    pontos: 900,
    descricao:
      'Resgate uma passagem de metrô para usar em qualquer estação da rede integrada ao UrbanLink.',
  },
  {
    id: 3,
    titulo: 'Cashback R$ 10',
    categoria: 'cashback',
    pontos: 1200,
    descricao:
      'Receba R$ 10,00 de volta na sua carteira digital, creditados em até 2 dias úteis após o resgate.',
  },
  {
    id: 4,
    titulo: 'Cashback R$ 25',
    categoria: 'cashback',
    pontos: 2800,
    descricao:
      'Receba R$ 25,00 de volta na sua carteira digital. Ideal para quem valida trajetos com frequência.',
  },
  {
    id: 5,
    titulo: 'Desconto em cafeteria parceira',
    categoria: 'parceiro',
    pontos: 600,
    descricao:
      '15% de desconto em cafeterias parceiras próximas aos pontos de ônibus e metrô mais usados pela comunidade UrbanLink.',
    parceiro: 'Rede Café Urbano',
  },
  {
    id: 6,
    titulo: 'Desconto em bicicletários',
    categoria: 'parceiro',
    pontos: 700,
    descricao:
      '20% de desconto na mensalidade de bicicletários parceiros para complementar o último trecho da sua jornada.',
    parceiro: 'CicloPonto',
  },
]

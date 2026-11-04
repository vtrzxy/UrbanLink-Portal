export interface Transporte {
  id: string
  nome: string
  modalidade: string
  tarifaBase: number
  co2EvitadoPorUso: number
  integrado: boolean
  aceitaVoucher?: boolean
}

export interface Usuario {
  id: string
  nome: string
  saldoPontos: number
}

export interface Voucher {
  codigo: string
  usuarioId: string
  dataGeracao: string
  valorCredito: number
  pontosUsados: number
  status: 'ATIVO' | 'UTILIZADO' | 'EXPIRADO' | 'CANCELADO'
}

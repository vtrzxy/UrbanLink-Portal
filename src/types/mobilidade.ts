export interface Transporte {
  id: string
  nome: string
  modalidade: string
  tarifaBase: number
  co2EvitadoPorUso: number
  integrado: boolean
  aceitaVoucher?: boolean
}

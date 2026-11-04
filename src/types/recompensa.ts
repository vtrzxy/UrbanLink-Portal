export type CategoriaRecompensa = 'passagem' | 'cashback' | 'parceiro'

export interface Recompensa {
  id: number
  titulo: string
  categoria: CategoriaRecompensa
  pontos: number
  descricao: string
  parceiro?: string
}

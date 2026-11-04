import type { ConversaoVoucher, Voucher, Usuario, Transporte } from '../types/mobilidade'

const urlApi = (import.meta.env.VITE_API_URL?.trim() || 'https://urbanlink-sboot.onrender.com').replace(/\/+$/, '')

export async function consultarApi<T>(caminho: string, opcoes?: RequestInit): Promise<T> {
  let resposta: Response

  try {
    resposta = await fetch(urlApi + caminho, opcoes)
  } catch {
    throw new Error('Não foi possível conectar à API. Verifique a conexão e tente novamente.')
  }

  if (!resposta.ok) {
    const mensagem = resposta.headers.get('content-type')?.includes('text/plain')
      ? await resposta.text()
      : ''
    throw new Error(mensagem || 'A API não conseguiu concluir a solicitação.')
  }

  return resposta.json()
}

export function listarTransportes(signal: AbortSignal) {
  return consultarApi<Transporte[]>('/transportes', { signal })
}

export function buscarTransporte(id: string, signal: AbortSignal) {
  return consultarApi<Transporte>('/transportes/' + encodeURIComponent(id), { signal })
}

export function listarUsuarios(signal: AbortSignal) {
  return consultarApi<Usuario[]>('/usuarios', { signal })
}

export function emitirVoucher(conversao: ConversaoVoucher) {
  return consultarApi<Voucher>('/vouchers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(conversao),
  })
}

export function listarVouchers(usuarioId: string, signal: AbortSignal) {
  return consultarApi<Voucher[]>('/vouchers/usuario/' + encodeURIComponent(usuarioId), { signal })
}

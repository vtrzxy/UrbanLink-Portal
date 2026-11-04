const urlApi = (import.meta.env.VITE_API_URL?.trim() || 'https://urbanlink-sboot.onrender.com').replace(/\/+$/, '')

export async function consultarApi<T>(caminho: string, opcoes?: RequestInit): Promise<T> {
  const resposta = await fetch(urlApi + caminho, opcoes)

  if (!resposta.ok) {
    const mensagem = resposta.headers.get('content-type')?.includes('text/plain')
      ? await resposta.text()
      : ''
    throw new Error(mensagem || 'A API não conseguiu concluir a solicitação.')
  }

  return resposta.json()
}

import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import Historico from './Historico'
import { listarUsuarios } from '../../services/urbanlink'
import type { Usuario } from '../../types/mobilidade'

export default function MeusVouchers() {
  const [params, setParams] = useSearchParams()
  const [usuarios, setUsuarios] = useState<Usuario[] | null>(null)
  const [erro, setErro] = useState('')
  const usuarioId = params.get('usuario') ?? ''
  const usuario = usuarios?.find((item) => item.id === usuarioId)

  useEffect(() => {
    document.title = 'UrbanLink - Meus vouchers'
    const controle = new AbortController()
    listarUsuarios(controle.signal)
      .then(setUsuarios)
      .catch((falha: Error) => {
        if (!controle.signal.aborted) setErro(falha.message)
      })

    return () => controle.abort()
  }, [])

  return (
    <section className="mx-auto max-w-4xl px-6 py-12 sm:px-10">
      <h1 className="font-title text-3xl font-bold">Meus vouchers</h1>
      <p className="mt-3">Selecione um perfil de demonstração para consultar os vouchers emitidos.</p>
      <Link className="mt-3 inline-block font-bold text-brand-blue-dark underline" to="/recompensas">
        Voltar ao catálogo
      </Link>
      {erro && <p role="alert" className="mt-6 text-red-800">{erro}</p>}
      {!usuarios && !erro && <p role="status" className="mt-6">Carregando usuários…</p>}
      {usuarios?.length === 0 && <p className="mt-6">Nenhum usuário disponível.</p>}
      {usuarios && usuarios.length > 0 && (
        <label className="mt-6 flex flex-wrap items-center gap-3 font-semibold">
          Usuário
          <select
            value={usuario?.id ?? ''}
            onChange={(event) => setParams(event.target.value ? { usuario: event.target.value } : {})}
            className="rounded-lg border border-slate-400 bg-white px-3 py-2"
          >
            <option value="">Selecione um usuário</option>
            {usuarios.map((item) => <option key={item.id} value={item.id}>{item.nome}</option>)}
          </select>
        </label>
      )}
      {usuarios && usuarioId && !usuario && <p role="status" className="mt-4">Perfil indisponível. Selecione outro usuário.</p>}
      {usuario && (
        <>
          <p className="mt-4">Saldo de {usuario.saldoPontos.toLocaleString('pt-BR')} pontos</p>
          <Historico key={usuario.id} usuarioId={usuario.id} />
        </>
      )}
    </section>
  )
}

import { useEffect, useState } from 'react'
import { listarUsuarios } from '../../services/urbanlink'
import type { Transporte, Usuario } from '../../types/mobilidade'

export default function FormularioVoucher({ transporte }: { transporte: Transporte }) {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [usuarioId, setUsuarioId] = useState('')
  const [percentual, setPercentual] = useState('100')
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    const controle = new AbortController()
    listarUsuarios(controle.signal)
      .then(setUsuarios)
      .catch((falha: Error) => {
        if (!controle.signal.aborted) setErro(falha.message)
      })
      .finally(() => {
        if (!controle.signal.aborted) setCarregando(false)
      })

    return () => controle.abort()
  }, [])

  const usuario = usuarios.find((item) => item.id === usuarioId)

  return (
    <form className="mt-8 space-y-4 border-t border-slate-200 pt-6">
      <h2 className="font-title text-xl font-bold">Converter pontos em voucher</h2>
      <p className="text-sm text-slate-600">Selecione o perfil de demonstração para usar o saldo desse usuário.</p>
      {carregando && <p role="status">Carregando usuários…</p>}
      {!carregando && !erro && usuarios.length === 0 && <p>Nenhum usuário disponível.</p>}
      <fieldset disabled={carregando || usuarios.length === 0} className="space-y-4">
        <label className="block font-semibold" htmlFor="usuario-voucher">Usuário</label>
        <select
          id="usuario-voucher"
          value={usuarioId}
          onChange={(event) => setUsuarioId(event.target.value)}
          className="w-full rounded-lg border border-slate-400 bg-white px-3 py-2"
          required
        >
          <option value="">Selecione um usuário</option>
          {usuarios.map((item) => <option key={item.id} value={item.id}>{item.nome}</option>)}
        </select>
        {usuario && <p>Saldo de {usuario.saldoPontos.toLocaleString('pt-BR')} pontos</p>}
        <label className="block font-semibold" htmlFor="percentual">Cobertura da tarifa (%)</label>
        <input
          id="percentual"
          type="number"
          min="0.01"
          max="100"
          step="0.01"
          value={percentual}
          onChange={(event) => setPercentual(event.target.value)}
          className="w-full rounded-lg border border-slate-400 px-3 py-2"
          required
        />
        <p className="text-sm text-slate-600">
          Crédito estimado {((transporte.tarifaBase * Number(percentual)) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </fieldset>
      {erro && <p role="alert" className="rounded-lg bg-red-50 p-3 text-red-800">{erro}</p>}
    </form>
  )
}

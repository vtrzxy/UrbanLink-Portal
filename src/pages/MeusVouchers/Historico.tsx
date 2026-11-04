import { useEffect, useState } from 'react'
import { listarVouchers } from '../../services/urbanlink'
import type { Voucher } from '../../types/mobilidade'

export default function Historico({ usuarioId }: { usuarioId: string }) {
  const [vouchers, setVouchers] = useState<Voucher[] | null>(null)
  const [erro, setErro] = useState('')

  useEffect(() => {
    const controle = new AbortController()
    listarVouchers(usuarioId, controle.signal)
      .then(setVouchers)
      .catch((falha: Error) => {
        if (!controle.signal.aborted) setErro(falha.message)
      })

    return () => controle.abort()
  }, [usuarioId])

  if (erro) return <p role="alert" className="mt-6 text-red-800">{erro}</p>
  if (!vouchers) return <p role="status" className="mt-6">Carregando vouchers…</p>
  if (vouchers.length === 0) return <p className="mt-6">Nenhum voucher para este usuário.</p>

  return (
    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
      {vouchers.map((voucher) => (
        <li key={voucher.codigo} className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="break-all font-bold">{voucher.codigo}</p>
          <p>Crédito de {voucher.valorCredito.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          <p>Pontos usados {voucher.pontosUsados.toLocaleString('pt-BR')}</p>
        </li>
      ))}
    </ul>
  )
}

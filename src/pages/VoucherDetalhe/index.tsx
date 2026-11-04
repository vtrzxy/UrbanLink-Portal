import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { buscarVoucher } from '../../services/urbanlink'
import type { Voucher } from '../../types/mobilidade'

function Detalhe({ codigo }: { codigo: string }) {
  const [voucher, setVoucher] = useState<Voucher | null>(null)
  const [erro, setErro] = useState('')

  useEffect(() => {
    document.title = 'UrbanLink - Detalhe do voucher'
    const controle = new AbortController()
    buscarVoucher(codigo, controle.signal)
      .then(setVoucher)
      .catch((falha: Error) => {
        if (!controle.signal.aborted) setErro(falha.message)
      })
    return () => controle.abort()
  }, [codigo])

  return (
    <section className="mx-auto max-w-2xl px-6 py-12">
      <Link to="/vouchers" className="font-bold text-brand-blue-dark underline">Voltar aos vouchers</Link>
      <h1 className="mt-6 break-all font-title text-3xl font-bold">Voucher {codigo}</h1>
      {erro && <p role="alert" className="mt-4 text-red-800">{erro}</p>}
      {!voucher && !erro && <p role="status" className="mt-4">Carregando voucher…</p>}
      {voucher && (
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <p>Status {voucher.status.toLocaleLowerCase('pt-BR')}</p>
          <p>Crédito de {voucher.valorCredito.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          <p>Pontos usados {voucher.pontosUsados.toLocaleString('pt-BR')}</p>
        </div>
      )}
    </section>
  )
}

export default function VoucherDetalhe() {
  const { codigo = '' } = useParams()
  return <Detalhe key={codigo} codigo={codigo} />
}

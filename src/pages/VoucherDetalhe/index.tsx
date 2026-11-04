import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import Button from '../../components/Button'
import { buscarVoucher, cancelarVoucher, utilizarVoucher } from '../../services/urbanlink'
import type { Voucher } from '../../types/mobilidade'

function Detalhe({ codigo }: { codigo: string }) {
  const [voucher, setVoucher] = useState<Voucher | null>(null)
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [retorno, setRetorno] = useState('')

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

  async function alterarVoucher(acao: 'utilizar' | 'cancelar') {
    if (!voucher || enviando || voucher.status !== 'ATIVO') return
    if (!window.confirm('Confirmar que deseja ' + acao + ' este voucher?')) return

    setErro('')
    setRetorno('')
    setEnviando(true)
    try {
      const atualizado = acao === 'utilizar'
        ? await utilizarVoucher(voucher.codigo, voucher.usuarioId)
        : await cancelarVoucher(voucher.codigo)
      setVoucher(atualizado)
      setRetorno(acao === 'utilizar' ? 'Voucher utilizado.' : 'Voucher cancelado.')
    } catch (falha) {
      setErro(falha instanceof Error ? falha.message : 'Não foi possível alterar o voucher.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-12">
      <Link to={voucher ? '/vouchers?usuario=' + encodeURIComponent(voucher.usuarioId) : '/vouchers'} className="font-bold text-brand-blue-dark underline">Voltar aos vouchers</Link>
      <h1 className="mt-6 break-all font-title text-3xl font-bold">Voucher {codigo}</h1>
      {erro && <p role="alert" className="mt-4 text-red-800">{erro}</p>}
      {!voucher && !erro && <p role="status" className="mt-4">Carregando voucher…</p>}
      {voucher && (
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <p>Emissão {new Date(voucher.dataGeracao).toLocaleString('pt-BR')}</p>
          <p>Status {voucher.status.toLocaleLowerCase('pt-BR')}</p>
          <p>Crédito de {voucher.valorCredito.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          <p>Pontos usados {voucher.pontosUsados.toLocaleString('pt-BR')}</p>
          {voucher.status === 'ATIVO' && (
            <div className="mt-5 flex flex-wrap gap-3">
              <Button type="button" className="disabled:opacity-60" disabled={enviando} onClick={() => alterarVoucher('utilizar')}>
                Utilizar voucher
              </Button>
              <Button type="button" className="disabled:opacity-60" disabled={enviando} onClick={() => alterarVoucher('cancelar')}>
                Cancelar voucher
              </Button>
            </div>
          )}
          {enviando && <p className="mt-4" role="status">Processando alteração…</p>}
          {retorno && <p className="mt-4 font-bold" role="status">{retorno}</p>}
        </div>
      )}
    </section>
  )
}

export default function VoucherDetalhe() {
  const { codigo = '' } = useParams()
  return <Detalhe key={codigo} codigo={codigo} />
}

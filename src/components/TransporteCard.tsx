import { Link } from 'react-router'
import type { Transporte } from '../types/mobilidade'

export default function TransporteCard({ item }: { item: Transporte }) {
  return (
    <article className="flex flex-col rounded-3xl bg-white p-6 shadow-md">
      <p className="text-sm font-bold uppercase text-brand-blue-dark">{item.modalidade}</p>
      <h3 className="mt-2 font-title text-xl font-semibold">{item.nome}</h3>
      <p className="mt-2">
        Tarifa {item.tarifaBase.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </p>
      <p className="mt-1 text-sm text-slate-600">
        {item.integrado && item.aceitaVoucher ? 'Aceita voucher' : 'Voucher indisponível'}
      </p>
      <Link
        className="mt-5 self-start font-bold text-brand-blue-dark underline"
        to={'/recompensas/' + encodeURIComponent(item.id)}
      >
        Ver detalhes →
      </Link>
    </article>
  )
}

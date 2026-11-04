import { Link } from 'react-router'

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-brand-bg px-6 text-center">
      <section>
        <p className="font-bold text-orange-500">Erro 404</p>
        <h1 className="mt-4 font-title text-4xl font-black text-slate-800">Página não encontrada</h1>
        <Link
          className="mt-8 inline-flex rounded-full bg-brand-blue px-6 py-3 font-bold text-white transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          to="/"
        >
          Voltar para Home
        </Link>
      </section>
    </main>
  )
}

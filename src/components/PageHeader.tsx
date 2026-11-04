import type { ReactNode } from 'react'

type PageHeaderProps = {
  etiqueta: string
  titulo: string
  descricao: string
  imagem: string
  imagemAlt: string
  children?: ReactNode
}

export default function PageHeader({ etiqueta, titulo, descricao, imagem, imagemAlt, children }: PageHeaderProps) {
  return (
    <header className="pagina-header flex flex-col items-center gap-10 bg-linear-to-b from-brand-blue to-brand-green px-6 py-16 sm:px-10 lg:min-h-[calc(100vh-88px)] lg:flex-row lg:items-center lg:gap-16 lg:px-16 lg:py-24 xl:px-24">
      <div className="max-w-2xl text-white lg:max-w-none lg:flex-1">
        <span className="mb-4 inline-block rounded-lg border border-white/40 bg-white/15 px-3 py-2 text-sm">
          {etiqueta}
        </span>
        <h1 className="font-title text-3xl font-bold sm:text-4xl lg:max-w-xl lg:text-5xl">{titulo}</h1>
        <p className="mt-6 max-w-lg text-base opacity-90 sm:text-lg">{descricao}</p>
        {children}
      </div>

      <div className="flex w-full items-center justify-center lg:flex-1">
        <div className="flex w-full max-w-md items-center justify-center rounded-2xl bg-white p-8 shadow-2xl shadow-black/20 sm:p-12 lg:max-w-none">
          <img className="w-full max-w-xs" src={imagem} alt={imagemAlt} />
        </div>
      </div>
    </header>
  )
}

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import PageHeader from '../../components/PageHeader'
import Button from '../../components/Button'
import type { ContatoFormData } from '../../types/contato'

export default function Contato() {
  const [enviado, setEnviado] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContatoFormData>()

  useEffect(() => {
    document.title = 'UrbanLink - Contato'
  }, [])

  async function aoEnviar() {
    await new Promise((resolve) => setTimeout(resolve, 600))
    setEnviado(true)
    reset()
  }

  return (
    <>
      <PageHeader
        etiqueta="Contate-nos"
        titulo="Fale com o time UrbanLink"
        descricao="Tem dúvidas sobre pontos, vouchers de transporte, parcerias ou integração com sistemas de mobilidade urbana? Envie sua mensagem e ajude a construir uma solução mais acessível, segura e sustentável."
        imagem="/assets/banners/contato-page-banner.png"
        imagemAlt="Ilustração de atendimento digital da UrbanLink com mensagens, celular e mobilidade urbana"
      />

      <main className="contato-section flex flex-col lg:min-h-screen justify-center bg-brand-bg px-6 py-16 sm:px-10 lg:py-24">
        <section className="mx-auto w-full max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="font-title text-2xl font-bold text-slate-800 sm:text-3xl">Fale Conosco</h2>
            <p className="mt-3 text-slate-600">
              Tem dúvidas sobre o funcionamento do app ou quer sugerir parcerias sustentáveis para a UrbanLink? Deixe
              sua mensagem abaixo!
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md shadow-black/10 sm:p-8">
            <form onSubmit={handleSubmit(aoEnviar)} noValidate className="flex flex-col gap-5">
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="nome">
                  Nome Completo <span className="text-red-500">*</span>
                </label>
                <input
                  id="nome"
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus-visible:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue/30"
                  aria-invalid={Boolean(errors.nome)}
                  {...register('nome', {
                    required: 'Informe seu nome completo.',
                    validate: (valor) => valor.trim().split(/\s+/).length > 1 || 'Informe nome e sobrenome.',
                  })}
                />
                {errors.nome && <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>}
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="email">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus-visible:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue/30"
                  aria-invalid={Boolean(errors.email)}
                  {...register('email', {
                    required: 'Informe um e-mail para contato.',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Informe um e-mail válido.' },
                  })}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="assunto">
                  Assunto <span className="text-red-500">*</span>
                </label>
                <select
                  id="assunto"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus-visible:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue/30"
                  aria-invalid={Boolean(errors.assunto)}
                  {...register('assunto', { required: 'Selecione um assunto.' })}
                >
                  <option value="" disabled>
                    Selecione uma opção....
                  </option>
                  <option value="duvida">Dúvidas sobre Pontuações</option>
                  <option value="suporte">Suporte com Vouchers</option>
                  <option value="parceria">Parcerias de Mobilidade</option>
                  <option value="sugestao">Sugestões / Outros</option>
                </select>
                {errors.assunto && <p className="mt-1 text-sm text-red-600">{errors.assunto.message}</p>}
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="mensagem">
                  Sua Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="mensagem"
                  rows={5}
                  placeholder="Escreva detalhadamente o que precisa..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus-visible:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue/30"
                  aria-invalid={Boolean(errors.mensagem)}
                  {...register('mensagem', {
                    required: 'Escreva uma mensagem.',
                    minLength: { value: 20, message: 'Descreva sua mensagem com pelo menos 20 caracteres.' },
                  })}
                />
                {errors.mensagem && <p className="mt-1 text-sm text-red-600">{errors.mensagem.message}</p>}
              </div>

              <Button type="submit" variante="azul" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>

              {enviado && (
                <div
                  role="status"
                  className="rounded-xl border border-brand-green/40 bg-brand-green/10 px-4 py-3 text-sm text-slate-700"
                >
                  Mensagem enviada com sucesso! Nosso time entrará em contato em breve.
                </div>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

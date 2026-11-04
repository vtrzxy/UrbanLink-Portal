import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router'

const linksNav = [
  { to: '/', label: 'Home' },
  { to: '/integrantes', label: 'Quem Somos' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/recompensas', label: 'Recompensas' },
  { to: '/vouchers', label: 'Meus vouchers' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const botaoMenu = useRef<HTMLButtonElement>(null)

  return (
    <header className="bg-brand-blue">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 px-4 py-3 sm:px-6 lg:flex-nowrap lg:px-10"
        onKeyDown={(event) => {
          if (event.key === 'Escape' && menuAberto) {
            setMenuAberto(false)
            botaoMenu.current?.focus()
          }
        }}
      >
        <Link className="flex shrink-0 items-center" to="/" onClick={() => setMenuAberto(false)}>
          <img
            className="h-10 w-auto sm:h-12"
            src="/assets/logosUrbanLink/logo_UrbanLink_branca.svg"
            alt="logo da UrbanLink"
          />
        </Link>

        <button
          ref={botaoMenu}
          className="flex size-11 items-center justify-center rounded-lg text-2xl text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
          type="button"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-controls="menu-principal"
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          {menuAberto ? '✕' : '☰'}
        </button>

        <ul
          id="menu-principal"
          className={`${
            menuAberto ? 'flex' : 'hidden'
          } w-full flex-col gap-1 pt-3 font-medium lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-2 lg:pt-0`}
        >
          {linksNav.map((link) => (
            <li key={link.to}>
              <NavLink
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:whitespace-nowrap ${
                    isActive ? 'bg-white/10 underline decoration-2 underline-offset-4' : ''
                  }`
                }
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuAberto(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

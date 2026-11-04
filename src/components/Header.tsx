import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import Button from './Button'

const linksNav = [
  { to: '/', label: 'Home' },
  { to: '/integrantes', label: 'Quem Somos' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/recompensas', label: 'Recompensas' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="relative bg-brand-blue">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link className="flex items-center" to="/" onClick={() => setMenuAberto(false)}>
          <img
            className="h-10 sm:h-12"
            src="/assets/logosUrbanLink/logo_UrbanLink_branca.svg"
            alt="logo da UrbanLink"
          />
        </Link>

        <button
          className="text-2xl text-white sm:hidden"
          type="button"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          {menuAberto ? '✕' : '☰'}
        </button>

        <ul
          className={`${
            menuAberto ? 'flex' : 'hidden'
          } absolute top-full left-0 z-10 w-full flex-col items-center gap-4 bg-brand-blue py-6 font-medium sm:absolute sm:top-1/2 sm:left-1/2 sm:flex sm:w-auto sm:-translate-x-1/2 sm:-translate-y-1/2 sm:flex-row sm:gap-6 sm:bg-transparent sm:py-0`}
        >
          {linksNav.map((link) => (
            <li key={link.to}>
              <NavLink
                className={({ isActive }) =>
                  `text-white opacity-70 outline-none transition hover:opacity-100 focus-visible:opacity-100 focus-visible:underline ${
                    isActive ? 'opacity-100 underline decoration-2 underline-offset-4' : ''
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

        <div className="hidden gap-2 sm:flex">
          <Button variante="branco">Cadastre-se</Button>
          <Button variante="vazado">Entre</Button>
        </div>
      </nav>
    </header>
  )
}

import { Link, NavLink } from 'react-router'

const linksNav = [
  { to: '/', label: 'Home' },
  { to: '/integrantes', label: 'Quem Somos' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/recompensas', label: 'Recompensas' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contato', label: 'Contato' },
]

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-12 text-white sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h4 className="mb-3 font-title font-bold">Navegação</h4>
          <ul className="flex flex-wrap gap-4 text-sm sm:gap-6">
            {linksNav.map((link) => (
              <li key={link.to}>
                <NavLink
                  className={({ isActive }) =>
                    `opacity-70 outline-none transition hover:opacity-100 focus-visible:opacity-100 focus-visible:underline ${
                      isActive ? 'opacity-100 underline decoration-2 underline-offset-4' : ''
                    }`
                  }
                  to={link.to}
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <Link to="/">
            <img
              className="max-h-16"
              src="/assets/logosUrbanLink/logo_UrbanLink_branca.svg"
              alt="Logo da UrbanLink"
            />
          </Link>
          <p>Trazendo sustentabilidade para a sua jornada diária.</p>
        </div>
      </div>

      <hr className="my-8 border-white/20" />

      <div className="text-center text-sm">
        <p>&copy; 2026 UrbanLink</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

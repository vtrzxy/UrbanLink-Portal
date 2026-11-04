import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-bg font-sans text-slate-800 antialiased">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-20 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App

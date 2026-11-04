import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home/index.tsx'
import Sobre from './pages/Sobre/index.tsx'
import Integrantes from './pages/Integrantes/index.tsx'
import Faq from './pages/Faq/index.tsx'
import Contato from './pages/Contato/index.tsx'
import Recompensas from './pages/Recompensas/index.tsx'
import RecompensaDetalhe from './pages/RecompensaDetalhe/index.tsx'
import NotFound from './pages/NotFound/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/integrantes', element: <Integrantes /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/recompensas', element: <Recompensas /> },
      { path: '/recompensas/:id', element: <RecompensaDetalhe /> },
      { path: '/faq', element: <Faq /> },
      { path: '/contato', element: <Contato /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

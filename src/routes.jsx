import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import FAQ from './pages/FAQ'
import Book from './pages/Book'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import SurfaceRouter from './pages/surfaces/SurfaceRouter'
import { surfaces } from './data/surfaces'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      {
        path: 'surfaces/:slug',
        element: <SurfaceRouter />,
        getStaticPaths: () => surfaces.map(s => `/surfaces/${s.slug}`),
      },
      { path: 'gallery', element: <Gallery /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'book', element: <Book /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]

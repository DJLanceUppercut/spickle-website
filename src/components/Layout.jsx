import { Outlet, ScrollRestoration } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <HelmetProvider>
      <ScrollRestoration />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </HelmetProvider>
  )
}

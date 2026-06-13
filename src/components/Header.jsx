import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { surfaces } from '../data/surfaces'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [surfacesOpen, setSurfacesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setSurfacesOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSurfacesOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} aria-label="Spickle — home">
          <span className={styles.logoText}>Spickle</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <NavLink to="/services" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            Services
          </NavLink>

          <div className={styles.dropdown} ref={dropdownRef}>
            <button
              className={`${styles.navLink} ${styles.dropdownTrigger}`}
              onClick={() => setSurfacesOpen(o => !o)}
              aria-expanded={surfacesOpen}
              aria-haspopup="true"
            >
              Surfaces
              <svg className={`${styles.chevron} ${surfacesOpen ? styles.chevronOpen : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {surfacesOpen && (
              <div className={styles.dropdownMenu}>
                {surfaces.map(s => (
                  <Link key={s.slug} to={`/surfaces/${s.slug}`} className={styles.dropdownItem}>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/gallery" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            Gallery
          </NavLink>
          <NavLink to="/faq" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            FAQ
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            Contact
          </NavLink>
        </nav>

        <Link to="/book" className={`btn-primary ${styles.bookBtn}`}>
          Book Now
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu} aria-modal="true">
          <nav className={styles.mobileNav}>
            <NavLink to="/services" className={styles.mobileLink}>Services</NavLink>
            <div className={styles.mobileSurfaces}>
              <button className={styles.mobileSurfacesToggle} onClick={() => setSurfacesOpen(o => !o)}>
                Surfaces
                <svg className={`${styles.chevron} ${surfacesOpen ? styles.chevronOpen : ''}`} width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {surfacesOpen && (
                <div className={styles.mobileSurfaceList}>
                  {surfaces.map(s => (
                    <Link key={s.slug} to={`/surfaces/${s.slug}`} className={styles.mobileSurfaceLink}>
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/gallery" className={styles.mobileLink}>Gallery</NavLink>
            <NavLink to="/faq" className={styles.mobileLink}>FAQ</NavLink>
            <NavLink to="/contact" className={styles.mobileLink}>Contact</NavLink>
            <Link to="/book" className={`btn-primary ${styles.mobileBookBtn}`}>Book Now</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

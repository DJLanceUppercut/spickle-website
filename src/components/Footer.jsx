import { Link } from 'react-router-dom'
import { surfaces } from '../data/surfaces'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>Spickle</span>
          <p className={styles.tagline}>Melbourne's natural stone cleaning &amp; sealing specialists.</p>
          <div className={styles.social}>
            <a href="https://facebook.com/profile.php?id=100088685563706" target="_blank" rel="noopener noreferrer" aria-label="Spickle on Facebook" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com/spickle_sealing" target="_blank" rel="noopener noreferrer" aria-label="Spickle on Instagram" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHeading}>Services</h4>
          <Link to="/services" className={styles.colLink}>Stone Cleaning</Link>
          <Link to="/services" className={styles.colLink}>Stone Sealing</Link>
          <Link to="/services" className={styles.colLink}>Stain Removal</Link>
          <Link to="/book" className={styles.colLink}>Book a Job</Link>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHeading}>Surfaces</h4>
          {surfaces.slice(0, 4).map(s => (
            <Link key={s.slug} to={`/surfaces/${s.slug}`} className={styles.colLink}>{s.name}</Link>
          ))}
          {surfaces.slice(4).map(s => (
            <Link key={s.slug} to={`/surfaces/${s.slug}`} className={styles.colLink}>{s.name}</Link>
          ))}
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHeading}>Company</h4>
          <Link to="/gallery" className={styles.colLink}>Gallery</Link>
          <Link to="/faq" className={styles.colLink}>FAQ</Link>
          <Link to="/contact" className={styles.colLink}>Contact</Link>
          <div className={styles.contact}>
            <a href="tel:1300220045" className={styles.contactLink}>1300 22 00 45</a>
            <a href="mailto:info@spickle.com.au" className={styles.contactLink}>info@spickle.com.au</a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© Spickle Pty Ltd {new Date().getFullYear()}. All rights reserved.</p>
        <p className={styles.guardIt}>Products by <strong>GuardIT Solutions</strong> — Australian-made, eco-friendly stone care.</p>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import styles from './CTABanner.module.css'

export default function CTABanner({ heading = 'Ready to restore your stone?', label = 'Book Now', to = '/book' }) {
  return (
    <section className={styles.banner}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>{heading}</h2>
        <Link to={to} className={styles.ctaBtn}>
          {label}
        </Link>
      </div>
    </section>
  )
}

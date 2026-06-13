import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

export default function Hero({ title, subtitle, image, ctaPrimary, ctaSecondary, phone, tall = true }) {
  return (
    <section
      className={`${styles.hero} ${tall ? styles.tall : styles.short}`}
      style={image ? { '--hero-image': `url(${image})` } : {}}
    >
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {phone && (
          <a href={`tel:${phone.replace(/\s/g, '')}`} className={styles.phone}>
            {phone}
          </a>
        )}
        {(ctaPrimary || ctaSecondary) && (
          <div className={styles.ctas}>
            {ctaPrimary && (
              <Link to={ctaPrimary.to} className="btn-primary">
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link to={ctaSecondary.to} className="btn-ghost">
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

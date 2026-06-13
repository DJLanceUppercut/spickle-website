import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | Spickle'
  }, [])

  return (
    <section className={styles.notFound}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.code}>404</span>
        <h1 className={styles.heading}>Page not found</h1>
        <p className={styles.body}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className={styles.actions}>
          <Link to="/" className="btn-primary">Back to Home</Link>
          <Link to="/contact" className="btn-ghost">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}

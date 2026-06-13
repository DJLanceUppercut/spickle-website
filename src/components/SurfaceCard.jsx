import { Link } from 'react-router-dom'
import styles from './SurfaceCard.module.css'

export default function SurfaceCard({ slug, name, image }) {
  return (
    <Link to={`/surfaces/${slug}`} className={styles.card}>
      <div
        className={styles.image}
        style={image ? { backgroundImage: `url(${image})` } : {}}
      />
      <div className={styles.label}>
        <span>{name}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  )
}

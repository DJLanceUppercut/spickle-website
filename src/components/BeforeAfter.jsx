import styles from './BeforeAfter.module.css'

export default function BeforeAfter({ before, after, caption }) {
  return (
    <div className={styles.pair}>
      <div className={styles.images}>
        <div className={styles.imageWrap}>
          <div
            className={styles.image}
            style={before ? { backgroundImage: `url(${before})` } : {}}
          />
          <span className={styles.badge}>Before</span>
        </div>
        <div className={styles.imageWrap}>
          <div
            className={styles.image}
            style={after ? { backgroundImage: `url(${after})` } : {}}
          />
          <span className={`${styles.badge} ${styles.badgeAfter}`}>After</span>
        </div>
      </div>
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  )
}

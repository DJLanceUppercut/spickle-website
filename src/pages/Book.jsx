import { Helmet } from 'react-helmet-async'
import styles from './Book.module.css'

export default function Book() {
  const title = 'Book Now | Spickle | Melbourne Stone Cleaning & Sealing'
  const description = 'Book a stone cleaning or sealing job with Spickle. Serving all Melbourne suburbs. Quick response, professional results.'

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://spickle.com.au/book" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://spickle.com.au/book" />
      </Helmet>

      <section className={styles.book}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Book Online</span>
            <h1 className={styles.heading}>Book a Job or Request a Quote</h1>
            <p className={styles.intro}>
              Use the booking form below to tell us about your job. Include the surface type, approximate area and location.
              We'll confirm within one business day, often the same day.
            </p>
            <p className={styles.note}>
              Photos of your surface help us give you a more accurate quote. You can attach them in the form below.
            </p>

            <div className={styles.bookingWidget}>
              {/* ServiceM8 booking button embed — paste the HTML snippet from ServiceM8 dashboard here */}
              {/* Settings → Features & Integrations → Online Booking → Copy button code */}
              <div className={styles.placeholder}>
                <p className={styles.placeholderText}>ServiceM8 booking widget goes here.</p>
                <p className={styles.placeholderSub}>
                  To add: go to ServiceM8 dashboard → Settings → Features &amp; Integrations → Online Booking,
                  copy the HTML button snippet, and replace this block using{' '}
                  <code>dangerouslySetInnerHTML</code>.
                </p>
              </div>
            </div>

            <div className={styles.alternatives}>
              <p className={styles.altHeading}>Prefer to talk?</p>
              <div className={styles.altLinks}>
                <a href="tel:1300220045" className={styles.altLink}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.51 5.51l.96-.96a2 2 0 0 1 2.11-.45c.91.35 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  1300 22 00 45
                </a>
                <a href="mailto:info@spickle.com.au" className={styles.altLink}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  info@spickle.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import styles from './Contact.module.css'

export default function Contact() {
  const title = 'Contact | Spickle — Melbourne Stone Cleaning & Sealing'
  const description = 'Contact Spickle for stone cleaning and sealing across Melbourne. Call 1300 22 00 45 or email info@spickle.com.au.'

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://spickle.com.au/contact" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://spickle.com.au/contact" />
      </Helmet>

      <Hero
        title="Get in Touch"
        subtitle="For job bookings, use our online form. For general questions, we're here."
        image="/images/contact-hero.jpg"
        tall={false}
        ctaPrimary={{ to: '/book', label: 'Book a Job' }}
      />

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.details}>
              <h2 className={styles.heading}>Contact Details</h2>

              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Phone</span>
                <a href="tel:1300220045" className={styles.detailValue}>1300 22 00 45</a>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Email</span>
                <a href="mailto:info@spickle.com.au" className={styles.detailValue}>info@spickle.com.au</a>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Service Area</span>
                <span className={styles.detailValue}>All Melbourne metropolitan suburbs</span>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Hours</span>
                <span className={styles.detailValue}>Mon – Sat, 7am – 5pm</span>
              </div>

              <div className={styles.social}>
                <span className={styles.detailLabel}>Follow Us</span>
                <div className={styles.socialLinks}>
                  <a href="https://facebook.com/profile.php?id=100088685563706" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    Facebook
                  </a>
                  <a href="https://instagram.com/spickle_sealing" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    Instagram
                  </a>
                </div>
              </div>

              <div className={styles.bookNote}>
                <p>For job bookings and quotes, please use our{' '}
                  <Link to="/book" className={styles.bookLink}>online booking form</Link>.
                  This gets your request into our system straight away and lets you attach photos.
                </p>
              </div>
            </div>

            <div className={styles.mapWrap}>
              <iframe
                title="Spickle service area — Melbourne"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201374.10073053842!2d144.7607169!3d-37.8699978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                className={styles.map}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

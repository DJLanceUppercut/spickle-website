import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import FAQAccordion from '../components/FAQAccordion'
import CTABanner from '../components/CTABanner'
import { faqCategories } from '../data/faq'
import styles from './FAQ.module.css'

export default function FAQ() {
  const title = 'FAQ | Spickle — Melbourne Stone Cleaning & Sealing'
  const description = 'Frequently asked questions about stone cleaning, sealing and stain removal. How often to seal, what products we use, pricing and booking info.'

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://spickle.com.au/faq" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://spickle.com.au/faq" />
      </Helmet>

      <Hero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about stone cleaning and sealing."
        image="/images/faq-hero.jpg"
        tall={false}
      />

      <section className={styles.faqSection}>
        <div className="container">
          {faqCategories.map(cat => (
            <div key={cat.category} className={styles.category}>
              <h2 className={styles.categoryHeading}>{cat.category}</h2>
              <FAQAccordion items={cat.questions} />
            </div>
          ))}

          <div className={styles.contact}>
            <p className={styles.contactText}>
              Can't find your answer here?{' '}
              <a href="tel:1300220045" className={styles.contactLink}>Call us on 1300 22 00 45</a>
              {' '}or{' '}
              <Link to="/book" className={styles.contactLink}>send us a booking enquiry</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero'
import BeforeAfter from './BeforeAfter'
import FAQAccordion from './FAQAccordion'
import CTABanner from './CTABanner'
import styles from './SurfacePage.module.css'

export default function SurfacePage({ surface }) {
  useEffect(() => {
    document.title = surface.seoTitle
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', surface.seoDescription)
    window.scrollTo(0, 0)
  }, [surface])

  return (
    <>
      <Hero
        title={surface.title}
        subtitle={surface.descriptor}
        image={surface.heroImage}
        tall={false}
        ctaPrimary={{ to: '/book', label: surface.ctaText }}
      />

      <section className={styles.about}>
        <div className={`container ${styles.aboutInner}`}>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionHeading}>About {surface.name}</h2>
            {surface.about.map((para, i) => (
              <p key={i} className={styles.para}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Our Process for {surface.name}</h2>
          <div className={styles.steps}>
            {surface.process.map(step => (
              <div key={step.step} className={styles.step}>
                <span className={styles.stepNum}>{step.step}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Before &amp; After</h2>
          <div className={styles.pairGrid}>
            {surface.beforeAfter.map((pair, i) => (
              <BeforeAfter key={i} before={pair.before} after={pair.after} caption={pair.caption} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.products}>
        <div className={`container ${styles.productsInner}`}>
          <div className={styles.productsBadge}>GuardIT Solutions</div>
          <h2 className={styles.productsHeading}>Products We Use</h2>
          <p className={styles.productsText}>{surface.products}</p>
        </div>
      </section>

      <section className={styles.faq}>
        <div className="container">
          <h2 className={styles.sectionHeading}>{surface.name} FAQs</h2>
          <FAQAccordion items={surface.faq} />
          <p className={styles.faqMore}>
            More questions? Visit our <Link to="/faq" className={styles.faqLink}>full FAQ page</Link> or{' '}
            <a href="tel:1300220045" className={styles.faqLink}>call us on 1300 22 00 45</a>.
          </p>
        </div>
      </section>

      <CTABanner heading={`Ready to restore your ${surface.name.toLowerCase()}?`} label={surface.ctaText} />
    </>
  )
}

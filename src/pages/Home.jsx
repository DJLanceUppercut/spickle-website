import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import SurfaceCard from '../components/SurfaceCard'
import BeforeAfter from '../components/BeforeAfter'
import CTABanner from '../components/CTABanner'
import { surfaces } from '../data/surfaces'
import styles from './Home.module.css'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Spickle',
  description: 'Professional stone cleaning and sealing across Melbourne. Specialists in bluestone, limestone, granite, travertine, slate, sandstone and aggregate.',
  telephone: '+611300220045',
  email: 'info@spickle.com.au',
  url: 'https://spickle.com.au',
  logo: 'https://spickle.com.au/images/logo.png',
  image: 'https://spickle.com.au/images/hero-bg.png',
  priceRange: '$$',
  areaServed: 'Melbourne, Victoria, Australia',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -37.8136,
    longitude: 144.9631,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Stone Cleaning & Sealing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stone Cleaning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stone Sealing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stain Removal' } },
    ],
  },
  sameAs: [
    'https://facebook.com/profile.php?id=100088685563706',
    'https://instagram.com/spickle_sealing',
  ],
}

const trustItems = [
  '20+ Years Experience',
  'Melbourne-Wide Service',
  'Eco-Friendly Products',
  'Fully Insured',
]

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 28c4-8 8-12 12-12s8 4 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 20h16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    ),
    title: 'Cleaning',
    desc: 'Hot-water pressure cleaning combined with professional-grade stone cleaners removes embedded dirt, algae, mould and biological growth from any natural stone surface.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="20" width="24" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 20V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 14h8M12 17h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5"/>
      </svg>
    ),
    title: 'Sealing',
    desc: 'GuardIT penetrating sealers bond inside the stone\'s pore structure, providing invisible protection against staining, moisture and biological regrowth for years.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L6 14l10 14 10-14L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M6 14h20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    ),
    title: 'Stain Removal',
    desc: 'Targeted treatments for oil, rust, efflorescence, tannins and organic staining — matched to the stone type and stain chemistry for effective, safe removal.',
  },
]

const whyItems = [
  {
    heading: 'Australian-Made GuardIT Products',
    body: 'We exclusively use GuardIT Solutions — a professional range of stone cleaners and sealers made in Australia. Eco-friendly, pet-safe and formulated specifically for the stone types common in Melbourne homes.',
  },
  {
    heading: 'Tailored to Every Stone Type',
    body: 'What works on granite will damage limestone. Our team understands the chemistry and porosity of every surface we treat, and adjusts pressure, pH and product selection accordingly.',
  },
  {
    heading: 'Professional Results, Not DIY Shortcuts',
    body: 'Hire equipment and off-the-shelf sealers can\'t match professional-grade cleaning and penetrating sealers applied correctly. We guarantee results that last.',
  },
]

export default function Home() {
  const title = 'Spickle — Melbourne Stone Cleaning & Sealing Specialists'
  const description = 'Melbourne\'s natural stone cleaning and sealing specialists. Bluestone, limestone, granite, travertine and more. Call 1300 22 00 45.'

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://spickle.com.au/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://spickle.com.au/" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Hero
        title="Melbourne's Stone Cleaning & Sealing Specialists"
        subtitle="Natural stone, concrete and aggregate — cleaned, sealed and protected."
        image="/images/hero-bg.png"
        phone="1300 22 00 45"
        ctaPrimary={{ to: '/book', label: 'Book Now' }}
        ctaSecondary={{ to: '/services', label: 'See Our Services' }}
        tall
      />

      <div className={styles.trustBar}>
        <div className="container">
          <ul className={styles.trustList}>
            {trustItems.map(item => (
              <li key={item} className={styles.trustItem}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
                  <path d="M4 7l2.5 2.5L10 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className={styles.services}>
        <div className="container">
          <h2 className={styles.sectionLabel}>What We Do</h2>
          <div className={styles.serviceGrid}>
            {services.map(s => (
              <div key={s.title} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.surfacesSection}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Every Surface Is Different</h2>
          <p className={styles.sectionIntro}>
            We specialise in all natural stone and aggregate surfaces used across Melbourne homes.
          </p>
          <div className={styles.surfaceGrid}>
            {surfaces.map(s => (
              <SurfaceCard key={s.slug} slug={s.slug} name={s.name} image={s.cardImage} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.why}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Why Spickle</h2>
          <div className={styles.whyGrid}>
            {whyItems.map(item => (
              <div key={item.heading} className={styles.whyItem}>
                <div className={styles.whyAccent} />
                <h3 className={styles.whyHeading}>{item.heading}</h3>
                <p className={styles.whyBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.beforeAfterSection}>
        <div className="container">
          <h2 className={styles.sectionHeading}>The Spickle Difference</h2>
          <div className={styles.beforeAfterGrid}>
            <BeforeAfter
              before="/gallery/bluestone-before-1.jpg"
              after="/gallery/bluestone-after-1.jpg"
              caption="Bluestone paving — stain removal + seal, Brighton"
            />
            <BeforeAfter
              before="/gallery/aggregate-before-1.jpg"
              after="/gallery/aggregate-after-1.jpg"
              caption="Exposed aggregate driveway — deep clean + wet look seal, Doncaster"
            />
          </div>
          <div className={styles.galleryLink}>
            <Link to="/gallery" className="btn-ghost">View Full Gallery</Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import SurfaceCard from '../components/SurfaceCard'
import CTABanner from '../components/CTABanner'
import { surfaces } from '../data/surfaces'
import styles from './Services.module.css'

const serviceDetails = [
  {
    title: 'Stone Cleaning',
    intro: 'Professional cleaning is the foundation of any stone maintenance program. We combine the right pressure, the right chemistry and the right technique for every surface.',
    details: [
      { label: 'Method', text: 'Hot-water pressure cleaning with professional rotary and surface cleaners, combined with stone-specific alkaline or neutral cleaners applied at correct dwell times.' },
      { label: 'What it achieves', text: 'Removes embedded dirt, algae, mould, lichen, tannin staining and efflorescence — the buildup that a standard hose and broom simply can\'t reach.' },
      { label: 'Suited to', text: 'All natural stone surfaces — bluestone, limestone, granite, travertine, slate, sandstone, porphyry — as well as exposed aggregate and concrete.' },
    ],
  },
  {
    title: 'Stone Sealing',
    intro: 'A quality sealer applied to clean stone is the single best investment you can make in your outdoor surfaces. We use GuardIT penetrating sealers that bond inside the stone — not on top of it.',
    details: [
      { label: 'Penetrating sealers', text: 'Soak into the stone\'s pore structure and cure below the surface. Leave the natural appearance completely unchanged. Best for outdoor paving, pool surrounds and driveways.' },
      { label: 'Topical sealers', text: 'Form a protective film on the surface, adding sheen or wet-look enhancement. Best for indoor polished floors or aggregate where colour enhancement is desired.' },
      { label: 'How long it lasts', text: '3–6 years depending on stone type, exposure and traffic. We\'ll give you a specific timeline and remind you when it\'s time to reseal.' },
      { label: 'Why it matters', text: 'Unsealed stone stains deeply and quickly. A sealed surface repels oils and liquids, making cleaning trivial and protecting your investment for years.' },
    ],
  },
  {
    title: 'Stain Removal',
    intro: 'Stubborn stains require targeted treatment — not harder scrubbing. We identify the stain chemistry and apply the appropriate GuardIT product to break it down safely.',
    details: [
      { label: 'Efflorescence', text: 'The white powdery mineral deposits caused by water movement through stone and substrate. Treated with a controlled acid wash on appropriate stone types, or mechanical removal on acid-sensitive surfaces.' },
      { label: 'Mould & algae', text: 'Biological growth treated with a biodegradable biocide that kills at the root level — preventing rapid regrowth rather than just masking the surface.' },
      { label: 'Tannins & organic', text: 'Leaf stains, timber runoff and organic residues treated with targeted alkaline cleaners and extraction.' },
      { label: 'Oil & grease', text: 'Hydrocarbon stains broken down with a professional degreaser and hot-water extraction. Old set-in stains may require a poultice treatment.' },
    ],
  },
]

export default function Services() {
  const title = 'Services | Spickle — Melbourne Stone Cleaning & Sealing'
  const description = 'Stone cleaning, sealing and stain removal across Melbourne. Specialist services for all natural stone and aggregate surfaces. Call 1300 22 00 45.'

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://spickle.com.au/services" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://spickle.com.au/services" />
      </Helmet>

      <Hero
        title="What We Do"
        subtitle="Professional stone cleaning, sealing and stain removal — tailored to every surface type."
        image="/images/services-hero.jpg"
        tall={false}
        ctaPrimary={{ to: '/book', label: 'Book a Service' }}
      />

      <section className={styles.servicesSection}>
        <div className="container">
          {serviceDetails.map((service, i) => (
            <div key={service.title} className={`${styles.serviceBlock} ${i > 0 ? styles.divided : ''}`}>
              <div className={styles.serviceHeader}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceIntro}>{service.intro}</p>
              </div>
              <div className={styles.detailGrid}>
                {service.details.map(d => (
                  <div key={d.label} className={styles.detailItem}>
                    <span className={styles.detailLabel}>{d.label}</span>
                    <p className={styles.detailText}>{d.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.surfacesSection}>
        <div className="container">
          <h2 className={styles.surfacesHeading}>Every Surface We Service</h2>
          <p className={styles.surfacesIntro}>
            Each stone type has different porosity, pH sensitivity and sealing requirements. Select your surface to learn more.
          </p>
          <div className={styles.surfaceGrid}>
            {surfaces.map(s => (
              <SurfaceCard key={s.slug} slug={s.slug} name={s.name} image={s.cardImage} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

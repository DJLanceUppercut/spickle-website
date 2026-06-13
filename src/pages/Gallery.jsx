import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import BeforeAfter from '../components/BeforeAfter'
import CTABanner from '../components/CTABanner'
import styles from './Gallery.module.css'

const allImages = [
  { id: 1, surface: 'bluestone', before: '/gallery/bluestone-before-1.jpg', after: '/gallery/bluestone-after-1.jpg', caption: 'Bluestone paving — stain removal + seal, Brighton' },
  { id: 2, surface: 'bluestone', before: '/gallery/bluestone-before-2.jpg', after: '/gallery/bluestone-after-2.jpg', caption: 'Bluestone pool surrounds — full clean and seal, Toorak' },
  { id: 3, surface: 'limestone', before: '/gallery/limestone-before-1.jpg', after: '/gallery/limestone-after-1.jpg', caption: 'Limestone pool coping — clean and seal, Hawthorn' },
  { id: 4, surface: 'limestone', before: '/gallery/limestone-before-2.jpg', after: '/gallery/limestone-after-2.jpg', caption: 'Limestone paving — oil stain removal, South Yarra' },
  { id: 5, surface: 'granite', before: '/gallery/granite-before-1.jpg', after: '/gallery/granite-after-1.jpg', caption: 'Granite driveway — deep clean and seal, Kew' },
  { id: 6, surface: 'travertine', before: '/gallery/travertine-before-1.jpg', after: '/gallery/travertine-after-1.jpg', caption: 'Travertine pool surrounds — clean, fill and seal, Camberwell' },
  { id: 7, surface: 'slate', before: '/gallery/slate-before-1.jpg', after: '/gallery/slate-after-1.jpg', caption: 'Slate feature wall — lichen removal and sealing, Fitzroy' },
  { id: 8, surface: 'aggregate', before: '/gallery/aggregate-before-1.jpg', after: '/gallery/aggregate-after-1.jpg', caption: 'Exposed aggregate driveway — deep clean + wet look seal, Doncaster' },
  { id: 9, surface: 'aggregate', before: '/gallery/aggregate-before-2.jpg', after: '/gallery/aggregate-after-2.jpg', caption: 'Aggregate pool surrounds — algae removal and seal, Glen Waverley' },
  { id: 10, surface: 'sandstone', before: '/gallery/sandstone-before-1.jpg', after: '/gallery/sandstone-after-1.jpg', caption: 'Sandstone retaining wall — clean and seal, Eltham' },
  { id: 11, surface: 'porphyry', before: '/gallery/porphyry-before-1.jpg', after: '/gallery/porphyry-after-1.jpg', caption: 'Porphyry driveway — moss removal and sealing, Canterbury' },
  { id: 12, surface: 'granite', before: '/gallery/granite-before-2.jpg', after: '/gallery/granite-after-2.jpg', caption: 'Granite pool surrounds — algae removal, Malvern' },
]

const filters = ['All', 'Bluestone', 'Limestone', 'Granite', 'Travertine', 'Slate', 'Sandstone', 'Aggregate', 'Porphyry']

export default function Gallery() {
  const [active, setActive] = useState('All')

  useEffect(() => {
    document.title = 'Gallery | Spickle — Melbourne Stone Cleaning & Sealing'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Before and after gallery — stone cleaning and sealing results across Melbourne. Bluestone, limestone, granite, aggregate and more.')
    window.scrollTo(0, 0)
  }, [])

  const visible = active === 'All'
    ? allImages
    : allImages.filter(img => img.surface === active.toLowerCase())

  return (
    <>
      <Hero
        title="Before &amp; After"
        subtitle="Real results from real Melbourne jobs. Placeholder images — real photos coming soon."
        image="/images/gallery-hero.jpg"
        tall={false}
      />

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.filters}>
            {filters.map(f => (
              <button
                key={f}
                className={`${styles.filterBtn} ${active === f ? styles.filterActive : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className={styles.empty}>No jobs yet for this surface type — check back soon.</p>
          ) : (
            <div className={styles.grid}>
              {visible.map(img => (
                <BeforeAfter key={img.id} before={img.before} after={img.after} caption={img.caption} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner heading="Like what you see? Let's restore your stone." />
    </>
  )
}

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const photos = [
  { src: '/images/gallery-1.jpg', caption: 'Cooking together — the best recipes are made with love' },
  { src: '/images/gallery-2.jpg', caption: 'Garden moments — where we planted dreams' },
  { src: '/images/gallery-3.jpg', caption: 'Bedtime stories — your voice was my lullaby' },
  { src: '/images/gallery-4.jpg', caption: 'Walks with you — every step felt safe' },
  { src: '/images/gallery-5.jpg', caption: 'Celebrations — you made every day special' },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function MemoryGallery() {
  const [lightbox, setLightbox] = useState(null)
  const shuffledPhotos = useMemo(() => shuffle(photos), [])

  return (
    <section className="gallery-section" id="gallery">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Precious Memories 📸
      </motion.h2>

      <div className="gallery-grid">
        {shuffledPhotos.map((photo, i) => (
          <motion.div
            key={i}
            className="polaroid"
            initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -3 : 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => setLightbox(photo)}
          >
            <img src={photo.src} alt={photo.caption} loading="lazy" />
            <p className="polaroid-caption">{photo.caption}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox.src}
              alt={lightbox.caption}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

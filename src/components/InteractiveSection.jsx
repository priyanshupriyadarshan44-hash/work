import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiHeart } from 'react-icons/fi'
import { BsEmojiHeartEyes } from 'react-icons/bs'

function createConfetti() {
  const colors = ['#f8a4c8', '#c3aed6', '#ffd5c2', '#e8657a', '#d4a853', '#fdd5e7']
  const pieces = []
  for (let i = 0; i < 60; i++) {
    pieces.push({
      id: i,
      x: Math.random() * window.innerWidth,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5,
      size: 6 + Math.random() * 8,
      rotation: Math.random() * 360,
    })
  }
  return pieces
}

export default function InteractiveSection() {
  const [showHug, setShowHug] = useState(false)
  const [confetti, setConfetti] = useState([])

  const handleHug = () => {
    setShowHug(true)
    setTimeout(() => setShowHug(false), 2000)
  }

  const handleConfetti = useCallback(() => {
    setConfetti(createConfetti())
    setTimeout(() => setConfetti([]), 3000)
  }, [])

  return (
    <section className="interactive-section" id="interactive">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Send Some Love 💗
      </motion.h2>

      <motion.div
        className="interactive-buttons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.button
          className="hug-btn"
          onClick={handleHug}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          id="send-hug-btn"
        >
          <BsEmojiHeartEyes /> Send a Hug
        </motion.button>

        <motion.button
          className="confetti-btn"
          onClick={handleConfetti}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          id="confetti-btn"
        >
          <FiHeart /> Happy Mother's Day!
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showHug && (
          <motion.div
            className="hug-animation"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            🤗💕
          </motion.div>
        )}
      </AnimatePresence>

      {confetti.map((p) => (
        <motion.div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.x,
            top: -20,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: window.innerHeight + 50,
            opacity: 0,
            rotate: p.rotation + 720,
            x: (Math.random() - 0.5) * 200,
          }}
          transition={{ duration: 2 + Math.random(), delay: p.delay, ease: 'easeOut' }}
        />
      ))}
    </section>
  )
}

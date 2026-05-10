import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'

const quotes = [
  "A mother's love is the fuel that enables a normal human being to do the impossible.",
  "All that I am, or ever hope to be, I owe to my angel mother. — Abraham Lincoln",
  "The heart of a mother is a deep abyss at the bottom of which you will always find forgiveness. — Honoré de Balzac",
  "Mothers hold their children's hands for a short while, but their hearts forever.",
  "A mother is she who can take the place of all others but whose place no one else can take. — Cardinal Mermillod",
  "Life doesn't come with a manual, it comes with a mother.",
  "God could not be everywhere, and therefore he made mothers. — Rudyard Kipling",
  "A mother's arms are more comforting than anyone else's. — Princess Diana",
  "To the world you are a mother, but to your family you are the world.",
  "The influence of a mother in the lives of her children is beyond calculation. — James E. Faust",
]

const fullMessage = `Dear Mom,

There are not enough words in any language to express how much you mean to me. From the moment I took my first breath, you've been my anchor, my guide, and my greatest cheerleader.

You taught me how to love without limits, how to be strong even when things fall apart, and how to find joy in the smallest moments. Every sacrifice you made, every sleepless night, every quiet prayer — I carry them all in my heart.

Thank you for being my safe place, my home, my everything.

I love you more than words could ever say.

Forever yours,
Your loving child ❤️`

export default function MessageSection() {
  const [displayedText, setDisplayedText] = useState('')
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const randomQuote = useMemo(() => quotes[Math.floor(Math.random() * quotes.length)], [])

  useEffect(() => {
    if (inView && !started) {
      setStarted(true)
      let i = 0
      const interval = setInterval(() => {
        if (i < fullMessage.length) {
          setDisplayedText(fullMessage.slice(0, i + 1))
          i++
        } else {
          clearInterval(interval)
        }
      }, 25)
      return () => clearInterval(interval)
    }
  }, [inView, started])

  return (
    <section className="message-section" id="message">
      <motion.div
        ref={ref}
        className="message-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>A Letter For You, Mom 💌</h2>
        <div className="typewriter-text" style={{ whiteSpace: 'pre-wrap' }}>
          {displayedText}
          {displayedText.length < fullMessage.length && (
            <span style={{ animation: 'fadeInOut 1s infinite' }}>|</span>
          )}
        </div>
        <motion.div
          className="message-quote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {`"${randomQuote}"`}
        </motion.div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { FiHeart, FiShield, FiStar, FiSun, FiSmile } from 'react-icons/fi'

const reasons = [
  { icon: <FiShield />, title: 'Her Sacrifices', desc: 'She gave up so much so I could have everything. Her selflessness knows no bounds.' },
  { icon: <FiHeart />, title: 'Her Support', desc: 'Always there — through every fall, every tear, every triumph. My biggest fan.' },
  { icon: <FiStar />, title: 'Her Kindness', desc: 'A heart so gentle it could heal the world. She taught me what true kindness means.' },
  { icon: <FiSun />, title: 'Her Strength', desc: 'She carries mountains on her shoulders and never complains. A warrior in disguise.' },
  { icon: <FiSmile />, title: 'Her Smile', desc: 'That one smile that makes everything okay. The most beautiful sight in the world.' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.12, duration: 0.6, type: 'spring' },
  }),
}

export default function ReasonsSection() {
  return (
    <section className="reasons-section" id="reasons">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Why I Love You, Mom 💕
      </motion.h2>

      <div className="reasons-grid">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            className="reason-card"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <span className="reason-icon">{r.icon}</span>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

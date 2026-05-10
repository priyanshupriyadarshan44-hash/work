import { motion } from 'framer-motion'

const events = [
  { year: 'Early Years', title: 'Childhood Memories', desc: 'Those warm hugs before bedtime, your lullabies that chased away all my fears, and the way you held my hand as I took my first steps.' },
  { year: 'School Days', title: 'My First Day of School', desc: 'You walked me to the gate with tears in your eyes. I didn\'t understand then, but now I know — letting go is the hardest part of love.' },
  { year: 'Growing Up', title: 'Important Life Moments', desc: 'Every award ceremony, every parent-teacher meeting, every milestone — you were always there, cheering the loudest.' },
  { year: 'Fun Times', title: 'Funny Memories', desc: 'Remember when we tried baking a cake and the kitchen turned into a disaster zone? We laughed until our stomachs hurt. Best day ever.' },
  { year: 'Together', title: 'Achievements Together', desc: 'Every success I have is half yours. You believed in me when I couldn\'t believe in myself. We did it together, Mom.' },
]

export default function TimelineSection() {
  return (
    <section className="timeline-section" id="timeline">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Journey Together 🌸
      </motion.h2>

      <div className="timeline">
        {events.map((ev, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-card">
              <span className="timeline-year">{ev.year}</span>
              <h3>{ev.title}</h3>
              <p>{ev.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

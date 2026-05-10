import { useEffect, useState } from 'react'

const PARTICLES = ['❤️', '🌸', '💕', '🌺', '🌷', '💗', '🌹', '✨']

export default function FloatingParticles() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now() + Math.random()
      const particle = {
        id,
        emoji: PARTICLES[Math.floor(Math.random() * PARTICLES.length)],
        left: Math.random() * 100,
        duration: 8 + Math.random() * 7,
        size: 14 + Math.random() * 16,
        delay: Math.random() * 2,
      }
      setParticles(prev => [...prev.slice(-20), particle])
    }, 800)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cleanup = setInterval(() => {
      setParticles(prev => prev.filter(p => Date.now() - p.id < 15000))
    }, 5000)
    return () => clearInterval(cleanup)
  }, [])

  return (
    <>
      {particles.map(p => (
        <div
          key={p.id}
          className="floating-particle"
          style={{
            left: `${p.left}%`,
            bottom: '-30px',
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </>
  )
}

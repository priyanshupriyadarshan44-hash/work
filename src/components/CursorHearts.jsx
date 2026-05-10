import { useEffect, useState } from 'react'

export default function CursorHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    let lastTime = 0
    const handleMouseMove = (e) => {
      const now = Date.now()
      if (now - lastTime < 150) return
      lastTime = now

      const heart = {
        id: now + Math.random(),
        x: e.clientX,
        y: e.clientY,
        emoji: Math.random() > 0.5 ? '💗' : '♥',
      }
      setHearts(prev => [...prev.slice(-10), heart])

      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== heart.id))
      }, 1000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {hearts.map(h => (
        <span
          key={h.id}
          className="cursor-heart"
          style={{ left: h.x, top: h.y }}
        >
          {h.emoji}
        </span>
      ))}
    </>
  )
}

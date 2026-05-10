import { useState, useEffect, useRef } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { BsMusicNoteBeamed, BsMusicNoteList } from 'react-icons/bs'

export default function Navbar({ darkMode, setDarkMode, musicPlaying, setMusicPlaying }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Create a gentle ambient audio using oscillator
    const AudioContext = window.AudioContext || window.webkitAudioContext
    const ctx = new AudioContext()
    const gainNode = ctx.createGain()
    gainNode.gain.value = 0
    gainNode.connect(ctx.destination)

    // Simple soft tone
    const osc = ctx.createOscillator()
    osc.type = 'sine'
    osc.frequency.value = 432
    const osc2 = ctx.createOscillator()
    osc2.type = 'sine'
    osc2.frequency.value = 528

    const g1 = ctx.createGain()
    g1.gain.value = 0.03
    const g2 = ctx.createGain()
    g2.gain.value = 0.02

    osc.connect(g1).connect(gainNode)
    osc2.connect(g2).connect(gainNode)

    osc.start()
    osc2.start()

    audioRef.current = { ctx, gainNode }

    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      ctx.close()
    }
  }, [])

  const toggleMusic = () => {
    if (!audioRef.current) return
    const { ctx, gainNode } = audioRef.current
    if (ctx.state === 'suspended') ctx.resume()

    if (musicPlaying) {
      gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5)
    } else {
      gainNode.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.5)
    }
    setMusicPlaying(!musicPlaying)
  }

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#message', label: 'Message' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#reasons', label: 'Why I Love You' },
    { href: '#timeline', label: 'Timeline' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">For Mom ♡</a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-controls">
        <button className="nav-btn" onClick={toggleMusic} title="Toggle Music" id="music-toggle">
          {musicPlaying ? <BsMusicNoteList /> : <BsMusicNoteBeamed />}
        </button>
        <button className="nav-btn" onClick={() => setDarkMode(!darkMode)} title="Toggle Theme" id="theme-toggle">
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
        <button className="nav-btn mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} id="mobile-menu-toggle">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  )
}

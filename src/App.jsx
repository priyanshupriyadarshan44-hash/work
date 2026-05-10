import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MessageSection from './components/MessageSection'
import MemoryGallery from './components/MemoryGallery'
import ReasonsSection from './components/ReasonsSection'
import TimelineSection from './components/TimelineSection'
import InteractiveSection from './components/InteractiveSection'
import FloatingParticles from './components/FloatingParticles'
import CursorHearts from './components/CursorHearts'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <>
          <div className="animated-bg" />
          <FloatingParticles />
          <CursorHearts />
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            musicPlaying={musicPlaying}
            setMusicPlaying={setMusicPlaying}
          />
          <main>
            <HeroSection />
            <MessageSection />
            <MemoryGallery />
            <ReasonsSection />
            <TimelineSection />
            <InteractiveSection />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="text-stone-900 dark:text-stone-100 min-h-screen bg-canvas dark:bg-stone-950 font-sans">
      <Navbar darkMode={darkMode} onToggleDark={() => setDarkMode(d => !d)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-stone-200 dark:border-stone-800 px-8 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-stone-400 dark:text-stone-600 tracking-wider uppercase">
          <span>© 2024 山田太郎</span>
          <span>Portfolio</span>
        </div>
      </footer>
    </div>
  )
}

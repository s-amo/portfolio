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
    <div className="relative text-gray-900 dark:text-gray-100 min-h-screen bg-white dark:bg-gray-950">
      {/* グローバル背景グラデーション（固定・全セクション貫通） */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* ベース */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950" />
        {/* グラデーションオーブ 1: 左上 indigo */}
        <div className="animate-blob absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-indigo-300/35 dark:bg-indigo-600/20 blur-3xl" />
        {/* グラデーションオーブ 2: 右中 purple */}
        <div className="animate-blob animation-delay-2000 absolute top-1/3 -right-48 w-[600px] h-[600px] rounded-full bg-purple-300/30 dark:bg-purple-600/18 blur-3xl" />
        {/* グラデーションオーブ 3: 左下 pink */}
        <div className="animate-blob animation-delay-4000 absolute -bottom-48 left-1/4 w-[650px] h-[650px] rounded-full bg-pink-200/25 dark:bg-pink-700/12 blur-3xl" />
        {/* グラデーションオーブ 4: 右下 cyan */}
        <div className="animate-blob animation-delay-6000 absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-200/20 dark:bg-cyan-700/10 blur-3xl" />
      </div>

      <Navbar darkMode={darkMode} onToggleDark={() => setDarkMode(d => !d)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

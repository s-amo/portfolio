type Props = {
  darkMode: boolean
  onToggleDark: () => void
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, onToggleDark }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="font-bold text-lg">Portfolio</span>
        <ul className="hidden sm:flex items-center gap-6 text-sm">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-indigo-500 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={onToggleDark}
          aria-label={darkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}

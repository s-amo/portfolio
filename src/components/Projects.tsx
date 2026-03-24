import { projects } from '../data/portfolio'

const thumbnailGradients = [
  'from-indigo-500 via-purple-500 to-pink-500',
  'from-emerald-500 via-teal-500 to-cyan-500',
  'from-orange-500 via-red-500 to-pink-500',
  'from-blue-500 via-indigo-500 to-violet-500',
]

const thumbnailPatterns = [
  // ブラウザ風ウィンドウ
  (label: string) => (
    <svg viewBox="0 0 320 180" className="w-full h-full" fill="none">
      <rect x="0" y="0" width="320" height="180" fill="rgba(0,0,0,0.15)" rx="4" />
      <rect x="0" y="0" width="320" height="36" fill="rgba(0,0,0,0.2)" rx="4" />
      <circle cx="20" cy="18" r="6" fill="rgba(255,255,255,0.3)" />
      <circle cx="40" cy="18" r="6" fill="rgba(255,255,255,0.3)" />
      <circle cx="60" cy="18" r="6" fill="rgba(255,255,255,0.3)" />
      <rect x="80" y="10" width="160" height="16" rx="8" fill="rgba(255,255,255,0.15)" />
      <rect x="20" y="54" width="120" height="12" rx="6" fill="rgba(255,255,255,0.5)" />
      <rect x="20" y="76" width="200" height="8" rx="4" fill="rgba(255,255,255,0.25)" />
      <rect x="20" y="94" width="170" height="8" rx="4" fill="rgba(255,255,255,0.25)" />
      <rect x="20" y="112" width="140" height="8" rx="4" fill="rgba(255,255,255,0.25)" />
      <rect x="20" y="140" width="80" height="24" rx="12" fill="rgba(255,255,255,0.35)" />
      <text x="160" y="125" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="48" fontWeight="bold">{label[0]}</text>
    </svg>
  ),
  // コード画面風
  (label: string) => (
    <svg viewBox="0 0 320 180" className="w-full h-full" fill="none">
      <rect x="0" y="0" width="320" height="180" fill="rgba(0,0,0,0.2)" rx="4" />
      <rect x="0" y="0" width="80" height="180" fill="rgba(0,0,0,0.15)" />
      <rect x="20" y="20" width="40" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
      <rect x="20" y="38" width="50" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
      <rect x="20" y="56" width="35" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
      <rect x="20" y="74" width="45" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
      <rect x="100" y="20" width="140" height="8" rx="4" fill="rgba(255,255,255,0.5)" />
      <rect x="100" y="40" width="100" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
      <rect x="110" y="60" width="120" height="8" rx="4" fill="rgba(255,255,255,0.35)" />
      <rect x="110" y="80" width="80" height="8" rx="4" fill="rgba(255,255,255,0.25)" />
      <rect x="100" y="100" width="160" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
      <text x="200" y="155" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="48" fontWeight="bold">{label[0]}</text>
    </svg>
  ),
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3 inline-block px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/50">
          Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
          制作物
        </h2>
        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, i) => {
            const gradient = thumbnailGradients[i % thumbnailGradients.length]
            const PatternFn = thumbnailPatterns[i % thumbnailPatterns.length]
            return (
              <div
                key={project.title}
                className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all overflow-hidden"
              >
                {/* サムネイル */}
                <div className={`relative h-44 bg-gradient-to-br ${gradient} overflow-hidden`}>
                  <div className="absolute inset-0 opacity-80">
                    {PatternFn(project.title)}
                  </div>
                  {/* ホバー時のオーバーレイ */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* コンテンツ */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="font-bold text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techs.map(tech => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-3 border-t border-gray-100 dark:border-gray-800">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} の GitHub リポジトリ`}
                        className="flex items-center gap-1.5 px-4 py-2 text-sm rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors font-semibold"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} のデモ`}
                        className="flex items-center gap-1.5 px-4 py-2 text-sm rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors font-semibold"
                      >
                        Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

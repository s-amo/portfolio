import { projects } from '../data/portfolio'

const thumbnailColors = [
  'from-stone-800 via-stone-700 to-stone-600',
  'from-zinc-700 via-neutral-600 to-stone-500',
  'from-slate-700 via-slate-600 to-slate-500',
  'from-neutral-800 via-neutral-700 to-neutral-600',
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-20">
          Work
        </p>

        <div>
          {projects.map((project, i) => {
            const gradient = thumbnailColors[i % thumbnailColors.length]
            return (
              <div
                key={project.title}
                className="group border-b border-stone-200 dark:border-stone-800 last:border-b-0 py-10 first:pt-0"
              >
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  {/* 番号 */}
                  <div className="md:col-span-1">
                    <span className="font-display text-5xl font-bold text-stone-200 dark:text-stone-800 group-hover:text-accent/30 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* サムネイル */}
                  <div className="md:col-span-3">
                    <div className={`h-40 bg-gradient-to-br ${gradient} overflow-hidden relative`}>
                      {/* グリッドオーバーレイ */}
                      <svg viewBox="0 0 300 160" className="absolute inset-0 w-full h-full" fill="none">
                        <line x1="100" y1="0" x2="100" y2="160" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                        <line x1="200" y1="0" x2="200" y2="160" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                        <line x1="0" y1="53" x2="300" y2="53" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                        <line x1="0" y1="106" x2="300" y2="106" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                        <text x="150" y="95" textAnchor="middle" fill="rgba(255,255,255,0.12)" fontSize="64" fontWeight="bold" fontFamily="Georgia, serif">
                          {project.title.charAt(0)}
                        </text>
                      </svg>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                  </div>

                  {/* テキスト */}
                  <div className="md:col-span-5 md:col-start-5">
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map(tech => (
                        <span
                          key={tech}
                          className="text-xs text-stone-400 dark:text-stone-600 border border-stone-200 dark:border-stone-800 px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* リンク */}
                  <div className="md:col-span-2 md:col-start-11 flex flex-row md:flex-col gap-4 md:items-end">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-0.5"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-0.5"
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

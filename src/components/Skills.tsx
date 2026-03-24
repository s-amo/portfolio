import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-8 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-20">
          Skills
        </p>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-16 md:mb-0">
            技術<br />
            <span className="italic">スタック。</span>
          </h2>

          <div className="space-y-0">
            {skills.map((category, i) => (
              <div
                key={category.category}
                className={`py-8 ${i < skills.length - 1 ? 'border-b border-stone-200 dark:border-stone-800' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                  <p className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 sm:w-24 shrink-0 pt-1">
                    {category.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map(item => (
                      <span
                        key={item}
                        className="px-4 py-2 text-sm border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-accent hover:text-accent transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

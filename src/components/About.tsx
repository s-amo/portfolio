import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-32 px-8 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-20">
          About
        </p>

        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* 数字スタッツ列 */}
          <div className="md:col-span-4 space-y-14">
            <div>
              <p className="font-display text-8xl font-bold text-accent leading-none mb-3">4+</p>
              <p className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-8xl font-bold leading-none mb-3">20+</p>
              <p className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500">Projects Done</p>
            </div>
            <div>
              <p className="font-display text-8xl font-bold leading-none mb-3">∞</p>
              <p className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500">Cups of Coffee</p>
            </div>
          </div>

          {/* テキスト列 */}
          <div className="md:col-span-7 md:col-start-6 flex flex-col justify-center space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              UI デザインと<br />
              <span className="italic">開発</span>の橋渡し役。
            </h2>

            <div className="h-px bg-stone-200 dark:bg-stone-800" />

            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              {profile.bio}
            </p>

            <div className="pl-5 border-l-2 border-accent">
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm italic">
                {profile.history}
              </p>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="#contact"
                className="text-xs tracking-widest uppercase border-b border-stone-900 dark:border-stone-100 pb-0.5 hover:border-accent hover:text-accent transition-colors"
              >
                Contact Me →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

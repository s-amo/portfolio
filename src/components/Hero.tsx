import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-8 pt-32 pb-12 overflow-hidden">
      {/* 右上の装飾 */}
      <div className="absolute top-24 right-8 text-xs tracking-widest uppercase text-stone-400 dark:text-stone-600 [writing-mode:vertical-rl] animate-fade-in">
        Portfolio — 2024
      </div>

      {/* メインコンテンツ */}
      <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full">
        <p className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-10 animate-fade-in">
          UI Design &amp; Development
        </p>

        <h1 className="font-display font-bold leading-[0.9] mb-16 animate-fade-in" style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)' }}>
          <span className="block">Creative</span>
          <span className="block italic text-accent">Design</span>
          <span className="block">&amp; Dev.</span>
        </h1>

        {/* アクセントライン */}
        <div className="h-px bg-stone-300 dark:bg-stone-700 animate-line-grow mb-10" />

        {/* ボトム行 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 animate-fade-in-delay">
          <div>
            <p className="font-display text-2xl font-bold mb-1">{profile.name}</p>
            <p className="text-sm text-stone-500 dark:text-stone-400">{profile.catchcopy}</p>
          </div>

          <div className="flex gap-3">
            <a
              href="#projects"
              className="px-7 py-3 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 text-xs tracking-widest uppercase font-medium hover:-translate-y-0.5 transition-transform"
            >
              Work ↓
            </a>
            <a
              href="#contact"
              className="px-7 py-3 border border-stone-400 dark:border-stone-600 text-xs tracking-widest uppercase font-medium hover:-translate-y-0.5 transition-transform"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="flex items-center gap-3 mt-12 animate-fade-in-delay">
        <div className="w-8 h-px bg-stone-400 dark:bg-stone-600" />
        <p className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-600">Scroll</p>
      </div>
    </section>
  )
}

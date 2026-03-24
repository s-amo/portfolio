import { profile } from '../data/portfolio'

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 pt-14 pb-24 overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* テキスト側 */}
        <div className="text-center md:text-left animate-fade-in">
          <p className="inline-block text-xs font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-5 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/50">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400 leading-tight">
            {profile.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium mb-5 leading-relaxed">
            {profile.catchcopy}
          </p>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
            {profile.bio}
          </p>

          {/* SNS アイコンボタン */}
          <div className="flex justify-center md:justify-start gap-3 mb-8">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.social.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <TwitterIcon />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <LinkedinIcon />
            </a>
          </div>

          {/* CTA ボタン */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3">
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
            >
              制作物を見る
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-xl border border-gray-300 dark:border-gray-700 font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 hover:-translate-y-0.5 transition-all"
            >
              お問い合わせ
            </a>
          </div>
        </div>

        {/* アバター側 */}
        <div className="flex justify-center md:justify-end animate-fade-in-delay">
          <div className="relative">
            {/* 外側の装飾リング */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-400/30 to-purple-400/30 blur-xl" />
            <div className="absolute -inset-1 rounded-full border-2 border-dashed border-indigo-300/50 dark:border-indigo-600/50 animate-spin-slow" />

            {/* メインのアバター円 */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
              {/* 人物シルエット */}
              <svg viewBox="0 0 100 100" className="w-40 h-40 md:w-52 md:h-52" fill="none">
                <circle cx="50" cy="32" r="18" fill="rgba(255,255,255,0.9)" />
                <ellipse cx="50" cy="80" rx="28" ry="22" fill="rgba(255,255,255,0.9)" />
              </svg>
            </div>

            {/* フローティングバッジ 1 */}
            <div className="absolute -bottom-4 -left-6 bg-white dark:bg-gray-900 rounded-2xl px-4 py-2.5 shadow-xl border border-gray-100 dark:border-gray-800">
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">Experience</p>
              <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">4年+</p>
            </div>

            {/* フローティングバッジ 2 */}
            <div className="absolute -top-4 -right-6 bg-white dark:bg-gray-900 rounded-2xl px-4 py-2.5 shadow-xl border border-gray-100 dark:border-gray-800">
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">Projects</p>
              <p className="text-lg font-bold text-purple-600 dark:text-purple-400">20+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

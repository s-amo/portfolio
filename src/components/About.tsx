import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3 inline-block px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/50">
          About Me
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
          自己紹介
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 写真エリア */}
          <div className="relative flex justify-center">
            {/* メイン写真フレーム */}
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* 背景の装飾四角 */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 translate-x-3 translate-y-3 opacity-30 blur-sm" />
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden shadow-2xl shadow-indigo-500/20 flex items-end justify-center">
                {/* 人物イラスト */}
                <svg viewBox="0 0 200 220" className="w-full" fill="none">
                  {/* 背景装飾 */}
                  <circle cx="100" cy="200" r="120" fill="rgba(255,255,255,0.08)" />
                  <circle cx="30" cy="40" r="40" fill="rgba(255,255,255,0.06)" />
                  {/* 体 */}
                  <ellipse cx="100" cy="195" rx="55" ry="40" fill="rgba(255,255,255,0.85)" />
                  {/* 首 */}
                  <rect x="88" y="110" width="24" height="28" rx="12" fill="rgba(255,255,255,0.85)" />
                  {/* 頭 */}
                  <circle cx="100" cy="90" r="38" fill="rgba(255,255,255,0.85)" />
                  {/* 髪 */}
                  <path d="M62 80 Q65 50 100 48 Q135 50 138 80 Q130 60 100 62 Q70 60 62 80Z" fill="rgba(99,102,241,0.8)" />
                  {/* 目 */}
                  <circle cx="88" cy="88" r="4" fill="rgba(99,102,241,0.7)" />
                  <circle cx="112" cy="88" r="4" fill="rgba(99,102,241,0.7)" />
                  {/* 口 */}
                  <path d="M90 102 Q100 110 110 102" stroke="rgba(99,102,241,0.7)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>

            {/* フローティングスタッツカード */}
            <div className="absolute top-4 -right-4 md:-right-8 bg-white dark:bg-gray-900 rounded-2xl px-4 py-3 shadow-xl border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium leading-none mb-0.5">実績</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-200">20+ Projects</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white dark:bg-gray-900 rounded-2xl px-4 py-3 shadow-xl border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium leading-none mb-0.5">経験年数</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-200">4年+ のキャリア</p>
                </div>
              </div>
            </div>
          </div>

          {/* テキスト側 */}
          <div className="space-y-5">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-indigo-100 dark:border-indigo-900 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                  <svg viewBox="0 0 16 16" fill="white" className="w-3.5 h-3.5">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">プロフィール</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{profile.bio}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-purple-100 dark:border-purple-900 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                  <svg viewBox="0 0 16 16" fill="white" className="w-3.5 h-3.5">
                    <path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3zm4 0v4H4V3h2zm6 0H8v4h4V3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">経歴</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{profile.history}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

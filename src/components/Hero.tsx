import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-14">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{profile.name}</h1>
      <p className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 mb-8">
        {profile.catchcopy}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
        >
          制作物を見る
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
        >
          お問い合わせ
        </a>
      </div>
    </section>
  )
}

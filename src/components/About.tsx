import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3">
          About Me
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
          自己紹介
        </h2>
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{profile.bio}</p>
          </div>
          <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{profile.history}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

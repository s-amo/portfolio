import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">About</h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{profile.bio}</p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{profile.history}</p>
    </section>
  )
}

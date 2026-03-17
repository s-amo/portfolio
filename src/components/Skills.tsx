import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
          技術スタック
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {skills.map(category => (
            <div
              key={category.category}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm"
            >
              <h3 className="font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                {category.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map(item => (
                  <li
                    key={item}
                    className="px-3 py-1 text-sm rounded-full bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

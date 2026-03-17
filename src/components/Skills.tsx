import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {skills.map(category => (
            <div key={category.category}>
              <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                {category.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map(item => (
                  <li
                    key={item}
                    className="px-3 py-1 text-sm rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
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

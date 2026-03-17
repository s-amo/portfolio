import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div
            key={project.title}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col gap-3"
          >
            <h3 className="font-bold text-lg">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techs.map(tech => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm mt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} の GitHub リポジトリ`}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} のデモ`}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

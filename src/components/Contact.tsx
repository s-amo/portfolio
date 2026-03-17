import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          お気軽にご連絡ください。
        </p>
        <div className="flex justify-center gap-6">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub プロフィール"
            className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.social.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter プロフィール"
            className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Twitter
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn プロフィール"
            className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

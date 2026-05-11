'use client'

import { Bebas_Neue } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

type Project = {
  title: string
  embedUrl: string
}

const projects: Project[] = [
  {
    title: 'Project one',
    embedUrl: 'https://www.youtube.com/embed/1NZ1nq3c8SQ',
  },
  {
    title: 'Project two',
    embedUrl: 'https://www.youtube.com/embed/xs0_O80IDv0',
  },
  {
    title: 'Project three',
    embedUrl: 'https://www.youtube.com/embed/AG8vhK1v4c0',
  },
  {
    title: 'Project four',
    embedUrl: 'https://www.youtube.com/embed/nT7-m3syVvE',
  },
  {
    title: 'Project five',
    embedUrl: 'https://www.youtube.com/embed/FIOSRBP6KU0',
  },
]

export default function VideoPage() {
  return (
    <div className={`min-h-screen bg-black text-white flex ${bebas.className}`}>
      <Sidebar active="video" />

      <main className="flex-1 bg-neutral-950 text-white overflow-x-hidden">
        <div className="max-w-5xl mx-auto py-16 px-8">
          <h2
            className={`text-4xl md:text-5xl font-semibold mb-4 tracking-tight ${bebas.className}`}
          >
            Videos
          </h2>
          <p className="text-neutral-400 mb-12 max-w-2xl">
            Here&apos;s some examples of my work from the last couple of years.
          </p>

          <div className="space-y-16">
            {projects.map((project) => (
              <article key={project.title} className="space-y-4">
                <div>
                  <h3 className={`text-2xl font-semibold tracking-tight ${bebas.className}`}>
                    {project.title}
                  </h3>
                </div>
                <div className="w-full bg-black overflow-hidden border border-neutral-800">
                  <div className="aspect-video w-full">
                  <iframe
                    src={project.embedUrl}
                    title={project.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

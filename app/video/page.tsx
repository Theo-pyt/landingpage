'use client'

import { Bebas_Neue } from 'next/font/google'
import { PageLayout } from '@/components/PageLayout'
import { PageContent } from '@/components/PageContent'

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
    title: 'Video one',
    embedUrl: 'https://www.youtube.com/embed/1NZ1nq3c8SQ',
  },
  {
    title: 'Video two',
    embedUrl: 'https://www.youtube.com/embed/xs0_O80IDv0',
  },
  {
    title: 'Video three',
    embedUrl: 'https://www.youtube.com/embed/AG8vhK1v4c0',
  },
  {
    title: 'Video four',
    embedUrl: 'https://www.youtube.com/embed/nT7-m3syVvE',
  },
  {
    title: 'Video five',
    embedUrl: 'https://www.youtube.com/embed/FIOSRBP6KU0',
  },
]

export default function VideoPage() {
  return (
    <PageLayout active="video" mainClassName="bg-neutral-950 text-white">
      <PageContent
        className="!max-w-video py-10 sm:py-12 md:py-section-y flex flex-col items-center lg:-translate-x-[calc(clamp(12rem,18vw,16rem)/2)]"
      >
        <header className="w-full mb-8 sm:mb-10 text-center">
          <h2
            className={`text-fluid-title font-semibold mb-3 sm:mb-4 tracking-tight ${bebas.className}`}
          >
            Videos
          </h2>
          <p className="text-fluid-lg text-neutral-400 max-w-[min(100%,48rem)] mx-auto">
            Here&apos;s some examples of my work from the last couple of years.
          </p>
        </header>

        <div className="w-full space-y-12 sm:space-y-14 lg:space-y-16">
          {projects.map((project) => (
            <article key={project.title} className="w-full space-y-3 sm:space-y-4">
              <h3
                className={`text-fluid-heading font-semibold tracking-tight text-center sm:text-left ${bebas.className}`}
              >
                {project.title}
              </h3>
              <div className="w-full mx-auto bg-black overflow-hidden border border-neutral-800 rounded-sm max-w-full">
                <div className="aspect-video w-full">
                  <iframe
                    src={project.embedUrl}
                    title={project.title}
                    className="w-full h-full min-h-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageContent>
    </PageLayout>
  )
}

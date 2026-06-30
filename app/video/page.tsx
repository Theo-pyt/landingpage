'use client'

import { Bebas_Neue } from 'next/font/google'
import { PageLayout } from '@/components/PageLayout'
import { PageContent } from '@/components/PageContent'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

type Video = {
  embedUrl: string
}

type VideoCategory = {
  name: string
  videos: Video[]
}

const categories: VideoCategory[] = [
  {
    name: 'Short documentaries',
    videos: [
      {
        embedUrl: 'https://www.youtube.com/embed/zGAB3ZoI1CU',
      },
    ],
  },
  {
    name: 'Event Recaps',
    videos: [
      {
        embedUrl: 'https://www.youtube.com/embed/AG8vhK1v4c0',
      },
    ],
  },
  {
    name: 'Corporate',
    videos: [
      { embedUrl: 'https://www.youtube.com/embed/1NZ1nq3c8SQ' },
      { embedUrl: 'https://www.youtube.com/embed/xs0_O80IDv0' },
      { embedUrl: 'https://www.youtube.com/embed/nT7-m3syVvE' },
      { embedUrl: 'https://www.youtube.com/embed/FIOSRBP6KU0' },
    ],
  },
]

export default function VideoPage() {
  return (
    <PageLayout
      active="video"
      layoutClassName="bg-deep-blue"
      mainClassName="bg-deep-blue text-white"
    >
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
          {categories.map((category) => (
            <section key={category.name} className="w-full space-y-6 sm:space-y-8">
              <h3
                className={`text-fluid-heading font-semibold tracking-tight text-center ${bebas.className}`}
              >
                {category.name}
              </h3>

              <div className="space-y-8 sm:space-y-10">
                {category.videos.map((video, index) => (
                  <article
                    key={`${category.name}-${index}`}
                    className="w-full bg-deep-blue-dark overflow-hidden border border-deep-blue-light/25 rounded-sm"
                  >
                    <div className="aspect-video w-full">
                      <iframe
                        src={video.embedUrl}
                        title={`${category.name} video ${index + 1}`}
                        className="w-full h-full min-h-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </PageContent>
    </PageLayout>
  )
}

'use client'

import { PageLayout } from '@/components/PageLayout'
import { PageContent } from '@/components/PageContent'
import { WorkedWithSection } from '@/components/WorkedWithSection'
import { VideoPlaylist, type PlaylistVideo } from '@/components/VideoPlaylist'

type Video = PlaylistVideo

type VideoCategory = {
  name: string
  videos: Video[]
}

const categories: VideoCategory[] = [
  {
    name: 'Corporate',
    videos: [
      {
        embedUrl: 'https://www.youtube.com/embed/1NZ1nq3c8SQ',
        title:
          'Mastercard Strive EU Innovators bringing real-world insights to support small business resilience.',
      },
      {
        embedUrl: 'https://www.youtube.com/embed/xs0_O80IDv0',
        title: 'Fueling small business growth through digital payment acceptance',
      },
      {
        embedUrl: 'https://www.youtube.com/embed/nT7-m3syVvE',
        title: 'Unlocking access to finance',
      },
      {
        embedUrl: 'https://www.youtube.com/embed/FIOSRBP6KU0',
        title: 'How Women in the Dominican Republic Are Turning Skills Into Success',
      },
      {
        embedUrl: 'https://www.youtube.com/embed/_fwtfUQIJDE',
        title: "SoBanHang is unlocking small businesses' access to credit",
      },
    ],
  },
  {
    name: 'Brand Identity',
    videos: [
      {
        embedUrl: 'https://www.youtube.com/embed/Vx8RGX00rtY',
        title: 'Our Values',
      },
      {
        embedUrl: 'https://www.youtube.com/embed/sKGSVqiMZ-o',
        title: 'We Are Caribou',
      },
    ],
  },
  {
    name: 'Short documentaries',
    videos: [
      {
        embedUrl: 'https://www.youtube.com/embed/zGAB3ZoI1CU',
        title: 'Young West African farmers turn social media into tools for growth',
      },
    ],
  },
  {
    name: 'Summits',
    videos: [
      {
        embedUrl: 'https://www.youtube.com/embed/AG8vhK1v4c0',
        title:
          "Discussing the future of Europe's small businesses at the Mastercard Strive EU Summit, Jan 2026.",
      },
    ],
  },
  {
    name: 'Community events',
    videos: [
      {
        embedUrl: 'https://www.youtube.com/embed/OywMJv7lqCQ?start=247',
        title: "Sara Auster: The story behind Sara's sound baths",
      },
      {
        embedUrl: 'https://www.youtube.com/embed/bw4vR63tBls?start=800',
        title: 'Alexander Taylor: The environmental impact of Design',
      },
      {
        embedUrl: 'https://www.youtube.com/embed/cYTVDxAtqAw?start=1056',
        title: 'Archie Proudfoot: The importance of symmetry in art',
      },
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
          <h1
            className="text-fluid-title font-semibold mb-3 sm:mb-4 tracking-tight"
          >
            Video Production Portfolio
          </h1>
          <p className="text-fluid-lg text-neutral-400 max-w-[min(100%,48rem)] mx-auto">
            Corporate video, brand films, promotional videos, testimonials, and documentary-style
            work — freelance videography and remote video editing across commercial and B2B projects.
          </p>
        </header>

        <div className="w-full space-y-12 sm:space-y-14 lg:space-y-16">
          {categories.map((category) => (
            <section key={category.name} className="w-full space-y-6 sm:space-y-8">
              <h3
                className="text-fluid-heading font-semibold tracking-tight text-center"
              >
                {category.name}
              </h3>

              <VideoPlaylist categoryName={category.name} videos={category.videos} />
            </section>
          ))}
        </div>
      </PageContent>

      <WorkedWithSection />
    </PageLayout>
  )
}

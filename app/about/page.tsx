'use client'

import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import { PageLayout } from '@/components/PageLayout'
import { PageContent } from '@/components/PageContent'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export default function AboutPage() {
  return (
    <PageLayout
      active="about"
      mainClassName="bg-gradient-to-br from-[#3a3a3e] via-[#2d2d32] to-[#1a1a1e] text-neutral-100"
    >
      <PageContent
        narrow
        className="flex flex-col items-center lg:-translate-x-[calc(clamp(12rem,18vw,16rem)/2)]"
      >
        <h2
          className={`w-full text-fluid-2xl font-semibold mb-6 sm:mb-8 lg:mb-10 tracking-tight text-white text-center ${bebas.className}`}
        >
          About
        </h2>

        <div className="w-full max-w-[min(100%,clamp(14rem,45vw,20rem))] mx-auto mb-6 sm:mb-8 lg:mb-10">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-black/12 bg-gradient-to-br from-[#3a3a3e] via-[#2d2d32] to-[#1a1a1e] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <Image
              src="/headshot_noBG.png"
              alt="Theodor Pintilie"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 320px"
              priority
            />
          </div>
        </div>

        <div className="w-full space-y-4 sm:space-y-5 text-neutral-300 leading-relaxed text-fluid-base text-center">
          <p>
            I&apos;m a videographer and editor focused on stories that connect brands and audiences
            across social, web, and live events. My work spans corporate pieces, promotional
            content, and narrative-driven edits—always with a clear message and a polished finish.
          </p>
          <p>
            Whether you need a sharp reel, a full campaign, or a single hero film, I bring
            technical craft and creative direction so your vision reads clearly on every screen.
          </p>
        </div>
      </PageContent>
    </PageLayout>
  )
}

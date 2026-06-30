'use client'

import { useEffect, useRef } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import { PageLayout } from '@/components/PageLayout'
import { PageContent } from '@/components/PageContent'
import amnestyLogo from '@/logos/Amnesty-International-Logo-Vector.svg--3890860117.png'
import caribouLogo from '@/logos/Caribou_Logo_Primary_Black.png'
import hekayyatnaLogo from '@/logos/Hekayyatna English Eye.png'
import striveLogo from '@/logos/strive-2542923558.png'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

const trustedLogos: { src: StaticImageData; alt: string }[] = [
  { src: amnestyLogo, alt: 'Amnesty International' },
  { src: caribouLogo, alt: 'Caribou' },
  { src: hekayyatnaLogo, alt: 'Hekayyatna' },
  { src: striveLogo, alt: 'Strive' },
]

function TrustedLogo({ logo, index }: { logo: (typeof trustedLogos)[number]; index: number }) {
  if (index === trustedLogos.length - 1) {
    return (
      <Image
        src={logo.src}
        alt="Strive"
        className="shrink-0 h-20 sm:h-28 w-auto object-contain"
      />
    )
  }

  const sizeClass =
    index === 0
      ? 'h-24 sm:h-32'
      : index === 2
        ? 'h-[13.5rem] sm:h-[18rem]'
        : 'h-12 sm:h-16'

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      className={`shrink-0 w-auto object-contain ${sizeClass}`}
    />
  )
}

export default function AboutPage() {
  const logosScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = logosScrollRef.current
    if (!el) return

    const handleWheel = (event: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth) return
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return

      event.preventDefault()
      el.scrollLeft += event.deltaY
    }

    el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <PageLayout
      active="about"
      layoutClassName="bg-deep-blue"
      mainClassName="bg-deep-blue text-white"
    >
      <PageContent
        narrow
        className="w-full lg:-translate-x-[calc(clamp(12rem,18vw,16rem)/2)]"
      >
        <h2
          className={`w-full text-fluid-2xl font-semibold mb-6 sm:mb-8 tracking-tight text-white text-center ${bebas.className}`}
        >
          About
        </h2>

        <div className="w-full space-y-4 sm:space-y-5">
          <div className="flex flex-row items-start gap-4 sm:gap-6 md:gap-8 w-full">
            <div className="shrink-0 w-[min(100%,clamp(11.2rem,36vw,16rem))]">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-deep-blue-light/25 bg-deep-blue-dark shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <Image
                  src="/headshot_noBG.png"
                  alt="Theodor Pintilie"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 36vw, 256px"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 min-w-0 space-y-4 sm:space-y-5 text-neutral-200 leading-relaxed text-fluid-base text-left">
              <p>
                I am a videographer and editor focused on stories that connect brands and audiences
                across social, web, and live events. My work spans corporate pieces, promotional
                content, and narrative-driven edits—always with a clear message and a polished finish.
              </p>
              <p>
                During my career, I had the opportunity to work for different brands, businesses, and
                creative teams to produce content that not only looks cinematic, but communicates with
                purpose. A key part of that journey has been my ongoing collaboration with Hekayyatna,
                where we&apos;ve successfully delivered multiple video production campaigns across a range of
                formats and audiences.
              </p>
            </div>
          </div>

          <p className="w-full text-neutral-200 leading-relaxed text-fluid-base text-left">
            Whether you need a sharp reel, a full campaign, or a single hero film, I bring technical
            craft, creative direction, and a collaborative approach to ensure your vision reads
            clearly on every screen. I focus on creating content that feels intentional, emotionally
            resonant, and tailored to the audience it&apos;s meant to reach.
          </p>
        </div>
      </PageContent>

      <section className="bg-white text-black w-full pb-section-y">
        <PageContent
          narrow
          className="w-full lg:-translate-x-[calc(clamp(12rem,18vw,16rem)/2)] pb-4 sm:pb-6"
        >
          <h2
            className={`w-full text-fluid-2xl font-semibold tracking-tight text-neutral-900 text-center ${bebas.className}`}
          >
            Trusted by
          </h2>
        </PageContent>

        <div
          ref={logosScrollRef}
          className="w-full min-w-0 overflow-x-auto overflow-y-visible overscroll-x-contain scrollbar-hide scroll-px-section-x sm:scroll-px-8"
          style={{ scrollPaddingRight: 'clamp(3rem, 12vw, 8rem)' }}
          aria-label="Trusted by logos"
        >
          <div className="flex flex-row flex-nowrap items-center justify-start gap-10 sm:gap-14 md:gap-16 pl-section-x sm:pl-8 pr-[clamp(4rem,15vw,10rem)] w-max min-w-full py-2">
            {trustedLogos.map((logo, index) => (
              <div
                key={logo.alt}
                className={`shrink-0 ${
                  index === 0 ? 'ml-8 sm:ml-10 md:ml-12' : ''
                } ${index === 1 ? 'ml-4 sm:ml-5 md:ml-6' : ''} ${
                  index === 2 ? '-ml-10 sm:-ml-14 md:-ml-16' : ''
                } ${index === 3 ? '-ml-[1.5rem] sm:-ml-[3.5rem] md:-ml-[4.5rem] -translate-y-1 sm:-translate-y-0.5 pr-4 sm:pr-6' : ''}`}
              >
                <TrustedLogo logo={logo} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

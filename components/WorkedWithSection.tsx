'use client'

import { useEffect, useRef } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { Bebas_Neue } from 'next/font/google'
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

const workedWithLogos: { src: StaticImageData; alt: string }[] = [
  { src: amnestyLogo, alt: 'Amnesty International' },
  { src: caribouLogo, alt: 'Caribou' },
  { src: hekayyatnaLogo, alt: 'Hekayyatna' },
  { src: striveLogo, alt: 'Strive' },
]

function WorkedWithLogo({ logo, index }: { logo: (typeof workedWithLogos)[number]; index: number }) {
  if (index === workedWithLogos.length - 1) {
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

export function WorkedWithSection() {
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
    <section className="bg-white text-black w-full pb-section-y">
      <PageContent
        narrow
        className="w-full lg:-translate-x-[calc(clamp(12rem,18vw,16rem)/2)] pb-4 sm:pb-6"
      >
        <h2
          className={`w-full text-fluid-2xl font-semibold tracking-tight text-neutral-900 text-center ${bebas.className}`}
        >
          I have worked with
        </h2>
      </PageContent>

      <div
        ref={logosScrollRef}
        className="w-full min-w-0 overflow-x-auto overflow-y-visible overscroll-x-contain scrollbar-hide scroll-px-section-x sm:scroll-px-8"
        style={{ scrollPaddingRight: 'clamp(3rem, 12vw, 8rem)' }}
        aria-label="I have worked with logos"
      >
        <div className="flex flex-row flex-nowrap items-center justify-start gap-10 sm:gap-14 md:gap-16 pl-section-x sm:pl-8 pr-[clamp(4rem,15vw,10rem)] w-max min-w-full py-2">
          {workedWithLogos.map((logo, index) => (
            <div
              key={logo.alt}
              className={`shrink-0 ${
                index === 0 ? 'ml-8 sm:ml-10 md:ml-12' : ''
              } ${index === 1 ? 'ml-4 sm:ml-5 md:ml-6' : ''} ${
                index === 2 ? '-ml-10 sm:-ml-14 md:-ml-16' : ''
              } ${index === 3 ? '-ml-[1.5rem] sm:-ml-[3.5rem] md:-ml-[4.5rem] -translate-y-1 sm:-translate-y-0.5 pr-4 sm:pr-6' : ''}`}
            >
              <WorkedWithLogo logo={logo} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

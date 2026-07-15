'use client'

import Image from 'next/image'
import { PageLayout } from '@/components/PageLayout'
import { PageContent } from '@/components/PageContent'
import { WorkedWithSection } from '@/components/WorkedWithSection'
import headshotPhoto from '@/headshot/headshot.png'

export default function AboutPage() {
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
        <h1
          className="w-full text-fluid-2xl font-semibold mb-6 sm:mb-8 tracking-tight text-white text-center"
        >
          Freelance Videographer &amp; Remote Video Editor
        </h1>

        <div className="w-full space-y-4 sm:space-y-5 text-neutral-200 leading-relaxed text-fluid-base text-left">
          <div className="float-left w-[min(100%,clamp(11.2rem,36vw,16rem))] mr-4 sm:mr-6 md:mr-8 mb-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-deep-blue-light/25 bg-deep-blue-dark shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <Image
                src={headshotPhoto}
                alt="Theodor Pintilie"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 36vw, 256px"
                priority
              />
            </div>
          </div>

          <p>
            Curious by nature and always drawn to new experiences, I enjoy travelling, discovering
            different cuisines, and spending time outdoors. I&apos;m an active person who loves nature and
            rock climbing, and I&apos;m constantly inspired by film, music, and the arts. Experiencing
            different places, cultures, and creative perspectives shapes how I see the world and
            influences the way I approach storytelling.
          </p>
          <p>
            I&apos;m a freelance videographer and remote video editor creating story-driven content
            that connects brands with audiences across social, digital, and live platforms. I manage
            end-to-end video production — from concept development and pre-production planning to
            filming, editing, colour grading, motion graphics, subtitling, and final delivery. My work
            spans corporate video, brand films, promotional and marketing videos, testimonial and
            interview content, event videography, and documentary-style edits, with a focus on clear
            messaging, thoughtful storytelling, and polished execution.
          </p>
          <p>
            Throughout my career, I&apos;ve collaborated with brands, agencies, startups, NGOs, and
            creative teams across FinTech, B2B, corporate communications, and employer branding to
            produce content that is visually compelling and purposeful. Many projects are delivered
            through remote video production — working closely with international clients across
            Europe and worldwide as a Romania-based, EU freelance videographer available for
            project-based and contract engagements.
          </p>
          <p>
            A significant part of that journey has been my ongoing partnership with Hekayyatna, where
            we&apos;ve delivered multiple video campaigns across a variety of formats and audiences.
          </p>
          <p>
            Whether it&apos;s a short-form reel, a campaign launch, or a hero film, I bring a blend of
            technical expertise, creative direction, and collaborative thinking to every project. My
            goal is to create work that feels intentional, resonates with its audience, and
            communicates effectively on every screen.
          </p>
        </div>
      </PageContent>

      <WorkedWithSection />
    </PageLayout>
  )
}

'use client'

import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-black text-white flex ${bebas.className}`}>
      <Sidebar active="about" />

      <main className="flex-1 overflow-x-hidden bg-gradient-to-br from-[#3a3a3e] via-[#2d2d32] to-[#1a1a1e] text-neutral-100">
        <div className="max-w-2xl mx-auto py-16 px-8">
          <h2
            className={`text-4xl md:text-5xl font-semibold mb-10 tracking-tight text-white ${bebas.className}`}
          >
            About
          </h2>

          <div className="w-full max-w-xs mx-auto mb-10">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-sm border border-black/12 bg-gradient-to-br from-[#3a3a3e] via-[#2d2d32] to-[#1a1a1e] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <Image
                src="/headshot_noBG.png"
                alt="Theodor Pintilie"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
                priority
              />
            </div>
          </div>

          <div className="space-y-4 text-neutral-300 leading-relaxed text-base">
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
        </div>
      </main>
    </div>
  )
}

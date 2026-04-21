'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

type ActivePage = 'home' | 'about' | 'video' | 'contact'

type SidebarProps = {
  active: ActivePage
}

export function Sidebar({ active }: SidebarProps) {
  const navLink = (page: 'about' | 'video') =>
    `block hover:text-white transition-colors ${
      active === page ? 'text-white' : 'text-neutral-400'
    }`

  return (
    <aside className="w-64 shrink-0 bg-black border-r border-neutral-900 flex flex-col justify-between py-10 px-10 sticky top-0 h-screen">
      <div className="space-y-10">
        <Link href="/" className="block cursor-pointer select-none">
          <div>
            <div
              className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mb-4"
              aria-hidden="true"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
              >
                <path d="M7 4v16l13-8z" />
              </svg>
            </div>
            <div className="space-y-1">
              <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase">
                Portfolio of
              </p>
              <h1
                className={`text-[2.4rem] font-extrabold tracking-[0.12em] leading-[1.05] ${bebas.className}`}
              >
                THEODOR
                <br />
                PINTILIE
              </h1>
            </div>
          </div>
        </Link>

        <nav className="space-y-4 text-2xl tracking-[0.25em] uppercase">
          <Link href="/about" className={navLink('about')}>
            About
          </Link>
          <Link href="/video" className={navLink('video')}>
            Videos
          </Link>
        </nav>
      </div>

      <div>
        <Link href="/contact">
          <Button
            className={`w-full rounded-none text-xs tracking-[0.25em] uppercase ${
              active === 'contact'
                ? 'bg-red-600 ring-2 ring-red-400'
                : 'bg-red-500 hover:bg-red-600'
            }`}
          >
            Contact
          </Button>
        </Link>
      </div>
    </aside>
  )
}

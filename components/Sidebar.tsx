'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

type ActivePage = 'home' | 'about' | 'video' | 'contact'

type SidebarProps = {
  active: ActivePage
  variant?: 'dark' | 'light'
}

export function Sidebar({ active, variant = 'dark' }: SidebarProps) {
  const isLight = variant === 'light'

  const navLink = (page: 'about' | 'video') =>
    `block transition-colors ${
      isLight
        ? active === page
          ? 'text-neutral-900'
          : 'text-neutral-500 hover:text-neutral-900'
        : active === page
          ? 'text-white'
          : 'text-neutral-400 hover:text-white'
    }`

  return (
    <aside
      className={`w-full shrink-0 flex flex-col justify-between gap-6 lg:gap-0 py-4 px-4 sm:py-6 sm:px-6 lg:py-10 lg:px-[clamp(1.5rem,3vw,2.5rem)] z-40 sticky top-0 lg:fixed lg:left-0 lg:top-0 lg:w-sidebar lg:h-[100dvh] lg:max-h-[100dvh] border-b lg:border-b-0 lg:border-r ${
        isLight
          ? 'bg-white border-neutral-200 text-neutral-900'
          : 'bg-deep-blue-dark border-deep-blue-light/25'
      }`}
    >
      <div className="flex flex-col sm:flex-row lg:flex-col sm:items-start sm:justify-between lg:justify-start gap-6 lg:space-y-10 lg:gap-0">
        <Link href="/" className="block cursor-pointer select-none shrink-0">
          <div>
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500 flex items-center justify-center mb-3 sm:mb-4"
              aria-hidden="true"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
              >
                <path d="M7 4v16l13-8z" />
              </svg>
            </div>
            <div className="space-y-1">
              <p
                className={`text-[0.65rem] sm:text-xs tracking-[0.3em] ${
                  isLight ? 'text-neutral-500' : 'text-neutral-400'
                }`}
              >
                Portfolio of
              </p>
              <h1
                className="text-fluid-display font-extrabold tracking-[0.12em]"
              >
                Theodor
                <br />
                Pintilie
              </h1>
            </div>
          </div>
        </Link>

        <nav className="flex flex-row flex-wrap gap-x-6 gap-y-2 sm:gap-x-8 lg:flex-col lg:space-y-4 text-lg sm:text-xl lg:text-2xl tracking-[0.25em]">
          <Link href="/about" className={navLink('about')}>
            About
          </Link>
          <Link href="/video" className={navLink('video')}>
            Portfolio
          </Link>
        </nav>
      </div>

      <div className="w-full sm:max-w-xs lg:max-w-none">
        <Link href="/contact">
          <Button
            className={`w-full rounded-none text-xs tracking-[0.25em] font-bold py-3 sm:py-4 ${
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

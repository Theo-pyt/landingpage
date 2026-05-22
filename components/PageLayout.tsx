'use client'

import { Bebas_Neue } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

type ActivePage = 'home' | 'about' | 'video' | 'contact'

type PageLayoutProps = {
  active: ActivePage
  mainClassName?: string
  children: React.ReactNode
}

export function PageLayout({ active, mainClassName = '', children }: PageLayoutProps) {
  return (
    <div className={`min-h-screen min-h-[100dvh] bg-black text-white ${bebas.className}`}>
      <Sidebar active={active} />
      <main
        className={`w-full min-w-0 overflow-x-hidden lg:ml-sidebar ${mainClassName}`}
      >
        {children}
      </main>
    </div>
  )
}

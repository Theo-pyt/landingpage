'use client'

import { Sidebar } from '@/components/Sidebar'

type ActivePage = 'home' | 'about' | 'video' | 'contact'

type PageLayoutProps = {
  active: ActivePage
  mainClassName?: string
  layoutClassName?: string
  sidebarVariant?: 'dark' | 'light'
  children: React.ReactNode
}

export function PageLayout({
  active,
  mainClassName = '',
  layoutClassName = 'bg-black',
  sidebarVariant = 'dark',
  children,
}: PageLayoutProps) {
  const isLight = sidebarVariant === 'light'

  return (
    <div
      className={`min-h-screen min-h-[100dvh] ${layoutClassName} ${
        isLight ? 'text-neutral-900' : 'text-white'
      }`}
    >
      <Sidebar active={active} variant={sidebarVariant} />
      <main
        className={`w-full min-w-0 overflow-x-hidden lg:ml-sidebar ${mainClassName}`}
      >
        {children}
      </main>
    </div>
  )
}

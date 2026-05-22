type PageContentProps = {
  children: React.ReactNode
  className?: string
  /** Narrower reading width for text-heavy sections */
  narrow?: boolean
}

export function PageContent({ children, className = '', narrow = false }: PageContentProps) {
  return (
    <div
      className={`w-full mx-auto py-section-y px-section-x sm:px-8 md:px-10 lg:px-12 ${
        narrow ? 'max-w-prose' : 'max-w-content'
      } ${className}`}
    >
      {children}
    </div>
  )
}

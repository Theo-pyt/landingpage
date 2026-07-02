import { Bebas_Neue } from 'next/font/google'
import { PageLayout } from '@/components/PageLayout'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export default function ContactPage() {
  return (
    <PageLayout
      active="contact"
      layoutClassName="bg-white"
      mainClassName="bg-white text-black flex items-center justify-center min-h-[100dvh]"
    >
      <div className="text-center px-section-x sm:px-8 max-w-prose">
        <h2
          className={`text-fluid-2xl font-semibold mb-6 sm:mb-8 tracking-tight text-neutral-900 ${bebas.className}`}
        >
          Get in touch
        </h2>

        <p className="text-fluid-base text-neutral-700">
          Say hello. You can reach me at{' '}
          <a
            href="mailto:theodor.pint@gmail.com"
            className="text-red-500 hover:text-red-600 underline underline-offset-2"
          >
            theodor.pint[at]gmail.com
          </a>
        </p>
      </div>
    </PageLayout>
  )
}

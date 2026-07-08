import localFont from 'next/font/local'
import { Bebas_Neue } from 'next/font/google'

export const keshiva = localFont({
  src: '../fonts/Keshiva-Regular.otf',
  display: 'swap',
  variable: '--font-keshiva',
})

export const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

import { Poppins, Lora } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata = {
  title: 'RankFest — Local SEO & Growth Agency',
  description:
    'We help local businesses rank higher on Google, drive qualified foot traffic, and turn clicks into customers. Google Business Profile SEO, citations, on-page optimization.',
  openGraph: {
    title: 'RankFest — Local SEO & Growth Agency',
    description:
      'We help local businesses rank higher on Google, drive qualified foot traffic, and turn clicks into customers.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

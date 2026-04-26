import AboutPage from '@/components/AboutPage'

export const metadata = {
  title: 'About RankFest — Local SEO Agency',
  description:
    'We are a specialist local SEO agency helping independent businesses rank higher on Google Maps, drive qualified traffic, and win more customers — without lock-in contracts or vanity metrics.',
  openGraph: {
    title: 'About RankFest — Local SEO Agency',
    description:
      'Specialist local SEO and digital growth for independent businesses. No fluff, no lock-in — just results.',
    type: 'website',
  },
}

export default function Page() {
  return <AboutPage />
}

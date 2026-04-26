import { notFound } from 'next/navigation'
import { servicesData, getServiceBySlug } from '@/lib/services-data'
import ServicePage from '@/components/ServicePage'

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: `${service.title} — RankFest Local SEO Agency`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} — RankFest`,
      description: service.shortDescription,
      type: 'website',
    },
  }
}

export default function Page({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()
  return <ServicePage service={service} />
}

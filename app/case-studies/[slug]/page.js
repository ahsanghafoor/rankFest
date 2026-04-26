import { notFound } from 'next/navigation'
import { caseStudiesData, getCaseStudyBySlug } from '@/lib/case-studies-data'
import CaseStudyPage from '@/components/CaseStudyPage'

export function generateStaticParams() {
  return caseStudiesData.map((cs) => ({ slug: cs.slug }))
}

export function generateMetadata({ params }) {
  const cs = getCaseStudyBySlug(params.slug)
  if (!cs) return {}
  return {
    title: `${cs.business} Case Study — RankFest`,
    description: `${cs.tagline}. See how RankFest delivered results for ${cs.business} in ${cs.city}.`,
    openGraph: {
      title: `${cs.business} — RankFest Case Study`,
      description: cs.tagline,
      type: 'article',
    },
  }
}

export default function Page({ params }) {
  const cs = getCaseStudyBySlug(params.slug)
  if (!cs) notFound()
  return <CaseStudyPage cs={cs} />
}

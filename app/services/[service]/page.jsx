import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';

export async function generateStaticParams() {
  return getAllServiceSlugs().map(slug => ({
    service: slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.service);
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'This service does not exist.',
    };
  }
  return {
    title: `${service.name} - RankFest SEO & Digital Marketing`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.service);

  return <ServiceDetailPage service={service} />;
}

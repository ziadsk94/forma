import Script from 'next/script';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/seo';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'project' | 'service';
  data?: object;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let schema;

  switch (type) {
    case 'organization':
      schema = generateOrganizationSchema();
      break;
    case 'website':
      schema = generateWebsiteSchema();
      break;
    case 'project':
      schema = data;
      break;
    case 'service':
      schema = data;
      break;
    default:
      return null;
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

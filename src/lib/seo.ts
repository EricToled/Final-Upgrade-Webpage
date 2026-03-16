import type { Locale } from './i18n';

interface FAQItem {
  q: string;
  a: string;
}

export function generateFAQSchema(faqs: readonly FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Final Upgrade AI',
    url: 'https://finalupgrade.ai',
    logo: 'https://finalupgrade.ai/logo.png',
    description:
      "Final Upgrade designs, builds, and operates your company's transformation with AI at the core.",
    email: 'sales@finalupgrade.ai',
    sameAs: ['https://www.linkedin.com/company/final-upgrade-ai'],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'sales@finalupgrade.ai',
      contactType: 'sales',
      availableLanguage: ['Spanish', 'English'],
    },
  };
}

export function generateServiceSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'Final Upgrade AI',
      url: 'https://finalupgrade.ai',
    },
  };
}

export function generateHreflangLinks(path: string) {
  const baseUrl = 'https://finalupgrade.ai';
  return {
    es: `${baseUrl}/es${path}`,
    en: `${baseUrl}/en${path}`,
  };
}

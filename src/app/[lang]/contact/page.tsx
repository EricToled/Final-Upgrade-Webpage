import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/lib/i18n';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.contact.title };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {dict.contact.title}
        </h1>

        {/* Subtitle */}
        <p className="text-muted text-lg mb-12">
          {dict.contact.subtitle}
        </p>

        {/* Calendly Placeholder */}
        <div className="glass rounded-2xl p-12 mb-12">
          <p className="text-lg font-medium mb-2">Calendly Embed — Coming Soon</p>
          <p className="text-muted text-sm">
            Replace this with your Calendly embed URL
          </p>
        </div>

        {/* Email */}
        <p className="mb-8">
          <a
            href={`mailto:${dict.contact.email}`}
            className="text-primary hover:underline text-lg"
          >
            {dict.contact.email}
          </a>
        </p>

        {/* CTA Button */}
        <Link
          href={`mailto:${dict.contact.email}`}
          className="btn-primary"
        >
          {dict.contact.cta}
        </Link>
      </div>
    </section>
  );
}

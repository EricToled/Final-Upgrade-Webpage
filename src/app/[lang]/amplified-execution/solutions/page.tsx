import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/lib/i18n';
import Link from 'next/link';
import ProcessSteps from '@/components/ui/ProcessSteps';
import FAQ from '@/components/ui/FAQ';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'AI Solutions' };
}

export default async function AISolutionsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const contactHref = `/${lang}/${lang === 'es' ? 'contacto' : 'contact'}`;

  return (
    <>
      {/* Hook Headline + CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-8">
            {dict.solutions.hookHeadline}
          </h1>
          <Link href={contactHref} className="btn-primary">
            {dict.solutions.cta}
          </Link>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {lang === 'es' ? 'El problema' : 'The Problem'}
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              {dict.solutions.problem}
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {lang === 'es' ? 'La solución' : 'The Solution'}
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              {dict.solutions.solution}
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            {lang === 'es' ? 'Cómo funciona' : 'How It Works'}
          </h2>
          <ProcessSteps steps={dict.solutions.steps} />
        </div>
      </section>

      {/* Differentiator Stat */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-3xl md:text-5xl font-bold gradient-text leading-tight max-w-4xl mx-auto">
            {dict.solutions.stat}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            {lang === 'es' ? 'Preguntas frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ items={dict.solutions.faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link href={contactHref} className="btn-primary">
            {dict.solutions.cta}
          </Link>
        </div>
      </section>
    </>
  );
}

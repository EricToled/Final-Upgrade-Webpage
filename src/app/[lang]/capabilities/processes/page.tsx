import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/lib/i18n';
import Link from 'next/link';
import ProcessSteps from '@/components/ui/ProcessSteps';
import FAQ from '@/components/ui/FAQ';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Process Mapping & Automation' };
}

export default async function ProcessMappingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      {/* Hook Headline + CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
            {dict.processMapping.hookHeadline}
          </h1>
          <Link
            href={`/${lang}/${lang === 'es' ? 'contacto' : 'contact'}`}
            className="btn-primary inline-block"
          >
            {dict.processMapping.cta}
          </Link>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {lang === 'es' ? 'El Problema' : 'The Problem'}
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              {dict.processMapping.problem}
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {lang === 'es' ? 'La Solución' : 'The Solution'}
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              {dict.processMapping.solution}
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {lang === 'es' ? 'Cómo Funciona' : 'How It Works'}
          </h2>
          <ProcessSteps steps={dict.processMapping.steps} />
        </div>
      </section>

      {/* Differentiator Stat */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="glass p-12 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold gradient-text">
              {dict.processMapping.stat}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {lang === 'es' ? 'Preguntas Frecuentes' : 'FAQ'}
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ items={dict.processMapping.faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            {dict.processMapping.hookHeadline}
          </h2>
          <Link
            href={`/${lang}/${lang === 'es' ? 'contacto' : 'contact'}`}
            className="btn-primary inline-block"
          >
            {dict.processMapping.cta}
          </Link>
        </div>
      </section>
    </>
  );
}

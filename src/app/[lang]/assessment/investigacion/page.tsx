import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/lib/i18n';
import Link from 'next/link';
import ProcessSteps from '@/components/ui/ProcessSteps';
import FAQ from '@/components/ui/FAQ';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    title: lang === 'es' ? 'Desk Research' : 'Desk Research',
  };
}

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const contactPath = `/${lang}/${lang === 'es' ? 'contacto' : 'contact'}`;

  return (
    <>
      {/* Hook Headline + CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold font-serif gradient-text max-w-4xl mb-8">
            {dict.research.hookHeadline}
          </h1>
          <Link href={contactPath} className="btn-primary">
            {dict.research.cta}
          </Link>
        </div>
      </section>

      {/* The Problem */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {lang === 'es' ? 'El Problema' : 'The Problem'}
          </h2>
          <p className="text-muted max-w-3xl leading-relaxed text-lg">
            {dict.research.problem}
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {lang === 'es' ? 'La Solucion' : 'The Solution'}
          </h2>
          <p className="text-muted max-w-3xl leading-relaxed text-lg">
            {dict.research.solution}
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            {lang === 'es' ? 'Como Funciona' : 'How It Works'}
          </h2>
          <ProcessSteps steps={dict.research.steps} />
        </div>
      </section>

      {/* Differentiator Stat */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-2xl md:text-4xl font-bold gradient-text text-center">
            {dict.research.stat}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            {lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <FAQ items={dict.research.faqs} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link href={contactPath} className="btn-primary">
            {dict.research.cta}
          </Link>
        </div>
      </section>
    </>
  );
}

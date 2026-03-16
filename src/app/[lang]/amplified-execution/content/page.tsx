import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/lib/i18n';
import Link from 'next/link';
import ProcessSteps from '@/components/ui/ProcessSteps';
import FAQ from '@/components/ui/FAQ';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'AI Content Creation' };
}

export default async function AIContentCreationPage({
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
            {dict.contentCreation.hookHeadline}
          </h1>
          <Link href={contactHref} className="btn-primary">
            {dict.contentCreation.cta}
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
              {dict.contentCreation.problem}
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
              {dict.contentCreation.solution}
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
          <ProcessSteps steps={dict.contentCreation.steps} />
        </div>
      </section>

      {/* Differentiator Stat */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-3xl md:text-5xl font-bold gradient-text leading-tight max-w-4xl mx-auto">
            {dict.contentCreation.stat}
          </p>
        </div>
      </section>

      {/* AURORA Pipeline Visualization */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            AURORA Pipeline
          </h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            {lang === 'es'
              ? 'Nuestro pipeline creativo estructurado de principio a fin.'
              : 'Our structured creative pipeline from start to finish.'}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {dict.contentCreation.aurora.map((phase: any, i: number) => (
              <div key={i} className="relative">
                <div className="glass p-5 text-center h-full flex flex-col items-center">
                  <span className="text-3xl mb-3">{phase.icon}</span>
                  <span className="text-primary font-mono text-sm font-bold mb-1">
                    {phase.phase}
                  </span>
                  <h4 className="font-bold text-sm mb-2">{phase.name}</h4>
                  <p className="text-muted text-xs leading-relaxed">{phase.desc}</p>
                </div>
                {/* Arrow connector (hidden on last item) */}
                {i < dict.contentCreation.aurora.length - 1 && (
                  <span className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 text-primary text-xl z-10">
                    {'\u2192'}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Mobile flow indicator */}
          <div className="flex lg:hidden justify-center mt-6">
            <div className="flex items-center gap-2 text-primary text-sm font-semibold">
              <span>F1</span>
              <span>{'\u2192'}</span>
              <span>F2</span>
              <span>{'\u2192'}</span>
              <span>F3</span>
              <span>{'\u2192'}</span>
              <span>F4</span>
              <span>{'\u2192'}</span>
              <span>F5</span>
              <span>{'\u2192'}</span>
              <span>F6</span>
            </div>
          </div>
        </div>
      </section>

      {/* Production Unit Pricing Table */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            {lang === 'es' ? 'Unidades de Producción' : 'Production Units'}
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="glass overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-6 py-4 text-sm font-semibold">
                      {lang === 'es' ? 'Tipo de Contenido' : 'Content Type'}
                    </th>
                    <th className="text-right px-6 py-4 text-sm font-semibold">
                      {lang === 'es' ? 'Unidades de Producción' : 'Production Units'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dict.contentCreation.pricingTable.map((row: any, i: number) => (
                    <tr
                      key={i}
                      className={
                        i < dict.contentCreation.pricingTable.length - 1
                          ? 'border-b border-white/5'
                          : ''
                      }
                    >
                      <td className="px-6 py-4 text-sm text-muted">{row.type}</td>
                      <td className="px-6 py-4 text-sm text-right font-semibold text-primary">
                        {row.units}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <Link href={contactHref} className="btn-primary">
                {dict.contentCreation.pricingCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            {lang === 'es' ? 'Preguntas frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ items={dict.contentCreation.faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link href={contactHref} className="btn-primary">
            {dict.contentCreation.cta}
          </Link>
        </div>
      </section>
    </>
  );
}

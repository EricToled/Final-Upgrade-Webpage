import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/lib/i18n';
import Link from 'next/link';
import ProcessSteps from '@/components/ui/ProcessSteps';
import FAQ from '@/components/ui/FAQ';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'AI Training' };
}

export default async function TrainingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const series = ['Exploration', 'Acceleration', 'Mastery'] as const;
  const seriesKeys = ['exploration', 'acceleration', 'mastery'] as const;

  return (
    <>
      {/* Hook Headline + CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
            {dict.training.hookHeadline}
          </h1>
          <Link
            href={`/${lang}/${lang === 'es' ? 'contacto' : 'contact'}`}
            className="btn-primary inline-block"
          >
            {dict.training.cta}
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
            <p className="text-muted text-lg leading-relaxed">{dict.training.problem}</p>
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
            <p className="text-muted text-lg leading-relaxed">{dict.training.solution}</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {lang === 'es' ? 'Cómo Funciona' : 'How It Works'}
          </h2>
          <ProcessSteps steps={dict.training.steps} />
        </div>
      </section>

      {/* Differentiator Stat */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="glass p-12 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold gradient-text">
              {dict.training.stat}
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Matrix Table */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {lang === 'es' ? 'Matriz de Talleres' : 'Workshop Matrix'}
          </h2>
          <div className="glass overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary">
                      {lang === 'es' ? 'Nivel' : 'Level'}
                    </th>
                    {series.map((s) => (
                      <th
                        key={s}
                        className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary"
                      >
                        {s}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dict.training.workshopMatrix.levels.map((level: any, i: number) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold">{level}</td>
                      {seriesKeys.map((key) => (
                        <td key={key} className="px-6 py-4 text-muted text-sm">
                          {dict.training.workshopMatrix[key][i]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* AI Primer Note */}
          <div className="mt-8 glass p-8 max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4 text-primary">AI Primer Series</h3>
            <p className="text-muted text-base leading-relaxed">
              {dict.training.primerNote}
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
            <FAQ items={dict.training.faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            {dict.training.hookHeadline}
          </h2>
          <Link
            href={`/${lang}/${lang === 'es' ? 'contacto' : 'contact'}`}
            className="btn-primary inline-block"
          >
            {dict.training.cta}
          </Link>
        </div>
      </section>
    </>
  );
}

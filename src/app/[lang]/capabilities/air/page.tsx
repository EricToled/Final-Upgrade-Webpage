import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/lib/i18n';
import Link from 'next/link';
import ProcessSteps from '@/components/ui/ProcessSteps';
import FAQ from '@/components/ui/FAQ';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'AIR Assessment' };
}

export default async function AIRPage({
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
            {dict.air.hookHeadline}
          </h1>
          <Link
            href={`/${lang}/${lang === 'es' ? 'contacto' : 'contact'}`}
            className="btn-primary inline-block"
          >
            {dict.air.cta}
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
            <p className="text-muted text-lg leading-relaxed">{dict.air.problem}</p>
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
            <p className="text-muted text-lg leading-relaxed">{dict.air.solution}</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {lang === 'es' ? 'Cómo Funciona' : 'How It Works'}
          </h2>
          <ProcessSteps steps={dict.air.steps} />
        </div>
      </section>

      {/* Differentiator Stat */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="glass p-12 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold gradient-text">
              {dict.air.stat}
            </p>
          </div>
        </div>
      </section>

      {/* AIR Levels Table */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {lang === 'es' ? 'Niveles AIR' : 'AIR Levels'}
          </h2>
          <div className="glass overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary">
                      {lang === 'es' ? 'Nivel' : 'Level'}
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary">
                      {lang === 'es' ? 'Descripción' : 'Description'}
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary">
                      {lang === 'es' ? 'Pista Recomendada' : 'Recommended Track'}
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary">
                      {lang === 'es' ? 'Objetivo' : 'Target'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dict.air.levels.map((lvl: any, i: number) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">
                          {lvl.level}
                        </span>
                        <span className="ml-3 font-semibold">{lvl.name}</span>
                      </td>
                      <td className="px-6 py-4 text-muted text-sm">{lvl.desc}</td>
                      <td className="px-6 py-4 text-sm">{lvl.track}</td>
                      <td className="px-6 py-4 text-muted text-sm">{lvl.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            <FAQ items={dict.air.faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            {dict.air.hookHeadline}
          </h2>
          <Link
            href={`/${lang}/${lang === 'es' ? 'contacto' : 'contact'}`}
            className="btn-primary inline-block"
          >
            {dict.air.cta}
          </Link>
        </div>
      </section>
    </>
  );
}

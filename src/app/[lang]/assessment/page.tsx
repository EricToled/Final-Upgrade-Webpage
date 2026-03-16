import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/lib/i18n';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    title: lang === 'es' ? 'Assessment' : 'Assessment',
  };
}

export default async function AssessmentHubPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold gradient-text max-w-4xl">
            {dict.assessmentHub.headline}
          </h1>
        </div>
      </section>

      {/* Two-card grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Research card */}
            <Link
              href={`/${lang}/assessment/${lang === 'es' ? 'investigacion' : 'research'}`}
              className="glass p-8 group hover:scale-[1.02] transition-transform"
            >
              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {dict.assessmentHub.research.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {dict.assessmentHub.research.hook}
              </p>
              <span className="inline-block mt-6 text-primary font-semibold">
                {lang === 'es' ? 'Explorar' : 'Explore'} &rarr;
              </span>
            </Link>

            {/* Strategy card */}
            <Link
              href={`/${lang}/assessment/${lang === 'es' ? 'estrategia' : 'strategy'}`}
              className="glass p-8 group hover:scale-[1.02] transition-transform"
            >
              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {dict.assessmentHub.strategy.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {dict.assessmentHub.strategy.hook}
              </p>
              <span className="inline-block mt-6 text-primary font-semibold">
                {lang === 'es' ? 'Explorar' : 'Explore'} &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Connection arrow */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-6 mb-6">
            <span className="text-muted font-semibold text-lg">
              {dict.assessmentHub.research.title}
            </span>
            <span className="text-primary text-4xl font-light">&rarr;</span>
            <span className="text-muted font-semibold text-lg">
              {dict.assessmentHub.strategy.title}
            </span>
          </div>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            {dict.assessmentHub.connection}
          </p>
        </div>
      </section>
    </>
  );
}

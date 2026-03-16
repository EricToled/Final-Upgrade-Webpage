import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/lib/i18n';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Amplified Execution' };
}

export default async function AmplifiedExecutionHub({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const cards = [
    {
      title: dict.amplifiedHub.solutions.title,
      hook: dict.amplifiedHub.solutions.hook,
      href: `/${lang}/amplified-execution/${lang === 'es' ? 'soluciones' : 'solutions'}`,
    },
    {
      title: dict.amplifiedHub.contentCreation.title,
      hook: dict.amplifiedHub.contentCreation.hook,
      href: `/${lang}/amplified-execution/${lang === 'es' ? 'contenido' : 'content'}`,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-8">
            {dict.amplifiedHub.headline}
          </h1>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className="glass group block p-8 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_12px_40px_rgba(255,0,255,0.15)]"
              >
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-muted text-base leading-relaxed">{card.hook}</p>
                <div className="mt-6 flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="mr-2">{'\u2192'}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Connection Text */}
          <p className="mt-16 text-center text-muted text-lg max-w-3xl mx-auto leading-relaxed">
            {dict.amplifiedHub.connection}
          </p>
        </div>
      </section>
    </>
  );
}

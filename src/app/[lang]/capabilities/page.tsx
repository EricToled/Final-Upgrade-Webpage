import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/lib/i18n';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Capabilities' };
}

export default async function CapabilitiesHub({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const cards = [
    {
      title: dict.capabilitiesHub.air.title,
      hook: dict.capabilitiesHub.air.hook,
      href: `/${lang}/capabilities/${lang === 'es' ? 'air' : 'air'}`,
    },
    {
      title: dict.capabilitiesHub.training.title,
      hook: dict.capabilitiesHub.training.hook,
      href: `/${lang}/capabilities/${lang === 'es' ? 'capacitacion' : 'training'}`,
    },
    {
      title: dict.capabilitiesHub.processMapping.title,
      hook: dict.capabilitiesHub.processMapping.hook,
      href: `/${lang}/capabilities/${lang === 'es' ? 'procesos' : 'processes'}`,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
            {dict.capabilitiesHub.headline}
          </h1>
        </div>
      </section>

      {/* Capability Cards */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <Link key={i} href={card.href} className="glass group block p-8 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_12px_40px_rgba(255,0,255,0.15)]">
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

          {/* Flow Visualization */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="glass px-6 py-3 text-sm font-semibold">{cards[0].title}</div>
            <span className="text-primary text-2xl hidden md:block">{'\u2192'}</span>
            <span className="text-primary text-2xl block md:hidden">{'\u2193'}</span>
            <div className="glass px-6 py-3 text-sm font-semibold">{cards[1].title}</div>
            <span className="text-primary text-2xl hidden md:block">{'\u2192'}</span>
            <span className="text-primary text-2xl block md:hidden">{'\u2193'}</span>
            <div className="glass px-6 py-3 text-sm font-semibold">{cards[2].title}</div>
          </div>

          <p className="mt-8 text-center text-muted text-lg max-w-3xl mx-auto leading-relaxed">
            {dict.capabilitiesHub.flow}
          </p>
        </div>
      </section>
    </>
  );
}

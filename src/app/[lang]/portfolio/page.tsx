import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/lib/i18n';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.portfolio.headline };
}

export default async function PortfolioPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const cardAspects = [
    'aspect-square', 'aspect-video', 'aspect-square', 'aspect-video',
    'aspect-video', 'aspect-square', 'aspect-square', 'aspect-video',
    'aspect-square', 'aspect-video', 'aspect-video', 'aspect-square',
  ];

  const cardCategories = [
    dict.portfolio.categories[1],
    dict.portfolio.categories[2],
    dict.portfolio.categories[3],
    dict.portfolio.categories[4],
    dict.portfolio.categories[1],
    dict.portfolio.categories[3],
    dict.portfolio.categories[2],
    dict.portfolio.categories[4],
    dict.portfolio.categories[1],
    dict.portfolio.categories[2],
    dict.portfolio.categories[3],
    dict.portfolio.categories[4],
  ];

  return (
    <>
      {/* Hero — Showreel */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <div className="aspect-video bg-[#1A1A2E] rounded-2xl flex items-center justify-center">
              <p className="text-muted text-lg">Video Showreel — Coming Soon</p>
            </div>
            <div className="absolute inset-0 flex items-end p-8">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                {dict.portfolio.headline}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {dict.portfolio.categories.map((category: string, i: number) => (
              <button
                key={category}
                className={`glass px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? 'bg-primary/20 text-primary border border-primary/40'
                    : 'text-muted hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="masonry-grid columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="masonry-item break-inside-avoid">
                <div className="glass rounded-2xl overflow-hidden">
                  <div
                    className={`${cardAspects[i]} bg-[#1A1A2E] flex items-center justify-center`}
                  >
                    <p className="text-muted text-sm">Asset Placeholder</p>
                  </div>
                  <div className="p-4">
                    <span className="inline-block glass px-3 py-1 rounded-full text-xs text-muted">
                      {cardCategories[i]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 md:py-32 bg-[#0a0a1a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-3xl md:text-5xl font-bold mb-10">
            {dict.portfolio.closingStat}
          </p>
          <Link
            href={`/${lang}/${lang === 'es' ? 'contacto' : 'contact'}`}
            className="btn-primary"
          >
            {dict.portfolio.cta}
          </Link>
        </div>
      </section>
    </>
  );
}

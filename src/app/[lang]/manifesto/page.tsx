import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/lib/i18n';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.manifesto.title,
  };
}

export default async function ManifestoPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="scroll-snap-container">
      {dict.manifesto.statements.map((statement: string, i: number) => (
        <section key={i} className="scroll-snap-section bg-bg-dark">
          <div className="max-w-5xl mx-auto px-8 text-center">
            <p className="font-serif text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
              {statement}
            </p>
            {i === 4 && (
              <div className="mt-12">
                <Link
                  href={`/${lang}/${lang === 'es' ? 'contacto' : 'contact'}`}
                  className="btn-primary"
                >
                  {dict.manifesto.cta}
                </Link>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

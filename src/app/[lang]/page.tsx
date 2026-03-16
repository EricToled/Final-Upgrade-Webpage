import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/lib/i18n';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import LogoStrip from '@/components/ui/LogoStrip';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.hero.headline,
    description: dict.hero.subhead,
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      {/* ─── 1. HERO SECTION ─── */}
      <section className="bg-dark-gradient relative flex min-h-screen items-center justify-center">
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <div className="glass mx-auto max-w-4xl p-10 md:p-16">
            <h1 className="font-serif text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              {dict.hero.headline}
            </h1>
            <p className="mt-6 text-lg text-muted">{dict.hero.subhead}</p>
            <Link
              href={`/${lang}/capabilities/air`}
              className="btn-primary mt-8 inline-block"
            >
              {dict.hero.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. TRANSFORMATION ENGINE ─── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <GlassCard
              title={dict.engine.assessment.title}
              hook={dict.engine.assessment.hook}
              href={`/${lang}/assessment`}
            />
            <GlassCard
              title={dict.engine.capabilities.title}
              hook={dict.engine.capabilities.hook}
              href={`/${lang}/capabilities`}
            />
            <GlassCard
              title={dict.engine.amplifiedExecution.title}
              hook={dict.engine.amplifiedExecution.hook}
              href={`/${lang}/amplified-execution`}
            />
          </div>
          <p className="mt-10 text-center text-muted">{dict.engine.tagline}</p>
        </div>
      </section>

      {/* ─── 3. SOCIAL PROOF STRIP ─── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-muted">
            {dict.socialProof.title}
          </h2>
          <LogoStrip />
        </div>
      </section>

      {/* ─── 4. MANIFESTO TEASER ─── */}
      <section className="bg-bg-dark py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-serif text-3xl font-bold md:text-5xl lg:text-6xl">
            {dict.manifestoTeaser.statement}
          </p>
          <Link
            href={`/${lang}/manifesto`}
            className="mt-8 inline-block text-muted transition-colors hover:text-primary"
          >
            {dict.manifestoTeaser.link}
          </Link>
        </div>
      </section>

      {/* ─── 5. SHOWREEL PREVIEW ─── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex aspect-video items-center justify-center rounded-2xl bg-bg-dark-end">
              <span className="text-2xl font-semibold text-muted">Video Showreel</span>
            </div>
            <div className="glass absolute inset-0 flex flex-col items-center justify-center bg-opacity-60">
              <h2 className="font-serif text-3xl font-bold md:text-5xl">
                {dict.showreel.headline}
              </h2>
              <Link
                href={`/${lang}/portfolio`}
                className="btn-primary mt-8 inline-block"
              >
                {dict.showreel.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. AIR ASSESSMENT TEASER ─── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold md:text-5xl">
              {dict.airTeaser.headline}
            </h2>
            <Link
              href={`/${lang}/capabilities/air`}
              className="btn-primary mt-8 inline-block"
            >
              {dict.airTeaser.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

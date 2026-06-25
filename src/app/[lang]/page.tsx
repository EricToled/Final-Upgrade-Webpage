import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/dictionaries';
import { PHASES, EDGES } from '@/lib/edges';
import EdgeLockup from '@/components/ui/EdgeLockup';
import Reveal from '@/components/ui/Reveal';
import EngineRing from '@/components/home/EngineRing';

const phaseText = { amber: 'text-amber', cyan: 'text-cyan', magenta: 'text-magenta' } as const;
const phaseBorder = { amber: 'border-amber', cyan: 'border-cyan', magenta: 'border-magenta' } as const;
const phaseHex = { amber: '#f4920c', cyan: '#15d9d9', magenta: '#c82bc4' } as const;

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-16 md:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-[0.10] blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-edge), transparent 70%)' }}
        />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="eyebrow">{dict.hero.eyebrow}</p>

          <div className="mt-5 font-mono text-sm text-muted">
            <span className="text-edge">&gt;_</span>{' '}
            <span className="typeline">{dict.hero.command}</span>
            <span className="cursor-block" aria-hidden />
          </div>

          <h1 className="display mt-6 text-[clamp(3rem,11vw,8.5rem)] text-signal">
            {dict.hero.title}
            <span
              aria-hidden
              className="ml-2 inline-block h-[0.16em] w-[0.16em] align-baseline"
              style={{ background: 'var(--color-edge)' }}
            />
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {dict.hero.subhead}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contacto" className="btn-edge">
              <span aria-hidden>&gt;_</span> {dict.hero.ctaPrimary}
            </a>
            <a href="#engine" className="btn-ghost">{dict.hero.ctaSecondary} →</a>
          </div>
        </div>
      </section>

      {/* ===== STATEMENT ===== */}
      <section className="border-y border-hairline bg-panel px-5 py-20 md:px-8">
        <Reveal className="mx-auto max-w-5xl">
          <p className="display text-[clamp(1.6rem,4.5vw,3rem)] leading-tight">
            <span className="text-muted">{dict.statement.pre}</span>{' '}
            <span className="text-signal">{dict.statement.strong}</span>
          </p>
        </Reveal>
      </section>

      {/* ===== EL ENGINE ===== */}
      <section id="engine" className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-edge">{dict.engine.eyebrow}</p>
            <h2 className="display mt-4 text-[clamp(2rem,5vw,3.5rem)]">{dict.engine.title}</h2>
            <p className="mt-6 max-w-md text-muted">{dict.engine.blurb}</p>

            {/* mini dashboard — estado del motor */}
            <div className="mt-8 inline-flex flex-col gap-3 border border-hairline bg-panel p-5">
              <span className="eyebrow">{dict.engine.metaLabel}</span>
              <div className="flex items-baseline gap-2">
                <span className="display text-4xl text-edge">92</span>
                <span className="text-edge">%</span>
                <span className="ml-2 text-sm text-muted">{dict.engine.metaValue}</span>
              </div>
              <div className="flex gap-4 text-xs text-muted">
                {PHASES.map((p) => (
                  <span key={p.key} className="flex items-center gap-1.5">
                    <span className="h-2 w-2" style={{ background: phaseHex[p.color] }} />
                    {dict.phases[p.key].name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <EngineRing core={dict.engine.core} />
          </Reveal>
        </div>
      </section>

      {/* ===== TRES FASES · SEIS EDGES ===== */}
      <section id="fases" className="border-t border-hairline px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">// {lang === 'es' ? 'TRES FASES · SEIS EDGES' : 'THREE PHASES · SIX EDGES'}</p>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
            {PHASES.map((p, pi) => (
              <Reveal key={p.key} delay={pi * 80} className="bg-void">
                <div className="flex h-full flex-col p-7">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5" style={{ background: phaseHex[p.color] }} />
                    <span className={`eyebrow ${phaseText[p.color]}`}>Fase {p.n}</span>
                  </div>
                  <h3 className="mt-3 text-2xl tracked-tight">{dict.phases[p.key].name}</h3>
                  <p className="mt-1 text-sm text-muted">{dict.phases[p.key].tagline}</p>

                  <ul className={`mt-7 space-y-6 border-l ${phaseBorder[p.color]} pl-5`}>
                    {EDGES.filter((e) => e.phase === p.key).map((e) => (
                      <li key={e.slug}>
                        <EdgeLockup name={e.slug} className="text-lg" />
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">{dict.edges[e.slug].tag}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{dict.edges[e.slug].line}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section id="contacto" className="border-t border-hairline bg-panel px-5 py-28 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-edge">{dict.finalCta.eyebrow}</p>
          <h2 className="display mt-5 text-[clamp(2rem,5.5vw,4rem)]">{dict.finalCta.question}</h2>
          <p className="mx-auto mt-6 max-w-xl text-muted">{dict.finalCta.blurb}</p>
          <a href={`mailto:${dict.footer.email}`} className="btn-edge mt-10">
            <span aria-hidden>&gt;_</span> {dict.finalCta.cta}
          </a>
        </Reveal>
      </section>
    </>
  );
}

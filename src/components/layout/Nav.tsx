'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { Dictionary } from '@/dictionaries/es';
import { PHASES, EDGES } from '@/lib/edges';
import EdgeLockup from '@/components/ui/EdgeLockup';

const colorVar = { amber: 'var(--color-amber)', cyan: 'var(--color-cyan)', magenta: 'var(--color-magenta)' } as const;

export default function Nav({ dict, lang }: { dict: Dictionary; lang: string }) {
  const [hidden, setHidden] = useState(false);
  const [edgesOpen, setEdgesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const other = lang === 'es' ? 'en' : 'es';

  // Header direccional: se oculta al bajar, reaparece al subir (devuelve el viewport al contenido).
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const goingDown = y > lastY.current;
        if (Math.abs(y - lastY.current) > 6) {
          setHidden(goingDown && y > 120 && !edgesOpen && !mobileOpen);
          lastY.current = y;
        }
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [edgesOpen, mobileOpen]);

  const links = [
    { label: dict.nav.platform, href: '#engine' },
    { label: dict.nav.company, href: '#fases' },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform"
      style={{ transform: hidden ? 'translateY(-100%)' : 'translateY(0)' }}
    >
      <div className="border-b border-hairline bg-void/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          {/* Lockup */}
          <Link href={`/${lang}`} className="text-[1.05rem]" aria-label="Final Edge AI">
            <EdgeLockup name="final edge" />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a href="#engine" className="text-muted transition-colors hover:text-signal">{dict.nav.platform}</a>

            {/* EDGES — mega-menú por fase */}
            <div
              className="relative"
              onMouseEnter={() => setEdgesOpen(true)}
              onMouseLeave={() => setEdgesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-muted transition-colors hover:text-signal"
                aria-expanded={edgesOpen}
                onClick={() => setEdgesOpen((v) => !v)}
              >
                {dict.nav.edges}
                <span className="text-[0.7em]">▾</span>
              </button>
              {edgesOpen && (
                <div className="absolute left-1/2 top-full w-[680px] -translate-x-1/2 pt-3">
                  <div className="grid grid-cols-3 gap-px overflow-hidden border border-hairline bg-hairline">
                    {PHASES.map((p) => (
                      <div key={p.key} className="bg-panel p-5">
                        <div className="mb-3 flex items-center gap-2">
                          <span className="h-2 w-2" style={{ background: colorVar[p.color] }} />
                          <span className="eyebrow" style={{ color: colorVar[p.color] }}>
                            Fase {p.n} · {dict.phases[p.key].name}
                          </span>
                        </div>
                        <ul className="space-y-3">
                          {EDGES.filter((e) => e.phase === p.key).map((e) => (
                            <li key={e.slug}>
                              <a href="#fases" className="group block">
                                <EdgeLockup name={e.slug} showTag={false} className="text-[0.95rem] group-hover:opacity-100" />
                                <span className="mt-0.5 block text-xs text-muted">{dict.edges[e.slug].tag}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#fases" className="text-muted transition-colors hover:text-signal">{dict.nav.company}</a>

            <Link href={`/${other}`} className="text-muted transition-colors hover:text-signal" aria-label={`Switch language to ${other.toUpperCase()}`}>
              {dict.nav.langLabel}
            </Link>

            <a href="#contacto" className="btn-edge text-sm">
              <span aria-hidden>&gt;_</span> {dict.nav.talk}
            </a>
          </nav>

          {/* Botón móvil */}
          <button
            className="md:hidden text-signal"
            aria-label={mobileOpen ? dict.nav.close : dict.nav.open}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="font-mono text-lg">{mobileOpen ? '×' : '>_'}</span>
          </button>
        </div>
      </div>

      {/* Overlay móvil full-screen */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-void px-5 py-8">
          <nav className="flex flex-col gap-6 text-xl">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-signal">
                {l.label}
              </a>
            ))}
            <div className="border-t border-hairline pt-6">
              <span className="eyebrow">{dict.nav.edges}</span>
              <ul className="mt-4 space-y-4">
                {EDGES.map((e) => (
                  <li key={e.slug}>
                    <a href="#fases" onClick={() => setMobileOpen(false)}>
                      <EdgeLockup name={e.slug} showTag={false} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contacto" onClick={() => setMobileOpen(false)} className="btn-edge mt-2 w-fit">
              <span aria-hidden>&gt;_</span> {dict.nav.talk}
            </a>
            <Link href={`/${other}`} className="text-muted">{dict.nav.langLabel}</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

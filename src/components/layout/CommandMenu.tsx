'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Dictionary } from '@/dictionaries/es';
import { EDGES } from '@/lib/edges';

type Cmd = { id: string; label: string; hint?: string; run: () => void };

export default function CommandMenu({ dict, lang }: { dict: Dictionary; lang: string }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const other = lang === 'es' ? 'en' : 'es';

  const scrollTo = useCallback((id: string) => {
    setOpen(false);
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }, []);

  const commands: Cmd[] = useMemo(() => {
    const go = lang === 'es' ? 'ir a' : 'go to';
    const edgeCmds: Cmd[] = EDGES.map((e) => ({
      id: `edge-${e.slug}`,
      label: `${go} ${e.slug}`,
      hint: dict.edges[e.slug].tag,
      run: () => scrollTo('fases'),
    }));
    return [
      { id: 'engine', label: lang === 'es' ? 'ver el Engine' : 'see the Engine', hint: dict.engine.eyebrow, run: () => scrollTo('engine') },
      { id: 'fases', label: lang === 'es' ? 'ver las fases' : 'see the phases', run: () => scrollTo('fases') },
      ...edgeCmds,
      { id: 'talk', label: lang === 'es' ? 'reservar diagnóstico' : 'book a diagnostic', hint: '>_ ' + dict.nav.talk, run: () => scrollTo('contacto') },
      { id: 'lang', label: lang === 'es' ? 'cambiar idioma · EN' : 'switch language · ES', run: () => { setOpen(false); router.push(`/${other}`); } },
    ];
  }, [dict, lang, other, router, scrollTo]);

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(t) || c.hint?.toLowerCase().includes(t));
  }, [q, commands]);

  // Atajo global Cmd/Ctrl-K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) { setQ(''); setActive(0); requestAnimationFrame(() => inputRef.current?.focus()); }
    else triggerRef.current?.focus();
  }, [open]);

  useEffect(() => { setActive(0); }, [q]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { setOpen(false); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); setActive((i) => Math.min(i + 1, filtered.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((i) => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); filtered[active]?.run(); }
  };

  return (
    <>
      {/* Prompt flotante — siempre disponible, nunca estorba */}
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        aria-label="Abrir línea de comando (Cmd-K)"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 border border-hairline bg-panel/90 px-3 py-2 font-mono text-sm text-edge backdrop-blur-md transition-colors hover:border-edge"
      >
        <span aria-hidden>&gt;_</span>
        <kbd className="hidden text-[0.7rem] text-muted sm:inline">⌘K</kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-void/70 px-4 pt-[12vh] backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={dict.cmd.title}
          onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="w-full max-w-xl border border-hairline bg-panel" onKeyDown={onKeyDown}>
            <div className="flex items-center gap-2 border-b border-hairline px-4 py-3">
              <span aria-hidden className="font-mono text-edge">&gt;_</span>
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={dict.cmd.placeholder}
                className="w-full bg-transparent font-mono text-sm text-signal outline-none placeholder:text-muted/60"
                aria-label={dict.cmd.placeholder}
                autoComplete="off"
                spellCheck={false}
              />
              <span className="cursor-block" aria-hidden />
            </div>
            <ul className="max-h-[50vh] overflow-y-auto py-2">
              {filtered.length === 0 && (
                <li className="px-4 py-3 font-mono text-sm text-muted">{dict.cmd.empty}</li>
              )}
              {filtered.map((c, i) => (
                <li key={c.id}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => c.run()}
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-left font-mono text-sm ${
                      i === active ? 'bg-hairline text-signal' : 'text-muted'
                    }`}
                  >
                    <span><span className="text-edge">&gt;_</span> {c.label}</span>
                    {c.hint && <span className="text-xs text-muted/70">{c.hint}</span>}
                  </button>
                </li>
              ))}
            </ul>
            <div className="border-t border-hairline px-4 py-2 text-[0.7rem] text-muted/70">{dict.cmd.hint}</div>
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Dictionary } from '@/dictionaries/es';

interface MegaMenuProps {
  dict: Dictionary;
  lang: string;
}

const navItems = (lang: string) => [
  { key: 'manifesto', href: `/${lang}/${lang === 'es' ? 'manifiesto' : 'manifesto'}` },
  { key: 'assessment', href: `/${lang}/assessment` },
  { key: 'capabilities', href: `/${lang}/capabilities` },
  { key: 'amplifiedExecution', href: `/${lang}/amplified-execution` },
  { key: 'content', href: `/${lang}/${lang === 'es' ? 'portafolio' : 'portfolio'}` },
  { key: 'team', href: `/${lang}/${lang === 'es' ? 'equipo' : 'team'}` },
] as const;

export default function MegaMenu({ dict, lang }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const items = navItems(lang);
  const otherLang = lang === 'es' ? 'en' : 'es';

  return (
    <>
      {/* Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-0 border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href={`/${lang}`} className="text-xl font-bold tracking-tight">
            <span className="gradient-text">FINAL UPGRADE</span>
            <span className="text-muted text-xs ml-2 font-normal tracking-wider">AI</span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <Link
              href={`/${otherLang}`}
              className="text-sm text-muted hover:text-white transition-colors uppercase font-medium"
            >
              {otherLang.toUpperCase()}
            </Link>

            {/* CTA - Desktop only */}
            <Link
              href={`/${lang}/${lang === 'es' ? 'contacto' : 'contact'}`}
              className="btn-primary hidden md:inline-block text-sm py-2.5 px-5"
            >
              {dict.nav.cta.label}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 p-2 ml-2"
              aria-label="Menu"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mega Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[rgba(10,10,10,0.97)] backdrop-blur-xl transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex items-center justify-center">
          <nav className="max-w-4xl w-full px-8">
            <ul className="space-y-2">
              {items.map((item) => {
                const navData = dict.nav[item.key as keyof typeof dict.nav];
                return (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group block py-4 border-b border-[rgba(255,255,255,0.06)] transition-all"
                    >
                      <span className="block text-4xl md:text-6xl font-bold tracking-tight group-hover:text-primary transition-colors">
                        {navData.label}
                      </span>
                      <span className="block text-muted text-sm md:text-base mt-1 group-hover:text-white/80 transition-colors">
                        {navData.hook}
                      </span>
                    </Link>
                  </li>
                );
              })}
              {/* CTA item */}
              <li>
                <Link
                  href={`/${lang}/${lang === 'es' ? 'contacto' : 'contact'}`}
                  onClick={() => setIsOpen(false)}
                  className="group block py-4"
                >
                  <span className="block text-4xl md:text-6xl font-bold tracking-tight text-primary">
                    {dict.nav.cta.label}
                  </span>
                  <span className="block text-muted text-sm md:text-base mt-1">
                    {dict.nav.cta.hook}
                  </span>
                </Link>
              </li>
            </ul>

            {/* Language toggle in menu */}
            <div className="mt-10 flex gap-4">
              <Link
                href="/es"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors ${lang === 'es' ? 'text-primary' : 'text-muted hover:text-white'}`}
              >
                ES
              </Link>
              <span className="text-muted">/</span>
              <Link
                href="/en"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors ${lang === 'en' ? 'text-primary' : 'text-muted hover:text-white'}`}
              >
                EN
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

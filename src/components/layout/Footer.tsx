import Link from 'next/link';
import type { Dictionary } from '@/dictionaries/es';

interface FooterProps {
  dict: Dictionary;
  lang: string;
}

export default function Footer({ dict, lang }: FooterProps) {
  const otherLang = lang === 'es' ? 'en' : 'es';

  return (
    <>
      <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[var(--color-bg-dark)]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href={`/${lang}`} className="text-2xl font-bold tracking-tight">
                <span className="gradient-text">FINAL UPGRADE</span>
                <span className="text-muted text-xs ml-2 font-normal tracking-wider">AI</span>
              </Link>
              <p className="text-muted text-sm mt-4 max-w-sm leading-relaxed">
                {lang === 'es'
                  ? 'Diseñamos, construimos y operamos la transformación de tu empresa con inteligencia artificial en el centro.'
                  : "We design, build, and operate your company's transformation with AI at the core."}
              </p>
              <a
                href={`mailto:${dict.footer.email}`}
                className="text-primary text-sm font-medium mt-4 inline-block hover:underline"
              >
                {dict.footer.email}
              </a>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-muted">
                {lang === 'es' ? 'Navegación' : 'Navigation'}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href={`/${lang}/${lang === 'es' ? 'manifiesto' : 'manifesto'}`} className="text-sm text-muted hover:text-white transition-colors">
                    {dict.nav.manifesto.label}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/assessment`} className="text-sm text-muted hover:text-white transition-colors">
                    {dict.nav.assessment.label}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/capabilities`} className="text-sm text-muted hover:text-white transition-colors">
                    {dict.nav.capabilities.label}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/amplified-execution`} className="text-sm text-muted hover:text-white transition-colors">
                    {dict.nav.amplifiedExecution.label}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/${lang === 'es' ? 'portafolio' : 'portfolio'}`} className="text-sm text-muted hover:text-white transition-colors">
                    {dict.nav.content.label}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/${lang === 'es' ? 'equipo' : 'team'}`} className="text-sm text-muted hover:text-white transition-colors">
                    {dict.nav.team.label}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact + Legal */}
            <div>
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-muted">
                {lang === 'es' ? 'Contacto' : 'Contact'}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href={`/${lang}/${lang === 'es' ? 'contacto' : 'contact'}`} className="text-sm text-muted hover:text-white transition-colors">
                    {dict.nav.cta.label}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/final-upgrade-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>

              {/* Language Toggle */}
              <div className="mt-6 flex gap-3">
                <Link
                  href={`/es`}
                  className={`text-sm font-medium ${lang === 'es' ? 'text-primary' : 'text-muted hover:text-white'} transition-colors`}
                >
                  ES
                </Link>
                <span className="text-muted">/</span>
                <Link
                  href={`/en`}
                  className={`text-sm font-medium ${lang === 'en' ? 'text-primary' : 'text-muted hover:text-white'} transition-colors`}
                >
                  EN
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="divider-gradient mt-12 mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
            <span>{dict.footer.rights}</span>
            <Link href="#" className="hover:text-white transition-colors">
              {dict.footer.legal}
            </Link>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <Link
          href={`/${lang}/${lang === 'es' ? 'contacto' : 'contact'}`}
          className="block w-full text-center py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm"
        >
          {dict.footer.bookSession}
        </Link>
      </div>
    </>
  );
}

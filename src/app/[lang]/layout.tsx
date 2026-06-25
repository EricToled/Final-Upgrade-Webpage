import { GeistMono } from 'geist/font/mono';
import { locales, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/dictionaries';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CommandMenu from '@/components/layout/CommandMenu';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    description: dict.hero.subhead,
    alternates: { languages: { es: '/es', en: '/en' } },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang} className={GeistMono.variable} suppressHydrationWarning>
      <body className="bg-void text-signal antialiased">
        {/* Sin JS: nunca ocultar contenido tras la animación de entrada */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Nav dict={dict} lang={lang} />
        <main>{children}</main>
        <Footer dict={dict} lang={lang} />
        <CommandMenu dict={dict} lang={lang} />
      </body>
    </html>
  );
}

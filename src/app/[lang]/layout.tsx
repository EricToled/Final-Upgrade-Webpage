import { locales, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/dictionaries';
import MegaMenu from '@/components/layout/MegaMenu';
import Footer from '@/components/layout/Footer';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: {
      template: '%s | Final Upgrade AI',
      default: 'Final Upgrade AI — LATAM',
    },
    description: dict.hero.subhead,
    alternates: {
      languages: {
        es: '/es',
        en: '/en',
      },
    },
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
    <html lang={lang}>
      <body className="antialiased">
        <MegaMenu dict={dict} lang={lang} />
        <main className="pt-16 pb-16 md:pb-0">{children}</main>
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}

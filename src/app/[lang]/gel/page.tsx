import GelVisualizer from '@/components/GelVisualizer';
import type { Locale } from '@/lib/i18n';

export const dynamic = 'force-static';
export const dynamicParams = false;

export const metadata = {
  title: 'Gel Visualizer',
};

export default async function GelPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  // touch lang so static rendering binds it
  void (lang as Locale);

  return (
    <div className="-mt-16 -mb-16 md:mb-0">
      <GelVisualizer />
    </div>
  );
}

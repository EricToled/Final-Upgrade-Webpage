import type { Locale } from '@/lib/i18n';
import type { Dictionary } from './es';

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: () => import('./es').then((m) => m.default),
  en: () => import('./en').then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export type { Dictionary };

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://finaledge.ai'),
  title: {
    template: '%s · Final Edge AI',
    default: 'Final Edge AI — Tu ventaja final',
  },
  description:
    'La IA, vuelta infraestructura. Final Edge convierte la inteligencia artificial en una barrera de entrada — tres fases, seis edges, un solo motor.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

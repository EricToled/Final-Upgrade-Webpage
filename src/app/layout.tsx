import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Final Upgrade AI — LATAM',
  description:
    'Final Upgrade designs, builds, and operates your company\'s transformation with AI at the core.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

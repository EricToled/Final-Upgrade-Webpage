'use client';

import Link from 'next/link';

interface GlassCardProps {
  title: string;
  hook: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function GlassCard({ title, hook, href, icon, className = '' }: GlassCardProps) {
  return (
    <Link
      href={href}
      className={`glass group block p-8 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_12px_40px_rgba(255,0,255,0.15)] ${className}`}
    >
      {icon && <div className="mb-4 text-4xl">{icon}</div>}
      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted text-base leading-relaxed">{hook}</p>
      <div className="mt-6 flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="mr-2">{'\u2192'}</span>
      </div>
    </Link>
  );
}

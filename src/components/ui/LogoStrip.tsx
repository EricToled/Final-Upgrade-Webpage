'use client';

import { clientLogos } from '@/lib/logos';

export default function LogoStrip() {
  // Duplicate the list for seamless infinite scroll
  const logos = [...clientLogos, ...clientLogos];

  return (
    <div className="overflow-hidden">
      <div className="logo-scroll flex w-max gap-8">
        {logos.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="glass inline-flex items-center whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium text-muted grayscale transition-all duration-300 hover:text-white hover:grayscale-0"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

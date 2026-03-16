'use client';

import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: readonly FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="glass overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
          >
            <span className="font-semibold text-base">{item.q}</span>
            <span
              className={`text-primary text-xl transition-transform duration-300 shrink-0 ${
                openIndex === i ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="px-6 text-muted text-sm leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

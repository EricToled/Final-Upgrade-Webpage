'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Entrada de sección por IntersectionObserver (no listeners de scroll).
 * Anima solo opacity/transform. Respeta prefers-reduced-motion (vía CSS).
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'header';
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Fallback: si no hay IntersectionObserver, mostrar de inmediato (nunca dejar contenido oculto).
    if (typeof IntersectionObserver === 'undefined') { setShown(true); return; }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as 'div';
  return (
    <Comp
      ref={ref as React.Ref<HTMLDivElement>}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

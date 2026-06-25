import type { CSSProperties } from 'react';

/**
 * Lockup de línea de comando: `>_ {nombre} [AI]`
 * Las 3 partes nunca se separan ni reespacian (Brand OS · 02 Logotipo).
 */
export default function EdgeLockup({
  name,
  showTag = true,
  color,
  className = '',
  promptColor = 'var(--color-edge)',
}: {
  name: string;
  showTag?: boolean;
  /** color del nombre (p. ej. var(--color-amber)); por defecto signal */
  color?: string;
  className?: string;
  promptColor?: string;
}) {
  const style: CSSProperties = color ? { color } : {};
  return (
    <span className={`inline-flex items-baseline gap-1.5 font-mono ${className}`}>
      <span aria-hidden style={{ color: promptColor }} className="font-semibold tracking-tight">
        &gt;_
      </span>
      <span style={style} className="tracking-tight">{name}</span>
      {showTag && <span className="text-[0.7em] tracking-[0.2em] text-muted">[AI]</span>}
    </span>
  );
}

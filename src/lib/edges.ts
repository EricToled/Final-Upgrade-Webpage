// Estructura del Engine™ — fuente única de verdad (slugs, fase, color).
// La copia vive en los diccionarios (es/en).

export type PhaseKey = 'evaluacion' | 'capacidades' | 'ejecucion';
export type EdgeSlug =
  | 'strategy' | 'intelligence' | 'readiness' | 'flow' | 'systems' | 'creative';

export interface Phase {
  key: PhaseKey;
  n: string;
  /** clase de color de marca (text-amber / text-cyan / text-magenta) */
  color: 'amber' | 'cyan' | 'magenta';
  hex: string;
}

export const PHASES: Phase[] = [
  { key: 'evaluacion',  n: '01', color: 'amber',   hex: '#f4920c' },
  { key: 'capacidades', n: '02', color: 'cyan',    hex: '#15d9d9' },
  { key: 'ejecucion',   n: '03', color: 'magenta', hex: '#c82bc4' },
];

export const EDGES: { slug: EdgeSlug; phase: PhaseKey }[] = [
  { slug: 'strategy',     phase: 'evaluacion'  },
  { slug: 'intelligence', phase: 'evaluacion'  },
  { slug: 'readiness',    phase: 'capacidades' },
  { slug: 'flow',         phase: 'capacidades' },
  { slug: 'systems',      phase: 'ejecucion'   },
  { slug: 'creative',     phase: 'ejecucion'   },
];

export const phaseOf = (slug: EdgeSlug): Phase =>
  PHASES.find((p) => p.key === EDGES.find((e) => e.slug === slug)!.phase)!;

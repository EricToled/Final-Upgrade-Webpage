import type { EdgeSlug, PhaseKey } from '@/lib/edges';

const es = {
  nav: {
    platform: 'Plataforma',
    edges: 'Edges',
    company: 'Empresa',
    talk: 'Hablar',
    langLabel: 'EN',
    open: 'Abrir navegación',
    close: 'Cerrar',
  },
  cmd: {
    title: 'Línea de comando',
    placeholder: 'Escribe un comando…  (ej. ir a strategy)',
    empty: 'Sin resultados. Prueba: engine, fases, hablar.',
    hint: 'Cmd-K para abrir · ↑↓ para moverte · Enter para ejecutar · Esc para cerrar',
  },
  hero: {
    eyebrow: '// FINAL·EDGE [AI]',
    command: 'final-edge --deploy',
    title: 'Tu ventaja final',
    subhead:
      'La IA no es una herramienta más. Es tu nueva infraestructura. Final Edge la convierte en una barrera de entrada que la competencia no puede cruzar.',
    ctaPrimary: 'RESERVA UN DIAGNÓSTICO',
    ctaSecondary: 'Ver el Engine',
  },
  statement: {
    pre: 'El problema nunca fue la IA.',
    strong: 'El problema es no saber qué hacer con ella.',
  },
  engine: {
    eyebrow: 'EL ENGINE™',
    title: 'Un solo motor. Cada edge.',
    blurb:
      'Tres fases, seis edges. Mapeamos el terreno, instalamos las capacidades y llevamos la estrategia a sistemas vivos que producen ventaja — no diapositivas.',
    core: 'final·edge',
    metaLabel: 'ESTADO DEL MOTOR',
    metaValue: 'Preparación operativa',
  },
  phases: {
    evaluacion:  { name: 'Evaluación',  tagline: 'Donde empieza la claridad.' },
    capacidades: { name: 'Capacidades', tagline: 'Inteligencia activada.' },
    ejecucion:   { name: 'Ejecución',   tagline: 'De la estrategia al sistema.' },
  } as Record<PhaseKey, { name: string; tagline: string }>,
  edges: {
    strategy:     { tag: 'Planeación estratégica',     line: 'De datos dispersos a dirección estratégica — con rigor de consultoría Tier-1, en días.' },
    intelligence: { tag: 'Deep research',              line: '100+ fuentes integradas en segundos. Inteligencia accionable en 48 horas, no semanas.' },
    readiness:    { tag: 'Diagnóstico + entrenamiento', line: 'Mide la preparación real de tu organización en 3 niveles y 6 dimensiones. Construye el músculo.' },
    flow:         { tag: 'Mapeo y automatización',     line: 'Antes de automatizar, hay que mapear. +50% de productividad sin digitalizar el caos.' },
    systems:      { tag: 'Soluciones a medida',        line: 'Agentes de programación supervisados por ingenieros. 10x más rápido que el desarrollo tradicional.' },
    creative:     { tag: 'Producción con IA',          line: 'Del brief a la entrega final en días. Calidad cinematográfica, a una fracción del costo.' },
  } as Record<EdgeSlug, { tag: string; line: string }>,
  finalCta: {
    eyebrow: '// PRIMER PASO',
    question: '¿Estás listo para trabajar con IA?',
    blurb: 'Averígualo. Agenda una sesión de arquitectura — en 30 minutos entiendes qué necesita tu organización.',
    cta: 'HABLEMOS',
  },
  footer: {
    tagline: 'Tu ventaja final.',
    rights: '© 2026 Final Edge AI',
    email: 'hello@finaledge.ai',
    privacy: 'Privacidad',
    terms: 'Términos',
    eof: '>_ end of file',
  },
};

export type Dictionary = typeof es;
export default es;

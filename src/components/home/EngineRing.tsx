import EdgeLockup from '@/components/ui/EdgeLockup';

const SEGMENTS = [
  '#f4920c', '#f4920c', // Evaluación
  '#15d9d9', '#15d9d9', // Capacidades
  '#c82bc4', '#c82bc4', // Ejecución
];

/**
 * El Engine™: un anillo donde los seis edges ocupan sectores iguales
 * y el color marca la fase. Decorativo (aria-hidden); la info vive en la grilla de edges.
 */
export default function EngineRing({ core = 'final·edge' }: { core?: string }) {
  const cx = 180, cy = 180, r = 132;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px]">
      <svg viewBox="0 0 360 360" className="h-full w-full" aria-hidden>
        {/* pista */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1a1a1e" strokeWidth={14} />
        <g className="engine-spin">
          {SEGMENTS.map((c, i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={c}
              strokeWidth={14}
              pathLength={100}
              strokeDasharray="15 85"
              strokeLinecap="butt"
              transform={`rotate(${i * 60 - 90} ${cx} ${cy})`}
            />
          ))}
        </g>
        {/* núcleo */}
        <circle cx={cx} cy={cy} r={86} fill="#0b0b0e" stroke="#1a1a1e" strokeWidth={1} />
      </svg>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <EdgeLockup name={core} showTag={false} className="text-base" />
        <span className="eyebrow mt-1 text-[0.6rem]">ENGINE™</span>
      </div>
    </div>
  );
}

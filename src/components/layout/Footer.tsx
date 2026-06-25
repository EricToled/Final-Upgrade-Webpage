import type { Dictionary } from '@/dictionaries/es';
import EdgeLockup from '@/components/ui/EdgeLockup';

export default function Footer({ dict }: { dict: Dictionary; lang: string }) {
  return (
    <footer className="border-t border-hairline bg-void">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <EdgeLockup name="final edge" className="text-lg" />
            <p className="mt-3 max-w-xs text-sm text-muted">{dict.footer.tagline}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted md:items-end">
            <a href={`mailto:${dict.footer.email}`} className="transition-colors hover:text-edge">
              {dict.footer.email}
            </a>
            <div className="flex gap-4">
              <a href="#" className="transition-colors hover:text-signal">{dict.footer.privacy}</a>
              <a href="#" className="transition-colors hover:text-signal">{dict.footer.terms}</a>
              <a href="#" className="transition-colors hover:text-signal">in</a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-hairline pt-6 text-xs text-muted/70">
          <span>{dict.footer.rights}</span>
          <span className="font-mono">{dict.footer.eof}</span>
        </div>
      </div>
    </footer>
  );
}

import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/lib/i18n';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return { title: dict.team.title };
}

export default async function TeamPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const members = [dict.team.dominique, dict.team.eric];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-16">
          {dict.team.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {members.map((member) => (
            <div key={member.name} className="space-y-6">
              {/* Photo Placeholder */}
              <div className="aspect-[3/4] bg-[#1A1A2E] rounded-2xl flex items-center justify-center">
                <p className="text-muted text-lg">Photo — {member.name}</p>
              </div>

              {/* Name */}
              <h2 className="text-2xl font-bold">{member.name}</h2>

              {/* Role */}
              <p className="text-primary text-sm font-semibold uppercase tracking-wider">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-muted text-base leading-relaxed">
                {member.bio}
              </p>

              {/* Pull Quote */}
              <blockquote className="border-l-2 border-primary pl-6">
                <p className="italic font-serif text-xl">
                  &ldquo;{member.quote}&rdquo;
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

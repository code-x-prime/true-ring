import type { ReactNode } from "react";
import Link from "next/link";

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalPageLayout({ title, subtitle, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-mist/30 text-ink">
      {/* Breadcrumb */}
      <div className="border-b border-hairline/60 bg-white pt-18">
        <div className="mx-auto max-w-7xl px-6 py-3 md:px-8">
          <div className="flex items-center gap-2 text-xs text-graphite">
            <Link href="/" className="hover:text-truering-orange transition-colors">
              Home
            </Link>
            <span className="text-graphite/50">/</span>
            <span className="text-ink font-medium">{title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-truering-navy px-6 py-16 md:py-24">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-truering-orange/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-truering-blue/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl text-center text-white md:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-truering-orange" />
            Legal
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
              {subtitle}
            </p>
          )}
          <p className="mt-4 text-xs font-medium uppercase tracking-wider text-white/60">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl md:px-8">
          <article className="rounded-3xl border border-hairline bg-white p-8 shadow-[0_8px_40px_-16px_rgba(7,30,48,0.12)] sm:p-12 md:p-16">
            <div className="prose-custom text-graphite">
              {children}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

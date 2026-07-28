"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  IconArrowRight,
  IconStar,
  IconPhone,
  IconChartBar,
  IconBolt,
  IconLink,
  IconCheck,
} from "@tabler/icons-react";

function getFeatureIcon(title: string): React.ElementType {
  const lower = title.toLowerCase();
  if (lower.includes("call") || lower.includes("dial")) return IconPhone;
  if (lower.includes("sync") || lower.includes("data")) return IconCheck;
  if (lower.includes("log") || lower.includes("record")) return IconChartBar;
  if (lower.includes("api") || lower.includes("webhook")) return IconLink;
  if (lower.includes("message") || lower.includes("whatsapp")) return IconPhone;
  if (lower.includes("autom")) return IconBolt;
  return IconBolt;
}

interface PageHeroProps {
  variant: "service" | "industry" | "integration";
  eyebrow: string;
  title: string;
  heroTitle: string;
  description: string;
  features: Array<{ title: string; body: string }>;
  ctaLabel?: string;
}

export function PageHero({
  variant,
  eyebrow,
  title,
  heroTitle,
  description,
  features,
  ctaLabel = "Book a Free Demo",
}: PageHeroProps) {
  if (variant === "industry") {
    return (
      <section className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-truering-navy/95 via-truering-navy/85 to-truering-blue/80" />
        </div>

        <div className="relative mx-auto max-w-7xl md:px-8">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90 shadow-sm backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-truering-orange animate-pulse" />
              {eyebrow}
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {heroTitle}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-truering-orange px-8 py-4 text-sm font-bold text-white shadow-[0_16px_40px_-12px_rgba(255,85,0,0.5)] transition-all hover:bg-truering-orange-600 hover:scale-[1.02]"
              >
                {ctaLabel} <IconArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/#features"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-truering-navy"
              >
                Explore Features
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 3).map((feature, i) => {
              const Icon = getFeatureIcon(feature.title);
              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/15 hover:border-white/20"
                >
                  <div
                    className={cn(
                      "mb-4 flex h-12 w-12 items-center justify-center rounded-xl",
                      i % 2 === 0 ? "bg-truering-orange text-white" : "bg-truering-blue text-white"
                    )}
                  >
                    <Icon className="h-6 w-6" stroke={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{feature.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "integration") {
    return (
      <section className="relative overflow-hidden px-6 pt-20 pb-28 md:pt-32 md:pb-40">
        <div className="absolute inset-0 bg-gradient-to-br from-truering-navy via-ink to-truering-navy">
          <div className="absolute inset-0 opacity-20">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-truering-orange/20 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-truering-blue/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-truering-orange/40 bg-truering-orange/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-truering-orange shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-truering-orange animate-pulse" />
                {eyebrow}
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {heroTitle}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-full bg-truering-orange px-8 py-4 text-sm font-bold text-white shadow-[0_16px_40px_-12px_rgba(255,85,0,0.5)] transition-all hover:bg-truering-orange-600 hover:scale-[1.02]"
                >
                  {ctaLabel} <IconArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/#features"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-truering-navy"
                >
                  Explore Features
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="flex flex-col gap-4">
                  {features.slice(0, 4).map((feature, i) => {
                    const Icon = getFeatureIcon(feature.title);
                    return (
                      <div
                        key={feature.title}
                        className={cn(
                          "flex items-start gap-4 rounded-2xl border p-5 transition-all hover:-translate-y-0.5",
                          i % 2 === 0
                            ? "border-truering-orange/20 bg-truering-orange/10 hover:bg-truering-orange/15"
                            : "border-truering-blue/20 bg-truering-blue/10 hover:bg-truering-blue/15"
                        )}
                      >
                        <div
                          className={cn(
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                            i % 2 === 0 ? "bg-truering-orange text-white" : "bg-truering-blue text-white"
                          )}
                        >
                          <Icon className="h-5 w-5" stroke={1.5} />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white">{feature.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-white/70">{feature.body}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-white/10 bg-white p-4 shadow-xl md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-truering-green text-white">
                    <IconCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">Connected</div>
                    <div className="text-xs text-graphite">Real-time sync</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // service (default)
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-mist/30 to-truering-orange-50/20 px-6 pt-16 pb-20 md:pt-24 md:pb-32">
      <svg
        className="pointer-events-none absolute -right-20 top-20 h-96 w-96 text-truering-orange/5"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="80" fill="currentColor" />
      </svg>
      <svg
        className="pointer-events-none absolute -left-16 bottom-10 h-80 w-80 text-truering-blue/5"
        viewBox="0 0 200 200"
      >
        <rect x="20" y="20" width="160" height="160" rx="40" fill="currentColor" />
      </svg>

      <div className="relative mx-auto max-w-7xl md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-truering-orange-100 bg-truering-orange-50/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-truering-orange-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-truering-orange animate-pulse" />
              {eyebrow}
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite md:text-xl">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-truering-orange px-8 py-4 text-sm font-bold text-white shadow-[0_16px_40px_-12px_rgba(255,85,0,0.5)] transition-all hover:bg-truering-orange-600 hover:scale-[1.02]"
              >
                {ctaLabel} <IconArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/#features"
                className="inline-flex items-center gap-2 rounded-full border-2 border-truering-blue px-8 py-4 text-sm font-bold text-truering-blue-600 transition-all hover:bg-truering-blue hover:text-white"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              {[
                { label: "Happy Teams", value: "500+" },
                { label: "Calls Handled", value: "10M+" },
                { label: "Uptime", value: "99.9%" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-truering-orange-100 text-truering-orange">
                    <IconStar className="h-5 w-5" fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">{item.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-graphite">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-truering-orange/20 to-truering-blue/20 blur-3xl" />
            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] border border-hairline shadow-[0_30px_80px_-24px_rgba(7,30,48,0.25)]">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
                  alt={title}
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>

              <div className="absolute -left-6 top-8 hidden rounded-2xl border border-hairline bg-white p-4 shadow-lg md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-truering-orange-100 text-truering-orange">
                    <IconPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">Live Calls</div>
                    <div className="text-xs text-graphite">Connected now</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-8 hidden rounded-2xl border border-hairline bg-white p-4 shadow-lg md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-truering-blue-100 text-truering-blue-600">
                    <IconChartBar className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">Real-time</div>
                    <div className="text-xs text-graphite">Analytics dashboard</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

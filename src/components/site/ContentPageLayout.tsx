"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FAQSection } from "./FAQSection";
import { PageHero } from "./PageHero";
import {
  IconArrowRight,
  IconChevronDown,
  IconCheck,
  IconPhone,
  IconHeadphones,
  IconChartBar,
  IconCloud,
  IconShield,
  IconBolt,
  IconUsers,
  IconTarget,
  IconRoute,
  IconSettingsAutomation,
  IconDeviceDesktop,
  IconMessage,
  IconMicrophone,
  IconTrendingUp,
  IconWorld,
  IconClock,
  IconRobot,
  IconFileText,
  IconLink,
  IconPlayerPlay,
  IconMouse,
  IconHeadset,
  IconHeartPlus,
  IconSparkles,
  TablerIcon,
} from "@tabler/icons-react";

interface ContentPageLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  heroTitle: string;
  overview: string;
  stats: string[];
  features: Array<{ title: string; body: string }>;
  benefits: string[];
  relatedItems: Array<{ title: string; href: string; type: string }>;
  ctaLabel?: string;
  keywords?: string[];
  faqItems?: Array<{ question: string; answer: string }>;
  variant?: "service" | "industry" | "integration";
}

const iconMap: Record<string, TablerIcon> = {
  phone: IconPhone,
  call: IconPhone,
  dial: IconPhone,
  dialer: IconPhone,
  inbound: IconHeadphones,
  outbound: IconPhone,
  ivr: IconRoute,
  routing: IconRoute,
  route: IconRoute,
  crm: IconUsers,
  lead: IconTarget,
  management: IconSettingsAutomation,
  automation: IconBolt,
  workflow: IconSettingsAutomation,
  analytics: IconChartBar,
  report: IconChartBar,
  dashboard: IconChartBar,
  cloud: IconCloud,
  secure: IconShield,
  recording: IconMicrophone,
  record: IconMicrophone,
  monitor: IconHeadset,
  tracking: IconTrendingUp,
  track: IconTrendingUp,
  global: IconWorld,
  real: IconClock,
  live: IconClock,
  ai: IconRobot,
  bot: IconRobot,
  summary: IconFileText,
  integration: IconLink,
  integrate: IconLink,
  predictive: IconPlayerPlay,
  auto: IconPlayerPlay,
  power: IconBolt,
  click: IconMouse,
  telephony: IconDeviceDesktop,
  communication: IconMessage,
  queue: IconLink,
  agent: IconUsers,
  campaign: IconChartBar,
};

function getFeatureIcon(title: string): TablerIcon {
  const lower = title.toLowerCase();
  for (const key of Object.keys(iconMap)) {
    if (lower.includes(key)) return iconMap[key]!;
  }
  return IconSparkles;
}

function FeatureCard({ feature, index }: { feature: { title: string; body: string }; index: number }) {
  const Icon = getFeatureIcon(feature.title);
  const isBlue = index % 2 === 1;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-hairline bg-white p-7 shadow-[0_4px_20px_-8px_rgba(7,30,48,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgba(7,30,48,0.14)] hover:border-truering-orange/30">
      {/* Subtle gradient background on hover */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          isBlue
            ? "bg-gradient-to-br from-truering-blue-50/60 to-transparent"
            : "bg-gradient-to-br from-truering-orange-50/60 to-transparent"
        )}
      />
      <div className="relative">
        <div
          className={cn(
            "mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110",
            isBlue
              ? "bg-truering-blue-100 text-truering-blue-600"
              : "bg-truering-orange-100 text-truering-orange-600"
          )}
        >
          <Icon className="h-7 w-7" stroke={1.5} />
        </div>
        <h4 className="text-lg font-bold text-ink mb-3 group-hover:text-truering-orange transition-colors">
          {feature.title}
        </h4>
        <p className="text-sm leading-7 text-graphite">{feature.body}</p>
      </div>
    </div>
  );
}

function BenefitRow({ benefit, index }: { benefit: string; index: number }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      <div
        className={cn(
          "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          index % 2 === 0 ? "bg-truering-orange" : "bg-truering-blue"
        )}
      >
        <IconCheck className="h-4 w-4 text-white" stroke={2.5} />
      </div>
      <p className="text-sm font-medium leading-relaxed text-white">{benefit}</p>
    </div>
  );
}

export function ContentPageLayout({
  eyebrow,
  title,
  description,
  heroTitle,
  overview,
  stats,
  features,
  benefits,
  relatedItems,
  ctaLabel = "Book a Free Demo",
  keywords,
  faqItems,
  variant = "service",
}: ContentPageLayoutProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-ink">
      {/* Breadcrumb */}
      <div className="border-b border-hairline/60 bg-mist/30 pt-18">
        <div className="mx-auto max-w-7xl px-6 py-3 md:px-8">
          <div className="flex items-center gap-2 text-xs text-graphite">
            <Link href="/" className="hover:text-truering-orange transition-colors">
              Home
            </Link>
            <IconChevronDown className="h-3 w-3 -rotate-90" />
            <span className="text-ink font-medium truncate">{title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <PageHero
        variant={variant}
        eyebrow={eyebrow}
        title={title}
        heroTitle={heroTitle}
        description={description}
        features={features}
        ctaLabel={ctaLabel}
      />

      {/* Stats Bar */}
      <section className="relative z-10 -mt-10 px-6">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="grid gap-4 rounded-[2rem] border border-hairline bg-white p-6 shadow-[0_20px_60px_-24px_rgba(7,30,48,0.15)] sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => {
              const isBlue = i % 2 === 1;
              return (
                <div
                  key={stat}
                  className={cn(
                    "group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5",
                    isBlue
                      ? "bg-truering-blue-50/60 border border-truering-blue-100"
                      : "bg-truering-orange-50/60 border border-truering-orange-100"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-110",
                      isBlue ? "bg-truering-blue text-white" : "bg-truering-orange text-white"
                    )}
                  >
                    {isBlue ? <IconCheck className="h-6 w-6" /> : <IconBolt className="h-6 w-6" />}
                  </div>
                  <p className="text-sm font-bold text-ink leading-tight">{stat}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-truering-orange/10 to-truering-blue/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-hairline shadow-[0_24px_60px_-24px_rgba(7,30,48,0.18)]">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                  alt={`${title} overview`}
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-truering-orange">
                Overview
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
                {title} built for modern teams
              </h2>
              <p className="mt-6 text-lg leading-8 text-graphite">{overview}</p>
              <div className="mt-8 grid gap-4">
                {benefits.slice(0, 3).map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-truering-orange text-white">
                      <IconCheck className="h-3.5 w-3.5" stroke={2.5} />
                    </div>
                    <span className="text-base font-medium text-ink">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break / Team Image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-truering-navy" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-white">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Your team, connected and productive
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
                Give agents the context, tools, and automation they need to deliver faster, more personal customer conversations every single day.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  { icon: IconHeadphones, text: "Inbound & Outbound" },
                  { icon: IconCloud, text: "Cloud-Based" },
                  { icon: IconShield, text: "Enterprise Security" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                    <item.icon className="h-4 w-4" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-mist/30 px-6 py-20 md:py-28 border-y border-hairline">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-truering-blue">
              Core Features
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Everything you need from {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite">
              Powerful, easy-to-use capabilities designed to help your team work faster, close more deals, and keep customers happy.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="rounded-[2.5rem] bg-gradient-to-br from-truering-navy via-ink to-truering-navy p-8 md:p-12 text-white shadow-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white/90 border border-white/10">
                <IconHeartPlus className="h-3.5 w-3.5" />
                Why Truering
              </div>
              <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">
                Why teams choose Truering for {title.toLowerCase()}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Built for teams that need reliable, scalable, and easy-to-manage customer conversations.
              </p>
              <div className="mt-8 grid gap-3">
                {benefits.map((benefit, i) => (
                  <BenefitRow key={benefit} benefit={benefit} index={i} />
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-truering-orange">
                  Outcomes
                </span>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
                  Built for results that scale
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { label: "Faster Response", value: "2x", desc: "Quicker customer replies" },
                  { label: "Agent Output", value: "40%", desc: "More conversations per day" },
                  { label: "Call Quality", value: "95%", desc: "Consistent service delivery" },
                  { label: "Setup Time", value: "Hours", desc: "Not weeks or months" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-hairline bg-white p-7 shadow-[0_4px_20px_-8px_rgba(7,30,48,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(7,30,48,0.12)]"
                  >
                    <div className="text-4xl font-bold text-truering-orange">{item.value}</div>
                    <div className="mt-2 text-base font-bold text-ink">{item.label}</div>
                    <div className="mt-1 text-sm text-graphite">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqItems && faqItems.length > 0 && (
        <FAQSection
          eyebrow="Frequently Asked Questions"
          title={
            <>
              Common questions about <span className="text-truering-orange">{title}</span>
            </>
          }
          description={`Get quick answers about ${title.toLowerCase()} and how Truering helps your team.`}
          faqItems={faqItems}
        />
      )}

      {/* Related Pages */}
      {relatedItems.length > 0 && (
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl md:px-8">
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-truering-orange">
                Related Solutions
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Explore more Truering solutions
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative overflow-hidden rounded-3xl border border-hairline bg-white p-7 shadow-[0_4px_20px_-8px_rgba(7,30,48,0.08)] transition-all hover:-translate-y-1.5 hover:border-truering-orange/30 hover:shadow-[0_20px_40px_-16px_rgba(7,30,48,0.14)]"
                >
                  <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-truering-orange to-truering-blue transition-all duration-300 group-hover:w-full" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-truering-orange">
                    {item.type}
                  </p>
                  <h4 className="mt-3 text-xl font-bold text-ink group-hover:text-truering-orange transition-colors">
                    {item.title}
                  </h4>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-graphite group-hover:text-truering-orange transition-colors">
                    Learn more <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SEO Keywords */}
      {keywords && keywords.length > 0 && (
        <section className="bg-mist/30 px-6 py-12 border-t border-hairline">
          <div className="mx-auto max-w-7xl md:px-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-truering-blue mb-4">
              SEO Keywords
            </h3>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-hairline bg-white px-4 py-1.5 text-sm text-graphite"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section id="cta" className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-tr from-truering-orange via-[#fd732b] to-[#fdb94b] px-8 py-20 text-center shadow-[0_24px_60px_-24px_rgba(255,85,0,0.45)] md:px-16 md:py-24">
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#fdb94b]/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-truering-orange/50 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] bg-[size:20px_20px]" />
            
            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Ready to upgrade your {title.toLowerCase()}?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                Book a free demo and see how Truering helps your team close more deals, resolve tickets faster, and grow with confidence.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-truering-orange shadow-lg transition-transform hover:scale-[1.03]"
                >
                  {ctaLabel} <IconArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-truering-orange"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

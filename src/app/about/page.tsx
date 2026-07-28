import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  IconUsers,
  IconTarget,
  IconEye,
  IconCheck,
  IconShieldCheck,
  IconRocket,
  IconHeadset,
  IconChartBar,
  IconBulb,
  IconHeartHandshake,
  IconClock,
  IconPhone,
  IconMail,
  IconMapPin,
  IconBuilding,
  IconAward,
  IconTrendingUp,
  IconWorld,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "About Us | Truering by Brighto Credit Information Pvt. Ltd.",
  description:
    "Learn about Truering, India's smart telecalling CRM software built by Brighto Credit Information Pvt. Ltd. to simplify sales and support conversations.",
};

const stats = [
  { value: "10+", label: "Years of Industry Experience", icon: IconAward },
  { value: "500+", label: "Teams Onboarded", icon: IconUsers },
  { value: "50M+", label: "Calls Processed", icon: IconPhone },
  { value: "99.9%", label: "Uptime SLA", icon: IconClock },
];

const values = [
  {
    icon: IconHeartHandshake,
    title: "Customer First",
    body: "Every feature we build starts with the real problems faced by sales and support teams on the ground.",
    color: "orange",
  },
  {
    icon: IconShieldCheck,
    title: "Security & Trust",
    body: "We follow strict data protection practices, encryption, and compliance standards to keep your information safe.",
    color: "blue",
  },
  {
    icon: IconBulb,
    title: "Continuous Innovation",
    body: "Our roadmap is driven by customer feedback, market needs, and emerging communication technologies.",
    color: "orange",
  },
  {
    icon: IconChartBar,
    title: "Transparency",
    body: "Clear pricing, honest communication, and straightforward reporting — no hidden charges or surprises.",
    color: "blue",
  },
  {
    icon: IconUsers,
    title: "Collaboration",
    body: "We believe great software is built when product, engineering, and customers work closely together.",
    color: "orange",
  },
  {
    icon: IconRocket,
    title: "Accountability",
    body: "We take ownership of our platform's reliability, support quality, and your success with Truering.",
    color: "blue",
  },
];

const highlights = [
  "Built specifically for Indian sales and support workflows",
  "Cloud-based, scalable, and secure infrastructure",
  "Seamless integrations with CRMs, WhatsApp, and telephony providers",
  "Dedicated onboarding and customer success support",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-ink">
      {/* Breadcrumb */}
      <div className="border-b border-hairline/60 bg-white pt-18">
        <div className="mx-auto max-w-7xl px-6 py-3 md:px-8">
          <div className="flex items-center gap-2 text-xs text-graphite">
            <Link href="/" className="hover:text-truering-orange transition-colors">
              Home
            </Link>
            <span className="text-graphite/50">/</span>
            <span className="text-ink font-medium">About Us</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-truering-navy px-6 py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
            alt="Truering team collaboration"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-truering-navy via-truering-navy/95 to-truering-navy/75" />
        </div>
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-truering-orange/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-truering-blue/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-truering-orange" />
                About Truering
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Powering Smarter Customer Conversations
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg lg:mx-0">
                Truering is a modern telecalling CRM software built by Brighto Credit Information Pvt.
                Ltd. to help Indian sales and support teams connect faster, manage leads better, and
                close more deals from one simple platform.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-truering-orange px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-truering-orange-600 hover:shadow-[0_16px_40px_-12px_rgba(255,85,0,0.45)]"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/#features"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
                >
                  Explore Features
                </Link>
              </div>
            </div>

            <div className="relative hidden h-[420px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:block">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                alt="Team working together at Brighto office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-12 px-6">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => {
              const isBlue = idx % 2 === 1;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-hairline bg-white p-6 shadow-[0_8px_30px_-12px_rgba(7,30,48,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(7,30,48,0.16)]"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      isBlue
                        ? "bg-truering-blue-100 text-truering-blue-600"
                        : "bg-truering-orange-100 text-truering-orange"
                    }`}
                  >
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-3xl font-bold tracking-tight text-ink">{stat.value}</h3>
                  <p className="mt-1 text-sm text-graphite">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-mist/30 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-xl md:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
                alt="Brighto Credit Information office environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-truering-orange">
                Our Story
              </span>
              <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
                Built for Indian Sales & Support Teams
              </h2>
              <p className="text-base leading-relaxed text-graphite">
                Truering was born from a simple observation: Indian businesses were juggling too many
                tools just to talk to their customers. Spreadsheets, dialers, CRMs, WhatsApp, and
                reporting dashboards rarely talked to each other, leading to lost leads, wasted time,
                and frustrated teams.
              </p>
              <p className="text-base leading-relaxed text-graphite">
                Backed by{" "}
                <strong>Brighto Credit Information Pvt. Ltd.</strong>, we set out to build a single,
                reliable telecalling CRM software that brings inbound and outbound calling, lead
                management, automation, and analytics into one easy-to-use platform. Today, Truering
                powers sales and support operations across real estate, education, healthcare, BFSI,
                insurance, e-commerce, and lending businesses.
              </p>
              <div className="grid gap-4 pt-2 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-truering-orange-100 text-truering-orange">
                      <IconCheck className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-truering-blue p-8 text-white shadow-[0_8px_40px_-16px_rgba(0,173,249,0.35)] md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <IconTarget className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">Our Mission</h3>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                To empower every customer-facing team in India with simple, reliable, and affordable
                telecalling CRM software that helps them build stronger relationships, faster
                follow-ups, and higher conversions.
              </p>
            </div>

            <div className="rounded-3xl bg-truering-orange p-8 text-white shadow-[0_8px_40px_-16px_rgba(255,85,0,0.35)] md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <IconEye className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">Our Vision</h3>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                To become India&apos;s most trusted communication platform for sales and support teams,
                known for reliability, compliance, and customer success at every scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-mist/30 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-truering-orange">
              What We Stand For
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-base leading-relaxed text-graphite">
              These principles guide every product decision, customer interaction, and business choice
              we make at Truering.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const isBlue = value.color === "blue";
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-hairline bg-white p-8 shadow-[0_8px_30px_-12px_rgba(7,30,48,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(7,30,48,0.16)]"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      isBlue
                        ? "bg-truering-blue-100 text-truering-blue-600"
                        : "bg-truering-orange-100 text-truering-orange"
                    }`}
                  >
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">{value.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Truering */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-truering-blue">
                Why Truering
              </span>
              <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
                A Platform That Works the Way You Do
              </h2>
              <p className="text-base leading-relaxed text-graphite">
                We understand the speed at which Indian businesses operate. Truering is designed to keep
                up with high call volumes, multi-channel outreach, strict compliance needs, and real-time
                reporting expectations — without the complexity of enterprise software.
              </p>
              <div className="grid gap-6 pt-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-hairline bg-mist/40 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-truering-orange-100 text-truering-orange">
                    <IconHeadset className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 text-base font-bold text-ink">Voice-First Design</h4>
                  <p className="mt-2 text-sm text-graphite">
                    Inbound, outbound, auto-dialers, and IVR — all built around the call experience.
                  </p>
                </div>
                <div className="rounded-2xl border border-hairline bg-mist/40 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-truering-blue-100 text-truering-blue-600">
                    <IconTrendingUp className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 text-base font-bold text-ink">Built for Scale</h4>
                  <p className="mt-2 text-sm text-graphite">
                    From small teams to large call centers, the platform grows with your business.
                  </p>
                </div>
                <div className="rounded-2xl border border-hairline bg-mist/40 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-truering-blue-100 text-truering-blue-600">
                    <IconBuilding className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 text-base font-bold text-ink">India-Focused</h4>
                  <p className="mt-2 text-sm text-graphite">
                    Local compliance, regional support, and pricing designed for Indian businesses.
                  </p>
                </div>
                <div className="rounded-2xl border border-hairline bg-mist/40 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-truering-orange-100 text-truering-orange">
                    <IconWorld className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 text-base font-bold text-ink">Connected Ecosystem</h4>
                  <p className="mt-2 text-sm text-graphite">
                    Integrations with HubSpot, Zoho, Salesforce, WhatsApp, and custom APIs.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-xl md:h-[540px]">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop"
                alt="Truering dashboard analytics"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/95 p-6 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <IconCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">Trusted by Growing Teams</p>
                    <p className="text-xs text-graphite">
                      Startups, NBFCs, real estate firms, and EdTech companies rely on Truering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="bg-truering-navy px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-truering-orange" />
                Get in Touch
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Transform Your Customer Conversations?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
                Whether you need a demo, a custom integration, or a quick pricing discussion, our team is
                here to help you make the right choice.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-truering-orange px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-truering-orange-600 hover:shadow-[0_16px_40px_-12px_rgba(255,85,0,0.45)]"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+919311463901"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
                >
                  <IconPhone className="h-4 w-4" /> Call +91 9311463901
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-truering-orange/20 text-truering-orange">
                  <IconMail className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-sm font-bold uppercase tracking-wider text-white/90">Email</h4>
                <a
                  href="mailto:support@brightoindia.com"
                  className="mt-2 block text-base font-bold text-white hover:text-truering-orange transition-colors"
                >
                  support@brightoindia.com
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-truering-blue/20 text-truering-blue">
                  <IconPhone className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-sm font-bold uppercase tracking-wider text-white/90">Phone</h4>
                <a
                  href="tel:+919311463901"
                  className="mt-2 block text-base font-bold text-white hover:text-truering-orange transition-colors"
                >
                  +91 9311463901
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:col-span-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-truering-orange/20 text-truering-orange">
                  <IconMapPin className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-sm font-bold uppercase tracking-wider text-white/90">Office</h4>
                <p className="mt-2 text-base font-bold text-white">
                  C-83, 1st Floor, Sector-2, Noida, Uttar Pradesh 201301, India
                </p>
                <p className="mt-1 text-sm text-white/60">Mon-Sat, 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

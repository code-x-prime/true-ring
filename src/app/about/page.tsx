import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  IconUsers,
  IconTarget,
  IconEye,
  IconCheck,
  IconShieldCheck,
  IconChartBar,
  IconBulb,
  IconHeartHandshake,
  IconPhone,
  IconMail,
  IconMapPin,
  IconAward,
  IconSparkles,
  IconHandClick,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "About Us | Truering by Brighto Credit Information Pvt. Ltd.",
  description:
    "Learn about Truering, India's smart telecalling CRM software built by Brighto Credit Information Pvt. Ltd. to simplify sales and support conversations.",
};

const storyCards = [
  {
    icon: IconHandClick,
    title: "Inspired by Everyday Business Challenges",
    body: "Businesses have a right to technology that works in their favor and isn't used against them. That philosophy made us develop communication solutions that are easy to use, dependable and business-oriented.",
    color: "orange",
  },
  {
    icon: IconUsers,
    title: "Growing with Every Customer We Serve",
    body: "Each customer presents its own challenges and opportunities. The input and confidence they offer still motivate us to develop a superior communication experience on a daily basis.",
    color: "blue",
  },
  {
    icon: IconBulb,
    title: "Innovation with Purpose",
    body: "Technology does not have a meaning unless it resolves actual issues. All our improvements are geared toward helping businesses communicate better.",
    color: "orange",
  },
  {
    icon: IconSparkles,
    title: "Looking Toward the Future",
    body: "As business communication continues to evolve, we are determined to develop solutions that enable organizations to gain visibility and grow indefinitely.",
    color: "blue",
  },
];

const values = [
  {
    icon: IconHeartHandshake,
    title: "Customer First",
    body: "All of our decisions start with the provision of greater customer experience.",
    color: "orange",
  },
  {
    icon: IconBulb,
    title: "Innovation",
    body: "We are willing to adopt purposeful innovation that addresses actual communication dilemmas.",
    color: "blue",
  },
  {
    icon: IconShieldCheck,
    title: "Trust",
    body: "Transparency, security, and accountability are built as the foundation of strong relationships.",
    color: "orange",
  },
  {
    icon: IconChartBar,
    title: "Excellence",
    body: "We are quality-driven, consistent and always improving.",
    color: "blue",
  },
  {
    icon: IconUsers,
    title: "Collaboration",
    body: "People, technology, and businesses combine their efforts to make great ideas grow.",
    color: "orange",
  },
];

const certifications = [
  {
    icon: IconShieldCheck,
    title: "ISO 27001 Certified",
    body: "Devoted to the internationally accepted information security management practices.",
  },
  {
    icon: IconAward,
    title: "ISO 9001 Certified",
    body: "Driven by ensuring consistency in quality by adopting organized management procedures.",
  },
  {
    icon: IconCheck,
    title: "SOC 2 Audited",
    body: "Showing efficient and safe operational management in terms of security and data protection.",
  },
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
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-truering-orange" />
              About Truering
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Connecting Businesses Through Smarter Conversations
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
              Every interaction with customers counts. At Truering, we help companies build better connections with smart cloud communication services that streamline communication, enhance collaboration, and drive smooth customer experiences. Since 2015, we have focused on creating secure, scalable, and reliable communication technology to ensure organizations remain connected, responsive, and prepared for tomorrow.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-white/60">
              <span>Established Since 2015</span>
              <span className="h-1 w-1 rounded-full bg-truering-orange" />
              <span>ISO 27001 Certified</span>
              <span className="h-1 w-1 rounded-full bg-truering-orange" />
              <span>ISO 9001 Certified</span>
              <span className="h-1 w-1 rounded-full bg-truering-orange" />
              <span>SOC 2 Audited</span>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-truering-orange px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-truering-orange-600 hover:shadow-[0_16px_40px_-12px_rgba(255,85,0,0.45)]"
              >
                Book a Personalized Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
              >
                Talk to Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-mist/30 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-truering-orange">
              Our Story
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Every Great Relationship Begins with a Conversation
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite">
              Behind every great business is a good conversation. When we started Truering, we believed people could be closer through communication, not barriers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {storyCards.map((card) => {
              const isBlue = card.color === "blue";
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-hairline bg-white p-8 shadow-[0_8px_30px_-12px_rgba(7,30,48,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(7,30,48,0.16)]"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      isBlue
                        ? "bg-truering-blue-100 text-truering-blue-600"
                        : "bg-truering-orange-100 text-truering-orange"
                    }`}
                  >
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-truering-orange">
              Our Values
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              What Drives Us Forward
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const isBlue = value.color === "blue";
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-hairline bg-mist/40 p-8 transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(7,30,48,0.16)]"
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

      {/* Certification & Compliance */}
      <section className="bg-mist/30 px-6 py-20 md:py-28 border-y border-hairline">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-truering-blue">
              Certification & Compliance
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Security & Quality You Can Trust
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-2xl border border-hairline bg-white p-8 text-center shadow-[0_8px_30px_-12px_rgba(7,30,48,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(7,30,48,0.16)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-truering-blue-100 text-truering-blue-600">
                  <cert.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{cert.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{cert.body}</p>
              </div>
            ))}
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
                To enable businesses to have secure, intelligent and scalable communication solutions that can help ease contact with customers, boost their functioning and enable sustainable business running.
              </p>
            </div>

            <div className="rounded-3xl bg-truering-orange p-8 text-white shadow-[0_8px_40px_-16px_rgba(255,85,0,0.35)] md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <IconEye className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">Our Vision</h3>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                A global communication platform that builds trusted organizational relationships with customers through innovation, reliability, and connected digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-truering-navy px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-truering-orange" />
              Get Started
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Transform Your Business Communication?
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-base leading-relaxed text-white/70">
              Find out how Truering can enable your business to communicate more easily, engage customers more effectively and streamline operations using a single smart cloud communication platform.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-truering-orange px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-truering-orange-600 hover:shadow-[0_16px_40px_-12px_rgba(255,85,0,0.45)]"
              >
                Book a Free Demo
              </Link>
              <a
                href="tel:+919311463901"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
              >
                <IconPhone className="h-4 w-4" /> Speak with Our Product Experts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl md:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-hairline bg-mist/40 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-truering-orange-100 text-truering-orange">
                <IconMail className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-sm font-bold uppercase tracking-wider text-graphite">Email</h4>
              <a
                href="mailto:support@brightoindia.com"
                className="mt-2 block text-base font-bold text-ink hover:text-truering-orange transition-colors"
              >
                support@brightoindia.com
              </a>
            </div>
            <div className="rounded-2xl border border-hairline bg-mist/40 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-truering-blue-100 text-truering-blue-600">
                <IconPhone className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-sm font-bold uppercase tracking-wider text-graphite">Phone</h4>
              <a
                href="tel:+919311463901"
                className="mt-2 block text-base font-bold text-ink hover:text-truering-orange transition-colors"
              >
                +91 9311463901
              </a>
            </div>
            <div className="rounded-2xl border border-hairline bg-mist/40 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-truering-orange-100 text-truering-orange">
                <IconMapPin className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-sm font-bold uppercase tracking-wider text-graphite">Office</h4>
              <p className="mt-2 text-sm font-bold text-ink">
                C-83, 1st Floor, Sector-2, Noida, UP 201301
              </p>
              <p className="mt-1 text-xs text-graphite">Mon-Sat, 9:00 AM - 6:00 PM IST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

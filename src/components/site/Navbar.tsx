"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { servicePages, industryPages, integrationPages } from "@/lib/content-pages";
import { cn } from "@/lib/utils";
import {
  IconMenu2,
  IconX,
  IconChevronDown,
  IconHeadphones,
  IconPhone,
  IconPhoneCall,
  IconCloud,
  IconBuilding,
  IconRoute,
  IconPlayerPlay,
  IconTrendingUp,
  IconBolt,
  IconMouse,
  IconMicrophone,
  IconTarget,
  IconHeartPlus,
  IconBuildingBank,
  IconShield,
  IconShoppingCart,
  IconSchool,
  IconHome,
  IconArrowRight,
  IconUsers,
  IconMapPin,
  IconCode,
  IconBrandWhatsapp,
  IconLink,
} from "@tabler/icons-react";

const topLevelLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/career", label: "Careers" },
];

const serviceIconMap: Record<string, React.ElementType> = {
  "inbound-call-center-crm-software": IconHeadphones,
  "outbound-call-center-crm-software": IconPhone,
  "cloud-telephony-crm": IconCloud,
  "telecalling-crm-software": IconPhoneCall,
  "ivr-management-software": IconRoute,
  "predictive-dialer-software": IconPlayerPlay,
  "call-tracking-crm": IconTrendingUp,
  "power-dialer-software": IconBolt,
  "click-to-call-software": IconMouse,
  "auto-dialer-crm": IconPlayerPlay,
  "call-recording-software": IconMicrophone,
  "lead-management-software": IconTarget,
  "virtual-number-solution": IconMapPin,
  "crm-for-telecalling-teams": IconUsers,
};

const industryIconMap: Record<string, React.ElementType> = {
  healthcare: IconHeartPlus,
  insurance: IconShield,
  education: IconSchool,
  "real-estate": IconHome,
  "bfsi-telecalling-crm": IconBuildingBank,
  "ecommerce-call-center-crm": IconShoppingCart,
  "loan-and-lending-crm": IconBuildingBank,
  "recruitment-and-staffing": IconUsers,
  "travel-and-hospitality": IconPhone,
};

const integrationIconMap: Record<string, React.ElementType> = {
  "api-integration": IconCode,
  "whatsapp-integration": IconBrandWhatsapp,
  "hubspot-integration": IconLink,
  "zoho-crm-integration": IconLink,
  "salesforce-integration": IconCloud,
  "leadsquared-integration": IconLink,
  "google-sheets-integration": IconLink,
};

function ServiceIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = serviceIconMap[slug] ?? IconPhone;
  return <Icon className={className} />;
}

function IndustryIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = industryIconMap[slug] ?? IconBuilding;
  return <Icon className={className} />;
}

function IntegrationIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = integrationIconMap[slug] ?? IconLink;
  return <Icon className={className} />;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openDropdown = (key: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(key);
  };

  const closeDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleDropdown = (key: string) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  const serviceLinks = servicePages.map((page) => ({
    href: `/services/${page.slug}`,
    label: page.title,
    slug: page.slug,
    eyebrow: page.eyebrow,
  }));

  const industryLinks = industryPages.map((page) => ({
    href: `/industries/${page.slug}`,
    label: page.title,
    slug: page.slug,
    eyebrow: page.eyebrow,
  }));

  const integrationLinks = integrationPages.map((page) => ({
    href: `/integrations/${page.slug}`,
    label: page.title,
    slug: page.slug,
    eyebrow: page.eyebrow,
  }));

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-hairline shadow-[0_8px_30px_-12px_rgba(7,30,48,0.12)]"
          : "bg-white lg:bg-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Truering" width={150} height={44} className="h-9 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {topLevelLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm font-semibold text-ink hover:text-truering-orange transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-truering-orange after:transition-all hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown("services")}
            onMouseLeave={closeDropdown}
          >
            <button
              onClick={() => toggleDropdown("services")}
              className="flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-truering-orange transition-colors"
            >
              Services
              <IconChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  activeDropdown === "services" && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200",
                activeDropdown === "services"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-3 pointer-events-none"
              )}
            >
              <div className="w-[44rem] rounded-3xl border border-hairline/80 bg-white p-6 shadow-[0_24px_60px_-16px_rgba(7,30,48,0.2)] overflow-hidden">
                <div className="grid grid-cols-[1.2fr_1fr] gap-6">
                  {/* Left: Featured card */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-truering-navy to-ink p-6 text-white">
                    <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-truering-orange/20 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-truering-blue/20 blur-2xl" />
                    <div className="relative">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90 border border-white/10">
                        <IconPhone className="h-3.5 w-3.5" />
                        Truering Platform
                      </span>
                      <h3 className="mt-4 text-xl font-bold leading-tight">
                        One platform for every customer conversation
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-white/70">
                        Inbound, outbound, CRM, dialers, and analytics — all working together.
                      </p>
                      <Link
                        href="/services/telecalling-crm-software"
                        className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-truering-orange px-4 py-2 text-xs font-bold text-white transition-transform hover:scale-105"
                      >
                        Explore Platform <IconArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Services grid */}
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-graphite">
                      <span className="h-1.5 w-1.5 rounded-full bg-truering-orange" />
                      All Services
                    </div>
                    <div className="grid grid-cols-1 gap-1 max-h-[26rem] overflow-y-auto pr-1 dropdown-scroll">
                      {serviceLinks.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-truering-orange-50"
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mist text-truering-orange transition-colors group-hover:bg-truering-orange group-hover:text-white">
                            <ServiceIcon slug={l.slug} className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-ink group-hover:text-truering-orange transition-colors">
                              {l.label}
                            </p>
                            <p className="text-[10px] text-graphite">{l.eyebrow}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown("industries")}
            onMouseLeave={closeDropdown}
          >
            <button
              onClick={() => toggleDropdown("industries")}
              className="flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-truering-orange transition-colors"
            >
              Industries
              <IconChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  activeDropdown === "industries" && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200",
                activeDropdown === "industries"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-3 pointer-events-none"
              )}
            >
              <div className="w-[44rem] rounded-3xl border border-hairline/80 bg-white p-6 shadow-[0_24px_60px_-16px_rgba(7,30,48,0.2)] overflow-hidden">
                <div className="grid grid-cols-[1.2fr_1fr] gap-6">
                  {/* Left: Featured card */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-truering-blue to-truering-navy p-6 text-white">
                    <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-truering-orange/20 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-truering-blue/20 blur-2xl" />
                    <div className="relative">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90 border border-white/10">
                        <IconBuilding className="h-3.5 w-3.5" />
                        Industries We Serve
                      </span>
                      <h3 className="mt-4 text-xl font-bold leading-tight">
                        Tailored communication for every business vertical
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-white/70">
                        Real estate, education, healthcare, insurance, BFSI, ecommerce, and lending — all powered by one CRM.
                      </p>
                      <Link
                        href="/industries/real-estate"
                        className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-truering-orange px-4 py-2 text-xs font-bold text-white transition-transform hover:scale-105"
                      >
                        Explore Industries <IconArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Industries grid */}
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-graphite">
                      <span className="h-1.5 w-1.5 rounded-full bg-truering-blue" />
                      All Industries
                    </div>
                    <div className="grid grid-cols-1 gap-1 max-h-[26rem] overflow-y-auto pr-1 dropdown-scroll">
                      {industryLinks.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-truering-blue-50"
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mist text-truering-blue transition-colors group-hover:bg-truering-blue group-hover:text-white">
                            <IndustryIcon slug={l.slug} className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-ink group-hover:text-truering-blue-600 transition-colors">
                              {l.label}
                            </p>
                            <p className="text-[10px] text-graphite">{l.eyebrow}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integrations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown("integrations")}
            onMouseLeave={closeDropdown}
          >
            <button
              onClick={() => toggleDropdown("integrations")}
              className="flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-truering-orange transition-colors"
            >
              Integrations
              <IconChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  activeDropdown === "integrations" && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200",
                activeDropdown === "integrations"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-3 pointer-events-none"
              )}
            >
              <div className="w-[44rem] rounded-3xl border border-hairline/80 bg-white p-6 shadow-[0_24px_60px_-16px_rgba(7,30,48,0.2)] overflow-hidden">
                <div className="grid grid-cols-[1.2fr_1fr] gap-6">
                  {/* Left: Featured card */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-truering-orange to-truering-orange-600 p-6 text-white">
                    <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-truering-blue/20 blur-2xl" />
                    <div className="relative">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90 border border-white/10">
                        <IconLink className="h-3.5 w-3.5" />
                        Integrations We Support
                      </span>
                      <h3 className="mt-4 text-xl font-bold leading-tight">
                        Connect Truering with the tools you already use
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-white/80">
                        APIs, WhatsApp, HubSpot, Zoho CRM, and Salesforce — all synced for smoother workflows.
                      </p>
                      <Link
                        href="/integrations/api-integration"
                        className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-truering-orange transition-transform hover:scale-105"
                      >
                        Explore Integrations <IconArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Integrations grid */}
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-graphite">
                      <span className="h-1.5 w-1.5 rounded-full bg-truering-orange" />
                      All Integrations
                    </div>
                    <div className="grid grid-cols-1 gap-1 max-h-[26rem] overflow-y-auto pr-1 dropdown-scroll">
                      {integrationLinks.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-truering-orange-50"
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mist text-truering-orange transition-colors group-hover:bg-truering-orange group-hover:text-white">
                            <IntegrationIcon slug={l.slug} className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-ink group-hover:text-truering-orange transition-colors">
                              {l.label}
                            </p>
                            <p className="text-[10px] text-graphite">{l.eyebrow}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Link */}
          <Link
            href="/contact"
            className="relative text-sm font-semibold text-ink hover:text-truering-orange transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-truering-orange after:transition-all hover:after:w-full"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/#cta"
            className="inline-flex items-center gap-2 rounded-full bg-truering-orange px-6 py-2.5 text-sm font-bold text-white shadow-[0_10px_28px_-10px_rgba(255,85,0,0.55)] hover:bg-truering-orange-600 hover:shadow-[0_16px_36px_-12px_rgba(255,85,0,0.6)] transition-all"
          >
            Get a Free Demo
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-hairline text-ink hover:bg-mist transition-colors"
          aria-label="Open menu"
        >
          <IconMenu2 className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-all duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={cn(
            "absolute right-0 top-0 h-[100dvh] w-full sm:w-88 bg-white p-6 shadow-2xl transition-transform duration-300 ease-out overflow-y-auto flex flex-col",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between">
            <Image src="/logo.png" alt="Truering" width={130} height={38} className="h-8 w-auto" />
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-hairline text-ink hover:bg-mist transition-colors"
              aria-label="Close menu"
            >
              <IconX className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-1">
            {topLevelLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-mist transition-colors"
              >
                {l.label}
              </Link>
            ))}

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => toggleDropdown("mobile-services")}
                className="w-full flex items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-mist transition-colors"
              >
                Services
                <IconChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    activeDropdown === "mobile-services" && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  activeDropdown === "mobile-services" ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="pl-4 flex flex-col gap-1 border-l-2 border-hairline ml-4 py-2">
                  {serviceLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-graphite hover:text-truering-orange hover:bg-mist transition-colors"
                    >
                      <ServiceIcon slug={l.slug} className="h-4 w-4" />
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Industries Accordion */}
            <div>
              <button
                onClick={() => toggleDropdown("mobile-industries")}
                className="w-full flex items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-mist transition-colors"
              >
                Industries
                <IconChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    activeDropdown === "mobile-industries" && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  activeDropdown === "mobile-industries" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="pl-4 flex flex-col gap-1 border-l-2 border-hairline ml-4 py-2">
                  {industryLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-graphite hover:text-truering-blue-600 hover:bg-mist transition-colors"
                    >
                      <IndustryIcon slug={l.slug} className="h-4 w-4" />
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Integrations Accordion */}
            <div>
              <button
                onClick={() => toggleDropdown("mobile-integrations")}
                className="w-full flex items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-mist transition-colors"
              >
                Integrations
                <IconChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    activeDropdown === "mobile-integrations" && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  activeDropdown === "mobile-integrations" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="pl-4 flex flex-col gap-1 border-l-2 border-hairline ml-4 py-2">
                  {integrationLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-graphite hover:text-truering-orange hover:bg-mist transition-colors"
                    >
                      <IntegrationIcon slug={l.slug} className="h-4 w-4" />
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-mist transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/#cta"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-truering-orange px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_28px_-10px_rgba(255,85,0,0.55)] hover:bg-truering-orange-600 transition-all"
            >
              Get a Free Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

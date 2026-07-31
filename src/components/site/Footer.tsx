"use client";

import Link from "next/link";
import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import Image from "next/image";
import { servicePages, industryPages, integrationPages } from "@/lib/content-pages";

export function Footer() {
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-hairline text-ink">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">

                    {/* Column 1: Logo, Description & Socials */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="rounded-xl inline-block">
                            <Image
                                src="/logo-2.png"
                                alt="Truering by Brighto Credit Information Pvt. Ltd."
                                width={220}
                                height={68}
                                className="h-10 w-auto"
                            />
                        </div>
                        <p className="text-xs sm:text-sm text-graphite leading-relaxed max-w-sm">
                            Telecalling CRM Software that brings inbound and outbound calls, dialers, lead management, and reporting into one smart system.
                        </p>

                        <div className="flex items-center gap-4 text-graphite pt-2">
                            <a
                                href="https://www.linkedin.com/company/brighto-credit-information-pvt.-ltd./"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-truering-orange transition-colors"
                                aria-label="LinkedIn"
                            >
                                <IconBrandLinkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:support@brightoindia.com"
                                className="hover:text-truering-orange transition-colors"
                                aria-label="Email"
                            >
                                <IconMail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Company Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-ink mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors">Contact</Link></li>
                            <li><Link href="/#features" className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors">Features</Link></li>
                            <li><Link href="/#faq" className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: All Services (split into 2 columns on large screens) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-ink mb-4">
                            Services
                        </h4>
                        <ul className="space-y-3 sm:columns-2 sm:gap-x-6">
                            {servicePages.map((page) => (
                                <li key={page.slug} className="break-inside-avoid">
                                    <Link
                                        href={`/services/${page.slug}`}
                                        className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors"
                                    >
                                        {page.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Industries */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-ink mb-4">
                            Industries
                        </h4>
                        <ul className="space-y-3">
                            {industryPages.map((page) => (
                                <li key={page.slug}>
                                    <Link
                                        href={`/industries/${page.slug}`}
                                        className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors"
                                    >
                                        {page.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Integrations */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-ink mb-4">
                            Integrations
                        </h4>
                        <ul className="space-y-3">
                            {integrationPages.map((page) => (
                                <li key={page.slug}>
                                    <Link
                                        href={`/integrations/${page.slug}`}
                                        className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors"
                                    >
                                        {page.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>



                {/* Copyright bottom bar */}
                <div className="mt-10 pt-8 border-t border-hairline flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-graphite">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span>Credify India is a product of Brighto Credit Information Private Limited.</span>
                        <span>•</span>
                        <span>© 2026 Brighto Credit Information Private Limited. All Rights Reserved.</span>
                        <span>•</span>
                        <span>
                            Design & Developed by{" "}
                            <a
                                href="https://groxmedia.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-truering-orange transition-colors font-semibold text-ink"
                            >
                                Grox Media
                            </a>
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/privacy-policy" className="hover:text-truering-orange transition-colors">Privacy Policy</Link>
                        <Link href="/terms-conditions" className="hover:text-truering-orange transition-colors">Terms & Conditions</Link>
                        <span>In the name of Brighto Credit Information Private Limited</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}


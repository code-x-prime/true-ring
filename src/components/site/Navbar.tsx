"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
    { href: "#features", label: "Features" },
    { href: "#industries", label: "Industries" },
    { href: "#integrations", label: "Integrations" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#faq", label: "FAQ" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${scrolled
                ? "bg-white/90 backdrop-blur border-b border-hairline shadow-[0_4px_20px_-12px_rgba(7,30,48,0.15)]"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
                <a href="#top" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Truering" width={140} height={40} className="h-8 w-auto" />
                </a>
                <nav className="hidden lg:flex items-center gap-8">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="text-sm font-medium text-ink hover:text-truering-orange transition-colors">
                            {l.label}
                        </a>
                    ))}
                </nav>
                <div className="hidden lg:block">
                    <a
                        href="#cta"
                        className="inline-flex items-center rounded-full bg-truering-orange px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_-10px_rgba(255,85,0,0.55)] hover:bg-truering-orange-600 hover:shadow-[0_16px_32px_-12px_rgba(255,85,0,0.6)] transition-all"
                    >
                        Get a Free Demo
                    </a>
                </div>
                <button
                    onClick={() => setOpen(true)}
                    className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink hover:bg-mist transition-colors"
                    aria-label="Open menu"
                >
                    <Menu className="h-5 w-5" />
                </button>
            </div>

            {/* Custom responsive mobile menu drawer */}
            <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                {/* Backdrop overlay */}
                <div className="absolute inset-0 bg-ink/30 backdrop-blur-sm" onClick={() => setOpen(false)} />

                {/* Drawer Container */}
                <div className={`absolute right-0 top-0 bottom-0 w-80 bg-white p-6 shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex items-center justify-between">
                        <Image src="/logo.png" alt="Truering" width={120} height={34} className="h-7 w-auto" />
                        <button
                            onClick={() => setOpen(false)}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink hover:bg-mist transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="mt-8 flex flex-col gap-1">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-mist transition-colors"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href="#cta"
                            onClick={() => setOpen(false)}
                            className="mt-6 inline-flex items-center justify-center rounded-full bg-truering-orange px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_-10px_rgba(255,85,0,0.55)] hover:bg-truering-orange-600 transition-all"
                        >
                            Get a Free Demo
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

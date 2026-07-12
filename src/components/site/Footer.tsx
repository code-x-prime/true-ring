"use client";

import { IconBrandFacebook, IconBrandLinkedin, IconBrandInstagram, IconBrandTelegram } from "@tabler/icons-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-hairline text-ink">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_1.6fr]">

          {/* Column 1: Logo, Description & Socials */}
          <div className="space-y-6">
            <div className="rounded-xl inline-block">
              <Image
                src="/logo-2.png"
                alt="Truering by Brighto Credit Information Pvt. Ltd."
                width={220}
                height={68}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-xs sm:text-sm text-graphite leading-relaxed max-w-xs">
              Telecalling CRM Software that brings inbound and outbound calls, dialers, lead management, and reporting into one smart system.
            </p>

            {/* Social Icons matching screenshot style using Tabler Icons */}
            <div className="flex items-center gap-4 text-graphite pt-2">
              <a href="#" className="hover:text-truering-orange transition-colors" aria-label="Facebook">
                <IconBrandFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-truering-orange transition-colors" aria-label="LinkedIn">
                <IconBrandLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-truering-orange transition-colors" aria-label="Instagram">
                <IconBrandInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-truering-orange transition-colors" aria-label="Telegram">
                <IconBrandTelegram className="h-5 w-5" />
              </a>
            </div>
          </div>


          {/* Column 2: Company Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-ink mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li><a href="#top" className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors">Home</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors">About us</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors">Contact</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 3: Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-ink mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors">Features</a></li>
              <li><a href="#integrations" className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors">Integrations</a></li>
              <li><a href="#how-it-works" className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors">How it works</a></li>
              <li><a href="#faq" className="text-xs sm:text-sm text-graphite hover:text-truering-orange transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-ink">
              Newsletter
            </h4>
            <p className="text-xs sm:text-sm text-graphite leading-relaxed">
              Get tips, product updates, and insights on working smarter with Truering.
            </p>

            {/* Input Newsletter field from screenshot */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center justify-between bg-mist/60 dark:bg-zinc-900/60 rounded-full p-1 border border-hairline/80 max-w-sm"
            >
              <input
                type="email"
                placeholder="Email address"
                required
                className="bg-transparent border-none outline-none text-xs px-3.5 py-2 text-ink flex-1 placeholder:text-graphite/50"
              />
              <button
                type="submit"
                className="bg-truering-orange hover:bg-truering-orange-600 text-white text-xs font-semibold px-5 py-2 rounded-full transition-colors shrink-0 cursor-pointer"
              >
                Subscribe &gt;
              </button>
            </form>
          </div>

        </div>

        {/* Copyright bottom bar */}
        <div className="mt-16 pt-8 border-t border-hairline flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-graphite">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>© {new Date().getFullYear()} Truering™. All rights reserved.</span>
            <span>•</span>
            <span>By Brighto Credit Information Pvt. Ltd.</span>
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
            <a href="#" className="hover:text-truering-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-truering-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-truering-orange transition-colors">Security</a>
            <a href="#" className="hover:text-truering-orange transition-colors">Cookie</a>
          </div>
        </div>

      </div>
    </footer>
  );
}


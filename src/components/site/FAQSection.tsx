"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  IconChevronDown,
  IconHelp,
} from "@tabler/icons-react";
import Link from "next/link";

interface FAQCategory {
  id: string;
  name: string;
  count: number;
  icon: React.ElementType;
  indices?: number[];
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  faqItems: FAQItem[];
  categories?: FAQCategory[];
  contactCta?: {
    title: string;
    description: string;
    buttonText: string;
    href: string;
  };
}

const defaultContactCta = {
  title: "Still have questions?",
  description: "Can't find the answer you're looking for? Our support team is here to help you.",
  buttonText: "Contact Support",
  href: "/contact",
};

export function FAQSection({
  eyebrow = "Frequently Asked Questions",
  title = "Got Questions? We've Got Answers",
  description = "Everything you need to know about our platform, from getting started to advanced integration setups.",
  faqItems,
  categories,
  contactCta = defaultContactCta,
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories?.[0]?.id ?? "all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQs = categories
    ? faqItems.filter((_, i) => {
        if (activeCategory === "all") return true;
        const category = categories.find((cat) => cat.id === activeCategory);
        if (category?.indices) return category.indices.includes(i);
        return false;
      })
    : faqItems;

  const ContactIcon = IconHelp;

  return (
    <section id="faq" className="py-16 md:py-24 px-6 bg-mist/30 border-t border-hairline">
      <div className="mx-auto max-w-5xl">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-truering-orange-50/60 px-4 py-1.5 text-[11px] font-semibold text-truering-orange-600 border border-truering-orange-100 mb-4 select-none">
            <span className="h-1.5 w-1.5 rounded-full bg-truering-orange" />
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-ink tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-graphite leading-relaxed">
            {description}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className={cn(
          "grid grid-cols-1 gap-8 items-start",
          categories ? "lg:grid-cols-[280px_1fr]" : "lg:grid-cols-[280px_1fr]"
        )}>

          {/* Left Column */}
          <div className="space-y-4 lg:sticky lg:top-28">
            {categories && categories.length > 0 && (
              <>
                <div className="text-xs font-bold uppercase tracking-wider text-graphite mb-2">
                  Browse by Category
                </div>
                <div className="space-y-2">
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    const CatIcon = cat.icon;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setOpenIndex(null);
                        }}
                        className={cn(
                          "flex w-full items-center justify-between p-4 rounded-xl border transition-all text-left select-none cursor-pointer",
                          isActive
                            ? "border-truering-orange bg-truering-orange-50/30 text-truering-orange font-bold shadow-sm"
                            : "border-hairline bg-white dark:bg-zinc-950/40 text-ink hover:border-truering-orange/40 hover:bg-mist/30"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "p-2 rounded-lg shrink-0",
                            isActive ? "bg-truering-orange/15 text-truering-orange" : "bg-mist text-graphite"
                          )}>
                            <CatIcon className="h-4.5 w-4.5" />
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm font-semibold">{cat.name}</div>
                            <div className="text-[10px] text-graphite font-normal mt-0.5">{cat.count} FAQs</div>
                          </div>
                        </div>
                        <span className="text-xs font-bold opacity-60">&gt;</span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {/* Contact Card */}
            <div className="rounded-2xl bg-gradient-to-br from-truering-orange to-truering-orange-600 p-5 text-white shadow-md relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 opacity-10 text-white pointer-events-none">
                <ContactIcon className="h-24 w-24" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">
                {contactCta.title}
              </h4>
              <p className="text-xs text-white/80 leading-relaxed mb-4">
                {contactCta.description}
              </p>
              <Link
                href={contactCta.href}
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-truering-orange hover:bg-white/95 transition-colors shadow-sm select-none"
              >
                {contactCta.buttonText}
              </Link>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="space-y-3">
            {filteredFAQs.map((f, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={f.question}
                  className={cn(
                    "rounded-2xl border bg-white dark:bg-zinc-950/40 transition-all duration-300 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.04)]",
                    isOpen ? "border-truering-orange/30 shadow-md" : "border-hairline hover:border-truering-orange/20"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between text-left p-5 text-sm sm:text-base font-bold text-ink hover:text-truering-orange transition-colors select-none cursor-pointer"
                  >
                    <span>{f.question}</span>
                    <IconChevronDown className={cn(
                      "h-4 w-4 text-graphite shrink-0 ml-4 transition-transform duration-300",
                      isOpen ? "rotate-180 text-truering-orange" : ""
                    )} />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 px-5",
                      isOpen ? "max-h-96 pb-5 opacity-100 border-t border-hairline/40 pt-4" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="text-xs sm:text-sm text-graphite leading-relaxed">
                      {f.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

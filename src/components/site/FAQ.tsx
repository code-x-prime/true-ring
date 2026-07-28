"use client";

import { faqs } from "@/lib/site-content";
import { FAQSection } from "./FAQSection";
import {
  IconBook,
  IconPhone,
  IconCloud,
  IconHelp,
} from "@tabler/icons-react";

const categories = [
  { id: "all", name: "All Questions", count: 8, icon: IconHelp },
  { id: "general", name: "Getting Started", count: 3, icon: IconBook, indices: [0, 3, 7] },
  { id: "features", name: "Calling & Features", count: 3, icon: IconPhone, indices: [1, 4, 5] },
  { id: "technical", name: "Integrations & Cloud", count: 2, icon: IconCloud, indices: [2, 6] },
];

export function FAQ() {
  return (
    <FAQSection
      eyebrow="Frequently Asked Questions"
      title={
        <>
          Got Questions? <span className="text-truering-orange">We&apos;ve Got Answers</span>
        </>
      }
      description="Everything you need to know about our Telecalling CRM Software, from getting started to advanced integration setups."
      faqItems={faqs.map((f) => ({ question: f.q, answer: f.a }))}
      categories={categories}
    />
  );
}

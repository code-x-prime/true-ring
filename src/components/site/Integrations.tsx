"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { integrations } from "@/lib/site-content";
import { SectionHeading } from "./SectionHeading";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function Integrations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Stagger reveal animation for cards on scroll
      const cards = cardsRef.current.filter((c) => c !== null);
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            y: 60,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rightRef.current,
              start: "top bottom-=80",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Pin the left side using GSAP ScrollTrigger on desktop
      const mm = gsap.matchMedia();
      let pinTrigger: globalThis.ScrollTrigger | null = null;

      mm.add("(min-width: 1024px)", () => {
        const getScrollAmount = () => {
          const rightHeight = rightRef.current?.offsetHeight || 0;
          const leftHeight = leftRef.current?.offsetHeight || 0;
          return Math.max(0, rightHeight - leftHeight);
        };

        pinTrigger = ScrollTrigger.create({
          trigger: leftRef.current,
          start: "top top+=120",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        });
      });

      return () => {
        if (pinTrigger) pinTrigger.kill();
        mm.revert();
      };
    }
  }, []);


  // Helper to map mock descriptions to integrations
  const getIntegrationDesc = (name: string) => {
    switch (name) {
      case "Salesforce CRM":
        return "Sync customer details and dialer call logs directly to your Salesforce pipelines.";
      case "HubSpot":
        return "Automatically log call records and track leads directly in HubSpot CRM.";
      case "Zoho CRM":
        return "Synchronize call statuses and update lead profiles in Zoho instantly.";
      case "LeadSquared":
        return "Distribute prospects and route calls through LeadSquared lists.";
      case "WhatsApp Business":
        return "Send automated message notifications and templates alongside calls.";
      case "Google Sheets":
        return "Log incoming and outgoing telecalling records directly to spreadsheets.";
      case "REST APIs":
        return "Trigger webhooks and integrate call events into your proprietary stack.";
      default:
        return "Build custom connectors for your specific in-house business applications.";
    }
  };

  return (
    <section
      ref={sectionRef}
      id="integrations"
      className="bg-mist/60 pt-16 pb-32 md:pt-24 md:pb-44 px-6 border-y border-hairline relative"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">

        {/* Left Column Container */}
        <div className="self-start lg:pr-8 w-full">
          {/* Wrapped inner container for GSAP pinning */}
          <div ref={leftRef} className="w-full">
            <span className="inline-flex items-center gap-2.5 rounded-full bg-truering-orange-50/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-truering-orange-600 border border-truering-orange-100 mb-6">
              Integrations
            </span>
            <SectionHeading
              title="Integrate Your Telecalling CRM Software with Business Tools"
            />
            <p className="mt-6 text-sm sm:text-base text-graphite leading-relaxed">
              Your company should not throw out current systems just to get better at customer conversations. Truering integrates seamlessly with leading CRM systems and other business applications, allowing teams to continue using the applications they&apos;re familiar with while enhancing calling capabilities.
            </p>
            <p className="mt-4 text-sm text-graphite leading-relaxed">
              Our growing list of connections works with well-known CRMs, productivity tools, and APIs to keep everything running smoothly and customer data in one place.
            </p>
          </div>
        </div>

        {/* Right Column: Dynamic Cards Grid */}
        <div ref={rightRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {integrations.map((it, i) => {
            const isBlue = i % 2 === 1;

            return (
              <div
                key={it.name}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="h-full"
              >
                <Card
                  className="p-5 flex flex-col justify-between border-hairline bg-white/75 dark:bg-zinc-950/20 backdrop-blur-sm shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-truering-orange/20 transition-all duration-300 group/card h-full"
                >
                  <div className="relative h-full flex flex-col justify-between">
                    <div>
                      {/* Icon container */}
                      <div className={cn(
                        "flex h-13 w-13 items-center justify-center rounded-xl transition-all duration-300",
                        isBlue ? "bg-truering-blue-100 text-truering-blue-600" : "bg-truering-orange-100 text-truering-orange-600"
                      )}>
                        <img src={it.icon} alt={it.name} className="h-8 w-8 dark:invert" />
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1.5 py-4">
                        <h3 className="text-sm sm:text-base font-bold text-ink group-hover/card:text-truering-orange transition-colors">
                          {it.name}
                        </h3>
                        <p className="text-xs text-graphite leading-relaxed line-clamp-2">
                          {getIntegrationDesc(it.name)}
                        </p>
                      </div>
                    </div>

                    {/* Action Link */}
                    <div className="flex border-t border-dashed border-hairline/80 pt-4 mt-2">
                      <Link
                        href={
                          it.name.includes("Salesforce")
                            ? "/integrations/salesforce-integration"
                            : it.name.includes("HubSpot")
                            ? "/integrations/hubspot-integration"
                            : it.name.includes("Zoho")
                            ? "/integrations/zoho-crm-integration"
                            : it.name.includes("LeadSquared")
                            ? "/integrations/leadsquared-integration"
                            : it.name.includes("WhatsApp")
                            ? "/integrations/whatsapp-integration"
                            : it.name.includes("Google")
                            ? "/integrations/google-sheets-integration"
                            : "/integrations/api-integration"
                        }
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "sm" }),
                          "p-0 h-auto text-xs font-semibold gap-1 hover:bg-transparent shadow-none transition-colors",
                          isBlue ? "text-truering-blue hover:text-truering-blue-600" : "text-truering-orange hover:text-truering-orange-600"
                        )}
                      >
                        Learn More
                        <ChevronRight className="ml-0 !h-3.5 !w-3.5 opacity-60 group-hover/card:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}

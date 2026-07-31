"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SignalRing } from "./SignalRing";
import { HeroMockup } from "./HeroMockup";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MorphingText } from "@/components/ui/liquid-text";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function Hero() {
  const mockupContainerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // 1. Entrance animation on page load (so it's fully visible and animated immediately)
      gsap.fromTo(
        mockupRef.current,
        {
          y: 50,
          scale: 0.95,
          rotateX: 18,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          rotateX: 8,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // 2. Scroll-driven parallax perspective tilt as they scroll down
      gsap.to(mockupRef.current, {
        rotateX: 0,
        scale: 1.02,
        y: -15,
        scrollTrigger: {
          trigger: mockupContainerRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);


  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-transparent pt-28 md:pt-36 pb-20 md:pb-28 dark:bg-transparent"
    >
      {/* Dynamic Brand Color Gradients/Glows */}
      <div
        aria-hidden
        className="z-[2] absolute inset-0 pointer-events-none isolate opacity-60 contain-strict hidden lg:block"
      >
        <div className="w-[45rem] h-[60rem] -translate-y-1/2 absolute left-1/4 top-0 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,85,0,0.04)_0%,rgba(0,173,249,0.01)_60%,transparent_100%)]" />
        <div className="h-[50rem] absolute left-10 top-0 w-80 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,173,249,0.03)_0%,rgba(255,85,0,0.01)_70%,transparent_100%)] [translate:5%_-30%]" />
      </div>



      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 flex items-center justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-truering-orange-50/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-truering-orange-600 border border-truering-orange-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-truering-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-truering-orange"></span>
            </span>
            Live call, organized instantly
          </div>
        </div>


        <h1 className="text-balance text-4xl font-bold md:text-5xl leading-[1.08] tracking-tight text-ink">
          Inbound & Outbound{" "}
          <MorphingText
            texts={["Telecalling CRM", "Cloud Dialer", "Sales CRM", "Smart Dialer"]}
            className="text-truering-orange px-2"
          />{" "}
          Software That Keeps Customer Conversations{" "}
          <MorphingText
            texts={["Organized", "Productive", "Efficient", "Streamlined"]}
            className="text-truering-blue px-2"
          />
        </h1>



        <p className="mx-auto my-8 max-w-3xl text-lg md:text-xl text-graphite leading-relaxed">

          Every missed call means money left on the table. Truering&apos;s Telecalling CRM Software brings calls, leads, dialers, and customer conversations together in one smart system that lets teams reply quicker, close more deals, and keep growing month after month.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-truering-orange text-white shadow-[0_18px_40px_-15px_rgba(255,85,0,0.55)] hover:bg-truering-orange-600 hover:shadow-[0_22px_50px_-15px_rgba(255,85,0,0.65)] transition-all cursor-pointer h-12 px-8 text-base font-semibold flex items-center gap-2"
            )}
          >
            Get a Free Demo <ArrowRight className="h-5 w-5" />
          </Link>

          <a
            href="#features"
            onClick={(e) => handleScroll(e, "features")}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-2 border-truering-blue text-truering-blue-600 hover:bg-truering-blue hover:text-white transition-all cursor-pointer h-12 px-8 text-base font-semibold bg-transparent flex items-center"
            )}
          >
            See Features →
          </a>
        </div>
      </div>


      {/* GSAP Perspective Transformed Hero Mockup Section */}
      <div
        ref={mockupContainerRef}
        className="mx-auto mt-4 max-w-7xl [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] px-6"
      >
        <div className="[perspective:1200px] mt-12 sm:mt-16">
          <div
            ref={mockupRef}
            className="transition-transform duration-500 ease-out origin-top"
          >
            <div className="relative mx-auto max-w-4xl">
              {/* Backing Ring Animation */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <SignalRing animated className="h-[460px] w-[460px] sm:h-[680px] sm:w-[680px] max-w-none opacity-80" />
              </div>
              <HeroMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



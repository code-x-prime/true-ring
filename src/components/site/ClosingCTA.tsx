"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export function ClosingCTA() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Slow fluid floating animation for Blob 1
      gsap.to(blob1Ref.current, {
        x: "random(-100, 100)",
        y: "random(-50, 50)",
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Slow fluid floating animation for Blob 2
      gsap.to(blob2Ref.current, {
        x: "random(-100, 100)",
        y: "random(-50, 50)",
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section id="cta" className="relative px-6 py-10 bg-white dark:bg-transparent">
      <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-tr from-truering-orange via-[#fd732b] to-[#fdb94b] py-16 px-8 sm:px-12 text-center relative overflow-hidden shadow-[0_20px_50px_-20px_rgba(255,85,0,0.4)]">

        {/* Organic Light blobs to simulate fluid mesh background */}
        <div
          ref={blob1Ref}
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#fdb94b]/35 blur-3xl pointer-events-none"
        />
        <div
          ref={blob2Ref}
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-truering-orange/50 blur-3xl pointer-events-none"
        />


        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white tracking-tight">
            Ready to Experience a Smarter Telecalling CRM Software?
          </h2>
          <p className="mt-5 text-white/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re looking to increase your sales or boost your customer support, Truering can help your teams do their best work.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm sm:text-base font-bold text-truering-orange shadow-md hover:scale-[1.03] transition-transform select-none cursor-pointer"
            >
              Get a Free Demo <ArrowRight className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { useEffect, useRef } from "react";
import { steps } from "@/lib/site-content";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Animate the vertical line scale-y and the glowing dot on scroll
      gsap.to(progressLineRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineContainerRef.current,
          start: "top center+=100",
          end: "bottom center+=100",
          scrub: 1,
        },
      });

      gsap.to(dotRef.current, {
        top: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: timelineContainerRef.current,
          start: "top center+=100",
          end: "bottom center+=100",
          scrub: 1,
        },
      });

      // Stagger fade-in and highlight for step nodes
      steps.forEach((_, index) => {
        const stepEl = stepRefs.current[index];
        if (stepEl) {
          gsap.fromTo(
            stepEl,
            { opacity: 0.3, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              scrollTrigger: {
                trigger: stepEl,
                start: "top center+=220",
                end: "bottom center-=100",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      });
    }
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="how-it-works" 
      className="bg-mist/40 py-20 md:py-28 px-6 border-t border-hairline relative"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="How It Works"
          title="How Truering Telecalling CRM Software Works"
          intro="Starting with Truering is easy, so companies can upgrade customer communication without lengthy setups or tricky steps."
          align="center"
        />

        {/* Timeline Container */}
        <div ref={timelineContainerRef} className="mt-20 relative px-4 md:px-0">
          
          {/* Central Vertical Line (Visible on md+ screens) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-hairline -translate-x-1/2 z-0" />
          
          {/* GSAP Progress Line (Fills on scroll) */}
          <div 
            ref={progressLineRef}
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-truering-orange via-truering-orange to-truering-blue -translate-x-1/2 z-10 origin-top scale-y-0" 
          />

          {/* Glowing Animated Dot along the line */}
          <div 
            ref={dotRef}
            className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-truering-orange rounded-full border-2 border-white shadow-[0_0_10px_#f05e23] z-20"
            style={{ top: "0%" }}
          />

          {/* Timeline Steps Loop */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((s, i) => {
              const isEven = i % 2 === 0;
              const StepIcon = s.icon;

              return (
                <div
                  key={s.title}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className={cn(
                    "flex flex-col md:flex-row items-start md:items-center justify-between relative z-10 gap-8 md:gap-0",
                    isEven ? "md:flex-row-reverse" : ""
                  )}
                >
                  
                  {/* Text Side */}
                  <div className="w-full md:w-[42%] pl-12 md:pl-0 md:text-left">
                    <div className="bg-white dark:bg-zinc-950/40 p-6 rounded-2xl border border-hairline/60 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-truering-orange/20 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-xs font-semibold text-truering-orange tracking-widest">
                          STEP 0{i + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-ink mb-2">
                        {s.title.replace(/^Step \d+:\s*/i, "")}
                      </h3>
                      <p className="text-sm text-graphite leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>

                  {/* Center Node (Icon Bubble) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-hairline shadow-sm transition-transform duration-300 group-hover:scale-110",
                      isEven ? "text-truering-orange" : "text-truering-blue"
                    )}>
                      {StepIcon && <StepIcon className="h-5 w-5" />}
                    </div>
                  </div>

                  {/* Spacer Column on opposite side */}
                  <div className="hidden md:block w-[42%]" />

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}


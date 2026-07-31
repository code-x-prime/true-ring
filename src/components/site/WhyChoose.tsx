import Link from "next/link";
import { whyRows } from "@/lib/site-content";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function WhyChoose() {
  const Icon0 = whyRows[0]?.icon;
  const Icon1 = whyRows[1]?.icon;
  const Icon2 = whyRows[2]?.icon;
  const Icon3 = whyRows[3]?.icon;
  const Icon4 = whyRows[4]?.icon;
  const Icon5 = whyRows[5]?.icon;

  // Map index-based styles to match the bento aesthetics
  const getCardStyle = (index: number) => {
    switch (index) {
      case 0: // Item 1: Blue background card
        return "bg-truering-blue text-white lg:col-span-1 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] border-none";
      case 1: // Item 2: Orange background card (spans 2 columns)
        return "bg-truering-orange text-white lg:col-span-2 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] border-none";
      case 2: // Item 3: Light gray card
        return "bg-[#f4f6fd] dark:bg-zinc-900/40 border border-hairline/60 text-ink lg:col-span-1 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)]";
      case 3: // Item 4: Light gray card (quote style layout)
        return "bg-[#f4f6fd] dark:bg-zinc-900/40 border border-hairline/60 text-ink lg:col-span-1 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)]";
      case 4: // Item 5: Lime background card
        return "bg-[#d7f997] text-zinc-900 lg:col-span-1 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] border-none";
      case 5: // Item 6: Wide full-span card at the bottom (spans 3 columns)
        return "bg-[#f4f6fd] dark:bg-zinc-900/40 border border-hairline/60 text-ink lg:col-span-3 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)]";
      default:
        return "bg-white text-ink border border-hairline";
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-white dark:bg-transparent">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why Truering"
          title="Why Businesses Choose Truering Telecalling CRM Software"
          intro="Truering is a reliable Telecalling CRM Software that makes customer communication easier, boosts agent output, and lets teams handle every interaction from one place."
        />

        {/* Bento Grid Layout displaying all 6 original content items */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Card 1: Row 1, Col 1 (Blue Card) */}
          <div className={cn("rounded-2xl p-6 flex flex-col justify-between min-h-[180px]", getCardStyle(0))}>
            <div className="flex items-start justify-between">
              <span className="text-3xl font-bold tracking-tight">95%</span>
              <div className="p-2 bg-white/10 rounded-lg">
                {Icon0 && <img src={Icon0} alt="" className="h-8 w-8 brightness-0 invert" />}
              </div>
            </div>
            <div className="border-t border-white/20 pt-4 mt-4">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1 text-white">
                {whyRows[0]?.title}
              </h4>
              <p className="text-xs text-white/80 leading-relaxed line-clamp-3">
                {whyRows[0]?.body}
              </p>
            </div>
          </div>

          {/* Card 2: Row 1, Col 2 & 3 (Wide Orange Card) */}
          <div className={cn("rounded-2xl p-6 flex flex-col justify-between min-h-[180px]", getCardStyle(1))}>
            <div className="flex items-start justify-between">
              <span className="text-3xl font-bold tracking-tight">120M+</span>
              <div className="p-2 bg-white/10 rounded-lg">
                {Icon1 && <img src={Icon1} alt="" className="h-8 w-8 brightness-0 invert" />}
              </div>
            </div>
            <div className="border-t border-white/20 pt-4 mt-4">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1 text-white">
                {whyRows[1]?.title}
              </h4>
              <p className="text-xs text-white/80 leading-relaxed line-clamp-3">
                {whyRows[1]?.body}
              </p>
            </div>
          </div>

          {/* Card 3: Tall Vertical Team Photo Card (Row 1 & 2, Col 4) */}
          <div className="relative rounded-2xl overflow-hidden min-h-[300px] lg:row-span-2 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] group/img border border-hairline/60">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
              alt="Truering Team Collaboration"
              className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />

            {/* Circular grid decoration */}
            <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full border border-white/20 pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full border border-white/10 pointer-events-none" />
          </div>

          {/* Card 4: Row 2, Col 1 (Light Gray Card) */}
          <div className={cn("rounded-2xl p-6 flex flex-col justify-between min-h-[180px]", getCardStyle(2))}>
            <div className="flex items-start justify-between">
              <span className="text-3xl font-bold tracking-tight text-[#3f5fe6] dark:text-truering-blue">360°</span>
              <div className="p-2 bg-truering-blue-100 rounded-lg">
                {Icon2 && <img src={Icon2} alt="" className="h-8 w-8 dark:invert" />}
              </div>
            </div>
            <div className="border-t border-hairline pt-4 mt-4">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1 text-ink">
                {whyRows[2]?.title}
              </h4>
              <p className="text-xs text-graphite leading-relaxed line-clamp-3">
                {whyRows[2]?.body}
              </p>
            </div>
          </div>

          {/* Card 5: Row 2, Col 2 (Light Gray Quote Style Card) */}
          <div className={cn("rounded-2xl p-6 flex flex-col justify-between min-h-[180px]", getCardStyle(3))}>
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink">
                {whyRows[3]?.title}
              </h4>
              <div className="p-2 bg-truering-orange-100 rounded-lg shrink-0">
                {Icon3 && <img src={Icon3} alt="" className="h-8 w-8 dark:invert" />}
              </div>
            </div>
            <div className="border-t border-hairline pt-3 mt-3">
              <p className="text-xs text-graphite leading-relaxed italic line-clamp-3">
                &quot;{whyRows[3]?.body}&quot;
              </p>
            </div>
          </div>

          {/* Card 6: Row 2, Col 3 (Lime Card) */}
          <div className={cn("rounded-2xl p-6 flex flex-col justify-between min-h-[180px]", getCardStyle(4))}>
            <div className="flex items-start justify-between">
              <span className="text-3xl font-bold tracking-tight text-zinc-900">50%</span>
              <div className="p-2 bg-zinc-950/10 rounded-lg">
                {Icon4 && <img src={Icon4} alt="" className="h-8 w-8 dark:invert-0 brightness-0" />}
              </div>
            </div>
            <div className="border-t border-zinc-900/20 pt-4 mt-4">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1 text-zinc-900">
                {whyRows[4]?.title}
              </h4>
              <p className="text-xs text-zinc-800 leading-relaxed line-clamp-3">
                {whyRows[4]?.body}
              </p>
            </div>
          </div>

          {/* Card 7: Row 3, Col 1, 2, 3 (Wide Bottom Gray Card) */}
          <div className={cn("rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 min-h-[140px]", getCardStyle(5))}>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-truering-blue-100 rounded-lg">
                  {Icon5 && <img src={Icon5} alt="" className="h-8 w-8 dark:invert" />}
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-ink">
                  {whyRows[5]?.title}
                </h4>
              </div>
              <p className="text-xs text-graphite leading-relaxed max-w-2xl">
                {whyRows[5]?.body}
              </p>
            </div>
          </div>


          {/* Card 8: Row 3, Col 4 (Call to Action Card filling the bottom right corner) */}
          <div className="bg-truering-orange text-white rounded-2xl p-6 flex flex-col justify-between min-h-[140px] shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] border-none">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-1">
                Grow Your Business
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                Ready to optimize your support and sales telecalling workflows?
              </p>
            </div>
            <div className="pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-xs font-bold text-truering-orange hover:bg-white/90 transition-colors shadow-sm cursor-pointer"
              >
                Get a Free Demo →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

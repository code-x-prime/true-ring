import { features } from "@/lib/site-content";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Features() {
  return (
    <section id="features" className="py-10 md:py-14 ">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything You Need in a Modern Telecalling CRM Software"
          intro="Teams should not jump between different apps just to handle customer conversations. Truering Telecalling CRM Software puts calling, lead management, automation, reporting, and customer insights all in one easy-to-use place. Whether you run inbound support or outbound sales drives, every part of it helps your people work faster, get more done, and build stronger relationships with customers."
        />

        {/* Modern Hover Effect Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto mt-14">
          {features.map((f, index) => {
            const isBlue = index % 2 === 1;
            const hoverBgClass = isBlue
              ? (index < 4 ? "bg-gradient-to-t from-truering-blue-50/60 to-transparent" : "bg-gradient-to-b from-truering-blue-50/60 to-transparent")
              : (index < 4 ? "bg-gradient-to-t from-truering-orange-50/60 to-transparent" : "bg-gradient-to-b from-truering-orange-50/60 to-transparent");

            return (
              <div
                key={f.title}
                className={cn(
                  "flex flex-col py-10 relative group/feature border-hairline/80 dark:border-neutral-800 transition-all duration-300",
                  "lg:border-r",
                  (index === 0 || index === 4) && "lg:border-l",
                  index < 4 && "lg:border-b"
                )}
              >
                {/* Background glow overlay on hover */}
                <div
                  className={cn(
                    "opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full pointer-events-none z-[1]",
                    hoverBgClass
                  )}
                />

                {/* Icon Wrapper */}
                <div className="mb-5 relative z-10 px-10">
                  <div className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300",
                    isBlue ? "bg-truering-blue-100 text-truering-blue-600" : "bg-truering-orange-100 text-truering-orange-600"
                  )}>
                    <img src={f.icon} alt={f.title} className="h-8 w-8 dark:invert" />
                  </div>
                </div>

                {/* Title Wrapper */}
                <div className="text-lg font-bold mb-2.5 relative z-10 px-10">
                  {/* Left slide-in color strip */}
                  <div className={cn(
                    "absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-hairline dark:bg-neutral-700 transition-all duration-200 origin-center",
                    isBlue ? "group-hover/feature:bg-truering-blue" : "group-hover/feature:bg-truering-orange"
                  )} />
                  <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-ink font-semibold">
                    {f.title}
                  </span>
                </div>

                {/* Description Body */}
                <p className="text-sm text-graphite max-w-xs relative z-10 px-10 leading-relaxed">
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


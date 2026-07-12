import { industries } from "@/lib/site-content";
import { SectionHeading } from "./SectionHeading";

export function Industries() {
  return (
    <section id="industries" className="py-10 md:py-14 ">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Telecalling CRM Software for Every Industry"
          intro="Various sectors need different ways to talk with people. Truering fits into your processes and helps teams connect better with customers, streamline daily work, and increase overall output."
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {industries.map((it, i) => {
            const isBlue = i % 2 === 0;
            return (
              <div
                key={it.title}
                className="group rounded-xl border border-hairline bg-white p-5 transition-all hover:border-truering-orange/40 hover:-translate-y-0.5"
              >
                <div
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${isBlue ? "bg-truering-blue-100 text-truering-blue-600" : "bg-truering-orange-100 text-truering-orange-600"
                    }`}
                >
                  <img src={it.icon} alt={it.title} className="h-4.5 w-4.5 dark:invert" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-ink">{it.title}</h3>
                <p className="mt-1.5 text-xs text-graphite leading-relaxed">{it.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

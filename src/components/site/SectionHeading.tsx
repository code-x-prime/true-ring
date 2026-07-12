

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-truering-orange-50 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-truering-orange-600 border border-truering-orange-100">
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, intro, align = "left" }: { eyebrow?: string; title: string; intro?: string; align?: "left" | "center" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`mb-4 flex ${align === "center" ? "justify-center" : ""} items-center gap-3`}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.05] text-ink">{title}</h2>
      {intro && <p className="mt-5 text-base md:text-lg text-graphite leading-relaxed">{intro}</p>}
    </div>
  );
}


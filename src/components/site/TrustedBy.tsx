export function TrustedBy() {
  return (
    <section className="bg-background relative z-10 py-8 px-6">
      <div className="mx-auto max-w-7xl rounded-3xl border border-hairline/80 bg-mist/60 p-8 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-center">

          {/* Left Panel: Text Context */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink mb-2">
              Our Partnerships
            </h3>
            <p className="text-xs sm:text-sm text-graphite leading-relaxed">
              Dynamic Teams, Trusted Partnerships, Lasting Impact. Powering high-growth sales and support teams globally.
            </p>
          </div>

          {/* Right Panel: Clean Monochrome SVG Logo Card Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

            {/* Logo 1 */}
            <div className="bg-white dark:bg-zinc-950 border border-hairline/60 rounded-2xl p-4 flex items-center justify-center h-20 sm:h-22 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-truering-orange/30 transition-all duration-300">
              <svg viewBox="0 0 120 30" className="h-7 sm:h-8 w-auto text-ink opacity-70 hover:opacity-100 transition-opacity" fill="currentColor">
                <circle cx="15" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="15" cy="15" r="3" />
                <text x="32" y="20" className="font-sans font-bold text-[14px] tracking-tight" fill="currentColor">Logoipsum</text>
              </svg>
            </div>

            {/* Logo 2 */}
            <div className="bg-white dark:bg-zinc-950 border border-hairline/60 rounded-2xl p-4 flex items-center justify-center h-20 sm:h-22 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-truering-orange/30 transition-all duration-300">
              <svg viewBox="0 0 120 30" className="h-7 sm:h-8 w-auto text-ink opacity-70 hover:opacity-100 transition-opacity" fill="currentColor">
                <text x="15" y="22" className="font-mono font-black text-lg tracking-widest" fill="currentColor">IPSUM</text>
              </svg>
            </div>

            {/* Logo 3 */}
            <div className="bg-white dark:bg-zinc-950 border border-hairline/60 rounded-2xl p-4 flex items-center justify-center h-20 sm:h-22 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-truering-orange/30 transition-all duration-300">
              <svg viewBox="0 0 120 30" className="h-7 sm:h-8 w-auto text-ink opacity-70 hover:opacity-100 transition-opacity" fill="currentColor">
                <g transform="translate(10, 5)">
                  <rect x="0" y="3" width="5" height="14" transform="skewX(-15)" />
                  <rect x="8" y="3" width="5" height="14" transform="skewX(-15)" />
                  <rect x="16" y="3" width="10" height="5" transform="skewX(-15)" />
                </g>
                <text x="45" y="20" className="font-sans font-black text-[14px] uppercase tracking-wider" fill="currentColor">Lilly</text>
              </svg>
            </div>

            {/* Logo 4 */}
            <div className="bg-white dark:bg-zinc-950 border border-hairline/60 rounded-2xl p-4 flex items-center justify-center h-20 sm:h-22 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-truering-orange/30 transition-all duration-300">
              <svg viewBox="0 0 120 30" className="h-7 sm:h-8 w-auto text-ink opacity-70 hover:opacity-100 transition-opacity" fill="currentColor">
                <path d="M15 5 L24 8 V15 C24 20 19 23 15 25 C11 23 6 20 6 15 V8 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M15 9 L20 11 V15 C20 18 17 20 15 21 C13 20 10 18 10 15 V11 Z" />
                <text x="34" y="20" className="font-sans font-bold text-[14px] tracking-tight" fill="currentColor">Logoipsum</text>
              </svg>
            </div>

            {/* Logo 5 */}
            <div className="bg-white dark:bg-zinc-950 border border-hairline/60 rounded-2xl p-4 flex items-center justify-center h-20 sm:h-22 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-truering-orange/30 transition-all duration-300">
              <svg viewBox="0 0 120 30" className="h-7 sm:h-8 w-auto text-ink opacity-70 hover:opacity-100 transition-opacity" fill="currentColor">
                <rect x="10" y="6" width="90" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
                <text x="16" y="18" className="font-sans font-extrabold text-[10px] tracking-[0.18em]" fill="currentColor">LOGO IPSUM</text>
              </svg>
            </div>

            {/* Logo 6 */}
            <div className="bg-white dark:bg-zinc-950 border border-hairline/60 rounded-2xl p-4 flex items-center justify-center h-20 sm:h-22 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-truering-orange/30 transition-all duration-300">
              <svg viewBox="0 0 120 30" className="h-7 sm:h-8 w-auto text-ink opacity-70 hover:opacity-100 transition-opacity" fill="currentColor">
                <circle cx="16" cy="15" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M16 5 V25 M6 15 H26" stroke="currentColor" strokeWidth="1.5" />
                <text x="36" y="20" className="font-sans font-semibold text-[14px] tracking-tight" fill="currentColor">logoipsum</text>
              </svg>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}




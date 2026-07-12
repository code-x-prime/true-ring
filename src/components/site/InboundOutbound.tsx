import { IconPhoneIncoming, IconPhoneOutgoing } from "@tabler/icons-react";
import { SectionHeading } from "./SectionHeading";


export function InboundOutbound() {
  return (
    <section className="bg-mist/30 py-16 md:py-24 px-6 border-y border-hairline/80">
      <div className="mx-auto max-w-7xl">
        {/* Modern 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">

          {/* Left Column: Headings & Product Cards */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-truering-blue-100/50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-truering-blue-600 border border-truering-blue-100 mb-6">
                Inbound & Outbound
              </span>
              <SectionHeading
                title="Telecalling CRM Software Built for Inbound & Outbound Calling Teams"
                intro="Businesses handle communication in their own ways. Some teams primarily answer customer questions, while others drive outbound sales to expand. Truering Telecalling CRM Software supports both styles with flexible setups and clever automation."
              />
            </div>

            {/* Feature Cards Stack */}
            <div className="space-y-4">

              {/* Inbound Calling Card */}
              <div className="group bg-white dark:bg-zinc-950/20 border border-hairline/80 border-l-4 border-l-truering-blue rounded p-6 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-truering-blue/20 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-truering-blue-100 text-truering-blue-600 transition-colors group-hover:bg-truering-blue group-hover:text-white">
                    <IconPhoneIncoming className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-ink transition-colors group-hover:text-truering-blue">
                    Inbound Calling
                  </h3>
                </div>
                <p className="mt-3 text-sm text-graphite leading-relaxed pl-15">
                  Give customers quicker, more personalized help with smart call routing, IVR, past customer details, call recordings, and live dashboards. Agents pull up customer info right away, which shortens solve times and raises happiness levels.
                </p>
              </div>

              {/* Outbound Calling Card */}
              <div className="group bg-white dark:bg-zinc-950/20 border border-hairline/80 border-l-4 border-l-truering-orange rounded p-6 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-truering-orange/20 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-truering-orange-100 text-truering-orange-600 transition-colors group-hover:bg-truering-orange group-hover:text-white">
                    <IconPhoneOutgoing className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-ink transition-colors group-hover:text-truering-orange">
                    Outbound Calling
                  </h3>
                </div>
                <p className="mt-3 text-sm text-graphite leading-relaxed pl-15">
                  Push big sales campaigns forward with predictive dialers, automatic follow-ups, clever lead sharing, and campaign tracking. Salespeople focus on real conversations, while Truering handles the routine stuff behind the scenes.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Premium 9:16 Smartphone Dialer Mockup */}
          <div className="relative flex justify-center">
            {/* Phone Chassis */}
            <div className="w-full max-w-[320px] aspect-[9/19] rounded-[42px] border-[10px] border-slate-950 bg-slate-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col justify-between font-sans">

              {/* Phone Speaker & Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-30 flex items-center justify-center gap-1.5">
                <div className="w-10 h-1 bg-zinc-800 rounded-full" />
                <div className="w-2.5 h-2.5 bg-zinc-900 rounded-full border border-zinc-800" />
              </div>

              {/* Phone Screen Area */}
              <div className="flex-1 bg-slate-900 text-white p-5 pt-8 flex flex-col justify-between relative z-10">

                {/* Screen Header: Status Bar & Agent Status */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] text-white/40 px-1">
                    <span>09:41</span>
                    <div className="flex items-center gap-1">
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2 border border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">Console Active</span>
                    </div>
                    <span className="text-[9px] text-white/50">Rajesh K.</span>
                  </div>
                </div>

                {/* Active Call Panel (Center) */}
                <div className="my-auto py-4 text-center space-y-4">
                  <div className="w-18 h-18 rounded-full bg-gradient-to-tr from-truering-orange to-truering-orange-600 text-white flex items-center justify-center font-bold text-xl mx-auto shadow-lg animate-pulse">
                    PS
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white tracking-wide">Priya Sharma</h4>
                    <p className="text-[11px] text-white/40 mt-0.5">+91 98765 43210</p>
                  </div>
                  <div>
                    <span className="inline-block text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded-full border border-emerald-500/10">
                      Connected • 02:45
                    </span>
                  </div>

                  {/* Sound Wave Animation */}
                  <div className="flex items-end justify-center gap-1 h-6">
                    <div className="w-1 bg-truering-orange rounded-full h-3 animate-[pulse_1s_infinite]" />
                    <div className="w-1 bg-truering-orange rounded-full h-6 animate-[pulse_1.2s_infinite_75ms]" />
                    <div className="w-1 bg-truering-orange rounded-full h-4 animate-[pulse_0.8s_infinite_150ms]" />
                    <div className="w-1 bg-truering-orange rounded-full h-6 animate-[pulse_1.1s_infinite_300ms]" />
                    <div className="w-1 bg-truering-orange rounded-full h-2.5 animate-[pulse_0.9s_infinite]" />
                  </div>
                </div>

                {/* Bottom Panel: Queue & Controls */}
                <div className="space-y-4">

                  {/* Minified Queue Indicator */}
                  <div className="bg-white/5 rounded-2xl p-3 border border-white/5 space-y-2">
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider block">
                      Next in Queue (2)
                    </span>

                    {/* Queue item */}
                    <div className="flex items-center justify-between text-[11px] bg-white/5 p-1.5 rounded-lg">
                      <span className="font-semibold truncate max-w-[120px]">Amit Kumar</span>
                      <span className="text-[9px] text-truering-blue font-bold">01:15m</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] bg-white/5 p-1.5 rounded-lg">
                      <span className="font-semibold truncate max-w-[120px]">Sanjay Patel</span>
                      <span className="text-[9px] text-truering-orange font-bold">02:30m</span>
                    </div>
                  </div>

                  {/* Calling Action Keys Grid */}
                  <div className="grid grid-cols-3 gap-y-3 gap-x-2 justify-items-center pt-2 border-t border-white/5">
                    <button className="flex flex-col items-center gap-1 cursor-pointer select-none">
                      <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition-colors">
                        🎤
                      </div>
                      <span className="text-[9px] text-white/50">Mute</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 cursor-pointer select-none">
                      <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition-colors">
                        ⏸
                      </div>
                      <span className="text-[9px] text-white/50">Hold</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 cursor-pointer select-none">
                      <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition-colors">
                        ➕
                      </div>
                      <span className="text-[9px] text-white/50">Add</span>
                    </button>
                  </div>

                  {/* End Call Button */}
                  <div className="pt-2 text-center">
                    <button className="w-full bg-red-500 hover:bg-red-600 active:scale-95 transition-all py-3 rounded-2xl text-xs font-bold tracking-wider uppercase select-none cursor-pointer">
                      End Session
                    </button>
                  </div>

                </div>

              </div>

            </div>

            {/* Soft background glows */}
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-truering-blue/10 blur-3xl pointer-events-none -z-10 animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-truering-orange/10 blur-3xl pointer-events-none -z-10 animate-pulse" />
          </div>



        </div>
      </div>
    </section>
  );
}


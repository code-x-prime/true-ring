"use client";

import {
  Phone,
  CheckCircle2,
  Tag,
  Users,
  Mic,
  PhoneCall
} from "lucide-react";

export function HeroMockup() {
  return (
    <div className="w-full rounded-2xl bg-truering-navy text-white border border-white/10 shadow-[0_50px_100px_-20px_rgba(7,30,48,0.6)] overflow-hidden">
      {/* Top window chrome bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-truering-navy/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-truering-orange" />
          <span className="h-3 w-3 rounded-full bg-truering-blue" />
          <span className="h-3 w-3 rounded-full bg-white/20" />
          <span className="ml-4 font-mono text-[11px] text-white/50 tracking-wider">truering-crm.cloud / workspace</span>
        </div>
        <div className="flex items-center gap-3 bg-white/5 px-3 py-1 rounded-full text-xs text-white/60">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span>Agent Rohan D. (Active)</span>
        </div>
      </div>

      {/* Main CRM Dashboard Layout (3 Columns for rich, wide representation) */}
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_300px] bg-ink min-h-[460px] text-xs">

        {/* Column 1: Dialer Sidebar & Queue */}
        <div className="border-r border-white/5 bg-truering-navy/40 p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between text-white/60 font-medium">
            <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-truering-blue" /> Queue List</span>
            <span className="bg-truering-blue-100 text-truering-blue-600 px-1.5 py-0.5 rounded text-[10px]">12 Left</span>
          </div>

          {/* Active Call Queue */}
          <div className="flex flex-col gap-2 flex-1">
            <div className="p-2.5 rounded-lg bg-truering-orange/10 border border-truering-orange/20 flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">Priya Sharma</p>
                <p className="text-[10px] text-white/40">+91 98••• ••242</p>
              </div>
              <span className="h-2 w-2 rounded-full bg-truering-orange animate-ping" />
            </div>

            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between opacity-80">
              <div>
                <p className="font-semibold text-white/80">Amit Verma</p>
                <p className="text-[10px] text-white/40">+91 91••• ••889</p>
              </div>
              <span className="text-[10px] text-white/40">Hot Lead</span>
            </div>

            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between opacity-60">
              <div>
                <p className="font-semibold text-white/80">Karan Malhotra</p>
                <p className="text-[10px] text-white/40">+91 80••• ••551</p>
              </div>
              <span className="text-[10px] text-white/40">Scheduled</span>
            </div>
          </div>

          {/* Performance Stats Widget */}
          <div className="border-t border-white/5 pt-4 mt-auto">
            <div className="grid grid-cols-2 gap-2 text-center text-white/80">
              <div className="bg-white/5 p-2 rounded-lg">
                <span className="text-[10px] text-white/40 block">Connected</span>
                <span className="font-mono text-base font-bold text-truering-blue">48</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg">
                <span className="text-[10px] text-white/40 block">Talk Time</span>
                <span className="font-mono text-base font-bold text-truering-orange">3.2h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Active Call details, Dialer UI & Live Waveform */}
        <div className="p-5 flex flex-col justify-between gap-5 border-r border-white/5">
          {/* Active Call Status Header */}
          <div className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-truering-orange/30 animate-ping" />
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-truering-orange text-white">
                  <Phone className="h-4.5 w-4.5" />
                </span>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-truering-orange font-bold">Inbound Call · Connected</div>
                <div className="text-base font-bold text-white flex items-center gap-2">
                  Priya Sharma
                  <span className="text-xs font-normal text-white/50">· Mumbai</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="font-mono text-sm bg-truering-orange/20 text-truering-orange px-2 py-0.5 rounded-md font-bold">00:07</span>
            </div>
          </div>

          {/* Waveform Visualization */}
          <div className="bg-truering-navy/30 rounded-xl p-4 border border-white/5 flex flex-col gap-2">
            <div className="flex justify-between items-center text-white/50 text-[10px]">
              <span className="flex items-center gap-1"><Mic className="h-3 w-3 text-truering-blue" /> Live Audio Capture Stream</span>
              <span>HD VoIP Line</span>
            </div>
            <div className="mt-2 flex items-end gap-[4px] h-12 justify-center">
              {[8, 16, 24, 12, 32, 20, 36, 24, 40, 22, 32, 16, 28, 12, 20, 28, 36, 20, 16, 24, 32, 16, 12, 20, 28, 12, 8, 20, 24, 12, 18, 36, 12, 8].map((h, i) => (
                <span
                  key={i}
                  className={`w-[4px] rounded-full transition-all duration-300 ${i % 3 === 0 ? 'bg-truering-orange' : 'bg-truering-blue'}`}
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>

          {/* AI Helper suggestions panel */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <h4 className="font-semibold text-white mb-2 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-truering-blue" />
              Real-time AI Assist Suggestions
            </h4>
            <p className="text-white/60 leading-relaxed">
              Customer is asking about the 3BHK premium layout budget option. Suggest matching the current project properties with 15% discount.
            </p>
          </div>
        </div>

        {/* Column 3: Lead CRM Data Card */}
        <div className="p-4 flex flex-col gap-4 bg-truering-navy/20">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-truering-blue font-bold">
            <CheckCircle2 className="h-4 w-4" />
            Lead Auto-Captured
          </div>

          {/* Profile fields */}
          <div className="flex flex-col gap-3">
            <Field label="Capture Source" value="Website Banner Form" />
            <Field label="Customer Status" value="Hot Opportunity" valueClass="text-truering-orange" />
            <Field label="Assigned Rep" value="Rohan D. (Sales)" />
            <Field label="Scheduled Action" value="Callback today at 3:30 PM" />
          </div>

          {/* Metadata tags */}
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Interest Tags</span>
            <div className="flex flex-wrap gap-1.5">
              {["Real Estate", "Budget 80L", "3BHK Suite", "Ready-To-Move"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 rounded-full bg-truering-blue-100/10 text-truering-blue border border-truering-blue/20 px-2.5 py-0.5 text-[10px] font-medium"
                >
                  <Tag className="h-2.5 w-2.5" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Call Action buttons */}
          <div className="border-t border-white/5 pt-4 mt-auto flex gap-2">
            <button className="flex-1 bg-truering-blue text-white rounded-lg py-2 font-semibold hover:bg-truering-blue-600 transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
              <PhoneCall className="h-3.5 w-3.5" /> Transfer Call
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

function Field({ label, value, valueClass = "text-white" }: { label: string; value: string; valueClass?: string }) {
  return (
    <div className="rounded-lg border border-white/5 bg-white/5 px-3 py-2 flex flex-col gap-0.5">
      <div className="text-[9px] font-mono uppercase tracking-wider text-white/40">{label}</div>
      <div className={`text-xs font-semibold ${valueClass}`}>{value}</div>
    </div>
  );
}
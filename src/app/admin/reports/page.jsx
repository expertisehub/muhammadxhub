"use client";

import { BarChart3, TrendingUp } from "lucide-react";

export default function AdminReportsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-emerald-500/15 p-3 text-emerald-300">
            <BarChart3 size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white">
              Reporting insights
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              A high-level snapshot of impact, engagement, and conversion
              trends.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Volunteer retention", "84%"],
            ["Partner activation", "67%"],
            ["Donation repeat rate", "41%"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"
            >
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <TrendingUp size={16} className="text-emerald-300" /> {label}
              </div>
              <p className="mt-4 text-2xl font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  CircleDollarSign,
  ClipboardList,
  HandCoins,
  MessageSquareText,
  Users2,
} from "lucide-react";

const defaultContent = {
  heroTitle:
    "Building practical skills for young people across Northern Nigeria",
  heroSummary:
    "Expertise Hub Foundation equips learners with mentorship, training, and community outreach that lead to practical opportunity.",
  impactHeadline: "Real impact across programs and communities",
  impactSummary:
    "Every update, partnership request, and volunteer submission strengthens the evidence behind our work.",
  primaryMetricLabel: "Youth empowered",
  primaryMetricValue: "5,000+",
  featuredImage: "/Recovery_Photos/program-digital.jpg",
};

export default function AdminDashboardPage() {
  const [content, setContent] = useState(defaultContent);
  const [submissions, setSubmissions] = useState([]);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/api/admin-data");
      const json = await res.json();
      setContent(json.content || defaultContent);
      setSubmissions(json.submissions || []);
      setUpdates(json.updates || []);
    };
    loadData();
  }, []);

  const kpis = [
    {
      title: "Total funds raised",
      value: "$184.2k",
      change: "+18%",
      icon: CircleDollarSign,
      tone: "emerald",
    },
    {
      title: "Active volunteers",
      value: `${submissions.filter((item) => item.type === "volunteer").length + 1}`,
      change: "+12%",
      icon: Users2,
      tone: "blue",
    },
    {
      title: "Active programs",
      value: "9",
      change: "+4%",
      icon: ClipboardList,
      tone: "amber",
    },
    {
      title: "Pending inquiries",
      value: `${submissions.filter((item) => item.status === "Pending").length}`,
      change: "-9%",
      icon: MessageSquareText,
      tone: "rose",
    },
  ];

  const trackers = [
    {
      name: "Ideation Lab",
      enrolled: 78,
      target: 120,
      accent: "from-emerald-500 to-green-400",
    },
    {
      name: "Mentorship Circle",
      enrolled: 142,
      target: 180,
      accent: "from-sky-500 to-cyan-400",
    },
    {
      name: "Digital Skills",
      enrolled: 218,
      target: 250,
      accent: "from-violet-500 to-fuchsia-400",
    },
  ];

  const activityFeed = [
    ...submissions.slice(0, 3).map((item) => ({
      type: item.category,
      title: `${item.name} submitted a ${item.category.toLowerCase()} request`,
      detail: `${item.subject} • ${new Date(item.createdAt).toLocaleDateString()}`,
    })),
    ...updates.slice(0, 2).map((item) => ({
      type: "Update",
      title: item.title,
      detail: `${item.category} • ${item.published ? "Published" : "Draft"}`,
    })),
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/15 via-slate-900 to-slate-900 p-6 shadow-2xl shadow-emerald-950/20 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Executive overview
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-white">
            Community impact at a glance
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            {content.impactSummary}
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-500/20 bg-slate-950/60 px-4 py-3 text-sm text-emerald-200">
          <div className="flex items-center gap-2">
            <BadgeCheck size={16} /> <span>Encrypted session active</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">{item.title}</p>
                <div
                  className={`rounded-2xl p-2 ${item.tone === "emerald" ? "bg-emerald-500/15 text-emerald-300" : item.tone === "blue" ? "bg-sky-500/15 text-sky-300" : item.tone === "amber" ? "bg-amber-500/15 text-amber-300" : "bg-rose-500/15 text-rose-300"}`}
                >
                  <Icon size={18} />
                </div>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-2xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {item.change} month over month
                  </p>
                </div>
                <div className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                  +{item.change}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Program capacity tracker
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Enrollment progress against target capacity.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
              Live
            </div>
          </div>
          <div className="mt-6 space-y-5">
            {trackers.map((tracker) => {
              const fraction = Math.min(1, tracker.enrolled / tracker.target);
              return (
                <div key={tracker.name}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{tracker.name}</span>
                    <span>
                      {tracker.enrolled}/{tracker.target}
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${tracker.accent}`}
                      style={{ width: `${fraction * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Live activity stream
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Recent updates from across the network.
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
              <HandCoins size={16} /> Pulse
            </button>
          </div>
          <div className="mt-6 space-y-3">
            {activityFeed.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200">
                    {item.type}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Volunteer and partner pipeline
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Application conversion from submission to approval.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-200">
            <ArrowUpRight size={16} />{" "}
            {Math.round(
              (submissions.filter(
                (item) =>
                  item.status === "Approved" || item.status === "Onboarding",
              ).length /
                Math.max(submissions.length, 1)) *
                100,
            )}
            % conversion rate
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Applications", submissions.length],
            [
              "Approved",
              submissions.filter((item) => item.status === "Approved").length,
            ],
            [
              "Onboarding",
              submissions.filter((item) => item.status === "Onboarding").length,
            ],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"
            >
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { ImagePlus, PlusCircle, Save, Sparkles } from "lucide-react";

const imageOptions = [
  {
    label: "Community outreach",
    value: "/Recovery_Photos/program-community.jpg",
  },
  { label: "Digital skills", value: "/Recovery_Photos/program-digital.jpg" },
  { label: "Mentorship", value: "/Recovery_Photos/program-mentorship.jpg" },
  { label: "Hero story", value: "/Recovery_Photos/hero-youth.jpg" },
];

export default function AdminUpdatesPage() {
  const [title, setTitle] = useState("New cohort launching this month");
  const [category, setCategory] = useState("Program Launch");
  const [content, setContent] = useState(
    "Share a compelling update with your audience and make it easy to publish from the admin console.",
  );
  const [featuredImage, setFeaturedImage] = useState(imageOptions[0].value);
  const [published, setPublished] = useState(true);
  const [savedUpdates, setSavedUpdates] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/api/admin-data");
      const json = await res.json();
      setSavedUpdates(json.updates || []);
    };
    loadData();
  }, []);

  const preview = useMemo(() => content.slice(0, 140), [content]);

  const handleSave = async () => {
    await fetch("/api/admin-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "saveUpdate",
        update: { title, category, content, featuredImage, published },
      }),
    });
    const res = await fetch("/api/admin-data");
    const json = await res.json();
    setSavedUpdates(json.updates || []);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Content management
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-white">
              Publish updates that reflect on the public site
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-400">
              Create journal-style updates with featured imagery, publish
              controls, and schedule-ready structure.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            <div className="flex items-center gap-2">
              <Sparkles size={16} />{" "}
              <span>{published ? "Published ready" : "Draft mode"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Create update
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Compose, preview, and publish community news in minutes.
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-2xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950">
              <PlusCircle size={16} /> New post
            </button>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none"
                >
                  <option>Program Launch</option>
                  <option>Community News</option>
                  <option>Urgent Request</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Status
                </label>
                <button
                  onClick={() => setPublished((prev) => !prev)}
                  className={`w-full rounded-2xl px-4 py-3 text-sm font-semibold ${published ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-slate-200"}`}
                >
                  {published ? "Publish now" : "Save as draft"}
                </button>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
                className="w-full rounded-[1.5rem] border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Featured image
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                {imageOptions.map((image) => (
                  <button
                    key={image.value}
                    onClick={() => setFeaturedImage(image.value)}
                    className={`flex items-center gap-3 rounded-2xl border px-3 py-3 text-left text-sm ${featuredImage === image.value ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-100" : "border-white/10 bg-slate-950/60 text-slate-300"}`}
                  >
                    <ImagePlus size={16} /> {image.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleSave}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200"
            >
              <Save size={16} /> Save update
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-white">Preview</h2>
            <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70">
              <img
                src={featuredImage}
                alt="Featured preview"
                className="h-40 w-full object-cover"
              />
              <div className="p-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-emerald-300">
                  <span>{category}</span>
                  <span>{published ? "Published" : "Draft"}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {preview}
                  {content.length > 140 ? "..." : ""}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-white">Recent posts</h2>
            <div className="mt-4 space-y-3">
              {savedUpdates.slice(0, 3).map((update) => (
                <div
                  key={update.id}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-3"
                >
                  <p className="text-sm font-semibold text-white">
                    {update.title}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-emerald-300">
                    {update.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

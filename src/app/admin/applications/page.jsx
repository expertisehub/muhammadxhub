"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal, Eye, X } from "lucide-react";

export default function AdminApplicationsPage() {
  const [rows, setRows] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/api/admin-data");
      const json = await res.json();
      setRows(json.submissions || []);
    };
    loadData();
  }, []);

  const filtered = useMemo(() => {
    return rows.filter((row) => {
      const matchesQuery = `${row.name} ${row.email}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory = category === "All" || row.category === category;
      const matchesStatus = status === "All" || row.status === status;
      return matchesQuery && matchesCategory && matchesStatus;
    });
  }, [category, query, rows, status]);

  const handleStatusChange = async (id, nextStatus) => {
    await fetch("/api/admin-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "updateSubmissionStatus",
        id,
        status: nextStatus,
      }),
    });
    setRows((current) =>
      current.map((item) =>
        item.id === id ? { ...item, status: nextStatus } : item,
      ),
    );
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Application management
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-white">
              Track submissions from volunteers, partners, and donors
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-400">
              Search, filter, and review submissions with quick status updates.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
            {rows.length} active records
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
            <Search size={16} className="text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or email"
              className="w-full bg-transparent text-sm text-white outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-300">
              <SlidersHorizontal size={16} />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-transparent outline-none"
              >
                <option>All</option>
                <option>Volunteer</option>
                <option>Partner</option>
                <option>Donate</option>
              </select>
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-300">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="bg-transparent outline-none"
              >
                <option>All</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Onboarding</option>
                <option>Archived</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm">
            <thead className="bg-slate-950/70 text-slate-300">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 bg-slate-900/60">
              {filtered.map((row) => (
                <tr key={row.id} className="text-slate-200">
                  <td className="px-4 py-3">{row.name}</td>
                  <td className="px-4 py-3">{row.email}</td>
                  <td className="px-4 py-3">{row.category}</td>
                  <td className="px-4 py-3">
                    <select
                      value={row.status}
                      onChange={(event) =>
                        handleStatusChange(row.id, event.target.value)
                      }
                      className="rounded-full border border-white/10 bg-slate-950/80 px-2.5 py-1 text-xs text-slate-200 outline-none"
                    >
                      <option>Pending</option>
                      <option>Approved</option>
                      <option>Onboarding</option>
                      <option>Archived</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setSelectedRow(row)}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                    >
                      <Eye size={14} /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedRow ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/70 px-4 py-8">
          <div className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-slate-900/95 p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                  Submission details
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {selectedRow.name}
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  {selectedRow.category} • {selectedRow.email}
                </p>
              </div>
              <button
                onClick={() => setSelectedRow(null)}
                className="rounded-full border border-white/10 p-2 text-slate-300"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4">
                <h3 className="text-lg font-semibold text-white">Message</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-300">
                  {selectedRow.message}
                </p>
                <div className="mt-4 space-y-2 text-sm text-slate-400">
                  <p>
                    <span className="font-semibold text-slate-200">
                      Subject:
                    </span>{" "}
                    {selectedRow.subject}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-200">
                      Submitted:
                    </span>{" "}
                    {new Date(selectedRow.createdAt).toLocaleString()}
                  </p>
                  {selectedRow.extra &&
                  Object.keys(selectedRow.extra).length ? (
                    <p>
                      <span className="font-semibold text-slate-200">
                        Extra info:
                      </span>{" "}
                      {JSON.stringify(selectedRow.extra)}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4">
                <h3 className="text-lg font-semibold text-white">
                  Status history
                </h3>
                <div className="mt-4 space-y-3">
                  {(selectedRow.history || []).map((entry) => (
                    <div
                      key={`${entry.at}-${entry.status}`}
                      className="rounded-2xl border border-white/10 bg-slate-900/70 p-3"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-white">
                          {entry.status}
                        </span>
                        <span className="text-xs text-slate-400">
                          {new Date(entry.at).toLocaleString()}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-400">
                        {entry.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

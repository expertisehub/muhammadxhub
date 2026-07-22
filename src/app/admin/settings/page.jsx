"use client";

import { useMemo, useState } from "react";
import { Lock, Save, UserCircle2 } from "lucide-react";
import { getAdminProfile } from "../../../lib/admin-auth.js";

export default function AdminSettingsPage() {
  const adminProfile = useMemo(() => getAdminProfile(), []);
  const [email, setEmail] = useState(adminProfile.email);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSave = async () => {
    setMessage(
      "Credentials are configured via environment variables on the server. Update ADMIN_EMAIL and ADMIN_PASSWORD in your hosting environment to change them.",
    );
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-emerald-500/15 p-3 text-emerald-300">
            <UserCircle2 size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white">
              Admin credentials
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Set the dashboard sign-in values through environment variables for
              safer production use.
            </p>
          </div>
        </div>

        <div className="mt-6 max-w-2xl space-y-4 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Admin email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Admin password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Leave blank to keep current password"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none"
            />
          </div>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950"
          >
            <Save size={16} /> Save changes
          </button>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-200">
            <div className="flex items-start gap-2">
              <Lock size={16} className="mt-0.5" />
              <span>
                {message ||
                  "Use ADMIN_EMAIL and ADMIN_PASSWORD in your server environment to change the login credentials securely."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

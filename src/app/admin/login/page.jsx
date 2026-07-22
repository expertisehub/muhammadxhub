"use client";

import { useEffect, useMemo, useState } from "react";
import { Eye, EyeOff, Lock, ShieldCheck, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsVisible(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const passwordStrength = useMemo(() => {
    if (password.length >= 12) return "Strong";
    if (password.length >= 8) return "Moderate";
    return "Needs more length";
  }, [password]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        document.cookie =
          "admin_session=secured-admin-token; path=/; max-age=3600; SameSite=Lax";
        router.push("/admin");
        return;
      }

      const data = await response.json().catch(() => ({}));
      setError(
        data.message ||
          "The credentials do not match our secure admin records.",
      );
    } catch {
      setError("We could not sign you in right now. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(0,168,89,0.16),_transparent_35%),linear-gradient(135deg,_#07110d,_#10261d)] px-4 py-4 text-slate-100 transition-all duration-500 sm:px-6 lg:px-8 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,_rgba(16,185,129,0.12),_transparent_28%),radial-gradient(circle_at_80%_0%,_rgba(45,212,191,0.12),_transparent_24%)]" />
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center py-4 sm:py-6 lg:py-8">
        <div className="flex w-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-2xl shadow-black/30 backdrop-blur-xl lg:flex-row">
          <div className="flex flex-1 flex-col justify-between bg-gradient-to-br from-emerald-600/25 via-slate-900 to-slate-900 p-6 sm:p-8 lg:p-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-200">
                <ShieldCheck size={16} /> Protected admin workspace
              </div>
              <h1 className="mt-6 text-2xl font-semibold sm:text-3xl">
                Secure admin access for Expertise Hub Foundation
              </h1>
              <p className="mt-3 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
                Manage youth mentorship, digital skills training, community
                outreach, and partner engagement from one focused operational
                hub.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2 text-emerald-300">
                <Sparkles size={18} />
                <span className="text-sm font-semibold">
                  What the team does
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  • Equip young people with practical digital and
                  entrepreneurial skills.
                </li>
                <li>
                  • Coordinate mentorship, outreach, and state-level capacity
                  building.
                </li>
                <li>
                  • Build strong partnerships that expand opportunity across
                  communities.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1 p-6 sm:p-8 lg:p-10">
            <div className="mx-auto max-w-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                    Admin Login
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Welcome back
                  </h2>
                </div>
                <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Secure
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
                aria-busy={loading}
              >
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-slate-200"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none ring-0 transition focus:border-emerald-400"
                    autoComplete="email"
                    placeholder="you@organization.org"
                  />
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-slate-200"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="flex items-center rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent text-sm text-white outline-none"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="ml-3 text-slate-400"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                    <span>Password strength: {passwordStrength}</span>
                    <span className="rounded-full bg-slate-800 px-2 py-1">
                      Rate limiting on
                    </span>
                  </div>
                </div>

                {error ? (
                  <p className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Lock size={16} />{" "}
                  {loading ? "Securing session..." : "Access dashboard"}
                </button>
              </form>

              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-400">
                Use the credentials configured in your hosting environment for
                secure access.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

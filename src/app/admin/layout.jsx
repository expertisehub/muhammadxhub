"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { getAdminProfile } from "../../lib/admin-auth.js";
import {
  BarChart3,
  Bell,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FileText,
  LayoutGrid,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  LogOut,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Overview", icon: LayoutGrid },
  { href: "/admin/updates", label: "Updates", icon: FileText },
  { href: "/admin/applications", label: "Applications", icon: Users },
  { href: "/admin/reports", label: "Reports", icon: BarChart3 },
  { href: "/admin/settings", label: "Settings", icon: ShieldCheck },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [hasSession, setHasSession] = useState(false);
  const adminProfile = useMemo(() => getAdminProfile(), []);
  const isLoginRoute =
    pathname === "/admin/login" || pathname.startsWith("/admin/login");

  useEffect(() => {
    const syncSession = () => {
      const cookie = document.cookie
        .split(";")
        .map((item) => item.trim())
        .find((item) => item.startsWith("admin_session="));

      const nextHasSession = Boolean(cookie);
      setHasSession(nextHasSession);

      if (!nextHasSession && !isLoginRoute) {
        router.replace("/admin/login");
      }
    };

    syncSession();
    window.addEventListener("focus", syncSession);
    window.addEventListener("storage", syncSession);

    return () => {
      window.removeEventListener("focus", syncSession);
      window.removeEventListener("storage", syncSession);
    };
  }, [isLoginRoute, router]);

  const handleSignOut = () => {
    setIsSigningOut(true);
    document.cookie =
      "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setHasSession(false);
    window.setTimeout(() => {
      router.replace("/admin/login");
    }, 80);
  };

  if (isLoginRoute) {
    return <>{children}</>;
  }

  if (!hasSession) {
    return null;
  }

  if (isSigningOut) {
    return <div className="min-h-screen bg-slate-950" />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div
        className={`fixed inset-0 z-40 bg-slate-950/85 backdrop-blur-sm transition-opacity duration-500 ${isSigningOut ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside
          className={`fixed inset-y-0 left-0 z-30 hidden border-r border-white/10 bg-slate-900/95 px-4 py-6 backdrop-blur-xl lg:flex lg:flex-col ${collapsed ? "w-24" : "w-72"}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-500/15 p-2 text-emerald-300">
                <Sparkles size={18} />
              </div>
              {!collapsed && (
                <div>
                  <p className="text-sm font-semibold">
                    Expertise Hub Foundation
                  </p>
                  <p className="text-xs text-slate-400">Admin Console</p>
                </div>
              )}
            </div>
            <button
              onClick={() => setCollapsed((prev) => !prev)}
              className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:text-white"
            >
              {collapsed ? (
                <ChevronRight size={16} />
              ) : (
                <ChevronLeft size={16} />
              )}
            </button>
          </div>

          <nav className="mt-8 space-y-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/admin" && pathname.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition ${isActive ? "bg-emerald-500/15 text-emerald-200" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                >
                  <Icon size={18} />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-200">
              <ShieldCheck size={16} /> Secure session
            </div>
            {!collapsed && (
              <p className="mt-2 text-sm text-slate-300">
                Encrypted admin access with monitoring and quick sign-out.
              </p>
            )}
          </div>
        </aside>

        <div
          className={`flex-1 lg:pl-72 ${collapsed ? "lg:pl-24" : "lg:pl-72"}`}
        >
          <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMobileOpen((prev) => !prev)}
                  className="rounded-2xl border border-white/10 p-2 text-slate-300 lg:hidden"
                >
                  <Menu size={18} />
                </button>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Operations Center
                  </p>
                  <p className="text-xs text-slate-400">
                    Community impact dashboard
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 sm:flex">
                  <Search size={16} />
                  <span>Search members</span>
                </div>
                <button className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-300">
                  <Bell size={18} />
                </button>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-semibold text-emerald-300">
                    {adminProfile.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-semibold text-white">
                      {adminProfile.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {adminProfile.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {mobileOpen ? (
            <div className="border-b border-white/10 bg-slate-900/95 p-4 lg:hidden">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/admin" && pathname.startsWith(item.href));
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`mb-2 flex items-center gap-3 rounded-2xl px-3 py-3 text-sm ${isActive ? "bg-emerald-500/15 text-emerald-200" : "text-slate-300"}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ) : null}

          <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>

      <button
        onClick={handleSignOut}
        className="fixed bottom-4 right-4 flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-emerald-200 shadow-lg shadow-emerald-900/20"
      >
        <LogOut size={16} /> Sign out
      </button>
    </div>
  );
}

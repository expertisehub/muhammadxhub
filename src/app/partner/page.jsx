"use client";

import { useRouter } from "next/navigation";

export default function PartnerPage() {
  const router = useRouter();
  return (
    <section className="mx-auto max-w-5xl px-4 md:px-6 py-24 scroll-mt-20">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Partner Signup
            </span>
            <h1 className="mt-3 text-4xl font-display font-bold">
              Partner with Expertise Hub.
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Let’s align your organization with youth-led solutions, training,
              and social impact.
            </p>
          </div>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold hover:bg-muted transition-smooth"
          >
            Back to home
          </button>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const org = form.querySelector("input[required]")?.value || "";
            const email =
              form.querySelector('input[type="email"]')?.value || "";
            const phone = form.querySelectorAll("input")[2]?.value || "";
            const focus = form.querySelectorAll("input")[3]?.value || "";
            const goals = form.querySelector("textarea")?.value || "";
            try {
              await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  type: "partner",
                  name: org,
                  email,
                  subject: focus,
                  message: goals,
                  extra: { phone },
                }),
              });
            } catch (err) {
              console.error(err);
            }
            router.push("/");
            alert("Thank you! Our partnerships team will follow up shortly.");
          }}
          className="rounded-3xl border border-border bg-white p-8 shadow-soft space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-sm font-medium">
              Organization
              <input
                required
                className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
            <label className="block text-sm font-medium">
              Contact Email
              <input
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-sm font-medium">
              Phone
              <input
                required
                className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
            <label className="block text-sm font-medium">
              Partnership focus
              <input
                required
                className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
          </div>
          <label className="block text-sm font-medium">
            Tell us about your partnership goals
            <textarea
              rows="5"
              required
              className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow hover:bg-primary/90 transition-smooth"
          >
            Submit Partnership Request
          </button>
        </form>
      </div>
    </section>
  );
}

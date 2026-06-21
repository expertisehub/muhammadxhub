"use client";

import { useRouter } from "next/navigation";

export default function VolunteerPage() {
  const router = useRouter();
  return (
    <section className="mx-auto max-w-5xl px-4 md:px-6 py-24 scroll-mt-20">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Volunteer Signup
            </span>
            <h1 className="mt-3 text-4xl font-display font-bold">
              Join our volunteer community.
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Share your time, skills, and passion across mentorship, training,
              and community outreach.
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
            const data = new FormData(form);
            const payload = {
              type: "volunteer",
              name: data.get("name")?.toString() || "",
              email: data.get("email")?.toString() || "",
              subject: data.get("interest")?.toString() || "",
              message: data.get("why")?.toString() || "",
              extra: { phone: data.get("phone")?.toString() || "" },
            };

            try {
              await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });
            } catch (err) {
              console.error(err);
            }

            router.push("/");
            alert("Thank you! We will reach out with volunteer next steps.");
          }}
          className="rounded-3xl border border-border bg-white p-8 shadow-soft space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-sm font-medium">
              Full Name
              <input
                name="name"
                required
                className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
            <label className="block text-sm font-medium">
              Email
              <input
                name="email"
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
                name="phone"
                required
                className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
            <label className="block text-sm font-medium">
              Area of interest
              <input
                name="interest"
                required
                className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
          </div>
          <label className="block text-sm font-medium">
            Why do you want to volunteer?
            <textarea
              name="why"
              rows="5"
              required
              className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow hover:bg-primary/90 transition-smooth"
          >
            Submit Volunteer Request
          </button>
        </form>
      </div>
    </section>
  );
}

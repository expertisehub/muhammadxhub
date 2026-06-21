"use client";

import { useState } from "react";

export default function ContactModal({ closeContactModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name,
          email,
          subject,
          message,
        }),
      });
      const json = await res.json();
      if (res.ok) {
        setFeedback("Message sent — thank you!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => closeContactModal(), 1200);
      } else {
        setFeedback(json.error || "Failed to send message");
      }
    } catch (err) {
      setFeedback(String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-8 md:px-8">
      <div className="w-full max-w-2xl rounded-[2rem] bg-white p-6 md:p-10 shadow-glow">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Contact Form
            </p>
            <h3 className="mt-3 text-2xl font-display font-bold">
              Send us a message
            </h3>
          </div>
          <button
            type="button"
            onClick={closeContactModal}
            className="rounded-full border border-border px-3 py-2 text-sm text-muted-foreground hover:bg-muted transition-smooth"
          >
            Close
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Full Name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
            <label className="block text-sm font-medium">
              Email
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
          </div>
          <label className="block text-sm font-medium">
            Subject
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </label>
          <label className="block text-sm font-medium">
            Message
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </label>
          {feedback && (
            <div className="text-sm text-foreground/90">{feedback}</div>
          )}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={closeContactModal}
              className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-muted-foreground hover:bg-muted transition-smooth"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow hover:bg-primary/90 transition-smooth"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

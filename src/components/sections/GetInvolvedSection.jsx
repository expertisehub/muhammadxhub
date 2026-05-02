import { ArrowRight, Users, HeartHandshake, Building2 } from "lucide-react";

export default function GetInvolvedSection({
  startDonation,
  openVolunteerPage,
  openPartnerPage,
}) {
  const cards = [
    {
      icon: Users,
      title: "Volunteer",
      desc: "Lend your skills as a mentor, trainer, or community ambassador.",
      onClick: openVolunteerPage,
    },
    {
      icon: HeartHandshake,
      title: "Donate",
      desc: "Every contribution funds scholarships, training kits, and outreach.",
      onClick: startDonation,
    },
    {
      icon: Building2,
      title: "Partner With Us",
      desc: "Corporate, government, and NGO partnerships scale our reach.",
      onClick: openPartnerPage,
    },
  ];

  return (
    <section
      id="get-involved"
      className="mx-auto max-w-7xl px-4 md:px-6 py-24 scroll-mt-20"
    >
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Get Involved
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">
          Join the movement.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Volunteer your time, donate to power our programs, or partner with us
          to scale impact.
        </p>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-border bg-white p-8 shadow-soft hover-lift text-center"
          >
            <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
              <card.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mt-5 font-display font-semibold text-xl">
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{card.desc}</p>
            <button
              type="button"
              onClick={card.onClick}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Get started <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-3xl bg-gradient-cta p-10 md:p-14 text-center text-primary-foreground shadow-glow">
        <h3 className="text-2xl md:text-4xl font-bold">
          Power a young person's future today.
        </h3>
        <p className="mt-3 opacity-95 max-w-xl mx-auto">
          Your support trains a learner, equips a mentor, and reaches a
          community.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={startDonation}
            className="rounded-full bg-white text-primary px-7 py-3 font-semibold hover:bg-white/90 transition-smooth"
          >
            Donate Now
          </button>
          <button
            type="button"
            onClick={openPartnerPage}
            className="rounded-full border border-white/40 px-7 py-3 font-semibold hover:bg-white/10 transition-smooth"
          >
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}

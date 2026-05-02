import HeroSection from "./HeroSection.jsx";
import ProgramsSection from "./ProgramsSection.jsx";
import GetInvolvedSection from "./GetInvolvedSection.jsx";
import ContactSection from "./ContactSection.jsx";
import ContactModal from "./ContactModal.jsx";

export default function HomePage({
  heroImage,
  aboutImg,
  stats,
  stats2,
  programs,
  testimonials,
  posts,
  scrollRef,
  setSelectedProgram,
  startDonation,
  openVolunteerPage,
  openPartnerPage,
  isContactOpen,
  openContactModal,
  closeContactModal,
  handleContactSubmit,
}) {
  return (
    <>
      <HeroSection heroImage={heroImage} startDonation={startDonation} />

      <section className="mx-auto max-w-7xl px-4 md:px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 rounded-[2rem] border border-border bg-white/90 p-6 md:p-8 shadow-soft backdrop-blur-sm">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-[0.3em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up space-y-10">
            <div className="max-w-xl mx-auto text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                About Us
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold leading-tight">
                Building skills. Powering innovation. Transforming communities.
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Expertise Hub Empowerment Foundation is a youth-led NGO
                equipping Northern Nigerian youth with digital, entrepreneurial,
                and leadership skills to thrive in a changing world.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-border bg-white p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-white">
                    <span className="text-xl">🤝</span>
                  </span>
                  <div>
                    <h3 className="font-semibold">Our Values</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Integrity, innovation, inclusion, and measurable impact.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-border bg-white p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-white">
                    <span className="text-xl">💡</span>
                  </span>
                  <div>
                    <h3 className="font-semibold">Our Approach</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Practical training, sustained mentorship, and community
                      leadership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-glow">
            <img
              src={aboutImg}
              alt="Expertise Hub Foundation team and learners"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      <section id="goals" className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Our Goals
            </span>
            <p className="mt-4 text-muted-foreground">
              Strategic objectives for 2025–2035 across Northern Nigeria.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {stats2.map((stat, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="overflow-hidden rounded-[2rem] border border-border bg-white p-8 text-center shadow-soft transition-shadow duration-300 hover:shadow-glow"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-teal text-white">
                  <stat.icon className="h-7 w-7" />
                </div>
                <p className="text-5xl font-extrabold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-semibold text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="max-w-7xl mx-auto text-center space-y-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Current Impact 2024-2026
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "50,000", label: "Youth Target" },
                { value: "6", label: "Northern States" },
                { value: "4", label: "Strategic Pillars" },
                { value: "1M+", label: "Advocacy Reach Goal" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[2rem] border border-border bg-white p-6 shadow-soft"
                >
                  <p className="text-2xl font-extrabold text-primary">
                    {item.value}
                  </p>
                  <p className="text-gray-600 mt-3">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProgramsSection
        programs={programs}
        scrollRef={scrollRef}
        setSelectedProgram={setSelectedProgram}
      />

      <section
        id="impact"
        className="mx-auto max-w-7xl px-4 md:px-6 py-24 scroll-mt-20"
      >
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Impact & Stories
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">
            Real lives. Real change.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hear from the youth, mentors, and communities transformed through
            our programs.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="rounded-2xl bg-white border border-border shadow-soft p-6 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary/30">“</div>
              <p className="mt-4 text-foreground/90 italic">
                {testimonial.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="blog" className="bg-muted/40 py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              News & Blog
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">
              Stories from the field.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <article
                key={post.title}
                className="overflow-hidden rounded-2xl bg-white border border-border shadow-soft hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-semibold">{post.date}</span>
                  </div>
                  <h3 className="mt-2 font-display font-semibold text-lg leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GetInvolvedSection
        startDonation={startDonation}
        openVolunteerPage={openVolunteerPage}
        openPartnerPage={openPartnerPage}
      />

      <ContactSection openContactModal={openContactModal} />

      {isContactOpen && (
        <ContactModal
          closeContactModal={closeContactModal}
          handleContactSubmit={handleContactSubmit}
        />
      )}
    </>
  );
}

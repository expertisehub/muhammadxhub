import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {
  ArrowRight, Sparkles, Users, Target, Lightbulb, HeartHandshake, Globe2,
  GraduationCap, Briefcase, Building2, Mail, Phone, MapPin, Calendar, Quote,
} from "lucide-react";
import hero from "./assets/hero-youth.jpg";
import aboutImg from "./assets/about-team.jpg";
import digital from "./assets/program-digital.jpg";
import ideation from "./assets/program-ideation.jpg";
import mentorship from "./assets/program-mentorship.jpg";
import community from "./assets/program-community.jpg";
import capacity from "./assets/program-capacity.jpg";
import t1 from "./assets/testimonial-1.jpg";
import t2 from "./assets/testimonial-2.jpg";
import t3 from "./assets/testimonial-3.jpg";
import b1 from "./assets/blog-1.jpg";
import b2 from "./assets/blog-2.jpg";
import b3 from "./assets/blog-3.jpg";

const programs = [
  { img: digital, title: "Digital Skills Training", desc: "Hands-on web development, graphic design, digital marketing, and tech literacy — turning learners into earners." },
  { img: ideation, title: "Ideation & Social Entrepreneurship", desc: "Bootcamps that nurture problem-solvers building social ventures rooted in community needs." },
  { img: mentorship, title: "Mentorship & Career Development", desc: "1-on-1 mentoring with industry professionals, CV prep, and pathways into employment and freelancing." },
  { img: community, title: "Community Outreach", desc: "Boots-on-the-ground programs that meet youth where they are — schools, villages, and underserved neighborhoods." },
  { img: capacity, title: "State-Level Capacity Building", desc: "Multi-day initiatives with partners across six Northern Nigerian states, scaling impact statewide." },
];

const stats = [
  { value: "5,000+", label: "Youth Empowered" },
  { value: "6", label: "Northern States" },
  { value: "150+", label: "Workshops Delivered" },
  { value: "30+", label: "Partner Organizations" },
];

const testimonials = [
  { img: t1, name: "Aisha Bello", role: "Web Developer, Kano", quote: "Expertise Hub gave me skills, mentors, and a community. I now build websites for clients across Nigeria." },
  { img: t2, name: "Musa Ibrahim", role: "Founder, AgriTech Startup", quote: "The ideation bootcamp turned my idea into a real social enterprise serving farmers in my village." },
  { img: t3, name: "Hauwa Yusuf", role: "Digital Marketer", quote: "From zero tech knowledge to managing campaigns for SMEs in 6 months — this program changed my life." },
];

const posts = [
  { img: b1, title: "How Digital Skills Are Reshaping Opportunity in Northern Nigeria", date: "Apr 12, 2026", excerpt: "A look at the youth-led digital revolution growing across Kano, Kaduna, and beyond." },
  { img: b2, title: "Inside Our 2026 Mentorship Cohort", date: "Mar 28, 2026", excerpt: "Meet the 120 young women and men matched with mentors across tech, design, and entrepreneurship." },
  { img: b3, title: "Why Community Outreach Still Matters", date: "Mar 14, 2026", excerpt: "Reaching learners in underserved communities — and what we're learning on the ground." },
];

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section id="home" className="relative isolate min-h-[92vh] flex items-center justify-center overflow-hidden">
          <img src={hero} alt="Northern Nigerian youth learning digital skills together" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6 py-20 text-center text-primary-foreground animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border border-white/20">
              <Sparkles className="h-3.5 w-3.5" /> Northern Nigeria Youth Empowerment
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Empowering Northern Nigerian Youth Through{" "}
              <span className="bg-gradient-warm bg-clip-text text-transparent">Skills, Innovation & Opportunity</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-base md:text-xl opacity-95 text-balance">
              Digital Skills Training, Mentorship, Workshops, and Social Entrepreneurship Across Northern Nigeria.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#programs" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold shadow-glow hover:scale-105 transition-smooth">
                Join Our Programs <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#get-involved" className="inline-flex items-center justify-center rounded-full bg-white text-primary px-7 py-3.5 font-semibold shadow-soft hover:bg-white/90 transition-smooth">
                Donate Now
              </a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="mx-auto max-w-7xl px-4 md:px-6 -mt-12 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl bg-white shadow-soft border border-border p-6 md:p-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-4xl font-display font-bold text-primary">{s.value}</div>
                <div className="mt-1 text-xs md:text-sm text-muted-foreground uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-7xl px-4 md:px-6 py-24 grid md:grid-cols-2 gap-12 items-center scroll-mt-20">
          <div className="animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">About Us</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold leading-tight">Building skills. Powering innovation. Transforming communities.</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Expertise Hub Empowerment Foundation is a youth-led NGO equipping young Northern Nigerians with digital, entrepreneurial, and leadership skills to thrive in a changing world.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <div className="flex gap-3">
                <Target className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold">Our Mission</h3>
                  <p className="text-sm text-muted-foreground mt-1">Empower youth with skills, mentorship, and opportunity.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Globe2 className="h-6 w-6 text-secondary shrink-0" />
                <div>
                  <h3 className="font-semibold">Our Vision</h3>
                  <p className="text-sm text-muted-foreground mt-1">A digitally empowered Northern Nigeria.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <HeartHandshake className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-semibold">Our Values</h3>
                  <p className="text-sm text-muted-foreground mt-1">Integrity, Innovation, Inclusion, Impact.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Lightbulb className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold">Our Approach</h3>
                  <p className="text-sm text-muted-foreground mt-1">Practical training, real mentorship, lasting community.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-glow hover-lift">
            <img src={aboutImg} alt="Expertise Hub Foundation team and learners" className="w-full h-full object-cover aspect-[4/3]" />
          </div>
        </section>

        {/* PROGRAMS */}
        <section id="programs" className="bg-muted/40 py-24 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Programs</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">Practical training. Real opportunity.</h2>
              <p className="mt-4 text-muted-foreground">Five interconnected programs designed to equip Northern Nigerian youth with skills, mindset, and a network.</p>
            </div>
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((p, i) => (
                <article key={p.title} className="group overflow-hidden rounded-2xl bg-white border border-border shadow-soft hover-lift flex flex-col animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-smooth" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
                    <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section id="impact" className="mx-auto max-w-7xl px-4 md:px-6 py-24 scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Impact & Stories</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">Real lives. Real change.</h2>
            <p className="mt-4 text-muted-foreground">Hear from the youth, mentors, and communities transformed through our programs.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <article key={t.name} className="rounded-2xl bg-white border border-border shadow-soft p-6 hover-lift animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <Quote className="h-8 w-8 text-primary/30" />
                <p className="mt-4 text-foreground/90 italic">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BLOG */}
        <section id="blog" className="bg-muted/40 py-24 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">News & Blog</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">Stories from the field.</h2>
            </div>
            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <article key={post.title} className="overflow-hidden rounded-2xl bg-white border border-border shadow-soft hover-lift animate-fade-up" style={{ animationDelay: `${i * 90}ms` }}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={post.img} alt={post.title} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-smooth" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" /> {post.date}
                    </div>
                    <h3 className="mt-2 font-display font-semibold text-lg leading-snug">{post.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GET INVOLVED */}
        <section id="get-involved" className="mx-auto max-w-7xl px-4 md:px-6 py-24 scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Get Involved</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">Join the movement.</h2>
            <p className="mt-4 text-muted-foreground">Volunteer your time, donate to power our programs, or partner with us to scale impact.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Volunteer", desc: "Lend your skills as a mentor, trainer, or community ambassador." },
              { icon: HeartHandshake, title: "Donate", desc: "Every contribution funds scholarships, training kits, and outreach." },
              { icon: Building2, title: "Partner With Us", desc: "Corporate, government, and NGO partnerships scale our reach." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-white p-8 shadow-soft hover-lift text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Get started <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-gradient-cta p-10 md:p-14 text-center text-primary-foreground shadow-glow">
            <h3 className="text-2xl md:text-4xl font-bold">Power a young person's future today.</h3>
            <p className="mt-3 opacity-95 max-w-xl mx-auto">Your support trains a learner, equips a mentor, and reaches a community.</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#contact" className="rounded-full bg-white text-primary px-7 py-3 font-semibold hover:bg-white/90 transition-smooth">Donate Now</a>
              <a href="#contact" className="rounded-full border border-white/40 px-7 py-3 font-semibold hover:bg-white/10 transition-smooth">Become a Partner</a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-muted/40 py-24 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Contact</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">Let's build the future together.</h2>
              <p className="mt-4 text-muted-foreground">Reach out for partnerships, program enrollment, media inquiries, or to volunteer.</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" /> Kano State, Nigeria</li>
                <li className="flex items-start gap-3"><Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" /> <a href="https://wa.me/2347025648826" className="hover:text-primary">+234 702 564 8826 (WhatsApp)</a></li>
                <li className="flex items-start gap-3"><Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" /> <a href="mailto:Expertisehub1@gmail.com" className="hover:text-primary break-all">Expertisehub1@gmail.com</a></li>
              </ul>
            </div>

            <form className="rounded-2xl bg-white border border-border shadow-soft p-6 md:p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll be in touch soon."); }}>
              <div>
                <label className="text-sm font-medium" htmlFor="name">Full Name</label>
                <input id="name" required className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="email">Email</label>
                <input id="email" type="email" required className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="subject">Subject</label>
                <input id="subject" className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="message">Message</label>
                <textarea id="message" rows="4" required className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center rounded-full bg-gradient-cta px-6 py-3 font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-smooth">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "../components/sections/HeroSection.jsx";
import ProgramsSection from "../components/sections/ProgramsSection.jsx";
import GetInvolvedSection from "../components/sections/GetInvolvedSection.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";
import ContactModal from "../components/sections/ContactModal.jsx";
import { Users, MapPin, BookOpen, Megaphone } from "lucide-react";

const aboutImg = "/DSC_9894.jpg";
const digital = "/DSC_0093.jpg";
const ideation = "/DSC_0146.jpg";
const mentorship = "/DSC_0594.jpg";
const community = "/DSC_0673.jpg";
const capacity = "/DSC_0930.jpg";
const t1 = "/DSC_0963.jpg";
const t2 = "/DSC_8611.jpg";
const t3 = "/DSC_8614.jpg";
const b1 = "/DSC_8632.jpg";
const b2 = "/DSC_9598.jpg";
const b3 = "/DSC_9609.jpg";

const programs = [
  {
    img: digital,
    title: "Digital Skills Training",
    desc: "Hands-on web development, graphic design, digital marketing, and tech literacy — turning learners into earners.",
    details:
      "Our Digital Skills Training program equips youth with essential tech skills through intensive, hands-on courses in web development, graphic design, digital marketing, and computer literacy. Participants learn practical tools and software used in today's job market. This program has helped over 10,000 youths secure employment in tech roles, start freelance businesses, and become self-sufficient. Many graduates have launched their own digital agencies and online services, contributing to the growing digital economy in Northern Nigeria.",
  },
  {
    img: ideation,
    title: "Ideation & Social Entrepreneurship",
    desc: "Bootcamps that nurture problem-solvers building social ventures rooted in community needs.",
    details:
      "The Ideation & Social Entrepreneurship program fosters innovative thinking and business creation among young people. Through intensive bootcamps, participants learn to identify community problems and develop sustainable solutions. The program covers business planning, market research, and social impact measurement. Over 2,000 youths have developed and launched social enterprises addressing issues like agriculture, education, and healthcare. This initiative has created jobs and improved living conditions in underserved communities across Northern Nigeria.",
  },
  {
    img: mentorship,
    title: "Mentorship & Career Development",
    desc: "1-on-1 mentoring with industry professionals, CV prep, and pathways into employment and freelancing.",
    details:
      "Our Mentorship & Career Development program connects talented youth with experienced professionals in their fields. Participants receive personalized guidance, resume building, interview preparation, and career counseling. The program has facilitated over 5,000 mentorship relationships, leading to internships, job placements, and entrepreneurial ventures. Many mentees have advanced their careers significantly, with some becoming leaders in their industries and giving back to their communities.",
  },
  {
    img: community,
    title: "Community Outreach",
    desc: "Boots-on-the-ground programs that meet youth where they are — schools, villages, and underserved neighborhoods.",
    details:
      "Community Outreach brings our programs directly to youth in their local environments. We partner with schools, community centers, and local organizations to deliver training in accessible locations. This approach has reached over 15,000 youths who might not otherwise have access to educational opportunities. The program includes mobile training units and community partnerships, ensuring that geographic and economic barriers don't prevent youth from participating in skill development.",
  },
  {
    img: capacity,
    title: "State-Level Capacity Building",
    desc: "Multi-day initiatives with partners across six Northern Nigerian states, scaling impact statewide.",
    details:
      "State-Level Capacity Building involves large-scale training initiatives in partnership with state governments and organizations. These multi-day programs bring together youth from across regions for intensive skill development and networking. We've conducted programs in Kano, Kaduna, Katsina, Jigawa, Bauchi, and Sokoto states, training over 8,000 youths. This program strengthens local economies by building a skilled workforce and fostering regional collaboration.",
  },
];

const stats2 = [
  {
    number: "50k",
    label: "Youth Target",
    icon: <Users className="h-7 w-7 text-white" />,
  },
  {
    number: "5",
    label: "States Covered",
    icon: <MapPin className="h-7 w-7 text-white" />,
  },
  {
    number: "200",
    label: "School Clubs",
    icon: <BookOpen className="h-7 w-7 text-white" />,
  },
  {
    number: "1M+",
    label: "Awareness Reach",
    icon: <Megaphone className="h-7 w-7 text-white" />,
  },
];
const stats = [
  { value: "5,000+", label: "Youth Empowered" },
  { value: "6", label: "Northern States" },
  { value: "150+", label: "Workshops Delivered" },
  { value: "30+", label: "Partner Organizations" },
];

const testimonials = [
  {
    img: t1,
    name: "Aisha Bello",
    role: "Web Developer, Kano",
    quote:
      "Expertise Hub gave me skills, mentors, and a community. I now build websites for clients across Nigeria.",
  },
  {
    img: t2,
    name: "Musa Ibrahim",
    role: "Founder, AgriTech Startup",
    quote:
      "The ideation bootcamp turned my idea into a real social enterprise serving farmers in my village.",
  },
  {
    img: t3,
    name: "Hauwa Yusuf",
    role: "Digital Marketer",
    quote:
      "From zero tech knowledge to managing campaigns for SMEs in 6 months — this program changed my life.",
  },
];

const posts = [
  {
    img: b1,
    title: "How Digital Skills Are Reshaping Opportunity in Northern Nigeria",
    date: "Apr 12, 2026",
    excerpt:
      "A look at the youth-led digital revolution growing across Kano, Kaduna, and beyond.",
  },
  {
    img: b2,
    title: "Inside Our 2026 Mentorship Cohort",
    date: "Mar 28, 2026",
    excerpt:
      "Meet the 120 young women and men matched with mentors across tech, design, and entrepreneurship.",
  },
  {
    img: b3,
    title: "Why Community Outreach Still Matters",
    date: "Mar 14, 2026",
    excerpt:
      "Reaching learners in underserved communities — and what we're learning on the ground.",
  },
];

export default function HomePage() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const scrollRef = useRef(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [
    "/DSC_9894.jpg",
    "/DSC_0093.jpg",
    "/DSC_0146.jpg",
    "/DSC_0594.jpg",
    "/DSC_0673.jpg",
    "/DSC_0930.jpg",
  ];
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const startDonation = () => router.push("/donate");
  const openVolunteerPage = () => router.push("/volunteer");
  const openPartnerPage = () => router.push("/partner");
  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setIsContactOpen(false);
  };

  return (
    <>
      <HeroSection
        heroImage={heroImages[heroIndex]}
        startDonation={startDonation}
      />

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
                  {stat.icon}
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

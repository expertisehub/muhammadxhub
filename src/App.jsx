import { useState, useEffect, useRef } from "react";
import { Users, MapIcon, GraduationCap, Globe2 } from "lucide-react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/sections/HomePage.jsx";
import DonationPage from "./components/sections/DonationPage.jsx";
import VolunteerPage from "./components/sections/VolunteerPage.jsx";
import PartnerPage from "./components/sections/PartnerPage.jsx";
import ProgramModal from "./components/sections/ProgramModal.jsx";
import aboutImg from "./assets/DSC_9894.jpg";
import digital from "./assets/DSC_0093.jpg";
import ideation from "./assets/DSC_0146.jpg";
import mentorship from "./assets/DSC_0594.jpg";
import community from "./assets/DSC_0673.jpg";
import capacity from "./assets/DSC_0930.jpg";
import t1 from "./assets/DSC_0963.jpg";
import t2 from "./assets/DSC_8611.jpg";
import t3 from "./assets/DSC_8614.jpg";
import b1 from "./assets/DSC_8632.jpg";
import b2 from "./assets/DSC_9598.jpg";
import b3 from "./assets/DSC_9609.jpg";

const imageModules = import.meta.glob("./assets/*.{jpg,jpeg}", { eager: true });
const allImages = Object.values(imageModules).map((module) => module.default);

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
  { number: "50k", label: "Youth Target", icon: Users },
  { number: "5", label: "States Covered", icon: MapIcon },
  { number: "200", label: "School Clubs", icon: GraduationCap },
  { number: "1M+", label: "Awareness Reach", icon: Globe2 },
];
const impactStats = [
  { label: "Youth trained", value: 50000 },
  { label: "States reached", value: 5 },
  { label: "Pillars active", value: 4 },
  { label: "People reached", value: 1000000 },
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

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const [donationMethod, setDonationMethod] = useState("");
  const [nairaAmount, setNairaAmount] = useState("");
  const [donationEmail, setDonationEmail] = useState("");
  const [donationFeedback, setDonationFeedback] = useState("");
  const [fundSent, setFundSent] = useState(false);
  const [dollarSent, setDollarSent] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const heroImages = allImages;
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const startDonation = () => {
    setDonationMethod("naira");
    setCurrentPage("donation");
  };

  const openVolunteerPage = () => {
    setCurrentPage("volunteer");
  };

  const openPartnerPage = () => {
    setCurrentPage("partner");
  };

  const openContactModal = () => {
    setIsContactOpen(true);
  };

  const closeContactModal = () => {
    setIsContactOpen(false);
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setIsContactOpen(false);
    setDonationFeedback(
      "Thank you for reaching out. We will get back to you soon.",
    );
  };

  const handleSelectMethod = (method) => {
    setDonationMethod(method);
    setNairaAmount("");
    setDonationEmail("");
    setDonationFeedback("");
    setFundSent(false);
    setDollarSent(false);
  };

  const handlePaystackDonation = () => {
    if (!donationMethod) {
      setDonationFeedback("Please choose a donation currency first.");
      return;
    }

    if (donationMethod === "naira") {
      if (!nairaAmount || !donationEmail) {
        setDonationFeedback("Please enter both an amount and email.");
        return;
      }
      setFundSent(true);
      setDonationFeedback(
        "Your Paystack payment is processing — thank you for your support.",
      );
      return;
    }

    setDonationFeedback(
      "If you choose Dollar, please complete the bank transfer details and then confirm.",
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header startDonation={startDonation} />
      <main className="flex-1">
        {currentPage === "home" ? (
          <HomePage
            heroImage={heroImages[heroIndex]}
            aboutImg={aboutImg}
            stats={stats}
            stats2={stats2}
            programs={programs}
            testimonials={testimonials}
            posts={posts}
            scrollRef={scrollRef}
            setSelectedProgram={setSelectedProgram}
            startDonation={startDonation}
            openVolunteerPage={openVolunteerPage}
            openPartnerPage={openPartnerPage}
            isContactOpen={isContactOpen}
            openContactModal={openContactModal}
            closeContactModal={closeContactModal}
            handleContactSubmit={handleContactSubmit}
          />
        ) : currentPage === "donation" ? (
          <DonationPage
            donationMethod={donationMethod}
            nairaAmount={nairaAmount}
            donationEmail={donationEmail}
            donationFeedback={donationFeedback}
            fundSent={fundSent}
            dollarSent={dollarSent}
            setNairaAmount={setNairaAmount}
            setDonationEmail={setDonationEmail}
            setCurrentPage={setCurrentPage}
            handleSelectMethod={handleSelectMethod}
            handlePaystackDonation={handlePaystackDonation}
            setDollarSent={setDollarSent}
            setDonationFeedback={setDonationFeedback}
          />
        ) : currentPage === "volunteer" ? (
          <VolunteerPage onBack={() => setCurrentPage("home")} />
        ) : currentPage === "partner" ? (
          <PartnerPage onBack={() => setCurrentPage("home")} />
        ) : null}
      </main>
      {selectedProgram && (
        <ProgramModal
          selectedProgram={selectedProgram}
          onClose={() => setSelectedProgram(null)}
        />
      )}
      <Footer />
    </div>
  );
}

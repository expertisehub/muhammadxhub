import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection({ heroImage, startDonation }) {
  return (
    <section
      id="home"
      className="relative isolate min-h-[92vh] flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Northern Nigerian youth learning digital skills together"
        className="absolute inset-0 h-full w-full object-contain transition-opacity duration-1000 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6 py-20 text-center text-primary-foreground animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border border-white/20">
          <Sparkles className="h-3.5 w-3.5" /> Northern Nigeria Youth
          Empowerment
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
          Empowering Northern Nigeria's Youth to Lead,{" "}
          <span className="bg-gradient-warm bg-clip-text text-transparent">
            Innovate, and Thrive
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-xl opacity-95 text-balance">
          We equip young people aged 14–30 with practical skills, leadership
          pathways, and inclusive opportunities that drive economic empowerment
          and social transformation.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#programs"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold shadow-glow hover:scale-105 transition-smooth"
          >
            Join Our Programs <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={startDonation}
            className="inline-flex items-center justify-center rounded-full bg-white text-primary px-7 py-3.5 font-semibold shadow-soft hover:bg-white/90 transition-smooth"
          >
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
}

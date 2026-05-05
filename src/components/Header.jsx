import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#impact", label: "Impact" },
  { href: "#blog", label: "Blog" },
  { href: "#get-involved", label: "Get Involved" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ startDonation }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-smooth ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a
          href="#home"
          className="flex items-center gap-2 hover:opacity-80 transition-smooth"
        >
          <img
            src={logo}
            alt="Expertise Hub Foundation logo"
            className="h-10 w-10 object-contain"
            width={40}
            height={40}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-bold text-foreground text-sm">
              Expertise Hub
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
              Empowerment Foundation
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 rounded-md hover:text-primary hover:bg-primary/5 transition-smooth"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={startDonation}
            className="ml-3 inline-flex items-center justify-center rounded-full bg-gradient-cta px-5 py-2 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-smooth"
          >
            Donate
          </button>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-muted text-foreground"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white animate-fade-in">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="px-3 py-3 text-base font-medium rounded-md hover:bg-muted transition-smooth"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                close();
                startDonation();
              }}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-cta px-5 py-3 text-base font-semibold text-primary-foreground shadow-soft"
            >
              Donate Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="mt-2 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Expertise Hub Foundation logo"
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-foreground text-sm">
                  Expertise Hub
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                  Foundation
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Building skills, powering innovation, and transforming communities
              across Northern Nigeria.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="flex flex-col leading-tight mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Our Programs
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Impact
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  News & Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Get Involved</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="#get-involved"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href="#get-involved"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="#get-involved"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Partner With Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Kano State, Nigeria</li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <a href="https://wa.me/2347025648826" className="hover:text-primary">+234 702 564 8826</a></li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <a href="mailto:Expertisehub1@gmail.com" className="hover:text-primary break-all">Expertisehub1@gmail.com</a></li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"><Facebook className="h-4 w-4" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"><Linkedin className="h-4 w-4" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"><Instagram className="h-4 w-4" /></a>
            </div>
          </div> */}
        </div>

        <div className="mt-12 border-t border-border pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Expertise Hub Empowerment Foundation.
            All rights reserved.
          </p>
          <p>Empowering Northern Nigerian Youth · Madauki da fasaha</p>
        </div>
      </div>
    </footer>
  );
}

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection({ openContactModal }) {
  return (
    <section id="contact" className="bg-muted/40 py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-12">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Contact
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">
            Let's build the future together.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reach out for partnerships, program enrollment, media inquiries, or
            to volunteer.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" /> Kano
              State, Nigeria
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <a
                href="https://wa.me/2347025648826"
                className="hover:text-primary"
              >
                +234 702 564 8826 (WhatsApp)
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <a
                href="mailto:Expertisehub1@gmail.com"
                className="hover:text-primary break-all"
              >
                Expertisehub1@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-white p-8 shadow-soft flex flex-col justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Ready to connect?</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              The contact form is hidden until you're ready. Open it only when
              you want to share your details.
            </p>
          </div>
          <button
            type="button"
            onClick={openContactModal}
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow hover:bg-primary/90 transition-smooth"
          >
            Send a Message
          </button>
        </div>
      </div>
    </section>
  );
}

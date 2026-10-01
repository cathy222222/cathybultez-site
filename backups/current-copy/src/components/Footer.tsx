import { ArrowUp, Facebook, Mail, MapPin, Phone } from "lucide-react";
import ndVertigneul from "@/assets/nd-vertigneul.png";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-olive pt-24 text-cream lg:pt-32">
      {/* decorative glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-goldbright/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-sanddeep/10 blur-3xl" />

      <img
        src={ndVertigneul}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-4 w-auto max-w-none -translate-x-1/2 object-contain opacity-80 mix-blend-multiply"
        style={{
          height: "min(60vw, 30rem)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 60%, transparent 92%)",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 60%, transparent 92%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center">
          <p className="reveal text-[13px] font-semibold uppercase tracking-[0.3em] text-cream/70">
            Contactez-moi
          </p>
          <h2 className="reveal mt-6 font-display text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Prenez soin de vous,
            <br />
            <span className="italic text-sanddeep">je vous accompagne</span>.
          </h2>
        </div>

        <div className="reveal mt-40 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="tel:0610197558"
            className="group inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-base font-semibold text-ink transition-all duration-300 hover:bg-sanddeep"
          >
            <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            06 10 19 75 58
          </a>
          <a
            href="mailto:cathybultez@hotmail.com"
            className="group inline-flex items-center gap-3 rounded-full border border-cream/40 px-8 py-4 text-base font-medium text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10"
          >
            <Mail className="h-4 w-4" />
            cathybultez@hotmail.com
          </a>
        </div>

        <div className="reveal mt-20 grid gap-10 border-t border-cream/20 pt-14 sm:grid-cols-3">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 text-sanddeep sm:justify-start">
              <MapPin className="h-4 w-4" />
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.25em]">Le cabinet</h3>
            </div>
            <p className="mt-4 font-display text-xl font-light leading-snug">
              Cathy Bultez
              <br />
              59730 Romeries
              <br />
              Hauts-de-France
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.25em] text-sanddeep">
              Prise de rendez-vous
            </h3>
            <p className="mt-4 font-light leading-relaxed text-cream/85">
              Par téléphone ou par e-mail.
              <br />
              Séances à distance ou en présentiel.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.25em] text-sanddeep">
              Règlement
            </h3>
            <p className="mt-4 font-light leading-relaxed text-cream/85">
              Chèque, espèces ou RIB acceptés.
            </p>
          </div>
        </div>

        <div className="reveal mt-14 flex flex-wrap justify-center gap-x-8 gap-y-4 border-t border-cream/20 pt-8 text-xs font-semibold uppercase tracking-[0.18em] text-cream/70 sm:justify-start">
          <a
            href="https://www.google.com/maps/place/Cathy+Bultez+-+Praticienne+en+Massages+et+Bien-Etre/@50.2445525,3.6416956,17z/data=!3m1!4b1!4m6!3m5!1s0x47c28bbe74794fd9:0x94daa5c5b0e3d7e!8m2!3d50.2445525!4d3.6442705!16s%2Fg%2F11krdl445g?entry=ttu"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-cream"
          >
            Avis Google
          </a>
          <a
            href="https://www.facebook.com/BultezCathy/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-cream"
          >
            <Facebook className="h-3.5 w-3.5" />
            Facebook
          </a>
          <a href="/mentions-legales" className="transition-colors hover:text-cream">
            Mentions légales
          </a>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-cream/20 py-8 sm:flex-row">
          <p className="text-xs tracking-wide text-cream/60">
            © {new Date().getFullYear()} Cathy Bultez — Thérapeute Énergétique · Massothérapeute
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cream/70 transition-colors hover:text-cream"
          >
            Retour en haut
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}

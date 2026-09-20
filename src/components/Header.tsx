import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const navLinks = [
  { label: "L'approche", href: "/#approche" },
  { label: "Soins", href: "/#soins" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Bon cadeau", href: "/#bon-cadeau" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/10 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a href="/" className="flex flex-col text-ink">
          <span className="font-display text-2xl font-medium tracking-tight">
            Cathy <span className="italic text-gold">Bultez</span>
          </span>
          <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-ink/60">
            Romeries - Région hauts de France - 59
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[13px] font-medium uppercase tracking-[0.18em] text-ink/70 transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="tel:0610197558"
            className="group inline-flex items-center gap-2.5 rounded-full border border-ink/15 px-5 py-2.5 text-[13px] font-semibold tracking-wide text-ink transition-all duration-300 hover:border-gold hover:bg-gold hover:text-cream"
          >
            <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
            06 10 19 75 58
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[110] bg-ink/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`fixed right-0 top-0 z-[120] h-full w-80 max-w-[85vw] transform bg-cream p-7 shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl font-medium text-ink">Menu</span>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink"
            onClick={() => setMobileOpen(false)}
            aria-label="Fermer le menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-10 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-2xl px-4 py-3.5 font-display text-2xl font-light text-ink transition-colors hover:bg-sand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0610197558"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-golddeep"
          >
            <Phone className="h-4 w-4" />
            06 10 19 75 58
          </a>
        </nav>
      </div>
    </header>
  );
}

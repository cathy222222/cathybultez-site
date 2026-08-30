import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  Sparkles,
  Home,
  ArrowRight,
  Check,
} from "lucide-react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Cathy Bultez — Thérapeute énergétique & Massothérapeute · Romeries",
      },
      {
        name: "description",
        content:
          "Cathy Bultez, thérapeute énergétique et massothérapeute à Romeries. Accompagnement thérapeutique, massage des 5 Continents, massage assis Amma, tarifs et contact.",
      },
      {
        property: "og:title",
        content: "Cathy Bultez — Thérapeute énergétique & Massothérapeute · Romeries",
      },
      {
        property: "og:description",
        content:
          "Accompagnement thérapeutique, massage des 5 Continents, massage assis Amma, magnétisme et soins énergétiques à Romeries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const unsplashImages = {
  hero: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1920&q=80",
  soin1: "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?auto=format&fit=crop&w=800&q=80",
  soin2: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
  soin3: "https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?auto=format&fit=crop&w=800&q=80",
  portrait: "https://images.unsplash.com/photo-1622352607117-88f6089aa418?auto=format&fit=crop&w=800&q=80",
};

const concerns = [
  "Fatigue",
  "Stress",
  "Angoisses",
  "Anxiété",
  "Troubles du sommeil",
  "Deuil",
  "Addictions",
  "Manque de confiance",
  "Douleurs corporelles",
  "Traumatismes",
  "Vécu de la maladie",
];

const reactions = [
  {
    title: "Libération émotionnelle",
    text: "Des émotions ou sensations peuvent réapparaître temporairement après la séance.",
  },
  {
    title: "Fatigue ou énergie",
    text: "Une sensation de fatigue ou, au contraire, de dynamisme peut être ressentie.",
  },
  {
    title: "Légèreté",
    text: "Une sensation de légèreté peut accompagner le vécu de la séance.",
  },
  {
    title: "Douleurs",
    text: "Les sensations corporelles peuvent évoluer au fil du travail et des prises de conscience.",
  },
  {
    title: "Sensibilité émotionnelle",
    text: "Une période de sensibilité accrue peut être ressentie après le soin.",
  },
  {
    title: "Pas de sensation",
    text: "Chaque sensibilité est différente : ne presque rien ressentir pendant la séance est possible.",
  },
];

const formations = [
  "Psycho Sophro Énergétique",
  "Massage des 5 Continents",
  "Massage Métamorphique",
  "Massage Assis Amma",
];

function Marquee() {
  const items = [
    "Soins énergétiques",
    "Massage des 5 Continents",
    "Massage assis Amma",
    "Magnétisme — personnes & animaux",
    "Accompagnement à distance",
    "Lâcher-prise",
    "Reconnexion à soi",
  ];
  const content = items.join(" ✤ ");
  return (
    <div className="overflow-hidden border-y border-line bg-creamdark py-5">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap px-5 text-sm font-medium tracking-wide text-sage">
        <span>{content} ✤ </span>
        <span>{content} ✤ </span>
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"}`}>
      <span className="text-xs font-semibold uppercase tracking-widest text-gold">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
        {title.split("
").map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-goldline bg-cream p-8 text-center sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sagelight text-sage">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-xl font-semibold text-ink">Message envoyé</h3>
        <p className="mt-2 text-sage">
          Merci pour votre message. Je vous recontacte dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nom" className="text-ink">
            Nom <span className="text-gold">*</span>
          </Label>
          <Input
            id="nom"
            name="nom"
            required
            placeholder="Votre nom"
            className="rounded-xl border-line bg-cream focus-visible:ring-gold"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-ink">
            Email <span className="text-gold">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="votre@email.com"
            className="rounded-xl border-line bg-cream focus-visible:ring-gold"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="telephone" className="text-ink">
            Téléphone
          </Label>
          <Input
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="06 00 00 00 00"
            className="rounded-xl border-line bg-cream focus-visible:ring-gold"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="prestation" className="text-ink">
            Prestation
          </Label>
          <Select name="prestation">
            <SelectTrigger className="rounded-xl border-line bg-cream focus:ring-gold">
              <SelectValue placeholder="Choisir…" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-line bg-cream">
              <SelectItem value="accompagnement">Accompagnement thérapeutique</SelectItem>
              <SelectItem value="massage-5-continents">Massage des 5 Continents</SelectItem>
              <SelectItem value="massage-amma">Massage assis Amma</SelectItem>
              <SelectItem value="bon-cadeau">Bon cadeau</SelectItem>
              <SelectItem value="autre">Autre demande</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-ink">
          Message <span className="text-gold">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre demande…"
          className="rounded-xl border-line bg-cream focus-visible:ring-gold"
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-full bg-gold py-6 text-base font-medium text-ink hover:bg-gold/90"
      >
        Envoyer mon message
      </Button>
    </form>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={unsplashImages.hero}
            alt="Ambiance spa et pierres de bien-être"
            className="h-[120%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/45 via-cream/20 to-cream" />
        </div>
        <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-sage/25 blur-[110px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-40 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-goldline bg-white/60 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-sage" />
              <span className="text-sm font-medium text-ink">Romeries · Hauts-de-France</span>
            </div>
            <h1 className="font-display text-4xl font-medium leading-[1.1] text-ink sm:text-6xl lg:text-7xl">
              Thérapeute énergétique <span className="text-sage">&</span> massothérapeute
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl">
              Je vous accompagne vers l'apaisement du corps et de l'esprit — au cabinet, à domicile
              ou à distance.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold/90"
              >
                Réserver un soin
              </a>
              <a
                href="#soins"
                className="inline-flex items-center justify-center rounded-full border border-line bg-cream/60 px-7 py-3.5 text-sm font-medium text-ink backdrop-blur-sm transition-colors hover:bg-creamdark"
              >
                Découvrir les soins
              </a>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Approche */}
      <section id="approche" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionTitle eyebrow="L'approche" title="Prendre soin de soi,
en profondeur" />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-lg leading-relaxed text-ink/80">
              Les consultations peuvent concerner des difficultés physiques ou émotionnelles et se
              dérouler au cabinet, à domicile ou à distance selon la prestation.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {concerns.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-goldline"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {[
              {
                icon: Sparkles,
                title: "Soins énergétiques",
                text: "Des soins énergétiques et certains accompagnements sont également proposés à distance.",
              },
              {
                icon: Home,
                title: "Cabinet & domicile",
                text: "Les consultations se déroulent au cabinet, à domicile ou à distance selon la prestation.",
              },
              {
                icon: Heart,
                title: "Magnétisme",
                text: "Des interventions de magnétisme pour les personnes et les animaux.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:border-goldline hover:shadow-[0_12px_40px_rgba(28,32,26,0.06)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sagelight text-sage">
                  <card.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{card.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-sage">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex gap-4 rounded-2xl border border-goldline bg-creamdark p-6 sm:p-8">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/20 text-ink">
            <span className="text-sm font-bold">É</span>
          </div>
          <div>
            <h3 className="font-semibold text-ink">Éthique</h3>
            <p className="mt-1 text-sm leading-relaxed text-sage">
              Les bilans et prises en charge énergétiques présentés ici ne constituent pas des actes
              médicaux. Aucun diagnostic médical n'est posé et aucun traitement ne doit être modifié
              ou interrompu sans l'avis du médecin traitant ou d'un spécialiste.
            </p>
          </div>
        </div>
      </section>

      {/* Soins */}
      <section id="soins" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <SectionTitle eyebrow="Les soins" title="Trois chapitres pour
se reconnecter" />

          <div className="mt-16 space-y-24 sm:space-y-32">
            {/* Soin 1 */}
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 lg:order-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">01</span>
                <h3 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
                  Accompagnement thérapeutique
                </h3>
                <p className="mt-4 leading-relaxed text-ink/80">
                  Une thérapie demande généralement plusieurs séances. Le nombre de rendez-vous
                  dépend du besoin de la personne et de son évolution dans la résolution de sa
                  problématique.
                </p>
                <p className="mt-4 leading-relaxed text-ink/80">
                  Selon les situations, différents outils peuvent être mobilisés : libération par la
                  parole, rééquilibrage énergétique, travail sur la mémoire, approches
                  transgénérationnelle, karmique ou prénatale, sophronisation thérapeutique, bol
                  chantant tibétain, tambour…
                </p>
                <div className="mt-8 inline-flex flex-col gap-1 rounded-2xl border border-goldline bg-cream px-6 py-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-semibold text-ink">60 €</span>
                    <span className="text-sm text-sage">1 h 30</span>
                  </div>
                  <p className="text-sm text-sage">Tout public · en présentiel ou à distance (téléphone / visio)</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="gold-frame overflow-hidden rounded-3xl">
                  <img
                    src={unsplashImages.soin1}
                    alt="Massage du dos en séance de bien-être"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>

            {/* Soin 2 */}
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="gold-frame overflow-hidden rounded-3xl">
                  <img
                    src={unsplashImages.soin2}
                    alt="Huiles essentielles et préparations de massage"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">02</span>
                <h3 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
                  Massage des 5 Continents
                </h3>
                <p className="mt-4 leading-relaxed text-ink/80">
                  Cette approche associe un massage complet, lent et profond à une dimension
                  énergétique. Une démarche favorisant le lâcher-prise, la reconnexion à soi et la
                  libération des tensions émotionnelles, au fil de préparations d'huiles essentielles
                  (huile végétale neutre possible en cas d'allergie, à signaler à la prise de
                  rendez-vous).
                </p>
                <div className="mt-6 space-y-4 rounded-2xl border border-line bg-cream p-6">
                  <div>
                    <h4 className="font-semibold text-ink">Avant la séance</h4>
                    <p className="mt-1 text-sm text-sage">
                      Arrivez détendu·e, prenez une douche ou un bain, évitez de crémer le corps et
                      de trop manger juste avant.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink">Déroulement</h4>
                    <p className="mt-1 text-sm text-sage">
                      1 h 30. Les zones non massées restent couvertes, les sous-vêtements sont
                      conservés. Le massage concerne le dos, le ventre, les jambes, les bras et la
                      tête.
                    </p>
                  </div>
                  <p className="text-xs text-sage">
                    Précautions : grossesse et allaitement, épilepsie, cancers hormono-dépendants,
                    certains traitements, problèmes cutanés, hypersensibilité, enfants de moins de
                    10 ans.
                  </p>
                </div>
                <div className="mt-8 inline-flex flex-col gap-1 rounded-2xl border border-goldline bg-cream px-6 py-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-semibold text-ink">70 €</span>
                    <span className="text-sm text-sage">1 h 30</span>
                  </div>
                  <p className="text-sm text-sage">Au cabinet à Romeries · extérieur / SPA : +5 € de déplacement</p>
                </div>
              </div>
            </div>

            {/* Soin 3 */}
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 lg:order-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">03</span>
                <h3 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
                  Massage assis Amma
                </h3>
                <p className="mt-4 leading-relaxed text-ink/80">
                  Réalisé sur une personne habillée assise sur un siège ergonomique, ce massage
                  allie pressions, percussions, étirements et balayages énergétiques sur le dos, les
                  bras, les mains, la tête et le visage.
                </p>
                <p className="mt-4 leading-relaxed text-ink/80">
                  Idéal en entreprise, en institution ou lors d'événements bien-être pour offrir un
                  moment de détente rapide et profonde.
                </p>
                <div className="mt-8 inline-flex flex-col gap-1 rounded-2xl border border-goldline bg-cream px-6 py-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-semibold text-ink">30 €</span>
                    <span className="text-sm text-sage">45 min</span>
                  </div>
                  <p className="text-sm text-sage">Au cabinet · temps réduit possible · entreprise sur devis</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="gold-frame overflow-hidden rounded-3xl">
                  <img
                    src={unsplashImages.soin3}
                    alt="Massage relaxant du visage"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Réactions */}
      <section id="reactions" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionTitle eyebrow="Après un soin" title="Réactions éventuelles,
tout est juste" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-ink/80">
          Après un soin énergétique, certaines personnes continuent à ressentir des émotions ou des
          sensations pendant quelque temps. Ces réactions varient d'une personne à l'autre — et le
          bien-être n'est pas toujours immédiat.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reactions.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-goldline hover:shadow-[0_12px_40px_rgba(28,32,26,0.05)]"
            >
              <h3 className="font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sage">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* À propos */}
      <section id="apropos" className="bg-creamdark">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <SectionTitle eyebrow="Qui suis-je ?" title="À propos de
moi" align="left" />
              <p className="mt-6 leading-relaxed text-ink/80">
                Après une première vie professionnelle classique, j'ai choisi une reconversion
                orientée vers l'accompagnement des autres. Mon parcours m'a progressivement conduite
                des pratiques énergétiques vers les massages et l'accompagnement du bien-être
                corporel, avec une intention simple : vous aider à retrouver davantage de paix,
                d'amour et de lumière en vous.
              </p>
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">Formations</h3>
                <ul className="mt-4 space-y-3">
                  {formations.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-ink/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 rounded-2xl border-l-4 border-gold bg-cream p-6">
                <p className="font-display text-xl font-medium italic text-ink">
                  « La clé c'est vous ! »
                </p>
                <p className="mt-2 text-sm text-sage">— Cathy</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="gold-frame overflow-hidden rounded-3xl">
                <img
                  src={unsplashImages.portrait}
                  alt="Portrait en lumière douce — Cathy Bultez"
                  className="aspect-[4/5] w-full scale-110 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionTitle eyebrow="Tarifs" title="Tarifs &
bons cadeaux" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-sage">
          Tarifs au 01/01/2025 · +5 € pour les rendez-vous à l'extérieur du cabinet
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Accompagnement thérapeutique",
              duration: "1 h 30 · possible à distance",
              cabinet: "60 €",
              exterieur: "65 €",
            },
            {
              title: "Massage des 5 Continents",
              duration: "1 h 30 · huiles essentielles",
              cabinet: "70 €",
              exterieur: "75 €",
            },
            {
              title: "Massage assis Amma",
              duration: "45 min · temps réduit possible",
              cabinet: "30 €",
              exterieur: "35 €",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:border-goldline hover:shadow-[0_12px_40px_rgba(28,32,26,0.05)] sm:p-8"
            >
              <h3 className="font-display text-xl font-medium text-ink">{card.title}</h3>
              <p className="mt-1 text-sm text-sage">{card.duration}</p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-cream p-4">
                  <span className="text-sm font-medium text-ink">Cabinet</span>
                  <span className="text-2xl font-semibold text-ink">{card.cabinet}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-line p-4">
                  <span className="text-sm font-medium text-ink">Extérieur</span>
                  <span className="text-2xl font-semibold text-ink">{card.exterieur}</span>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-line py-3 text-sm font-medium text-ink transition-colors hover:bg-creamdark"
              >
                Prendre rendez-vous <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-goldline bg-creamdark p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h3 className="font-display text-xl font-medium text-ink">Bon cadeau</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-sage">
                À offrir pour un anniversaire, Noël, la Saint-Valentin, un enterrement de vie de
                jeune fille, une naissance ou la fête des Mères / Grands-Mères. Le montant est libre
                et peut être déduit d'une prestation. Valable 6 mois à compter de la date d'achat —
                contactez-moi par téléphone pour obtenir le numéro à indiquer dans votre message.
              </p>
            </div>
            <div className="shrink-0">
              <p className="text-sm font-medium text-ink">Règlement accepté :</p>
              <p className="mt-1 text-sm text-sage">chèque, espèces ou RIB.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionTitle eyebrow="Contact" title="Contactez-
moi" align="left" />
              <p className="mt-6 leading-relaxed text-ink/80">
                Séances en présentiel ou en entreprise ; séances à distance possibles pour les soins
                énergétiques et les accompagnements. Déplacements possibles chez les personnes
                âgées, en institutions, en SPA ou auprès de CE.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sagelight text-sage">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Cathy Bultez</p>
                    <p className="text-sm text-sage">Région Hauts-de-France · 59730 Romeries</p>
                  </div>
                </div>
                <a
                  href="tel:+33610197558"
                  className="flex items-start gap-4 transition-colors hover:text-gold"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sagelight text-sage">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Téléphone</p>
                    <p className="text-sm text-sage">06 10 19 75 58</p>
                  </div>
                </a>
                <a
                  href="mailto:cathybultez@hotmail.com"
                  className="flex items-start gap-4 transition-colors hover:text-gold"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sagelight text-sage">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Email</p>
                    <p className="text-sm text-sage">cathybultez@hotmail.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sagelight text-sage">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Règlement accepté</p>
                    <p className="text-sm text-sage">chèque, espèces ou RIB.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-cream p-6 sm:p-8">
              <h3 className="mb-6 font-display text-xl font-medium text-ink">Envoyer un message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

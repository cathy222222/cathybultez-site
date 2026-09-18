import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Gift, Heart, Phone, X } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import soinMainsTete from "@/assets/soin-mains-tete.jpg";
import femmeApaiseeMer from "@/assets/femme-apaisée-mer.jpg";

const IMAGES = {
  massage:
    "https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?auto=format&fit=crop&w=1600&q=80",
  stones:
    "https://images.pexels.com/photos/34279942/pexels-photo-34279942.jpeg?auto=compress&cs=tinysrgb&w=1600",
  silhouette:
    "https://images.unsplash.com/photo-1461468611824-46457c0e11fd?auto=format&fit=crop&w=1600&q=80",
};

const marqueeWords = [
  "Bien-être",
  "Lâcher-prise",
  "Énergie",
  "Sérénité",
  "Harmonie corporelle",
];

const motifs = [
  "Fatigue",
  "Stress",
  "Angoisses",
  "Anxiété",
  "Dépression",
  "Burn out",
  "Insomnies",
  "Traumatismes physiques & psychiques",
  "Deuil",
  "Addictions",
  "Manque de concentration",
  "Manque de confiance en soi",
  "Douleurs corporelles",
  "Trauma corporel",
  "Accompagnement de la maladie",
  "Accompagnement spirituel en fin de vie",
];

type Soin = {
  num: string;
  title: string;
  description: string;
  extra?: { label: string; text: string }[];
  meta: { label: string; value: string }[];
};

const soins: Soin[] = [
  {
    num: "01",
    title: "Accompagnement thérapeutique",
    description:
      "Une thérapie demande généralement plusieurs séances, selon votre besoin et votre évolution. Selon les situations, différents outils peuvent être mobilisés : libération par la parole, rééquilibrage énergétique, travail sur la mémoire, approches transgénérationnelle, karmique ou prénatale, sophronisation thérapeutique, bol chantant tibétain, tambour… Chaque séance est une parenthèse : un temps pour déposer les tensions, apaiser le mental et relancer la circulation de l'énergie vitale.",
    meta: [
      { label: "Durée", value: "1 h 30" },
      { label: "Prix", value: "60 €" },
      { label: "Lieu", value: "À distance ou en présentiel au cabinet de Romeries" },
    ],
  },
  {
    num: "02",
    title: "Soin des 2 couronnes",
    description:
      "Je vous propose également des soins pour vous aider dans la relation parents/enfants, les problèmes dans les fratries. Un soin puissant qui règle certaines problématiques entre un parent et son enfant, entre une fratrie, apporte des libérations, des compréhensions, de l'apaisement. Il peut également être réalisé avec un proche défunt. Ce soin peut aussi être fait individuellement pour vous rééquilibrer énergétiquement et émotionnellement, vous libérer et enlever des blocages.",
    meta: [
      { label: "Prix", value: "90 € pour 2 personnes" },
      { label: "Individuel", value: "45 €" },
      { label: "Lieu", value: "À distance sur photos" },
    ],
  },
  {
    num: "03",
    title: "Soin d'urgence à distance",
    description:
      "Un soin énergétique proposé à distance pour accompagner les situations d'urgence, notamment les douleurs ou les crises d'angoisse.",
    meta: [
      { label: "Prix", value: "40 €" },
      { label: "Lieu", value: "À distance" },
    ],
  },
  {
    num: "04",
    title: "Massage Énergétique Intuitif du Corps",
    description:
      "Un massage personnalisé qui associe l'écoute du corps, le toucher et l'intuition. Chaque séance est adaptée à la personne et à ses besoins du moment — une démarche favorisant le lâcher-prise, la reconnexion à soi et la libération des tensions émotionnelles.",
    extra: [
      {
        label: "Avant la séance",
        text: "Arrivez détendu·e, prenez une douche ou un bain, évitez de crémer le corps et de trop manger juste avant.",
      },
      {
        label: "Déroulement",
        text: "Les zones non massées restent couvertes, les sous-vêtements sont conservés. Le massage concerne le dos, le ventre, les jambes, les bras et la tête.",
      },
      {
        label: "Précautions",
        text: "Grossesse et allaitement, épilepsie, cancers hormono-dépendants, certains traitements, problèmes cutanés, hypersensibilité, enfants de moins de 10 ans.",
      },
      {
        label: "Huiles de massage",
        text: "2 choix possibles contenant des huiles essentielles (huile végétale neutre possible en cas d'allergie, à signaler à la prise de rendez-vous). Option huiles issues du Massage Énergétique des 5 Continents : 85 € en cabinet, 90 € en extérieur — jusqu'à épuisement des stocks.",
      },
    ],
    meta: [
      { label: "Durée", value: "1 h 30" },
      { label: "Prix", value: "80 € · Cabinet de Romeries" },
      { label: "Prix", value: "85 € · Extérieur SPA, établissements" },
    ],
  },
  {
    num: "05",
    title: "Massage Assis Énergétique Intuitif",
    description:
      "Reçu habillé, en position assise sur une chaise ergonomique conçue à cette fin. Il s'effectue au niveau des épaules, du dos, de la nuque, des hanches, des bras, des mains et de la tête. Apaisant et profondément relaxant, il rééquilibre le corps, améliore la circulation, soulage les tensions nerveuses et dynamise l'organisme tout entier. Il stimule les méridiens d'acupuncture et aide à soulager les affections causées par le stress : maux de dos, migraines, épuisement, insomnies…",
    meta: [
      { label: "Durée", value: "45 mn" },
      { label: "Prix", value: "45 € · Cabinet de Romeries" },
      { label: "Extérieur", value: "Me consulter" },
      {
        label: "Options",
        value: "Temps réduits possibles (15, 20, 30 mn) — entreprises, CE, institutions, résidences seniors",
      },
      { label: "À domicile", value: "Déplacement possible chez les personnes âgées" },
    ],
  },
  {
    num: "06",
    title: "Nettoyage énergétique de lieux",
    description:
      "Les lieux et les bâtiments ont des mémoires, liées aux habitants, à l'histoire des lieux ou à l'environnement — générant parfois des blocages : difficultés à vendre, disputes, problèmes de sommeil ou de santé. Un nettoyage énergétique élimine entités, mauvaises énergies et mémoires pour remettre de belles énergies et protections. Je conseille toujours un nettoyage avant d'emménager dans une nouvelle maison.",
    meta: [
      { label: "Prestation", value: "À distance" },
      { label: "Prix", value: "Sur devis" },
    ],
  },
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
    text: "Chaque personne ayant une sensibilité différente, l'absence de sensation pendant la séance est possible.",
  },
];

const formations = [
  "Psycho-Sophrologue",
  "Énergétique",
  "Massage des 5 Continents",
  "Massage Métamorphique",
  "Massage Assis Amma",
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current ?? document;
    const els = Array.from(root.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="reveal flex items-center justify-center gap-3 text-[13px] font-semibold uppercase tracking-[0.3em] text-gold">
      <span className="h-px w-8 bg-gold/60" />
      {children}
      <span className="h-px w-8 bg-gold/60" />
    </p>
  );
}

const COHERENCE_TOTAL = 300; // 5 minutes

function CoherenceCardiaque() {
  const [open, setOpen] = useState(false);
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState<"in" | "out">("out");
  const [secondsLeft, setSecondsLeft] = useState(COHERENCE_TOTAL);

  const finished = !running && secondsLeft === 0;
  const started = secondsLeft < COHERENCE_TOTAL || running;

  const close = () => {
    setOpen(false);
    setRunning(false);
    setSecondsLeft(COHERENCE_TOTAL);
    setPhase("out");
  };

  const start = () => {
    setSecondsLeft(COHERENCE_TOTAL);
    setPhase("out");
    setRunning(true);
  };

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(
      () => setPhase((p) => (p === "in" ? "out" : "in")),
      5000,
    );
    return () => clearTimeout(t);
  }, [running, phase]);

  useEffect(() => {
    if (!running) return;
    const i = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setRunning(false);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(i);
  }, [running]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const mm = String(Math.floor(secondsLeft / 60)).padStart(1, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group mt-10 inline-flex items-center gap-3 rounded-full border border-ink/15 bg-cream/70 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold hover:text-cream sm:text-[13px]"
      >
        <Heart className="h-4 w-4 animate-pulse" />
        Cohérence cardiaque · 5 min
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Cohérence cardiaque — respiration guidée"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden px-6"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-creamsoft to-sand" />

          <button
            type="button"
            onClick={close}
            aria-label="Fermer la cohérence cardiaque"
            className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:bg-gold hover:text-cream"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative flex flex-col items-center text-center">
            <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold/60" />
              Cohérence cardiaque
              <span className="h-px w-8 bg-gold/60" />
            </p>
            <p className="mt-4 max-w-md font-display text-xl font-light italic leading-relaxed text-ink/70">
              Installez-vous confortablement, respirez doucement au rythme du
              cercle — 5 secondes d'inspiration, 5 secondes d'expiration.
            </p>
          </div>

          <div className="relative mt-12 flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
            <span className="absolute inset-0 rounded-full border border-gold/40" />
            <span className="absolute inset-5 rounded-full border border-gold/25" />
            <div
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div
                className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-gold/15 sm:h-56 sm:w-56"
                style={{
                  transform: finished
                    ? "scale(1)"
                    : phase === "in"
                      ? "scale(1.2)"
                      : "scale(0.75)",
                  transition: running
                    ? "transform 5s ease-in-out"
                    : "transform 1.2s ease-in-out",
                }}
              >
                <Heart className="h-6 w-6 text-gold" />
                <p className="mt-2 font-display text-xl font-light italic text-ink sm:text-2xl">
                  {!started
                    ? "Prête ?"
                    : finished
                      ? "Session terminée ✦"
                      : running
                        ? phase === "in"
                          ? "Inspirez"
                          : "Expirez"
                        : "Pause"}
                </p>
              </div>
            </div>
          </div>

          <p className="relative mt-8 font-display text-3xl font-light tabular-nums text-ink/80">
            {mm}:{ss}
          </p>

          <div className="relative mt-10 flex flex-col items-center gap-4 sm:flex-row">
            {!running ? (
              <button
                type="button"
                onClick={start}
                className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-golddeep"
              >
                {finished
                  ? "Recommencer une session"
                  : started
                    ? "Reprendre"
                    : "Commencer · 5 minutes"}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setRunning(false)}
                className="rounded-full border border-ink/15 px-8 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:border-gold hover:bg-gold hover:text-cream"
              >
                Faire une pause
              </button>
            )}
            <button
              type="button"
              onClick={close}
              className="text-[13px] font-semibold uppercase tracking-[0.2em] text-ink/60 transition-colors hover:text-ink"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cathy Bultez — Thérapeute Énergétique · Massothérapeute à Romeries" },
      {
        name: "description",
        content:
          "Cathy Bultez vous guide sur la voie du bien-être à Romeries : accompagnement thérapeutique, massages énergétiques intuitifs, soins à distance et bons cadeaux.",
      },
      { property: "og:title", content: "Cathy Bultez — Thérapeute Énergétique · Massothérapeute à Romeries" },
      {
        property: "og:description",
        content:
          "Libérer les émotions, rééquilibrer les énergies, retrouver la paix intérieure. Soins au cabinet de Romeries, à domicile ou à distance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: IMAGES.massage },
      { name: "twitter:image", content: IMAGES.massage },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const pageRef = useReveal();

  return (
    <div ref={pageRef} className="min-h-screen bg-cream text-ink">
      <Header />

      {/* ============ HERO ============ */}
      <section className="relative flex min-h-screen flex-col justify-between overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={femmeApaiseeMer}
            alt=""
            className="h-full w-full object-cover object-center"
            width={1024}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/75 via-cream/60 to-cream" />
        </div>

        <div className="relative flex flex-1 flex-col justify-between">
          <div className="mx-auto w-full max-w-7xl px-6 pt-40 text-center sm:pt-48 lg:px-12 lg:pt-56">
            <h1 className="sr-only">
              Cathy Bultez — Thérapeute Énergétique · Massothérapeute à Romeries
            </h1>
            <p className="text-[13px] font-semibold uppercase tracking-[0.35em] text-ink/70 sm:text-sm">
              Thérapeute Énergétique · Massothérapeute
            </p>
            <p className="mx-auto mt-10 max-w-xl text-base font-light leading-relaxed text-inkmuted sm:text-lg">
              Vous guider sur la voie du bien-être — libérer les émotions,
              rééquilibrer les énergies, retrouver la paix intérieure.
            </p>
            <div className="flex justify-center">
              <CoherenceCardiaque />
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-6 pb-10 lg:px-12">
            <blockquote className="hidden max-w-md text-center sm:block">
              <p className="font-display text-lg font-light italic leading-relaxed text-ink/70">
                « Les maux du corps sont les mots de l'âme. Ainsi on ne doit
                pas guérir le corps sans chercher à guérir l'âme. »
              </p>
              <cite className="mt-3 block text-xs font-semibold uppercase tracking-[0.25em] not-italic text-gold">
                — Platon
              </cite>
            </blockquote>
            <a
              href="#approche"
              className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-ink/60 transition-colors hover:text-ink"
            >
              Découvrir
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-cream">
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </span>
            </a>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-t border-ink/10 py-5">
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex shrink-0 items-center">
              {[...marqueeWords, ...marqueeWords].map((word, i) => (
                <span
                  key={i}
                  className="flex items-center gap-8 pr-8 font-display text-2xl font-light italic text-ink/50"
                >
                  {word}
                  <span className="text-gold">✦</span>
                </span>
              ))}
            </div>
            <div className="animate-marquee flex shrink-0 items-center" aria-hidden>
              {[...marqueeWords, ...marqueeWords].map((word, i) => (
                <span
                  key={i}
                  className="flex items-center gap-8 pr-8 font-display text-2xl font-light italic text-ink/50"
                >
                  {word}
                  <span className="text-gold">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ APPROCHE ============ */}
      <section id="approche" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Mon approche</Eyebrow>
          <h2 className="reveal mt-8 font-display text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl">
            Vous guider sur la voie du{" "}
            <span className="italic text-gold">bien-être</span>.
          </h2>
        </div>

        <div className="mx-auto mt-16 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="reveal relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={soinMainsTete}
                alt="Soin énergétique avec les mains posées près de la tête"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
                width={1024}
                height={1280}
              />
            </div>
            <div className="absolute -bottom-5 -right-4 -z-10 h-full w-full rounded-[2rem] border border-goldline sm:-right-5" />
          </div>

          <div className="space-y-6 text-base font-light leading-relaxed text-inkmuted sm:text-lg">
            <p className="reveal font-display text-xl font-medium italic text-ink sm:text-2xl">
              Se faire accompagner par un·e thérapeute énergétique, ça sert à
              quoi ?
            </p>
            <p className="reveal">
              À amener des libérations émotionnelles, des déblocages dans les
              situations de vie, des guérisons physiques… Les maladies ou les
              sensations de mal-être ont bien souvent une cause émotionnelle.
              Nous allons ensemble chercher cette cause, enlever les mémoires
              cellulaires liées aux événements douloureux — vécus de façon
              consciente ou même inconsciente — et rétablir l'équilibre
              énergétique défaillant.
            </p>
            <p className="reveal">
              Tout ceci vous amenant à terme à revoir certains schémas de
              pensées et de comportements, à vous sentir en paix intérieurement.
              En complément d'un accompagnement, viendra parfois se glisser un
              massage énergétique pour libérer les émotions cristallisées dans
              les organes et qu'on n'arrive pas à exprimer. Et inversement,
              certaines personnes commenceront par un massage et continueront
              avec un accompagnement.
            </p>
            <p className="reveal">
              N'oublions pas le monde de nos envolés. Je constate bien souvent
              que ce sont vos défunts qui nous amènent à nous rencontrer — soit
              parce qu'ils veulent vous aider, soit parce qu'ils ont besoin
              d'aide.
            </p>
            <blockquote className="reveal border-l-2 border-gold pl-6">
              <p className="font-display text-2xl font-light italic leading-snug text-ink">
                « Quel beau cadeau, au final, vous vous faites. »
              </p>
              <cite className="mt-3 block text-xs font-semibold uppercase tracking-[0.25em] not-italic text-gold">
                Prenez soin de vous — Cathy
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============ MOTIFS ============ */}
      <section className="border-y border-ink/10 bg-sand py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Le toucher, l'écoute, l'intuition</Eyebrow>
            <h2 className="reveal mt-8 font-display text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl">
              Ce qui peut vous amener à{" "}
              <span className="italic text-gold">consulter</span>
            </h2>
            <p className="reveal mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-inkmuted sm:text-lg">
              Que ce soit pour des maux physiques ou émotionnels, en présentiel
              ou à distance.
            </p>
          </div>
          <div className="reveal mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
            {motifs.map((motif) => (
              <span
                key={motif}
                className="rounded-full border border-ink/15 bg-cream/70 px-5 py-2.5 text-sm font-medium text-ink/80 transition-all duration-300 hover:border-gold hover:bg-cream hover:text-ink"
              >
                {motif}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SOINS ============ */}
      <section id="soins" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-12 lg:py-40">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <Eyebrow>
              <span className="flex items-center gap-3">
                Les soins
              </span>
            </Eyebrow>
            <h2 className="reveal mt-8 text-center font-display text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-left">
              Six chemins vers <span className="italic text-gold">l'équilibre</span>
            </h2>
          </div>
          <div className="reveal hidden overflow-hidden rounded-[2rem] lg:block lg:w-64">
            <img
              src={IMAGES.stones}
              alt="Pierres zen empilées"
              className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-20">
          {soins.map((soin) => (
            <article
              key={soin.num}
              className="group grid gap-8 border-t border-ink/15 py-14 transition-all duration-500 last:border-b hover:bg-sand/40 lg:grid-cols-[auto_1fr_auto] lg:gap-16 lg:px-6"
            >
              <span className="font-display text-5xl font-light italic text-gold/70 transition-colors duration-500 group-hover:text-gold lg:text-6xl">
                {soin.num}
              </span>
              <div>
                <h3 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  {soin.title}
                </h3>
                <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-inkmuted">
                  {soin.description}
                </p>
                {soin.extra && (
                  <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                    {soin.extra.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-ink/10 bg-cream p-5"
                      >
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                          {item.label}
                        </dt>
                        <dd className="mt-2 text-sm font-light leading-relaxed text-inkmuted">
                          {item.text}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
              <dl className="flex flex-col gap-4 lg:min-w-64 lg:text-right">
                {soin.meta.map((m, i) => (
                  <div key={`${m.label}-${i}`}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">
                      {m.label}
                    </dt>
                    <dd className="mt-1 font-display text-xl font-medium text-ink">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-sm font-light text-inkmuted">
          Tarifs en vigueur au 15/10/2026.
        </p>

      </section>

      {/* ============ RÉACTIONS ============ */}
      <section className="border-y border-ink/10 bg-sand/50 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <Eyebrow>Après un soin</Eyebrow>
            <h2 className="reveal mt-8 font-display text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl">
              Réactions éventuelles{" "}
              <span className="italic text-gold">après un soin</span>
            </h2>
          </div>
          <p className="reveal mx-auto mt-8 max-w-3xl text-center text-base font-light leading-relaxed text-inkmuted sm:text-lg">
            Après un soin énergétique, certaines personnes continuent à
            ressentir des émotions ou des sensations pendant quelque temps. Ces
            réactions varient d'une personne à l'autre — et le bien-être n'est
            pas toujours immédiat. Ne rien ressentir pendant la séance ne
            signifie pas une absence d'effet.
          </p>
          <div className="reveal mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {reactions.map((reaction) => (
              <div
                key={reaction.title}
                className="group bg-cream p-8 transition-colors duration-500 hover:bg-sand"
              >
                <span className="font-display text-3xl font-light italic text-gold/60 transition-colors duration-500 group-hover:text-gold">
                  ✦
                </span>
                <h3 className="mt-4 font-display text-2xl font-medium text-ink">
                  {reaction.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-inkmuted">
                  {reaction.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ À PROPOS ============ */}
      <section id="a-propos" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>À propos</Eyebrow>
          <h2 className="reveal mt-8 font-display text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl">
            Qui <span className="italic text-gold">suis-je</span> ?
          </h2>
        </div>

        <div className="reveal mx-auto mt-16 max-w-2xl space-y-6 text-base font-light leading-relaxed text-inkmuted sm:text-lg">
          <p>
            Après une première vie professionnelle classique, j'ai ressenti
            l'appel profond de ma mission de vie : accompagner les autres sur
            leur chemin. La seule intention que je pose est de vous aider à
            retrouver davantage de paix, d'amour et de lumière en vous.
          </p>
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.3em] text-gold">
              Formations
            </h3>
            <ul className="mt-5 space-y-3">
              {formations.map((formation) => (
                <li
                  key={formation}
                  className="flex items-center gap-4 border-b border-ink/10 pb-3 font-display text-xl font-medium text-ink"
                >
                  <span className="text-gold">✦</span>
                  {formation}
                </li>
              ))}
            </ul>
          </div>
          <blockquote className="border-l-2 border-gold pl-6">
            <p className="font-display text-2xl font-light italic leading-snug text-ink">
              « La clé, c'est vous ! »
            </p>
            <cite className="mt-3 block text-xs font-semibold uppercase tracking-[0.25em] not-italic text-gold">
              — Cathy
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ============ BON CADEAU ============ */}
      <section
        id="bon-cadeau"
        className="relative mx-4 scroll-mt-24 overflow-hidden rounded-[3rem] bg-gradient-to-br from-goldbright via-gold to-golddeep py-24 text-cream sm:mx-6 lg:mx-10 lg:py-32"
      >
        <span className="pointer-events-none absolute -right-10 -top-24 select-none font-display text-[26rem] font-light italic leading-none text-cream/15">
          *
        </span>
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-cream/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="reveal flex items-center justify-center gap-3 text-[13px] font-semibold uppercase tracking-[0.3em] text-cream/80">
              <Gift className="h-4 w-4" />
              Offrir un moment de soin
            </p>
            <h2 className="reveal mt-8 font-display text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl">
              Le <span className="italic">bon cadeau</span>
            </h2>
            <p className="reveal mt-8 text-base font-light leading-relaxed text-cream/90 sm:text-lg">
              Pour un anniversaire, Noël, la Saint-Valentin, un enterrement de
              vie de jeune fille, une naissance ou la fête des Mères et
              Grands-Mères — offrez une parenthèse de bien-être. Le montant est
              libre et peut être déduit d'une prestation. Bon valable{" "}
              <span className="font-semibold">6 mois</span> à compter de la date
              d'achat.
            </p>
            <p className="reveal mt-5 text-sm font-light leading-relaxed text-cream/75">
              Réservation sur place à Romeries (contactez-moi au préalable) ou à
              distance en appelant le 06 10 19 75 58 pour obtenir un numéro de
              bon cadeau.
            </p>
            <a
              href="tel:0610197558"
              className="reveal group mt-10 inline-flex items-center gap-3 rounded-full bg-cream px-9 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-all duration-300 hover:bg-ink hover:text-cream"
            >
              <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              Réserver un bon cadeau
            </a>
          </div>
        </div>
      </section>

      <div className="h-24 lg:h-32" />

      <Footer />
    </div>
  );
}

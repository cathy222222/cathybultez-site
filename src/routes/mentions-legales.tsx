import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const Route = createFileRoute("/mentions-legales")({
  component: LegalPage,
});

function LegalPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-40 lg:px-12 lg:pt-48">
        <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-gold">
          Informations légales
        </p>
        <h1 className="mt-6 font-display text-5xl font-light leading-tight sm:text-6xl">
          Mentions légales
        </h1>

        <div className="mt-16 space-y-12 text-base font-light leading-relaxed text-inkmuted sm:text-lg">
          <section>
            <h2 className="font-display text-3xl font-medium text-ink">1. Présentation du site</h2>
            <p className="mt-4">
              Le site cathybultez.com est édité par Cathy BULTEZ, micro-entreprise, immatriculée
              sous le numéro SIRET 908 819 618 00046, domiciliée à 59730 Romeries.
            </p>
            <p className="mt-4">
              Responsable de la publication et webmaster : Cathy BULTEZ.
              <br />
              Contact : cathybultez@hotmail.com
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-medium text-ink">2. Hébergement</h2>
            <p className="mt-4">
              Le site est hébergé par Vercel. Pour plus d'informations :{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer"
                className="text-gold underline underline-offset-4"
              >
                vercel.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-medium text-ink">
              3. Description des services
            </h2>
            <p className="mt-4">
              Les informations publiées sur ce site sont données à titre indicatif et peuvent
              évoluer. Cathy BULTEZ s'efforce de fournir des informations exactes et à jour, sans
              pouvoir garantir l'absence d'omissions ou d'inexactitudes.
            </p>
            <p className="mt-4">
              Les soins énergétiques et massages proposés ne constituent pas des actes médicaux.
              Aucun diagnostic médical n'est posé et aucun traitement ne doit être modifié ou
              interrompu sans l'avis du médecin traitant ou spécialiste.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-medium text-ink">
              4. Propriété intellectuelle
            </h2>
            <p className="mt-4">
              Cathy BULTEZ est propriétaire des droits de propriété intellectuelle ou détient les
              droits d'usage sur les éléments accessibles sur le site. Toute reproduction,
              représentation, modification ou adaptation non autorisée de tout ou partie du site est
              interdite.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-medium text-ink">5. Responsabilité</h2>
            <p className="mt-4">
              L'utilisateur accède au site avec un matériel récent, protégé et utilisant un
              navigateur à jour. Cathy BULTEZ ne pourra être tenue responsable des dommages directs
              ou indirects liés à l'accès ou à l'utilisation du site, notamment en cas de bug,
              d'incompatibilité ou d'interruption.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-medium text-ink">6. Données personnelles</h2>
            <p className="mt-4">
              Les messages transmis par e-mail sont utilisés uniquement pour répondre aux demandes.
              Conformément à la réglementation applicable, toute personne peut demander l'accès, la
              rectification ou la suppression de ses données en écrivant à cathybultez@hotmail.com.
            </p>
            <p className="mt-4">
              Le thérapeute est tenu au secret professionnel et à la confidentialité.
            </p>
          </section>

          <p className="border-t border-ink/10 pt-8 text-sm">
            Dernière mise à jour : septembre 2026. SIRET : 908 819 618 00046.
          </p>
        </div>

        <Link
          to="/"
          className="mt-12 inline-flex rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:border-gold hover:bg-gold hover:text-cream"
        >
          Retour à l'accueil
        </Link>
      </main>
      <Footer />
    </div>
  );
}

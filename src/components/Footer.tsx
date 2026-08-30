export function Footer() {
  return (
    <footer className="border-t border-line bg-creamdark py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-ink">Cathy Bultez</p>
            <p className="mt-1 text-sm text-sage">
              Thérapeute énergétique & Massothérapeute · Romeries
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-sm text-sage md:items-end">
            <a href="tel:+33610197558" className="hover:text-ink hover:underline">
              06 10 19 75 58
            </a>
            <a href="mailto:cathybultez@hotmail.com" className="hover:text-ink hover:underline">
              cathybultez@hotmail.com
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-line pt-6 text-center text-xs text-sage">
          <p>
            Les soins proposés ne constituent pas des actes médicaux et ne remplacent en aucun cas un avis médical.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Cathy Bultez. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site portfolio",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          Cette politique de confidentialité explique comment nous collectons,
          utilisons et protégeons vos données personnelles lorsque vous utilisez
          notre site web.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Collecte des données</h2>
        <p>Le site ne collecte pas de données personnelles :</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Utilisation des données</h2>
        <p>Vos données ne sont pas utilisées.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <p>Le site ne collecte pas de données personnelles.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          Pour toute question concernant cette politique de confidentialité,
          veuillez nous contacter à :
        </p>
        <p>Email : XXXXXXXXXX@gmail.com</p>
      </section>
    </div>
  );
}

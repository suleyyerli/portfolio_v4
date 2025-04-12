import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site portfolio",
};

export default function MentionsLegales() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
        <p>Ce site est édité par :</p>
        <p>XXXXXXXXX</p>
        <p>Adresse</p>
        <p>Email : XXXXXXXXXX@gmail.com</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
        <p>Ce site est hébergé par :</p>
        <p>Hostinger</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Propriété intellectuelle
        </h2>
        <p>
          Tous les éléments du site (textes, images, vidéos, etc.) sont protégés
          par les lois relatives à la propriété intellectuelle.
        </p>
        <p>
          Toute reproduction ou représentation totale ou partielle de ce site
          est interdite sans autorisation préalable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Protection des données personnelles
        </h2>
        <p>
          Conformément à la loi &quot;Informatique et Libertés&quot; du 6
          janvier 1978 modifiée et au Règlement Général sur la Protection des
          Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de
          rectification et de suppression des données vous concernant.
        </p>
      </section>
    </div>
  );
}

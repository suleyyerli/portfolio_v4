import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales",
  description: "Conditions générales d'utilisation du site portfolio",
};

export default function ConditionsGenerales() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Conditions générales d&apos;utilisation
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          1. Acceptation des conditions
        </h2>
        <p>
          En accédant à ce site, vous acceptez d&apos;être lié par ces
          conditions générales d&apos;utilisation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Utilisation du site</h2>
        <p>
          Le site est destiné à présenter le portfolio et les services du
          développeur. Toute utilisation à des fins illégales ou non autorisées
          est strictement interdite.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. Propriété intellectuelle
        </h2>
        <p>
          Tous les contenus présents sur le site sont protégés par les lois sur
          la propriété intellectuelle. Toute reproduction ou utilisation non
          autorisée est interdite.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. Limitation de responsabilité
        </h2>
        <p>
          Le développeur ne peut être tenu responsable des dommages directs ou
          indirects résultant de l&apos;utilisation du site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Modification des conditions
        </h2>
        <p>
          Ces conditions peuvent être modifiées à tout moment. Les modifications
          prendront effet dès leur publication sur le site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
        <p>
          Pour toute question concernant ces conditions, veuillez nous contacter
          à :
        </p>
        <p>Email : XXXXXXXXXX@gmail.com</p>
      </section>
    </div>
  );
}

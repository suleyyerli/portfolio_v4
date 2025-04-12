import { Badge } from "./ui/badge";
import { BorderBeam } from "./ui/border-beam";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mt-12 text-gray-400 pb-12">
      <div className="flex justify-center items-center mb-4">
        <Badge className="relative bg-zinc-900 text-white">
          <BorderBeam className="absolute inset-0 rounded-xl" />
          <p>Copyright © 2024 - Tous droits réservés</p>
        </Badge>
      </div>
      <div className="flex flex-col items-center text-sm space-y-2">
        <div className="flex space-x-4">
          <Link
            href="/mentions-legales"
            className="hover:text-white transition-colors"
          >
            Mentions légales
          </Link>
          <Link
            href="/politique-de-confidentialite"
            className="hover:text-white transition-colors"
          >
            Politique de confidentialité
          </Link>
          <Link
            href="/conditions-generales"
            className="hover:text-white transition-colors"
          >
            Conditions générales
          </Link>
        </div>
        <p className="text-xs">
          Ce site utilise des cookies pour améliorer votre expérience. En
          continuant à naviguer, vous acceptez leur utilisation.
        </p>
      </div>
    </footer>
  );
}

import { Badge } from "./ui/badge";
import { BorderBeam } from "./ui/border-beam";

export default function Footer() {
  return (
    <div className="flex justify-center items-center mt-12 text-gray-400 pb-12">
      <Badge className="relative bg-zinc-900 text-white">
        <BorderBeam className="absolute inset-0 rounded-xl" />
        <p>Copyright © 2024 - Tous droits réservés</p>
      </Badge>
    </div>
  );
}

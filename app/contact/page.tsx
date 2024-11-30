import CardContact from "@/components/CardContact";

// Contact

export default function VeilleTechno() {
  return (
    <div>
      {/* Titre */}
      <div className="mt-10">
        <h1 className="text-3xl font-bold text-[#c6d0f5] font-pixelify">
          <span className="text-[#f38ba8]">/ </span>
          <span className="text-[#f38ba8]">Contactez-moi</span>
        </h1>
      </div>
      {/* Cartes */}
      <div className="flex flex-col items-center mt-10 gap-4 p-4">
        <CardContact />
      </div>
    </div>
  );
}

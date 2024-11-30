// Ce composant affiche 3 card qui contiendrons simplement des images
// de la meme manière qu'un jeu de carte
// avec un effet de survol

const images = ["/poke/poke1.png", "/poke/poke2.png", "/poke/poke3.png"];

export default function CardProfil() {
  return (
    <div className="flex justify-center items-center space-x-[-20px] hover:space-x-0">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-40 h-60 "
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transform: `rotate(${index * 10 - 10}deg)`, // Rotation des cartes
          }}
        ></div>
      ))}
    </div>
  );
}

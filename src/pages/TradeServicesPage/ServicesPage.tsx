import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import CardTemplate from "../../components/CardTemplate/CardTemplate";

export default function ServicesPage() {
  const data = useData();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const images = {
    See: [
      "/images/Natur_Freizeit/See/1.webp",
      "/images/Natur_Freizeit/See/2.jpeg",
      "/images/Natur_Freizeit/See/3.jpeg",
      "/images/Natur_Freizeit/See/5.webp",
      "/images/Natur_Freizeit/See/6.jpeg",
    ],
    "Sportlerheim & Sportplatz": [
      "/images/Natur_Freizeit/Sportlerheim/mainPhoto.webp",
      "/images/Natur_Freizeit/Sportlerheim/1.webp",
      "/images/Natur_Freizeit/Sportlerheim/2.webp",
      "/images/Natur_Freizeit/Sportlerheim/3.webp",
      "/images/Natur_Freizeit/Sportlerheim/4.webp",
    ],
    Alpakafarm: [
      "/images/Natur_Freizeit/Alpaka-Farm/mainPhoto.webp",
      "/images/Natur_Freizeit/Alpaka-Farm/1.jpg",
      "/images/Natur_Freizeit/Alpaka-Farm/2.png",
    ],
    Jugendclub: ["/images/Natur_Freizeit/Jugendclub/mainPhoto.jpg"],
    "Lebendiges Schönwalde e.V.": [
      "/images/Natur_Freizeit/Lebendiges/mainPhoto.jpg",
    ],
    Dorfgemeinschaftshaus: [
      "/images/Natur_Freizeit/Dorfgemeindschaftshaus/mainPhoto.webp",
    ],
    "Spreewaldring Kart Center": [
      "/images/Natur_Freizeit/Spreewald_Ring_Kart_Center/mainPhoto.jpg",
      "/images/Natur_Freizeit/Spreewald_Ring_Kart_Center/1.jpg",
      "/images/Natur_Freizeit/Spreewald_Ring_Kart_Center/2.png",
      "/images/Natur_Freizeit/Spreewald_Ring_Kart_Center/3.jpg",
    ],
    "Spreewaldring Training Center": [
      "/images/Natur_Freizeit/Spreewald_Ring_Training_Center/mainPhoto.png",
      "/images/Natur_Freizeit/Spreewald_Ring_Training_Center/1.png",
      "/images/Natur_Freizeit/Spreewald_Ring_Training_Center/2.png",
      "/images/Natur_Freizeit/Spreewald_Ring_Training_Center/3.png",
    ],
    Mühlenverein: ["/images/Natur_Freizeit/Muehlenverein/mainPhoto.jpg"],
  };

  useEffect(() => {
    if (data?.["Handwerkgewerbe & Dienstleistungen"]) {
      setCards(data["Handwerkgewerbe & Dienstleistungen"]);
      setLoading(false);
    }
  }, [data]);

  return (
    <CardTemplate
      heading="🛍️ Regional, persönlich, zuverlässig – alles, was du brauchst"
      introText={
        <>
          In Schönwald lebt die Wirtschaft von Menschen, die man kennt –
          ehrlich, persönlich und mit einem Gespür dafür, was gebraucht wird. Ob
          Ziegel, Honig oder ein fachkundiger Blick unter die Motorhaube – hier
          ist alles nah und verlässlich. Auch die Energiewende hat hier ihren
          Platz: Ein regionales Büro der Firma Notus Energy begleitet Projekte
          rund um erneuerbare Energien – direkt aus dem Ort. Frische und gute
          Produkte für den Alltag findet man ebenso – direkt, regional und mit
          Geschmack. Und wer Unterstützung braucht, findet sie bei sozialen
          Diensten oder in der Pflege – mit Herz und Einsatz. Unternehmen im
          Bereich Bau, Technik oder Sanierung sorgen für professionelle Hilfe
          bei kleinen und großen Vorhaben – kompetent, erreichbar und mit kurzen
          Wegen. 
          <br />
          <br />
          <strong>
            Handwerkgewerbe & Dienstleistungen in Schönwald – praktisch,
            nah und gut zu wissen, wer da ist.
          </strong>
        </>
      }
      cards={cards}
      loading={loading}
      images={images}
    />
  );
}

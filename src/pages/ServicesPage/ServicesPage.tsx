import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import CardTemplate from "../../components/CardTemplate/CardTemplate";
import YourAreHere from "../../components/YourAreHere/YouAreHere";

export default function ServicesPage() {
  const data = useData();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const images = {
    "Ingo Richter Dachdecker": [
      "/images/Handel_Dienstleistungen/Bau_und_Gebäudeservice/Ingo.avif",
    ],
    "KOMPLETT Gerüstbau GmbH": [
      "/images/Handel_Dienstleistungen/Bau_und_Gebäudeservice/Komplett.avif",
    ],
    "Malerbetrieb Dieter Ihl": [
      "/images/Handel_Dienstleistungen/Bau_und_Gebäudeservice/Malerbetrieb.avif",
    ],
    "Morgner Haustechnik": [
      "/images/Handel_Dienstleistungen/Bau_und_Gebäudeservice/Morgner.avif" // new make
    ],
    "MSD Baustoffrecycling Schönwalde": [
      "/images/Handel_Dienstleistungen/Bau_und_Gebäudeservice/Baustoffrecycling.avif",
    ],
    "Tischlerei Schneider": [
      "/images/Handel_Dienstleistungen/Bau_und_Gebäudeservice/Tischlerei.avif",
    ],
    "Trocknungsservice Gefreiter GmbH": [
      "/images/Handel_Dienstleistungen/Bau_und_Gebäudeservice/Gefreiter_Wasser.avif",
    ],
    "NOTUS energy": [
      "/images/Handel_Dienstleistungen/Buero_und_Verwaltung/Notus/mainPhoto.jpeg",
    ],
    "Autohaus Kunath": [
      "/images/Handel_Dienstleistungen/Fahrzeuge/Autohaus_Kunath/mainPhoto1.jpg"
    ],
    "Autohaus Vogler": [
      "/images/Handel_Dienstleistungen/Fahrzeuge/Autohaus_Vogler/mainPhoto.webp",
    ],
    "KFZ Meisterbetrieb Ronny Hess": [
      "/images/Handel_Dienstleistungen/Fahrzeuge/Meisterbetrieb_Ronny_Hess/mainPhoto1.jpg",
    ],
    "KFZ Werkstatt Mathias Wenske": [
      "/images/Handel_Dienstleistungen/Fahrzeuge/Werkstatt_Mathias_Wenske/mainPhoto.jpeg",
    ],
    "Agrargemeinschaft Freiwalde/Schönwalde": [
      "/images/Handel_Dienstleistungen/Agrargemeinschaft/mainPhoto2.jpg"
    ],
    "Imkerei Morgner": [
      "/images/Handel_Dienstleistungen/Imkerei/Morgner/mainPhoto411.jpg",
    ],
    "Bäckerei & Konditorei Kuske": [
      "/images/Handel_Dienstleistungen/Lebensmittel/Baekerei/mainPhoto.avif",
    ],
    "Fleischerei Tischler": ["/images/Handel_Dienstleistungen/Lebensmittel/Fleischerei/mainPhoto.jpg"],
     "Der Pflegedienst": [
      "/images/Handel_Dienstleistungen/Sozialdienste/mainPhoto.webp",
    ],
    "Hämmerling B. Häusliche Krankenpflege": [
      "/images/Handel_Dienstleistungen/Sozialdienste/mainPhoto1.jpg",
    ],
    "Haares Zeiten": [
      "/images/Handel_Dienstleistungen/Schönheitspflege/mainPhoto2.jpg",
    ],
    "Mädchenträume by Eileen": [
      "/images/Handel_Dienstleistungen/Schönheitspflege/Mädchenträume_by_Eileen/mainPhoto1.jpg"
    ],
    "Kampfmittelbergung & Sprengtechnik": [
      "/images/Handel_Dienstleistungen/Technische_Dienstleistungen/mainPhoto.png"
    ],
  };

  useEffect(() => {
    if (data?.["Handwerkgewerbe & Dienstleistungen"]) {
      setCards(data["Handwerkgewerbe & Dienstleistungen"]);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <YourAreHere infoPageName="Handwerkgewerbe & Dienstleistungen" />
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
    </>
  );
}

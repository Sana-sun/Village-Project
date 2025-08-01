import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import CardTemplate from "../../components/CardTemplate/CardTemplate";
import YourAreHere from "../../components/YourAreHere/YouAreHere";

export default function VerwaltungPage() {
  const data = useData();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const images = {
    "Feuerwehrgerätehaus Schönwalde": [
      "/images/Gemeinde_Verwaltung/FeuerwehrSchoenwalde/mainPhoto.avif",
      "/images/Gemeinde_Verwaltung/FeuerwehrSchoenwalde/4.avif",
    ],
    "Feuerwehr Waldow": [
      "/images/Gemeinde_Verwaltung/FeuerwehrWaldow/mainPhoto1.avif",
    ],
    "Amt Unterspreewald": [
      "/images/Gemeinde_Verwaltung/Amt/mainPhoto2.avif",
      "/images/Gemeinde_Verwaltung/Amt/3.avif",
      "/images/Gemeinde_Verwaltung/Amt/2.avif",
    ],
    "Kirche": [
      "/images/Gemeinde_Verwaltung/Kirche/mainPhoto.avif",
      "/images/Gemeinde_Verwaltung/Kirche/1.avif",
      "/images/Gemeinde_Verwaltung/Kirche/3.avif",
      "/images/Gemeinde_Verwaltung/Kirche/4.avif",
      "/images/Gemeinde_Verwaltung/Kirche/5.avif",
      "/images/Gemeinde_Verwaltung/Kirche/7.avif",
    ],
  };

  useEffect(() => {
    if (data?.["Gemeinde & Verwaltung"]) {
      setCards(data["Gemeinde & Verwaltung"]);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <>
      <YourAreHere infoPageName="Gemeinde & Verwaltung" />
      <CardTemplate
        heading="❤️ Von Einsatz bis Engagement – das Herz der Dorfgemeinschaft"
        introText={
          <>
            In Schönwalde engagieren sich Menschen Tag für Tag – für Sicherheit,
            Gemeinschaft und das gute Leben im Dorf. Unsere{" "}
            <strong>Feuerwehren</strong> in Schönwalde und Waldow stehen rund um
            die Uhr bereit, getragen von Aktiven, Jugendfeuerwehr und dem
            Feuerwehrverein. Dabei geht es nicht nur um Einsätze, sondern auch um
            Teamgeist, Nachwuchsarbeit und Dorfgemeinschaft. Wer Unterstützung
            oder Informationen von der Verwaltung braucht, findet im{" "}
            <strong>Amt Unterspreewald</strong> die passende Anlaufstelle – direkt
            im Schönwalde. Und mitten im Dorf lädt unsere <strong>Kirche</strong>{" "}
            zu stillen Momenten, Kulturabenden und besonderen Feiern ein.
            <br />
            <br />
            <strong>Engagement vor Ort – mit Herz, Hand und Zusammenhalt.</strong>
          </>
        }
        cards={cards}
        loading={loading}
        images={images}
      />
    </>
   
  );
}

import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import CardTemplate from "../../components/CardTemplate/CardTemplate";
import YourAreHere from "../../components/YourAreHere/YouAreHere";

export default function NatureLeisurePage() {
  const data = useData();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const images = {
  See: [
    "/images/Natur_Freizeit/See/1.avif",
    "/images/Natur_Freizeit/See/2.avif",
    "/images/Natur_Freizeit/See/3.avif",
    "/images/Natur_Freizeit/See/5.avif",
    "/images/Natur_Freizeit/See/6.avif"
  ],
  "Sportlerheim & Sportplatz": [
   "/images/Natur_Freizeit/Sportlerheim/mainPhoto.avif",
   "/images/Natur_Freizeit/Sportlerheim/1.avif",
    "/images/Natur_Freizeit/Sportlerheim/2.avif",
    "/images/Natur_Freizeit/Sportlerheim/3.avif",
    "/images/Natur_Freizeit/Sportlerheim/4.avif"
  ],
  Alpakafarm: [
    "/images/Natur_Freizeit/Alpaka-Farm/mainPhoto.avif",
    "/images/Natur_Freizeit/Alpaka-Farm/1.avif",
    "/images/Natur_Freizeit/Alpaka-Farm/2.avif",
  ],
  Jugendclub: [
    "/images/Natur_Freizeit/Jugendclub/mainPhoto.avif",
  ],
  "Lebendiges Schönwalde e.V.": [
    "/images/Natur_Freizeit/Lebendiges/Lebendiges.avif",
  ],
  Dorfgemeinschaftshaus: [
    "/images/Natur_Freizeit/Dorfgemeindschaftshaus/mainPhoto.avif",
  ],
  "Spreewaldring Kart Center": [
    "/images/Natur_Freizeit/Spreewald_Ring_Kart_Center/mainPhoto.avif",
    "/images/Natur_Freizeit/Spreewald_Ring_Kart_Center/1.avif",
    "/images/Natur_Freizeit/Spreewald_Ring_Kart_Center/2.avif",
    "/images/Natur_Freizeit/Spreewald_Ring_Kart_Center/3.avif"
  ],
  "Spreewaldring Training Center": [
    "/images/Natur_Freizeit/Spreewald_Ring_Training_Center/mainPhoto.avif",
   "/images/Natur_Freizeit/Spreewald_Ring_Training_Center/1.avif",
    "/images/Natur_Freizeit/Spreewald_Ring_Training_Center/2.avif",
    "/images/Natur_Freizeit/Spreewald_Ring_Training_Center/3.avif"
  ],
};

  useEffect(() => {
    if (data?.["Natur & Freizeit"]) {
      setCards(data["Natur & Freizeit"]);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <YourAreHere infoPageName="Natur & Freizeit" />

      <CardTemplate
        heading="🌿 Natur & Freizeit in Schönwalde & Waldow – draußen zuhause"
        introText={
          "Wenn das Dorf zur Bühne der Erholung wird, ist Schönwalde der richtige Ort dafür. Zwischen Wasser, Wiesen und Wegen finden sich stille und lebendige Ecken, die das Herz berühren und den Kopf frei machen."
        }
        cards={cards}
        loading={loading}
        images={images}
      />
    </>
   
  );
}

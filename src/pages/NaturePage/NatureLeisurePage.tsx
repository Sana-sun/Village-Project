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
    "/images/Natur_Freizeit/See/1.webp",
    "/images/Natur_Freizeit/See/2.jpeg",
    "/images/Natur_Freizeit/See/3.jpeg",
    "/images/Natur_Freizeit/See/5.webp",
    "/images/Natur_Freizeit/See/6.jpeg"
  ],
  "Sportlerheim & Sportplatz": [
   "/images/Natur_Freizeit/Sportlerheim/mainPhoto.webp",
   "/images/Natur_Freizeit/Sportlerheim/1.webp",
    "/images/Natur_Freizeit/Sportlerheim/2.webp",
    "/images/Natur_Freizeit/Sportlerheim/3.webp",
    "/images/Natur_Freizeit/Sportlerheim/4.webp"
  ],
  Alpakafarm: [
    "/images/Natur_Freizeit/Alpaka-Farm/mainPhoto.webp",
    "/images/Natur_Freizeit/Alpaka-Farm/1.jpg",
    "/images/Natur_Freizeit/Alpaka-Farm/2.png",
  ],
  Jugendclub: [
    "/images/Natur_Freizeit/Jugendclub/mainPhoto.jpg",
  ],
  "Lebendiges Schönwalde e.V.": [
    "/images/Natur_Freizeit/Lebendiges/Lebendiges.jpg",
  ],
  Dorfgemeinschaftshaus: [
    "/images/Natur_Freizeit/Dorfgemeindschaftshaus/mainPhoto.webp",
  ],
  "Spreewaldring Kart Center": [
    "/images/Natur_Freizeit/Spreewald_Ring_Kart_Center/mainPhoto.jpg",
    "/images/Natur_Freizeit/Spreewald_Ring_Kart_Center/1.jpg",
    "/images/Natur_Freizeit/Spreewald_Ring_Kart_Center/2.png",
    "/images/Natur_Freizeit/Spreewald_Ring_Kart_Center/3.jpg"
  ],
  "Spreewaldring Training Center": [
    "/images/Natur_Freizeit/Spreewald_Ring_Training_Center/mainPhoto.png",
   "/images/Natur_Freizeit/Spreewald_Ring_Training_Center/1.png",
    "/images/Natur_Freizeit/Spreewald_Ring_Training_Center/2.png",
    "/images/Natur_Freizeit/Spreewald_Ring_Training_Center/3.png"
  ],
  Mühlenverein: [
    "/images/Natur_Freizeit/Muehlenverein/mainPhoto.jpg",
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

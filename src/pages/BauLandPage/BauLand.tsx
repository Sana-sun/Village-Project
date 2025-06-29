import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import CardTemplate from "../../components/CardTemplate/CardTemplate";

export default function BauLand() {
  const data = useData();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const images = {
    Baugrundstücke: [
      "/images/Bauland/mainPhoto.png",
    ],
    Bauland: [
      "/images/OtherPictures/Center/4.webp",
      "/images/OtherPictures/Center/2.webp",
    ],
  };

  useEffect(() => {
    if (data?.["Baugrundstücke"]) {
      setCards(data["Baugrundstücke"]);
      setLoading(false);
    }
  }, [data]);

  return (
    <CardTemplate
      heading="🏡 Suchen Sie ein Zuhause im Grünen?"
      introText={
        "In Schönwalde stehen Baugrundstücke und Wohnhäuser zum Verkauf – ideal für alle, die Ruhe, Natur, Freiraum und Dorfgemeinschaft schätzen. Ob Eigenheim, Rückzugsort oder Investition: Hier beginnt Ihr neues Kapitel."
      }
      cards={cards}
      loading={loading}
      images={images}
    />
  );
}

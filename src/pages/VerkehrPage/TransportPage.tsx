import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import CardTemplate from "../../components/CardTemplate/CardTemplate";
import YourAreHere from "../../components/YourAreHere/YouAreHere";

export default function TransportPage() {
  const data = useData();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
  const images = {
    Bahnhof: [
      "/images/Verkehr_Infrastruktur/Bahnhof/mainPhoto.avif",
      "/images/Verkehr_Infrastruktur/Bahnhof/1.avif",
      "/images/Verkehr_Infrastruktur/Bahnhof/2.avif",
      "/images/Verkehr_Infrastruktur/Bahnhof/3.avif",
    ],
    Autobahn: ["/images/Verkehr_Infrastruktur/Autobahn/mainPhoto.avif"],
  };
*/
  useEffect(() => {
    if (data?.["Verkehr & Infrastruktur"]) {

      setCards(data["Verkehr & Infrastruktur"]);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <YourAreHere infoPageName="Verkehr & Infrastruktur" />
      <CardTemplate
        heading="🚉 Ob per Zug oder Auto – Schönwalde ist gut angebunden"
        introText={
          <>
            Unser Bahnhof verbindet das Dorf stündlich mit Berlin und Senftenberg
            – ideal für Pendler, Ausflügler und Schulbesuche. Auch Cottbus ist gut
            erreichbar. Wer lieber mit dem Auto unterwegs ist, erreicht Schönwalde
            bequem über die nahegelegene Autobahn – schnell, flexibel und direkt
            ins Grüne.
            <br />
            <br />
            <strong>
              Mobilität in Schönwalde heißt: verbunden bleiben – nachhaltig,
              zuverlässig und naturnah.
            </strong>
          </>
        }
        cards={cards}
        loading={loading}
        //images={images}
      />
    </>
  );
}

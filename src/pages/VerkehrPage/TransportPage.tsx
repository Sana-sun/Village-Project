// import rawMd from "./text.md?raw";

// import MarkdownPageTemplate from "../../components/MarkdownPageTemplateProps/MarkdownPageTemplateProps";

// function TransportPage() {
//   return (
//     <MarkdownPageTemplate
//           markdown={rawMd}
//         />
//   );
// }

// export default TransportPage;

import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import CardTemplate from "../../components/CardTemplate/CardTemplate";

export default function TransportPage() {
  const data = useData();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const images = {
    Bahnhof: [
      "/images/Verkehr_Infrastruktur/Bahnhof/mainPhoto.jpg",
      "/images/Verkehr_Infrastruktur/Bahnhof/1.webp",
      "/images/Verkehr_Infrastruktur/Bahnhof/2.webp",
      "/images/Verkehr_Infrastruktur/Bahnhof/3.jpg",
    ],
    Autobahn: [
      "/images/Verkehr_Infrastruktur/Autobahn/mainPhoto.png",
    ],
  };

  useEffect(() => {
    if (data?.["Verkehr & Infrastruktur"]) {
      setCards(data["Verkehr & Infrastruktur"]);
      setLoading(false);
    }
  }, [data]);

  return (
    <CardTemplate
      heading="🚉 Ob per Zug oder Auto – Schönwalde ist gut angebunden"
      introText={
        "Unser Bahnhof verbindet das Dorf stündlich mit Berlin und Senftenberg – ideal für Pendler, Ausflügler und Schulbesuche. Auch Cottbus ist gut erreichbar. Wer lieber mit dem Auto unterwegs ist, erreicht Schönwalde bequem über die nahegelegene Autobahn – schnell, flexibel und direkt ins Grüne. \nMobilität in Schönwalde heißt: verbunden bleiben – nachhaltig, zuverlässig und naturnah."
      }
      cards={cards}
      loading={loading}
      images={images}
    />
  );
}

// import rawMd from "./text.md?raw";

// import MarkdownPageTemplate from "../../components/MarkdownPageTemplateProps/MarkdownPageTemplateProps";

// function EducationPage() {

//   return (
//    <MarkdownPageTemplate
//          markdown={rawMd}
//        />
//   );
// }

// export default EducationPage;

import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import CardTemplate from "../../components/CardTemplate/CardTemplate";
import YourAreHere from "../../components/YourAreHere/YouAreHere";

export default function EducationPage() {
  const data = useData();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const images = {
    "Kita Regenbogen": [
      "/images/Bildung_Gemeinschaft/Kita/mainPhoto.webp",
      "/images/Bildung_Gemeinschaft/Kita/1.jpg",
      "/images/Bildung_Gemeinschaft/Kita/2.jpg",
      "/images/Bildung_Gemeinschaft/Kita/3.jpg",
    ],
    "Grundschule Schönwalde": [
      "/images/Bildung_Gemeinschaft/Schule/mainPhoto22.jpg",
      "/images/Bildung_Gemeinschaft/Schule/1.webp",
      "/images/Bildung_Gemeinschaft/Schule/2.jpg",
      "/images/Bildung_Gemeinschaft/Schule/3.jpg",
      "/images/Bildung_Gemeinschaft/Schule/444.jpg",
      "/images/Bildung_Gemeinschaft/Schule/5.webp",
    ],
    "Dorf-Bücherschran": [
      "/images/Bildung_Gemeinschaft/Bibliotek/mainFoto.webp",
      "/images/Bildung_Gemeinschaft/Bibliotek/1.jpg",
      "/images/Bildung_Gemeinschaft/Bibliotek/2.jpg",
      "/images/Bildung_Gemeinschaft/Bibliotek/3.webp",
    ]
  };

  useEffect(() => {
    if (data?.["Bildung & Gemeinschaft"]) {
      setCards(data["Bildung & Gemeinschaft"]);
      setLoading(false);
    }
  }, [data]);

  return (
   <>
      <YourAreHere infoPageName="Bildung & Gemeinschaft" />
      <CardTemplate
        heading="🎓 Lernen im Herzen unseres Dorfes"
        introText={
          <>
            In Schönwalde beginnt Bildung gleich nebenan – persönlich, naturnah
            und herzlich. In der <strong>Kita Regenbogen</strong> entdecken Kinder spielerisch ihre
            Welt, mit Fokus auf Handwerk und Kreativität. Die <strong>Grundschule</strong> fördert
            Lernen in kleinen Klassen, eng verbunden mit Natur und
            Dorfgemeinschaft. Und unsere <strong>Mini-Bibliothek</strong> lädt Groß und Klein ein:
            Bücher nehmen, tauschen, lesen – ganz unkompliziert.
            <br />
            <br />
            <strong>
              Bildung in Schönwalde heißt: gemeinsam wachsen und entdecken!
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

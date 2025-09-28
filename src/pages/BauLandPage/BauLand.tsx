// import { useEffect, useState } from "react";
// import { useData } from "../../context/DataContext";
// import CardTemplate from "../../components/CardTemplate/CardTemplate";
// import YourAreHere from "../../components/YourAreHere/YouAreHere";
// // import SearchInfo from "../../context/SearchAllPath/SearchInfo";

// export default function BauLand() {
//   const data = useData();
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const images = {
//     Baugrundstücke: [
//       "/images/Bauland/mainPhoto.png",
//     ],
//     Bauland: [
//       "/images/OtherPictures/Center/4.webp",
//       "/images/OtherPictures/Center/2.webp",
//     ],
//   };

//   useEffect(() => {
//     if (data?.["Baugrundstücke"]) {
//       setCards(data["Baugrundstücke"]);
//       setLoading(false);
//     }
//   }, [data]);


//   return (
//     <>
//       {/* <SearchInfo /> */}
//       <YourAreHere infoPageName="Baugrundstücke" />

//       <CardTemplate
//         heading="🏡 Suchen Sie ein Zuhause im Grünen?"
//         introText={
//           "In Schönwalde stehen Baugrundstücke und Wohnhäuser zum Verkauf – ideal für alle, die Ruhe, Natur, Freiraum und Dorfgemeinschaft schätzen. Ob Eigenheim, Rückzugsort oder Investition: Hier beginnt Ihr neues Kapitel."
//         }
//         cards={cards}
//         loading={loading}
//         images={images}
//       />
//     </>
//   );
// }





// + Barrierefreiheit
import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import CardTemplate from "../../components/CardTemplate/CardTemplate";
import YourAreHere from "../../components/YourAreHere/YouAreHere";
import { LargeImageContainer, LargeImage, FotoName } from "./styles";

export default function BauLand() {
  const data = useData();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
/*
  const images = {
    Baugrundstücke: ["/images/Bauland/mainPhoto.jpg"],
    Bauland: [
      "/images/OtherPictures/Center/4.avif",
      "/images/OtherPictures/Center/2.avif",
    ],
  };
*/
  useEffect(() => {
    const bauData = data?.["Baugrundstücke"];
    if (bauData) {
      setCards(bauData);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <>
      <YourAreHere infoPageName="Baugrundstücke" />

      <CardTemplate
        heading="🏡 Suchen Sie ein Zuhause im Grünen?"
        introText="In Schönwalde stehen Baugrundstücke und Wohnhäuser zum Verkauf – ideal für alle, die Ruhe, Natur, Freiraum und Dorfgemeinschaft schätzen. Ob Eigenheim, Rückzugsort oder Investition: Hier beginnt Ihr neues Kapitel."
        cards={cards}
        loading={loading}
        //images={images}
      />

      <FotoName>B-Plan Gartenstraße</FotoName>
      
      <LargeImageContainer>
        <LargeImage
          src="https://rhejakzdfjatxokeqpkt.supabase.co/storage/v1/object/public/Website%20cards%20images/Baugrundstuecke/1.jpg"
          alt="Plan der Bebauung 1"
        />
      </LargeImageContainer>

      <FotoName>B-Plan Mühlenhof</FotoName>

      <LargeImageContainer>
        <LargeImage
          src="https://rhejakzdfjatxokeqpkt.supabase.co/storage/v1/object/public/Website%20cards%20images/Baugrundstuecke/2.jpg"
          alt="Plan der Bebauung 2"
        />
      </LargeImageContainer>


    </>
  );
}

// import { useEffect, useState } from "react";
// import CardTemplateSmall from "../../components/CardTemplateSmall/CardTemplateSmall";
// import { useData } from "../../context/DataContext";
// import MainCarousel from "./MainCarousel/MainCarousel";
// import { Heading, IntroText, MainContext } from "./styles";
// import { ImageOnlyGallery } from "./ImageOnlyCard/ImageOnlyGallery";

// function HomePage() {
//   const data = useData();
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const images = {
//     "Über das Dorf": [
//       "/images/OtherPictures/Map/mainPhoto.png",
//       "/images/OtherPictures/Center/2.webp",
//       "/images/OtherPictures/Center/3.webp",
//       "/images/OtherPictures/Center/6.webp",
//       "/images/OtherPictures/Center/8.webp",
//     ],
//     Bürgermeister: ["/images/OtherPictures/People/mainPhoto.jpg"],
//   };

//   const geschichteImages = [
//     "/images/OtherPictures/Geschichte/1.png",
//     "/images/OtherPictures/Geschichte/2.png",
//     "/images/OtherPictures/Geschichte/3.png",
//     "/images/OtherPictures/Geschichte/4.png",
//   ];

//   useEffect(() => {
//     if (data?.["Schönwalde entdecken"]) {
//       setCards(data["Schönwalde entdecken"]);
//       setLoading(false);
//     }
//   }, [data]);

//   return (
//     <>
//       <MainCarousel />

//       <MainContext>
//         <CardTemplateSmall
//           heading="🌞 Willkommen in Schönwald Brandenburg - ein Ort, an dem Natur und Gemeinschaft im Einklang leben."
//           introText={
//             <>
//               Die Gemeinde Schönwald besteht aus den Ortsteilen Schönwalde und
//               Waldow/Brand.
//             </>
//           }
//           cards={cards}
//           loading={loading}
//           images={images}
//         />

//         {/* <Heading>Geschichte</Heading> */}
//         <Heading>🏰 Geschichte von Schönwalde (15910 Brandenburg)</Heading>

//         <IntroText>
//           Schönwalde ist nicht nur ein Dorf, sondern ein Ort mit tief
//           verwurzelter Geschichte, die bis ins 14. Jahrhundert zurückreicht. Die
//           Vergangenheit des Ortes ist ein Mosaik aus Ereignissen, Traditionen
//           und einem starken Gemeinschaftsgeist, der über Jahrhunderte hinweg
//           gewachsen ist.
//         </IntroText>

//         <ImageOnlyGallery images={geschichteImages} loading={false} />

//         <Heading>🌿 Heute</Heading>

//         <IntroText>
//           Schönwalde ist ein Ort, an dem Geschichte nicht nur bewahrt, sondern
//           gelebt wird. Zwischen denkmalgeschützten Bauten, ländlicher Idylle und
//           moderner Lebensqualität bleibt das kulturelle Erbe spürbar lebendig.
//         </IntroText>

//         <Heading>
//           Schönwalde – wo Vergangenheit lebt und Zukunft gemeinsam entsteht
//         </Heading>
//       </MainContext>
//     </>
//   );
// }

// export default HomePage;


// + Barrierefreiheit
import { useEffect, useState } from "react";
import CardTemplateSmall from "../../components/CardTemplateSmall/CardTemplateSmall";
import { useData } from "../../context/DataContext";
import MainCarousel from "./MainCarousel/MainCarousel";
import { Heading, IntroText, MainContext } from "./styles";
import { ImageOnlyGallery } from "./ImageOnlyCard/ImageOnlyGallery";
import { Helmet } from "react-helmet"; // ✅ ОЦЕ — нове

function HomePage() {
  const data = useData();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Зображення з описами для alt
  const images = {
    "Über das Dorf": [
      "/images/OtherPictures/Map/mainPhoto.png",
      "/images/OtherPictures/Center/2.avif",
      "/images/OtherPictures/Center/3.avif",
      "/images/OtherPictures/Center/6.avif",
      "/images/OtherPictures/Center/8.avif",
    ],
    Bürgermeister: ["/images/OtherPictures/People/mainPhoto.avif"],
  };

  const geschichteImages = [
    "/images/OtherPictures/Geschichte/1.avif",
    "/images/OtherPictures/Geschichte/2.avif",
    "/images/OtherPictures/Geschichte/3.avif",
    "/images/OtherPictures/Geschichte/4.avif",
  ];

  useEffect(() => {
    if (data?.["Schönwalde entdecken"]) {
      setCards(data["Schönwalde entdecken"]);
      setLoading(false);
    }
  }, [data]);

  return (
    <main role="main">

      {/* ✅ SEO МЕТАДАНІ */}
      <Helmet>
        <title>Gemeinde Schönwald (Spreewald) – Offizielle Webseite</title>
        <meta
          name="description"
          content="Willkommen in Schönwald (15910 Brandenburg) – Informationen zur Gemeinde, den Ortsteilen Schönwalde & Waldow/Brand, Geschichte, Veranstaltungen und mehr."
        />
      </Helmet>

      {/* ✅ Головне карусельне зображення */}
      <MainCarousel aria-label="Bilderkarussell der Gemeinde" />

      <MainContext>
        <section aria-labelledby="willkommen-heading">


          <CardTemplateSmall
            heading="🌞 Willkommen in Schönwald Brandenburg - ein Ort, an dem Natur und Gemeinschaft im Einklang leben."
            introText={
              <>
                Die Gemeinde Schönwald besteht aus den Ortsteilen Schönwalde und
                Waldow/Brand.
              </>
            }
            cards={cards}
            loading={loading}
            images={images}
          />
        </section>

        <section aria-labelledby="geschichte-heading">
          <Heading as="h2" id="geschichte-heading">
            🏰 Geschichte von Schönwalde (15910 Spreewald)
          </Heading>
          <IntroText>
            Schönwalde ist nicht nur ein Dorf, sondern ein Ort mit tief
            verwurzelter Geschichte, die bis ins 14. Jahrhundert zurückreicht.
            Die Vergangenheit des Ortes ist ein Mosaik aus Ereignissen,
            Traditionen und einem starken Gemeinschaftsgeist, der über
            Jahrhunderte hinweg gewachsen ist.
          </IntroText>

          <ImageOnlyGallery
            images={geschichteImages}
            loading={false}
            ariaLabel="Bildergalerie zur Geschichte von Schönwalde"
          />
        </section>

        <section aria-labelledby="heute-heading">
          <Heading as="h2" id="heute-heading">
            🌿 Heute
          </Heading>
          <IntroText>
            Schönwalde ist ein Ort, an dem Geschichte nicht nur bewahrt,
            sondern gelebt wird. Zwischen denkmalgeschützten Bauten, ländlicher
            Idylle und moderner Lebensqualität bleibt das kulturelle Erbe
            spürbar lebendig.
          </IntroText>
        </section>

        <section aria-labelledby="zukunft-heading">
          <Heading as="h2" id="zukunft-heading">
            Schönwalde – wo Vergangenheit lebt und Zukunft gemeinsam entsteht
          </Heading>
        </section>
      </MainContext>
    </main>
  );
}

export default HomePage;

// import Carousel from "../../components/Carousel/Carousel";
// import YourAreHere from "../../components/YourAreHere/YouAreHere";
// import HistoryCarousel from "./HistoryPage/HistoryPage";
// import MainCarousel from "./MainCarousel/MainCarousel";
// import MainInfoCard from "./MainInfoCard/MainInfoCard";
// import { InfoCardsWrapper, MainContext } from "./styles";
// import rawMd from "./text.md?raw";

// function HomePage() {
//   // Отримує всі ключі на основі блоків *_NAME_START
//   const extractKeysFromMarkdown = (markdown: string): string[] => {
//     const regex = /<!--\s*(\w+)_NAME_START\s*-->/g;
//     const keys = [];
//     let match;
//     while ((match = regex.exec(markdown)) !== null) {
//       keys.push(match[1]);
//     }
//     return keys;
//   };

//   // Використовуємо цю функцію для формування categories
//   const keys = extractKeysFromMarkdown(rawMd);
//   const categories = keys.map((key) => ({ key }));

//   const images = [
//     "/images/OtherPictures/Center/1.webp",
//     "/images/OtherPictures/Center/2.webp",
//     "/images/OtherPictures/Center/3.webp",
//     "/images/OtherPictures/Center/4.webp",
//     "/images/OtherPictures/Center/5.webp",
//     "/images/OtherPictures/Center/6.webp",
//     "/images/OtherPictures/Center/7.webp",
//     "/images/OtherPictures/Center/8.webp",
//   ];

//   const imagesHistory = [
//     "/images/OtherPictures/Geschichte/1.png",
//     "/images/OtherPictures/Geschichte/2.png",
//     "/images/OtherPictures/Geschichte/3.png",
//     "/images/OtherPictures/Geschichte/4.png",
//   ];

//   const extractSection = (
//     text: string,
//     startMarker: string,
//     endMarker: string
//   ) => {
//     const regex = new RegExp(
//       `<!-- ${startMarker} -->([\\s\\S]*?)<!-- ${endMarker} -->`,
//       "m"
//     );
//     const match = text.match(regex);
//     return match ? match[1].trim() : "";
//   };

//   const sections = categories.map(({ key }) => {
//     const name = extractSection(rawMd, `${key}_NAME_START`, `${key}_NAME_END`);
//     return {
//       name,
//       id: name
//         .toLowerCase()
//         .normalize("NFD")
//         .replace(/[\u0300-\u036f]/g, "")
//         .replace(/ä/g, "ae")
//         .replace(/ö/g, "oe")
//         .replace(/ü/g, "ue")
//         .replace(/ß/g, "ss")
//         .replace(/\s*-\s*/g, "-")
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/^-+|-+$/g, ""),

//       text: extractSection(rawMd, `${key}_TEXT_START`, `${key}_TEXT_END`),
//       mainPhoto: extractSection(
//         rawMd,
//         `${key}_PHOTO_START`,
//         `${key}_PHOTO_END`
//       ),
//     };
//   });

//   return (
//     <>
//       <MainCarousel />
//       <MainContext>
//         <YourAreHere />

//         <InfoCardsWrapper>
//           {sections.map((item, index) => (
//             <div key={index} id={item.id}>
//               <MainInfoCard
//                 name={item.name}
//                 text={item.text}
//                 mainPhoto={item.mainPhoto}
//               />
//             </div>
//           ))}
//         </InfoCardsWrapper>

//           {/* <HistoryCarousel images={imagesHistory}/> */}

//         <Carousel images={images} />
//       </MainContext>
//     </>
//   );
// }

// export default HomePage;

// 2
// import Carousel from "../../components/Carousel/Carousel";
// import MainCarousel from "./MainCarousel/MainCarousel";
// import MainInfoCard from "./MainInfoCard/MainInfoCard";
// import { InfoCardsWrapper, MainContext } from "./styles";
// import rawMd from "./text.md?raw";

// function HomePage() {
//   // Отримує всі ключі на основі блоків *_NAME_START
//   const extractKeysFromMarkdown = (markdown: string): string[] => {
//     const regex = /<!--\s*(\w+)_NAME_START\s*-->/g;
//     const keys = [];
//     let match;
//     while ((match = regex.exec(markdown)) !== null) {
//       keys.push(match[1]);
//     }
//     return keys;
//   };

//   // Використовуємо цю функцію для формування categories
//   const keys = extractKeysFromMarkdown(rawMd);
//   const categories = keys.map((key) => ({ key }));

//   const images = [
//     "/images/OtherPictures/Center/1.webp",
//     "/images/OtherPictures/Center/2.webp",
//     "/images/OtherPictures/Center/3.webp",
//     "/images/OtherPictures/Center/4.webp",
//     "/images/OtherPictures/Center/5.webp",
//     "/images/OtherPictures/Center/6.webp",
//     "/images/OtherPictures/Center/7.webp",
//     "/images/OtherPictures/Center/8.webp",
//   ];

//   const extractSection = (
//     text: string,
//     startMarker: string,
//     endMarker: string
//   ) => {
//     const regex = new RegExp(
//       `<!-- ${startMarker} -->([\\s\\S]*?)<!-- ${endMarker} -->`,
//       "m"
//     );
//     const match = text.match(regex);
//     return match ? match[1].trim() : "";
//   };

//   const sections = categories.map(({ key }) => {
//     const name = extractSection(rawMd, `${key}_NAME_START`, `${key}_NAME_END`);
//     return {
//       name,
//       id: name
//         .toLowerCase()
//         .normalize("NFD")
//         .replace(/[\u0300-\u036f]/g, "")
//         .replace(/ä/g, "ae")
//         .replace(/ö/g, "oe")
//         .replace(/ü/g, "ue")
//         .replace(/ß/g, "ss")
//         .replace(/\s*-\s*/g, "-")
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/^-+|-+$/g, ""),

//       text: extractSection(rawMd, `${key}_TEXT_START`, `${key}_TEXT_END`),
//       mainPhoto: extractSection(
//         rawMd,
//         `${key}_PHOTO_START`,
//         `${key}_PHOTO_END`
//       ),
//     };
//   });

//   return (
//     <>
//       <MainCarousel />
//       <MainContext>

//         <InfoCardsWrapper>
//           {sections.map((item, index) => (
//             <div key={index} id={item.id}>
//               <MainInfoCard
//                 name={item.name}
//                 text={item.text}
//                 mainPhoto={item.mainPhoto}
//               />
//             </div>
//           ))}
//         </InfoCardsWrapper>

//         <Carousel images={images} />
//       </MainContext>
//     </>
//   );
// }

// export default HomePage;

// 3 - new
import { useEffect, useState } from "react";
import CardTemplateSmall from "../../components/CardTemplateSmall/CardTemplateSmall";
import { useData } from "../../context/DataContext";
import MainCarousel from "./MainCarousel/MainCarousel";
import { Heading, IntroText, MainContext } from "./styles";
import { ImageOnlyGallery } from "./ImageOnlyCard/ImageOnlyGallery";

function HomePage() {
  const data = useData();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const images = {
    "Über das Dorf": [
      "/images/OtherPictures/Map/mainPhoto.png",
      "/images/OtherPictures/Center/1.webp",
      "/images/OtherPictures/Center/2.webp",
      "/images/OtherPictures/Center/3.webp",
      "/images/OtherPictures/Center/4.webp",
      "/images/OtherPictures/Center/5.webp",
      "/images/OtherPictures/Center/6.webp",
      "/images/OtherPictures/Center/7.webp",
      "/images/OtherPictures/Center/8.webp",
    ],
    Bürgermeister: ["/images/OtherPictures/People/mainPhoto.jpg"],
  };

  const geschichteImages = [
    "/images/OtherPictures/Geschichte/1.png",
    "/images/OtherPictures/Geschichte/2.png",
    "/images/OtherPictures/Geschichte/3.png",
    "/images/OtherPictures/Geschichte/4.png",
  ];

  useEffect(() => {
    if (data?.["Schönwalde entdecken"]) {
      setCards(data["Schönwalde entdecken"]);
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      <MainCarousel />

      <MainContext>
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

        {/* <Heading>Geschichte</Heading> */}
        <Heading>🏰 Geschichte von Schönwalde (15910 Brandenburg)</Heading>

        <IntroText>
          Schönwalde ist nicht nur ein Dorf, sondern ein Ort mit tief
          verwurzelter Geschichte, die bis ins 14. Jahrhundert zurückreicht. Die
          Vergangenheit des Ortes ist ein Mosaik aus Ereignissen, Traditionen
          und einem starken Gemeinschaftsgeist, der über Jahrhunderte hinweg
          gewachsen ist.
        </IntroText>

        <ImageOnlyGallery images={geschichteImages} loading={false} />

        <Heading>🌿 Heute</Heading>

        <IntroText>
          Schönwalde ist ein Ort, an dem Geschichte nicht nur bewahrt, sondern
          gelebt wird. Zwischen denkmalgeschützten Bauten, ländlicher Idylle und
          moderner Lebensqualität bleibt das kulturelle Erbe spürbar lebendig.
        </IntroText>

        <Heading>
          Schönwalde – wo Vergangenheit lebt und Zukunft gemeinsam entsteht
        </Heading>
      </MainContext>
    </>
  );
}

export default HomePage;

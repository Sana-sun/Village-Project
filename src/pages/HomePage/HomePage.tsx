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

import Carousel from "../../components/Carousel/Carousel";
import YourAreHere from "../../components/YourAreHere/YouAreHere";
import MainCarousel from "./MainCarousel/MainCarousel";
import MainInfoCard from "./MainInfoCard/MainInfoCard";
import { InfoCardsWrapper, MainContext } from "./styles";
import rawMd from "./text.md?raw";

function HomePage() {
  // Отримує всі ключі на основі блоків *_NAME_START
  const extractKeysFromMarkdown = (markdown: string): string[] => {
    const regex = /<!--\s*(\w+)_NAME_START\s*-->/g;
    const keys = [];
    let match;
    while ((match = regex.exec(markdown)) !== null) {
      keys.push(match[1]);
    }
    return keys;
  };

  // Використовуємо цю функцію для формування categories
  const keys = extractKeysFromMarkdown(rawMd);
  const categories = keys.map((key) => ({ key }));

  const images = [
    "/images/OtherPictures/Center/1.webp",
    "/images/OtherPictures/Center/2.webp",
    "/images/OtherPictures/Center/3.webp",
    "/images/OtherPictures/Center/4.webp",
    "/images/OtherPictures/Center/5.webp",
    "/images/OtherPictures/Center/6.webp",
    "/images/OtherPictures/Center/7.webp",
    "/images/OtherPictures/Center/8.webp",
  ];

  const extractSection = (
    text: string,
    startMarker: string,
    endMarker: string
  ) => {
    const regex = new RegExp(
      `<!-- ${startMarker} -->([\\s\\S]*?)<!-- ${endMarker} -->`,
      "m"
    );
    const match = text.match(regex);
    return match ? match[1].trim() : "";
  };

  const sections = categories.map(({ key }) => {
    const name = extractSection(rawMd, `${key}_NAME_START`, `${key}_NAME_END`);
    return {
      name,
      id: name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ä/g, "ae")
        .replace(/ö/g, "oe")
        .replace(/ü/g, "ue")
        .replace(/ß/g, "ss")
        .replace(/\s*-\s*/g, "-")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, ""),

      text: extractSection(rawMd, `${key}_TEXT_START`, `${key}_TEXT_END`),
      mainPhoto: extractSection(
        rawMd,
        `${key}_PHOTO_START`,
        `${key}_PHOTO_END`
      ),
    };
  });

  return (
    <>
      <MainCarousel />
      <MainContext>
        <YourAreHere />

        <InfoCardsWrapper>
          {sections.map((item, index) => (
            <div key={index} id={item.id}>
              <MainInfoCard
                name={item.name}
                text={item.text}
                mainPhoto={item.mainPhoto}
              />
            </div>
          ))}
        </InfoCardsWrapper>

        <Carousel images={images} />
      </MainContext>
    </>
  );
}

export default HomePage;

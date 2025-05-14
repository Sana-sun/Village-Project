// import ReactMarkdown from "react-markdown";
// import { FaChevronLeft } from "react-icons/fa";
// import YourAreHere from "../../components/YourAreHere/YouAreHere";
// import {
//   ArrowButton,
//   ButtonGrid,
//   IntroText,
//   IntroWrapper,
// } from "../EducationPage/styles";

// import rawMd from "./text.md?raw";
// import CardInfo from "../../components/CardInfo/CardInfo";

// import rawMdFotos from "./fotos.md?raw";
// import MoreInfoBtn from "../../components/MoreInfoBtn/MoreInfoBtn";
// import { subcategories } from "../../components/IconSearch/subcategories";
// import { useState } from "react";

// // тут ми "вмикаємо" всі категорії на сайт
// function TradeServicesPage() {
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);

//   const categories = [
//     { key: "SEE" },
//     { key: "SPORTHEIM" },
//     { key: "ALPAKAFARM" },
//     { key: "SPREEWALDRINGKARTCENTER" },
//     { key: "RINGTRAININGCENTER" },
//     { key: "DORFGEMEINSCHAFTSHAUS" },
//     { key: "MUEHLENVEREIN" },
//     { key: "JUGENDCLUB" },
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

//       slogan: extractSection(rawMd, `${key}_SLOGAN_START`, `${key}_SLOGAN_END`),
//       text: extractSection(rawMd, `${key}_TEXT_START`, `${key}_TEXT_END`),
//       mainPhoto: extractSection(
//         rawMdFotos,
//         `${key}_PHOTO_START`,
//         `${key}_PHOTO_END`
//       ),
//       images: extractSection(
//         rawMdFotos,
//         `${key}_IMAGES_START`,
//         `${key}_IMAGES_END`
//       )
//         .split("\n")
//         .map((line) => line.trim())
//         .filter(Boolean),
//     };
//   });

//   const introText = extractSection(rawMd, "INTRO_TEXT_START", "INTRO_TEXT_END");
//   const separateText = extractSection(
//     rawMd,
//     "SEPARATE_TEXT_START",
//     "SEPARATE_TEXT_END"
//   );

//   const handleLinkClick = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ) => {
//     event.preventDefault();

//     const target = event.target as HTMLElement;
//     const href = target.closest("a")?.getAttribute("href");

//     if (!href) return;

//     const targetId = href.split("#")[1];
//     if (!targetId) return;

//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       const yOffset = -100;
//       const y =
//         targetElement.getBoundingClientRect().top +
//         window.pageYOffset +
//         yOffset;

//       window.scrollTo({ top: y, behavior: "smooth" });
//     }
//   };

//  const groupedCategories = subcategories
//   .filter((subcategory) => subcategory.subCategory?.trim()) // Фільтруємо невалідні
//   .reduce((acc, subcategory) => {
//     const existingCategory = acc.find(
//       (cat) => cat.name === subcategory.subCategory
//     );

//     if (existingCategory) {
//       existingCategory.items.push(subcategory);
//     } else {
//       acc.push({
//         name: subcategory.subCategory,
//         items: [subcategory],
//       });
//     }

//     return acc;
//   }, [] as { name: string; items: typeof subcategories }[])
//   .sort((a, b) => a.name.localeCompare(b.name)); // Сортуємо за назвою

//   return (
//     <>
//       <YourAreHere />

//       <IntroText>
//         <ReactMarkdown>{separateText}</ReactMarkdown>
//       </IntroText>

//       <IntroWrapper onClick={handleLinkClick}>
//         <ReactMarkdown>{introText}</ReactMarkdown>
//       </IntroWrapper>

//       <ButtonGrid>
//         {groupedCategories.map((item, index) => (
//           <MoreInfoBtn key={index} title={item.name} />
//         ))}
//       </ButtonGrid>

//       <hr />
//       {/* <ButtonGrid>
//           <MoreInfoBtn title="First" />
//           <MoreInfoBtn title="Secondt" />
//           <MoreInfoBtn title="Third" />
//           <MoreInfoBtn title="Fource" />
//           <MoreInfoBtn title="Fifth" />
//           <MoreInfoBtn title="First" />
//           <MoreInfoBtn title="Secondt" />
//           <MoreInfoBtn title="Third" />
//           <MoreInfoBtn title="Fource" />
//           <MoreInfoBtn title="Fifth" />
//        </ButtonGrid> */}

//       {sections.map((item, index) => (
//         <div key={index} id={item.id}>
//           <CardInfo
//             mainText={item.text}
//             slogan={item.slogan}
//             mainPhoto={item.mainPhoto}
//             images={item.images}
//           />
//         </div>
//       ))}

//       <ArrowButton onClick={() => (window.location.href = "/")}>
//         <FaChevronLeft /> Zur Startseite
//       </ArrowButton>
//     </>
//   );
// }

// export default TradeServicesPage;

// // 2
// import ReactMarkdown from "react-markdown";
// import { FaChevronLeft } from "react-icons/fa";
// import YourAreHere from "../../components/YourAreHere/YouAreHere";
// import {
//   ArrowButton,
//   ButtonGrid,
//   IntroText,
//   IntroWrapper,
// } from "../EducationPage/styles";

// import rawMd from "./text.md?raw";
// import CardInfo from "../../components/CardInfo/CardInfo";

// import MoreInfoBtn from "../../components/MoreInfoBtn/MoreInfoBtn";
// import { subcategories } from "../../components/IconSearch/subcategories";
// import { useState } from "react";

// // тут ми "вмикаємо" всі категорії на сайт
// function TradeServicesPage() {
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);

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

//   const introText = extractSection(rawMd, "INTRO_TEXT_START", "INTRO_TEXT_END");

//   const separateText = extractSection(
//     rawMd,
//     "SEPARATE_TEXT_START",
//     "SEPARATE_TEXT_END"
//   );

//   const handleLinkClick = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ) => {
//     event.preventDefault();

//     const target = event.target as HTMLElement;
//     const href = target.closest("a")?.getAttribute("href");

//     if (!href) return;

//     const targetId = href.split("#")[1];
//     if (!targetId) return;

//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       const yOffset = -100;
//       const y =
//         targetElement.getBoundingClientRect().top +
//         window.pageYOffset +
//         yOffset;

//       window.scrollTo({ top: y, behavior: "smooth" });
//     }
//   };

//   const groupedCategories = subcategories
//     .filter((subcategory) => subcategory.subCategory?.trim()) // Фільтруємо невалідні
//     .reduce((acc, subcategory) => {
//       const existingCategory = acc.find(
//         (cat) => cat.name === subcategory.subCategory
//       );

//       if (existingCategory) {
//         existingCategory.items.push(subcategory);
//       } else {
//         acc.push({
//           // name: subcategory.subCategory!,
//           name: subcategory.subCategory ?? "Unbenannt",

//           items: [subcategory],
//         });
//       }

//       return acc;
//     }, [] as { name: string; items: typeof subcategories }[])
//     .sort((a, b) => a.name.localeCompare(b.name)); // Сортуємо за назвою

//   const extractSubcategoryContent = (text: string, key: string) => {
//     const regex = new RegExp(
//       `<!-- ${key}_SUBCATEGORY_START -->([\\s\\S]*?)<!-- ${key}_SUBCATEGORY_END -->`,
//       "m"
//     );
//     const match = text.match(regex);
//     return match ? match[1].trim() : null;
//   };

//   const parseSubcategoryItems = (
//     content: string
//   ): {
//     id: string;
//     slogan: string;
//     text: string;
//     mainPhoto: string;
//   }[] => {
//     const entries: {
//       id: string;
//       slogan: string;
//       text: string;
//       mainPhoto: string;
//     }[] = [];

//     const nameRegex = /<!-- (\w+)_NAME_START -->[\s\S]*?<!-- \1_NAME_END -->/g;
//     const matches = [...content.matchAll(nameRegex)];

//     for (const match of matches) {
//       const id = match[1];

//       const getValue = (key: string) => {
//         const regex = new RegExp(
//           `<!-- ${id}_${key}_START -->([\\s\\S]*?)<!-- ${id}_${key}_END -->`
//         );
//         const res = content.match(regex);
//         return res ? res[1].trim() : "";
//       };

//       entries.push({
//         id,
//         slogan: getValue("SLOGAN"),
//         text: getValue("TEXT"),
//         mainPhoto: getValue("PHOTO"),
//       });
//     }

//     return entries;
//   };

//   return (
//     <>
//       <YourAreHere />

//       <IntroText>
//         <ReactMarkdown>{separateText}</ReactMarkdown>
//       </IntroText>

//       <IntroWrapper onClick={handleLinkClick}>
//         <ReactMarkdown>{introText}</ReactMarkdown>
//       </IntroWrapper>

//       <ButtonGrid>
//         {groupedCategories.map((item, index) => (
//           <MoreInfoBtn
//             key={index}
//             title={item.name}
//             onClick={() => {
//               setActiveCategory(item.name.toUpperCase());

//               const target = document.getElementById("hr-section");
//               if (target) {
//                 const yOffset = -70;
//                 const y =
//                   target.getBoundingClientRect().top +
//                   window.pageYOffset +
//                   yOffset;
//                 window.scrollTo({ top: y, behavior: "smooth" });
//               }
//             }}
//             active={activeCategory === item.name.toUpperCase()}
//           />
//         ))}
//       </ButtonGrid>

//       <hr id="hr-section" />

//       {activeCategory && (
//         <div id="subcategory-section">
//           {parseSubcategoryItems(
//             extractSubcategoryContent(rawMd, activeCategory) || ""
//           ).map((item, index) => (
//             <div key={index} id={item.id}>
//               <CardInfo
//                 mainText={item.text}
//                 slogan={item.slogan}
//                 mainPhoto={item.mainPhoto}
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       <ArrowButton onClick={() => (window.location.href = "/")}>
//         <FaChevronLeft /> Zur Startseite
//       </ArrowButton>
//     </>
//   );
// }

// export default TradeServicesPage;

// 3

import ReactMarkdown from "react-markdown";
import { FaChevronLeft } from "react-icons/fa";
import YourAreHere from "../../components/YourAreHere/YouAreHere";
import {
  ArrowButton,
  ButtonGrid,
  IntroText,
  IntroWrapper,
} from "../EducationPage/styles";

import rawMd from "./text.md?raw";
import CardInfo from "../../components/CardInfo/CardInfo";

import MoreInfoBtn from "../../components/MoreInfoBtn/MoreInfoBtn";
import { subcategories } from "../../components/IconSearch/subcategories";
import { useEffect, useState } from "react";

import { FaChevronUp } from "react-icons/fa";
import { ScrollButton } from "./styles";

// тут ми "вмикаємо" всі категорії на сайт
function TradeServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  const introText = extractSection(rawMd, "INTRO_TEXT_START", "INTRO_TEXT_END");

  const separateText = extractSection(
    rawMd,
    "SEPARATE_TEXT_START",
    "SEPARATE_TEXT_END"
  );

  const handleLinkClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();

    const target = event.target as HTMLElement;
    const href = target.closest("a")?.getAttribute("href");

    if (!href) return;

    const targetId = href.split("#")[1];
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -100;
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const groupedCategories = subcategories
    .filter((subcategory) => subcategory.subCategory?.trim()) // Фільтруємо невалідні
    .reduce((acc, subcategory) => {
      const existingCategory = acc.find(
        (cat) => cat.name === subcategory.subCategory
      );

      if (existingCategory) {
        existingCategory.items.push(subcategory);
      } else {
        acc.push({
          // name: subcategory.subCategory!,
          name: subcategory.subCategory ?? "Unbenannt",

          items: [subcategory],
        });
      }

      return acc;
    }, [] as { name: string; items: typeof subcategories }[])
    .sort((a, b) => a.name.localeCompare(b.name)); // Сортуємо за назвою

  const extractSubcategoryContent = (text: string, key: string) => {
    const regex = new RegExp(
      `<!-- ${key}_SUBCATEGORY_START -->([\\s\\S]*?)<!-- ${key}_SUBCATEGORY_END -->`,
      "m"
    );
    const match = text.match(regex);
    return match ? match[1].trim() : null;
  };

  const parseSubcategoryItems = (
    content: string
  ): {
    id: string;
    slogan: string;
    text: string;
    mainPhoto: string;
  }[] => {
    const entries: {
      id: string;
      slogan: string;
      text: string;
      mainPhoto: string;
    }[] = [];

    const nameRegex = /<!-- (\w+)_NAME_START -->[\s\S]*?<!-- \1_NAME_END -->/g;
    const matches = [...content.matchAll(nameRegex)];

    for (const match of matches) {
      const id = match[1];

      const getValue = (key: string) => {
        const regex = new RegExp(
          `<!-- ${id}_${key}_START -->([\\s\\S]*?)<!-- ${id}_${key}_END -->`
        );
        const res = content.match(regex);
        return res ? res[1].trim() : "";
      };

      entries.push({
        id,
        slogan: getValue("SLOGAN"),
        text: getValue("TEXT"),
        mainPhoto: getValue("PHOTO"),
      });
    }

    return entries;
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true); // Показуємо кнопку, коли прокручено більше ніж 200px
    } else {
      setIsVisible(false); // Сховуємо кнопку, коли ми на верху
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Викликаємо handleScroll при зміні прокрутки
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <YourAreHere />

      <IntroText>
        <ReactMarkdown>{separateText}</ReactMarkdown>
      </IntroText>

      <IntroWrapper onClick={handleLinkClick}>
        <ReactMarkdown>{introText}</ReactMarkdown>
      </IntroWrapper>

      <ButtonGrid>
        {groupedCategories.map((item, index) => (
          <MoreInfoBtn
            key={index}
            title={item.name}
            onClick={() => {
              if (activeCategory === item.name.toUpperCase()) {
                setActiveCategory(null); // Вимикаємо фільтр
              } else {
                setActiveCategory(item.name.toUpperCase());
                const target = document.getElementById("hr-section");
                if (target) {
                  const yOffset = -70;
                  const y =
                    target.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }
            }}
            active={activeCategory === item.name.toUpperCase()}
          />
        ))}
      </ButtonGrid>

      <hr id="hr-section" />

      <div id="subcategory-section">
        {activeCategory === null
          ? // 🔹 Показати всі підкатегорії з усіх груп
            groupedCategories.map((group) =>
              parseSubcategoryItems(
                extractSubcategoryContent(rawMd, group.name.toUpperCase()) || ""
              ).map((item, index) => (
                <div key={`${group.name}-${index}`} id={item.id}>
                  <CardInfo
                    mainText={item.text}
                    slogan={item.slogan}
                    mainPhoto={item.mainPhoto}
                  />
                </div>
              ))
            )
          : // 🔹 Показати тільки активну
            parseSubcategoryItems(
              extractSubcategoryContent(rawMd, activeCategory) || ""
            ).map((item, index) => (
              <div key={index} id={item.id}>
                <CardInfo
                  mainText={item.text}
                  slogan={item.slogan}
                  mainPhoto={item.mainPhoto}
                />
              </div>
            ))}
      </div>

      {/* Кнопка для прокручування наверх */}
      {isVisible && (
        <ScrollButton onClick={scrollToTop}>
          <FaChevronUp />
          {/* <FaArrowUp /> */}
        </ScrollButton>
      )}

      <ArrowButton onClick={() => (window.location.href = "/")}>
        <FaChevronLeft /> Zur Startseite
      </ArrowButton>
    </>
  );
}

export default TradeServicesPage;

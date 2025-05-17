// 2
// import ReactMarkdown from "react-markdown";
// import {
//   FaChevronLeft,
//   FaChevronUp,
// } from "react-icons/fa";
// import YourAreHere from "../../components/YourAreHere/YouAreHere";
// import { ArrowButton, IntroText, IntroWrapper } from "../EducationPage/styles";

// import rawMd from "./text.md?raw";
// import CardInfo from "../../components/CardInfo/CardInfo";
// import { useEffect, useState } from "react";
// import { ScrollButton } from "./styles";

// // тут ми "вмикаємо" всі категорії на сайт
// function TradeServicesPage() {
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
//   const [isVisible, setIsVisible] = useState(false);

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

//   const extractFields = (key: string, fields: string[]) => {
//     const result: Record<string, string> = {};
//     fields.forEach((field) => {
//       result[field] = extractSection(
//         rawMd,
//         `${key}_${field.toUpperCase()}_START`,
//         `${key}_${field.toUpperCase()}_END`
//       );
//     });
//     return result;
//   };

//   const sections = categories.map(({ key }) => {
//     const { name, slogan, text, photo } = extractFields(key, [
//       "name",
//       "slogan",
//       "text",
//       "photo",
//     ]);

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
//       slogan,
//       text,
//       photo,
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

//   // кнопка скролу
//    const handleScroll = () => {
//     if (window.scrollY > 200) {
//       setIsVisible(true); // Показуємо кнопку, коли прокручено більше ніж 200px
//     } else {
//       setIsVisible(false); // Сховуємо кнопку, коли ми на верху
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//       window.addEventListener("scroll", handleScroll);
  
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     }, []);

//   return (
//     <>
//       <YourAreHere />

//       <IntroText>
//         <ReactMarkdown>{separateText}</ReactMarkdown>
//       </IntroText>

//       <IntroWrapper onClick={handleLinkClick}>
//         <ReactMarkdown>{introText}</ReactMarkdown>
//       </IntroWrapper>

//       <hr id="hr-section" />

//       {sections.map((item, index) => (
//         <div key={index} id={item.id}>
//           <CardInfo
//             mainText={item.text}
//             slogan={item.slogan}
//             mainPhoto={item.photo}
//           />
//         </div>
//       ))}

//       {/* Кнопка для прокручування наверх */}
//       {isVisible && (
//         <ScrollButton onClick={scrollToTop}>
//           <FaChevronUp />
//         </ScrollButton>
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
import {
  FaChevronLeft,
  FaChevronUp,
} from "react-icons/fa";
import YourAreHere from "../../components/YourAreHere/YouAreHere";

import rawMd from "./text.md?raw";
import CardInfo from "../../components/CardInfo/CardInfo";
import { useEffect, useState } from "react";
import { ScrollButton } from "./styles";
import { ArrowButton, IntroText, IntroWrapper } from "../../components/MarkdownPageTemplateProps/styles";

// тут ми "вмикаємо" всі категорії на сайт
function TradeServicesPage() {
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

  const extractFields = (key: string, fields: string[]) => {
    const result: Record<string, string> = {};
    fields.forEach((field) => {
      result[field] = extractSection(
        rawMd,
        `${key}_${field.toUpperCase()}_START`,
        `${key}_${field.toUpperCase()}_END`
      );
    });
    return result;
  };

  const sections = categories.map(({ key }) => {
    const { name, slogan, text, photo } = extractFields(key, [
      "name",
      "slogan",
      "text",
      "photo",
    ]);

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
      slogan,
      text,
      photo,
    };
  });

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

  // кнопка скролу
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

      {/* <hr id="hr-section" /> */}

      {sections.map((item, index) => (
        <div key={index} id={item.id}>
          <CardInfo
            mainText={item.text}
            slogan={item.slogan}
            mainPhoto={item.photo}
          />
        </div>
      ))}

      {/* Кнопка для прокручування наверх */}
      {isVisible && (
        <ScrollButton onClick={scrollToTop}>
          <FaChevronUp />
        </ScrollButton>
      )}

      <ArrowButton onClick={() => (window.location.href = "/")}>
        <FaChevronLeft /> Zur Startseite
      </ArrowButton>
    </>
  );
}

export default TradeServicesPage;

// import { FaChevronLeft } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import rawMd from "./text.md?raw";
// import YourAreHere from "../../components/YourAreHere/YouAreHere";
// import {
//   ArrowButton,
//   IntroText,
//   IntroWrapper,
// } from "../../components/MarkdownPageTemplateProps/styles";
// import { Navigation, StyledNavLink } from "./styles";
// import ReactMarkdown from "react-markdown";

// function TradeServicesPage() {
//   const location = useLocation(); // 🔹 Додаємо `useLocation()`
//   const [myLocation, setMyLocation] = useState<string | undefined>(undefined);
//   const [isScrollable, setIsScrollable] = useState<boolean>(false); // 🔹 Контроль скролу

//   useEffect(() => {
//     if (isScrollable) {
//       const target = document.getElementById("hr-section");
//       if (target) {
//         const yOffset = -100;
//         const y =
//           target.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//       setIsScrollable(true); // 🔹 Вимикаємо після одноразового використання
//     }
//   }, [location.pathname, isScrollable]);

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

//   const handleCategoryClick = (category: string) => {
//     setMyLocation(category);
//     setIsScrollable(true); // 🔹 Увімкнення скролу при виборі категорії
//   };

//   return (
//     <>
//       <YourAreHere tradePageLocation={myLocation} />

//       <IntroText>
//         <ReactMarkdown>{separateText}</ReactMarkdown>
//       </IntroText>

//       <IntroWrapper>
//         <ReactMarkdown>{introText}</ReactMarkdown>
//       </IntroWrapper>

//       <Navigation>
//         {/* <StyledNavLink
//           to="all-services"
//           $active={location.pathname.includes("all-services")}
//           onClick={() => handleCategoryClick("Alle")}
//         >
//           Alle
//         </StyledNavLink> */}

//         <StyledNavLink
//           to="bau-&-renovierung"
//           $active={location.pathname.includes("bau-&-renovierung")}
//           onClick={() => handleCategoryClick("Bau & Renovierung")}
//         >
//           Bau & Renovierung
//         </StyledNavLink>

//         <StyledNavLink
//           to="energie-&-umwelt"
//           $active={location.pathname.includes("energie-&-umwelt")}
//           onClick={() => handleCategoryClick("Energie & Umwelt")}
//         >
//           Energie & Umwelt
//         </StyledNavLink>

//         <StyledNavLink
//           to="kfz"
//           $active={location.pathname.includes("kfz")}
//           onClick={() => handleCategoryClick("Kfz")}
//         >
//           Kfz
//         </StyledNavLink>

//         <StyledNavLink
//           to="landwirtschaft-&-imkerei"
//           $active={location.pathname.includes("landwirtschaft-&-imkerei")}
//           onClick={() => handleCategoryClick("Landwirtschaft & Imkerei")}
//         >
//           Landwirtschaft & Imkerei
//         </StyledNavLink>

//         <StyledNavLink
//           to="lebensmittel-&-genuss"
//           $active={location.pathname.includes("lebensmittel-&-genuss")}
//           onClick={() => handleCategoryClick("Lebensmittel & Genuss")}
//         >
//           Lebensmittel & Genuss
//         </StyledNavLink>

//         <StyledNavLink
//           to="pflege-&-betreuung"
//           $active={location.pathname.includes("pflege-&-betreuung")}
//           onClick={() => handleCategoryClick("Pflege & Betreuung")}
//         >
//           Pflege & Betreuung
//         </StyledNavLink>

//         <StyledNavLink
//           to="schoenheit"
//           $active={location.pathname.includes("schoenheit")}
//           onClick={() => handleCategoryClick("Schönheit")}
//         >
//           Schönheit
//         </StyledNavLink>

//         <StyledNavLink
//           to="technische-dienstleistungen"
//           $active={location.pathname.includes("technische-dienstleistungen")}
//           onClick={() => handleCategoryClick(" Technische Dienstleistungen")}
//         >
//           Technische Dienstleistungen
//         </StyledNavLink>
//       </Navigation>

//       <div id="hr-section" style={{ marginTop: "40px" }}>
//         <Outlet />
//       </div>

//       <ArrowButton onClick={() => (window.location.href = "/")}>
//         <FaChevronLeft /> Zur Startseite
//       </ArrowButton>
//     </>
//   );
// }

// export default TradeServicesPage;

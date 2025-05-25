
// 3 - супер працює
import { FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { NavWrapper, ArrowBox } from "./styles";
import { subcategories } from "../IconSearch/subcategories";

type MoreLocationInfoProps = {
  tradePageLocation?: string;
};

function YourAreHere({ tradePageLocation }: MoreLocationInfoProps) {
  const location = useLocation();

  const pathNameMap: { [key: string]: string } = {
    "/": "Schönwalde entdecken",
    "/education": "Bildung & Gemeinschaft",
    "/municipality": "Gemeinde & Verwaltung",
    "/tradeServices": "Handwerkgewerbe & Dienstleistungen",
    "/leisure": "Natur & Freizeit",
    "/transport": "Verkehr & Infrastruktur",
    "/bauLand": "Baugrundstücke",
    "/impressum": "Impressum",
    "/history": "Geschichte",
  };

  // Додаємо унікальні підкатегорії до мапи
  const subCategoryMap: { [key: string]: string } = {};

  subcategories.forEach((item) => {
    if (item.path && item.subCategory && item.category === "Handwerkgewerbe & Dienstleistungen") {
      const cleanPath = item.path.split("#")[0]; // відкидаємо якір
      subCategoryMap[cleanPath] = item.subCategory;
    }
  });

  const currentPath = location.pathname;
  const subCategory = subCategoryMap[currentPath];
  const currentPage =
    pathNameMap[currentPath] ||
    subCategory ||
    tradePageLocation ||
    "Unbekannt";

  const isTradeSubcategory = Boolean(subCategory);

  return (
    <NavWrapper>
      <span>Sie sind hier</span>
      <ArrowBox>
        <FaChevronRight />
      </ArrowBox>

      {isTradeSubcategory && (
        <>
          <span>Handwerkgewerbe & Dienstleistungen</span>
          <ArrowBox>
            <FaChevronRight />
          </ArrowBox>
        </>
      )}

      <span>{currentPage}</span>
    </NavWrapper>
  );
}

export default YourAreHere;


// 1й варіант де дії тільки > Handwerkgewerbe & Dienstleistungen"
// import { FaChevronRight } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import { NavWrapper, ArrowBox } from "./styles";

// type MoreLocationInfoProps = {
//   tradePageLocation?: string;
// };


// function YourAreHere({tradePageLocation}: MoreLocationInfoProps) {
//   const location = useLocation();

//   const pathNameMap: { [key: string]: string } = {
//     "/": "Schönwalde entdecken",
//     "/education": "Bildung & Gemeinschaft",
//     "/municipality": "Gemeinde & Verwaltung",
//     "/tradeServices": "Handwerkgewerbe & Dienstleistungen",
//     "/leisure": "Natur & Freizeit",
//     "/transport": "Verkehr & Infrastruktur",
//     "/bauLand": "Baugrundstücke",
//     "/impressum": "Impressum",
//   };

//   // const currentPage = pathNameMap[location.pathname] || tradePageLocation || "Handwerkgewerbe & Dienstleistungen" || "Unbekannt";
//   const currentPage = pathNameMap[location.pathname] || tradePageLocation || "Unbekannt";

//   return (
//     <NavWrapper>
//       <span>Sie sind hier</span>
//       <ArrowBox>
//         <FaChevronRight />
//       </ArrowBox>
//       <span>{currentPage}</span>
//     </NavWrapper>
//   );
// }

// export default YourAreHere;




// 2 - ручний варіант
// import { FaChevronRight } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import { NavWrapper, ArrowBox } from "./styles";

// type MoreLocationInfoProps = {
//   tradePageLocation?: string;
// };

// function YourAreHere({ tradePageLocation }: MoreLocationInfoProps) {
//   const location = useLocation();

//   const pathNameMap: { [key: string]: string } = {
//     "/": "Schönwalde entdecken",
//     "/education": "Bildung & Gemeinschaft",
//     "/municipality": "Gemeinde & Verwaltung",
//     "/tradeServices": "Handwerkgewerbe & Dienstleistungen",
//     "/leisure": "Natur & Freizeit",
//     "/transport": "Verkehr & Infrastruktur",
//     "/bauLand": "Baugrundstücke",
//     "/impressum": "Impressum",
//     "/tradeServices/kfz": "Kfz",
//     "/tradeServices/landwirtschaft-&-imkerei": "Landwirtschaft & Imkerei",
//   };

//   const currentPath = location.pathname;
//   const currentPage = pathNameMap[currentPath] || tradePageLocation || "Unbekannt";

//   const isSubcategory =
//     currentPage === "Kfz" || currentPage === "Landwirtschaft & Imkerei";

//   return (
//     <NavWrapper>
//       <span>Sie sind hier</span>
//       <ArrowBox>
//         <FaChevronRight />
//       </ArrowBox>

//       {isSubcategory && (
//         <>
//           <span>Handwerkgewerbe & Dienstleistungen</span>
//           <ArrowBox>
//             <FaChevronRight />
//           </ArrowBox>
//         </>
//       )}

//       <span>{currentPage}</span>
//     </NavWrapper>
//   );
// }

// export default YourAreHere;


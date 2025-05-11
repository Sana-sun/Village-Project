import { FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { NavWrapper, ArrowBox } from "./styles";

function YourAreHere() {
  const location = useLocation();

  const pathNameMap: { [key: string]: string } = {
    "/": "Startseite",
    "/education": "Bildung & Gemeinschaft",
    "/municipality": "Gemeinde & Verwaltung",
    "/tradeServices": "Handel & Dienstleistungen",
    "/leisure": "Natur & Freizeit",
    "/transport": "Verkehr & Infrastruktur",
    "/bauLand": "Baugrundstücke",
    "/impressum": "Impressum",
  };

  const currentPage = pathNameMap[location.pathname] || "Unbekannt";

  return (
    <NavWrapper>
      <span>Sie sind hier</span>
      <ArrowBox>
        <FaChevronRight />
      </ArrowBox>
      <span>{currentPage}</span>
    </NavWrapper>
  );
}

export default YourAreHere;

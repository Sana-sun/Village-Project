import { FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { NavWrapper, ArrowBox } from "./styles";

type MoreLocationInfoProps = {
  tradePageLocation?: string;
};


function YourAreHere({tradePageLocation}: MoreLocationInfoProps) {
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
  };

  const currentPage = pathNameMap[location.pathname] || tradePageLocation || "Handwerkgewerbe & Dienstleistungen" || "Unbekannt";

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

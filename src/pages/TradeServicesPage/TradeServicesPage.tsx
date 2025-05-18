import { FaChevronLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import rawMd from "./text.md?raw";
import YourAreHere from "../../components/YourAreHere/YouAreHere";
import { ArrowButton, IntroText, IntroWrapper } from "../../components/MarkdownPageTemplateProps/styles";
import { Navigation, StyledNavLink } from "./styles";
import ReactMarkdown from "react-markdown";

function TradeServicesPage() {
  const location = useLocation(); // 🔹 Додаємо `useLocation()`
  const [myLocation, setMyLocation] = useState<string | undefined>(undefined);

  useEffect(() => {
    const target = document.getElementById("hr-section");
    if (target) {
      const yOffset = -100;
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [location.pathname]);

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

  return (
    <>
      <YourAreHere tradePageLocation={myLocation}/>

       <IntroText>
         <ReactMarkdown>{separateText}</ReactMarkdown>
       </IntroText>

       <IntroWrapper>
         <ReactMarkdown>{introText}</ReactMarkdown>
       </IntroWrapper>

      <Navigation>
        <StyledNavLink
          to="all-services"
          $active={location.pathname.includes("all-services")}
          onClick={() => setMyLocation("Alle")}
        >
          Alle
        </StyledNavLink>

        <StyledNavLink
          to="bau-&-renovierung"
          $active={location.pathname.includes("bau-&-renovierung")}
          onClick={() => setMyLocation("Bau & Renovierung")}
        >
          Bau & Renovierung
        </StyledNavLink>

        <StyledNavLink
          to="energie-&-umwelt"
          $active={location.pathname.includes("energie-&-umwelt")}
          onClick={() => setMyLocation("Energie & Umwelt")}
        >
          Energie & Umwelt
        </StyledNavLink>

        <StyledNavLink 
          to="kfz" 
          $active={location.pathname.includes("kfz")}
          onClick={() => setMyLocation("Kfz")}
          >
          Kfz
        </StyledNavLink>

        <StyledNavLink
          to="landwirtschaft-&-imkerei"
          $active={location.pathname.includes("landwirtschaft-&-imkerei")}
          onClick={() => setMyLocation("Landwirtschaft & Imkerei")}
        >
          Landwirtschaft & Imkerei
        </StyledNavLink>

        <StyledNavLink
          to="lebensmittel-&-genuss"
          $active={location.pathname.includes("lebensmittel-&-genuss")}
          onClick={() => setMyLocation("Lebensmittel & Genuss")}
        >
          Lebensmittel & Genuss
        </StyledNavLink>

        <StyledNavLink
          to="pflege-schoenheit-&-betreuung"
          $active={location.pathname.includes("pflege-schoenheit-&-betreuung")}
          onClick={() => setMyLocation("Pflege, Schönheit & Betreuung")}
        >
          Pflege, Schönheit & Betreuung
        </StyledNavLink>

        <StyledNavLink
          to="technische-dienstleistungen"
          $active={location.pathname.includes("technische-dienstleistungen")}
          onClick={() => setMyLocation(" Technische Dienstleistungen")}
        >
          Technische Dienstleistungen
        </StyledNavLink>
      </Navigation>

      <div id="hr-section" style={{ marginTop: "40px" }}>
        <Outlet />
      </div>

      <ArrowButton onClick={() => (window.location.href = "/")}>
        <FaChevronLeft /> Zur Startseite
      </ArrowButton>
    </>
  );
}

export default TradeServicesPage;

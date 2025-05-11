import ReactMarkdown from "react-markdown";
import { FaChevronLeft } from "react-icons/fa";
import YourAreHere from "../../components/YourAreHere/YouAreHere";
import { ArrowButton, ButtonGrid, IntroWrapper } from "./styles";

import rawMd from "./text.md?raw";
import MoreInfoBtn from "../../components/MoreInfoBtn/MoreInfoBtn";
import CardInfo from "../../components/CardInfo/CardInfo";

function EducationPage() {
 
  const categories = [
    { key: "KITA" },
    { key: "GRUNDSCHULE" },
    { key: "MINIBIBLIOTEK" },
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

  const sections = categories.map(({ key }) => ({
    name: extractSection(rawMd, `${key}_NAME_START`, `${key}_NAME_END`),
    slogan: extractSection(rawMd, `${key}_SLOGAN_START`, `${key}_SLOGAN_END`),
    text: extractSection(rawMd, `${key}_TEXT_START`, `${key}_TEXT_END`),
  }));

  // приклад використання - text

  const introText = extractSection(rawMd, "INTRO_TEXT_START", "INTRO_TEXT_END");
  const separateText = extractSection(
    rawMd,
    "SEPARATE_TEXT_START",
    "SEPARATE_TEXT_END"
  );

  return (
    <>

      <YourAreHere />

      <IntroWrapper>
        <ReactMarkdown>{introText}</ReactMarkdown>
      </IntroWrapper>

      <ButtonGrid>
        {sections.map((item, index) => (
          <MoreInfoBtn key={index} title={item.name} />
        ))}
      </ButtonGrid>

      <IntroWrapper>
        <ReactMarkdown>{separateText}</ReactMarkdown>
      </IntroWrapper>
      
       <CardInfo mainText={sections[0].text} slogan={sections[0].slogan} />
       <CardInfo mainText={sections[1].text} slogan={sections[1].slogan} />
       <CardInfo mainText={sections[2].text} slogan={sections[2].slogan} />

      <ArrowButton onClick={() => (window.location.href = "/")}>
        <FaChevronLeft /> Zur vorherigen Seite
      </ArrowButton>
    </>
  );
}

export default EducationPage;

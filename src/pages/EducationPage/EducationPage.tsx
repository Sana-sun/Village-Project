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

  const sections = categories.map(({ key }) => {
    const name = extractSection(rawMd, `${key}_NAME_START`, `${key}_NAME_END`);
    return {
      name,
      id: name.replace(/\s+/g, "-").toLowerCase(),
      slogan: extractSection(rawMd, `${key}_SLOGAN_START`, `${key}_SLOGAN_END`),
      text: extractSection(rawMd, `${key}_TEXT_START`, `${key}_TEXT_END`),
      mainPhoto: extractSection(
        rawMd,
        `${key}_PHOTO_START`,
        `${key}_PHOTO_END`
      ),
      images: extractSection(rawMd, `${key}_IMAGES_START`, `${key}_IMAGES_END`)
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    };
  });

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
          <MoreInfoBtn
            key={index}
            title={item.name}
            onClick={() => {
              const target = document.getElementById(item.id);
              if (target) {
                const yOffset = -120; // піднімає на 100px вище
                const y =
                  target.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          />
        ))}
      </ButtonGrid>

      <IntroWrapper>
        <ReactMarkdown>{separateText}</ReactMarkdown>
      </IntroWrapper>

      {sections.map((item, index) => (
        <div key={index} id={item.id}>
          <CardInfo
            mainText={item.text}
            slogan={item.slogan}
            mainPhoto={item.mainPhoto}
            images={item.images}
          />
        </div>
      ))}

      <ArrowButton onClick={() => (window.location.href = "/")}>
        <FaChevronLeft /> Zur Startseite
      </ArrowButton>
    </>
  );
}

export default EducationPage;

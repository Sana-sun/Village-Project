import ReactMarkdown from "react-markdown";
import { FaChevronLeft } from "react-icons/fa";
import YourAreHere from "../../components/YourAreHere/YouAreHere";
import { ArrowButton, IntroText, IntroWrapper } from "./styles";

import rawMd from "./text.md?raw";
import CardInfo from "../../components/CardInfo/CardInfo";

import rawMdFotos from "./fotos.md?raw";

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
      // id: name.replace(/\s+/g, "-").toLowerCase(),
      // id: name.replace(/\s*-\s*/g, "-").replace(/\s+/g, "-").toLowerCase(),
      id: name
        .toLowerCase()
        .normalize("NFD") // Розбиває умляути на базові літери + діакритику
        .replace(/[\u0300-\u036f]/g, "") // Прибирає діакритику
        .replace(/ä/g, "ae")
        .replace(/ö/g, "oe")
        .replace(/ü/g, "ue")
        .replace(/ß/g, "ss")
        .replace(/\s*-\s*/g, "-")
        .replace(/[^a-z0-9]+/g, "-") // Усе, що не буква/цифра → "-"
        .replace(/^-+|-+$/g, ""), // Прибирає дефіси на краях

      slogan: extractSection(rawMd, `${key}_SLOGAN_START`, `${key}_SLOGAN_END`),
      text: extractSection(rawMd, `${key}_TEXT_START`, `${key}_TEXT_END`),
      mainPhoto: extractSection(
        rawMdFotos,
        `${key}_PHOTO_START`,
        `${key}_PHOTO_END`
      ),
      images: extractSection(
        rawMdFotos,
        `${key}_IMAGES_START`,
        `${key}_IMAGES_END`
      )
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

  const handleLinkClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault(); // Запобігаємо стандартному переходу за посиланням

    // Перевіряємо, що event.target є HTML елементом
    const target = event.target as HTMLElement;
    const href = target.closest("a")?.getAttribute("href"); // Отримуємо href, якщо клік був на лінку

    if (!href) return;

    const targetId = href.split("#")[1]; // Витягуємо ID секції
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -100; // Враховуємо зміщення (щоб не закривав заголовок)
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <YourAreHere />

      <IntroText>
        <ReactMarkdown>{separateText}</ReactMarkdown>
      </IntroText>

      <IntroWrapper onClick={handleLinkClick}>
        <ReactMarkdown>{introText}</ReactMarkdown>
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

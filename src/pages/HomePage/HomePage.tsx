import Carousel from "../../components/Carousel/Carousel";
import YourAreHere from "../../components/YourAreHere/YouAreHere";
import MainCarousel from "./MainCarousel/MainCarousel";
import MainInfoCard from "./MainInfoCard/MainInfoCard";
import { InfoCardsWrapper, MainContext } from "./styles";
import rawMd from "./text.md?raw";

function HomePage() {
  const categories = [
    { key: "UEBERDORF" },
    { key: "BUERGERMEISTER" },
    { key: "GESCHICHTE" },
  ];

   const images = [
    "/images/OtherPictures/Center/1.jpg",
    "/images/OtherPictures/Center/2.jpg",
    "/images/OtherPictures/Center/3.jpg",
    "/images/OtherPictures/Center/4.jpg",
    "/images/OtherPictures/Center/5.jpg",
    "/images/OtherPictures/Center/6.jpg",
    "/images/OtherPictures/Center/7.jpg",
    "/images/OtherPictures/Center/8.jpg",
    "/images/OtherPictures/Center/9.jpg",
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

      text: extractSection(rawMd, `${key}_TEXT_START`, `${key}_TEXT_END`),
      mainPhoto: extractSection(
        rawMd,
        `${key}_PHOTO_START`,
        `${key}_PHOTO_END`
      ),
    };
  });

  return (
    <>
      <MainCarousel />
      <MainContext>
        <YourAreHere />

        <InfoCardsWrapper>
          {sections.map((item, index) => (
            <div key={index} id={item.id}>
              <MainInfoCard
                name={item.name}
                text={item.text}
                mainPhoto={item.mainPhoto}
              />
            </div>
          ))}
        </InfoCardsWrapper>

        <Carousel images={images} />
      </MainContext>
    </>
  );
}

export default HomePage;

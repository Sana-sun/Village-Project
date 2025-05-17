import React from "react";
import ReactMarkdown from "react-markdown";
import { FaChevronLeft } from "react-icons/fa";
import YourAreHere from "../../components/YourAreHere/YouAreHere";
import CardInfo from "../../components/CardInfo/CardInfo";
import { ArrowButton, IntroText, IntroWrapper } from "./styles";

interface MarkdownPageTemplateProps {
  markdown: string;
  IntroComponent?: typeof CardInfo;
  introStart?: string;
  introEnd?: string;
  separateStart?: string;
  separateEnd?: string;
}

const MarkdownPageTemplate: React.FC<MarkdownPageTemplateProps> = ({
  markdown,
  introStart = "INTRO_TEXT_START",
  introEnd = "INTRO_TEXT_END",
  separateStart = "SEPARATE_TEXT_START",
  separateEnd = "SEPARATE_TEXT_END",
}) => {
  const extractKeysFromMarkdown = (md: string): string[] => {
    const regex = /<!--\s*(\w+)_NAME_START\s*-->/g;
    const keys: string[] = [];
    let match;
    while ((match = regex.exec(md)) !== null) {
      keys.push(match[1]);
    }
    return keys;
  };

  const extractSection = (text: string, startMarker: string, endMarker: string) => {
    const regex = new RegExp(`<!-- ${startMarker} -->([\\s\\S]*?)<!-- ${endMarker} -->`, "m");
    const match = text.match(regex);
    return match ? match[1].trim() : "";
  };

  const extractFields = (key: string, fields: string[]) => {
    const result: Record<string, string> = {};
    fields.forEach((field) => {
      result[field] = extractSection(markdown, `${key}_${field.toUpperCase()}_START`, `${key}_${field.toUpperCase()}_END`);
    });
    return result;
  };

  const categories = extractKeysFromMarkdown(markdown).map((key) => ({ key }));

  const sections = categories.map(({ key }) => {
    const { name, slogan, text, photo } = extractFields(key, ["name", "slogan", "text", "photo", "images"]);
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
      images: extractSection(markdown, `${key}_IMAGES_START`, `${key}_IMAGES_END`)
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    };
  });

  const introText = extractSection(markdown, introStart, introEnd);
  const separateText = extractSection(markdown, separateStart, separateEnd);

  const handleLinkClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const href = target.closest("a")?.getAttribute("href");
    if (!href) return;

    const targetId = href.split("#")[1];
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -100;
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <YourAreHere />
      {separateText && (
        <IntroText>
          <ReactMarkdown>{separateText}</ReactMarkdown>
        </IntroText>
      )}
      {introText && (
        <IntroWrapper onClick={handleLinkClick}>
          <ReactMarkdown>{introText}</ReactMarkdown>
        </IntroWrapper>
      )}
      {sections.map((item, index) => (
        <div key={index} id={item.id}>
          <CardInfo
            mainText={item.text}
            slogan={item.slogan}
            mainPhoto={item.photo}
            images={item.images}
          />
        </div>
      ))}
      <ArrowButton onClick={() => (window.location.href = "/")}>
        <FaChevronLeft /> Zur Startseite
      </ArrowButton>
    </>
  );
};

export default MarkdownPageTemplate;

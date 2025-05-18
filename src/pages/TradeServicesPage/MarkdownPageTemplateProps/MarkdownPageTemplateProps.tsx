import React from "react";
import CardInfo from "../../../components/CardInfo/CardInfo";

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

  const sortedSections = sections.sort((a, b) => a.name.localeCompare(b.name)); // 🔹 Сортуємо за `name`
  
  return (
    <>
      {sortedSections.map((item, index) => (
        <div key={index} id={item.id}>
          <CardInfo
            mainText={item.text}
            slogan={item.slogan}
            mainPhoto={item.photo}
            images={item.images}
          />
        </div>
      ))}
    </>
  );
};

export default MarkdownPageTemplate;

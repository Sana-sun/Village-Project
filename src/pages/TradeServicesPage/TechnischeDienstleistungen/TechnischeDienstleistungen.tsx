import MarkdownPageTemplate from "../MarkdownPageTemplateProps/MarkdownPageTemplateProps";
import rawMd from "./text.md?raw";

function TechnischeDienstleistungen() {
  return <MarkdownPageTemplate markdown={rawMd} />;
}

export default TechnischeDienstleistungen;

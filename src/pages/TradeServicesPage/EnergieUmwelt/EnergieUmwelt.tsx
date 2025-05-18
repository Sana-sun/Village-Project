import MarkdownPageTemplate from "../MarkdownPageTemplateProps/MarkdownPageTemplateProps";
import rawMd from "./text.md?raw";

function EnergieUmwelt() {
  return <MarkdownPageTemplate markdown={rawMd} />;
}

export default EnergieUmwelt;

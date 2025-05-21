import MarkdownPageTemplate from "../MarkdownPageTemplateProps/MarkdownPageTemplateProps";
import rawMd from "./text.md?raw";

function Schoenheit() {
  return <MarkdownPageTemplate markdown={rawMd} />;
}

export default Schoenheit;

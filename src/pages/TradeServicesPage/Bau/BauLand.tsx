import MarkdownPageTemplate from "../MarkdownPageTemplateProps/MarkdownPageTemplateProps";
import rawMd from "./text.md?raw";

function Bau() {
  return <MarkdownPageTemplate markdown={rawMd} />;
}

export default Bau;

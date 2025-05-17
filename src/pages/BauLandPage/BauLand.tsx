import MarkdownPageTemplate from "../../components/MarkdownPageTemplateProps/MarkdownPageTemplateProps";
import rawMd from "./text.md?raw";

function BauLand() {
  return <MarkdownPageTemplate markdown={rawMd} />;
}

export default BauLand;

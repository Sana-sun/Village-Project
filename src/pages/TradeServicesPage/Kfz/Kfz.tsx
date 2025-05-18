import MarkdownPageTemplate from "../MarkdownPageTemplateProps/MarkdownPageTemplateProps";
import rawMd from "./text.md?raw";

function Kfz() {
  return <MarkdownPageTemplate markdown={rawMd} />;
}

export default Kfz;

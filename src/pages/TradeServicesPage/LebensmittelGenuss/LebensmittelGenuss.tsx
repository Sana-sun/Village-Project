import MarkdownPageTemplate from "../MarkdownPageTemplateProps/MarkdownPageTemplateProps";
import rawMd from "./text.md?raw";

function LebensmittelGenuss() {
  return <MarkdownPageTemplate markdown={rawMd} />;
}

export default LebensmittelGenuss;

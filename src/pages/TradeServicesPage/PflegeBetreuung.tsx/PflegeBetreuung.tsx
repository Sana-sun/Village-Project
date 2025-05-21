import MarkdownPageTemplate from "../MarkdownPageTemplateProps/MarkdownPageTemplateProps";
import rawMd from "./text.md?raw";

function PflegeBetreuung() {
  return <MarkdownPageTemplate markdown={rawMd} />;
}

export default PflegeBetreuung;

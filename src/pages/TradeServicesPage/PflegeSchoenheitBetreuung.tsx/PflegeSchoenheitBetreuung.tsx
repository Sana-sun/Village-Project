import MarkdownPageTemplate from "../MarkdownPageTemplateProps/MarkdownPageTemplateProps";
import rawMd from "./text.md?raw";

function PflegeSchoenheitBetreuung() {
  return <MarkdownPageTemplate markdown={rawMd} />;
}

export default PflegeSchoenheitBetreuung;

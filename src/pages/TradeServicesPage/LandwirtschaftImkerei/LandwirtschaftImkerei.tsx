import MarkdownPageTemplate from "../MarkdownPageTemplateProps/MarkdownPageTemplateProps";
import rawMd from "./text.md?raw";

function LandwirtschaftImkerei() {
  return <MarkdownPageTemplate markdown={rawMd} />;
}

export default LandwirtschaftImkerei;

import rawMd from "./text.md?raw";
import MarkdownPageTemplate from "../../components/MarkdownPageTemplateProps/MarkdownPageTemplateProps";

function NatureLeisurePage() {
  return (
    <MarkdownPageTemplate
      markdown={rawMd}
    />
  );
}

export default NatureLeisurePage;

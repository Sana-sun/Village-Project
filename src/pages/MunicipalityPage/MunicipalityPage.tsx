import rawMd from "./text.md?raw";

import MarkdownPageTemplate from "../../components/MarkdownPageTemplateProps/MarkdownPageTemplateProps";

function MunicipalityPage() {

  return (
    <MarkdownPageTemplate
      markdown={rawMd}
    />
  );
}

export default MunicipalityPage;
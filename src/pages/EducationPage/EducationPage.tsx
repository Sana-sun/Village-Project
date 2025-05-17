import rawMd from "./text.md?raw";

import MarkdownPageTemplate from "../../components/MarkdownPageTemplateProps/MarkdownPageTemplateProps";

function EducationPage() {

  return (
   <MarkdownPageTemplate
         markdown={rawMd}
       />
  );
}

export default EducationPage;

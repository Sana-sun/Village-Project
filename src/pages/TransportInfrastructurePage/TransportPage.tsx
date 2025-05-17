import rawMd from "./text.md?raw";

import MarkdownPageTemplate from "../../components/MarkdownPageTemplateProps/MarkdownPageTemplateProps";

function TransportPage() {
  return (
    <MarkdownPageTemplate
          markdown={rawMd}
        />
  );
}

export default TransportPage;

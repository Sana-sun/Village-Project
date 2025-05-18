import MarkdownPageTemplate from "../MarkdownPageTemplateProps/MarkdownPageTemplateProps";
import rawMd from "../text.md?raw";
// import rawMd from "../../;

function AllSubCategories() {
  return <MarkdownPageTemplate markdown={rawMd} />;
}

export default AllSubCategories;

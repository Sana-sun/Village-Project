import { FaChevronLeft } from "react-icons/fa";
import { ArrowButton } from "../../../components/MarkdownPageTemplateProps/styles";
import YourAreHere from "../../../components/YourAreHere/YouAreHere";
import { HistoryFotoWrapper } from "./styles";

function HistoryPage() {

  return (
    <>
      <YourAreHere />

      <HistoryFotoWrapper>
        <img src="/images/OtherPictures/Geschichte/1.png" alt="" />
        <img src="/images/OtherPictures/Geschichte/2.png" alt="" />
        <img src="/images/OtherPictures/Geschichte/3.png" alt="" />
        <img src="/images/OtherPictures/Geschichte/4.png" alt="" />
      </HistoryFotoWrapper>


      <ArrowButton onClick={() => (window.location.href = "/")}>
        <FaChevronLeft /> Zur Startseite
      </ArrowButton>
    </>
  );
}

export default HistoryPage;

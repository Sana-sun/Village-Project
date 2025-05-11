import introText from "./intro.md?raw";
import ReactMarkdown from "react-markdown";
import { IntroWrapper, IntroTitle } from "./styles";
import YourAreHere from "../../components/YourAreHere/YouAreHere";

function Impressum() {
  return (
    <>
    <YourAreHere />
    <IntroTitle>Impressum</IntroTitle>
      <IntroWrapper>
        <ReactMarkdown>{introText}</ReactMarkdown>
      </IntroWrapper>
    </>
  );
}

export default Impressum;

// TODO 1) іконка мов
// TODO 2) доробити підкатегорія на Ви тут > 
// TODO 3) зробити, і чи треба, повернутися на 1 назад?
// TODO 4) підкатегорії під категоріями в меню
// TODO 5) що робити з різними розмірами логотипу в хедері і футері

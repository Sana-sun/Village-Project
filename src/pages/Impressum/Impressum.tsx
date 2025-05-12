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

// TODO 2) доробити підкатегорія на Ви тут > 
// TODO 4) підкатегорії під категоріями в меню

// TODO 5) доробити інші адмін сторінки
// TODO 6) доробити Торг сторінки
// TODO 7) доробити головну сторінку

// TODO 8) змінити фон підкатегорій
// TODO 9) прибрати колір скролу в меню
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

// TODO 5) доробити інші адмін сторінки
// TODO 6) доробити Торг сторінки
// TODO 7) доробити головну сторінку

// TODO 9) іконка пошуку і меню перекривають один одного
// TODO 10) при нажиманні на іконки в футері чи відбв перенесення на ...

// TODO 11) 🚌 чи потрібно вказувати про громад транспорт в Любен і ...
// TODO 12) при прокруткі вниз і переключенні на іншу категорію ми залишаємося на тому самому місці як і до переходу
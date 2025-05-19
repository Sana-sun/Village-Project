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

// TODO 11) 🚌 чи потрібно вказувати про громад транспорт в Любен і ...
// TODO 13) фото потяга 
// TODO 14) фото інші
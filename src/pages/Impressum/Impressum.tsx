import introText from "./intro.md?raw";
import ReactMarkdown from "react-markdown";
import { IntroWrapper, IntroTitle } from "./styles";
import YourAreHere from "../../components/YourAreHere/YouAreHere";

function Impressum() {
  return (
    <>
    <YourAreHere infoPageName="Impressum" />

    <IntroTitle>Impressum</IntroTitle>

      <IntroWrapper>
        <ReactMarkdown>{introText}</ReactMarkdown>
      </IntroWrapper>
    </>
  );
}

export default Impressum;

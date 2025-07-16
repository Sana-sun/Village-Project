import { useEffect } from "react";
import introText from "./intro.md?raw";
import ReactMarkdown from "react-markdown";
import { IntroWrapper, IntroTitle } from "./styles";
import YourAreHere from "../../components/YourAreHere/YouAreHere";

function Impressum() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

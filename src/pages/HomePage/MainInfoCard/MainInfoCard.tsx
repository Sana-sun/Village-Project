import { MainWrapper, MainTitle, MainFoto, MainText } from "./styles";
import ReactMarkdown from "react-markdown";

interface MainInfoCardProps {
  name?: string;
  text?: string;
  mainPhoto?: string;
}

function MainInfoCard({ name, text, mainPhoto }: MainInfoCardProps) {
  return (
    <>
      <MainWrapper>
        <MainTitle>
           <ReactMarkdown>{name}</ReactMarkdown>
        </MainTitle>
        <MainFoto>
          <img src={mainPhoto} alt="Photo" title="Main Photo" />
        </MainFoto>
        <MainText>
          {/* <ReactMarkdown>{text || ""}</ReactMarkdown> */}
          <ReactMarkdown
                    components={{
                      a: ({ node, ...props }) => (
                        <a
                          {...props}
                          // target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#0033A0" }}
                        />
                      ),
                    }}
                  >
                    {text}
                  </ReactMarkdown>
          
        </MainText>
      </MainWrapper>
    </>
  );
}

export default MainInfoCard;

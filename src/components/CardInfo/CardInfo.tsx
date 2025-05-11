import ReactMarkdown from "react-markdown";
import { FotoContainer, MainInfoContainer, SloganText, TextContainer } from "./styles";

interface CardTextProps {
  slogan?: string;
  mainText?: string;
}

function CardInfo({ mainText, slogan }: CardTextProps) {

  return (
    <>
       <div>
          <SloganText>{slogan}</SloganText>
          <MainInfoContainer>
            <FotoContainer>Photo</FotoContainer>

            <TextContainer>
               <ReactMarkdown>{mainText}</ReactMarkdown>
            </TextContainer>
            
          </MainInfoContainer>
          {/* <div>
            Gallery
          </div> */}

       </div>
    </>
  );
}

export default CardInfo;
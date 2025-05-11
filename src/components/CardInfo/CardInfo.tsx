import ReactMarkdown from "react-markdown";
import { FotoContainer, MainInfoContainer, SloganText, TextContainer } from "./styles";
import Carousel from "../Carousel/Carousel";

interface CardTextProps {
  slogan?: string;
  mainText?: string;
  mainPhoto?: string;
  images?: string[];
}

function CardInfo({ mainText, slogan, mainPhoto, images }: CardTextProps) {

  return (
    <>
       <div>
          <SloganText>{slogan}</SloganText>
          <MainInfoContainer>
            <FotoContainer>
              <img src={mainPhoto} alt="Photo" title="Main Pfoto"/>
            </FotoContainer>

            <TextContainer>
               <ReactMarkdown>{mainText}</ReactMarkdown>
            </TextContainer>
            
          </MainInfoContainer>

          <Carousel images={images} />

       </div>
    </>
  );
}

export default CardInfo;

// import ReactMarkdown from "react-markdown";
// import { FotoContainer, MainInfoContainer, SloganText, TextContainer } from "./styles";
// import Carousel from "../Carousel/Carousel";

// interface CardTextProps {
//   slogan?: string;
//   mainText?: string;
//   photos?: string[];
// }

// function CardInfo({ mainText, slogan, photos }: CardTextProps) {

//   return (
//     <>
//        <div>
//           <SloganText>{slogan}</SloganText>
//           <MainInfoContainer>
//             <FotoContainer>Photo</FotoContainer>

//             <TextContainer>
//                <ReactMarkdown>{mainText}</ReactMarkdown>
//             </TextContainer>
            
//           </MainInfoContainer>
//           {/* <div>
//             Gallery
//           </div> */}
//           <Carousel photos={photos}/>

//        </div>
//     </>
//   );
// }

// export default CardInfo;
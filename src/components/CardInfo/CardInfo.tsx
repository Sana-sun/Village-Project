// import ReactMarkdown from "react-markdown";
// import { FotoContainer, MainInfoContainer, SloganText, TextContainer } from "./styles";
// import Carousel from "../Carousel/Carousel";

// interface CardTextProps {
//   slogan?: string;
//   mainText?: string;
//   mainPhoto?: string;
//   images?: string[];
// }

// function CardInfo({ mainText, slogan, mainPhoto, images }: CardTextProps) {

//   return (
//     <>
//        <div>
//           <SloganText>{slogan}</SloganText>
//           <MainInfoContainer>
//             <FotoContainer>
//               <img src={mainPhoto} alt="Photo" title="Main Pfoto"/>
//             </FotoContainer>

//             <TextContainer>
//                <ReactMarkdown>{mainText}</ReactMarkdown>
//             </TextContainer>

//           </MainInfoContainer>

//           <Carousel images={images} />

//        </div>
//     </>
//   );
// }

// export default CardInfo;

// alt
// import ReactMarkdown from "react-markdown";
// import {
//   FotoContainer,
//   InnerText,
//   LoadingText,
//   MainInfoContainer,
//   SloganText,
//   TextContainer,
// } from "./styles";
// import Carousel from "../Carousel/Carousel";
// import { useState, useEffect } from "react";

// interface CardTextProps {
//   slogan?: string;
//   mainText?: string;
//   mainPhoto?: string;
//   images?: string[];
// }

// function CardInfo({ mainText, slogan, mainPhoto, images }: CardTextProps) {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (!mainPhoto) return; // Якщо mainPhoto немає, не виконувати код

//     const img = new Image();
//     img.src = mainPhoto;
//     img.onload = () => setIsLoading(false);
//   }, [mainPhoto]);

//   return (
//     <>
//       <div>
//         <SloganText>{slogan}</SloganText>
//         <MainInfoContainer>
//           <FotoContainer>
//             {isLoading && <LoadingText>Foto hochladen...</LoadingText>}
//             <img src={mainPhoto} alt="Photo" title="Main Photo" />
//           </FotoContainer>

//           <TextContainer>
//             <InnerText>
//               <ReactMarkdown
//                 components={{
//                   a: ({ node, ...props }) => (
//                     <a
//                       {...props}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       style={{ color: "#0033A0" }}
//                     />
//                   ),
//                 }}
//               >
//                 {mainText}
//               </ReactMarkdown>
//             </InnerText>
//           </TextContainer>
//         </MainInfoContainer>

//         <Carousel images={images} />
//       </div>
//     </>
//   );
// }

// export default CardInfo;

// 3
import ReactMarkdown from "react-markdown";
import {
  FotoContainer,
  InnerText,
  LoadingText,
  MainInfoContainer,
  SloganText,
  TextContainer,
} from "./styles";
import Carousel from "../Carousel/Carousel";
import { useState, useEffect } from "react";

interface CardTextProps {
  slogan?: string;
  mainText?: string;
  mainPhoto?: string;
  images?: string[];
}

function CardInfo({ mainText, slogan, mainPhoto, images }: CardTextProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mainPhoto) return; // Якщо mainPhoto немає, не виконувати код

    const img = new Image();
    img.src = mainPhoto;
    img.onload = () => setIsLoading(false);
  }, [mainPhoto]);

  return (
    <>
      <div>
        <SloganText>{slogan}</SloganText>
        <MainInfoContainer>
          <FotoContainer>
            {isLoading && <LoadingText>Foto hochladen...</LoadingText>}
            {/* <img src={mainPhoto} alt="Photo" title="Main Photo" /> */}
            <img
              src={mainPhoto}
              alt="Photo"
              title="Main Photo"
              loading="lazy"
              style={{
                width: "100%",
                // height: "auto",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </FotoContainer>

          <TextContainer>
            <InnerText>
              <ReactMarkdown
                components={{
                  a: ({ node, ...props }) => (
                    <a
                      {...props}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#0033A0" }}
                    />
                  ),
                }}
              >
                {mainText}
              </ReactMarkdown>
            </InnerText>
          </TextContainer>
        </MainInfoContainer>

        <Carousel images={images} />
      </div>
    </>
  );
}

export default CardInfo;

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
import { FaEnvelope, FaPhoneAlt, FaMapMarker, FaGlobe } from "react-icons/fa";

interface CardTextProps {
  slogan?: string;
  mainText?: string;
  openingHours?: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  mainPhoto?: string;
  images?: string[];
}

function CardInfo({
  slogan,
  mainText,
  openingHours,
  address,
  phone,
  email,
  mainPhoto,
  images,
}: CardTextProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mainPhoto) return; // Якщо mainPhoto немає, не виконувати код

    const img = new Image();
    img.src = mainPhoto;
    img.onload = () => setIsLoading(false);
  }, [mainPhoto]);

  return (
    <>
      <FaGlobe style={{ color: "#0033a0" }} />

      <div>
        <SloganText>{slogan}</SloganText>
        <MainInfoContainer>
          <FotoContainer>
            {isLoading && <LoadingText>Foto hochladen...</LoadingText>}
            <img src={mainPhoto} alt="Photo" title="Main Photo" />
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

              <div>openingHours:</div>
              <div>{openingHours}</div>

              <div>
                <FaMapMarker style={{ color: "#0033a0" }} />{address}
              </div>
              <div></div>

              <div>
                <FaPhoneAlt style={{ color: "#0033a0" }} />{phone}
              </div>
              <div></div>

              <div>
                <FaEnvelope style={{ color: "#0033a0" }} />{email}
              </div>
              <div></div>
            </InnerText>
          </TextContainer>
        </MainInfoContainer>

        <Carousel images={images} />
      </div>
    </>
  );
}

export default CardInfo;

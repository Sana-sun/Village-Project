// import {
//   BoldText,
//   CenterTextTrio,
//   InfoContainer,
//   FooterWrapper,
//   LogoImage,
//   LogoBtn,
//   Links,
//   StyledRouterLink,
//   LogoText,
// } from "./styles";
// import { FaFacebook, FaInstagram } from "react-icons/fa";

// function Footer() {
//   const handleHomePage = () => {
//     window.location.href = "/";
//   };

//   return (
//     <>
//       <FooterWrapper>
//         <InfoContainer>
//           <BoldText>Adress</BoldText>
//           <CenterTextTrio>
//             <span>Schönwalde(Spreewald)</span>
//             <span>Hauptstraße 49</span>
//             <span>15910 Schönwalde</span>
//           </CenterTextTrio>

//           <StyledRouterLink to="/impressum">
//             <BoldText>Impressum</BoldText>
//           </StyledRouterLink>

//         </InfoContainer>

//         <LogoBtn onClick={handleHomePage}>
//           <LogoImage
//             // src="public/images/OtherPictures/Logos/Logo.png"
//             src="/images/OtherPictures/Logos/Logo.png"
//             alt="Logo"
//             title="Klicken Sie auf mich, um zur Startseite zu gelangen"
//           />
//           <LogoText>Schönwalde (Spreewald)</LogoText>

//         </LogoBtn>

//         <InfoContainer>
//           <BoldText>Kontakt</BoldText>

//           <CenterTextTrio>
//             <span>
//               <a href="tel:0354742060">Tel: </a>035474 2060
//             </span>
//             <span>
//               <a href="fax:03545238424">Fax: </a>035452 384-24
//             </span>
//             <span>
//               <a href="mailto:amt@unterspreewald.de"> Email: </a>
//               amt@unterspreewald.de
//             </span>
//           </CenterTextTrio>

//           <Links>
//             {/* Mehr von uns auf: */}
//             Mehr auf:
//             <a
//               href="https://www.instagram.com/explore/locations/700885431/schonwalde-brandenburg-germany/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://www.facebook.com/feuerwehr.schoenwalde/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaFacebook />
//             </a>
//           </Links>
//         </InfoContainer>
//       </FooterWrapper>
//     </>
//   );
// }

// export default Footer;

import {
  BoldText,
  CenterTextTrio,
  InfoContainer,
  FooterWrapper,
  LogoImage,
  LogoBtn,
  StyledRouterLink,
  LogoText,
} from "./styles";
import { FaEnvelope, FaPhone } from "react-icons/fa";
function Footer() {
  const handleHomePage = () => {
    window.location.href = "/";
  };

  return (
    <>
      <FooterWrapper>
        <InfoContainer>
          {/* <BoldText>Adress</BoldText> */}
          <CenterTextTrio>
            <span>Schönwalde(Spreewald)</span>
            <span>Hauptstraße 49</span>
            <span>15910 Schönwalde</span>
          </CenterTextTrio>
        </InfoContainer>

        <LogoBtn onClick={handleHomePage}>
          <LogoImage
            // src="public/images/OtherPictures/Logos/Logo.png"
            src="/images/OtherPictures/Logos/Logo.png"
            alt="Logo"
            title="Klicken Sie auf mich, um zur Startseite zu gelangen"
          />
          <LogoText>Schönwalde (Spreewald)</LogoText>
        </LogoBtn>

        <InfoContainer>
          {/* <BoldText>Kontakt</BoldText> */}

          <CenterTextTrio>
            <span>
              {/* <a href="tel:0354742060">Tel: </a> */}
              <a href="tel:0354742060"><FaPhone/></a>
              035474 2060
            </span>
            <span>
              {/* <a href="mailto:amt@unterspreewald.de"> Email: </a> */}
              <a href="mailto:amt@unterspreewald.de"><FaEnvelope/></a>
            amt@unterspreewald.de
            </span>

            <StyledRouterLink to="/impressum">
              <BoldText>Impressum</BoldText>
            </StyledRouterLink>
          </CenterTextTrio>
        </InfoContainer>
      </FooterWrapper>
    </>
  );
}

export default Footer;

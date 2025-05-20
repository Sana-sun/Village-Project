// import BurgerMenu from "../BurgerMenu/BurgerMenu";
// import IconSearch from "../IconSearch/IconSearch";
// import { LogoBtn, LogoImage, LogoText, MenuWrapper } from "./styles";

// function Header() {
//   const handleHomePage = () => {
//     window.location.href = "/";
//   };

//   return (
//     <>
//       <MenuWrapper>
//         <BurgerMenu />

//         <LogoBtn onClick={handleHomePage}>
//           <LogoImage
//             src="/images/OtherPictures/Logos/Logo.png"
//             alt="Logo"
//             title="Klicken Sie auf mich, um zur Startseite zu gelangen"
//           />
//           <LogoText>Schönwalde (Spreewald)</LogoText>
//         </LogoBtn>

//         <IconSearch />
//       </MenuWrapper>
//     </>
//   );
// }

// export default Header;



// // 2
// import { useRef, useState } from "react";
// import BurgerMenu from "../BurgerMenu/BurgerMenu";
// import IconSearch from "../IconSearch/IconSearch";
// import { LogoBtn, LogoImage, LogoText, MenuWrapper, VideoContainer } from "./styles";

// function Header() {
//   const [videoFailed, setVideoFailed] = useState(false);
//   const videoRef = useRef<HTMLVideoElement | null>(null);

//   const handleHomePage = () => {
//     window.location.href = "/";
//   };

//   const handleVideoError = () => {
//     setVideoFailed(true);
//   };

//   const handleVideoLoaded = () => {
//     setVideoFailed(false);
//   };

//   return (
//     <MenuWrapper>
//       <BurgerMenu />

//       <VideoContainer>
//         {videoFailed ? (
//           <LogoImage
//             src="/images/OtherPictures/Logos/Logo.png"
//             alt="Logo"
//             title="Ersatzbild für Video"
//           />
//         ) : (
//           <video
//             ref={videoRef}
//             width={213}   // 320 / 1.5 = ~213
//             height={120}  // 180 / 1.5 = ~120
//             autoPlay
//             muted
//             loop
//             playsInline
//             onError={handleVideoError}
//             onLoadedData={handleVideoLoaded}
//           >
//             <source src="/images/OtherPictures/Logos/Start_Short_Video.mp4" type="video/mp4" />
//             Ваш браузер не підтримує відеотег.
//           </video>
//         )}
//       </VideoContainer>

//       <LogoBtn onClick={handleHomePage}>
//         <LogoImage
//           src="/images/OtherPictures/Logos/Logo.png"
//           alt="Logo"
//           title="Klicken Sie auf mich, um zur Startseite zu gelangen"
//         />
//         <LogoText>Schönwalde (Spreewald)</LogoText>
//       </LogoBtn>

//       <IconSearch />
//     </MenuWrapper>
//   );
// }

// export default Header;




import { useRef, useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import IconSearch from "../IconSearch/IconSearch";
import { LogoBtn, LogoText, MenuWrapper, VideoContainer } from "./styles";

function Header() {
  const [_, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleHomePage = () => {
    window.location.href = "/";
  };

  const handleVideoError = () => {
    setVideoFailed(true);
  };

  const handleVideoLoaded = () => {
    setVideoFailed(false);
  };

  return (
    <MenuWrapper>
      <BurgerMenu />

      

      <LogoBtn onClick={handleHomePage}>
        <VideoContainer>
          <video
            ref={videoRef}
            width={200}   // 320 / 1.5 = ~213
            height={80}  // 180 / 1.5 = ~120
            autoPlay
            muted
            loop
            playsInline
            onError={handleVideoError}
            onLoadedData={handleVideoLoaded}
          >
            <source src="/images/OtherPictures/Logos/Start_Short_Video.mp4" type="video/mp4" />
            Ваш браузер не підтримує відеотег.
          </video>
      </VideoContainer>
        {/* <LogoText>Schönwalde (Spreewald)</LogoText> */}
        <LogoText>Schönwald (Brandenburg)</LogoText>
      </LogoBtn>

      <IconSearch />
    </MenuWrapper>
  );
}

export default Header;

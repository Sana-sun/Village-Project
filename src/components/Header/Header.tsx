// import { useRef, useState } from "react";
// import { LogoBtn, LogoText, MenuWrapper, VideoContainer } from "./styles";
// import BurgerMenuIcon from "../BurgerMenuIcon/BurgerMenuIcon";
// import SearchIcon from "../SearchIcon/SearchIcon";

// function Header() {
//   const [_, setVideoFailed] = useState(false);
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
//       <BurgerMenuIcon />

//       <LogoBtn onClick={handleHomePage}>
//         <VideoContainer>
//           <video
//             ref={videoRef}
//             width={160} // 320 / 1.5 = ~213
//             height={60} // 180 / 1.5 = ~120
//             autoPlay
//             muted
//             loop
//             playsInline
//             onError={handleVideoError}
//             onLoadedData={handleVideoLoaded}
//             disablePictureInPicture
//             controlsList="nodownload"
//           >
//             <source
//               src="/images/OtherPictures/Logos/Start_Short_Video.mp4"
//               type="video/mp4"
//             />
//             Ihr Browser unterstützt das Video-Tag nicht
//           </video>
//         </VideoContainer>
//         <LogoText>Schönwald (Spreewald)</LogoText>
//       </LogoBtn>

//       <SearchIcon />
//     </MenuWrapper>
//   );
// }

// export default Header;


// + Barrierefreiheit
import { useRef, useState } from "react";
import { LogoBtn, LogoText, MenuWrapper, VideoContainer } from "./styles";
import BurgerMenuIcon from "../BurgerMenuIcon/BurgerMenuIcon";
import SearchIcon from "../SearchIcon/SearchIcon";

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
    <MenuWrapper role="navigation" aria-label="Hauptnavigation">
      <BurgerMenuIcon />

      <LogoBtn
        onClick={handleHomePage}
        aria-label="Zur Startseite zurückkehren"
        title="Zur Startseite zurückkehren"
      >
        <VideoContainer>
          <video
            ref={videoRef}
            width={160}
            height={60}
            autoPlay
            muted
            loop
            playsInline
            onError={handleVideoError}
            onLoadedData={handleVideoLoaded}
            disablePictureInPicture
            controlsList="nodownload"
            aria-hidden="true" // відео лише декоративне
          >
            <source
              src="/images/OtherPictures/Logos/Start_Short_Video.mp4"
              type="video/mp4"
            />
            Ihr Browser unterstützt das Video-Tag nicht.
          </video>
        </VideoContainer>

        <LogoText
          aria-hidden="false"
          role="heading"
          aria-level={1}
        >
          Schönwald (Spreewald)
        </LogoText>
      </LogoBtn>

      <SearchIcon />
    </MenuWrapper>
  );
}

export default Header;

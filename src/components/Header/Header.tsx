import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { LanguageBox, LogoBtn, LogoImage, MenuWrapper } from "./styles";
import { FaGlobe } from "react-icons/fa";

function Header() {
  const handleHomePage = () => {
    window.location.href = "/";
  };

  return (
    <>
      <MenuWrapper>
        <BurgerMenu />

        <LogoBtn onClick={handleHomePage}>
          <LogoImage
            // src="public/images/OtherPictures/Logos/Logo.png"
            src="/images/OtherPictures/Logos/Logo.png"
            alt="Logo"
            title="Klicken Sie auf mich, um zur Startseite zu gelangen"
          />
        </LogoBtn>

        <LanguageBox><FaGlobe /></LanguageBox>
        
      </MenuWrapper>
    </>
  );
}

export default Header;

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import IconSearch from "../IconSearch/IconSearch";
import { LogoBtn, LogoImage, MenuWrapper } from "./styles";

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
            src="/images/OtherPictures/Logos/Logo.png"
            alt="Logo"
            title="Klicken Sie auf mich, um zur Startseite zu gelangen"
          />
          <div>Schönwalde (Spreewald)</div>
        </LogoBtn>

        <IconSearch />
      </MenuWrapper>
    </>
  );
}

export default Header;

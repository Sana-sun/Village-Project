import type { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { LayoutWrapper, MainContent, ScrollButton } from "./styles";
import { FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true); // Показуємо кнопку, коли прокручено більше ніж 200px
    } else {
      setIsVisible(false); // Сховуємо кнопку, коли ми на верху
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Викликаємо handleScroll при зміні прокрутки
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LayoutWrapper>
      <Header />
      <MainContent>{children}</MainContent>

      {/* Кнопка для прокручування наверх */}
      {isVisible && (
        <ScrollButton onClick={scrollToTop}>
          <FaChevronUp />
        </ScrollButton>
      )}

      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;

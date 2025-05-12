import type { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { LayoutWrapper, MainContent } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <LayoutWrapper>
      <Header />

      <MainContent>{children}</MainContent>

      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;

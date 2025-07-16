// import type { ReactNode } from "react";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
// import { LayoutWrapper, MainContent } from "./styles";

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout = ({ children }: LayoutProps) => {

//   return (
//     <LayoutWrapper>

//       <Header />
//       {/* <img src="/images/StartSeite/1.jpg" alt="" /> */}

//       <MainContent>{children}</MainContent>

//         {/* <MainCarousel /> */}

//       <Footer />
//     </LayoutWrapper>
//   );
// };

// export default Layout;

// 2
// import type { ReactNode } from "react";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
// import { LayoutWrapper, MainContent } from "./styles";
// import { useLocation } from "react-router-dom";

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout = ({ children }: LayoutProps) => {
// const location = useLocation();
//   const isHome = location.pathname === "/";

//   return (
//     <LayoutWrapper>

//       <Header />

//       <MainContent $noMargin={isHome}>{children}</MainContent>

//       <Footer />
//     </LayoutWrapper>
//   );
// };

// export default Layout;

// + Barrierefreiheit
import type { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { LayoutWrapper, MainContent } from "./styles";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <LayoutWrapper>
      <Header />

      <MainContent id="main-content" $noMargin={isHome}>
        {children}
      </MainContent>

      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;

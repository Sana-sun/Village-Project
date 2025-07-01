import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { DataProvider } from "./context/DataContext";

import Layout from "./components/Layout/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import Impressum from "./pages/Impressum/Impressum";
import BauLand from "./pages/BauLandPage/BauLand";
import EducationPage from "./pages/EducationPage/EducationPage";
import HomePage from "./pages/HomePage/HomePage";
import MunicipalityPage from "./pages/VerwaltungPage/VerwaltungPage";
import NatureLeisurePage from "./pages/NaturePage/NatureLeisurePage";
import TransportPage from "./pages/VerkehrPage/TransportPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import HistoryPage from "./pages/HomePage/HistoryPage/HistoryPage";
import ServicesPage from "./pages/TradeServicesPage/ServicesPage";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <DataProvider>
        <Router>
        <ScrollToTop />
  
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/history" element={<HistoryPage />} />

              <Route path="/baugrundstücke" element={<BauLand />} />

              <Route path="/bildung-&-gemeinschaft" element={<EducationPage />} />

              <Route path="/gemeinde-&-verwaltung" element={<MunicipalityPage />} />

              <Route path="/handwerkgewerbe-&-dienstleistungen" element={<ServicesPage />} />

              <Route path="/natur-&-freizeit" element={<NatureLeisurePage />} />

              <Route path="/verkehr-&-infrastruktur" element={<TransportPage />} />

              <Route path="/impressum" element={<Impressum />} />
              {/* 404 */}
              <Route path="*" element={<div>Page not found!</div>} />
            </Routes>
          </Layout>
        </Router>
      </DataProvider>
    </>
  );
}



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { DataProvider } from "./context/DataContext";

// import Layout from "./components/Layout/Layout";
// import GlobalStyles from "./styles/GlobalStyles";
// import Impressum from "./pages/Impressum/Impressum";
// import BauLand from "./pages/BauLandPage/BauLand";
// import EducationPage from "./pages/EducationPage/EducationPage";
// import HomePage from "./pages/HomePage/HomePage";
// import MunicipalityPage from "./pages/VerwaltungPage/VerwaltungPage";
// import NatureLeisurePage from "./pages/NaturePage/NatureLeisurePage";
// import TradeServicesPage from "./pages/TradeServicesPage/TradeServicesPage";
// import TransportPage from "./pages/VerkehrPage/TransportPage";
// import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// // sub categories for tradeService page
// import Bau from "./pages/TradeServicesPage/Bau/BauLand";
// import LebensmittelGenuss from "./pages/TradeServicesPage/LebensmittelGenuss/LebensmittelGenuss";
// import EnergieUmwelt from "./pages/TradeServicesPage/EnergieUmwelt/EnergieUmwelt";
// import Kfz from "./pages/TradeServicesPage/Kfz/Kfz";
// import LandwirtschaftImkerei from "./pages/TradeServicesPage/LandwirtschaftImkerei/LandwirtschaftImkerei";
// import PflegeSchoenheitBetreuung from "./pages/TradeServicesPage/PflegeBetreuung.tsx/PflegeBetreuung";
// import TechnischeDienstleistungen from "./pages/TradeServicesPage/TechnischeDienstleistungen/TechnischeDienstleistungen";
// import AllSubCategories from "./pages/TradeServicesPage/AllSubCategories/AllSubCategories";
// import Schoenheit from "./pages/TradeServicesPage/Schoenheit.tsx/Schoenheit";
// import HistoryPage from "./pages/HomePage/HistoryPage/HistoryPage";
// import ServicesPage from "./pages/TradeServicesPage/ServicesPage";

// export default function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <DataProvider>
//         <Router>
//         <ScrollToTop />
  
//           <Layout>
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/history" element={<HistoryPage />} />

//               <Route path="/baugrundstücke" element={<BauLand />} />

//               <Route path="/bildung-&-gemeinschaft" element={<EducationPage />} />

//               <Route path="/gemeinde-&-verwaltung" element={<MunicipalityPage />} />

//               <Route path="/handwerkgewerbe-&-dienstleistungen" element={<ServicesPage />} >
//                 <Route path="landwirtschaft-&-imkerei" element={<LandwirtschaftImkerei />} />
//                 <Route path="kfz" element={<Kfz />} />
//                 <Route path="lebensmittel-&-genuss" element={<LebensmittelGenuss />} />
//                 <Route path="pflege-&-betreuung" element={<PflegeSchoenheitBetreuung />} />
//                 <Route path="schoenheit" element={<Schoenheit />} />
//                 <Route path="bau-&-renovierung" element={<Bau />} />
//                 <Route path="technische-dienstleistungen" element={<TechnischeDienstleistungen />} />
//                 <Route path="energie-&-umwelt" element={<EnergieUmwelt />} />
//               </Route>

//               <Route path="/natur-&-freizeit" element={<NatureLeisurePage />} />

//               <Route path="/verkehr-&-infrastruktur" element={<TransportPage />} />

//               <Route path="/impressum" element={<Impressum />} />
//               {/* 404 */}
//               <Route path="*" element={<div>Page not found!</div>} />
//             </Routes>
//           </Layout>
//         </Router>
//       </DataProvider>
//     </>
//   );
// }



// <Route path="/" element={<HomePage />} />
//               <Route path="/history" element={<HistoryPage />} />
//               <Route path="/education" element={<EducationPage />} />
//               <Route path="/municipality" element={<MunicipalityPage />} />
//               <Route path="/tradeServices" element={<ServicesPage />} >
//               {/* <Route path="/tradeServices" element={<TradeServicesPage />} > */}
//                 <Route path="all-services" element={<AllSubCategories />} />
//                 <Route path="landwirtschaft-&-imkerei" element={<LandwirtschaftImkerei />} />
//                 <Route path="kfz" element={<Kfz />} />
//                 <Route path="lebensmittel-&-genuss" element={<LebensmittelGenuss />} />
//                 <Route path="pflege-&-betreuung" element={<PflegeSchoenheitBetreuung />} />
//                 <Route path="schoenheit" element={<Schoenheit />} />
//                 <Route path="bau-&-renovierung" element={<Bau />} />
//                 <Route path="technische-dienstleistungen" element={<TechnischeDienstleistungen />} />
//                 <Route path="energie-&-umwelt" element={<EnergieUmwelt />} />
//               </Route>
//               <Route path="/leisure" element={<NatureLeisurePage />} />
//               <Route path="/transport" element={<TransportPage />} />
//               <Route path="/bauLand" element={<BauLand />} />
//               <Route path="/impressum" element={<Impressum />} />
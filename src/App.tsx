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

// import HistoryPage from "./pages/HomePage/HistoryPage/HistoryPage";
import ServicesPage from "./pages/TradeServicesPage/ServicesPage";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <DataProvider>
        <Router>
  
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/history" element={<HistoryPage />} /> */}

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



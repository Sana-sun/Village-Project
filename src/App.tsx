import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import Impressum from "./pages/Impressum/Impressum";
import BauLand from "./pages/BauLandPage/BauLand";
import EducationPage from "./pages/EducationPage/EducationPage";
import HomePage from "./pages/HomePage/HomePage";
import MunicipalityPage from "./pages/MunicipalityPage/MunicipalityPage";
import NatureLeisurePage from "./pages/NatureLeisurePage/NatureLeisurePage";
import TradeServicesPage from "./pages/TradeServicesPage/TradeServicesPage";
import TransportPage from "./pages/TransportInfrastructurePage/TransportPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
      <ScrollToTop />

        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/municipality" element={<MunicipalityPage />} />
            <Route path="/tradeServices" element={<TradeServicesPage />} />
            <Route path="/leisure" element={<NatureLeisurePage />} />
            <Route path="/transport" element={<TransportPage />} />
            <Route path="/bauLand" element={<BauLand />} />
            <Route path="/impressum" element={<Impressum />} />
            {/* 404 */}
            <Route path="*" element={<div>Page not found!</div>} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;

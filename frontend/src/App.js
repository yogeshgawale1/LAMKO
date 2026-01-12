import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CEOMessage } from "./pages/CEOMessage";
import { OrganisationChart } from "./pages/OrganisationChart";
import { Services } from "./pages/Services";
import { MaterialsRD } from "./pages/services/MaterialsRD";
import { Production } from "./pages/services/Production";
import { Integrated } from "./pages/services/Integrated";
import { Capabilities } from "./pages/Capabilities";
import { RD } from "./pages/capabilities/RD";
import { Purifications } from "./pages/capabilities/Purifications";
import { Facility } from "./pages/capabilities/Facility";
import { ProductionPlants } from "./pages/capabilities/ProductionPlants";
import { Industries } from "./pages/Industries";
import { Semiconductor } from "./pages/industries/Semiconductor";
import { Display } from "./pages/industries/Display";
import { SpecialtyChemicals } from "./pages/industries/SpecialtyChemicals";
import { PersonalCare } from "./pages/industries/PersonalCare";
import { Brands } from "./pages/Brands";
import { GetInTouch } from "./pages/GetInTouch";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ceo-message" element={<CEOMessage />} />
          <Route path="/organisation-chart" element={<OrganisationChart />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/materials-rd" element={<MaterialsRD />} />
          <Route path="/services/production" element={<Production />} />
          <Route path="/services/integrated" element={<Integrated />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/capabilities/rd" element={<RD />} />
          <Route path="/capabilities/purifications" element={<Purifications />} />
          <Route path="/capabilities/facility" element={<Facility />} />
          <Route path="/capabilities/production-plants" element={<ProductionPlants />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/semiconductor" element={<Semiconductor />} />
          <Route path="/industries/display" element={<Display />} />
          <Route path="/industries/specialty-chemicals" element={<SpecialtyChemicals />} />
          <Route path="/industries/personal-care" element={<PersonalCare />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;

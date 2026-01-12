import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { MaterialsRD } from "./pages/services/MaterialsRD";
import { Production } from "./pages/services/Production";
import { Integrated } from "./pages/services/Integrated";
import { Capabilities } from "./pages/Capabilities";
import { Industries } from "./pages/Industries";
import { Semiconductor } from "./pages/industries/Semiconductor";
import { Display } from "./pages/industries/Display";
import { SpecialtyChemicals } from "./pages/industries/SpecialtyChemicals";
import { PersonalCare } from "./pages/industries/PersonalCare";
import { Brands } from "./pages/Brands";
import { LumoraBrand } from "./pages/brands/LumoraBrand";
import { Contact } from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/materials-rd" element={<MaterialsRD />} />
          <Route path="/services/production" element={<Production />} />
          <Route path="/services/integrated" element={<Integrated />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/semiconductor" element={<Semiconductor />} />
          <Route path="/industries/display" element={<Display />} />
          <Route path="/industries/specialty-chemicals" element={<SpecialtyChemicals />} />
          <Route path="/industries/personal-care" element={<PersonalCare />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/lumora" element={<LumoraBrand />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;

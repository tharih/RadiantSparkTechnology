import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TackgramRules from "./pages/TackgramRules";
import TermsofServices from "./pages/TermsofServices";
import Verification from "./pages/Verification";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/termsofservices" element={<TermsofServices />} />
        <Route path="/privacyPolicy" exact element={<PrivacyPolicy />} />
        <Route path="/tackgramrules" element={<TackgramRules />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

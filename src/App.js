import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Player /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="Projects" exact element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

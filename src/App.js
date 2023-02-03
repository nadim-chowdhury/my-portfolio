import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Services from "./components/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Header />
        <About />
        <Body />
        <Projects />
        <Services />
        <Hobbies />
        <Education />
        <Certificates />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

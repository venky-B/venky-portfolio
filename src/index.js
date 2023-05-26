import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const AppLayout = () => (
  <>
    <Header />
    {/* <Nav /> */}
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

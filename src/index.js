import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Education  from "./pages/Education";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "../src/components/Footer"
function App() {
  return (
    <>
      <Header />
      <main className="pt-20"> 
        <Home />
        <About />
        <Education />
        <Skills />
       <Project/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

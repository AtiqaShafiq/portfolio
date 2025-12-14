// src/pages/MainPage.jsx
import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Project";
import Contact from "./Contact";
import Footer from "../components/Footer"

export default function MainPage() {
  return (
    <>
      <Header />

      <main className="pt-24">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
       <Footer />
    </>
  );
}

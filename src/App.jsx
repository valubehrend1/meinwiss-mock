import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Search from "./components/Search.jsx";
import Card from "./components/Card.jsx";
import IframeBlock from "./components/IframeBlock.jsx";
import Footer from "./components/Footer.jsx";

const CARDS = [
  { title: "Selbsttest: Wie schülerfreundlich sind eure Sitzungen?",
    excerpt: "Bewertet eure SV-Sitzungen und findet heraus, wo ihr nachschärfen könnt." },
  { title: "SV-Quiz (Brandenburg)",
    excerpt: "Erstellt euren eigenen Fahrplan Schritt für Schritt – mit Ausfüllvorlage." },
  { title: "Leitfaden: SV-Alltag organisieren",
    excerpt: "Tools, Rollen und Abläufe für eure tägliche Arbeit." }
];

export default function App(){
  return (
    <div className="page topo">
      <Header/>

      <main>
        <Hero/>

        <section className="pre-grid">
          <div className="pre-grid-inner">
            <div className="cards">
              {CARDS.map((c, i) => <Card key={i} {...c} />)}
            </div>
            <div className="search-col">
              <Search/>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Iframe de prueba</h2>
          <IframeBlock/>
        </section>
      </main>

      <Footer/>
    </div>
  );
}

import React from "react";

export default function Header(){
  return (
    <header className="header">
      <div className="header-inner">
        <a className="brand" href="/">
          <div className="brand-logo">SV</div>
          <span className="brand-name">Mein SV Wissen</span>
        </a>
        <nav className="nav" aria-label="Hauptmenü">
          <a href="#">Wissen</a>
          <a href="#">Tools</a>
          <a href="#">Über uns</a>
        </nav>
      </div>
    </header>
  );
}

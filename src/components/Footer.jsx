import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-inner">
        © {new Date().getFullYear()} — Mock basado en captura. Solo para pruebas de iframe.
      </div>
    </footer>
  );
}

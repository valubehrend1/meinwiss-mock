import React from "react";

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="kicker">MEIN SV-WISSEN</div>
        <h1 className="headline">
          Schülervertretung <br/>– <em>so geht's!</em>
        </h1>
        <p className="subhead">
          Alle wichtigen Tricks, Tools und Tipps für mehr Mitbestimmung
          und Schülerbeteiligung an deiner Schule
        </p>
        <div className="help">
          <div className="dot">?</div>
          <span>Hilfe</span>
        </div>
      </div>

      <div className="steps">
        <div className="step step--teal">
          <b>Grundlagen</b>
          <small>●</small>
        </div>
        <div className="step step--sand" style={{ marginLeft: "40px" }}>
          <b>SV-Alltag</b>
          <small>👥</small>
        </div>
        <div className="step step--red" style={{ marginLeft: "80px" }}>
          <b>Für Fortgeschrittene</b>
          <small>🗂</small>
        </div>
        <div className="step step--blue" style={{ marginLeft: "120px" }}>
          <b>Für Profis</b>
          <small>🖊</small>
        </div>
      </div>
    </section>
  );
}

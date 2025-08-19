import React from "react";

export default function Search(){
  return (
    <aside className="search">
      <label htmlFor="q">SUCHE</label>
      <input id="q" type="search" placeholder="Suche" />
    </aside>
  );
}

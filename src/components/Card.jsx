import React from "react";

export default function Card({ title, excerpt }){
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </article>
  );
}

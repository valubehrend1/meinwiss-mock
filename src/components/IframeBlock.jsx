import React from "react";

function getSrc() {
  const p = new URLSearchParams(window.location.search).get("src");
  return p || import.meta.env.VITE_IFRAME_SRC || "https://example.com";
}

export default function IframeBlock(){
  const src = getSrc();
  return (
    <div className="iframe-wrap">
      <p style={{margin:"0 0 8px 0", color:"#6b7280"}}>
        Cambia la URL del iframe con <code>?src=&lt;URL&gt;</code> o usa <code>VITE_IFRAME_SRC</code> en <code>.env.local</code>.
      </p>
      <div className="ratio">
        <iframe title="iframe-demo" src={src}
          loading="lazy"
          allow="clipboard-write; geolocation; microphone; camera; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}

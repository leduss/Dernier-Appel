import React from "react";
import "./empreinte.css";

function Empreinte() {
  return (
    <div className="container__empreinte">
      <div className="scan">
        <div className="fingerprint" />
        <h3>Scanning...</h3>
      </div>
    </div>
  );
}

export default Empreinte;

import React from "react";
import Planetes from "../../tools/data";
import "./SlidePlanetes.css";

function SlidePlanetes() {
  return (
    <div className="planete">
      {Planetes.map((planete) => {
        return (
          <img
            className={`btn-planete${planete.id}`}
            // onClick=
            id={planete.id}
            src={planete.img}
            alt={planete.name}
            onKeyDown=""
            role="presentation"
          />
        );
      })}
    </div>
  );
}

export default SlidePlanetes;

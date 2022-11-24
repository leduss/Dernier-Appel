import React from "react";
import Planetes from "../tools/Planetes";
import "./SlidePlanetes.css";

function SlidePlanetes() {
  return (
    <div>
      <div className="planete">
        {Planetes.map((planete) => {
          if (planete.isHidden === false) {
            return (
              <img
                className="btn-planete"
                src={planete.img}
                alt={planete.name}
                onKeyDown=""
                role="presentation"
              />
            );
          }
          return (
            <img
              className="btn-planete"
              style={{ visibility: "hidden" }}
              src={planete.img}
              alt={planete.name}
            />
          );
        })}
        ;
      </div>
    </div>
  );
}

export default SlidePlanetes;

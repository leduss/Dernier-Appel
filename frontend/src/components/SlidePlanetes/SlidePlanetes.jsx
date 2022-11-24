import React, { useState } from "react";
import Planetes from "../../tools/Planetes";
import "./SlidePlanetes.css";

function SlidePlanetes() {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(!show);
  };

  return (
    <div className="planete">
      {Planetes.map((planete) => {
        return (
          <div>
            {show ? (
              <div className="titleover">{planete.planetName}</div>
            ) : null}

            <img
              className={`btn-planete${planete.id}`}
              onClick={handleMouseEnter}
              // onClick=
              id={planete.id}
              src={planete.img}
              alt={planete.planetName}
              onKeyDown=""
              role="presentation"
            />
          </div>
        );
      })}
    </div>
  );
}

export default SlidePlanetes;

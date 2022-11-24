import React, { useState } from "react";
import { PropTypes } from "prop-types";

function PlanetesItem({ planete }) {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(!show);
  };

  return (
    <div className="container__planet">
      <img
        className="btn-planete"
        onMouseEnter={handleMouseEnter}
        id={planete.id}
        src={planete.img}
        alt={planete.planetName}
        onKeyDown=""
        role="presentation"
      />
      {show ? <div className="planeteover">{planete.planetName}</div> : null}
    </div>
  );
}

PlanetesItem.propTypes = {
  planete: PropTypes.func.isRequired,
};

export default PlanetesItem;

import React, { useState } from "react";
import { PropTypes } from "prop-types";

function PlanetesItem({
  planete,
  setSelectedPlanet,
  setShowPlanet,
  showPlanet,
}) {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(!show);
  };
  const handleMouseLeave = () => {
    setShow(!show);
  };

  const handleClick = () => {
    setShowPlanet(!showPlanet);
  };

  return (
    <div className="container__planet">
      <img
        className="btn-planete"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          setSelectedPlanet(planete);
          handleClick();
        }}
        id={planete.id}
        src={planete.img}
        alt={planete.planetName}
        role="presentation"
      />
      {show ? <div className="titleover">{planete.planetName}</div> : null}
    </div>
  );
}

PlanetesItem.propTypes = {
  planete: PropTypes.func.isRequired,
  setSelectedPlanet: PropTypes.func.isRequired,
  setShowPlanet: PropTypes.func.isRequired,
  showPlanet: PropTypes.func.isRequired,
};

export default PlanetesItem;

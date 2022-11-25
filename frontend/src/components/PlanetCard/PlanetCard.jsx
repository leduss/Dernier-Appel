import React from "react";
import { PropTypes } from "prop-types";
import PlanetStat from "./PlanetStat";
import "./PlanetCard.css";

function PlanetCard({ selectedPlanet, showPlanet }) {
  return (
    <div
      className="planet__detail__stats__container"
      style={{ display: showPlanet ? "block" : "none" }}
    >
      <p className="title">{selectedPlanet.planetName}</p>
      <div className="planet__details">
        <img src={selectedPlanet.photo01} alt={selectedPlanet.planetName} />
        {selectedPlanet &&
          selectedPlanet.stat.map((stat) => (
            <PlanetStat
              name={stat.category}
              category={stat.category}
              level={stat.level}
            />
          ))}
        <p className="price">{selectedPlanet.price}$</p>
      </div>
    </div>
  );
}

PlanetCard.propTypes = {
  selectedPlanet: PropTypes.func.isRequired,
  showPlanet: PropTypes.bool.isRequired,
};

export default PlanetCard;

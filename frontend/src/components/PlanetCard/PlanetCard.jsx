import React from "react";
import { PropTypes } from "prop-types";
import PlanetStat from "./PlanetStat";
import "./PlanetCard.css";

function PlanetCard({ selectedPlanet }) {
  return (
    <div className="planet__detail__stats__container">
      <p className="title">{selectedPlanet.planetName}</p>
      <div className="planet__details">
        <img src={selectedPlanet.img} alt={selectedPlanet.planetName} />
        {selectedPlanet.stat.map((stat) => (
          <PlanetStat
            name={stat.category}
            category={stat.category}
            level={stat.level}
          />
        ))}
      </div>
    </div>
  );
}

PlanetCard.propTypes = {
  selectedPlanet: PropTypes.func.isRequired,
};

export default PlanetCard;

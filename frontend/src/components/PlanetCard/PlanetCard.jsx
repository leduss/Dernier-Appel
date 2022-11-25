import React from "react";
import { PropTypes } from "prop-types";
import PlanetStat from "./PlanetStat";
import "./PlanetCard.css";
import bouton from "../../assets/img/cartes/BoutonAllonsy.png";

function PlanetCard({ selectedPlanet, showPlanet, priceLevel }) {
  return (
    <div
      className="planet__detail__stats__container"
      style={{ display: showPlanet ? "block" : "none" }}
    >
      <p className="title">{selectedPlanet.planetName}</p>
      <div className="planet__details">
        <p>{selectedPlanet.darkFriday}</p>
        <img src={selectedPlanet.photo01} alt={selectedPlanet.planetName} />
        {selectedPlanet &&
          selectedPlanet.stat.map((stat) => (
            <PlanetStat
              name={stat.category}
              category={stat.category}
              level={stat.level}
            />
          ))}
        <p
          className={
            selectedPlanet.price === "soldout" ? "priceSoldOut" : "price"
          }
        >
          {selectedPlanet.price === "soldout"
            ? "Sold Out"
            : `${selectedPlanet.price + priceLevel}$`}
        </p>
      </div>
      <div className="go">
        <img src={bouton} alt="Allons-Y" />
      </div>
    </div>
  );
}

PlanetCard.propTypes = {
  selectedPlanet: PropTypes.func.isRequired,
  showPlanet: PropTypes.bool.isRequired,
  priceLevel: PropTypes.bool.isRequired,
};

export default PlanetCard;

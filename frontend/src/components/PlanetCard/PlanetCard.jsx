import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import PlanetStat from "./PlanetStat";
import "./PlanetCard.css";
import bouton from "../../assets/img/cartes/BoutonAllonsy.png";
import PicClosePlanetsButton from "../../assets/img/cartes/bouttonClose.png";

function PlanetCard({
  selectedPlanet,
  showPlanet,
  priceLevel,
  setShowPlanet,
  population,
}) {
  const handleClick = () => {
    setShowPlanet(false);
  };

  return (
    <div
      className="planet__detail__stats__container"
      style={{ display: showPlanet ? "block" : "none" }}
    >
      <div className="buttonClose">
        <img
          src={PicClosePlanetsButton}
          alt="buttonClose"
          className="PlanetButtonClose"
          onClick={() => handleClick()}
          role="presentation"
        />
      </div>
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
              population={population}
            />
          ))}
        <p
          className={
            selectedPlanet && selectedPlanet.stat[0].level - population <= 0
              ? "priceSoldOut"
              : "price"
          }
        >
          {selectedPlanet && selectedPlanet.stat[0].level - population <= 0
            ? "Sold Out"
            : `${selectedPlanet.price + priceLevel}$`}
        </p>
      </div>
      <Link to={`/planets/${selectedPlanet.id - 1}`}>
        <div className="go">
          <img src={bouton} alt="Allons-Y" />
        </div>
      </Link>
    </div>
  );
}

PlanetCard.propTypes = {
  selectedPlanet: PropTypes.func.isRequired,
  showPlanet: PropTypes.bool.isRequired,
  priceLevel: PropTypes.bool.isRequired,
  setShowPlanet: PropTypes.bool.isRequired,
  population: PropTypes.bool.isRequired,
};

export default PlanetCard;

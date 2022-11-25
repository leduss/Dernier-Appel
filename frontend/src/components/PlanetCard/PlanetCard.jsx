import React from "react";
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import PlanetStat from "./PlanetStat";
import "./PlanetCard.css";
import bouton from "../../assets/img/cartes/BoutonAllonsy.png";

function PlanetCard({ selectedPlanet, showPlanet, priceLevel }) {
  const variants = {
    open: {
      x: 0,
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        repeat: 0,
        delay: 0,
        type: "spring",
        stiffness: 200,
        damping: 25,
      },
    },
    close: {
      x: 800,
      rotate: 20,
      scale: 0,
      opacity: 0,
    },
  };
  return (
    <motion.div
      whileHover={{ scale: 1.0, rotate: 0, y: 0 }}
      variants={variants}
      animate={showPlanet ? "open" : "close"}
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
        <motion.img
          whileHover={{ scale: 1.2, rotate: -4, y: 0 }}
          src={bouton}
          alt="Allons-Y"
        />
      </div>
    </motion.div>
  );
}

PlanetCard.propTypes = {
  selectedPlanet: PropTypes.func.isRequired,
  showPlanet: PropTypes.bool.isRequired,
  priceLevel: PropTypes.bool.isRequired,
};

export default PlanetCard;

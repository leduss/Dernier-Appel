import React from "react";
import PlanetStat from "./PlanetStat";
import "./PlanetCard.css";
import Planetes from "../../tools/Planetes";

function PlanetCard() {
  return (
    <div className="planet__detail__stats__container">
      <p className="title">{Planetes[4].planetName}</p>
      <div className="planet__details">
        <img src={Planetes[4].img} alt={Planetes[4].name} />
        {Planetes[4].stat.map((stat) => (
          <PlanetStat
            name={stat.category}
            category={stat.category}
            level={stat.level}
          />
        ))}
        <p>{Planetes[4].id}$</p>
      </div>
    </div>
  );
}

export default PlanetCard;

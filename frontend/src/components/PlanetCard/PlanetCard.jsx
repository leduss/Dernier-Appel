import React from "react";
import PlanetStat from "./PlanetStat";
import tatooine from "../../assets/img/planetes/Tatooine/tatooine_planete.png";
import "./PlanetCard.css";

function PlanetCard() {
  const planete = {
    id: 9,
    name: "tatooine",
    img: tatooine,
    isHidden: false,
    stat: [
      { category: "Places restantes", level: 60 },
      { category: "Danger", level: 50 },
      { category: "Temps de résistance à l'homme", level: 20 },
      { category: "Habitabilité - Confort", level: 70 },
    ],
  };

  return (
    <div className="pokemon__detail__stats__container">
      <p>{planete.name}</p>
      <img src={planete.img} alt={planete.name} />
      {planete.stat.map((stat) => (
        <PlanetStat
          name={stat.category}
          category={stat.category}
          level={stat.level}
        />
      ))}
    </div>
  );
}

export default PlanetCard;

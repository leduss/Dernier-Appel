import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./PlanetStat.css";

// eslint-disable-next-line react/prop-types
function PlanetStat({ category, level }) {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    switch (category) {
      case "Places restantes":
        setBackgroundColor("red");
        break;
      case "Danger":
        setBackgroundColor("green");
        break;
      case "Temps de résistance à l'homme":
        setBackgroundColor("yellow");
        break;
      case "Habitabilité - Confort":
        setBackgroundColor("orange");
        break;
      default:
        setBackgroundColor("red");
    }
  }, [category]);

  return (
    <div className="planet__stats__details">
      <p>{category}</p>
      <div className="planet__stats__details__outter">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          exit={{ width: 0 }}
          transition={{ duration: 1 }}
          className="planet__stats__details__inner"
          style={{
            width: `${level}%`,
            backgroundColor,
          }}
        />
        <span>{level}</span>
      </div>
    </div>
  );
}

export default PlanetStat;

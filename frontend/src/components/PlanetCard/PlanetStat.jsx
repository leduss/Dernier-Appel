/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./PlanetStat.css";

// eslint-disable-next-line react/prop-types
function PlanetStat({ category, level, population }) {
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
          animate={{
            width: `${
              // eslint-disable-next-line no-nested-ternary
              category === "Places restantes"
                ? level > population
                  ? level - population
                  : 0
                : level
            }%`,
          }}
          exit={{ width: 0 }}
          transition={{ duration: 2 }}
          className="planet__stats__details__inner"
          style={{
            width: `${
              // eslint-disable-next-line no-nested-ternary
              category === "Places restantes"
                ? level > population
                  ? level - population
                  : 0
                : level
            }%`,
            backgroundColor,
          }}
        />
        <span>
          {category === "Places restantes"
            ? level > population
              ? level - population
              : 0
            : level}
        </span>
      </div>
    </div>
  );
}

export default PlanetStat;

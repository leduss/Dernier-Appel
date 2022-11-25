import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./PlanetStat.css";

// eslint-disable-next-line react/prop-types
function PlanetStat({ category, level }) {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    switch (category) {
      case "Places restantes":
        setBackgroundColor("#218721");
        break;
      case "Danger":
        setBackgroundColor("#9f1010");
        break;
      case "Temps de résistance à l'homme":
        setBackgroundColor("#005200");
        break;
      case "Habitabilité - Confort":
        setBackgroundColor("#0131b4");
        break;
      default:
        setBackgroundColor("#fe8306");
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
          transition={{ duration: 2 }}
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

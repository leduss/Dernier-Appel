import React, { useEffect, useState } from "react";
import "./Chrono.css";
import { PropTypes } from "prop-types";

function Chrono({ priceLevel, setPriceLevel }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState("01");
  const [level, setLevel] = useState(-3);

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      setLevel(level + 1);
      if (level % 2 === 0) {
        setPriceLevel(priceLevel + 100);
      }
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (minutes === 0) {
        setHours(hours - 1);
        setMinutes(59);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="container__chrono">
      <h1 className="title__chrono">Dernier départ</h1>
      <h2 className="chrono">
        {hours < 10 ? hours : hours}:{minutes < 10 ? minutes : minutes}:
        {seconds < 10 ? seconds : seconds}
      </h2>
    </div>
  );
}

Chrono.propTypes = {
  setPriceLevel: PropTypes.func.isRequired,
  priceLevel: PropTypes.func.isRequired,
};

export default Chrono;

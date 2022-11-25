import React, { useEffect, useState } from "react";

function Chrono() {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(23);
  const [level, setLevel] = useState(-3);
  const [priceLevel, setPriceLevel] = useState(0);

  let timer;
  const price = 1000;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      setLevel(level + 1);
      if (level % 5 === 0) {
        setPriceLevel(priceLevel + 10);
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
    <div>
      <h1>Chrono</h1>
      <h2>
        {hours < 10 ? hours : hours} : {minutes < 10 ? minutes : minutes} :{" "}
        {seconds < 10 ? seconds : seconds}
      </h2>
      <h1>Price</h1>
      <h2>{price + priceLevel}</h2>
    </div>
  );
}

export default Chrono;

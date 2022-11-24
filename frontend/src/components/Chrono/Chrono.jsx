import React, { useEffect, useState } from "react";
import "./Chrono.css";

function Chrono() {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(23);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
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
      <h1 className="title__chrono">Le temps vous est compté</h1>
      <h2 className="chrono">
        {hours < 10 ? hours : hours} : {minutes < 10 ? minutes : minutes} :{" "}
        {seconds < 10 ? seconds : seconds}
      </h2>
    </div>
  );
}

export default Chrono;

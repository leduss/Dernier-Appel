import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import PlanetsDetails from "./components/PlanetsDetails/PlanetsDetails";

function Transition() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planets/:name" element={<PlanetsDetails />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Transition;

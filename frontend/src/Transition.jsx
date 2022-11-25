import React from "react";
import { Routes, Route } from "react-router-dom";
import { PropTypes } from "prop-types";
import Error from "./Error";
import Home from "./Home";
import PlanetsDetails from "./components/PlanetsDetails/PlanetsDetails";

function Transition({ priceLevel, setPriceLevel }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home priceLevel={priceLevel} setPriceLevel={setPriceLevel} />}
      />
      <Route path="/planets/:id" element={<PlanetsDetails />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

Transition.propTypes = {
  setPriceLevel: PropTypes.func.isRequired,
  priceLevel: PropTypes.bool.isRequired,
};

export default Transition;

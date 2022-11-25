import PropTypes from "prop-types";
import React from "react";

function PlanetsTextDetails({ planetName, text, photo01, photo02 }) {
  return (
    <div className="planetDescription">
      <h1>{planetName}</h1>
      {/* <PlanetStat /> */}
      <p>{text}</p>
      <img src={photo01} alt={planetName} className="PlanetsDetailsPicture" />
      <img src={photo02} alt={planetName} className="PlanetsDetailsPicture" />
    </div>
  );
}
PlanetsTextDetails.propTypes = {
  planetName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  photo01: PropTypes.string.isRequired,
  photo02: PropTypes.string.isRequired,
};
export default PlanetsTextDetails;

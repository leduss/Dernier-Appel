import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import BgPicture from "./BgPicture";
import SidePlanet from "./SidePlanet";
import ClosePlanetsButton from "./ClosePlanetsButton";
import PlanetsTextDetails from "./PlanetsTextDetails";
import Autochtone from "./Autochtone";
import BuyButton from "./BuyButton";
import Planetes from "../../tools/Planetes";
import "./PlanetsDetails.css";
import PriceLevel from "./PriceLevel";

function PlanetsDetails({ priceLevel }) {
  const { id } = useParams();

  return (
    <div className="ConteneurDetails">
      <BgPicture />
      <SidePlanet img={Planetes[id].img} planetName={Planetes[id].planetName} />
      <Link to="/">
        <ClosePlanetsButton />
      </Link>
      <PlanetsTextDetails planete={Planetes[id]} priceLevel={priceLevel} />
      <Autochtone
        planetName={Planetes[id].planetName}
        perso={Planetes[id].perso}
      />
      <PriceLevel price={Planetes[id].price} priceLevel={priceLevel} />
      <BuyButton price={Planetes[id].price} />
    </div>
  );
}

PlanetsDetails.propTypes = {
  priceLevel: PropTypes.string.isRequired,
};

export default PlanetsDetails;

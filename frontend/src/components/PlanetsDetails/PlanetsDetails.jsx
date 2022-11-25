import React from "react";
import { Link, useParams } from "react-router-dom";
import BgPicture from "./BgPicture";
import SidePlanet from "./SidePlanet";
import ClosePlanetsButton from "./ClosePlanetsButton";
import PlanetsTextDetails from "./PlanetsTextDetails";
import Autochtone from "./Autochtone";
import BuyButton from "./BuyButton";
import Planetes from "../../tools/Planetes";

function PlanetsDetails() {
  const { id } = useParams();

  return (
    <div className="ConteneurDetails">
      <BgPicture />
      <SidePlanet img={Planetes[id].img} planetName={Planetes[id].planetName} />
      <Link to="/">
        <ClosePlanetsButton />
      </Link>
      <PlanetsTextDetails
        photo01={Planetes[id].photo01}
        photo02={Planetes[id].photo02}
        planetName={Planetes[id].planetName}
        text={Planetes[id].text}
      />
      <Autochtone
        planetName={Planetes[id].planetName}
        perso={Planetes[id].perso}
      />
      <BuyButton />
    </div>
  );
}

export default PlanetsDetails;

import React, { useState } from "react";
import { PropTypes } from "prop-types";
import BgvideoHome from "./components/Bgvideo/BgvideoHome";
import SlidePlanetes from "./components/SlidePlanetes/SlidePlanetes";
import logo from "./assets/img/logo/logo_global.png";
import "./Home.css";
import PlanetCard from "./components/PlanetCard/PlanetCard";
import Nav from "./components/Nav/Nav";

function Home({ priceLevel, setPriceLevel }) {
  const [selectedPlanet, setSelectedPlanet] = useState("");
  const [showPlanet, setShowPlanet] = useState(!true);

  return (
    <div>
      <img src={logo} className="logo" alt="logo" />
      <SlidePlanetes
        setSelectedPlanet={setSelectedPlanet}
        setShowPlanet={setShowPlanet}
        showPlanet={showPlanet}
      />
      <BgvideoHome />
      <PlanetCard
        selectedPlanet={selectedPlanet}
        showPlanet={showPlanet}
        priceLevel={priceLevel}
        setPriceLevel={setPriceLevel}
      />
      <Nav />
    </div>
  );
}

Home.propTypes = {
  setPriceLevel: PropTypes.func.isRequired,
  priceLevel: PropTypes.bool.isRequired,
};
export default Home;

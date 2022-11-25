import React, { useState } from "react";
import BgvideoHome from "./components/Bgvideo/BgvideoHome";
import Chrono from "./components/Chrono/Chrono";
import SlidePlanetes from "./components/SlidePlanetes/SlidePlanetes";
import logo from "./assets/img/logo/logo_global.png";
import Nav from "./components/Nav/Nav";
import "./Home.css";
import PlanetCard from "./components/PlanetCard/PlanetCard";

function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState("");
  const [showPlanet, setShowPlanet] = useState(!true);
  const [priceLevel, setPriceLevel] = useState(0);

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
      />
      <Chrono priceLevel={priceLevel} setPriceLevel={setPriceLevel} />
      <Nav />
    </div>
  );
}

export default Home;

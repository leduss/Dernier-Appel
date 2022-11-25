import React, { useState } from "react";
import BgvideoHome from "./components/Bgvideo/BgvideoHome";
import Chrono from "./components/Chrono/Chrono";
import SlidePlanetes from "./components/SlidePlanetes/SlidePlanetes";
import logo from "./assets/img/logo/logo_global.png";
import "./Home.css";
import PlanetCard from "./components/PlanetCard/PlanetCard";

function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState("");

  return (
    <div>
      <img src={logo} className="logo" alt="logo" />
      <SlidePlanetes setSelectedPlanet={setSelectedPlanet} />
      <BgvideoHome />
      <PlanetCard selectedPlanet={selectedPlanet} />
      <Chrono />
    </div>
  );
}

export default Home;

import React from "react";
import BgvideoHome from "./components/Bgvideo/BgvideoHome";
import Chrono from "./components/Chrono/Chrono";
import SlidePlanetes from "./components/SlidePlanetes/SlidePlanetes";
import logo from "./assets/img/logo/logo_global.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <img src={logo} className="logo" alt="logo" />
      <SlidePlanetes />
      <BgvideoHome />
      <Chrono />
    </div>
  );
}

export default Home;

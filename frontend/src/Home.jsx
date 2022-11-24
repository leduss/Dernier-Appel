import React from "react";
import BgvideoHome from "./components/Bgvideo/BgvideoHome";
import Chrono from "./components/Chrono/Chrono";
import SlidePlanetes from "./components/SlidePlanetes/SlidePlanetes";

function Home() {
  return (
    <div>
      <SlidePlanetes />
      <BgvideoHome />
      <Chrono />
    </div>
  );
}

export default Home;

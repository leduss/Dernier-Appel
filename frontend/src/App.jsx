import SlidePlanetes from "./components/SlidePlanetes/SlidePlanetes";
import Chrono from "./components/Chrono/Chrono";
import "./App.css";
import Bgvideohome from "./components/Bgvideo/BgvideoHome";

function App() {
  return (
    <div className="App">
      <Bgvideohome />
      <SlidePlanetes />
      <Chrono />
    </div>
  );
}

export default App;

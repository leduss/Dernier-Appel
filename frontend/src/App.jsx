import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Chrono from "./components/Chrono/Chrono";
import Transition from "./Transition";
import "./App.css";

function App() {
  const [priceLevel, setPriceLevel] = useState(0);
  return (
    <div className="App">
      <Router>
        <Transition priceLevel={priceLevel} setPriceLevel={setPriceLevel} />
        <Chrono priceLevel={priceLevel} setPriceLevel={setPriceLevel} />
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import Chrono from "./components/Chrono/Chrono";
import Transition from "./Transition";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Chrono />
        <Transition />
      </Router>
    </div>
  );
}

export default App;

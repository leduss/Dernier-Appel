import { BrowserRouter as Router } from "react-router-dom";
import Chrono from "./components/Chrono/Chrono";
import Transition from "./Transition";
import "./App.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Chrono />
        <Transition />
        <Nav />
      </Router>
    </div>
  );
}

export default App;

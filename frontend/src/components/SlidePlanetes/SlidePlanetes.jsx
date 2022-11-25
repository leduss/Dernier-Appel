import { PropTypes } from "prop-types";
import Planetes from "../../tools/Planetes";
import PlanetesItem from "./PlanetesItem";
import "./SlidePlanetes.css";

function SlidePlanetes({ setSelectedPlanet }) {
  return (
    <ul className="planete">
      {Planetes.map((planete) => (
        <li className="planeteItem">
          <PlanetesItem
            planete={planete}
            setSelectedPlanet={setSelectedPlanet}
          />
        </li>
      ))}
    </ul>
  );
}
SlidePlanetes.propTypes = {
  setSelectedPlanet: PropTypes.func.isRequired,
};

export default SlidePlanetes;

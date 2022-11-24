import Planetes from "../../tools/Planetes";
import PlanetesItem from "./PlanetesItem";
import "./SlidePlanetes.css";

function SlidePlanetes() {
  return (
    <ul className="planete">
      {Planetes.map((planete) => (
        <li className="planeteItem">
          <PlanetesItem planete={planete} />
        </li>
      ))}
    </ul>
  );
}

export default SlidePlanetes;

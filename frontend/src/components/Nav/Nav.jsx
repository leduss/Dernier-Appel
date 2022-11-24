import React from "react";
import Planetes from "../../tools/Planetes";
import NavBar from "./NavBar";
import "./nav.css";

function Nav() {
  return (
    <ul className="navbar__link">
      {Planetes.map((navigation) => (
        <li className="nav" id={navigation.name} key={navigation.id}>
          <NavBar navigation={navigation} />
        </li>
      ))}
    </ul>
  );
}

export default Nav;

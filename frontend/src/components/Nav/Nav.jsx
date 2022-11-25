import React from "react";
import { Link } from "react-router-dom";
import Planetes from "../../tools/Planetes";
import NavBar from "./NavBar";
import "./nav.css";

function Nav() {
  return (
    <ul className="navbar__link">
      {Planetes.map((navigation) => (
        <Link to={`/planets/${navigation.id - 1}`}>
          <li className="nav" id={navigation.name} key={navigation.id}>
            <NavBar navigation={navigation} />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Nav;

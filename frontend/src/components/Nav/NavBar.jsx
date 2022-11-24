import React from "react";
import { PropTypes } from "prop-types";

function NavBar({ navigation }) {
  return (
    <div className="container__navbar">
      <img className="img__navbar" src={navigation.img} alt="" />
      <div className="container__title">
        <h2 className="first__title__navbar">{navigation.planetName}</h2>
        <h4 className="second__title_navbar">{navigation.planetName}</h4>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  navigation: PropTypes.func.isRequired,
};

export default NavBar;

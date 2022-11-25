import React from "react";
import PropTypes from "prop-types";
import PicBuyButton from "../../assets/img/pagePlanetes/BoutonAchete.png";

function BuyButton({ price }) {
  return (
    <img
      src={PicBuyButton}
      alt="BuyButton"
      className={price === "soldout" ? "hidden" : "PlanetDetailBuyButton"}
    />
  );
}

BuyButton.propTypes = {
  price: PropTypes.string.isRequired,
};
export default BuyButton;

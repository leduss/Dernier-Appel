import React, { useState } from "react";
import PropTypes from "prop-types";
import Empreinte from "../empreinte/Empreinte";
import PicBuyButton from "../../assets/img/pagePlanetes/BoutonAchete.png";

function BuyButton({ price }) {
  const [popup, setPopup] = useState(false);
  const popupClick = () => {
    setPopup(!popup);
  };
  return (
    <div>
      <img
        src={PicBuyButton}
        alt="BuyButton"
        className={price === "soldout" ? "hidden" : "PlanetDetailBuyButton"}
        onClick={popupClick}
        role="presentation"
      />
      {popup ? <Empreinte /> : null}
    </div>
  );
}

BuyButton.propTypes = {
  price: PropTypes.string.isRequired,
};
export default BuyButton;

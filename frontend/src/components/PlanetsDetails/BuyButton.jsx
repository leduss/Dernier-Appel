import React, { useState } from "react";
import Empreinte from "../empreinte/Empreinte";
import PicBuyButton from "../../assets/img/pagePlanetes/BoutonAchete.png";

function BuyButton() {
  const [popup, setPopup] = useState(false);
  const popupClick = () => {
    setPopup(!popup);
  };
  return (
    <div>
      <img
        src={PicBuyButton}
        alt="BuyButton"
        className="PlanetDetailBuyButton"
        onClick={popupClick}
        role="presentation"
      />
      {popup ? <Empreinte /> : null}
    </div>
  );
}

export default BuyButton;

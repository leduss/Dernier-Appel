import React from "react";
import { motion } from "framer-motion";
import PicBuyButton from "../../assets/img/pagePlanetes/BoutonAchete.png";

function BuyButton() {
  return (
    <motion.img
      whileHover={{ scale: 1.2, rotate: -4, y: 0 }}
      src={PicBuyButton}
      alt="BuyButton"
      className="PlanetDetailBuyButton"
    />
  );
}

export default BuyButton;

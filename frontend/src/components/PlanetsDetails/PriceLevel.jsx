import React from "react";
import PropTypes from "prop-types";

function PriceLevel({ price, priceLevel }) {
  return (
    <p className={price === "soldout" ? "priceSoldOutDetail" : "priceDetail"}>
      {price === "soldout" ? "Sold Out" : `${price + priceLevel}$`}
    </p>
  );
}

PriceLevel.propTypes = {
  priceLevel: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default PriceLevel;

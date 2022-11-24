import React, { useState } from "react";
import { PropTypes } from "prop-types";

function PlanetesItem({ planete }) {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(!show);
  };

  return (
    <div>
      {show ? <div className="titleover">{planete.planetName}</div> : null}

      <img
        className={`btn-planete${planete.id}`}
        onMouseEnter={handleMouseEnter}
        // onClick=
        id={planete.id}
        src={planete.img}
        alt={planete.planetName}
        onKeyDown=""
        role="presentation"
      />
    </div>
  );
}

PlanetesItem.propTypes = {
  planete: PropTypes.func.isRequired,
};

export default PlanetesItem;

import React from "react";
import { Link, useParams } from "react-router-dom";

function PlanetsDetails() {
  const { name } = useParams();

  return (
    <div>
      <h1>{name}</h1>
      <Link to="/">
        <button type="button">home</button>
      </Link>
    </div>
  );
}

export default PlanetsDetails;
